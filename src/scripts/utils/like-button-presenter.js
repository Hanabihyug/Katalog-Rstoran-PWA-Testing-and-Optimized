import { WarunkcreateLikeRestaurantButtonTemplate, WarunkcreateUnlikeRestaurantButtonTemplate } from '../views/templates/button-template';

const WarunkLikeButtonInitiator = {
  async init({ likeButtonContainer, favFoodmap, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;
    this._favFoodmap = favFoodmap;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favFoodmap.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = WarunkcreateLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favFoodmap.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = WarunkcreateUnlikeRestaurantButtonTemplate();

    const likedButton = document.querySelector('#likedButton');
    likedButton.addEventListener('click', async () => {
      await this._favFoodmap.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default WarunkLikeButtonInitiator;
