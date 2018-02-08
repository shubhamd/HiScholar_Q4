import constants from '../constants'

var initialState = {
  searchedUniversity: "",
	selectedUniversities: [],
  savedUniversities: []
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);

	switch (action.type) {

		case constants.SEARCHED_UNIVERSITY_RECEIVED:
      newState.searchedUniversity = action.data;
      //console.log("action.data", action.data);
			//console.log("newState: ", newState);
			return newState;

    case constants.SELECTED_UNIVERSITY_RECEIVED:
      if(!newState.selectedUniversities.length){
        newState.selectedUniversities.push(action.data);
        return newState;
      }
      const exists = newState.selectedUniversities.filter((el) => { return el["_id"] === action.data("_id")});
      (!exists.length)? newState.selectedUniversities.push(action.data) : null;
      return newState;

    case constants.SCHOOL_CARD_CLOSED:
     newState.selectedUniversities = newState.selectedUniversities.filter((el, ind, arr) => {return ind !== action.data });
     return newState;

		default:
			return state;
	}
}
