const INITIAL_VALUE = {
  fav: [],
  counter: 0,
};

export default function addFavReducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "Add_To_Favourites":
      if (!(action.payload === 0)) {
        return {
          ...state,
          fav: [...state.fav, action.payload],
          counter: state.fav.length + 1,
        };
      } else {
        console.log("exist before");
        return {
          ...state,
          counter: state.fav.length,
        };
      }
    case "Delete_From_Favourites":
      if (!(action.payload === 0)) {
        const index = (state.fav).indexOf(action.payload);
        if (index > -1) {
          (state.fav).splice(index, 1);
        }
        return {
          ...state,
          fav: state.fav,
          counter: state.fav.length ,
        };
      } else {
        console.log("does not exist before");
        return {
          ...state,
          counter: state.fav.length,
        };
      }

    default:
      return state;
  }
}
