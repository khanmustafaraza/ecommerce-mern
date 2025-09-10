const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state, // spread the previous state
        products: action.payload.products,
        isLoading: false, // you might want to mark loading as false
      };
    case "FILTER_CATEGORY":
      return {
        ...state, // spread the previous state
        products: action.payload.filterPro,
        isLoading: false, // you might want to mark loading as false
      };
    case "SET_FILTER_PRICE":
      return {
        ...state, // spread the previous state
        products: action.payload.filterPriceProduct,
        isLoading: false, // you might want to mark loading as false
      };
    case "SET_VIEW":
        const view =action.payload.view
        if(view=="grid"){
            return {
        ...state, 
        isGrid:true,
        isLoading: false, // you might want to mark loading as false
      };
        }
      else{
        return{
            ...state,
            isGrid:false
        }
      }

    default:
      return state; // return state as-is if no known action
  }
};

export default reducer;
