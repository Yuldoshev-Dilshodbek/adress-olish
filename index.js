let card = document.querySelector(".card");
let imgContainer = document.querySelector(".img");

fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        data.products.forEach((item) => {
            const h1 = document.createElement('h1');
            h1.textContent = item.title;
            card.appendChild(h1);

            const h2 = document.createElement('h2');
            h2.textContent = item.description;
            card.appendChild(h2);

            const discount = document.createElement('span');
            discount.textContent = `Discount: ${item.discountPercentage}`;
            card.appendChild(discount);

            const h3 = document.createElement('h3');
            h3.textContent = item.description;
            card.appendChild(h3);

            const imageContainer = document.createElement('div');
            imageContainer.classList.add('img-container'); // bu yerga ota element yani img container chqairilishi kerak
            card.appendChild(imageContainer);

            item.images.forEach((imageUrl) => {
                const image = document.createElement('img');
                image.src = imageUrl;
                imageContainer.appendChild(image); // Rasmlarni "imageContainer" ichiga qo'shish kerak
            });

        });
    });  