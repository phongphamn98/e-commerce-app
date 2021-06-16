const updateProductsReducer = (products = [], action) => {
  switch (action.type) {
    case "updateProducts":
      return action.data;
    default:
      return products;
  }
};

export default updateProductsReducer;
