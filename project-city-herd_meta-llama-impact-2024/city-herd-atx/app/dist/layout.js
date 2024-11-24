"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var sans_1 = require("geist/font/sans");
require("./globals.css");
exports.metadata = {
    title: "RAGBot Starter",
    description: "RAGBot Starter - Powered by DataStax and Vercel"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", className: sans_1.GeistSans.variable },
        React.createElement("body", null, children)));
}
exports["default"] = RootLayout;
