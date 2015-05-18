modules.define('utils__format',
    function(provide) {
        var utils = this;

        utils.formatSum = function(sum){
            if(sum) {
                //sum to number
                sum = parseFloat(sum.toString().replace(',', '.').replace(' ', ''));
                //format minor
                sum = sum % 1 > 0 ? parseFloat(sum).toFixed(2) : parseInt(sum);
                //format output
                var formattedSum = sum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ').replace('.', ',');
                return formattedSum;
            } else {
                return 0;
            }
        }

        provide(utils);

    });
