"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Link = require("react-router-dom").Link;
var keys = require("../../../config/keys");
//const Twit = require("twit");

var Newsfeed = (function (Component) {
	function Newsfeed(props) {
		_classCallCheck(this, Newsfeed);

		_get(Object.getPrototypeOf(Newsfeed.prototype), "constructor", this).call(this, props);
		this.state = {};
	}

	_inherits(Newsfeed, Component);

	_prototypeProperties(Newsfeed, null, {
		componentDidMount: {
			value: function componentDidMount() {},
			writable: true,
			configurable: true
		},
		render: {


			// getTweets() {
			// 	const twitter = new Twit({
			// 	  consumer_key:keys.twitter.consumerKey,
			// 	  consumer_secret: keys.twitter.consumerSecret,
			// 	  access_token: keys.twitter.accessToken,
			// 	  access_token_secret: keys.twitter.accessTokenSecret,
			// 	  timeout_ms: 5000,
			// 	});
			// 	// let twitter_handle = 'nyuniversity'
			// 	// let twitter_handle = 'hamiltonhall'
			// 	let twitter_handle = "MeetNYU"

			// gets tweets of specific user by querying Twitter Handle
			// twitter.get('statuses/user_timeline', { screen_name: twitter_handle, count: 3 },
			// function (err, data, response) {
			//   data.forEach(school => {
			//     // console.log(JSON.stringify(data, null, ' '));
			//     console.log(school);
			//   })
			// })
			// }


			value: function render() {
				var currentUser = this.props.user.currentUser; // can be null

				getTweets();
				console.log("currentUser", currentUser);
				return React.createElement(
					"div",
					null,
					React.createElement(
						"div",
						{ className: "col-md-8" },
						React.createElement(
							"h2",
							null,
							"Newsfeed component"
						)
					),
					React.createElement("div", { className: "col-md-4" })
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Newsfeed;
})(Component);

var stateToProps = function (state) {
	return {
		user: state.user };
};

var dispatchToProps = function (dispatch) {
	return {};
};

module.exports = connect(stateToProps, dispatchToProps)(Newsfeed);