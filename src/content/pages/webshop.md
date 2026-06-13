---
title: "Webshop"
description: "



  
  
  CloudStudio Restoration OFX Plugins
  
  
    :root {
      --bg: #0b1020;
      --panel: rgba(255,255,255,0.06);
      --panel2: rgba(255..."
pubDate: 2026-04-12
author: "blake2019"
---


<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CloudStudio Restoration OFX Plugins</title>
  <meta name="description" content="CloudStudio Restoration OFX plugins for DaVinci Resolve. Buy the full suite or individual plugins." />
  <style>
    :root {
      --bg: #0b1020;
      --panel: rgba(255,255,255,0.06);
      --panel2: rgba(255,255,255,0.08);
      --text: #e8eeff;
      --muted: rgba(232,238,255,0.72);
      --muted2: rgba(232,238,255,0.55);
      --accent: #7c5cff;
      --accent2: #2dd4bf;
      --danger: #ef4444;
      --shadow: rgba(0,0,0,0.35);
      --ring: rgba(124,92,255,0.55);
    }

    * { box-sizing: border-box; }
    html, body { height: 100%; }
    body {
      margin: 0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      color: var(--text);
      background:
        radial-gradient(1200px 800px at 20% 0%, rgba(124,92,255,0.25), transparent 60%),
        radial-gradient(1000px 700px at 80% 10%, rgba(45,212,191,0.18), transparent 55%),
        linear-gradient(180deg, #070a14 0%, var(--bg) 55%, #060816 100%);
      line-height: 1.35;
    }

    a { color: inherit; text-decoration: none; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 28px 18px 64px;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 14px 14px;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
      box-shadow: 0 18px 60px var(--shadow);
      backdrop-filter: blur(8px);
    }

    .brand {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .brand .title {
      font-size: 16px;
      letter-spacing: 0.2px;
      font-weight: 650;
    }
    .brand .subtitle {
      font-size: 13px;
      color: var(--muted);
    }

    .toplinks {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 10px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.05);
      color: var(--muted);
      font-size: 13px;
      transition: transform 140ms ease, border-color 140ms ease;
    }
    .chip:hover { transform: translateY(-1px); border-color: rgba(255,255,255,0.22); }

    .hero {
      margin-top: 26px;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 18px;
    }

    .heroCard {
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.10);
      background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
      box-shadow: 0 18px 60px var(--shadow);
      padding: 22px;
      position: relative;
      overflow: hidden;
    }

    .heroCard h1 {
      margin: 0;
      font-size: 34px;
      line-height: 1.06;
      letter-spacing: -0.4px;
    }

    .heroCard p {
      margin: 12px 0 0;
      color: var(--muted);
      font-size: 15px;
      max-width: 62ch;
    }

    .badges {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 14px;
    }

    .badge {
      font-size: 12px;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(124,92,255,0.14);
      border: 1px solid rgba(124,92,255,0.25);
      color: rgba(232,238,255,0.86);
    }

    .badge.alt {
      background: rgba(45,212,191,0.12);
      border-color: rgba(45,212,191,0.25);
    }

    .cta {
      margin-top: 18px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.14);
      background: rgba(255,255,255,0.06);
      color: var(--text);
      font-weight: 600;
      font-size: 14px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.25);
      transition: transform 150ms ease, border-color 150ms ease, background 150ms ease;
    }
    .btn:hover { transform: translateY(-1px); border-color: rgba(255,255,255,0.24); }

    .btn.primary {
      background: linear-gradient(135deg, rgba(124,92,255,0.95), rgba(45,212,191,0.75));
      border-color: rgba(124,92,255,0.55);
      box-shadow: 0 18px 70px rgba(124,92,255,0.22);
    }

    .btn.primary:focus, .btn:focus {
      outline: none;
      box-shadow: 0 0 0 4px var(--ring), 0 18px 70px rgba(124,92,255,0.22);
    }

    .sidebar {
      display: grid;
      gap: 12px;
    }

    .mini {
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.10);
      background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
      padding: 18px;
      box-shadow: 0 18px 60px var(--shadow);
    }

    .mini h3 {
      margin: 0;
      font-size: 14px;
      letter-spacing: 0.2px;
    }
    .mini p {
      margin: 8px 0 0;
      color: var(--muted);
      font-size: 13px;
    }

    .section {
      margin-top: 26px;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.10);
      background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
      padding: 20px;
      box-shadow: 0 18px 60px var(--shadow);
    }

    .section h2 {
      margin: 0 0 12px;
      font-size: 16px;
      letter-spacing: 0.2px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    .card {
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.10);
      background: rgba(255,255,255,0.05);
      padding: 16px;
      position: relative;
      overflow: hidden;
    }

    .card .name {
      font-weight: 700;
      letter-spacing: 0.2px;
      font-size: 14px;
      margin: 0;
    }

    .card .desc {
      margin: 8px 0 0;
      color: var(--muted);
      font-size: 13px;
      min-height: 38px;
    }

    .priceRow {
      margin-top: 12px;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
    }

    .price {
      font-weight: 800;
      font-size: 18px;
      letter-spacing: -0.2px;
    }

    .small {
      font-size: 12px;
      color: var(--muted2);
    }

    .divider {
      height: 1px;
      background: rgba(255,255,255,0.10);
      margin: 14px 0;
    }

    .videoWrap {
      margin-top: 14px;
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.10);
      background: rgba(255,255,255,0.04);
      overflow: hidden;
      box-shadow: 0 18px 60px var(--shadow);
    }

    .video {
      display: block;
      width: 100%;
      height: auto;
      background: #000;
    }

    .list {
      display: grid;
      gap: 8px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .list li {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      color: var(--muted);
      font-size: 13px;
    }

    .dot {
      width: 8px;
      height: 8px;
      margin-top: 6px;
      border-radius: 999px;
      background: rgba(45,212,191,0.9);
      flex: 0 0 auto;
      box-shadow: 0 0 0 4px rgba(45,212,191,0.12);
    }

    footer {
      margin-top: 26px;
      text-align: center;
      color: var(--muted2);
      font-size: 12px;
    }

    @media (max-width: 980px) {
      .hero { grid-template-columns: 1fr; }
      .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }

    @media (max-width: 620px) {
      .grid { grid-template-columns: 1fr; }
      .heroCard h1 { font-size: 28px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <div class="title">CloudStudio Restoration OFX</div>
        <div class="subtitle">Professional film restoration plugins for DaVinci Resolve (OFX)</div>
      </div>
      <nav class="toplinks">
        <a class="chip" href="#suite">Suite</a>
        <a class="chip" href="#plugins">Plugins</a>
        <a class="chip" href="#demo">Demo</a>
        <a class="chip" href="#how">How it works</a>
        <a class="chip" href="colorist.html">Colorist</a>
        <a class="chip" href="biography.html">Biography</a>
        <a class="chip" href="mailto:info@cloudstudio.me">Questions: info@cloudstudio.me</a>
      </nav>
    </header>

    <div class="hero">
      <section class="heroCard">
        # Restore, stabilise and clean your scans — fast.

        <p>
          A set of OFX plugins designed for high‑quality restoration workflows in DaVinci Resolve.
          Buy the full suite or individual tools. Offline licensing with a simple activation workflow.
        </p>
        <div class="badges">
          <span class="badge">DaVinci Resolve (OFX)</span>
          <span class="badge alt">Offline license</span>
          <span class="badge">macOS</span>
          <span class="badge">Windows (beta)</span>
        </div>
        <div class="cta">
          <a class="btn primary" href="https://paypal.me/StuartBlakeJones/1200" target="_blank" rel="noreferrer" aria-label="Buy Restoration OFX Suite for 1200 EUR">Buy Suite — €1200</a>
          <a class="btn" href="#plugins">View individual plugins</a>
          <a class="btn" href="mailto:info@cloudstudio.me">Ask a question</a>
        </div>
        <div class="divider"></div>
        <ul class="list">
          - <span class="dot"></span><span>**Suite license** unlocks all plugins.</span>

          - <span class="dot"></span><span>**Individual licenses** available per plugin.</span>

          - <span class="dot"></span><span>After purchase you’ll receive a license key by email (or contact [<u>info@cloudstudio.me</u>](mailto:info@cloudstudio.me)).</span>

        
      </section>

      <aside class="sidebar">
        <div class="mini" id="suite">
          ### Restoration OFX Suite

          Everything included. Best value if you’re restoring film regularly.

          <div class="priceRow">
            <div class="price">€1200</div>
            <div class="small">One suite key unlocks all</div>
          </div>
          <div class="divider"></div>
          <a class="btn primary" href="https://paypal.me/StuartBlakeJones/1200" target="_blank" rel="noreferrer">Pay with PayPal</a>
        </div>

        <div class="mini">
          ### Need help?

          <p>
            Questions about installation, licensing or workflow? Email
            [<u>info@cloudstudio.me</u>](mailto:info@cloudstudio.me).
          </p>
        </div>
      </aside>
    </div>

    <section class="section" id="plugins">
      ## Individual Plugins — from €150

      <div class="grid">
        <div class="card">
          <p class="name">Film Grain Removal</p>
          <p class="desc">Reduce grain while preserving detail. Spatial/temporal options.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Film Stabilizer 3D</p>
          <p class="desc">Stabilisation with marker workflow for tricky archival footage.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Vertical Scratch Fix</p>
          <p class="desc">Reduce vertical scratches and scanning artefacts.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Blue Stain Fix</p>
          <p class="desc">Remove blue/yellow staining with mask and eyedropper tools.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Film Warp Fix</p>
          <p class="desc">Correct warp and distortion for improved stability and alignment.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Technicolor Registration Fix</p>
          <p class="desc">Align color channels and reduce Technicolor registration errors.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Technicolor Look</p>
          <p class="desc">Classic film look emulation with fine-tuned controls.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Optical Sound to WAV</p>
          <p class="desc">Convert optical soundtrack scans into WAV audio output.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Film Colorize AI</p>
          <p class="desc">AI-assisted black & white to color using on-device CoreML models.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Bleach Stain Fix</p>
          <p class="desc">Restore faded / chemically damaged regions with targeted correction controls.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Scratch Paint Fix</p>
          <p class="desc">Manual paint and repair workflow for scratches and small defects.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Detail Recovery</p>
          <p class="desc">Recover perceived detail and texture after heavy restoration processing.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Color Equilizer</p>
          <p class="desc">Fixed-vector Hue & Saturation controls for Red, Green, Blue, Yellow, Cyan and Magenta.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Media Clean</p>
          <p class="desc">Reduce dropouts, dust, dirt and scratches with Fast/Quality modes for timeline and final render.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Noise Reduction</p>
          <p class="desc">Fast spatial + temporal denoise with GPU acceleration (Metal) and detail preservation.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Forensic Enhancement</p>
          <p class="desc">Reveal fine detail with targeted enhancement controls for investigative / archival work.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Look Creator</p>
          <p class="desc">Build custom looks quickly with creative film-style controls and fine tuning.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Cinematic Look Creator</p>
          <p class="desc">Cinematic looks with one dropdown (Neutral, Nitrate, Bleach Bypass, Orange‑Teal, Film Print, Noir, Cyberpunk) plus strength, contrast, saturation and finishing controls.</p>
          <div class="priceRow">
            <div class="price">€150</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/150" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">DaVinci Resolve Studio License</p>
          <p class="desc">One-time license for DaVinci Resolve Studio (activation key delivered by email).</p>
          <div class="priceRow">
            <div class="price">€200</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/200" target="_blank" rel="noreferrer">Buy</a>
          </div>
        </div>

        <div class="card">
          <p class="name">Prefer the full suite?</p>
          <p class="desc">Unlock everything with one suite key.</p>
          <div class="priceRow">
            <div class="price">€1200</div>
            <a class="btn primary" href="https://paypal.me/StuartBlakeJones/1200" target="_blank" rel="noreferrer">Buy Suite</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="demo">
      ## Demo

      <p class="small">Example of the plugins in use (including Noise Reduction).</p>
      <div class="videoWrap" aria-label="Product demo video">
        <div style="position:relative;padding-top:56.25%;">
          <iframe
            src="https://www.youtube.com/embed/wAAc96TKLck"
            title="YouTube video player"
            style="position:absolute;inset:0;width:100%;height:100%;border:0;"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </section>

    <section class="section" id="how">
      ## How purchase & delivery works

      <ul class="list">
        - <span class="dot"></span><span>**Pay with PayPal** using the buttons above.</span>

        - <span class="dot"></span><span>**Delivery:** after payment you will receive installation + licensing instructions and your license key.</span>

        - <span class="dot"></span><span>**Platforms:** macOS supported. **Windows version available (beta) for all plugins.**</span>

        - <span class="dot"></span><span>**Support:** email [<u>info@cloudstudio.me</u>](mailto:info@cloudstudio.me) for questions.</span>

      
      <div class="divider"></div>
      <p class="small">
        Note: PayPal links open in a new tab. If you prefer an invoice or a different payment method, contact
        [<u>info@cloudstudio.me</u>](mailto:info@cloudstudio.me).
      </p>
    </section>

   
    <footer>
      © <span id="y"></span> CloudStudio • Contact: [<u>info@cloudstudio.me</u>](mailto:info@cloudstudio.me)
    </footer>
  </div>

  <script>
    document.getElementById('y').textContent = new Date().getFullYear();
  </script>
</body>
</html>

