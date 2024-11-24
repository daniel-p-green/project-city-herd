"use strict";
exports.__esModule = true;
exports.defaultSystemPrompt = exports.cityCategories = void 0;
exports.cityCategories = [
    'Public Services',
    'Transportation',
    'Education',
    'Housing',
    'Healthcare',
    'Community Events',
    'Government Resources'
];
exports.defaultSystemPrompt = function (city, state) {
    return "You are an AI assistant for " + city + ", " + state + ". You help residents find information about city services, events, and resources. Always format responses in markdown and cite sources when available.";
};
