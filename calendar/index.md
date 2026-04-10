---
title: Calendar
---

<section id="add-to-calendar" style="margin: 2rem 0;">
  <h2>Add to calendar</h2>
  <p>Subscribe to the Future Days Beer calendar so new events show up automatically.</p>

  <!-- QR code -->
  <div style="margin-top:1.5rem;">
    <h3 style="margin-bottom:0.5rem;">Scan on your phone</h3>
    <p style="margin-top:0; font-size:0.9rem; color:#555;">
      Open your camera, scan this code, and subscribe from your device.
    </p>
    <img
    src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=webcal://calendar.tiwahu.com/futuredaysbeer/calendar.ics"
    alt="QR code for Future Days Beer calendar subscription" width="220"
    height="220" style="border-radius:8px; border:1px solid #eee;" />
  </div>

  <!-- Buttons -->
  <div style="display:flex; flex-wrap:wrap; gap:0.75rem; margin:1rem 0;">
    <!-- iOS / macOS -->
    <a id="btn-apple"
    href="webcal://calendar.tiwahu.com/futuredaysbeer/calendar.ics"
    style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.6rem
    1rem; border-radius:999px; background:#000; color:#fff;
    text-decoration:none; font-weight:600; font-size:0.95rem;"
    > 
      <span style="font-size:1.2rem;">📅</span> <span>Subscribe to Calendar</span>
    </a>

    <!-- Raw ICS link (fallback) -->
    <a id="btn-ics"
    href="https://calendar.tiwahu.com/futuredaysbeer/calendar.ics"
    style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.6rem
    1rem; border-radius:999px; border:1px solid #ccc; color:#333;
    text-decoration:none; font-weight:500; font-size:0.95rem; background:#fff;"
    > 
      <span style="font-size:1.2rem;">📂</span> <span>Download .ics</span>
    </a>
  </div>
</section>
