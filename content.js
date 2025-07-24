function hideBairesDevJobs() {
  document.querySelectorAll('.box_offer').forEach(job => {
    const company = job.querySelector('.fc_base.t_ellipsis');
    if (company && company.textContent.includes('BairesDev LLC')) {
      job.style.display = 'none';
    }
  });
}

window.addEventListener('load', hideBairesDevJobs);
setInterval(hideBairesDevJobs, 2000);