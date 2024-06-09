document.addEventListener('DOMContentLoaded', function() {
    const data = {
        "carouselImages": [
            "images/image1.jpg",
            "images/image2.jpg",
            "images/image3.jpg"
        ],
        "promotions": [
            {
                "title": "Скидка 50%",
                "description": "На все товары в магазине!",
                "image": "images/promotions/promo1.jpg"
            },
            {
                "title": "Купи один, получи второй бесплатно",
                "description": "Акция действует до конца месяца",
                "image": "images/promotions/promo1.jpg"
            },
            {
                "title": "Только сегодня!",
                "description": "Скидка 70% на все товары!",
                "image": "images/promotions/promo1.jpg"
            },
            {
                "title": "Сезонная распродажа",
                "description": "Скидки до 30% на весеннюю коллекцию",
                "image": "images/promotions/promo1.jpg"
            },
            {
                "title": "Счастливые часы",
                "description": "Скидка 20% на все заказы с 14:00 до 16:00",
                "image": "images/promotions/promo1.jpg"
            },
            {
                "title": "Скидка на первый заказ",
                "description": "10% скидка для новых клиентов",
                "image": "images/promotions/promo1.jpg"
            },
            {
                "title": "Бесплатная доставка",
                "description": "При заказе от 3000 рублей",
                "image": "images/promotions/promo1.jpg"
            },
            {
                "title": "Чёрная пятница",
                "description": "Скидки до 80% на выбранные товары",
                "image": "images/promotions/promo1.jpg"
            },
            {
                "title": "Кэшбэк",
                "description": "Возврат 5% от суммы покупки на бонусный счёт",
                "image": "images/promotions/promo1.jpg"
            },
            {
                "title": "Подарок за покупку",
                "description": "Подарочный набор при покупке от 5000 рублей",
                "image": "images/promotions/promo1.jpg"
            }
        ],
        "newArrivals": [
            {
                "title": "Новая коллекция",
                "description": "Ознакомьтесь с нашими новинками",
                "image": "images/newArrivals/new1.jpg"
            },
            {
                "title": "Специальное предложение",
                "description": "Эксклюзивные товары по выгодным ценам",
                "image": "images/newArrivals/new1.jpg"
            },
            {
                "title": "Летняя коллекция",
                "description": "Яркие и стильные новинки для лета",
                "image": "images/newArrivals/new1.jpg"
            },
            {
                "title": "Зимняя коллекция",
                "description": "Тёплые и уютные товары для холодного сезона",
                "image": "images/newArrivals/new1.jpg"
            },
            {
                "title": "Осенняя коллекция",
                "description": "Модные и удобные вещи для осени",
                "image": "images/newArrivals/new1.jpg"
            },
            {
                "title": "Весенняя коллекция",
                "description": "Лёгкие и воздушные новинки для весны",
                "image": "images/newArrivals/new1.jpg"
            },
            {
                "title": "Эко-коллекция",
                "description": "Экологически чистые и устойчивые товары",
                "image": "images/newArrivals/new1.jpg"
            },
            {
                "title": "Лимитированная серия",
                "description": "Уникальные товары ограниченного выпуска",
                "image": "images/newArrivals/new1.jpg"
            },
            {
                "title": "Спортивная коллекция",
                "description": "Экипировка и аксессуары для активного образа жизни",
                "image": "images/newArrivals/new1.jpg"
            },
            {
                "title": "Детская коллекция",
                "description": "Модная и комфортная одежда для детей",
                "image": "images/newArrivals/new1.jpg"
            }
        ]
    };

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
