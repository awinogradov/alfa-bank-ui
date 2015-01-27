({
  block : 'page',
  mods : { theme : 'alfa', bkg : 'color' },
  title : 'Alfa-Bank UI',
  favicon : '/favicon.ico',
  head : [
    { elem : 'meta', attrs : { name : 'description', content : '' } },
    { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } }
  ],
  styles : [
    { elem : 'css', url : 'index.min.css' },
  ],
  scripts: [
    { elem : 'js', url : 'index.min.js' }
  ],
  content : [
    {
      elem : 'header',
      content : [
        {
          block : 'heading',
          mix : [{ block : 'align', mods : { hor : 'center' }  }],
          content : 'Компоненты интерфейса'
        }
      ]
    },
    {
      elem : 'content',
      content : [
        {
          block : 'section',
          content : [
            {
              block : 'heading',
              mix : [{ block : 'section', elem : 'title' }],
              lvl : 2,
              content : 'Логотипы'
            },
            {
              block : 'row',
              mix : [{ block : 'section', elem : 'sizes' }],
              content : [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'S'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'M'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'L'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'XL'
                }
              ]
            },
            {
              block: 'row',
              mix: [{ block: 'section', elem: 'examples' }],
              content: [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block : 'section',
          content : [
            {
              block : 'heading',
              mix : [{ block : 'section', elem : 'title' }],
              lvl : 2,
              content : 'Заголовки'
            },
            {
              elem : 'examples',
              content : [
                {
                  block : 'heading',
                  content : 'h1. Заголовок первого уровня'
                },
                {
                  block : 'heading',
                  lvl : 2,
                  content : 'h2. Заголовок второго уровня'
                },
                {
                  block : 'heading',
                  lvl : 3,
                  content : 'h3. Заголовок третьего уровня'
                }
              ]
            }
          ]
        },
        {
          block : 'section',
          content : [
            {
              block : 'heading',
              mix : [{ block : 'section', elem : 'title' }],
              lvl : 2,
              content : 'Параграфы'
            },
            {
              elem : 'examples',
              content : [
                {
                  block : 'paragraph',
                  mods : { type : 'lead' },
                  content : [
                    'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                    'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                    'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                    'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                    'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                    'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                    'Это заглавный параграф, в котором абсолютно бестолковый текст.'
                  ]
                },
                {
                  block : 'paragraph',
                  content : [
                    'Это обычный параграф, в котором такой же бестолковый текст. ',
                    'Это обычный параграф, в котором такой же бестолковый текст. ',
                    'Это обычный параграф, в котором такой же бестолковый текст. ',
                    'Это обычный параграф, в котором такой же бестолковый текст. ',
                    'Это обычный параграф, в котором такой же бестолковый текст. ',
                    'Это обычный параграф, в котором такой же бестолковый текст. ',
                    'Это обычный параграф, в котором такой же бестолковый текст.'
                  ]
                },
                {
                  block : 'paragraph',
                  mark : 'nb',
                  content : [
                    'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                    'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                    'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                    'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                    'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                    'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                    'Это параграф с меткой NB, в котором еще более бестолковый текст.'
                  ]
                }
              ]
            }
          ]
        },
        {
          block : 'section',
          content : [
            {
              block : 'heading',
              mix : [{ block : 'section', elem : 'title' }],
              lvl : 2,
              content : 'Списки'
            },
            {
              block : 'row',
              mix : [{ block: 'section', elem: 'sizes' }],
              content : [
                {
                  elem : 'col',
                  mods : { sw : 3},
                  content : [
                    'Простой'
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 9},
                  content : [
                    'Нумерованный'
                  ]
                }
              ]
            },
            {
              block : 'row',
              mix : [{ block: 'section', elem: 'examples' }],
              content : [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'list',
                      mods : { theme : 'alfa', bkg : 'color' },
                      items : [
                        'Пункт списка',
                        'Пункт списка',
                        'Пункт списка',
                        'Пункт списка'
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 9 },
                  content : [
                    {
                      block : 'list',
                      mods : { type : 'ordered' },
                      items : [
                        'Пункт списка',
                        'Пункт списка',
                        'Пункт списка',
                        'Пункт списка'
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block : 'section',
          content : [
            {
              block : 'heading',
              mix : [{ block : 'section', elem : 'title' }],
              lvl : 2,
              content : 'Кнопки'
            },
            {
              block : 'row',
              mix : [{ block : 'section', elem : 'sizes' }],
              content : [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'S'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'M'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'L'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'XL'
                }
              ]
            },
            {
              block : 'row',
              mix : [{ block : 'section', elem : 'examples' }],
              content : [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block: 'controls',
                      content: [
                        {
                          block: 'button',
                          mods: { theme: 'alfa', bkg : 'color', size: 's' },
                          text: 'button'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'button',
                          mods : { theme: 'alfa', bkg : 'color', size : 's', view : 'action' },
                          text : 'button'
                        }
                      ]
                    },
                    {
                      block: 'controls',
                      content: [
                        {
                          block: 'button',
                          mods: { theme: 'alfa', bkg : 'color', view : 'pseudo', size: 's' },
                          text: 'button'
                        }
                      ]
                    },
                    {
                      block: 'controls',
                      content: [
                        {
                          block: 'button',
                          mods: { theme: 'alfa', bkg : 'color', size: 's', disabled : true },
                          text: 'button'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'button',
                          mods : { theme: 'alfa', bkg : 'color', size : 's' },
                          text : 'button',
                          icon : { block : 'icon', mods : { action : 'download' } }
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'button',
                          mods : { theme: 'alfa', bkg : 'color', size : 's' },
                          icon : {
                            block : 'spin',
                            mods : { theme : 'alfa', bkg : 'color', size : 'xs', visible : true }
                          },
                          text : 'Loading...'
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block: 'controls',
                      content: [
                        {
                          block: 'button',
                          mods: { theme: 'alfa', bkg : 'color', size: 'm' },
                          text: 'button'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'button',
                          mods : { theme: 'alfa', bkg : 'color', size : 'm', view : 'action' },
                          text : 'button'
                        }
                      ]
                    },
                    {
                      block: 'controls',
                      content: [
                        {
                          block: 'button',
                          mods: { theme: 'alfa', bkg : 'color', view : 'pseudo', size: 'm' },
                          text: 'button'
                        }
                      ]
                    },
                    {
                      block: 'controls',
                      content: [
                        {
                          block: 'button',
                          mods: { theme: 'alfa', bkg : 'color', size: 'm', disabled : true },
                          text: 'button'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'button',
                          mods : { theme: 'alfa', bkg : 'color', size : 'm' },
                          text : 'button',
                          icon : { block : 'icon', mods : { action : 'download' } }
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'button',
                          mods : { theme: 'alfa', bkg : 'color', size : 'm' },
                          icon : {
                            block : 'spin',
                            mods : { theme : 'alfa', bkg : 'color', size : 's', visible : true }
                          },
                          text : 'Loading...'
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block: 'controls',
                      content: [
                        {
                          block: 'button',
                          mods: {theme: 'alfa', bkg : 'color', size: 'l' },
                          text: 'button'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'button',
                          mods : { theme: 'alfa', bkg : 'color', size : 'l', view : 'action' },
                          text : 'button'
                        }
                      ]
                    },
                    {
                      block: 'controls',
                      content: [
                        {
                          block: 'button',
                          mods: { theme: 'alfa', bkg : 'color', view : 'pseudo', size: 'l' },
                          text: 'button'
                        }
                      ]
                    },
                    {
                      block: 'controls',
                      content: [
                        {
                          block: 'button',
                          mods: {theme: 'alfa', bkg : 'color', size: 'l', disabled : true },
                          text: 'button'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'button',
                          mods : { theme: 'alfa', bkg : 'color', size : 'l' },
                          text : 'button',
                          icon : { block : 'icon', mods : { action : 'download' } }
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'button',
                          mods : { theme: 'alfa', bkg : 'color', size : 'l' },
                          icon : {
                            block : 'spin',
                            mods : { theme : 'alfa', bkg : 'color', size : 'm', visible : true }
                          },
                          text : 'Loading...'
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block: 'controls',
                      content: [
                        {
                          block: 'button',
                          mods: {theme: 'alfa', bkg : 'color', size: 'xl' },
                          text: 'button'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'button',
                          mods : { theme: 'alfa', bkg : 'color', size : 'xl', view : 'action' },
                          text : 'button'
                        }
                      ]
                    },
                    {
                      block: 'controls',
                      content: [
                        {
                          block: 'button',
                          mods: { theme: 'alfa', bkg : 'color', view : 'pseudo', size: 'xl' },
                          text: 'button'
                        }
                      ]
                    },
                    {
                      block: 'controls',
                      content: [
                        {
                          block: 'button',
                          mods: {theme: 'alfa', bkg : 'color', size: 'xl', disabled : true },
                          text: 'button'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'button',
                          mods : { theme: 'alfa', bkg : 'color', size : 'xl' },
                          text : 'button',
                          icon : { block : 'icon', mods : { action : 'download' } }
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'button',
                          mods : { theme: 'alfa', bkg : 'color', size : 'xl' },
                          icon : {
                            block : 'spin',
                            mods : { theme : 'alfa', bkg : 'color', size : 'l', visible : true }
                          },
                          text : 'Loading...'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block : 'section',
          content : [
            {
              block : 'heading',
              mix : [{ block : 'section', elem : 'title' }],
              lvl : 2,
              content : 'Поля ввода'
            },
            {
              block : 'row',
              mix : [{ block : 'section', elem : 'sizes' }],
              content : [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'S'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'M'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'L'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'XL'
                }
              ]
            },
            {
              block: 'row',
              mix: [{ block: 'section', elem: 'examples' }],
              content: [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'input',
                          mods : { theme : 'alfa', bkg : 'color', size : 's' },
                          val : 'Простой',
                          placeholder : 'placeholder'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'input',
                          mods : { theme : 'alfa', bkg : 'color', size : 's', disabled : true },
                          val : 'Недоступный',
                          placeholder : 'placeholder'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'input',
                          mods : { theme : 'alfa', bkg : 'color', size : 's', 'has-clear' : true },
                          val : 'С очисткой',
                          placeholder : 'placeholder'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'select',
                          mods : { mode : 'radio-check', theme : 'alfa', bkg : 'color', size : 's' },
                          name : 'select',
                          text : 'first',
                          options : [
                            { val : 1, text : 'first', checked: true },
                            { val : 2, text : 'second' }
                          ]
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'textarea',
                          mods : { theme : 'alfa', bkg : 'color', size: 's' },
                          placeholder : 'текст'
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'input',
                          mods : { theme : 'alfa', bkg : 'color', size : 'm' },
                          val : 'Простой',
                          placeholder : 'placeholder'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'input',
                          mods : { theme : 'alfa', bkg : 'color', size : 'm', disabled : true },
                          val : 'Недоступный',
                          placeholder : 'placeholder'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'input',
                          mods : { theme : 'alfa', bkg : 'color', size : 'm', 'has-clear' : true },
                          val : 'С очисткой',
                          placeholder : 'placeholder'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'select',
                          mods : { mode : 'radio-check', theme : 'alfa', bkg : 'color', size : 'm' },
                          name : 'select',
                          text : 'first',
                          options : [
                            { val : 1, text : 'first', checked: true },
                            { val : 2, text : 'second' }
                          ]
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'textarea',
                          mods : { theme : 'alfa', bkg : 'color', size: 'm' },
                          placeholder : 'текст'
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'input',
                          mods : { theme : 'alfa', bkg : 'color', size : 'l' },
                          val : 'Простой',
                          placeholder : 'placeholder'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'input',
                          mods : { theme : 'alfa', bkg : 'color', size : 'l', disabled : true },
                          val : 'Недоступный',
                          placeholder : 'placeholder'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'input',
                          mods : { theme : 'alfa', bkg : 'color', size : 'l', 'has-clear' : true },
                          val : 'С очисткой',
                          placeholder : 'placeholder'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'select',
                          mods : { mode : 'radio-check', theme : 'alfa', bkg : 'color', size : 'l' },
                          name : 'select',
                          text : 'first',
                          options : [
                            { val : 1, text : 'first', checked: true },
                            { val : 2, text : 'second' }
                          ]
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'textarea',
                          mods : { theme : 'alfa', bkg : 'color', size: 'l' },
                          placeholder : 'текст'
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'input',
                          mods : { theme : 'alfa', bkg : 'color', size : 'xl' },
                          val : 'Простой',
                          placeholder : 'placeholder'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'input',
                          mods : { theme : 'alfa', bkg : 'color', size : 'xl', disabled : true },
                          val : 'Недоступный',
                          placeholder : 'placeholder'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'input',
                          mods : { theme : 'alfa', bkg : 'color', size : 'xl', 'has-clear' : true },
                          val : 'С очисткой',
                          placeholder : 'placeholder'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'select',
                          mods : { mode : 'radio-check', theme : 'alfa', bkg : 'color', size : 'xl' },
                          name : 'select',
                          text : 'first',
                          options : [
                            { val : 1, text : 'first', checked: true },
                            { val : 2, text : 'second' }
                          ]
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'textarea',
                          mods : { theme : 'alfa', bkg : 'color', size: 'xl' },
                          placeholder : 'текст'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block : 'section',
          content : [
            {
              block : 'heading',
              mix : [{ block : 'section', elem : 'title' }],
              lvl : 2,
              content : 'Радио'
            },
            {
              block : 'row',
              mix : [{ block : 'section', elem : 'sizes' }],
              content : [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'S'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'M'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'L'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'XL'
                }
              ]
            },
            {
              block: 'row',
              mix: [{ block: 'section', elem: 'examples' }],
              content: [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'radio-group',
                          mods : { theme : 'alfa', bkg : 'color', size : 's', type : 'button' },
                          name : 'radio-sizes-s',
                          options : [
                            { val : 1, text : 'Один' },
                            { val : 2, text : 'Два', checked : true },
                            { val : 3, text : 'Три' }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'radio-group',
                          mods : { theme : 'alfa', bkg : 'color', size : 'm', type : 'button' },
                          name : 'radio-sizes-m',
                          options : [
                            { val : 1, text : 'Один' },
                            { val : 2, text : 'Два', checked : true },
                            { val : 3, text : 'Три' }
                          ]
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'radio',
                          mods : { theme : 'alfa', bkg : 'color', size : 'm', checked : true },
                          val : 1,
                          text : 'радио'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'radio-group',
                          mods : { theme : 'alfa', bkg : 'color', size : 'm' },
                          name : 'radio-sizes-m',
                          options : [
                            { val : 1, text : 'Один' },
                            { val : 2, text : 'Два', checked : true },
                            { val : 3, text : 'Три' }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'radio-group',
                          mods : { theme : 'alfa', bkg : 'color', size : 'l', type : 'button' },
                          name : 'radio-sizes-l',
                          options : [
                            { val : 1, text : 'Один' },
                            { val : 2, text : 'Два', checked : true },
                            { val : 3, text : 'Три' }
                          ]
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'radio',
                          mods : { theme : 'alfa', bkg : 'color', size : 'l', checked : true },
                          val : 1,
                          text : 'радио'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'radio-group',
                          mods : { theme : 'alfa', bkg : 'color', size : 'l' },
                          name : 'radio-sizes-l',
                          options : [
                            { val : 1, text : 'Один' },
                            { val : 2, text : 'Два', checked : true },
                            { val : 3, text : 'Три' }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'radio-group',
                          mods : { theme : 'alfa', bkg : 'color', size : 'xl', type : 'button' },
                          name : 'radio-sizes-xl',
                          options : [
                            { val : 1, text : 'Один' },
                            { val : 2, text : 'Два', checked : true },
                            { val : 3, text : 'Три' }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block : 'section',
          content : [
            {
              block : 'heading',
              mix : [{ block : 'section', elem : 'title' }],
              lvl : 2,
              content : 'Чекбоксы'
            },
            {
              block : 'row',
              mix : [{ block : 'section', elem : 'sizes' }],
              content : [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'S'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'M'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'L'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'XL'
                }
              ]
            },
            {
              block: 'row',
              mix: [{ block: 'section', elem: 'examples' }],
              content: [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'checkbox-group',
                          mods : { theme : 'alfa', bkg : 'color', size : 's', type : 'button' },
                          name : 'checkbox-sizes-s',
                          options : [
                            { val : 1, text : 'Один' },
                            { val : 2, text : 'Два', checked : true },
                            { val : 3, text : 'Три' }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'checkbox-group',
                          mods : { theme : 'alfa', bkg : 'color', size : 'm', type : 'button' },
                          name : 'checkbox-sizes-m',
                          options : [
                            { val : 1, text : 'Один' },
                            { val : 2, text : 'Два', checked : true },
                            { val : 3, text : 'Три' }
                          ]
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'checkbox',
                          mods : { theme : 'alfa', bkg : 'color', size : 'm', checked : true },
                          val : 1,
                          text : 'чекбокс'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'checkbox-group',
                          mods : { theme : 'alfa', bkg : 'color', size : 'm' },
                          name : 'checkbox-sizes-m',
                          options : [
                            { val : 1, text : 'Один' },
                            { val : 2, text : 'Два', checked : true },
                            { val : 3, text : 'Три' }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'checkbox-group',
                          mods : { theme : 'alfa', bkg : 'color', size : 'l', type : 'button' },
                          name : 'checkbox-sizes-l',
                          options : [
                            { val : 1, text : 'Один' },
                            { val : 2, text : 'Два', checked : true },
                            { val : 3, text : 'Три' }
                          ]
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'checkbox',
                          mods : { theme : 'alfa', bkg : 'color', size : 'l', checked : true },
                          val : 1,
                          text : 'чекбокс'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'checkbox-group',
                          mods : { theme : 'alfa', bkg : 'color', size : 'l' },
                          name : 'checkbox-sizes-l',
                          options : [
                            { val : 1, text : 'Один' },
                            { val : 2, text : 'Два', checked : true },
                            { val : 3, text : 'Три' }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'checkbox-group',
                          mods : { theme : 'alfa', bkg : 'color', size : 'xl', type : 'button' },
                          name : 'checkbox-sizes-xl',
                          options : [
                            { val : 1, text : 'Один' },
                            { val : 2, text : 'Два', checked : true },
                            { val : 3, text : 'Три' }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block : 'section',
          content : [
            {
              block : 'heading',
              mix : [{ block : 'section', elem : 'title' }],
              lvl : 2,
              content : 'Выпадающие списки'
            },
            {
              block : 'row',
              mix : [{ block : 'section', elem : 'sizes' }],
              content : [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'S'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'M'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'L'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'XL'
                }
              ]
            },
            {
              block: 'row',
              mix: [{ block: 'section', elem: 'examples' }],
              content: [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'dropdown',
                          mods : { switcher : 'link', mode : 'hover' },
                          switcher : {
                              block : 'link',
                              mods : { pseudo : true, theme : 'alfa', bkg : 'color' },
                              content : 'dropdown'
                          },
                          popup : { block : 'popup', mods : { theme : 'alfa', column: true }, content : 'popup' }
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'dropdown',
                          mods : { switcher : 'button', theme : 'islands', size : 's' },
                          switcher : 'dropdown',
                          popup : {
                            block : 'popup',
                            mods : { theme : 'islands' },
                            content : {
                              block : 'menu',
                              mods : { theme : 'islands', size : 's' },
                              content : [
                                {
                                  block : 'menu-item',
                                  mods : { theme : 'islands', size : 's' },
                                  content : 'Раз'
                                },
                                {
                                  block : 'menu-item',
                                  mods : { theme : 'islands', size : 's' },
                                  content : 'Два'
                                },
                                {
                                  block : 'menu-item',
                                  mods : { theme : 'islands', size : 's' },
                                  content : 'Три'
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'dropdown',
                          mods : { switcher : 'link', theme : 'alfa', size : 'm', mode : 'hover' },
                          switcher : 'dropdown',
                          popup : {
                              block : 'popup',
                              mods : { theme : 'alfa', column : true, bkg : 'color' },
                              content : 'popup'
                          }
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'dropdown',
                          mods : { switcher : 'button', theme : 'islands', size : 'm' },
                          switcher : 'dropdown',
                          popup : {
                            block : 'popup',
                            mods : { theme : 'islands' },
                            content : {
                              block : 'menu',
                              mods : { theme : 'islands', size : 'm' },
                              content : [
                                {
                                  block : 'menu-item',
                                  mods : { theme : 'islands', size : 'm' },
                                  content : 'Раз'
                                },
                                {
                                  block : 'menu-item',
                                  mods : { theme : 'islands', size : 'm' },
                                  content : 'Два'
                                },
                                {
                                  block : 'menu-item',
                                  mods : { theme : 'islands', size : 'm' },
                                  content : 'Три'
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'dropdown',
                          mods : { switcher : 'button', theme : 'islands', size : 'l' },
                          switcher : 'dropdown',
                          popup : { block : 'popup', mods : { theme : 'islands' }, content : 'popup' }
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'dropdown',
                          mods : { switcher : 'button', theme : 'islands', size : 'l' },
                          switcher : 'dropdown',
                          popup : {
                            block : 'popup',
                            mods : { theme : 'islands' },
                            content : {
                              block : 'menu',
                              mods : { theme : 'islands', size : 'l' },
                              content : [
                                {
                                  block : 'menu-item',
                                  mods : { theme : 'islands', size : 'l' },
                                  content : 'Раз'
                                },
                                {
                                  block : 'menu-item',
                                  mods : { theme : 'islands', size : 'l' },
                                  content : 'Два'
                                },
                                {
                                  block : 'menu-item',
                                  mods : { theme : 'islands', size : 'l' },
                                  content : 'Три'
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'dropdown',
                          mods : { switcher : 'button', theme : 'islands', size : 'xl' },
                          switcher : 'dropdown',
                          popup : { block : 'popup', mods : { theme : 'islands' }, content : 'popup' }
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'dropdown',
                          mods : { switcher : 'button', theme : 'islands', size : 'xl' },
                          switcher : 'dropdown',
                          popup : {
                            block : 'popup',
                            mods : { theme : 'islands' },
                            content : {
                              block : 'menu',
                              mods : { theme : 'islands', size : 'xl' },
                              content : [
                                {
                                  block : 'menu-item',
                                  mods : { theme : 'islands', size : 'xl' },
                                  content : 'Раз'
                                },
                                {
                                  block : 'menu-item',
                                  mods : { theme : 'islands', size : 'xl' },
                                  content : 'Два'
                                },
                                {
                                  block : 'menu-item',
                                  mods : { theme : 'islands', size : 'xl' },
                                  content : 'Три'
                                }
                              ]
                            }
                          }
                        }
                      ]
                    },
                  ]
                }
              ]
            }
          ]
        },
        {
          block : 'section',
          content : [
            {
              block : 'heading',
              mix : [{ block : 'section', elem : 'title' }],
              lvl : 2,
              content : 'Загрузчики'
            },
            {
              block : 'row',
              mix : [{ block : 'section', elem : 'sizes' }],
              content : [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'S'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'M'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'L'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'XL'
                }
              ]
            },
            {
              block: 'row',
              mix: [{ block: 'section', elem: 'examples' }],
              content: [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'spin',
                          mods : { theme : 'alfa', bkg : 'color', size : 's', visible : true }
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'spin',
                          mods : { theme : 'alfa', bkg : 'color', size : 'm', visible : true }
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'spin',
                          mods : { theme : 'alfa', bkg : 'color', size : 'l', visible : true }
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'spin',
                          mods : { theme : 'alfa', bkg : 'color', size : 'xl', visible : true }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block : 'section',
          content : [
            {
              block : 'heading',
              mix : [{ block : 'section', elem : 'title' }],
              lvl : 2,
              content : 'Ссылки'
            },
            {
              block : 'row',
              mix : [{ block : 'section', elem : 'sizes' }],
              content : [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'S'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'M'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'L'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'XL'
                }
              ]
            },
            {
              block: 'row',
              mix: [{ block: 'section', elem: 'examples' }],
              content: [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'link',
                          mods : { theme : 'alfa', bkg : 'color', size : 's' },
                          url : '#',
                          content : 'Ссылка'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'link',
                          mods : { theme : 'alfa', bkg : 'color', size : 's', pseudo : true },
                          title : 'pseudo mod',
                          content : 'link'
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'link',
                          mods : { theme : 'alfa', bkg : 'color', size : 'm' },
                          url : '#',
                          content : 'Ссылка'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'link',
                          mods : { theme : 'alfa', bkg : 'color', size : 'm', pseudo : true },
                          title : 'pseudo mod',
                          content : 'link'
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'link',
                          mods : { theme : 'alfa', bkg : 'color', size : 'l' },
                          url : '#',
                          content : 'Ссылка'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'link',
                          mods : { theme : 'alfa', bkg : 'color', size : 'l', pseudo : true },
                          title : 'pseudo mod',
                          content : 'link'
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'link',
                          mods : { theme : 'alfa', bkg : 'color', size : 'xl' },
                          url : '#',
                          content : 'Ссылка'
                        }
                      ]
                    },
                    {
                      block : 'controls',
                      content : [
                        {
                          block : 'link',
                          mods : { theme : 'alfa', bkg : 'color', size : 'xl', pseudo : true },
                          title : 'pseudo mod',
                          content : 'link'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block : 'section',
          content : [
            {
              block : 'heading',
              mix : [{ block : 'section', elem : 'title' }],
              lvl : 2,
              content : 'Пример формы'
            },
            {
              elem: 'examples',
              content: [

              ]
            }
          ]
        },
        {
          block : 'section',
          content : [
            {
              block : 'heading',
              mix : [{ block : 'section', elem : 'title' }],
              lvl : 2,
              content : 'Что-то еще'
            },
            {
              block : 'row',
              mix : [{ block : 'section', elem : 'sizes' }],
              content : [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'S'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'M'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'L'
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : 'XL'
                }
              ]
            },
            {
              block: 'row',
              mix: [{ block: 'section', elem: 'examples' }],
              content: [
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    }
                  ]
                },
                {
                  elem : 'col',
                  mods : { sw : 3 },
                  content : [
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    },
                    {
                      block : 'controls',
                      content : [

                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      elem : 'footer',
      content : [
        {
          block : 'copyright',
          links : {
            vk: 'https://vk.com/alfabank',
            facebook: 'https://facebook.com/alfabank',
            twitter: 'https://twitter.com/alfabank'
          },
          mods : { theme : 'alfa', bkg : 'color' }
        }
      ]
    }
  ]
})
