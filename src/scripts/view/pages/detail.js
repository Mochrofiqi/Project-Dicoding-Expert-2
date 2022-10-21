import Swal from "sweetalert2";
import ApiRepository from "../../data/api-repository";
import Review from "../../utils/review";
import ButtonSaveInitiator from "../../utils/button-save-initiator";
import UrlParser from "../../routes/url-parser";
import "../../component/indicator-loading";
import "../../component/restaurant-detail";

class Detail {
  static async render() {
    return `

    <indicator-loading></indicator-loading>
    <restaurant-detail class="content" id="content" tabindex="0"></restaurant-detail>
    <div id="saveButtonContainer"></div>
        
    `;
  }

  static async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loadingElement = document.querySelector("indicator-loading");
    const restaurantDetailElement = document.querySelector("restaurant-detail");

    try {
      const response = await ApiRepository.restaurantDetail(url.id);
      restaurantDetailElement.restaurantItem = response;

      await ButtonSaveInitiator.init({
        saveButtonContainer: document.querySelector('#saveButtonContainer'),
        restaurant: response.restaurant,
      });
    } catch (message) {
      restaurantDetailElement.renderError(message);
    } finally {
      loadingElement.style.display = "none";
    }

    const btnSubmit = document.querySelector("#submit-review");
    const nameInput = document.querySelector("#inputName");
    const reviewInput = document.querySelector("#inputReview");

    btnSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      if (nameInput.value === "" || reviewInput.value === "") {
        Swal.fire({
          title: "Something went wrong!",
          text: "No input can't be empty!",
          icon: "error",
        });

        nameInput.value = "";
        reviewInput.value = "";
      } else {
        Review(url, nameInput.value, reviewInput.value);
        nameInput.value = "";
        reviewInput.value = "";
      }
    });
  }
}

export default Detail;
