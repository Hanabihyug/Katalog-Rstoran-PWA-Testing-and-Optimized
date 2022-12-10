const WarunkcreateLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const WarunkcreateUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likedButton" class="like">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
`;

export { WarunkcreateLikeRestaurantButtonTemplate, WarunkcreateUnlikeRestaurantButtonTemplate };
