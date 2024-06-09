document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            setupCarousel(data.carouselImages);
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
    
        promotions.forEach(promo => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-sm-3'; // Изменено с col-sm-3 для того, чтобы занять половину ширины на экранах md и больше
    
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
    
            const img = document.createElement('img');
            img.className = 'card-img-top';
            img.src = promo.image;
            img.alt = promo.title;
    
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
    
            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = promo.title;
    
            const description = document.createElement('p');
            description.className = 'card-text';
            description.textContent = promo.description;
    
            const link = document.createElement('a');
            link.className = 'btn btn-primary';
            link.href = '#';
            link.textContent = 'Подробнее';
    
            cardBody.appendChild(title);
            cardBody.appendChild(description);
            cardBody.appendChild(link);
    
            cardDiv.appendChild(img); // Добавляем изображение в карточку
            cardDiv.appendChild(cardBody);
            colDiv.appendChild(cardDiv);
            promotionsContainer.appendChild(colDiv);
        });
    }
    

    function displayNewArrivals(newArrivals) {
        const newArrivalsContainer = document.getElementById('new-arrivals-container');
    
        newArrivals.forEach(arrival => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-sm-3'; // Измените на 'col-sm-6' для половины ширины на экранах md и больше
    
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
    
            const img = document.createElement('img');
            img.className = 'card-img-top';
            img.src = arrival.image;
            img.alt = arrival.title;
    
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
    
            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = arrival.title;
    
            const description = document.createElement('p');
            description.className = 'card-text';
            description.textContent = arrival.description;
    
            const link = document.createElement('a');
            link.className = 'btn btn-primary';
            link.href = '#';
            link.textContent = 'Подробнее';
    
            cardBody.appendChild(title);
            cardBody.appendChild(description);
            cardBody.appendChild(link);
    
            cardDiv.appendChild(img);
            cardDiv.appendChild(cardBody);
            colDiv.appendChild(cardDiv);
            newArrivalsContainer.appendChild(colDiv);
        });
    }
    
    
});
