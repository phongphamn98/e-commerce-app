export const updateProducts = (data) => {
  return {
    type: "updateProducts",
    data: data,
  };
};

export const AddToCarts = (product) => {
  return {
    type: "AddToCarts",
    data: product,
  };
};

export const AddToWishList = (product) => {
  return {
    type: "AddToWishList",
    data: product,
  };
};
