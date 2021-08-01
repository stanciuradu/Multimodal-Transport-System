const initialState = {
  // initial, componenta dropDown este ascunsa, deci hidden are valorea true, iar la eventul de click pe iconita se va afisa componete de DropDown
  hidden: true,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        // se copiaza state-ul initial la care se adauga valorea opusa lui hidden
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
}

export default cartReducer;
