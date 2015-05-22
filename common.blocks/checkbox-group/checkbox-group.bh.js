module.exports = function(bh) {

    bh.match('checkbox-group', function(ctx, json) {
        ctx
            .tag('span')
            .js(true)
            .mix({ block: 'control-group' });

        var mods = ctx.mods();
        ctx.content((json.options || []).map(function(option, i) {
            return [
                !!i && !mods.view && { tag: 'br' },
                {
                    block: 'checkbox',
                    mods: {
                        type: mods.type,
                        view: mods.view,
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
