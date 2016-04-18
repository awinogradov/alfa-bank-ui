({
    block: 'page',
    title: 'Highlight',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'highlight.min.css' }],
    scripts: [{ elem: 'js', url: 'highlight.min.js' }],
    content: [
        {
            block: 'example-header',
            title: 'Блок Highlight',
            desc: 'Используется в основном плагином jquery__highlight, для подсветки найденного текста'
        },
        {
            block: 'example-section',
            title: 'Default',
            content: [
                {
                    block: 'highlight-test'
                },
                ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                    return {
                        elem: 'col',
                        elemMods: { theme: theme },
                        content: {
                            elem: 'item',
                            content: {
                                block: 'paragraph',
                                mods: { theme: theme },
                                content: [
                                    'Проценты прибавляются к сумме ',
                                    {
                                        block: 'highlight',
                                        content: 'депозита'
                                    },
                                    ' (капитализируются) ежемесячно в течение всего срока ',
                                    {
                                        block: 'highlight',
                                        content: 'депозита'
                                    },
                                    ' и выплачиваются при возврате суммы ',
                                    {
                                        block: 'highlight',
                                        content: 'депозита'
                                    },
                                    ' в конце его срока. В случае досрочного расторжения ',
                                    {
                                        block: 'highlight',
                                        content: 'депозита'
                                    },
                                    ' проценты начисляются по ставке 0,005% годовых.'
                                ]
                            }
                        }
                    };
                })
            ]
        }
    ]
});
