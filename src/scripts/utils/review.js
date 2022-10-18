import ApiRepository from "../data/api-repository";

const Review = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  ApiRepository.addReview(dataInput);

  const reviewContainer = document.querySelector(".detail-review");
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date().toLocaleDateString("id-ID", options);
  const newReview = `
    <div class="review">
      <b>${name}</b><br>
      <small>${date}</small><br>
      "<i>${review}</i>"
    </div>
  `;

  reviewContainer.innerHTML += newReview;
};

export default Review;
