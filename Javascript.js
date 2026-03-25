// Menú responsivo
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav.style.display = expanded ? 'none' : 'block';
});

// Año dinámico en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Validación simple del formulario (sin enviar a servidor)
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) {
    feedback.textContent = 'Por favor completa todos los campos.';
    return;
  }
  // validación sencilla del correo
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    feedback.textContent = 'Ingresa un correo válido.';
    return;
  }
  // Aquí puedes conectar con tu API o servicio de correo (ej. Formspree, Netlify Forms)
  feedback.textContent = 'Mensaje enviado. ¡Gracias! (Simulación)';
  form.reset();
});

// Cargar proyectos dinámicamente (opcional)
// Si prefieres mantener proyectos en un array y renderizarlos, puedes hacerlo aquí.
// Ejemplo mínimo:
const projects = [
  {
    title: 'Sitio Responsive (Estudios)',
    desc: 'Proyecto de diseño web adaptativo con HTML/CSS/JS.',
    demo: '#',
    code: '#'
  },
  {
    title: 'Blog con PHP y SQL',
    desc: 'CRUD y gestión de posts con backend en PHP y base de datos SQL Server.',
    demo: '#',
    code: '#'
  },
  {
    title: 'SPA con React',
    desc: 'Interfaz interactiva desarrollada en React (diplomado).',
    demo: '#',
    code: '#'
  }
];

