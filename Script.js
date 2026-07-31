// Nav shadow on scroll
  const navEl = document.getElementById('siteNav');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 40){ navEl.style.paddingTop='10px'; navEl.style.paddingBottom='10px'; }
    else { navEl.style.paddingTop='18px'; navEl.style.paddingBottom='18px'; }
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.14, rootMargin:'0px 0px -60px 0px'});
  revealEls.forEach(el=>io.observe(el));

  // Stagger reveal for grouped items
  document.querySelectorAll('.skills-grid, .cert-grid, .project-grid, .timeline').forEach(group=>{
    [...group.children].forEach((child, i)=>{
      child.style.transitionDelay = (i*90) + 'ms';
    });
  });
