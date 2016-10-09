'use strict';

var condition1 = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        i++;
                        return _context.abrupt('return', i > 10);

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function condition1() {
        return _ref.apply(this, arguments);
    };
}();

var condition2 = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        j++;
                        return _context2.abrupt('return', j < 0);

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function condition2() {
        return _ref2.apply(this, arguments);
    };
}();

var _index = require('../lib/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var i = 0;


var j = 0;


Promise.resolve().then(function () {
    return (0, _index2.default)(condition1, 1);
}).then(function () {
    if (i <= 10) throw "Wait didn't work";
}).then(function () {
    return console.log('success');
}).catch(function () {
    return console.log('fail');
});

Promise.resolve().then(function () {
    return (0, _index2.default)(condition2, 10);
}).then(function () {
    return console.log('fail');
}).catch(function () {
    return console.log('success');
});