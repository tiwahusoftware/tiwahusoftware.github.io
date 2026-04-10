---
title: Calendar
---

<section id="add-to-calendar" style="margin: 2rem 0;">
  <h2>Add to calendar</h2>
  <p>Subscribe to the Future Days Beer calendar so new events show up automatically.</p>

  <!-- Buttons -->
  <div style="display:flex; flex-wrap:wrap; gap:0.75rem; margin:1rem 0;">
    <!-- iOS / macOS -->
    <a
      id="btn-apple"
      href="webcal://calendar.tiwahu.com/futuredaysbeer/calendar.ics"
      style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.6rem 1rem; border-radius:999px; background:#000; color:#fff; text-decoration:none; font-weight:600; font-size:0.95rem;"
    >
      <span style="font-size:1.2rem;"></span>
      <span>Add to Apple Calendar</span>
    </a>

    <!-- Google Calendar (generic / Android-friendly) -->
    <a
      id="btn-google"
      href="https://calendar.google.com/calendar/u/0/r/settings/addbyurl?url=https%3A%2F%2Fcalendar.tiwahu.com%2Ffuturedaysbeer%2Fcalendar.ics"
      style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.6rem 1rem; border-radius:999px; background:#4285F4; color:#fff; text-decoration:none; font-weight:600; font-size:0.95rem;"
    >
      <span style="font-size:1.2rem;">📅</span>
      <span>Add to Google Calendar</span>
    </a>

    <!-- Raw ICS link (fallback) -->
    <a
      id="btn-ics"
      href="https://calendar.tiwahu.com/futuredaysbeer/calendar.ics"
      style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.6rem 1rem; border-radius:999px; border:1px solid #ccc; color:#333; text-decoration:none; font-weight:500; font-size:0.95rem; background:#fff;"
    >
      <span style="font-size:1.2rem;">📂</span>
      <span>Download .ics</span>
    </a>
  </div>

  <!-- QR code -->
  <div style="margin-top:1.5rem;">
    <h3 style="margin-bottom:0.5rem;">Scan on your phone</h3>
    <p style="margin-top:0; font-size:0.9rem; color:#555;">
      Open your camera, scan this code, and subscribe from your device.
    </p>
    <img
      src="https://chart.googleapis.com/chart?cht=qr&chs=220x220&chl=https%3A%2F%2Fcalendar.tiwahu.com%2Ffuturedaysbeer%2Fcalendar.ics"
      alt="QR code for Future Days Beer calendar subscription"
      width="220"
      height="220"
      style="border-radius:8px; border:1px solid #eee;"
    />
  </div>
</section>

<script>
  (function () {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    var isMac = navigator.platform && navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    var isAndroid = /Android/.test(ua);
    var isMobile = /Mobi|Android/i.test(ua);

    var appleBtn = document.getElementById('btn-apple');
    var googleBtn = document.getElementById('btn-google');
    var icsBtn = document.getElementById('btn-ics');

    // Base URLs
    var webcalUrl = 'webcal://calendar.tiwahu.com/futuredaysbeer/calendar.ics';
    var httpsIcsUrl = 'https://calendar.tiwahu.com/futuredaysbeer/calendar.ics';
    var googleAddUrl =
      'https://calendar.google.com/calendar/u/0/r/settings/addbyurl?url=' +
      encodeURIComponent(httpsIcsUrl);

    // Default hrefs
    appleBtn.href = webcalUrl;
    googleBtn.href = googleAddUrl;
    icsBtn.href = httpsIcsUrl;

    // Platform-aware tweaks
    if (isIOS || isMac) {
      // Apple world: emphasize webcal
      appleBtn.style.display = 'inline-flex';
      googleBtn.style.opacity = '0.7';
    } else if (isAndroid) {
      // Android: emphasize Google Calendar
      googleBtn.style.display = 'inline-flex';
      appleBtn.style.opacity = '0.7';

      // Some Android browsers don't like webcal://
      appleBtn.href = httpsIcsUrl;
    } else if (!isMobile) {
      // Desktop browser: Google Calendar + ICS are primary
      googleBtn.style.display = 'inline-flex';
      appleBtn.style.opacity = '0.7';
    }
  })();
</script>

