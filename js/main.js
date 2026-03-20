// ── NAVBAR SCROLL ───────────────────────
const nav=document.getElementById('navbar');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>50));

// ── REVEAL ON SCROLL ────────────────────
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');obs.unobserve(e.target);}});
},{threshold:.1,rootMargin:'0px 0px -36px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// ── SMOOTH SCROLL ───────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const t=document.querySelector(a.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth'});
  });
});

// ── LANGUAGE SWITCHER ───────────────────
const translations = {
  es: {
    nav_philosophy: 'Filosofía',
    nav_services: 'Servicios',
    nav_process: 'Proceso',
    nav_cta: 'Cotización Gratuita',
    hero_eyebrow: 'Miami, Florida — Est. 2024',
    hero_h1: '<em>Construcción Ética.</em><span class="h1-line">Alta Tecnología.</span><span class="h1-line">Confianza Total.</span>',
    hero_sub: '<strong>Electricidad · Plomería · Techos · Construcción</strong><br/>Soluciones integrales para tu propiedad en Miami, cuidando tu inversión como si fuera la nuestra.',
    hero_btn1: 'Solicitar Cotización Transparente',
    hero_btn2: 'Conoce Nuestra Filosofía',
    hero_scroll: 'Scroll',
    trust_1: 'Licenciado e Asegurado en Florida',
    trust_2: '100% Permisos y Cumplimiento',
    trust_3: 'Cotizaciones Honestas y Transparentes',
    trust_4: 'Servicio Centrado en el Ser Humano',
    trust_5: 'Miami-Dade y Broward',
    mani_tag: 'Nuestro Compromiso',
    mani_title: 'Los Tres Pilares<br/>de <em>REC PROBUILD</em>',
    mani_desc: 'En un sector donde abunda la falta de transparencia, nosotros construimos diferente. Cada proyecto, cada presupuesto, cada decisión se guía por principios que ponen al cliente primero — siempre.',
    p1_num: '01 / 03', p1_title: 'Cumplimiento Legal Total',
    p1_text: 'Operamos al 100% dentro de la ley. Cada proyecto cuenta con todos sus permisos, licencias vigentes y seguros completos. No hay atajos, no hay riesgos para tu propiedad.',
    p2_num: '02 / 03', p2_title: 'Honradez del Presupuesto',
    p2_text: 'Solo presupuestamos lo que genuinamente necesitas. Auditorías transparentes, materiales justificados, cero inflación artificial. Tu dinero va exactamente donde debe ir.',
    p3_num: '03 / 03', p3_title: 'Humanidad del Servicio',
    p3_text: 'Eres un vecino de Miami, no solo un contrato. Te escuchamos, te explicamos cada decisión y te acompañamos con el respeto y la empatía que mereces.',
    srv_tag: 'Especialidades',
    srv_title: 'Servicios <em>Integrales</em>',
    srv_elec: 'Electricidad',
    srv_elec_desc: 'Instalaciones eléctricas residenciales y comerciales certificadas. Paneles, cableado, iluminación LED y sistemas de seguridad.',
    srv_plom: 'Plomería',
    srv_plom_desc: 'Detección de fugas, reparación de tuberías, instalación de sistemas de agua. Rápido, limpio y garantizado por escrito.',
    srv_tech: 'Techos',
    srv_tech_desc: 'Instalación, reparación y sustitución de techos. Tejas, metal, TPO, shingles. Inspecciones post-huracán y certificaciones para seguro.',
    srv_cons: 'Construcción',
    srv_cons_desc: 'Remodelaciones integrales, adiciones, cocinas, baños y construcción desde cero. Proyectos residenciales y comerciales en el sur de Florida.',
    srv_more: 'Ver Servicio →',
    why_tag: 'Por Qué Elegirnos',
    why_title: 'No Vendemos<br/>lo que <em>No Necesitas</em>',
    why_sub: 'En un mercado saturado de promesas rotas, nosotros entregamos resultados medibles. Cada proyecto es una oportunidad de demostrar que la ética y la excelencia técnica no son opuestos — son inseparables.',
    why_body1: 'En Miami, el mercado de construcción está lleno de contratistas que inflan presupuestos, crean urgencias falsas y cobran por trabajos innecesarios. <strong>Nosotros somos el antídoto.</strong>',
    why_body2: 'Nuestro proceso comienza con una evaluación honesta. Si tu techo necesita un parche, te decimos que necesita un parche. Tu confianza vale más que un contrato apresurado.',
    why_s1: '100%', why_s1l: '<strong>Licencias Vigentes</strong>Certificados por el estado de Florida para todos los servicios ofrecidos.',
    why_s2: '$0', why_s2l: '<strong>Cargos Ocultos</strong>Presupuesto final = factura final. Sin sorpresas al terminar el trabajo.',
    why_s3: '24/7', why_s3l: '<strong>Atención de Emergencias</strong>Respuesta rápida para situaciones críticas en toda el área de Miami.',
    why_quote: '"Construimos con la misma integridad con la que trataríamos nuestra propia casa."',
    why_cta: 'Habla con Nosotros',
    proc_tag: 'Metodología',
    proc_title: 'Nuestro <em>Proceso</em>',
    proc_s1: 'Evaluación', proc_s1d: 'Inspeccionamos el proyecto a fondo. Sin diagnósticos inventados.',
    proc_s2: 'Cotización', proc_s2d: 'Presupuesto detallado y transparente. Sin sorpresas al final.',
    proc_s3: 'Ejecución', proc_s3d: 'Trabajo certificado con materiales de calidad y permisos completos.',
    proc_s4: 'Entrega', proc_s4d: 'Revisión final contigo. Garantía por escrito incluida.',
    proc_head_tag: 'Cómo Trabajamos',
    proc_head_title: 'Tu Proyecto, <em>Paso a Paso</em>',
    proc_card1: 'Evaluación Honesta',
    proc_card1_desc: 'Inspeccionamos tu propiedad sin costo y sin compromiso. Te decimos exactamente lo que vemos, sin exagerar el problema.',
    proc_card2: 'Cotización Transparente',
    proc_card2_desc: 'Cada línea del presupuesto está justificada. Materiales, mano de obra, permisos. Todo detallado, sin líneas vagas.',
    proc_card3: 'Ejecución Certificada',
    proc_card3_desc: 'Trabajamos con permisos activos y personal certificado. Inspecciones del condado completadas a tiempo, siempre.',
    proc_card4: 'Entrega y Garantía',
    proc_card4_desc: 'Entregamos el proyecto completo con toda la documentación. Garantía escrita cubre materiales y mano de obra.',
    cta_tag: 'Contáctanos',
    cta_title: '¿Listo Para <em>Construir</em><br/>con Integridad?',
    cta_sub: 'Cotización gratuita y sin compromiso. Respuesta en menos de 2 horas.',
    cta_phone: 'Llamar Ahora',
    cta_sms: 'Enviar SMS',
    cta_tag_alt: 'Trabajemos Juntos',
    cta_title_alt: 'Tu Propiedad<br/>en <em>Buenas Manos</em>',
    cta_sub_alt: 'Cotización gratuita, sin compromiso y sin letras pequeñas. Solo una conversación honesta sobre lo que necesitas.',
    cta_whatsapp: 'Enviar Mensaje',
    cta_divider: 'o contáctanos directamente',
    cta_label_phone: 'Teléfono',
    cta_label_email: 'Email',
    cta_label_area: 'Área de Servicio',
    cta_area: 'Miami-Dade & Broward',
    form_name: 'Nombre',
    form_phone: 'Teléfono',
    form_email: 'Correo electrónico',
    form_service: 'Servicio',
    form_message: 'Cuéntanos qué necesitas',
    form_name_ph: 'Tu nombre completo',
    form_phone_ph: '(305) 898-2573',
    form_email_ph: 'tu@email.com',
    form_message_ph: 'Describe el proyecto, urgencia, ubicación o detalles importantes...',
    form_submit: 'Enviar por WhatsApp',
    form_helper: 'Tu mensaje se abrirá en WhatsApp con los datos ya organizados para enviarlo en un toque.',
    form_services: ['Electricidad', 'Plomería', 'Techos', 'Construcción', 'Otro'],
    foot_copy: '© 2025 <strong>REC PROBUILD LLC</strong> — Miami, Florida. Todos los derechos reservados.',
    foot_privacy: 'Privacidad',
    foot_terms: 'Términos',
    foot_lic: 'Licencias',
    foot_badge: 'FL Licenciado y Asegurado',
    wa_label: 'Contactar por WhatsApp'
  },
  en: {
    nav_philosophy: 'Philosophy',
    nav_services: 'Services',
    nav_process: 'Process',
    nav_cta: 'Free Quote',
    hero_eyebrow: 'Miami, Florida — Est. 2024',
    hero_h1: '<em>Ethical Construction.</em><span class="h1-line">High Technology.</span><span class="h1-line">Total Trust.</span>',
    hero_sub: '<strong>Electrical · Plumbing · Roofing · Construction</strong><br/>Comprehensive solutions for your property in Miami, protecting your investment as if it were our own.',
    hero_btn1: 'Request Transparent Quote',
    hero_btn2: 'Our Philosophy',
    hero_scroll: 'Scroll',
    trust_1: 'Licensed & Insured in Florida',
    trust_2: '100% Permits & Compliance',
    trust_3: 'Honest Transparent Quotes',
    trust_4: 'Human-Centered Service',
    trust_5: 'Miami-Dade & Broward',
    mani_tag: 'Our Commitment',
    mani_title: 'The Three Pillars<br/>of <em>REC PROBUILD</em>',
    mani_desc: 'In an industry where transparency is often lacking, we build differently. Every project, every estimate, every decision is guided by principles that put the client first — always.',
    p1_num: '01 / 03', p1_title: 'Full Legal Compliance',
    p1_text: 'We operate 100% within the law. Every project includes all permits, active licenses, and complete insurance. No shortcuts, no risks to your property.',
    p2_num: '02 / 03', p2_title: 'Honest Budgeting',
    p2_text: 'We only quote what you genuinely need. Transparent audits, justified materials, zero artificial inflation. Your money goes exactly where it should.',
    p3_num: '03 / 03', p3_title: 'Human-Centered Service',
    p3_text: 'You\'re a Miami neighbor, not just a contract. We listen, explain every decision, and accompany you with the respect and empathy you deserve.',
    srv_tag: 'Specialties',
    srv_title: '<em>Comprehensive</em> Services',
    srv_elec: 'Electrical',
    srv_elec_desc: 'Certified residential and commercial electrical installations. Panels, wiring, LED lighting and security systems.',
    srv_plom: 'Plumbing',
    srv_plom_desc: 'Leak detection, pipe repair, water system installation. Fast, clean and guaranteed in writing.',
    srv_tech: 'Roofing',
    srv_tech_desc: 'Roof installation, repair and replacement. Tiles, metal, TPO, shingles. Post-hurricane inspections and insurance certifications.',
    srv_cons: 'Construction',
    srv_cons_desc: 'Full remodels, additions, kitchens, bathrooms and new construction. Residential and commercial projects in South Florida.',
    srv_more: 'See Service →',
    why_tag: 'Why Choose Us',
    why_title: 'We Don\'t Sell<br/>What You <em>Don\'t Need</em>',
    why_sub: 'In a market saturated with broken promises, we deliver measurable results. Every project is an opportunity to prove that ethics and technical excellence are not opposites — they\'re inseparable.',
    why_body1: 'In Miami, the construction market is full of contractors who inflate budgets, create false urgencies and charge for unnecessary work. <strong>We are the antidote.</strong>',
    why_body2: 'Our process starts with an honest assessment. If your roof needs a patch, we tell you it needs a patch. Your trust is worth more than a rushed contract.',
    why_s1: '100%', why_s1l: '<strong>Active Licenses</strong>Certified by the State of Florida for all services offered.',
    why_s2: '$0', why_s2l: '<strong>Hidden Charges</strong>Final estimate = final invoice. No surprises when the job is done.',
    why_s3: '24/7', why_s3l: '<strong>Emergency Response</strong>Fast response for critical situations throughout the Miami area.',
    why_quote: '"We build with the same integrity we would use on our own home."',
    why_cta: 'Talk to Us',
    proc_tag: 'Methodology',
    proc_title: 'Our <em>Process</em>',
    proc_s1: 'Evaluation', proc_s1d: 'We thoroughly inspect the project. No invented diagnoses.',
    proc_s2: 'Quote', proc_s2d: 'Detailed and transparent estimate. No surprises at the end.',
    proc_s3: 'Execution', proc_s3d: 'Certified work with quality materials and complete permits.',
    proc_s4: 'Delivery', proc_s4d: 'Final review with you. Written warranty included.',
    proc_head_tag: 'How We Work',
    proc_head_title: 'Your Project, <em>Step by Step</em>',
    proc_card1: 'Honest Evaluation',
    proc_card1_desc: 'We inspect your property at no cost and with no obligation. We tell you exactly what we see, without exaggerating the problem.',
    proc_card2: 'Transparent Quote',
    proc_card2_desc: 'Every line of the estimate is justified. Materials, labor, permits. Everything detailed, with no vague line items.',
    proc_card3: 'Certified Execution',
    proc_card3_desc: 'We work with active permits and certified personnel. County inspections completed on time, always.',
    proc_card4: 'Delivery and Warranty',
    proc_card4_desc: 'We deliver the complete project with all documentation. Written warranty covers materials and labor.',
    cta_tag: 'Contact Us',
    cta_title: 'Ready to <em>Build</em><br/>with Integrity?',
    cta_sub: 'Free quote, no commitment. Response in less than 2 hours.',
    cta_phone: 'Call Now',
    cta_sms: 'Send SMS',
    cta_tag_alt: 'Let\'s Work Together',
    cta_title_alt: 'Your Property<br/>in <em>Good Hands</em>',
    cta_sub_alt: 'Free quote, no obligation, and no fine print. Just an honest conversation about what you need.',
    cta_whatsapp: 'Send Message',
    cta_divider: 'or contact us directly',
    cta_label_phone: 'Phone',
    cta_label_email: 'Email',
    cta_label_area: 'Service Area',
    cta_area: 'Miami-Dade & Broward',
    form_name: 'Name',
    form_phone: 'Phone',
    form_email: 'Email',
    form_service: 'Service',
    form_message: 'Tell us what you need',
    form_name_ph: 'Your full name',
    form_phone_ph: '(305) 898-2573',
    form_email_ph: 'name@email.com',
    form_message_ph: 'Describe the project, urgency, location, or important details...',
    form_submit: 'Send via WhatsApp',
    form_helper: 'Your message will open in WhatsApp with the details already organized and ready to send.',
    form_services: ['Electrical', 'Plumbing', 'Roofing', 'Construction', 'Other'],
    foot_copy: '© 2025 <strong>REC PROBUILD LLC</strong> — Miami, Florida. All rights reserved.',
    foot_privacy: 'Privacy',
    foot_terms: 'Terms',
    foot_lic: 'Licenses',
    foot_badge: 'FL Licensed & Insured',
    wa_label: 'Contact via WhatsApp'
  }
};

let currentLang = 'es';

function applyTranslations(lang) {
  const t = translations[lang];
  // Nav links
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // Hero
  const h1 = document.querySelector('.hero-h1');
  if (h1) h1.innerHTML = t.hero_h1;
  const sub = document.querySelector('.hero-sub');
  if (sub) sub.innerHTML = t.hero_sub;
  const eyebrow = document.querySelector('.hero-eyebrow');
  if (eyebrow) { eyebrow.childNodes.forEach(n=>{ if(n.nodeType===3) n.textContent=t.hero_eyebrow; }); }
  const btns = document.querySelectorAll('.hero-btns a');
  if (btns.length === 1) {
    btns[0].textContent = t.hero_btn2;
  } else {
    if (btns[0]) btns[0].textContent = t.hero_btn1;
    if (btns[1]) btns[1].textContent = t.hero_btn2;
  }
  const scrollHint = document.querySelector('.hero-scroll-hint span');
  if (scrollHint) scrollHint.textContent = t.hero_scroll;
  // Trust band - update all trust items text nodes
  const trustItems = document.querySelectorAll('.trust-item');
  const trustKeys = ['trust_1','trust_2','trust_3','trust_4','trust_5'];
  trustItems.forEach((item,i) => {
    const idx = i % 5;
    const svgEl = item.querySelector('svg');
    item.textContent = '';
    if (svgEl) item.appendChild(svgEl);
    item.appendChild(document.createTextNode(t[trustKeys[idx]]));
  });
  // Manifesto
  const maniTag = document.querySelector('#manifesto .s-tag');
  if (maniTag) maniTag.textContent = t.mani_tag;
  const maniTitle = document.querySelector('#manifesto .s-title');
  if (maniTitle) maniTitle.innerHTML = t.mani_title;
  const maniDesc = document.querySelector('.mani-desc');
  if (maniDesc) maniDesc.textContent = t.mani_desc;
  const pillars = document.querySelectorAll('.pillar');
  if (pillars[0]) { pillars[0].querySelector('.p-num').textContent=t.p1_num; pillars[0].querySelector('.p-title').textContent=t.p1_title; pillars[0].querySelector('.p-text').textContent=t.p1_text; }
  if (pillars[1]) { pillars[1].querySelector('.p-num').textContent=t.p2_num; pillars[1].querySelector('.p-title').textContent=t.p2_title; pillars[1].querySelector('.p-text').textContent=t.p2_text; }
  if (pillars[2]) { pillars[2].querySelector('.p-num').textContent=t.p3_num; pillars[2].querySelector('.p-title').textContent=t.p3_title; pillars[2].querySelector('.p-text').textContent=t.p3_text; }
  // Services
  const srvTag = document.querySelector('#services .s-tag');
  if (srvTag) srvTag.textContent = t.srv_tag;
  const srvTitle = document.querySelector('#services .s-title');
  if (srvTitle) srvTitle.innerHTML = t.srv_title;
  const cards = document.querySelectorAll('.srv-card');
  const srvData = [
    {name:'srv_elec',desc:'srv_elec_desc'},{name:'srv_plom',desc:'srv_plom_desc'},
    {name:'srv_tech',desc:'srv_tech_desc'},{name:'srv_cons',desc:'srv_cons_desc'}
  ];
  cards.forEach((card,i) => {
    const nm = card.querySelector('.srv-name'); if (nm) nm.textContent = t[srvData[i].name];
    const ds = card.querySelector('.srv-desc'); if (ds) ds.textContent = t[srvData[i].desc];
    const mr = card.querySelector('.srv-more'); if (mr) mr.textContent = t.srv_more;
  });
  // Why
  const whyTag = document.querySelector('#why .s-tag');
  if (whyTag) whyTag.textContent = t.why_tag;
  const whyTitle = document.querySelector('#why .s-title');
  if (whyTitle) whyTitle.innerHTML = t.why_title;
  const whySub = document.querySelector('.why-sub');
  if (whySub) whySub.textContent = t.why_sub;
  const stats = document.querySelectorAll('.why-stat');
  if (stats[0]) { const wn=stats[0].querySelector('.wn'); const wl=stats[0].querySelector('.wl'); if(wn) wn.textContent=t.why_s1; if(wl) wl.innerHTML=t.why_s1l; }
  if (stats[1]) { const wn=stats[1].querySelector('.wn'); const wl=stats[1].querySelector('.wl'); if(wn) wn.textContent=t.why_s2; if(wl) wl.innerHTML=t.why_s2l; }
  if (stats[2]) { const wn=stats[2].querySelector('.wn'); const wl=stats[2].querySelector('.wl'); if(wn) wn.textContent=t.why_s3; if(wl) wl.innerHTML=t.why_s3l; }
  const whyBodies = document.querySelectorAll('#why .why-body');
  if (whyBodies[0]) whyBodies[0].innerHTML = t.why_body1;
  if (whyBodies[1]) whyBodies[1].innerHTML = t.why_body2;
  const whyQuoteP = document.querySelector('#why .why-quote p');
  if (whyQuoteP) whyQuoteP.innerHTML = t.why_quote;
  const whyQuoteSpan = document.querySelector('#why .why-quote span');
  if (whyQuoteSpan) whyQuoteSpan.textContent = (lang === 'es' ? '— La Promesa REC PROBUILD' : '— The REC PROBUILD Promise');
  const whyCta = document.querySelector('#why .btn-gold');
  if (whyCta) whyCta.textContent = t.why_cta;
  // Process
  const procTag = document.querySelector('#process .s-tag');
  if (procTag) procTag.textContent = t.proc_head_tag || t.proc_tag;
  const procTitle = document.querySelector('#process .s-title');
  if (procTitle) procTitle.innerHTML = t.proc_head_title || t.proc_title;
  const steps = document.querySelectorAll('.proc-step');
  const procData=[{t:'proc_card1',d:'proc_card1_desc'},{t:'proc_card2',d:'proc_card2_desc'},{t:'proc_card3',d:'proc_card3_desc'},{t:'proc_card4',d:'proc_card4_desc'}];
  steps.forEach((s,i) => {
    const tl=s.querySelector('.proc-title'); if(tl) tl.textContent=t[procData[i].t];
    const ds=s.querySelector('.proc-desc, .proc-text'); if(ds) ds.textContent=t[procData[i].d];
  });
  // CTA
  const ctaTag = document.querySelector('#cta .s-tag');
  if (ctaTag) ctaTag.textContent = t.cta_tag_alt || t.cta_tag;
  const ctaTitle = document.querySelector('#cta .cta-title, #cta .cta-h2');
  if (ctaTitle) ctaTitle.innerHTML = t.cta_title_alt || t.cta_title;
  const ctaSub = document.querySelector('#cta .cta-sub');
  if (ctaSub) ctaSub.textContent = t.cta_sub_alt || t.cta_sub;
  const ctaWhatsApp = document.querySelector('#cta .cta-btns .btn-gold');
  if (ctaWhatsApp) {
    const textNode = Array.from(ctaWhatsApp.childNodes).find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
    if (textNode) textNode.textContent = ' ' + t.cta_whatsapp;
  }
  const ctaDivider = document.querySelector('#cta .divider');
  if (ctaDivider) ctaDivider.textContent = t.cta_divider;
  const contactItems = document.querySelectorAll('#cta .contact-item');
  if (contactItems[0]) { const lb=contactItems[0].querySelector('.c-label'); if(lb) lb.textContent=t.cta_label_phone; }
  if (contactItems[1]) { const lb=contactItems[1].querySelector('.c-label'); if(lb) lb.textContent=t.cta_label_email; }
  if (contactItems[2]) {
    const lb=contactItems[2].querySelector('.c-label'); if(lb) lb.textContent=t.cta_label_area;
    const val=contactItems[2].querySelector('.c-val'); if(val) val.textContent=t.cta_area;
  }
  const formLabels = document.querySelectorAll('#contactForm .form-label');
  const formLabelKeys = ['form_name','form_phone','form_email','form_service','form_message'];
  formLabels.forEach((label, i) => { if (t[formLabelKeys[i]]) label.textContent = t[formLabelKeys[i]]; });
  const nameInput = document.getElementById('waName'); if (nameInput) nameInput.placeholder = t.form_name_ph;
  const phoneInput = document.getElementById('waPhone'); if (phoneInput) phoneInput.placeholder = t.form_phone_ph;
  const emailInput = document.getElementById('waEmail'); if (emailInput) emailInput.placeholder = t.form_email_ph;
  const messageInput = document.getElementById('waMessage'); if (messageInput) messageInput.placeholder = t.form_message_ph;
  const serviceSelect = document.getElementById('waService');
  if (serviceSelect && Array.isArray(t.form_services)) {
    Array.from(serviceSelect.options).forEach((option, i) => {
      if (t.form_services[i]) {
        option.textContent = t.form_services[i];
        option.value = t.form_services[i];
      }
    });
  }
  const formSubmit = document.querySelector('#contactForm .form-submit span');
  if (formSubmit) formSubmit.textContent = t.form_submit;
  const formHelper = document.querySelector('#contactForm .form-helper');
  if (formHelper) formHelper.textContent = t.form_helper;
  // Footer
  const footCopy = document.querySelector('.foot-copy');
  if (footCopy) footCopy.innerHTML = t.foot_copy;
  const footLinks = document.querySelectorAll('.foot-links a');
  const fkeys = ['foot_privacy','foot_terms','foot_lic'];
  footLinks.forEach((a,i)=>{ if(t[fkeys[i]]) a.textContent=t[fkeys[i]]; });
  const footBadge = document.querySelector('.foot-badge');
  if (footBadge) { const svg=footBadge.querySelector('svg'); footBadge.textContent=''; if(svg) footBadge.appendChild(svg); footBadge.appendChild(document.createTextNode(' '+t.foot_badge)); }
  const waFloat = document.querySelector('.wa-float');
  if (waFloat) waFloat.setAttribute('aria-label', t.wa_label);
}

document.getElementById('langToggle').addEventListener('click', function() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.getElementById('langLabel').textContent = currentLang === 'es' ? 'EN' : 'ES';
  document.documentElement.lang = currentLang;
  applyTranslations(currentLang);
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('waName').value.trim();
    const phone = document.getElementById('waPhone').value.trim();
    const email = document.getElementById('waEmail').value.trim();
    const service = document.getElementById('waService').value.trim();
    const message = document.getElementById('waMessage').value.trim();
    const intro = currentLang === 'es' ? 'Hola, quiero información sobre REC PROBUILD.' : 'Hello, I would like information about REC PROBUILD.';
    const body = [
      intro,
      '',
      (currentLang === 'es' ? 'Nombre' : 'Name') + ': ' + name,
      (currentLang === 'es' ? 'Teléfono' : 'Phone') + ': ' + phone,
      'Email: ' + email,
      (currentLang === 'es' ? 'Servicio' : 'Service') + ': ' + service,
      (currentLang === 'es' ? 'Mensaje' : 'Message') + ': ' + message
    ].join('\n');
    const waUrl = 'https://wa.me/13058982573?text=' + encodeURIComponent(body);
    window.open(waUrl, '_blank');
  });
}
