"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var react_markdown_1 = require("react-markdown");
var remark_gfm_1 = require("remark-gfm");
var Bubble = react_1.forwardRef(function Bubble(_a, ref) {
    var content = _a.content;
    var role = content.role;
    var isUser = role === "user";
    return (React.createElement("div", { ref: ref, className: "block mt-4 md:mt-6 pb-[7px] clear-both " + (isUser ? 'float-right' : 'float-left') },
        React.createElement("div", { className: "flex justify-end" },
            React.createElement("div", { className: "talk-bubble" + (isUser ? ' user' : '') + " p-2 md:p-4" },
                content.processing ? (React.createElement("div", { className: "w-6 h-6 flex items-center justify-center" },
                    React.createElement("div", { className: "dot-flashing" }))) : (React.createElement(react_markdown_1["default"], { remarkPlugins: [remark_gfm_1["default"]], components: {
                        code: function (_a) {
                            var node = _a.node, children = _a.children, props = __rest(_a, ["node", "children"]);
                            return (React.createElement("code", __assign({}, props), children));
                        }
                    } }, content === null || content === void 0 ? void 0 : content.content)),
                React.createElement("svg", { width: "12", height: "7", viewBox: "0 0 12 7", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M0.730278 0.921112C-3.49587 0.921112 12 0.921112 12 0.921112V5.67376C12 6.8181 9.9396 7.23093 9.31641 6.27116C6.83775 2.45382 3.72507 0.921112 0.730278 0.921112Z" })))),
        content.url ? (React.createElement("div", { className: "flex justify-end mt-3" },
            React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement("span", { className: "text-sm" }, "Source:"),
                React.createElement(link_1["default"], { href: content === null || content === void 0 ? void 0 : content.url, target: "_blank" },
                    React.createElement("div", { className: "chatbot-faq-link flex items-center px-2 py-0.5" },
                        React.createElement("svg", { width: "14", height: "7", viewBox: "0 0 14 7", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("path", { d: "M10.3333 0.127197H7.66665V1.46053H10.3333C11.4333 1.46053 12.3333 2.36053 12.3333 3.46053C12.3333 4.56053 11.4333 5.46053 10.3333 5.46053H7.66665V6.79386H10.3333C12.1733 6.79386 13.6666 5.30053 13.6666 3.46053C13.6666 1.62053 12.1733 0.127197 10.3333 0.127197ZM6.33331 5.46053H3.66665C2.56665 5.46053 1.66665 4.56053 1.66665 3.46053C1.66665 2.36053 2.56665 1.46053 3.66665 1.46053H6.33331V0.127197H3.66665C1.82665 0.127197 0.333313 1.62053 0.333313 3.46053C0.333313 5.30053 1.82665 6.79386 3.66665 6.79386H6.33331V5.46053ZM4.33331 2.79386H9.66665V4.1272H4.33331V2.79386Z" })),
                        React.createElement("span", { className: "text-xs font-semibold pl-1.5" }, "Astra DB FAQs")))))) :
            null));
});
exports["default"] = Bubble;
