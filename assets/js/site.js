/* ------------------------------------------------------------------
   HARI landing page
   ------------------------------------------------------------------
   1. CONFIG      - the only part you need to edit to go live
   2. STRINGS     - all visible copy, keyed by language
   3. LANGUAGE    - toggle, persistence, English fallback
   4. FORMS       - Google Form submission
   5. NAV         - mobile menu
   ------------------------------------------------------------------ */

/* ============ 1. CONFIG ============ */
/* Fill these in from your Google Form. README.md has step-by-step
   instructions for finding the form ID and the entry.NNNN field IDs.
   While GOOGLE_FORM_ACTION is empty the forms stay honest: they tell the
   visitor signups aren't open yet instead of faking a success message. */
const GOOGLE_FORM_ACTION = ""; // e.g. "https://docs.google.com/forms/d/e/1FAIpQLSc.../formResponse"
const FIELD_EMAIL = "";        // e.g. "entry.1234567890"
const FIELD_TOWN = "";         // e.g. "entry.2345678901"
const FIELD_TYPE = "";         // e.g. "entry.3456789012"  (client / pro / area)

/* ============ 2. STRINGS ============ */
/* English is the source of truth. Sinhala and Tamil only need the keys that
   have been translated — anything missing falls back to English silently,
   so a half-finished translation never shows placeholder text to a visitor. */
const strings = {
  en: {
    nav_how_it_works: "How it works",
    nav_services: "Services",
    nav_pro: "For professionals",
    nav_faq: "FAQ",
    nav_cta: "Get early access",

    hero_badge: "Launching soon in Sri Lanka",
    hero_title_1: "Home services,",
    hero_title_2: "done right.",
    hero_desc: "Verified professionals. Fixed upfront pricing. Live tracking to your door. The reliable way to manage your home.",
    hero_input: "Enter your email",
    hero_btn: "Notify me at launch",
    hero_spam: "We'll email you once, on launch day. No spam.",
    badge_soon: "Coming soon to",

    trust_1: "Fixed prices",
    trust_2: "Verified pros",
    trust_3: "Live tracking",
    trust_4: "Escrow payment",

    hiw_title: "How it works",
    hiw_desc: "Simple, transparent, and seamless from booking to completion.",
    hiw_step1_title: "Choose a service",
    hiw_step1_desc: "Tell us what needs fixing and where you are.",
    hiw_step2_title: "Get a fixed quote",
    hiw_step2_desc: "A verified pro inspects the job, then quotes a price that is capped and final.",
    hiw_step3_title: "Track them to your door",
    hiw_step3_desc: "Watch them arrive live, and confirm their ID before they start.",
    hiw_step4_title: "Pay when it's done",
    hiw_step4_desc: "We hold your payment until you confirm the work was done right.",

    services_title: "Our services",
    services_desc: "Verified professionals for every home need.",
    srv_plumbing: "Plumbing",
    srv_plumbing_desc: "Leaks, taps, pipes and blockages.",
    srv_electrical: "Electrical",
    srv_electrical_desc: "Wiring, sockets, lights and fans.",
    srv_cleaning: "Cleaning",
    srv_cleaning_desc: "Deep cleans and regular upkeep.",
    srv_ac: "Air conditioning",
    srv_ac_desc: "Servicing, repairs and installation.",

    verify_title: "Nobody works under the HARI name until they clear all four.",
    verify_step1_title: "NIC scan",
    verify_step1_desc: "Both sides of the national identity card.",
    verify_step2_title: "Selfie with NIC",
    verify_step2_desc: "Confirms the card belongs to the person holding it.",
    verify_step3_title: "Police report",
    verify_step3_desc: "A clean record, submitted before approval.",
    verify_step4_title: "Manual review",
    verify_step4_desc: "A person at HARI approves or rejects every application.",

    feat1_title: "Fixed prices.<br>No surprises.",
    feat1_desc: "The price is agreed after a proper look at the job, capped, and never changed halfway through. No bait-and-switch.",
    feat2_title: "Track every step.",
    feat2_desc: "See your professional on the way, know when they'll arrive, and confirm their ID at the gate before any work starts.",

    start_title: "Starting in Colombo.",
    start_desc: "We're launching in Colombo and the surrounding suburbs first, so we can get every job right before we grow. Then, with your help, across the rest of Sri Lanka.",
    start_form_title: "Not in Colombo? Tell us where you are",
    start_form_town: "Your town",
    start_form_email: "Your email",
    start_form_btn: "Request HARI in my area",

    hariplus_badge: "Introducing HARI+",
    hariplus_title: "A membership that pays for itself.",
    hariplus_desc: "10% off every job, 5% back in credits, priority booking and an extended workmanship warranty. Available at launch.",
    hariplus_btn: "Join the waitlist",

    pro_title: "Steady work.<br>Paid on time.",
    pro_desc: "Join Sri Lanka's network for verified home service professionals. A fair 18% commission, jobs that come to you, and payment protected in escrow so you always get paid.",
    pro_benefit1: "Fair 18% commission",
    pro_benefit2: "Escrow protects your payment",
    pro_benefit3: "Work the hours you choose",
    pro_input: "Your email",
    pro_btn: "Join as a professional",

    team_title: "The people behind HARI.",
    team_1_name: "Devike — Founder",
    team_1_note: "HARI is my idea. It came from something every household here knows too well — you need something fixed, and there's no safe way to find someone you can trust. I designed HARI to fix that: so you know who's coming, what it costs, and that someone stands behind the work. Every promise this app makes starts with me.",
    team_2_name: "Mubarak-D — Co-founder &amp; Technology",
    team_2_note: "Built the app. The tracking that shows your pro on the way, the PIN that confirms it's really them, and the payment that isn't released until you're happy — that's his work.",
    team_3_name: "Devangi — Marketing &amp; Operations",
    team_3_note: "Makes sure the professional who arrives is the right one. Handles the checks, the standards and the day-to-day running, so the person at your gate has already been verified long before you needed them.",

    cta_title: "Be the first to know.",
    cta_desc: "We'll email you once, on the day HARI opens in Colombo.",

    faq_title: "Frequently asked questions",
    faq_q1: "When is HARI launching?",
    faq_a1: "We're in final testing in Colombo. Join the list and you'll be the first to know the date — we'll email you once, on launch day.",
    faq_q2: "Which areas will you cover first?",
    faq_a2: "Colombo and the immediate suburbs at launch. If you're outside that area, tell us where you are and we'll use it to decide where we go next.",
    faq_q3: "How do you verify your professionals?",
    faq_a3: "Four gates, every time: a scan of both sides of the NIC, a selfie holding that NIC, a police report, and a manual review by a person at HARI who can reject the application.",
    faq_q4: "How is the price decided?",
    faq_a4: "A verified professional visits first and looks at the actual job, then gives you a fixed quote. You approve it before any work starts, and it can't creep up afterwards.",
    faq_q5: "How do professionals get paid?",
    faq_a5: "HARI holds the client's payment in escrow while the job is on. Once the work is confirmed done, it's released. The professional is never left chasing a customer for money.",

    footer_copy: "© 2026 HARI Home Services. All rights reserved.",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_contact: "Email us",
    footer_made: "Made in Sri Lanka, for Sri Lanka.",

    form_ok: "You're on the list. We'll email you on launch day.",
    form_bad_email: "That email doesn't look right — please check it.",
    form_bad_town: "Please tell us which town you're in.",
    form_offline: "Signups open shortly — reach us on WhatsApp in the meantime.",
    form_error: "Something went wrong. Please try again, or message us on WhatsApp.",
    form_sending: "Sending…"
  },

  /* Sinhala — add translated keys here. Anything absent falls back to English.
     Have a native speaker write these; do not machine-translate. */
  si: {},

  /* Tamil — same. */
  ta: {}
};

/* ============ 3. LANGUAGE ============ */
function t(key) {
  const lang = document.documentElement.lang || "en";
  return (strings[lang] && strings[lang][key]) || strings.en[key] || "";
}

function setLanguage(lang) {
  if (!strings[lang]) lang = "en";
  document.documentElement.lang = lang;
  try {
    localStorage.setItem("hari_lang", lang);
  } catch (e) {
    /* private browsing — the toggle still works for this visit */
  }

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.setAttribute("data-active", btn.dataset.lang === lang);
  });

  document.querySelectorAll("[data-t]").forEach(function (el) {
    const val = t(el.getAttribute("data-t"));
    if (val) el.innerHTML = val;
  });

  document.querySelectorAll("[data-t-placeholder]").forEach(function (el) {
    const val = t(el.getAttribute("data-t-placeholder"));
    if (val) el.placeholder = val;
  });
}

/* ============ 4. FORMS ============ */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function showMsg(form, text, ok) {
  const msg = form.querySelector("[data-form-msg]");
  if (!msg) return;
  msg.textContent = text;
  msg.classList.remove("hidden");
  msg.classList.toggle("text-error", ok === false);
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const kind = form.dataset.form; // client | pro | area
  const emailEl = form.querySelector('input[type="email"]');
  const townEl = form.querySelector('input[name="town"]');
  const btn = form.querySelector('button[type="submit"]');

  const email = emailEl ? emailEl.value.trim() : "";
  if (!EMAIL_RE.test(email)) {
    showMsg(form, t("form_bad_email"), false);
    if (emailEl) emailEl.focus();
    return;
  }
  if (townEl && !townEl.value.trim()) {
    showMsg(form, t("form_bad_town"), false);
    townEl.focus();
    return;
  }

  if (!GOOGLE_FORM_ACTION || !FIELD_EMAIL) {
    showMsg(form, t("form_offline"), false);
    return;
  }

  const body = new FormData();
  body.append(FIELD_EMAIL, email);
  if (FIELD_TOWN && townEl) body.append(FIELD_TOWN, townEl.value.trim());
  if (FIELD_TYPE) body.append(FIELD_TYPE, kind);

  const original = btn ? btn.textContent : "";
  if (btn) {
    btn.disabled = true;
    btn.textContent = t("form_sending");
  }

  /* Google Forms does not send CORS headers, so the response is opaque and
     cannot be read. A resolved promise means the request left the browser. */
  fetch(GOOGLE_FORM_ACTION, { method: "POST", mode: "no-cors", body: body })
    .then(function () {
      showMsg(form, t("form_ok"), true);
      form.reset();
    })
    .catch(function () {
      showMsg(form, t("form_error"), false);
    })
    .finally(function () {
      if (btn) {
        btn.disabled = false;
        btn.textContent = original;
      }
    });
}

/* ============ 5. NAV ============ */
function initNav() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon");
  if (!btn || !menu) return;

  function close() {
    menu.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Open menu");
    if (icon) icon.textContent = "menu";
  }

  btn.addEventListener("click", function () {
    const open = menu.classList.toggle("hidden") === false;
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (icon) icon.textContent = open ? "close" : "menu";
  });

  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", close);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) close();
  });
}

/* ============ INIT ============ */
document.addEventListener("DOMContentLoaded", function () {
  let saved = "en";
  try {
    saved = localStorage.getItem("hari_lang") || "en";
  } catch (e) {
    /* ignore */
  }
  setLanguage(saved);

  document.querySelectorAll("form[data-form]").forEach(function (form) {
    form.addEventListener("submit", handleSubmit);
  });

  initNav();
});
