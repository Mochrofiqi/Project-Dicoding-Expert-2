import API_ENDPOINT from "./api-endpoint";
import CONFIG from "./config";

class ApiRepository {
    static async restaurantList() {
        const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async restaurantDetail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    static async addReview(review) {
        const response = await fetch(API_ENDPOINT.REVIEW, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": CONFIG.API_KEY,
        },
        body: JSON.stringify(review),
    });
        return response.json();
    }
}

export default ApiRepository;
