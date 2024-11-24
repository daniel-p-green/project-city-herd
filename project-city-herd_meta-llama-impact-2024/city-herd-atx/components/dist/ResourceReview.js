"use strict";
exports.__esModule = true;
var react_1 = require("react");
function ResourceReview(_a) {
    var resources = _a.resources, onValidate = _a.onValidate;
    var _b = react_1.useState(new Set()), selectedResources = _b[0], setSelectedResources = _b[1];
    var toggleResource = function (url) {
        var newSelected = new Set(selectedResources);
        if (newSelected.has(url)) {
            newSelected["delete"](url);
        }
        else {
            newSelected.add(url);
        }
        setSelectedResources(newSelected);
    };
    var handleSubmit = function () {
        var validatedResources = resources.filter(function (r) { return selectedResources.has(r.url); });
        onValidate(validatedResources);
    };
    return (React.createElement("div", { className: "space-y-4" },
        React.createElement("h2", { className: "text-xl font-semibold" }, "Review Resources"),
        resources.map(function (resource) { return (React.createElement("div", { key: resource.url, className: "p-4 border rounded-lg" },
            React.createElement("div", { className: "flex items-start gap-3" },
                React.createElement("input", { type: "checkbox", checked: selectedResources.has(resource.url), onChange: function () { return toggleResource(resource.url); }, className: "mt-1" }),
                React.createElement("div", null,
                    React.createElement("h3", { className: "font-medium" }, resource.title),
                    React.createElement("p", { className: "text-sm text-gray-600" }, resource.snippet),
                    React.createElement("span", { className: "text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded mt-2 inline-block" }, resource.category))))); }),
        React.createElement("button", { onClick: handleSubmit, className: "bg-purple-600 text-white px-4 py-2 rounded-md" }, "Confirm Selected Resources")));
}
exports["default"] = ResourceReview;
