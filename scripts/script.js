document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        displayPromotions(data.promotions);
        displayNewArrivals(data.newArrivals);
    })
    .catch(error => console.error('Error loading data:', error));

    setupCarousel(data.carouselImages);
    displayPromotions(data.promotions);
    displayNewArrivals(data.newArrivals);

    let currentIndex = 0;

    function setupCarousel(images) {
        const carouselInner = document.getElementById('carousel-inner');

        images.forEach((image, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;

            const img = document.createElement('img');
            img.className = 'd-block w-100';

            img.src = image;
            img.alt = `Slide ${index + 1}`;

            carouselItem.appendChild(img);
            carouselInner.appendChild(carouselItem);
        });
    }

    function displayPromotions(promotions) {
        const promotionsContainer = document.getElementById('promotions-container');
        promotionsContainer.innerHTML = ''; // Очистка контейнера
    
        promotions.forEach(promo => {
            const promoHTML = `
                <div class="col-sm-6">
                    <div class="card">
                        <img class="card-img-top" src="${promo.image}" alt="${promo.title}">
                        <div class="card-body">
                            <h5 class="card-title">${promo.title}</h5>
                            <p class="card-text">${promo.description}</p>
                            <a href="#" class="btn btn-primary">Подробнее</a>
                        </div>
                    </div>
                </div>
            `;
            promotionsContainer.innerHTML += promoHTML;
        });
    }
    
    function displayNewArrivals(newArrivals) {
        const newArrivalsContainer = document.getElementById('new-arrivals-container');
        newArrivalsContainer.innerHTML = ''; // Очистка контейнера
    
        newArrivals.forEach(arrival => {
            const arrivalHTML = `
                <div class="col-sm-6">
                    <div class="card">
                        <img class="card-img-top" src="${arrival.image}" alt="${arrival.title}">
                        <div class="card-body">
                            <h5 class="card-title">${arrival.title}</h5>
                            <p class="card-text">${arrival.description}</p>
                            <a href="#" class="btn btn-primary">Подробнее</a>
                        </div>
                    </div>
                </div>
            `;
            newArrivalsContainer.innerHTML += arrivalHTML;
        });
    }
    
    
    
});
