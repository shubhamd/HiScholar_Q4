"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
	var user = props.user;
	user.personal = user.personal ? user.personal : {};
	//console.log("user in the profile form", user)
	var personal = props.personal;
	return React.createElement(
		"div",
		{ className: "card" },
		React.createElement(
			"div",
			{ className: "card-header", "data-background-color": "purple" },
			React.createElement(
				"h4",
				{ className: "title" },
				"Personal Info"
			),
			React.createElement(
				"p",
				{ className: "category" },
				"Complete your profile"
			)
		),
		React.createElement(
			"div",
			{ className: "card-content" },
			React.createElement(
				"form",
				null,
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-md-6" },
						React.createElement(
							"div",
							{ className: "form-group label-floating" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"First Name"
							),
							React.createElement("input", { name: "firstName", onChange: props.handleChange.bind(undefined, "firstName"), style: { textTransform: "capitalize" }, defaultValue: user.firstName, type: "text", className: "form-control" })
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-6" },
						React.createElement(
							"div",
							{ className: "form-group label-floating" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"Last Name"
							),
							React.createElement("input", { name: "lastName", onChange: props.handleChange.bind(undefined, "lastName"), style: { textTransform: "capitalize" }, defaultValue: user.lastName, type: "text", className: "form-control" })
						)
					)
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-md-3" },
						React.createElement(
							"div",
							{ className: "form-group label-floating" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"City"
							),
							React.createElement("input", { name: "city", onChange: props.handleChange.bind(undefined, "city"), defaultValue: user.personal.city, type: "text", className: "form-control" })
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3" },
						React.createElement(
							"div",
							{ className: "form-group label-floating" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"State"
							),
							React.createElement("input", { name: "state", onChange: props.handleChange.bind(undefined, "state"), defaultValue: user.personal.state, type: "text", className: "form-control" })
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3" },
						React.createElement(
							"div",
							{ className: "form-group label-floating" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"Country"
							),
							React.createElement("input", { name: "country", onChange: props.handleChange.bind(undefined, "country"), defaultValue: user.personal.country, type: "text", className: "form-control" })
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3" },
						React.createElement(
							"div",
							{ className: "form-group label-floating" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"Zip Code"
							),
							React.createElement("input", { name: "zip_code", onChange: props.handleChange.bind(undefined, "zip_code"), defaultValue: user.personal.zip_code, type: "text", className: "form-control" })
						)
					)
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-md-3" },
						React.createElement(
							"div",
							{ className: "form-group label-floating" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"GPA"
							),
							React.createElement("input", { name: "gpa", onChange: props.handleChange.bind(undefined, "gpa"), defaultValue: user.personal.gpa, type: "text", className: "form-control" })
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3" },
						React.createElement(
							"div",
							{ className: "form-group label-floating" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"TOEFL"
							),
							React.createElement("input", { name: "toefl", onChange: props.handleChange.bind(undefined, "toefl"), defaultValue: user.personal.toefl, type: "text", className: "form-control" })
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3" },
						React.createElement(
							"div",
							{ className: "form-group label-floating" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"ACT"
							),
							React.createElement("input", { name: "act", onChange: props.handleChange.bind(undefined, "act"), defaultValue: user.personal.act, type: "email", className: "form-control" })
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3" },
						React.createElement(
							"div",
							{ className: "form-group label-floating" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"SAT"
							),
							React.createElement("input", { name: "sat", onChange: props.handleChange.bind(undefined, "sat"), defaultValue: user.personal.sat, type: "email", className: "form-control" })
						)
					)
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-md-12" },
						React.createElement(
							"div",
							{ className: "form-group" },
							React.createElement(
								"label",
								null,
								"Personal Statement"
							),
							React.createElement(
								"div",
								{ className: "label-floating" },
								React.createElement("textarea", { name: "personal_statement", onChange: props.handleChange.bind(undefined, "personal_statement"), defaultValue: user.personal.personal_statement, style: style.textarea, className: "form-control", rows: "15" })
							)
						)
					)
				),
				React.createElement(
					"button",
					{ onClick: props.onUpdate.bind(undefined), type: "submit", className: "btn btn-primary pull-right" },
					"Update Profile"
				),
				React.createElement("div", { className: "clearfix" })
			)
		)
	);
};

// onClick={props.onUpdate.bind(this)}
// defaultValue={}

var style = {
	textarea: {
		background: "#fffffa",
		border: "1px solid #ddd",
		padding: 16
	}
};