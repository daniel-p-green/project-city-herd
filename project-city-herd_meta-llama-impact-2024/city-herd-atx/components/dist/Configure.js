"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Dropdown_1 = require("./Dropdown");
var Toggle_1 = require("./Toggle");
var Footer_1 = require("./Footer");
var Configure = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, useRag = _a.useRag, llm = _a.llm, similarityMetric = _a.similarityMetric, setConfiguration = _a.setConfiguration;
    var _b = react_1.useState(useRag), rag = _b[0], setRag = _b[1];
    var _c = react_1.useState(llm), selectedLlm = _c[0], setSelectedLlm = _c[1];
    var _d = react_1.useState(similarityMetric), selectedSimilarityMetric = _d[0], setSelectedSimilarityMetric = _d[1];
    if (!isOpen)
        return null;
    var llmOptions = [
        { label: 'Llama 3.2 70B', value: 'llama-3.2-70b' },
        { label: 'Llama 3.2 13B', value: 'llama-3.2-13b' },
        { label: 'Llama 3.2 7B', value: 'llama-3.2-7b' }
    ];
    var similarityMetricOptions = [
        { label: 'Cosine Similarity', value: 'cosine' },
        { label: 'Euclidean Distance', value: 'euclidean' },
        { label: 'Dot Product', value: 'dot_product' }
    ];
    var handleSave = function () {
        setConfiguration(rag, selectedLlm, selectedSimilarityMetric);
        onClose();
    };
    return (React.createElement("div", { className: "fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50" },
        React.createElement("div", { className: "chatbot-section flex flex-col origin:w-[800px] w-full origin:h-[735px] h-full p-6 rounded shadow-lg overflow-auto" },
            React.createElement("div", { className: "grow" },
                React.createElement("div", { className: 'pb-6 flex justify-between' },
                    React.createElement("h1", { className: 'chatbot-text-primary text-xl md:text-2xl font-medium' }, "Configure"),
                    React.createElement("button", { onClick: onClose, className: "chatbot-text-primary text-4xl font-thin leading-8" },
                        React.createElement("span", { "aria-hidden": true }, "\u00D7"))),
                React.createElement("div", { className: "flex mb-4" },
                    React.createElement(Dropdown_1["default"], { fieldId: "llm", label: "LLM", options: llmOptions, value: selectedLlm, onSelect: setSelectedLlm }),
                    React.createElement(Toggle_1["default"], { enabled: rag, label: "Enable vector content (RAG)", onChange: function () { return setRag(!rag); } })),
                React.createElement(Dropdown_1["default"], { fieldId: "similarityMetric", label: "Similarity Metric", options: similarityMetricOptions, value: selectedSimilarityMetric, onSelect: setSelectedSimilarityMetric })),
            React.createElement("div", { className: "self-end w-full" },
                React.createElement("div", { className: "flex justify-end gap-2" },
                    React.createElement("button", { className: 'chatbot-button-secondary flex rounded-md items-center justify-center px-2.5 py-3', onClick: onClose }, "Cancel"),
                    React.createElement("button", { className: 'chatbot-button-primary flex rounded-md items-center justify-center px-2.5 py-3', onClick: handleSave }, "Save Configuration")),
                React.createElement(Footer_1["default"], null)))));
};
exports["default"] = Configure;
