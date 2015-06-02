/**
 * @module validation_card
 */

modules.define('validation_card',
    ['objects', 'utils__pattern'],
    function(provide, objects, pattern) {

var DEFAULT_MESSAGE = {
        wrong_length: 'Card number should be made of 16 or 18 digits',
        luhn_failed: 'Incorrect card number',
        unsupported: 'Unsupported card type'
    },

    DIGITS_RE = /^\d+$/;

return provide(function(params) {
    params = objects.extend({}, params);
    var message = params.message || DEFAULT_MESSAGE;

    return function(val) {
        if (!val) {
            return null;
        }

        if (!DIGITS_RE.test(val) || (val.length !== 16 && val.length !== 18)) {
            return _resolveMessage(message, 'wrong_length');
        }

        if (!_luhn(val)) {
            return _resolveMessage(message, 'luhn_failed');
        }

        var cardType = pattern.getPaymentSystem(val);

        if (!cardType) {
            return _resolveMessage(message, 'unsupported');
        }

        // if you need concrete card type
        if (params.cardType && !~params.cardType.indexOf(cardType.name)) {
            return _resolveMessage(message, 'unsupported');
        }

        return null;
    };
});

/**
 * Luhn algorithm
 *
 * @param {String} cardNumber
 * @returns {Boolean}
 */
function _luhn(cardNumber) {
    var digit, n, i, l,
        sum = 0,
        ref2 = cardNumber.split('').reverse();

    for (n = i = 0, l = ref2.length; i < l; n = ++i) {
        digit = Number(ref2[n]);
        if (n % 2) {
            digit *= 2;
            sum += digit < 10 ? digit : digit - 9;
        } else {
            sum += digit;
        }
    }

    return sum % 10 === 0;
}

/**
 * Resolve right message
 *
 * @returns {String}
 */
function _resolveMessage(message, type) {
    return typeof message === 'string' ? message : message[type];
}

});
