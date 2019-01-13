"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
describe('caseKeys', function () {
    it('converts keys in an object to target casing using a callback', function () {
        var input = {
            CREATEDAT: 'CREATEDAT',
            UPDATEDAT: 'UPDATEDAT',
            USERITEMS: [
                {
                    CREATEDAT: 'CREATEDAT',
                    UPDATEDAT: 'UPDATEDAT',
                },
            ],
        };
        var expected = {
            createdat: 'CREATEDAT',
            updatedat: 'UPDATEDAT',
            useritems: [
                {
                    createdat: 'CREATEDAT',
                    updatedat: 'UPDATEDAT',
                },
            ],
        };
        expect(_1.caseKeys(input, function (value) { return value.toLowerCase(); })).toEqual(expected);
    });
});
