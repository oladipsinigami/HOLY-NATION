# HOLY NATION // PMT 210 & GNS 202 Portal — Full Source Code

This file contains the complete source code for the website (`index.html`).

## File: index.html

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HOLY NATION // PMT 210 & GNS 202 Portal</title>
    <!-- Google Fonts: Fraunces (display) & Manrope (body) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
:root {
            /* Ink & Bone — refined scholarly dark */
            --bg-body: #08090d;
            --bg-card: #0f1116;
            --bg-card-hover: #151821;
            --bg-glass: rgba(15, 17, 22, 0.78);
            --text-main: #e9e4d8;
            --text-muted: #9b9588;
            --text-faint: #6f6a60;
            --text-heading: #f5f0e4;
            --accent-cyan: #6fb3ad;
            --accent-gold: #cfa14e;
            --accent-glow: rgba(207, 161, 78, 0.16);
            --border-color: rgba(233, 228, 216, 0.09);
            --border-strong: rgba(233, 228, 216, 0.18);
            --success-color: #83c795;
            --success-bg: rgba(131, 199, 149, 0.1);
            --error-color: #e4897a;
            --error-bg: rgba(228, 137, 122, 0.1);
            --card-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.8);
            --radius: 16px;
            --font-display: 'Fraunces', serif;
            --font-body: 'Manrope', sans-serif;
        }

        [data-theme="light"] {
            --bg-body: #f2eee6;
            --bg-card: #faf7f0;
            --bg-card-hover: #ffffff;
            --bg-glass: rgba(250, 247, 240, 0.82);
            --text-main: #2b2721;
            --text-muted: #7a7366;
            --text-faint: #a49d8e;
            --text-heading: #1c1812;
            --accent-cyan: #2f7c75;
            --accent-gold: #a5761f;
            --accent-glow: rgba(165, 118, 31, 0.14);
            --border-color: rgba(43, 39, 33, 0.12);
            --border-strong: rgba(43, 39, 33, 0.24);
            --success-color: #2e7d4f;
            --success-bg: rgba(46, 125, 79, 0.08);
            --error-color: #b53b2e;
            --error-bg: rgba(181, 59, 46, 0.08);
            --card-shadow: 0 24px 48px -28px rgba(70, 58, 34, 0.28);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: var(--font-body);
        }

        html {
            background-color: var(--bg-body);
            min-height: 100vh;
        }

        body {
            background-color: transparent;
            color: var(--text-main);
            min-height: 100vh;
            padding-bottom: 80px;
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-font-smoothing: antialiased;
            position: relative;
        }

        ::selection {
            background: var(--accent-gold);
            color: #0a0a0a;
        }

        /* ==========================================================================
           ATMOSPHERIC EMBLEM LOGO BACKGROUND
           ========================================================================== */
        .bg-atmosphere {
            position: fixed;
            inset: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
            background-color: var(--bg-body);
        }

        .bg-overlay-tint {
            position: absolute;
            inset: 0;
            z-index: 1;
            transition: background 0.5s ease;
        }

        [data-theme="dark"] .bg-overlay-tint {
            background:
                radial-gradient(circle at 50% 30%, rgba(8, 9, 13, 0.05) 0%, rgba(8, 9, 13, 0.58) 62%, rgba(8, 9, 13, 0.9) 92%),
                linear-gradient(to bottom, rgba(8, 9, 13, 0.3), rgba(8, 9, 13, 0.82));
        }

        [data-theme="light"] .bg-overlay-tint {
            background:
                radial-gradient(circle at 50% 30%, rgba(242, 238, 230, 0.12) 0%, rgba(242, 238, 230, 0.7) 62%, rgba(242, 238, 230, 0.93) 94%),
                linear-gradient(to bottom, rgba(242, 238, 230, 0.28), rgba(242, 238, 230, 0.84));
        }

        .bg-logo-container {
            position: absolute;
            top: 36%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: min(760px, 90vmin);
            height: min(760px, 90vmin);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
            mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 34%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.2) 84%, transparent 96%);
            -webkit-mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 34%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.2) 84%, transparent 96%);
            animation: floatLogo 26s ease-in-out infinite alternate;
        }

        [data-theme="dark"] .bg-logo-container {
            opacity: 0.6;
            filter: drop-shadow(0 0 0 transparent);
        }

        /* Invert the logo so the dark emblem turns light and glimmers on the dark canvas */
        [data-theme="dark"] .bg-logo-img {
            mix-blend-mode: screen;
            filter: invert(1) grayscale(0.08) brightness(1.06) contrast(1.05)
                    drop-shadow(0 0 34px var(--accent-glow));
        }

        [data-theme="light"] .bg-logo-container {
            opacity: 0.55;
        }

        /* Gold-tint the emblem so it reads clearly on the light canvas */
        [data-theme="light"] .bg-logo-img {
            mix-blend-mode: multiply;
            filter: grayscale(0.3) sepia(0.42) hue-rotate(-8deg) saturate(1.6) contrast(0.96) brightness(0.85);
        }

        .bg-logo-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            user-select: none;
            pointer-events: none;
            transform: scale(1.15);
        }

        .bg-gradient-mesh {
            position: absolute;
            inset: 0;
            z-index: 0;
            background:
                radial-gradient(circle at 50% 25%, var(--accent-glow) 0%, transparent 62%),
                radial-gradient(circle at 85% 85%, rgba(207, 161, 78, 0.06) 0%, transparent 52%),
                radial-gradient(circle at 12% 75%, rgba(111, 179, 173, 0.05) 0%, transparent 52%);
            opacity: 0.85;
            animation: pulseGlow 16s ease-in-out infinite alternate;
        }

        .bg-grid-pattern {
            position: absolute;
            inset: 0;
            z-index: 3;
            background-image:
                linear-gradient(var(--border-color) 1px, transparent 1px),
                linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
            background-size: 56px 56px;
            opacity: 0.07;
        }

        @keyframes floatLogo {
            0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            50% { transform: translate(-50%, -46%) scale(1.04) rotate(1.4deg); }
            100% { transform: translate(-50%, -54%) scale(0.96) rotate(-1.4deg); }
        }

        @keyframes pulseGlow {
            0% { opacity: 0.6; transform: scale(0.98); }
            100% { opacity: 1; transform: scale(1.06); }
        }

        /* ==========================================================================
           CHROME: STRIPE, NAV, TABS
           ========================================================================== */
        .top-stripe {
            border-bottom: 1px solid var(--border-color);
            padding: 9px 32px;
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: var(--text-faint);
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(8, 9, 13, 0.4);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            position: relative;
            z-index: 10;
        }

        .live-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--accent-gold);
            box-shadow: 0 0 8px var(--accent-gold);
            animation: pulse-dot 2s infinite;
            display: inline-block;
            margin-right: 8px;
        }

        @keyframes pulse-dot {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }

        .main-nav {
            position: sticky;
            top: 0;
            z-index: 100;
            background: var(--bg-glass);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            border-bottom: 1px solid var(--border-color);
            padding: 14px 32px;
        }

        .nav-inner {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .brand-link {
            display: flex;
            align-items: center;
            gap: 14px;
            text-decoration: none;
        }

        .brand-badge {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border-radius: 12px;
            border: 1px solid var(--border-strong);
            background: var(--bg-card);
            position: relative;
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
        }

        .brand-badge-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .brand-badge::after {
            content: "";
            position: absolute;
            bottom: -1px;
            right: -1px;
            width: 8px;
            height: 8px;
            background: var(--accent-gold);
            border-radius: 50%;
            border: 2px solid var(--bg-body);
        }

        .brand-title {
            font-family: var(--font-display);
            font-size: 1.05rem;
            font-weight: 700;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: var(--text-heading);
        }

        .brand-sub {
            font-size: 0.66rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--text-faint);
            margin-top: 3px;
        }

        .nav-actions {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .theme-btn {
            background: transparent;
            border: 1px solid var(--border-strong);
            color: var(--text-main);
            padding: 9px 18px;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            cursor: pointer;
            border-radius: 999px;
            transition: all 0.2s ease;
        }

        .theme-btn:hover {
            border-color: var(--accent-gold);
            color: var(--accent-gold);
        }

        .view-nav-tabs {
            max-width: 1200px;
            margin: 0 auto;
            padding: 22px 32px 0;
            display: flex;
            gap: 8px;
        }

        .tab-btn {
            background: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-muted);
            padding: 12px 24px;
            font-size: 0.74rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            cursor: pointer;
            border-radius: 999px;
            transition: all 0.2s ease;
        }

        .tab-btn:hover {
            border-color: var(--border-strong);
            color: var(--text-heading);
        }

        .tab-btn.active {
            background: var(--text-heading);
            border-color: var(--text-heading);
            color: var(--bg-body);
            font-weight: 800;
        }

        /* ==========================================================================
           LAYOUT HELPERS
           ========================================================================== */
        .page-main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 28px 32px 40px;
        }

        .hero-wrap {
            max-width: 1200px;
            margin: 0 auto;
            padding: 34px 32px 8px;
        }

        .hero-eyebrow {
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.26em;
            text-transform: uppercase;
            color: var(--accent-gold);
            margin-bottom: 12px;
        }

        .hero-title {
            font-family: var(--font-display);
            font-size: clamp(2rem, 5vw, 3.4rem);
            font-weight: 600;
            letter-spacing: -0.015em;
            line-height: 1.05;
            color: var(--text-heading);
            margin-bottom: 14px;
        }

        .hero-title-sm {
            font-size: clamp(1.5rem, 3.4vw, 2.2rem);
        }

        .hero-title span.accent {
            color: var(--accent-gold);
            font-style: italic;
        }

        .hero-sub {
            color: var(--text-muted);
            font-size: 0.98rem;
            max-width: 680px;
            line-height: 1.7;
        }

        .hero-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            flex-wrap: wrap;
            gap: 24px;
        }

        .controls-card {
            background: var(--bg-card);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            padding: 34px;
            box-shadow: var(--card-shadow);
            margin-bottom: 32px;
        }

        .section-label {
            font-size: 0.7rem;
            font-weight: 800;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--text-muted);
            margin-bottom: 12px;
            display: block;
        }

        .field-group {
            margin-bottom: 26px;
        }

        .option-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 22px;
            margin-bottom: 26px;
        }

        .filter-line {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        /* Segment pill toggles */
        .btn-tab {
            background: var(--bg-body);
            border: 1px solid var(--border-color);
            color: var(--text-muted);
            padding: 10px 18px;
            font-size: 0.78rem;
            font-weight: 600;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            border-radius: 999px;
            transition: all 0.18s ease;
        }

        .btn-tab:hover {
            border-color: var(--accent-gold);
            color: var(--text-heading);
            transform: translateY(-1px);
        }

        .btn-tab.active {
            background: var(--accent-gold);
            border-color: var(--accent-gold);
            color: #17120a;
            font-weight: 800;
            box-shadow: 0 6px 18px -8px var(--accent-glow);
        }

        .action-row {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
            align-items: center;
        }

        .btn-start-ujet {
            background: var(--accent-gold);
            color: #17120a;
            border: 1px solid var(--accent-gold);
            padding: 14px 30px;
            font-size: 0.8rem;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            cursor: pointer;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition: all 0.2s ease;
        }

        .btn-start-ujet:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 26px -12px var(--accent-glow);
        }

        .btn-start-ujet.btn-gold {
            background: var(--accent-gold);
            border-color: var(--accent-gold);
        }

        .btn-sec-ujet {
            background: transparent;
            border: 1px solid var(--border-strong);
            color: var(--text-main);
            padding: 14px 26px;
            font-size: 0.76rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            cursor: pointer;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s ease;
        }

        .btn-sec-ujet:hover {
            border-color: var(--accent-gold);
            color: var(--accent-gold);
        }

        .btn-sec-ujet.btn-gold-outline {
            border-color: var(--accent-gold);
            color: var(--accent-gold);
        }

        /* ==========================================================================
           EXAM INTERFACE
           ========================================================================== */
        .timer-badge {
            min-width: 150px;
            padding: 14px 24px;
            text-align: center;
            background: var(--bg-card);
            border: 1px solid var(--border-strong);
            border-radius: var(--radius);
        }

        .q-grid-wrap {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 28px;
            padding: 16px;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            max-height: 190px;
            overflow-y: auto;
        }

        .q-grid-num {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.78rem;
            font-weight: 700;
            background: var(--bg-body);
            border: 1px solid var(--border-color);
            color: var(--text-muted);
            cursor: pointer;
            border-radius: 10px;
            transition: all 0.16s ease;
        }

        .q-grid-num:hover {
            border-color: var(--accent-gold);
            color: var(--text-heading);
        }

        .q-grid-num.current {
            border-color: var(--accent-gold);
            color: var(--accent-gold);
            background: rgba(207, 161, 78, 0.08);
            font-weight: 800;
        }

        .q-grid-num.answered {
            background: var(--success-bg);
            border-color: var(--success-color);
            color: var(--success-color);
        }

        .question-card {
            background: var(--bg-card);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            padding: 38px;
            margin-bottom: 24px;
            box-shadow: var(--card-shadow);
        }

        .q-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 22px;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--text-faint);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 14px;
        }

        .q-badge {
            background: var(--bg-body);
            border: 1px solid var(--border-strong);
            padding: 5px 12px;
            border-radius: 999px;
            color: var(--accent-cyan);
            font-size: 0.66rem;
        }

        .q-text {
            font-size: 1.18rem;
            font-weight: 600;
            line-height: 1.65;
            color: var(--text-heading);
            margin-bottom: 28px;
            font-family: var(--font-body);
        }

        .mcq-options {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 28px;
        }

        .mcq-opt {
            background: var(--bg-body);
            border: 1px solid var(--border-color);
            padding: 16px 20px;
            font-size: 0.95rem;
            color: var(--text-main);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 14px;
            border-radius: 12px;
            transition: all 0.16s ease;
        }

        .mcq-opt:hover {
            border-color: var(--accent-gold);
            background: var(--bg-card-hover);
            transform: translateX(3px);
        }

        .mcq-opt.selected {
            border-color: var(--accent-gold);
            background: rgba(207, 161, 78, 0.08);
            color: var(--text-heading);
            font-weight: 700;
            transform: translateX(3px);
        }

        .opt-letter {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border-strong);
            font-weight: 800;
            font-size: 0.8rem;
            border-radius: 8px;
            background: var(--bg-card);
            color: var(--text-muted);
            flex-shrink: 0;
        }

        .mcq-opt.selected .opt-letter {
            background: var(--accent-gold);
            border-color: var(--accent-gold);
            color: #17120a;
        }

        .german-input, .editor-area {
            width: 100%;
            background: var(--bg-body);
            border: 1px solid var(--border-color);
            color: var(--text-heading);
            padding: 16px 18px;
            font-size: 1rem;
            outline: none;
            border-radius: 12px;
            margin-bottom: 24px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .german-input:focus, .editor-area:focus {
            border-color: var(--accent-gold);
            box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .q-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 32px;
            flex-wrap: wrap;
            gap: 16px;
        }

        .q-actions-left {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }

        .fb-box {
            background: var(--bg-body);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 18px 20px;
            margin-top: 20px;
            display: none;
        }

        .fb-box.show { display: block; }
        .fb-box.correct { border-color: var(--success-color); background: var(--success-bg); }
        .fb-box.wrong { border-color: var(--error-color); background: var(--error-bg); }

        .hidden { display: none !important; }

        /* ==========================================================================
           REPORT & STATS
           ========================================================================== */
        .metric-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 28px;
        }

        .stat-badge {
            background: var(--bg-body);
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            padding: 26px 20px;
            text-align: center;
        }

        .stat-num {
            font-family: var(--font-display);
            font-size: 2.6rem;
            font-weight: 600;
            color: var(--accent-cyan);
            line-height: 1;
        }

        .stat-num-gold {
            color: var(--accent-gold);
        }

        .stat-lbl {
            font-size: 0.7rem;
            font-weight: 800;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--text-faint);
            margin-top: 8px;
        }

        .metric-panel {
            background: var(--bg-body);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 22px;
            margin-bottom: 28px;
        }

        .metric-panel .section-label {
            margin-bottom: 10px;
        }

        #reportDetailText {
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--text-heading);
        }

        .report-block {
            border-top: 1px solid var(--border-color);
            padding-top: 28px;
        }

        .block-title {
            font-family: var(--font-display);
            font-size: 1.15rem;
            font-weight: 600;
            color: var(--text-heading);
            margin-bottom: 20px;
        }

        /* ==========================================================================
           NOTES & COURSEWARE
           ========================================================================== */
        .download-block {
            background: var(--bg-body);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 26px;
            margin-bottom: 24px;
        }

        .download-block .block-title {
            margin-bottom: 16px;
        }

        .download-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 12px;
        }

        .download-link {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            color: var(--text-main);
            padding: 14px 18px;
            font-size: 0.8rem;
            font-weight: 700;
            border-radius: 12px;
            transition: all 0.18s ease;
        }

        .download-link:hover {
            border-color: var(--accent-gold);
            color: var(--accent-gold);
            transform: translateY(-2px);
        }

        .download-link::before {
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 3px;
            background: var(--accent-gold);
            flex-shrink: 0;
        }

        .note-toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 20px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 18px;
        }

        .notes-doc {
            background: var(--bg-body);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 30px;
            line-height: 1.75;
            font-size: 0.95rem;
            color: var(--text-main);
            max-height: 650px;
            overflow-y: auto;
        }

        /* ==========================================================================
           RESPONSIVE
           ========================================================================== */
        @media (max-width: 720px) {
            .top-stripe { padding: 9px 18px; }
            .main-nav { padding: 12px 18px; }
            .hero-wrap, .page-main, .view-nav-tabs { padding-left: 18px; padding-right: 18px; }
            .controls-card, .question-card { padding: 24px; }
            .q-actions { flex-direction: column; align-items: stretch; }
            .q-actions .btn-start-ujet { width: 100%; }
            .q-actions-left { justify-content: center; }
            .action-row .btn-start-ujet { width: 100%; }
            .note-toolbar { flex-direction: column; align-items: stretch; }
        }

        @media (prefers-reduced-motion: reduce) {
            * { animation: none !important; transition: none !important; }
        }
</style>
</head>
<body>
<body>

    <!-- ATMOSPHERIC EMBLEM LOGO BACKGROUND -->
    <div class="bg-atmosphere" aria-hidden="true">
        <div class="bg-gradient-mesh"></div>
        <div class="bg-logo-container">
            <img src="logo.jpg" alt="" class="bg-logo-img">
        </div>
        <div class="bg-overlay-tint"></div>
        <div class="bg-grid-pattern"></div>
    </div>

    <div class="top-stripe">
        <div><span class="live-dot"></span> HOLY NATION ACADEMIC PLATFORM // PMT 210 & GNS 202 EXCLUSIVE</div>
        <div id="systemTime">CBT ENGINE ACTIVE</div>
    </div>

    <nav class="main-nav">
        <div class="nav-inner">
            <a href="#" class="brand-link">
                <div class="brand-badge">
                    <img src="logo.jpg" alt="Holy Nation Logo" class="brand-badge-img">
                </div>
                <div>
                    <div class="brand-title">Holy Nation</div>
                    <div class="brand-sub">PMT 210 / GNS 202 CBT &amp; Study Hub</div>
                </div>
            </a>

            <div class="nav-actions">
                <button class="theme-btn" id="themeToggleBtn">DARK THEME</button>
            </div>
        </div>
    </nav>

    <!-- TOP NAVIGATION TABS -->
    <div class="view-nav-tabs">
        <button class="tab-btn active" id="tabSetup">CBT Exam Setup</button>
        <button class="tab-btn" id="tabNotes">Study Notes &amp; Courseware</button>
    </div>

    <!-- VIEW 1: CBT SETUP -->
    <div id="setupView" class="view-section">
        <header class="hero-wrap">
            <p class="hero-eyebrow">PMT 210 &amp; GNS 202 — Fundamentals of Economics</p>
            <h1 class="hero-title">CBT Exam <span class="accent">Portal</span></h1>
            <p class="hero-sub">HOLY NATION's specialized assessment engine. Practice Multiple Choice and German fill-in-the-blank questions with real-time analytics.</p>
        </header>

        <main class="page-main">
            <section class="controls-card">
                <div class="field-group">
                    <span class="section-label">Module / Suite</span>
                    <div class="filter-line" id="moduleFilterContainer">
                        <button class="btn-tab active" data-module="ALL">All Suites</button>
                        <button class="btn-tab" data-module="MICRO">Microeconomics</button>
                        <button class="btn-tab" data-module="MACRO">Macroeconomics</button>
                        <button class="btn-tab" data-module="PRODUCTION">Production &amp; Utility</button>
                        <button class="btn-tab" data-module="MANAGEMENT">Business Management</button>
                    </div>
                </div>

                <div class="field-group">
                    <span class="section-label">Question Type</span>
                    <div class="filter-line" id="typeFilterContainer">
                        <button class="btn-tab active" data-type="ALL">All Types</button>
                        <button class="btn-tab" data-type="MCQ">Multiple Choice</button>
                        <button class="btn-tab" data-type="German">German Fill-in-Blanks</button>
                    </div>
                </div>

                <div class="option-grid">
                    <div class="field-group">
                        <span class="section-label">Session Mode</span>
                        <div class="filter-line" id="modeContainer">
                            <button class="btn-tab active" data-mode="EXAM">Exam Mode</button>
                            <button class="btn-tab" data-mode="STUDY">Study Mode</button>
                        </div>
                    </div>

                    <div class="field-group">
                        <span class="section-label">Exam Timer</span>
                        <div class="filter-line" id="timerContainer">
                            <button class="btn-tab" data-time="0">Off</button>
                            <button class="btn-tab active" data-time="15">15 min</button>
                            <button class="btn-tab" data-time="30">30 min</button>
                            <button class="btn-tab" data-time="45">45 min</button>
                        </div>
                    </div>

                    <div class="field-group">
                        <span class="section-label">Question Count</span>
                        <div class="filter-line" id="countContainer">
                            <button class="btn-tab" data-count="10">10</button>
                            <button class="btn-tab active" data-count="20">20</button>
                            <button class="btn-tab" data-count="30">30</button>
                            <button class="btn-tab" data-count="ALL">All</button>
                        </div>
                    </div>
                </div>

                <div class="action-row">
                    <button class="btn-start-ujet" id="startExamBtn">Initialize Exam Session</button>
                </div>
            </section>
        </main>
    </div>

    <!-- VIEW 2: EXAM INTERFACE -->
    <div id="examView" class="view-section hidden">
        <header class="hero-wrap hero-row">
            <div>
                <p class="hero-eyebrow">Session in progress</p>
                <h1 class="hero-title hero-title-sm">PMT 210 <span class="accent">Assessment</span></h1>
                <p class="hero-sub" id="examSubInfo">PMT 210 Comprehensive Practice Session</p>
            </div>

            <div class="timer-badge">
                <div class="stat-num" id="timerDisplay">15:00</div>
                <div class="stat-lbl">Remaining</div>
            </div>
        </header>

        <main class="page-main">
            <div class="q-grid-wrap" id="qGrid"></div>

            <section class="question-card">
                <div class="q-meta">
                    <div>QUESTION <span id="qIndexText">1</span> OF <span id="qTotalText">20</span></div>
                    <div class="q-badge" id="qCategoryBadge">MICROECONOMICS</div>
                </div>

                <div class="q-text" id="qTextDisplay">Question text loading...</div>

                <!-- MCQ Options Container -->
                <div id="mcqBox" class="mcq-options"></div>

                <!-- German Fill-in-Blanks Container -->
                <div id="germanBox" class="hidden">
                    <span class="section-label">Your Answer</span>
                    <input type="text" class="german-input" id="germanInput" placeholder="Type your answer..." autocomplete="off">
                </div>

                <div class="fb-box" id="studyFeedbackBox"></div>

                <div class="q-actions">
                    <div class="q-actions-left">
                        <button class="btn-sec-ujet" id="prevQBtn">Previous</button>
                        <button class="btn-sec-ujet" id="nextQBtn">Next</button>
                    </div>

                    <button class="btn-start-ujet btn-gold" id="submitExamBtn">Finalize &amp; Submit</button>
                </div>
            </section>
        </main>
    </div>

    <!-- VIEW 3: REPORT CARD -->
    <div id="reportView" class="view-section hidden">
        <header class="hero-wrap">
            <p class="hero-eyebrow">Session complete</p>
            <h1 class="hero-title">Performance <span class="accent">Report</span></h1>
            <p class="hero-sub">Session summary and automated grading analysis.</p>
        </header>

        <main class="page-main">
            <section class="controls-card">
                <div class="metric-grid">
                    <div class="stat-badge">
                        <div class="stat-num" id="reportPercent">0%</div>
                        <div class="stat-lbl">Accuracy</div>
                    </div>
                    <div class="stat-badge">
                        <div class="stat-num stat-num-gold" id="overallPercent">0%</div>
                        <div class="stat-lbl">Overall Score</div>
                    </div>
                </div>

                <div class="metric-panel">
                    <span class="section-label">Detailed Metrics</span>
                    <div id="reportDetailText">Loading metrics...</div>
                </div>

                <div class="action-row">
                    <button class="btn-start-ujet" id="newSessionBtn">Configure New Session</button>
                    <button class="btn-sec-ujet" onclick="window.print()">Print Report</button>
                </div>

                <div class="report-block">
                    <h3 class="block-title">Question Evaluation &amp; Model Answers</h3>
                    <section id="reportQuestionsContainer"></section>
                </div>
            </section>
        </main>
    </div>

    <!-- VIEW 4: STUDY NOTES & COURSEWARE HUB -->
    <div id="notesView" class="view-section hidden">
        <header class="hero-wrap">
            <p class="hero-eyebrow">Study resources</p>
            <h1 class="hero-title">Study &amp; <span class="accent">Courseware</span></h1>
            <p class="hero-sub">Official Photochem PMT lecture notes, 2-years past questions, and comprehensive economic study guides.</p>
        </header>

        <main class="page-main">
            <section class="controls-card">
                <div class="download-block">
                    <h3 class="block-title">Official PDF Downloads</h3>
                    <div class="download-grid">
                        <a href="PMT%20210%20BY%20PHOTOCHEM.pdf" download="PMT 210 BY PHOTOCHEM.pdf" target="_blank" class="download-link">PMT 210 Photochem Lecture Note</a>
                        <a href="PMT210(2YRS%20P.QUSTION)%20BY%20PHOTOCHEM.pdf" download="PMT210(2YRS P.QUSTION) BY PHOTOCHEM.pdf" target="_blank" class="download-link">PMT 210 Two-Year Past Questions</a>
                        <a href="GNS202_Part1.pdf" download="GNS202_Part1.pdf" target="_blank" class="download-link">GNS 202 Course Material Part 1</a>
                        <a href="GNS202_Part2.pdf" download="GNS202_Part2.pdf" target="_blank" class="download-link">GNS 202 Course Material Part 2</a>
                    </div>
                </div>

                <div class="note-toolbar">
                    <div class="q-actions-left">
                        <button class="btn-sec-ujet" id="toggleEditNoteBtn">Edit Notes</button>
                        <button class="btn-start-ujet" id="saveNoteBtn" style="display: none;">Save Notes</button>
                        <button class="btn-sec-ujet btn-gold-outline" id="resetNoteBtn">Reset Default</button>
                    </div>
                    <button class="btn-sec-ujet" id="downloadNoteMdBtn">Download .MD</button>
                </div>

                <div id="notesDisplayBox" class="notes-doc"></div>

                <div id="notesEditBox" style="display: none;">
                    <span class="section-label">Markdown Source — Saved Locally in Browser</span>
                    <textarea id="notesEditTextarea" class="editor-area" style="min-height: 500px; font-family: monospace; font-size: 0.9rem; line-height: 1.5;"></textarea>
                </div>
            </section>
        </main>
    </div>

    <!-- JAVASCRIPT CBT ENGINE & DATASET -->
    <script>
        // HTML Helper
        function escapeHtml(str) {
            if (str === null || str === undefined) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
        }

        // PMT 210 Question Bank
        const PMT_QUESTIONS = [
            // GERMAN QUESTIONS FROM pmt210_questions.md
            { type: 'German', category: 'Microeconomics', text: '___ is the interaction between the forces of demand and supply', correct: 'Price', modelAnswer: 'Price (or Price Mechanism)' },
            { type: 'German', category: 'Microeconomics', text: 'Economic ___ are simplified versions of real-life events', correct: 'Models', modelAnswer: 'Models' },
            { type: 'German', category: 'Macroeconomics', text: 'Full employment is a problem of ___ economics', correct: 'Macroeconomics', modelAnswer: 'Macroeconomics' },
            { type: 'German', category: 'Microeconomics', text: '___ is the root and natural cause of all economic problems', correct: 'Scarcity', modelAnswer: 'Scarcity' },
            { type: 'German', category: 'Microeconomics', text: '___ establishes a relationship between cause and effect in economics', correct: 'Economics', modelAnswer: 'Economics' },
            { type: 'German', category: 'Production & Utility', text: 'Law of diminishing returns is also known as law of ___', correct: 'Variable Proportions', modelAnswer: 'Variable Proportions' },
            { type: 'German', category: 'Microeconomics', text: '___ defined economics as the study of people in the ordinary business of life', correct: 'Alfred Marshall', modelAnswer: 'Alfred Marshall (or Marshall)' },
            { type: 'German', category: 'Microeconomics', text: 'Economics originated from Classical and ___ schools of thought', correct: 'Neo-Classical', modelAnswer: 'Neo-Classical' },
            { type: 'German', category: 'Microeconomics', text: '___ curve has a negatively slope under normal conditions', correct: 'Demand', modelAnswer: 'Demand Curve' },
            { type: 'German', category: 'Production & Utility', text: '___ resources are called free gift of nature', correct: 'Natural', modelAnswer: 'Natural Resources' },
            { type: 'German', category: 'Production & Utility', text: '___ can also be called natural resources in factors of production', correct: 'Land', modelAnswer: 'Land' },
            { type: 'German', category: 'Production & Utility', text: 'Land rewards owner with ___', correct: 'Rent', modelAnswer: 'Rent' },
            { type: 'German', category: 'Production & Utility', text: 'Human effort in production is called ___', correct: 'Labour', modelAnswer: 'Labour' },
            { type: 'German', category: 'Production & Utility', text: 'Reward for labour is ___', correct: 'Wages', modelAnswer: 'Wages and Salaries' },
            { type: 'German', category: 'Production & Utility', text: 'Capital rewards owner with ___', correct: 'Interest', modelAnswer: 'Interest' },
            { type: 'German', category: 'Production & Utility', text: 'Entrepreneur receives ___ as reward for risk taking', correct: 'Profit', modelAnswer: 'Profit' },
            { type: 'German', category: 'Microeconomics', text: 'Utility derived from additional unit of consumption is called ___ utility', correct: 'Marginal', modelAnswer: 'Marginal Utility' },
            { type: 'German', category: 'Macroeconomics', text: 'General rise in price level over time is called ___', correct: 'Inflation', modelAnswer: 'Inflation' },

            // MCQ QUESTIONS FOR PMT 210
            { type: 'MCQ', category: 'Microeconomics', text: 'What is the fundamental economic problem faced by all societies?', options: ['Overproduction of consumer luxury goods', 'Scarcity of resources relative to unlimited human wants', 'High rates of foreign exchange fluctuation', 'Government regulation of free markets'], correct: 'B' },
            { type: 'MCQ', category: 'Microeconomics', text: 'Which economic law states that as consumption of a good increases, the marginal satisfaction derived from each additional unit declines?', options: ['Law of Supply', 'Law of Diminishing Marginal Utility', 'Law of Demand', 'Law of Variable Proportions'], correct: 'B' },
            { type: 'MCQ', category: 'Production & Utility', text: 'Which factor of production is considered a "free gift of nature" and earns rent as its reward?', options: ['Capital', 'Entrepreneurship', 'Land', 'Labour'], correct: 'C' },
            { type: 'MCQ', category: 'Macroeconomics', text: 'Which branch of economics studies aggregate economy-wide phenomena such as total output, unemployment, and national income?', options: ['Microeconomics', 'Macroeconomics', 'Econometrics', 'Managerial Economics'], correct: 'B' },
            { type: 'MCQ', category: 'Microeconomics', text: 'In price theory, what is the point where the quantity demanded by buyers equals the quantity supplied by sellers?', options: ['Price Ceiling', 'Equilibrium Price', 'Price Floor', 'Surplus Point'], correct: 'B' },
            { type: 'MCQ', category: 'Production & Utility', text: 'What is the reward earned by the entrepreneur for combining factors of production and bearing business risk?', options: ['Wages', 'Interest', 'Rent', 'Profit'], correct: 'D' },
            { type: 'MCQ', category: 'Macroeconomics', text: 'A sustained and general increase in the overall price level of goods and services in an economy is termed:', options: ['Deflation', 'Stagflation', 'Inflation', 'Devaluation'], correct: 'C' },
            { type: 'MCQ', category: 'Microeconomics', text: 'Who famously defined economics as "a science which studies human behavior as a relationship between ends and scarce means which have alternative uses"?', options: ['Adam Smith', 'Alfred Marshall', 'Lionel Robbins', 'John Maynard Keynes'], correct: 'C' },
            { type: 'MCQ', category: 'Production & Utility', text: 'The Law of Diminishing Returns applies when:', options: ['All factors of production are variable in the long run', 'At least one factor of production is kept fixed while variable units are added', 'Technology changes rapidly during production', 'Consumer preferences shift to alternative substitutes'], correct: 'B' },
            { type: 'MCQ', category: 'Microeconomics', text: 'The responsiveness of quantity demanded to a change in the price of a good is measured by:', options: ['Income Elasticity', 'Price Elasticity of Demand', 'Cross Elasticity of Supply', 'Marginal Rate of Substitution'], correct: 'B' },

        ];

        const PMT_DEFAULT_NOTES = `# PMT 210 & GNS 202: Fundamentals of Economics & Management - Comprehensive Study Guide

---

## 1. Introduction to Economics & Core Concepts
- **Scarcity**: The fundamental economic problem of having limited productive resources relative to unlimited human wants.
- **Choice & Opportunity Cost**: Because resources are scarce, choices must be made. Opportunity cost is the value of the next best alternative forgone when a choice is made.
- **Microeconomics**: Focuses on individual economic units (consumers, firms, specific markets, price determination).
- **Macroeconomics**: Focuses on the aggregate economy (inflation, national income, unemployment, gross domestic product).

---

## 2. Key Definitions of Economics
- **Adam Smith (1776)**: Defined economics as "An Inquiry into the Nature and Causes of the Wealth of Nations."
- **Alfred Marshall (1890)**: Defined economics as "a study of mankind in the ordinary business of life."
- **Lionel Robbins (1932)**: Defined economics as "the science which studies human behavior as a relationship between ends and scarce means which have alternative uses."

---

## 3. Factors of Production & Their Rewards
1. **Land (Natural Resources)**: All natural resources provided by nature. **Reward: Rent.**
2. **Labour (Human Effort)**: Physical and mental human effort used in production. **Reward: Wages and Salaries.**
3. **Capital (Man-Made Assets)**: Physical assets, tools, machinery, and equipment used to produce other goods. **Reward: Interest.**
4. **Entrepreneurship (Risk-Taking & Management)**: The ability to organize factors of production and bear business risks. **Reward: Profit.**

---

## 4. Theory of Demand, Supply & Price Mechanism
- **Law of Demand**: Ceteris paribus, higher prices lead to lower quantity demanded (negatively sloped demand curve).
- **Law of Supply**: Ceteris paribus, higher prices lead to higher quantity supplied (positively sloped supply curve).
- **Equilibrium Price**: The market price at which Quantity Demanded equals Quantity Supplied.

---

## 5. Production, Utility & Law of Diminishing Returns
- **Utility**: The power of a commodity or service to satisfy a human want.
- **Marginal Utility (MU)**: The extra satisfaction gained from consuming one additional unit of a good.
- **Law of Diminishing Marginal Utility**: As consumption increases, MU decreases.
- **Law of Diminishing Returns (Variable Proportions)**: In the short run, adding extra variable units of input to fixed inputs eventually leads to diminishing additions to total output.
`;

        // State Variables
        let activeModule = 'ALL';
        let activeType = 'ALL';
        let activeMode = 'EXAM';
        let timerMinutes = 15;
        let selectedCount = 20;

        let examQuestions = [];
        let currentQIndex = 0;
        let userAnswers = {};
        let timerInterval = null;
        let remainingSeconds = 0;

        // Tab Navigation
        const setupView = document.getElementById('setupView');
        const examView = document.getElementById('examView');
        const reportView = document.getElementById('reportView');
        const notesView = document.getElementById('notesView');

        const tabSetup = document.getElementById('tabSetup');
        const tabNotes = document.getElementById('tabNotes');

        function switchView(viewName) {
            setupView.classList.add('hidden');
            examView.classList.add('hidden');
            reportView.classList.add('hidden');
            notesView.classList.add('hidden');

            tabSetup.classList.remove('active');
            tabNotes.classList.remove('active');

            if (viewName === 'setupView') {
                setupView.classList.remove('hidden');
                tabSetup.classList.add('active');
            } else if (viewName === 'examView') {
                examView.classList.remove('hidden');
            } else if (viewName === 'reportView') {
                reportView.classList.remove('hidden');
            } else if (viewName === 'notesView') {
                notesView.classList.remove('hidden');
                tabNotes.classList.add('active');
            }
        }

        tabSetup.addEventListener('click', () => switchView('setupView'));
        tabNotes.addEventListener('click', () => switchView('notesView'));
        document.getElementById('newSessionBtn').addEventListener('click', () => switchView('setupView'));

        // Theme Toggle
        const themeBtn = document.getElementById('themeToggleBtn');
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            themeBtn.textContent = newTheme === 'dark' ? 'DARK THEME' : 'LIGHT THEME';
        });

        // Filter Handlers
        function bindFilterGroup(containerId, dataAttr, callback) {
            document.querySelectorAll(`#${containerId} .btn-tab`).forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll(`#${containerId} .btn-tab`).forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    callback(this.dataset[dataAttr]);
                });
            });
        }

        bindFilterGroup('moduleFilterContainer', 'module', val => activeModule = val);
        bindFilterGroup('typeFilterContainer', 'type', val => activeType = val);
        bindFilterGroup('modeContainer', 'mode', val => activeMode = val);
        bindFilterGroup('timerContainer', 'time', val => timerMinutes = parseInt(val, 10));
        bindFilterGroup('countContainer', 'count', val => selectedCount = val === 'ALL' ? 'ALL' : parseInt(val, 10));

        // Start Exam Logic
        document.getElementById('startExamBtn').addEventListener('click', () => {
            let filtered = PMT_QUESTIONS.filter(q => {
                if (activeType !== 'ALL' && q.type !== activeType) return false;
                if (activeModule === 'MICRO' && q.category !== 'Microeconomics') return false;
                if (activeModule === 'MACRO' && q.category !== 'Macroeconomics') return false;
                if (activeModule === 'PRODUCTION' && q.category !== 'Production & Utility') return false;
                return true;
            });

            if (filtered.length === 0) {
                alert('No questions match your current filters. Resetting filters to default...');
                filtered = PMT_QUESTIONS;
            }

            // Shuffle
            filtered = [...filtered].sort(() => 0.5 - Math.random());

            if (selectedCount !== 'ALL') {
                filtered = filtered.slice(0, Math.min(selectedCount, filtered.length));
            }

            examQuestions = filtered;
            currentQIndex = 0;
            userAnswers = {};

            document.getElementById('qTotalText').textContent = examQuestions.length;
            renderQGrid();
            renderQuestion(0);

            // Timer setup
            clearInterval(timerInterval);
            if (timerMinutes > 0) {
                remainingSeconds = timerMinutes * 60;
                updateTimerDisplay();
                timerInterval = setInterval(() => {
                    remainingSeconds--;
                    updateTimerDisplay();
                    if (remainingSeconds <= 0) {
                        clearInterval(timerInterval);
                        alert('⏱️ TIME EXPIRED! Submitting exam session now.');
                        finalizeExam();
                    }
                }, 1000);
            } else {
                document.getElementById('timerDisplay').textContent = 'UNTIMED';
            }

            switchView('examView');
        });

        function updateTimerDisplay() {
            const m = Math.floor(remainingSeconds / 60);
            const s = remainingSeconds % 60;
            document.getElementById('timerDisplay').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        }

        function renderQGrid() {
            const grid = document.getElementById('qGrid');
            grid.innerHTML = '';
            examQuestions.forEach((q, idx) => {
                const el = document.createElement('div');
                el.className = 'q-grid-num' + (idx === currentQIndex ? ' current' : '') + (userAnswers[idx] !== undefined ? ' answered' : '');
                el.textContent = idx + 1;
                el.addEventListener('click', () => {
                    saveCurrentAnswer();
                    renderQuestion(idx);
                });
                grid.appendChild(el);
            });
        }

        function saveCurrentAnswer() {
            const q = examQuestions[currentQIndex];
            if (!q) return;
            if (q.type === 'MCQ') {
                const sel = document.querySelector('.mcq-opt.selected');
                if (sel) userAnswers[currentQIndex] = sel.dataset.opt;
            } else if (q.type === 'German') {
                const val = document.getElementById('germanInput').value.trim();
                if (val) userAnswers[currentQIndex] = val;
            }
        }

        function renderQuestion(idx) {
            currentQIndex = idx;
            const q = examQuestions[idx];
            document.getElementById('qIndexText').textContent = idx + 1;
            document.getElementById('qCategoryBadge').textContent = q.category;
            document.getElementById('qTextDisplay').textContent = q.text;

            const mcqBox = document.getElementById('mcqBox');
            const germanBox = document.getElementById('germanBox');
            const feedbackBox = document.getElementById('studyFeedbackBox');

            mcqBox.classList.add('hidden');
            germanBox.classList.add('hidden');
            feedbackBox.classList.remove('show');

            if (q.type === 'MCQ') {
                mcqBox.classList.remove('hidden');
                mcqBox.innerHTML = '';
                const letters = ['A', 'B', 'C', 'D'];
                q.options.forEach((optStr, i) => {
                    const l = letters[i];
                    const optDiv = document.createElement('div');
                    optDiv.className = 'mcq-opt' + (userAnswers[idx] === l ? ' selected' : '');
                    optDiv.dataset.opt = l;
                    optDiv.innerHTML = `<div class="opt-letter">${l}</div> <div>${escapeHtml(optStr)}</div>`;
                    optDiv.addEventListener('click', () => {
                        document.querySelectorAll('.mcq-opt').forEach(o => o.classList.remove('selected'));
                        optDiv.classList.add('selected');
                        userAnswers[idx] = l;
                        renderQGrid();

                        if (activeMode === 'STUDY') {
                            feedbackBox.classList.add('show');
                            if (l === q.correct) {
                                feedbackBox.className = 'fb-box show correct';
                                feedbackBox.innerHTML = `✅ <strong>CORRECT!</strong> Option ${l} is the right answer.`;
                            } else {
                                feedbackBox.className = 'fb-box show wrong';
                                feedbackBox.innerHTML = `❌ <strong>INCORRECT!</strong> You chose ${l}. Correct answer is Option <strong>${q.correct}</strong>.`;
                            }
                        }
                    });
                    mcqBox.appendChild(optDiv);
                });
            } else if (q.type === 'German') {
                germanBox.classList.remove('hidden');
                const gInput = document.getElementById('germanInput');
                gInput.value = userAnswers[idx] || '';
                gInput.oninput = () => {
                    userAnswers[idx] = gInput.value.trim();
                    renderQGrid();
                };
            }

            renderQGrid();
        }

        document.getElementById('prevQBtn').addEventListener('click', () => {
            saveCurrentAnswer();
            if (currentQIndex > 0) renderQuestion(currentQIndex - 1);
        });

        document.getElementById('nextQBtn').addEventListener('click', () => {
            saveCurrentAnswer();
            if (currentQIndex < examQuestions.length - 1) renderQuestion(currentQIndex + 1);
        });

        document.getElementById('submitExamBtn').addEventListener('click', () => {
            saveCurrentAnswer();
            if (confirm('Are you sure you want to submit your PMT exam session?')) {
                finalizeExam();
            }
        });

        function finalizeExam() {
            clearInterval(timerInterval);
            let mcqTotal = 0, mcqCorrect = 0;
            let germanTotal = 0, germanCorrect = 0;

            let reportHtml = '';

            examQuestions.forEach((q, i) => {
                const ans = userAnswers[i];
                reportHtml += `<div style="background:var(--bg-body); border:1px solid var(--border-color); padding:20px; margin-bottom:16px;">`;
                reportHtml += `<div style="font-size:0.75rem; font-weight:800; color:var(--accent-cyan); margin-bottom:6px;">Q${i+1} [${q.type}] - ${q.category}</div>`;
                reportHtml += `<div style="font-weight:700; margin-bottom:12px;">${escapeHtml(q.text)}</div>`;

                if (q.type === 'MCQ') {
                    mcqTotal++;
                    const isCorrect = ans === q.correct;
                    if (isCorrect) mcqCorrect++;
                    reportHtml += `<div>YOUR CHOICE: <strong>${ans || 'NONE'}</strong> | CORRECT: <strong>${q.correct}</strong></div>`;
                    reportHtml += `<div class="fb-box show ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '✅ CORRECT' : '❌ INCORRECT'}</div>`;
                } else if (q.type === 'German') {
                    germanTotal++;
                    const uNorm = (ans || '').trim().toLowerCase();
                    const cNorm = (q.correct || '').toLowerCase();
                    const isCorrect = uNorm === cNorm || (cNorm.length > 2 && uNorm.includes(cNorm));
                    if (isCorrect) germanCorrect++;
                    reportHtml += `<div>TYPED ANSWER: <strong>${escapeHtml(ans || 'NONE')}</strong> | EXPECTED: <strong>${escapeHtml(q.correct)}</strong></div>`;
                    reportHtml += `<div class="fb-box show ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '✅ CORRECT GERMAN ANSWER' : '❌ INCORRECT'}</div>`;
                }
                reportHtml += `</div>`;
            });

            document.getElementById('reportQuestionsContainer').innerHTML = reportHtml;

            const combinedGraded = (mcqTotal + germanTotal) > 0 ? Math.round(((mcqCorrect + germanCorrect) / (mcqTotal + germanTotal)) * 100) : 100;

            document.getElementById('reportPercent').textContent = `${combinedGraded}%`;
            document.getElementById('overallPercent').textContent = `${combinedGraded}%`;

            document.getElementById('reportDetailText').textContent = `MCQ: ${mcqCorrect}/${mcqTotal} | GERMAN: ${germanCorrect}/${germanTotal} | COMBINED: ${combinedGraded}%`;

            switchView('reportView');
        }

        // Study Notes Engine
        const notesDisplayBox = document.getElementById('notesDisplayBox');
        const notesEditBox = document.getElementById('notesEditBox');
        const notesEditTextarea = document.getElementById('notesEditTextarea');
        const toggleEditNoteBtn = document.getElementById('toggleEditNoteBtn');
        const saveNoteBtn = document.getElementById('saveNoteBtn');
        const resetNoteBtn = document.getElementById('resetNoteBtn');
        const downloadNoteMdBtn = document.getElementById('downloadNoteMdBtn');

        function loadNoteText() {
            const stored = localStorage.getItem('holynation_pmt_notes');
            return stored !== null ? stored : PMT_DEFAULT_NOTES;
        }

        function renderNotes() {
            const text = loadNoteText();
            notesEditTextarea.value = text;
            notesDisplayBox.innerHTML = text
                .replace(/^### (.*$)/gim, '<h3 style="font-family:\'Syne\',sans-serif; font-size:1.1rem; color:var(--accent-cyan); margin:18px 0 8px 0;">$1</h3>')
                .replace(/^## (.*$)/gim, '<h2 style="font-family:\'Syne\',sans-serif; font-size:1.3rem; color:var(--text-heading); margin:24px 0 12px 0; border-bottom:1px solid var(--border-color); padding-bottom:6px;">$1</h2>')
                .replace(/^# (.*$)/gim, '<h1 style="font-family:\'Syne\',sans-serif; font-size:1.6rem; color:var(--accent-cyan); margin:28px 0 16px 0;">$1</h1>')
                .replace(/\*\*([^*]+)\*\*/gim, '<strong>$1</strong>')
                .replace(/^---\s*$/gim, '<hr style="border:none; border-top:1px solid var(--border-color); margin:20px 0;">')
                .replace(/^[-•]\s+(.*$)/gim, '<li style="margin-left:20px; margin-bottom:4px;">$1</li>')
                .replace(/\n\n/g, '<br><br>');
        }

        let isEditing = false;
        toggleEditNoteBtn.addEventListener('click', () => {
            isEditing = !isEditing;
            if (isEditing) {
                notesDisplayBox.style.display = 'none';
                notesEditBox.style.display = 'block';
                saveNoteBtn.style.display = 'inline-block';
                toggleEditNoteBtn.textContent = 'VIEW RENDERED';
            } else {
                notesDisplayBox.style.display = 'block';
                notesEditBox.style.display = 'none';
                saveNoteBtn.style.display = 'none';
                toggleEditNoteBtn.textContent = 'EDIT NOTES';
                renderNotes();
            }
        });

        saveNoteBtn.addEventListener('click', () => {
            localStorage.setItem('holynation_pmt_notes', notesEditTextarea.value);
            renderNotes();
            alert('✅ PMT 210 STUDY NOTES UPDATED AND SAVED LOCALLY!');
        });

        resetNoteBtn.addEventListener('click', () => {
            if (confirm('Reset PMT study notes back to official default?')) {
                localStorage.removeItem('holynation_pmt_notes');
                renderNotes();
            }
        });

        downloadNoteMdBtn.addEventListener('click', () => {
            const blob = new Blob([loadNoteText()], { type: 'text/markdown;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'PMT210_GNS202_Study_Notes.md';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });

        renderNotes();
    </script>
</body>
</html>
```
