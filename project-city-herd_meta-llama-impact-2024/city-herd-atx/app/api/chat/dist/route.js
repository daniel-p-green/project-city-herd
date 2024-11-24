"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.POST = void 0;
var sdk_1 = require("@llama-stack/sdk");
var ai_1 = require("ai");
var astra_db_ts_1 = require("@datastax/astra-db-ts");
var llama = new sdk_1.LlamaStack({
    apiKey: process.env.LLAMA_STACK_API_KEY,
    version: "3.2"
});
var astraDb = new astra_db_ts_1.AstraDB(process.env.ASTRA_DB_APPLICATION_TOKEN, process.env.ASTRA_DB_API_ENDPOINT, process.env.ASTRA_DB_NAMESPACE);
function POST(req) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, messages, useRag, llm, similarityMetric, _c, language, latestMessage, docContext, embedding, collection, localCollection, _d, generalDocs, localDocs, completion, e_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 8, , 9]);
                    return [4 /*yield*/, req.json()];
                case 1:
                    _b = _e.sent(), messages = _b.messages, useRag = _b.useRag, llm = _b.llm, similarityMetric = _b.similarityMetric, _c = _b.language, language = _c === void 0 ? 'en' : _c;
                    latestMessage = (_a = messages[(messages === null || messages === void 0 ? void 0 : messages.length) - 1]) === null || _a === void 0 ? void 0 : _a.content;
                    docContext = '';
                    if (!useRag) return [3 /*break*/, 6];
                    return [4 /*yield*/, llama.embeddings.create({
                            input: latestMessage,
                            model: "llama-3.2-70b"
                        })];
                case 2:
                    embedding = _e.sent();
                    return [4 /*yield*/, astraDb.collection("chat_" + similarityMetric)];
                case 3:
                    collection = _e.sent();
                    return [4 /*yield*/, astraDb.collection('local_knowledge')];
                case 4:
                    localCollection = _e.sent();
                    return [4 /*yield*/, Promise.all([
                            collection.find(null, {
                                sort: { $vector: embedding.data[0].embedding },
                                limit: 3
                            }).toArray(),
                            localCollection.find({ language: language }, {
                                sort: { $vector: embedding.data[0].embedding },
                                limit: 2
                            }).toArray()
                        ])];
                case 5:
                    _d = _e.sent(), generalDocs = _d[0], localDocs = _d[1];
                    docContext = "\n        START CONTEXT\n        " + __spreadArrays(generalDocs, localDocs).map(function (doc) { return doc.content; }).join("\n") + "\n        END CONTEXT\n      ";
                    _e.label = 6;
                case 6: return [4 /*yield*/, llama.chat.completions.create({
                        messages: __spreadArrays(messages),
                        model: "llama-3.2-70b",
                        stream: true,
                        context: docContext,
                        system_prompt: "You are a bilingual (English/Spanish) AI assistant for Austin, TX. \n        Respond in the same language as the user's query. \n        If the answer is not in the context, say \"I don't have enough information to answer that question\" in the appropriate language.\n        Format responses using markdown and include citations when available."
                    })];
                case 7:
                    completion = _e.sent();
                    return [2 /*return*/, new ai_1.StreamingTextResponse(completion.body)];
                case 8:
                    e_1 = _e.sent();
                    throw e_1;
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.POST = POST;
