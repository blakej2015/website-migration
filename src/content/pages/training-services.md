---
title: "Training Services"
description: "



  
  
  
  DaVinci Resolve Colorist Training | Blake Jones
  
    :root {
      --bg: #070a12;
      --panel: rgba(255,255,255,0.06);
      --pane..."
pubDate: 2019-06-28
author: "blake2019"
---


<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="One-to-one and onsite DaVinci Resolve training with Blake Jones. Basic/Starter and Advanced. Zoom or onsite. Certificate included." />
  <title>DaVinci Resolve Colorist Training | Blake Jones</title>
  <style>
    :root {
      --bg: #070a12;
      --panel: rgba(255,255,255,0.06);
      --panel2: rgba(255,255,255,0.08);
      --text: rgba(255,255,255,0.92);
      --muted: rgba(255,255,255,0.68);
      --line: rgba(255,255,255,0.14);
      --accent: #7c3aed;
      --accent2: #22d3ee;
      --good: #34d399;
      --warn: #f59e0b;
      --shadow: 0 18px 60px rgba(0,0,0,0.55);
      --radius: 16px;
      --radius2: 20px;
      --max: 1160px;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      color: var(--text);
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      background:
        radial-gradient(1200px 700px at 20% -10%, rgba(124,58,237,0.35), transparent 60%),
        radial-gradient(900px 600px at 90% 10%, rgba(34,211,238,0.18), transparent 55%),
        radial-gradient(1200px 900px at 60% 120%, rgba(124,58,237,0.22), transparent 60%),
        linear-gradient(180deg, #050712 0%, #070a12 45%, #050712 100%);
      min-height: 100vh;
    }

    a { color: inherit; text-decoration: none; }

    .wrap { max-width: var(--max); margin: 0 auto; padding: 24px; }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 14px 18px;
      border: 1px solid var(--line);
      background: rgba(0,0,0,0.25);
      backdrop-filter: blur(10px);
      border-radius: 999px;
      box-shadow: var(--shadow);
      position: sticky;
      top: 18px;
      z-index: 10;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      letter-spacing: 0.2px;
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 999px;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      box-shadow: 0 0 0 6px rgba(124,58,237,0.12);
    }

    .navlinks {
      display: flex;
      align-items: center;
      gap: 14px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .navlinks a {
      color: var(--muted);
      font-weight: 600;
      font-size: 13px;
      padding: 8px 10px;
      border-radius: 999px;
      border: 1px solid transparent;
    }

    .navlinks a:hover {
      color: var(--text);
      border-color: var(--line);
      background: rgba(255,255,255,0.04);
    }

    .hero {
      padding: 64px 0 24px;
      display: grid;
      grid-template-columns: 1.25fr 0.75fr;
      gap: 22px;
      align-items: start;
    }

    @media (max-width: 980px) {
      .hero { grid-template-columns: 1fr; padding-top: 28px; }
      .nav { position: static; }
    }

    .h1 {
      font-size: 48px;
      line-height: 1.05;
      margin: 0;
      letter-spacing: -0.6px;
    }

    @media (max-width: 560px) {
      .h1 { font-size: 38px; }
    }

    .lead {
      margin: 14px 0 0;
      font-size: 16px;
      line-height: 1.6;
      color: var(--muted);
      max-width: 60ch;
    }

    .ctaRow {
      display: flex;
      gap: 12px;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 18px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 12px 14px;
      border-radius: 999px;
      border: 1px solid var(--line);
      background: rgba(255,255,255,0.04);
      color: var(--text);
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: transform 120ms ease, background 120ms ease, border-color 120ms ease;
    }

    .btn:hover {
      transform: translateY(-1px);
      border-color: rgba(255,255,255,0.22);
      background: rgba(255,255,255,0.06);
    }

    .btnPrimary {
      border-color: rgba(124,58,237,0.45);
      background: linear-gradient(135deg, rgba(124,58,237,0.92), rgba(34,211,238,0.42));
      box-shadow: 0 18px 55px rgba(124,58,237,0.23);
    }

    .btnPrimary:hover {
      background: linear-gradient(135deg, rgba(124,58,237,0.96), rgba(34,211,238,0.48));
      border-color: rgba(124,58,237,0.55);
    }

    .btnSmall {
      padding: 10px 12px;
      font-size: 13px;
      font-weight: 700;
    }

    .heroCard {
      border-radius: var(--radius2);
      border: 1px solid var(--line);
      background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
      box-shadow: var(--shadow);
      padding: 18px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 10px;
      border-radius: 999px;
      font-weight: 800;
      font-size: 12px;
      border: 1px solid var(--line);
      color: rgba(255,255,255,0.86);
      background: rgba(0,0,0,0.22);
    }

    .kpi {
      margin-top: 12px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .kpiItem {
      border-radius: 14px;
      border: 1px solid var(--line);
      background: rgba(0,0,0,0.24);
      padding: 12px;
    }

    .kpiTitle { font-size: 12px; color: var(--muted); font-weight: 700; }
    .kpiValue { margin-top: 4px; font-size: 14px; font-weight: 800; }

    .section {
      padding: 34px 0;
    }

    .sectionTitle {
      margin: 0 0 12px;
      font-size: 22px;
      letter-spacing: -0.2px;
    }

    .grid2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    @media (max-width: 900px) {
      .grid2 { grid-template-columns: 1fr; }
    }

    .card {
      border-radius: var(--radius);
      border: 1px solid var(--line);
      background: rgba(255,255,255,0.04);
      padding: 16px;
      box-shadow: 0 14px 45px rgba(0,0,0,0.38);
    }

    .card h3 { margin: 0 0 10px; font-size: 16px; }
    .card p { margin: 0; color: var(--muted); line-height: 1.6; }

    .pill {
      display: inline-flex;
      align-items: center;
      padding: 6px 10px;
      border-radius: 999px;
      border: 1px solid var(--line);
      background: rgba(0,0,0,0.22);
      color: rgba(255,255,255,0.82);
      font-weight: 800;
      font-size: 12px;
      margin-right: 8px;
      margin-bottom: 8px;
    }

    .pricing {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    @media (max-width: 900px) {
      .pricing { grid-template-columns: 1fr; }
    }

    .price {
      font-size: 30px;
      font-weight: 900;
      margin: 10px 0 0;
      letter-spacing: -0.4px;
    }

    .sub {
      margin-top: 6px;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.5;
    }

    ul {
      padding-left: 18px;
      margin: 12px 0 0;
      color: rgba(255,255,255,0.80);
      line-height: 1.55;
    }

    li { margin: 6px 0; }

    .videoGrid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    @media (max-width: 980px) {
      .videoGrid { grid-template-columns: 1fr; }
    }

    .video {
      border-radius: var(--radius);
      border: 1px solid var(--line);
      overflow: hidden;
      background: rgba(0,0,0,0.25);
      box-shadow: var(--shadow);
    }

    .video iframe {
      width: 100%;
      height: 320px;
      border: 0;
      display: block;
    }

    .clients {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-top: 12px;
    }

    @media (max-width: 880px) {
      .clients { grid-template-columns: 1fr 1fr; }
    }

    @media (max-width: 520px) {
      .clients { grid-template-columns: 1fr; }
    }

    .client {
      border-radius: 14px;
      border: 1px solid var(--line);
      background: rgba(255,255,255,0.03);
      padding: 12px;
      color: rgba(255,255,255,0.82);
      font-weight: 700;
      font-size: 13px;
    }

    .footer {
      padding: 26px 0 40px;
      color: var(--muted);
      font-size: 13px;
      border-top: 1px solid var(--line);
      margin-top: 26px;
    }

    .footer a { text-decoration: underline; }

    .small {
      font-size: 12px;
      color: rgba(255,255,255,0.62);
      line-height: 1.5;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="nav">
      <div class="brand">
        <span class="dot" aria-hidden="true"></span>
        <span>DaVinci Resolve Colorist Training</span>
      </div>
      <div class="navlinks">
        [Programs](#programs)
        [Samples](#videos)
        [Clients](#clients)
        [Enquire](#contact)
      </div>
    </div>

    <section class="hero">
      <div>
        <h1 class="h1">One‑to‑one Resolve training that makes you faster, more confident, and more consistent.</h1>
        <p class="lead">
          Practical, professional training for colorists and post teams: Resolve operation, grading fundamentals, and advanced workflows.
          Available online via Zoom (with recording) or onsite for groups.
        </p>

        <div class="ctaRow">
          <a class="btn btnPrimary" href="#programs">View programs</a>
          <a class="btn" href="mailto:blake@cloudstudio.me?subject=Resolve%20Training%20Enquiry">Enquire by email</a>
          <a class="btn" href="https://paypal.me/StuartBlakeJones">Pay via PayPal</a>
        </div>

        <div class="small">
          Payment via PayPal or direct bank transfer. Certificate issued upon completion.
        </div>
      </div>

      <aside class="heroCard">
        <div class="badge">Training rate</div>
        <div class="price">€870 <span style="font-size:14px;font-weight:800;color:rgba(255,255,255,0.70)">/ day</span></div>
        <div class="sub">One-to-one training (online via Zoom or onsite).</div>

        <div class="kpi">
          <div class="kpiItem">
            <div class="kpiTitle">Delivery</div>
            <div class="kpiValue">1:1 Zoom (recording available) or onsite</div>
          </div>
          <div class="kpiItem">
            <div class="kpiTitle">Onsite groups</div>
            <div class="kpiValue">Up to 10 people (travel/hotel/food billed separately)</div>
          </div>
          <div class="kpiItem">
            <div class="kpiTitle">Certificate</div>
            <div class="kpiValue">Included on completion</div>
          </div>
        </div>
      </aside>
    </section>

    <section class="section" id="programs">
      <h2 class="sectionTitle">Programs</h2>
      <div class="pricing">
        <div class="card">
          <div class="pill">Resolve 101</div>
          ### Basic / Starter

          Perfect if you want a clean foundation and reliable workflows.

          
            - Resolve interface & project setup

            - Media management, timelines, deliverables

            - Primary grading fundamentals

            - Scopes, balancing, and shot matching

            - Workflow best practices (speed + consistency)

          
          <div class="ctaRow" style="margin-top:14px">
            <a class="btn btnSmall btnPrimary" href="https://paypal.me/StuartBlakeJones">Pay via PayPal</a>
            <a class="btn btnSmall" href="mailto:blake@cloudstudio.me?subject=Resolve%20101%20Training%20Enquiry">Enquire</a>
          </div>
          <div class="sub">Rate: €870/day (PayPal or bank transfer)</div>
        </div>

        <div class="card">
          <div class="pill">Resolve 201</div>
          ### Advanced

          For working colorists and teams who want tighter control and better repeatability.

          
            - Advanced grading strategies & look development

            - Node structures for speed and consistency

            - Keying, secondaries, tracking, and problem shots

            - Finishing workflows & deliverables

            - Diagnostics & optimization (performance and stability)

          
          <div class="ctaRow" style="margin-top:14px">
            <a class="btn btnSmall btnPrimary" href="https://paypal.me/StuartBlakeJones">Pay via PayPal</a>
            <a class="btn btnSmall" href="mailto:blake@cloudstudio.me?subject=Resolve%20201%20Training%20Enquiry">Enquire</a>
          </div>
          <div class="sub">Rate: €870/day (PayPal or bank transfer)</div>
        </div>
      </div>

      <div class="grid2" style="margin-top:14px">
        <div class="card">
          ### Online training (Zoom)

          <p>
            Training can be taught online using the Zoom application. A recording can be provided for later reference.
          </p>
        </div>
        <div class="card">
          ### Onsite training (teams up to 10)

          <p>
            Training can be delivered onsite to your group of up to ten people. Travel, hotel and food are charged in addition.
          </p>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <h2 class="sectionTitle">About Blake</h2>
      <div class="card">
        <p>
          Blake is a Resolve instructor with the International Colorist Academy. He has over 35 years of experience and gives classes in
          Basic Color Grading, Resolve Operation, Revival Operation and Film Scanner Operation. He is one of the few people who has worked
          with Resolve and Revival since the products were introduced.
        </p>
      </div>
    </section>

    <section class="section" id="videos">
      <h2 class="sectionTitle">Sample videos</h2>
      <div class="sub">Two samples to give you a feel for what you can learn.</div>
      <div class="videoGrid" style="margin-top:12px">
        <div class="video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/8nlN-cDprvA?start=15"
            title="Training sample video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/BYNCpssJnSk"
            title="Training sample video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <section class="section" id="clients">
      <h2 class="sectionTitle">Some of our clients</h2>
      <div class="clients">
        <div class="client">ORF Austrian Television</div>
        <div class="client">YTV Yorkshire TV</div>
        <div class="client">Warner Bros.</div>
        <div class="client">Universal Pictures</div>
        <div class="client">Aljazeera Network</div>
        <div class="client">Ikea</div>
        <div class="client">Zalando</div>
        <div class="client">German Bundesarchiv</div>
        <div class="client">Lufthansa</div>
        <div class="client">Redbull</div>
        <div class="client">RTVE Spanish Television</div>
        <div class="client">Cinecittà Studios</div>
      </div>
    </section>

    <section class="section" id="contact">
      <h2 class="sectionTitle">Enquire / booking</h2>
      <div class="grid2">
        <div class="card">
          ### Email

          For availability, scheduling, onsite quotes, and bank transfer details.

          <div class="ctaRow" style="margin-top:14px">
            <a class="btn btnPrimary" href="mailto:blake@cloudstudio.me?subject=Resolve%20Training%20Enquiry">Enquire by email</a>
            <a class="btn" href="https://paypal.me/StuartBlakeJones">Pay via PayPal</a>
          </div>
          <div class="small">Email: [blake@cloudstudio.me](mailto:blake@cloudstudio.me)</div>
        </div>
        <div class="card">
          ### Payment options

          <p>
            Payment via PayPal or direct bank transfer. Certificate received upon completion.
          </p>
          
            - PayPal: [paypal.me/StuartBlakeJones](https://paypal.me/StuartBlakeJones)

            - Bank transfer: details provided on request

          
        </div>
      </div>
    </section>

    <div class="footer">
      <div>
        © <span id="y"></span> Blake Jones. Training delivered online via Zoom or onsite by arrangement.
      </div>
      <div class="small">
        Built as a static HTML page. To embed in WordPress/Squarespace, you can use an HTML block and paste the full contents.
      </div>
    </div>
  </div>

  <script>
    document.getElementById('y').textContent = new Date().getFullYear();
  </script>
</body>
</html>

