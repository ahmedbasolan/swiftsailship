// ===== Swift Sail — Scroll-Driven Route Line =====
// Draws a gold "shipping route" down the landing page as the user scrolls.
// The path is generated from actual section positions, weaving between the
// left and right page margins so it never crosses content. Desktop only,
// disabled for prefers-reduced-motion. No loops, no pulses — purely
// scroll-linked, so motion stops the moment the user stops.

(function () {
    'use strict';

    var MIN_WIDTH = 1024;
    var SVG_NS = 'http://www.w3.org/2000/svg';
    var EDGE_LEFT = 0.055;   // x position as fraction of width (left waypoints)
    var EDGE_RIGHT = 0.945;  // x position as fraction of width (right waypoints)
    var VIEWPORT_ANCHOR = 0.65; // fraction of viewport height where the "pen" sits

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var main = document.getElementById('main');
    if (!main) return;

    var svg = null;
    var progressPath = null;
    var totalLength = 0;
    var portDots = [];      // { el, lengthAt }
    var ticking = false;
    var resizeTimer = null;

    function destroy() {
        if (svg && svg.parentNode) svg.parentNode.removeChild(svg);
        svg = null;
        progressPath = null;
        portDots = [];
    }

    function build() {
        destroy();
        if (window.innerWidth < MIN_WIDTH || reduceMotion.matches) return;

        var sections = main.querySelectorAll(':scope > section');
        if (sections.length < 3) return;

        var mainRect = main.getBoundingClientRect();
        var mainTop = mainRect.top + window.scrollY;
        var width = main.offsetWidth;
        var height = main.offsetHeight;

        // Waypoints: start below the hero, then alternate margins at each
        // section boundary, ending at the last section's lower third.
        var points = [];
        var side = 1; // start on the right (hero stats side)
        for (var i = 1; i < sections.length; i++) {
            var rect = sections[i].getBoundingClientRect();
            var yTop = rect.top + window.scrollY - mainTop;
            var x = (side > 0 ? EDGE_RIGHT : EDGE_LEFT) * width;
            points.push({ x: x, y: yTop + rect.height * 0.35 });
            side = -side;
        }
        if (points.length < 2) return;

        // Smooth cubic bezier chain: vertical-tangent curves between waypoints
        // (reads like a route chart, not a zigzag).
        var d = 'M ' + points[0].x.toFixed(1) + ' ' + points[0].y.toFixed(1);
        for (var j = 1; j < points.length; j++) {
            var p0 = points[j - 1];
            var p1 = points[j];
            var dy = (p1.y - p0.y) * 0.5;
            d += ' C ' + p0.x.toFixed(1) + ' ' + (p0.y + dy).toFixed(1) +
                 ', ' + p1.x.toFixed(1) + ' ' + (p1.y - dy).toFixed(1) +
                 ', ' + p1.x.toFixed(1) + ' ' + p1.y.toFixed(1);
        }

        svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttribute('class', 'ep-route-line');
        svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
        svg.setAttribute('preserveAspectRatio', 'none');
        svg.setAttribute('aria-hidden', 'true');

        // Faint dashed track (the full route)
        var track = document.createElementNS(SVG_NS, 'path');
        track.setAttribute('class', 'ep-route-line-track');
        track.setAttribute('d', d);
        svg.appendChild(track);

        // Progress path (draws with scroll)
        progressPath = document.createElementNS(SVG_NS, 'path');
        progressPath.setAttribute('d', d);
        svg.appendChild(progressPath);

        totalLength = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = totalLength + ' ' + totalLength;
        progressPath.style.strokeDashoffset = totalLength;

        // Port dots at each waypoint, revealed as the line reaches them
        var runningLength = 0;
        var probe = document.createElementNS(SVG_NS, 'path');
        for (var k = 0; k < points.length; k++) {
            if (k > 0) {
                // Measure cumulative length up to waypoint k
                var partial = 'M ' + points[0].x.toFixed(1) + ' ' + points[0].y.toFixed(1);
                for (var m = 1; m <= k; m++) {
                    var a = points[m - 1], b = points[m];
                    var dyy = (b.y - a.y) * 0.5;
                    partial += ' C ' + a.x.toFixed(1) + ' ' + (a.y + dyy).toFixed(1) +
                               ', ' + b.x.toFixed(1) + ' ' + (b.y - dyy).toFixed(1) +
                               ', ' + b.x.toFixed(1) + ' ' + b.y.toFixed(1);
                }
                probe.setAttribute('d', partial);
                runningLength = probe.getTotalLength();
            }
            var dot = document.createElementNS(SVG_NS, 'circle');
            dot.setAttribute('class', 'ep-route-port');
            dot.setAttribute('cx', points[k].x.toFixed(1));
            dot.setAttribute('cy', points[k].y.toFixed(1));
            dot.setAttribute('r', '4');
            svg.appendChild(dot);
            portDots.push({ el: dot, lengthAt: runningLength });
        }

        main.appendChild(svg);
        update();
    }

    function update() {
        ticking = false;
        if (!progressPath) return;

        var mainTop = main.getBoundingClientRect().top + window.scrollY;
        var penY = window.scrollY + window.innerHeight * VIEWPORT_ANCHOR - mainTop;
        var progress = Math.min(Math.max(penY / main.offsetHeight, 0), 1);
        var drawn = totalLength * progress;

        progressPath.style.strokeDashoffset = totalLength - drawn;

        for (var i = 0; i < portDots.length; i++) {
            portDots[i].el.classList.toggle('is-reached', drawn >= portDots[i].lengthAt - 2);
        }
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }

    function onResize() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(build, 200);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', build);
    } else {
        build();
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    if (reduceMotion.addEventListener) {
        reduceMotion.addEventListener('change', build);
    }
}());
