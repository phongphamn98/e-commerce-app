const updateCartsReducer = (carts = [], action) => {
  switch (action.type) {
    case "AddToCarts": {
      let newCarts = JSON.parse(JSON.stringify(carts));
      newCarts.push(action.data);
      return newCarts;
    }
    default:
      return carts;
  }
};

export default updateCartsReducer;
