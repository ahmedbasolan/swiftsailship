function escapeHtml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function buildEmailHtml(body) {
    var rows = [
        ['Name', body.fullname || body.name],
        ['Company', body.company],
        ['Email', body.email],
        ['Phone', body.phone],
        ['Service', body.service],
        ['Details', body.message]
    ];

    var tableRows = rows
        .filter(function (row) { return row[1]; })
        .map(function (row) {
            return '<tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:600;">'
                + escapeHtml(row[0])
                + '</td><td style="padding:8px 12px;border:1px solid #ddd;">'
                + escapeHtml(row[1]).replace(/\n/g, '<br/>')
                + '</td></tr>';
        })
        .join('');

    return ''
        + '<h2>New quote enquiry — Swift Sail website</h2>'
        + '<table style="border-collapse:collapse;width:100%;max-width:640px;">'
        + tableRows
        + '</table>'
        + '<p style="color:#666;font-size:12px;margin-top:16px;">Submitted at '
        + escapeHtml(new Date().toISOString())
        + '</p>';
}

async function sendQuoteEmail(body) {
    var apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        return { ok: false, reason: 'email_not_configured' };
    }

    var to = process.env.QUOTE_NOTIFICATION_EMAIL || 'info@swiftsailship.com';
    var from = process.env.RESEND_FROM || 'Swift Sail Website <onboarding@resend.dev>';
    var replyTo = body.email || undefined;
    var name = body.fullname || body.name || 'Website visitor';

    var response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from: from,
            to: [to],
            reply_to: replyTo,
            subject: 'New Quote Request — ' + name,
            html: buildEmailHtml(body)
        })
    });

    if (!response.ok) {
        var errorText = await response.text();
        console.error('Resend API error:', response.status, errorText);
        return { ok: false, reason: 'email_send_failed' };
    }

    return { ok: true };
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST, OPTIONS');
        res.status(405).json({ success: false, error: 'Method not allowed.' });
        return;
    }

    var body = req.body || {};

    if (body.website) {
        res.status(200).json({ success: true, message: 'Received.' });
        return;
    }

    if (!body.fullname && !body.name) {
        res.status(400).json({ success: false, error: 'Name is required.' });
        return;
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email).trim())) {
        res.status(400).json({ success: false, error: 'A valid email is required.' });
        return;
    }

    if (!body.service) {
        res.status(400).json({ success: false, error: 'Please select a service.' });
        return;
    }

    console.log('=== NEW QUOTE ENQUIRY RECEIVED ===');
    console.log('Name:    ', body.fullname || body.name || 'N/A');
    console.log('Company: ', body.company || 'N/A');
    console.log('Email:   ', body.email || 'N/A');
    console.log('Phone:   ', body.phone || 'N/A');
    console.log('Service: ', body.service || 'N/A');
    console.log('Message: ', body.message || 'N/A');
    console.log('==================================');

    var emailResult = await sendQuoteEmail(body);

    if (!emailResult.ok) {
        if (emailResult.reason === 'email_not_configured') {
            res.status(503).json({
                success: false,
                error: 'Quote notifications are not configured yet. Please call +971 55 342 4700 or email info@swiftsailship.com directly.'
            });
            return;
        }

        res.status(502).json({
            success: false,
            error: 'We could not deliver your enquiry. Please try again or contact us directly at info@swiftsailship.com.'
        });
        return;
    }

    res.status(200).json({
        success: true,
        message: 'Proposal request received successfully.',
        details: {
            name: body.fullname || body.name || null,
            email: body.email || null,
            service: body.service || null,
            timestamp: new Date().toISOString()
        }
    });
};
