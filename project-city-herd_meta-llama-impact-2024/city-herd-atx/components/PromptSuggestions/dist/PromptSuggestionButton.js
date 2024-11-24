"use strict";
exports.__esModule = true;
var PromptSuggestionButton = function (_a) {
    var text = _a.text, onClick = _a.onClick;
    return (React.createElement("button", { onClick: onClick, className: "prompt-button text-sm py-2 px-4 rounded-lg overflow-hidden whitespace-nowrap focus:outline-none focus:shadow-outline" }, text));
};
exports["default"] = PromptSuggestionButton;
