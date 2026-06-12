module.exports = (req, res) => {
    // Set CORS headers for security and standard cross-origin flexibility
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'POST') {
        const body = req.body || {};
        
        // Log the submission to the console (Vercel server logs)
        console.log("=== NEW QUOTE ENQUIRY RECEIVED ===");
        console.log("Name:     ", body.fullname || body.name || "N/A");
        console.log("Company:  ", body.company || "N/A");
        console.log("Email:    ", body.email || "N/A");
        console.log("Phone:    ", body.phone || "N/A");
        console.log("Service:  ", body.service || "N/A");
        console.log("Message:  ", body.message || "N/A");
        console.log("==================================");

        // Return a successful JSON response
        res.status(200).json({
            success: true,
            message: "Proposal request received successfully.",
            details: {
                name: body.fullname || body.name || null,
                email: body.email || null,
                service: body.service || null,
                timestamp: new Date().toISOString()
            }
        });
    } else {
        res.setHeader('Allow', 'POST, OPTIONS');
        res.status(405).json({
            success: false,
            error: "Method Not Allowed. Please use POST or OPTIONS."
        });
    }
};
