modules.define('utils__pattern', function(provide) {
    var CARDS_RE = [
        {
            name: 'visaelectron',
            pattern: /^(4026|417500|4405|4508|4844|4913|4917)/
        },
        {
            name: 'visa',
            pattern: /^4/
        },
        {
            name: 'mastercard',
            pattern: /^5[1-5]/
        },
        {
            name: 'maestro',
            pattern: /^(5018|5020|5038|6304|6759|676[1-3])/
        }
    ];

    provide({
        getPaymentSystem: function(number) {
            for (var i = 0; i < CARDS_RE.length; i++) {
                if (CARDS_RE[i].pattern.test(number)) {
                    return CARDS_RE[i].name;
                }
            }
        }
    });

});
