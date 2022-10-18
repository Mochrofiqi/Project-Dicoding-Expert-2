import Swal from "sweetalert2";
import ApiRepository from "../../data/api-repository";
import "../../component/restaurant-list";
import "../../component/indicator-loading";

class Home {
  static async render() {
    return `
      <section class="hero">
        <h1 class="hero-judul">Welcome to Restoran Fast Food!</h1>
      </section>
    
      <indicator-loading></indicator-loading>

      <article class="head" id="home">
        <div class="gambar">
          <img class="image"
            src="https://img.freepik.com/free-vector/happy-tiny-barista-making-coffee-huge-machine-waitress-holding-tray-with-paper-cups-flat-illustration_74855-10805.jpg?size=626&ext=jpg&ga=GA1.2.2063963505.1657106894" alt="logo">
        </div>
        <div class="kolom">
          <p class="deskripsi">Selamat Datang di Website Restoran Fast Food Berbagai Kota</p>
          <h2>Tentang Restoran</h2>
          <p class="deskripsi2">Fast food atau makanan cepat saji merupakan jenis makanan yang dapat disiapkan dan
            dikonsumsi dalam waktu singkat baik memasak maupun menyediakan makanan. Kehadiran makanan cepat saji dalam industri
            makanan mempengaruhi pola makan seseorang. Makanan siap saji mudah diperoleh di pasaran serta tersedia berbagai variasi
            sesuai selera dan daya beli. Selain itu, pengolahan dan penyiapannya lebih mudah dan cepat, cocok bagi mereka yang selalu
            sibuk. Makanan cepat saji tersedia dalam waktu cepat dan siap disantap seperti ayam goreng tepung, pizza,
            burger, kentang goreng, pasta, nugget, sosis, goreng-gorengan dan lain sebagainya.
          </p>
          <p><a href="#daftar-resto" class="btn2">Daftar Restoran</a></p>
        </div>
      </article>

      <article class="content" id="daftar-resto">
      <div class="tengah">
          <div class="kolom">
              <h2>Restoran Fast-Food</h2>
              <p class="deskripsi3">Restoran Fast-Food menyediakan berbagai jenis makanan khas dari berbagai kota
                  masing-masing</p>
          </div>
          <restaurant-list class="menu-list"></restaurant-list>
      </div>
      </article>
    `;
  }

  static async afterRender() {
    const heroElement = document.querySelector(".hero");
    const loadingElement = document.querySelector("indicator-loading");
    const restaurantListElement = document.querySelector("restaurant-list");

    heroElement.style.backgroundImage = "url('./images/heros/hero-image_2.jpg')";

    try {
      const response = await ApiRepository.restaurantList();
      restaurantListElement.restaurants = response;
    } catch (message) {
      Swal.fire({
        title: "Something went wrong!",
        text: message,
        icon: "error",
      });
    } finally {
      loadingElement.style.display = "none";
    }
  }
}

export default Home;
