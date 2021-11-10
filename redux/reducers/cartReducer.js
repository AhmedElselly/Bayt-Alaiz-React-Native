let defaultState = {
  selectedItems: {
    items: [],
    qty: Number
    // itemName: ''
  }
}

let cartReducer = (state=defaultState, action) => {
  
  switch(action.type){
    case 'ADD_TO_CART':
      let newState = {...state};
      newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload],
        // itemName: action.payload.itemName
      }
      console.log(newState);
      return newState;
    
    case 'REMOVE_FROM_CART':
      let newerState = {...state};
      newerState.selectedItems = {
        items: [...newerState.selectedItems.items.filter(cartItem => cartItem._id !== action.payload._id)]
      }
      return newerState;

    default:
      return state;
  }
}

export default cartReducer