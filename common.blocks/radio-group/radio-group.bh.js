module.exports = function(bh) {

    bh.match('radio-group', function(ctx, json) {
        var mods = ctx.mods();
        ctx.content((json.options || []).map(function(option, i) {
            return [
                !!i && !mods.view && { tag: 'br' },
                {
                    block: 'radio',
                    mods: {
                        type: mods.type,
                        view: mods.view,
                        mode: mods.mode,
                        theme: mods.theme,
                        bkg: mods.bkg,
                        size: mods.size,
                        checked: option.checked,
                        disabled: option.disabled || mods.disabled
                    },
                    name: json.name,
                    val: option.val,
                    text: option.text,
                    title: option.title,
                    icon: option.icon
                }
            ];
        }));
    });

};
