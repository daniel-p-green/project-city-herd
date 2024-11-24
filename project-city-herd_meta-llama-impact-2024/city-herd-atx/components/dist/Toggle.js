"use strict";
exports.__esModule = true;
var Toggle = function (_a) {
    var enabled = _a.enabled, label = _a.label, onChange = _a.onChange;
    return (React.createElement("div", { className: "flex items-center justify-center w-full self-end" },
        React.createElement("label", { htmlFor: "toggle", className: "flex items-center cursor-pointer py-2" },
            React.createElement("div", { className: "relative" },
                React.createElement("div", { className: "w-10 h-6 bg-gray-400 rounded-full shadow-inner " + (enabled ? 'toggle-background' : '') }),
                React.createElement("div", { className: "absolute -left-1 -top-0 transition transform bg-white border-2 rounded-full w-6 h-6 " + (enabled ? 'translate-x-full toggle-boarder' : 'border-gray-400') })),
            React.createElement("input", { id: "toggle", type: "checkbox", className: "hidden", checked: enabled, onChange: onChange }),
            React.createElement("div", { className: "chatbot-text-primary ml-3 font-medium" }, label))));
};
exports["default"] = Toggle;
