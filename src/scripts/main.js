import data from "../DATA.json";

const main = () => {
    let restaurantElement = "";

    data.restaurants.forEach((resto) => {
        restaurantElement += `
        <a href="#">
        <div class="list-menu">
            <div class="rating">                
            <p>${resto.city}</p>  
            </div>
            <div class="kota">
            <p>${resto.rating}</p>
            </div>
            <img src="${resto.pictureId}" alt="${resto.name} Image">
            <h5>${resto.name}</h5>
            <h6 class="post-item__description">${resto.description}</h6>
            </div>
        </a>
        `;
    });

    document.querySelector(".menu-list").innerHTML = restaurantElement;
    document.querySelector(".hero").style.backgroundImage ="url('./images/heros/hero-image_2.jpg')";
};

export default main;