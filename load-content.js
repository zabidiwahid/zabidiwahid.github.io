
window.onload = () => {
  // Populate title
  document.getElementById("page-title").textContent = content.page.title;

  // Hero Section
  document.getElementById("hero-title").textContent = content.hero.title;
  document.getElementById("hero-description").textContent = content.hero.description;
  document.getElementById("hero-btn").textContent = content.hero.button.text;
  document.getElementById("hero-btn").setAttribute("href", content.hero.button.link);

  // About Section
  document.getElementById("about-title").textContent = content.about.title;
  document.getElementById("about-description").textContent = content.about.description;

  // Services Section
  document.getElementById("services-title").textContent = content.services.title;
  const servicesContainer = document.getElementById("services-cards");
  content.services.cards.forEach(service => {
    const serviceCard = `
      <div class="col-md-4">
        <div class="card service-card h-100">
          <img src="${service.imageUrl}" alt="${service.title}" class="card-img-top img-fluid service-img">
          <div class="card-body text-center">
            <h5 class="card-title">${service.title}</h5>
            <p class="card-text">${service.description}</p>
          </div>
        </div>
      </div>
    `;
    servicesContainer.innerHTML += serviceCard;
  });

  // Our Works Section
  document.getElementById("works-title").textContent = content.works.title;
  const worksContainer = document.getElementById("works-videos");
  content.works.videos.forEach(videoUrl => {
    const videoEmbed = `
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="${videoUrl}" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    `;
    worksContainer.innerHTML += videoEmbed;
  });

  // Customer Reviews Section
  document.getElementById("reviews-title").textContent = content.reviews.title;
  const reviewsContainer = document.getElementById("reviews-cards");
  content.reviews.cards.forEach(review => {
    const reviewCard = `
      <div class="col-md-4 mb-4">
        <div class="card review-card">
          <div class="card-body">
            <p class="card-text">"${review.text}"</p>
            <p class="card-text"><strong>${review.name}</strong> - ${review.role}</p>
          </div>
        </div>
      </div>
    `;
    reviewsContainer.innerHTML += reviewCard;
  });

  // Contact Section
  document.getElementById("contact-title").textContent = content.contact.title;
  document.getElementById("contact-description").textContent = content.contact.description;
  const contactButtonsContainer = document.getElementById("contact-buttons");
  content.contact.buttons.forEach(button => {
    const contactButton = `
      <a href="${button.url}" class="btn btn-light m-2" target="_blank">
        <img src="${button.icon}" alt="${button.platform}" width="30" class="mr-2">
        ${button.platform}
      </a>
    `;
    contactButtonsContainer.innerHTML += contactButton;
  });

  // Footer Section
  document.getElementById("footer-title").textContent = content.footer.title;
};