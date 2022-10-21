import ButtonSaveInitiator from "../../src/scripts/utils/button-save-initiator";

const createSavedButton = async (restaurant) => {
  await ButtonSaveInitiator.init({
    saveButtonContainer: document.querySelector('#saveButtonContainer'),
    restaurant,
  });
};

export { createSavedButton };
