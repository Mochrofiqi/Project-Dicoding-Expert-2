import * as TestFactories from './helper/testFactories';
import LocalData from '../src/scripts/data/local-data';

describe('Removing a restaurant', () => {
  const restaurantSample = {
    id: 'rqdv5juczeskfw1e867',
    name: 'Melting Pot',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
    pictureId: '14',
    city: 'Medan',
    rating: 4.2,
  };

  beforeEach(async () => {
    document.body.innerHTML = '<div id="saveButtonContainer"></div>';
    await LocalData.saveRestaurant(restaurantSample);
  });

  afterEach(async () => {
    await LocalData.deleteRestaurant(restaurantSample.id);
  });

  it('Should display delete button when the restaurant has been saved', async () => {
    await TestFactories.createSavedButton(restaurantSample);
    expect(document.querySelector('[aria-label="Delete from Favorite"]')).toBeTruthy();
  });

  it('Should not display save button when the restaurant has been saved', async () => {
    await TestFactories.createSavedButton(restaurantSample);
    expect(document.querySelector('[aria-label="Save to Favorite"]')).toBeFalsy();
  });

  it('Should be able to delete the restaurant', async () => {
    await TestFactories.createSavedButton(restaurantSample);
    document.querySelector('#deleteButton').dispatchEvent(new Event('click'));
    expect(await LocalData.getAllSaved()).toEqual([]);
  });

  it('Should not throw error if the deleted restaurant is not in the list', async () => {
    await TestFactories.createSavedButton(restaurantSample);
    await LocalData.deleteRestaurant(restaurantSample.id);

    document.querySelector('#deleteButton').dispatchEvent(new Event('click'));

    expect(await LocalData.getAllSaved()).toEqual([]);
  });
});
