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

  /* Sinhala.
     Terminology is aligned with the app's own si.json so the site and the app
     use the same words: ජලනල, විදුලි, පිරිසිදු කිරීම, වායු සමීකරණ,
     තහවුරු කළ, සේවා සපයන්නා, එස්ක්‍රෝ.
     NEEDS A NATIVE-SPEAKER READ-THROUGH before it is treated as final —
     especially team_1_note, which carries Devike's voice. */
  si: {
    nav_how_it_works: "ක්‍රියා කරන ආකාරය",
    nav_services: "සේවාවන්",
    nav_pro: "සේවා සපයන්නන් සඳහා",
    nav_faq: "ප්‍රශ්න",
    nav_cta: "පළමුවෙන් දැනගන්න",

    hero_badge: "ශ්‍රී ලංකාවේ ඉක්මනින්ම එළිදැක්වේ",
    hero_title_1: "නිවෙස් සේවා,",
    hero_title_2: "නිවැරදිව.",
    hero_desc: "තහවුරු කළ වෘත්තිකයන්. පෙරදාම ස්ථිර මිල. ඔබේ දොරටුව දක්වා සජීවී නිරීක්ෂණය. ඔබේ නිවසේ කටයුතු පිළිවෙළට තබා ගැනීමට විශ්වාසනීය ක්‍රමය.",
    hero_input: "ඔබේ ඊමේල් ලිපිනය",
    hero_btn: "එළිදැක්වූ විට දැනුම් දෙන්න",
    hero_spam: "එළිදක්වන දිනයේ එක් වරක් පමණක් ඊමේල් කරන්නෙමු. වෙන කිසිවක් නැත.",
    badge_soon: "ඉක්මනින්",

    trust_1: "ස්ථිර මිල",
    trust_2: "තහවුරු කළ වෘත්තිකයන්",
    trust_3: "සජීවී නිරීක්ෂණය",
    trust_4: "එස්ක්‍රෝ ගෙවීම",

    hiw_title: "ක්‍රියා කරන ආකාරය",
    hiw_desc: "වෙන්කිරීමේ සිට වැඩ අවසන් වන තුරු සරලයි, පැහැදිලියි.",
    hiw_step1_title: "සේවාව තෝරන්න",
    hiw_step1_desc: "අලුත්වැඩියා කළ යුතු දේ සහ ඔබ සිටින ස්ථානය කියන්න.",
    hiw_step2_title: "ස්ථිර මිලක් ලබා ගන්න",
    hiw_step2_desc: "තහවුරු කළ වෘත්තිකයෙක් රැකියාව පරීක්ෂා කර, සීමා කළ අවසන් මිලක් ලබා දෙයි.",
    hiw_step3_title: "දොරටුව දක්වා නිරීක්ෂණය කරන්න",
    hiw_step3_desc: "ඔවුන් පැමිණෙන ආකාරය සජීවීව බලන්න, වැඩ ආරම්භ කිරීමට පෙර අනන්‍යතාව තහවුරු කරන්න.",
    hiw_step4_title: "වැඩ අවසන් වූ පසු ගෙවන්න",
    hiw_step4_desc: "වැඩ නිවැරදිව අවසන් වූ බව ඔබ තහවුරු කරන තුරු අපි ඔබේ ගෙවීම රඳවා ගනිමු.",

    services_title: "අපගේ සේවාවන්",
    services_desc: "සෑම නිවෙස් අවශ්‍යතාවක් සඳහාම තහවුරු කළ වෘත්තිකයන්.",
    srv_plumbing: "ජලනල",
    srv_plumbing_desc: "කාන්දු, කරාම, නල සහ කානු අවහිරතා.",
    srv_electrical: "විදුලි",
    srv_electrical_desc: "වයරින්, සොකට්, විදුලි පහන් සහ පංකා.",
    srv_cleaning: "පිරිසිදු කිරීම",
    srv_cleaning_desc: "ගැඹුරු පිරිසිදු කිරීම සහ නිත්‍ය නඩත්තුව.",
    srv_ac: "වායු සමීකරණ",
    srv_ac_desc: "සේවා, අලුත්වැඩියා සහ ස්ථාපනය.",

    verify_title: "මෙම පියවර හතර සම්පූර්ණ කරන තුරු කිසිවෙකුට HARI නමින් වැඩ කළ නොහැක.",
    verify_step1_title: "හැඳුනුම්පත් පරිලෝකනය",
    verify_step1_desc: "ජාතික හැඳුනුම්පතේ දෙපැත්තම.",
    verify_step2_title: "හැඳුනුම්පත සමඟ සෙල්ෆියක්",
    verify_step2_desc: "එම හැඳුනුම්පත එය අතැති පුද්ගලයාටම අයත් බව තහවුරු කරයි.",
    verify_step3_title: "පොලිස් වාර්තාව",
    verify_step3_desc: "අනුමත කිරීමට පෙර ඉදිරිපත් කළ පිරිසිදු වාර්තාවක්.",
    verify_step4_title: "මිනිස් සමාලෝචනය",
    verify_step4_desc: "සෑම අයදුම්පතක්ම HARI හි පුද්ගලයෙක් අනුමත හෝ ප්‍රතික්ෂේප කරයි.",

    feat1_title: "ස්ථිර මිල.<br>අනපේක්ෂිත වියදම් නැත.",
    feat1_desc: "රැකියාව හොඳින් පරීක්ෂා කිරීමෙන් පසු මිල එකඟ වේ, එය සීමා කර ඇත, අතරමගදී කිසිදා වෙනස් නොවේ.",
    feat2_title: "සෑම පියවරක්ම නිරීක්ෂණය කරන්න.",
    feat2_desc: "ඔබේ වෘත්තිකයා පැමිණෙන ආකාරය බලන්න, පැමිණෙන වේලාව දැනගන්න, වැඩ ආරම්භ කිරීමට පෙර දොරටුවේදී අනන්‍යතාව තහවුරු කරන්න.",

    start_title: "කොළඹින් ආරම්භය.",
    start_desc: "සෑම රැකියාවක්ම නිවැරදිව කිරීමට හැකි වන පරිදි, අපි මුලින්ම කොළඹ සහ ඒ අවට උපනගරවල ආරම්භ කරමු. ඉන්පසු, ඔබේ සහයෙන්, ශ්‍රී ලංකාව පුරාම.",
    start_form_title: "කොළඹ නොවේද? ඔබ සිටින ප්‍රදේශය කියන්න",
    start_form_town: "ඔබේ නගරය",
    start_form_email: "ඔබේ ඊමේල්",
    start_form_btn: "මගේ ප්‍රදේශයට HARI ඉල්ලන්න",

    hariplus_badge: "HARI+ හඳුන්වා දෙමු",
    hariplus_title: "තමන්ටම වටිනා සාමාජිකත්වයක්.",
    hariplus_desc: "සෑම රැකියාවකින්ම 10% වට්ටමක්, 5% ක්‍රෙඩිට් ලෙස ආපසු, ප්‍රමුඛ වෙන්කිරීම් සහ දීර්ඝ කළ වගකීම. එළිදැක්වීමේදී ලබා ගත හැක.",
    hariplus_btn: "පොරොත්තු ලේඛනයට එක්වන්න",

    pro_title: "නිතිපතා වැඩ.<br>නියමිත වේලාවට ගෙවීම්.",
    pro_desc: "තහවුරු කළ නිවෙස් සේවා වෘත්තිකයන්ගේ ශ්‍රී ලාංකික ජාලයට එක්වන්න. සාධාරණ 18% කොමිස්, ඔබ වෙතට එන රැකියා, සහ ඔබට සැමවිටම ගෙවීම ලැබෙන පරිදි එස්ක්‍රෝ ආරක්ෂාව.",
    pro_benefit1: "සාධාරණ 18% කොමිස්",
    pro_benefit2: "එස්ක්‍රෝ ඔබේ ගෙවීම ආරක්ෂා කරයි",
    pro_benefit3: "ඔබ තෝරන වේලාවට වැඩ කරන්න",
    pro_input: "ඔබේ ඊමේල්",
    pro_btn: "වෘත්තිකයෙකු ලෙස එක්වන්න",

    team_title: "HARI පිටුපස සිටින්නෝ.",
    team_1_name: "දේවිකේ — නිර්මාතෘ",
    team_1_note: "HARI යනු මගේ අදහසයි. එය ආරම්භ වූයේ මෙරට සෑම නිවසක්ම හොඳින් දන්නා දෙයකින් — යමක් අලුත්වැඩියා කළ යුතුය, නමුත් විශ්වාස කළ හැකි කෙනෙකු සොයා ගැනීමට ආරක්ෂිත ක්‍රමයක් නැත. මම HARI නිර්මාණය කළේ එය විසඳීමටයි: කවුරු පැමිණෙන්නේද, එයට කොපමණ වැයවේද, සහ එම වැඩ පිටුපස කෙනෙක් සිටින බව ඔබ දැනගන්නා පරිදි. මෙම යෙදුම දෙන සෑම පොරොන්දුවක්ම ආරම්භ වන්නේ මගෙන්.",
    team_2_name: "මුබාරක්-ඩී — සම-නිර්මාතෘ සහ තාක්ෂණය",
    team_2_note: "යෙදුම නිර්මාණය කළේ ඔහුයි. ඔබේ වෘත්තිකයා පැමිණෙන ආකාරය පෙන්වන නිරීක්ෂණය, ඔවුන් ඇත්තෙන්ම ඔවුන්ම බව තහවුරු කරන PIN අංකය, සහ ඔබ සතුටු වන තුරු නිදහස් නොකරන ගෙවීම — ඒ සියල්ල ඔහුගේ වැඩයි.",
    team_3_name: "දේවංගි — අලෙවිකරණය සහ මෙහෙයුම්",
    team_3_note: "පැමිණෙන වෘත්තිකයා නිවැරදි කෙනා බව සහතික කරයි. පරීක්ෂාවන්, ප්‍රමිතීන් සහ දෛනික කටයුතු බලාගනී — ඔබට අවශ්‍ය වන්නට බොහෝ කලකට පෙරම ඔබේ ගේට්ටුවේ සිටින පුද්ගලයා තහවුරු කර ඇති පරිදි.",

    cta_title: "පළමුවෙන් දැනගන්න.",
    cta_desc: "HARI කොළඹ තුළ ආරම්භ වන දිනයේ, එක් වරක් ඔබට ඊමේල් කරන්නෙමු.",

    faq_title: "නිතර අසන ප්‍රශ්න",
    faq_q1: "HARI කවදා එළිදකිනවාද?",
    faq_a1: "අපි කොළඹ තුළ අවසන් පරීක්ෂණ අවධියේ සිටිමු. ලේඛනයට එක්වන්න — දිනය පළමුවෙන් දැනගන්නා අය ඔබ වනු ඇත. එළිදක්වන දිනයේ එක් වරක් ඊමේල් කරන්නෙමු.",
    faq_q2: "මුලින්ම ආවරණය වන ප්‍රදේශ මොනවාද?",
    faq_a2: "එළිදැක්වීමේදී කොළඹ සහ ඒ අවට උපනගර. ඔබ එම ප්‍රදේශයෙන් පිටත නම් ඔබ සිටින ස්ථානය කියන්න — ඊළඟට කොහේ ආරම්භ කරනවාද යන්න තීරණය කිරීමට අපි එය භාවිත කරමු.",
    faq_q3: "සේවා සපයන්නන් තහවුරු කරන්නේ කෙසේද?",
    faq_a3: "සෑම විටම පියවර හතරක්: හැඳුනුම්පතේ දෙපැත්තේ පරිලෝකනයක්, එම හැඳුනුම්පත අතැතිව සෙල්ෆියක්, පොලිස් වාර්තාවක්, සහ අයදුම්පත ප්‍රතික්ෂේප කළ හැකි HARI හි පුද්ගලයෙකුගේ සමාලෝචනයක්.",
    faq_q4: "මිල තීරණය වන්නේ කෙසේද?",
    faq_a4: "තහවුරු කළ වෘත්තිකයෙක් මුලින්ම පැමිණ රැකියාව බලා, ස්ථිර මිලක් ලබා දෙයි. වැඩ ආරම්භ කිරීමට පෙර ඔබ එය අනුමත කරයි, පසුව එය වැඩි නොවේ.",
    faq_q5: "සේවා සපයන්නන්ට ගෙවීම් ලැබෙන්නේ කෙසේද?",
    faq_a5: "රැකියාව සිදුවන අතරතුර HARI සේවාලාභියාගේ ගෙවීම එස්ක්‍රෝ හි රඳවා ගනී. වැඩ අවසන් බව තහවුරු වූ පසු එය නිදහස් කරයි. සේවා සපයන්නාට කිසිදා ගෙවීම සඳහා පසුපස යාමට සිදු නොවේ.",

    footer_copy: "© 2026 HARI Home Services. සියලු හිමිකම් ඇවිරිණි.",
    footer_privacy: "රහස්‍යතාව",
    footer_terms: "කොන්දේසි",
    footer_contact: "අපට ඊමේල් කරන්න",
    footer_made: "ශ්‍රී ලංකාවේ නිර්මාණය, ශ්‍රී ලංකාව සඳහා.",

    form_ok: "ඔබ ලේඛනයේ ඇත. එළිදක්වන දිනයේ ඊමේල් කරන්නෙමු.",
    form_bad_email: "එම ඊමේල් ලිපිනය නිවැරදි නැති බව පෙනේ — නැවත පරීක්ෂා කරන්න.",
    form_bad_town: "ඔබ සිටින නගරය කියන්න.",
    form_offline: "ලියාපදිංචිය ඉක්මනින් විවෘත වේ — එතෙක් WhatsApp හරහා අප හා සම්බන්ධ වන්න.",
    form_error: "යමක් වැරදුණි. නැවත උත්සාහ කරන්න, නැතහොත් WhatsApp හරහා පණිවිඩයක් යවන්න.",
    form_sending: "යවමින්…"
  },

  /* Tamil.
     Terminology aligned with the app's ta.json: குழாய் வேலை, மின் வேலை,
     சுத்தம் செய்தல், குளிர்சாதனம், சரிபார்க்கப்பட்ட, வழங்குநர், எஸ்க்ரோ.
     NEEDS A NATIVE-SPEAKER READ-THROUGH before it is treated as final —
     especially team_1_note, and the transliterated personal names. */
  ta: {
    nav_how_it_works: "இது எப்படி வேலை செய்கிறது",
    nav_services: "சேவைகள்",
    nav_pro: "தொழில்முறையாளர்களுக்கு",
    nav_faq: "கேள்விகள்",
    nav_cta: "முதலில் அறிந்துகொள்ளுங்கள்",

    hero_badge: "இலங்கையில் விரைவில் அறிமுகம்",
    hero_title_1: "வீட்டுச் சேவைகள்,",
    hero_title_2: "சரியாக.",
    hero_desc: "சரிபார்க்கப்பட்ட தொழில்முறையாளர்கள். முன்பே நிர்ணயிக்கப்பட்ட விலை. உங்கள் வாசல் வரை நேரடிக் கண்காணிப்பு. உங்கள் வீட்டு வேலைகளைக் கவனிக்க நம்பகமான வழி.",
    hero_input: "உங்கள் மின்னஞ்சல் முகவரி",
    hero_btn: "அறிமுகமாகும்போது தெரிவிக்கவும்",
    hero_spam: "அறிமுக நாளில் ஒரு முறை மட்டும் மின்னஞ்சல் அனுப்புவோம். வேறு எதுவும் இல்லை.",
    badge_soon: "விரைவில்",

    trust_1: "நிர்ணயிக்கப்பட்ட விலை",
    trust_2: "சரிபார்க்கப்பட்ட தொழில்முறையாளர்கள்",
    trust_3: "நேரடிக் கண்காணிப்பு",
    trust_4: "எஸ்க்ரோ கட்டணம்",

    hiw_title: "இது எப்படி வேலை செய்கிறது",
    hiw_desc: "முன்பதிவு முதல் வேலை முடிவு வரை எளிமையாக, தெளிவாக.",
    hiw_step1_title: "சேவையைத் தேர்ந்தெடுக்கவும்",
    hiw_step1_desc: "என்ன சரிசெய்ய வேண்டும், நீங்கள் எங்கே இருக்கிறீர்கள் என்று சொல்லுங்கள்.",
    hiw_step2_title: "நிர்ணயிக்கப்பட்ட விலையைப் பெறுங்கள்",
    hiw_step2_desc: "சரிபார்க்கப்பட்ட தொழில்முறையாளர் வேலையைப் பரிசோதித்து, வரம்பிடப்பட்ட இறுதி விலையைத் தருவார்.",
    hiw_step3_title: "வாசல் வரை கண்காணியுங்கள்",
    hiw_step3_desc: "அவர்கள் வந்துகொண்டிருப்பதை நேரடியாகப் பாருங்கள், வேலை தொடங்கும் முன் அடையாளத்தை உறுதிசெய்யுங்கள்.",
    hiw_step4_title: "வேலை முடிந்த பின் செலுத்துங்கள்",
    hiw_step4_desc: "வேலை சரியாக முடிந்ததை நீங்கள் உறுதிசெய்யும் வரை உங்கள் பணத்தை நாங்கள் வைத்திருப்போம்.",

    services_title: "எங்கள் சேவைகள்",
    services_desc: "ஒவ்வொரு வீட்டுத் தேவைக்கும் சரிபார்க்கப்பட்ட தொழில்முறையாளர்கள்.",
    srv_plumbing: "குழாய் வேலை",
    srv_plumbing_desc: "கசிவுகள், குழாய்கள், தண்ணீர்க் குழாய்கள் மற்றும் வடிகால் அடைப்புகள்.",
    srv_electrical: "மின் வேலை",
    srv_electrical_desc: "வயரிங், சொக்கெட், விளக்குகள் மற்றும் மின்விசிறிகள்.",
    srv_cleaning: "சுத்தம் செய்தல்",
    srv_cleaning_desc: "ஆழ்ந்த சுத்தம் மற்றும் வழக்கமான பராமரிப்பு.",
    srv_ac: "குளிர்சாதனம்",
    srv_ac_desc: "சேவை, பழுது நீக்கல் மற்றும் நிறுவல்.",

    verify_title: "இந்த நான்கு நிலைகளையும் கடக்கும் வரை யாரும் HARI பெயரில் வேலை செய்ய முடியாது.",
    verify_step1_title: "அடையாள அட்டை ஸ்கேன்",
    verify_step1_desc: "தேசிய அடையாள அட்டையின் இரு பக்கங்களும்.",
    verify_step2_title: "அடையாள அட்டையுடன் செல்ஃபி",
    verify_step2_desc: "அந்த அட்டை அதைப் பிடித்திருப்பவருக்கே சொந்தம் என்பதை உறுதிசெய்கிறது.",
    verify_step3_title: "பொலிஸ் அறிக்கை",
    verify_step3_desc: "அனுமதிக்கு முன் சமர்ப்பிக்கப்பட்ட தூய்மையான பதிவு.",
    verify_step4_title: "நேரடி பரிசீலனை",
    verify_step4_desc: "ஒவ்வொரு விண்ணப்பத்தையும் HARI-யில் ஒருவர் அனுமதிக்கிறார் அல்லது நிராகரிக்கிறார்.",

    feat1_title: "நிர்ணயிக்கப்பட்ட விலை.<br>எதிர்பாராத செலவுகள் இல்லை.",
    feat1_desc: "வேலையை நன்றாகப் பரிசோதித்த பின் விலை ஒப்புக்கொள்ளப்படுகிறது, அது வரம்பிடப்பட்டது, இடையில் ஒருபோதும் மாறாது.",
    feat2_title: "ஒவ்வொரு நிலையையும் கண்காணியுங்கள்.",
    feat2_desc: "உங்கள் தொழில்முறையாளர் வந்துகொண்டிருப்பதைப் பாருங்கள், வரும் நேரத்தை அறியுங்கள், வேலை தொடங்கும் முன் வாசலில் அடையாளத்தை உறுதிசெய்யுங்கள்.",

    start_title: "கொழும்பிலிருந்து ஆரம்பம்.",
    start_desc: "ஒவ்வொரு வேலையையும் சரியாகச் செய்ய முடியும் என்பதற்காக, முதலில் கொழும்பு மற்றும் அதைச் சுற்றியுள்ள புறநகர்ப் பகுதிகளில் ஆரம்பிக்கிறோம். பின்னர், உங்கள் ஆதரவுடன், இலங்கை முழுவதும்.",
    start_form_title: "கொழும்பில் இல்லையா? நீங்கள் இருக்கும் இடத்தைச் சொல்லுங்கள்",
    start_form_town: "உங்கள் நகரம்",
    start_form_email: "உங்கள் மின்னஞ்சல்",
    start_form_btn: "எனது பகுதிக்கு HARI கேட்கிறேன்",

    hariplus_badge: "HARI+ அறிமுகம்",
    hariplus_title: "தனக்கே பயன் தரும் உறுப்பினர் திட்டம்.",
    hariplus_desc: "ஒவ்வொரு வேலையிலும் 10% தள்ளுபடி, 5% கிரெடிட்டாகத் திரும்ப, முன்னுரிமை முன்பதிவு மற்றும் நீட்டிக்கப்பட்ட உத்தரவாதம். அறிமுகத்தின்போது கிடைக்கும்.",
    hariplus_btn: "காத்திருப்புப் பட்டியலில் சேருங்கள்",

    pro_title: "தொடர்ச்சியான வேலை.<br>சரியான நேரத்தில் பணம்.",
    pro_desc: "சரிபார்க்கப்பட்ட வீட்டுச் சேவை தொழில்முறையாளர்களின் இலங்கை வலையமைப்பில் சேருங்கள். நியாயமான 18% கமிஷன், உங்களை நோக்கி வரும் வேலைகள், உங்களுக்கு எப்போதும் பணம் கிடைக்கும்படி எஸ்க்ரோ பாதுகாப்பு.",
    pro_benefit1: "நியாயமான 18% கமிஷன்",
    pro_benefit2: "எஸ்க்ரோ உங்கள் பணத்தைப் பாதுகாக்கிறது",
    pro_benefit3: "நீங்கள் தேர்ந்தெடுக்கும் நேரத்தில் வேலை",
    pro_input: "உங்கள் மின்னஞ்சல்",
    pro_btn: "தொழில்முறையாளராகச் சேருங்கள்",

    team_title: "HARI-க்குப் பின்னால் இருப்பவர்கள்.",
    team_1_name: "தேவிகே — நிறுவனர்",
    team_1_note: "HARI என்பது எனது யோசனை. இது இந்த நாட்டில் ஒவ்வொரு வீடும் நன்றாக அறிந்த ஒன்றிலிருந்து தொடங்கியது — ஏதாவது சரிசெய்ய வேண்டும், ஆனால் நம்பக்கூடிய ஒருவரைக் கண்டுபிடிக்கப் பாதுகாப்பான வழி இல்லை. அதைச் சரிசெய்யவே நான் HARI-யை வடிவமைத்தேன்: யார் வருகிறார்கள், அதற்கு எவ்வளவு செலவாகும், அந்த வேலைக்குப் பின்னால் ஒருவர் இருக்கிறார் என்பதை நீங்கள் அறியும்படி. இந்தச் செயலி தரும் ஒவ்வொரு வாக்குறுதியும் என்னிடமிருந்தே தொடங்குகிறது.",
    team_2_name: "முபாரக்-டி — இணை நிறுவனர் மற்றும் தொழில்நுட்பம்",
    team_2_note: "செயலியை உருவாக்கியவர் அவர். உங்கள் தொழில்முறையாளர் வந்துகொண்டிருப்பதைக் காட்டும் கண்காணிப்பு, அவர்கள் உண்மையிலேயே அவர்களே என்பதை உறுதிசெய்யும் PIN எண், நீங்கள் திருப்தியடையும் வரை விடுவிக்கப்படாத பணம் — அவை அனைத்தும் அவரது வேலை.",
    team_3_name: "தேவாங்கி — சந்தைப்படுத்தல் மற்றும் செயற்பாடுகள்",
    team_3_note: "வருகிற தொழில்முறையாளர் சரியான நபர் என்பதை உறுதிசெய்கிறார். சரிபார்ப்புகள், தரநிலைகள் மற்றும் அன்றாட நடவடிக்கைகளைக் கவனிக்கிறார் — உங்களுக்குத் தேவைப்படுவதற்கு நெடுநாட்களுக்கு முன்பே உங்கள் வாசலில் நிற்கும் நபர் சரிபார்க்கப்பட்டிருக்கும்படி.",

    cta_title: "முதலில் அறிந்துகொள்ளுங்கள்.",
    cta_desc: "கொழும்பில் HARI ஆரம்பிக்கும் நாளில், ஒரு முறை உங்களுக்கு மின்னஞ்சல் அனுப்புவோம்.",

    faq_title: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    faq_q1: "HARI எப்போது அறிமுகமாகும்?",
    faq_a1: "நாங்கள் கொழும்பில் இறுதிச் சோதனைக் கட்டத்தில் இருக்கிறோம். பட்டியலில் சேருங்கள் — தேதியை முதலில் அறிபவர்களாக நீங்கள் இருப்பீர்கள். அறிமுக நாளில் ஒரு முறை மின்னஞ்சல் அனுப்புவோம்.",
    faq_q2: "முதலில் எந்தப் பகுதிகளை உள்ளடக்குவீர்கள்?",
    faq_a2: "அறிமுகத்தின்போது கொழும்பு மற்றும் அதை ஒட்டிய புறநகர்ப் பகுதிகள். நீங்கள் அந்தப் பகுதிக்கு வெளியே இருந்தால் நீங்கள் இருக்கும் இடத்தைச் சொல்லுங்கள் — அடுத்து எங்கு ஆரம்பிப்பது என்பதைத் தீர்மானிக்க அதைப் பயன்படுத்துவோம்.",
    faq_q3: "தொழில்முறையாளர்களை எப்படிச் சரிபார்க்கிறீர்கள்?",
    faq_a3: "எப்போதும் நான்கு நிலைகள்: அடையாள அட்டையின் இரு பக்க ஸ்கேன், அந்த அட்டையைப் பிடித்த செல்ஃபி, பொலிஸ் அறிக்கை, மற்றும் விண்ணப்பத்தை நிராகரிக்கும் அதிகாரம் கொண்ட HARI ஊழியரின் பரிசீலனை.",
    faq_q4: "விலை எப்படித் தீர்மானிக்கப்படுகிறது?",
    faq_a4: "சரிபார்க்கப்பட்ட தொழில்முறையாளர் முதலில் வந்து வேலையைப் பார்த்து, நிர்ணயிக்கப்பட்ட விலையைத் தருவார். வேலை தொடங்கும் முன் நீங்கள் அதை அனுமதிக்கிறீர்கள், பின்னர் அது கூடாது.",
    faq_q5: "தொழில்முறையாளர்களுக்கு எப்படிப் பணம் கிடைக்கும்?",
    faq_a5: "வேலை நடக்கும்போது வாடிக்கையாளரின் பணத்தை HARI எஸ்க்ரோவில் வைத்திருக்கும். வேலை முடிந்தது உறுதியானதும் அது விடுவிக்கப்படும். தொழில்முறையாளர் பணத்திற்காக ஒருபோதும் அலைய வேண்டியதில்லை.",

    footer_copy: "© 2026 HARI Home Services. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    footer_privacy: "தனியுரிமை",
    footer_terms: "நிபந்தனைகள்",
    footer_contact: "எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்",
    footer_made: "இலங்கையில் உருவானது, இலங்கைக்காக.",

    form_ok: "நீங்கள் பட்டியலில் இருக்கிறீர்கள். அறிமுக நாளில் மின்னஞ்சல் அனுப்புவோம்.",
    form_bad_email: "அந்த மின்னஞ்சல் முகவரி சரியாகத் தெரியவில்லை — மீண்டும் பாருங்கள்.",
    form_bad_town: "நீங்கள் இருக்கும் நகரத்தைச் சொல்லுங்கள்.",
    form_offline: "பதிவு விரைவில் திறக்கும் — அதுவரை WhatsApp மூலம் எங்களைத் தொடர்பு கொள்ளுங்கள்.",
    form_error: "ஏதோ தவறாகிவிட்டது. மீண்டும் முயற்சிக்கவும், அல்லது WhatsApp மூலம் செய்தி அனுப்பவும்.",
    form_sending: "அனுப்புகிறது…"
  }
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
