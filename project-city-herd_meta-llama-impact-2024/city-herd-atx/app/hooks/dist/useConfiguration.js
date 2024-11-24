"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useConfiguration = function () {
    // Safely get values from localStorage
    var getLocalStorageValue = function (key, defaultValue) {
        if (typeof window !== 'undefined') {
            var storedValue = localStorage.getItem(key);
            if (storedValue !== null) {
                return storedValue;
            }
        }
        return defaultValue;
    };
    var _a = react_1.useState(function () { return getLocalStorageValue('useRag', 'true') === 'true'; }), useRag = _a[0], setUseRag = _a[1];
    var _b = react_1.useState(function () { return getLocalStorageValue('llm', 'gpt-3.5-turbo'); }), llm = _b[0], setLlm = _b[1];
    var _c = react_1.useState(function () { return getLocalStorageValue('similarityMetric', 'cosine'); }), similarityMetric = _c[0], setSimilarityMetric = _c[1];
    var setConfiguration = function (rag, llm, similarityMetric) {
        setUseRag(rag);
        setLlm(llm);
        setSimilarityMetric(similarityMetric);
    };
    // Persist to localStorage
    react_1.useEffect(function () {
        if (typeof window !== 'undefined') {
            localStorage.setItem('useRag', JSON.stringify(useRag));
            localStorage.setItem('llm', llm);
            localStorage.setItem('similarityMetric', similarityMetric);
        }
    }, [useRag, llm, similarityMetric]);
    return {
        useRag: useRag,
        llm: llm,
        similarityMetric: similarityMetric,
        setConfiguration: setConfiguration
    };
};
exports["default"] = useConfiguration;
