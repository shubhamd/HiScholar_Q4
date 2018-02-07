"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {
	searchedUniversity: "",
	selectedUniversities: []
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	var newState = Object.assign({}, state);

	switch (action.type) {

		case constants.SEARCHED_UNIVERSITY_RECEIVED:
			newState.searchedUniversity = action.data;
			//console.log("action.data", action.data);
			//console.log("newState: ", newState);
			return newState;

		case constants.SELECTED_UNIVERSITY_RECEIVED:
			newState.selectedUniversities.push(action.data);
			//console.log("action.data", action.data)
			//console.log("newState: ", newState);
			return newState;

		default:
			return state;
	}
};