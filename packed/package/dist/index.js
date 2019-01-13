"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseKeys = function (obj, casingCallback) {
    if (!obj || typeof obj !== 'object' || obj instanceof RegExp || obj instanceof Date) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(function (item) { return exports.caseKeys(item, casingCallback); });
    }
    var keys = Object.keys(obj);
    var newObject = {};
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var newKey = casingCallback(key);
        newObject[newKey] = exports.caseKeys(obj[key], casingCallback);
    }
    return newObject;
};
