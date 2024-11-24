"use strict";
exports.__esModule = true;
var PromptSuggestionButton_1 = require("./PromptSuggestionButton");
var PromptSuggestionRow = function (_a) {
    var onPromptClick = _a.onPromptClick;
    var prompts = [
        'How does similarity search work with a Vector DB?',
        'What is DataStax Enterprise?',
        'How does CassIO work?',
        'What are some common FAQs about Astra?',
    ];
    return (React.createElement("div", { className: "flex flex-row flex-wrap justify-start items-center py-4 gap-2" }, prompts.map(function (prompt, index) { return (React.createElement(PromptSuggestionButton_1["default"], { key: "suggestion-" + index, text: prompt, onClick: function () { return onPromptClick(prompt); } })); })));
};
exports["default"] = PromptSuggestionRow;
