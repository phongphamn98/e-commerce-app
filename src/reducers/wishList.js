const wishListReducer = (wishList = [], action) => {
  switch (action.type) {
    case "AddToWishList": {
      const newWishList = Array.from(wishList);
      action.data.wishList = true;
      newWishList.push(action.data);
      return newWishList;
    }
    default:
      return wishList;
  }
};

export default wishListReducer;
