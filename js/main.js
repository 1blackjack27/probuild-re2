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
    cta_tag: 'Contáctanos',
    cta_title: '¿Listo Para <em>Construir</em><br/>con Integridad?',
    cta_sub: 'Cotización gratuita y sin compromiso. Respuesta en menos de 2 horas.',
    cta_phone: 'Llamar Ahora',
    cta_sms: 'Enviar SMS',
    foot_copy: '© 2025 <strong>REC PROBUILD LLC</strong> — Miami, Florida. Todos los derechos reservados.',
    foot_privacy: 'Privacidad',
    foot_terms: 'Términos',
    foot_lic: 'Licencias',
    foot_badge: 'FL Licenciado y Asegurado'
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
    cta_tag: 'Contact Us',
    cta_title: 'Ready to <em>Build</em><br/>with Integrity?',
    cta_sub: 'Free quote, no commitment. Response in less than 2 hours.',
    cta_phone: 'Call Now',
    cta_sms: 'Send SMS',
    foot_copy: '© 2025 <strong>REC PROBUILD LLC</strong> — Miami, Florida. All rights reserved.',
    foot_privacy: 'Privacy',
    foot_terms: 'Terms',
    foot_lic: 'Licenses',
    foot_badge: 'FL Licensed & Insured'
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
  if (btns[0]) btns[0].textContent = t.hero_btn1;
  if (btns[1]) btns[1].textContent = t.hero_btn2;
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
  if (procTag) procTag.textContent = t.proc_tag;
  const procTitle = document.querySelector('#process .s-title');
  if (procTitle) procTitle.innerHTML = t.proc_title;
  const steps = document.querySelectorAll('.proc-step');
  const procData=[{t:'proc_s1',d:'proc_s1d'},{t:'proc_s2',d:'proc_s2d'},{t:'proc_s3',d:'proc_s3d'},{t:'proc_s4',d:'proc_s4d'}];
  steps.forEach((s,i) => {
    const tl=s.querySelector('.proc-title'); if(tl) tl.textContent=t[procData[i].t];
    const ds=s.querySelector('.proc-desc'); if(ds) ds.textContent=t[procData[i].d];
  });
  // CTA
  const ctaTag = document.querySelector('#cta .s-tag');
  if (ctaTag) ctaTag.textContent = t.cta_tag;
  const ctaTitle = document.querySelector('#cta .cta-title');
  if (ctaTitle) ctaTitle.innerHTML = t.cta_title;
  const ctaSub = document.querySelector('#cta .cta-sub');
  if (ctaSub) ctaSub.textContent = t.cta_sub;
  const ctaBtns = document.querySelectorAll('#cta .c-btn');
  if (ctaBtns[0]) { const sp=ctaBtns[0].querySelector('span'); if(sp) sp.textContent=t.cta_phone; }
  if (ctaBtns[1]) { const sp=ctaBtns[1].querySelector('span'); if(sp) sp.textContent=t.cta_sms; }
  // Footer
  const footCopy = document.querySelector('.foot-copy');
  if (footCopy) footCopy.innerHTML = t.foot_copy;
  const footLinks = document.querySelectorAll('.foot-links a');
  const fkeys = ['foot_privacy','foot_terms','foot_lic'];
  footLinks.forEach((a,i)=>{ if(t[fkeys[i]]) a.textContent=t[fkeys[i]]; });
  const footBadge = document.querySelector('.foot-badge');
  if (footBadge) { const svg=footBadge.querySelector('svg'); footBadge.textContent=''; if(svg) footBadge.appendChild(svg); footBadge.appendChild(document.createTextNode(' '+t.foot_badge)); }
}

document.getElementById('langToggle').addEventListener('click', function() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.getElementById('langLabel').textContent = currentLang === 'es' ? 'EN' : 'ES';
  document.documentElement.lang = currentLang;
  applyTranslations(currentLang);
});