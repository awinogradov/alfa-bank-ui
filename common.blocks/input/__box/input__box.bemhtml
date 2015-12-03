block('input').elem('box')(
    content()(function() {
        var icon = this._input.icon;
        if (icon && icon.block !== 'icon') throw Error('input: Mode icon in input use only icon block.');
        return [
            applyNext(),
            icon && {
                elem: 'icon',
                content: icon
            }
        ];
    })
);
