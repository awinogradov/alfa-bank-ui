modules.define('jquery__mask', ['jquery'], function(provide, $) {
    var jQuery = $,
        window = {jQuery: jQuery};
    /*borschik:include:../../libs/jQuery-Mask-Plugin/dist/jquery.mask.min.js*/
    provide($);
});
