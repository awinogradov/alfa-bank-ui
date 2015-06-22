modules.define('input',
    ['popup', 'menu', 'dom', 'jquery', 'BEMHTML', 'i-bem__dom', 'keyboard__codes'],
    function(provide, Popup, Menu, dom, $, BEMHTML, BEMDOM, KeyCodes, Input) {

function nextNotHidden(items, index) {
    var i = index;
    if (i < items.length - 1) i++;
    while (i < items.length - 1 && items[i].hasMod('hidden')) i++;
    return (items[i] && items[i].hasMod('hidden')) ? index : i;
}

function previousNotHidden(items, index) {
    var i = index;
    if (i > 0) i--;
    while (i > 0 && items[i].hasMod('hidden')) i--;
    return (items[i] && items[i].hasMod('hidden')) ? index : i;
}

/* istanbul ignore next: hard to test, depends on styles */
function reveal(parent, item) {
    var pos = item.position().top,
        margin = 20,
        newScroll = null;
    if (pos < 0) {
        newScroll = parent.scrollTop() + pos - margin;
    } else if (pos + item.outerHeight() >= parent.height()) {
        newScroll = parent.scrollTop() + pos + item.outerHeight() + margin - parent.height();
    }
    if (newScroll != null) {
        // TODO animate
        parent.scrollTop(newScroll);
    }
}

function onDocPointerPress(e) {
    if (isEventInPopup.call(this, e)) {
        this._isPointerPressInProgress = true;
        this.bindToDoc('pointerrelease', onDocPointerRelease);
    } else if (!this.hasMod('focused')) {
        this.delMod('opened');
    }
}

function onDocPointerRelease(e) {
    this._isPointerPressInProgress = false;
    this.unbindFromDoc('pointerrelease', onDocPointerRelease);
}

function isEventInPopup(e) {
    var $target = $(e.target);
    return dom.contains(this.getPopup().domElem, $target)
        || dom.contains(this.domElem, $target);
}

function onMenuItemClick(_, data) {
    this.setVal(data.item.getVal());
    this.emit('select', data.item.params);
    this.delMod('opened');
    this.resetFocusedItem();
}

function handleKey(e) {
    switch (e.keyCode) {
    case KeyCodes.DOWN:
        if (!this.getMod('opened')) this.setMod('opened');
        this.setFocusedItem(nextNotHidden(this.getMenuItems(), this.getFocusedItem()));
        break;
    case KeyCodes.UP:
        this.setFocusedItem(previousNotHidden(this.getMenuItems(), this.getFocusedItem()));
        break;
    case KeyCodes.ENTER:
        if (typeof this._focusedItem !== 'undefined' && this._focusedItem != -1) {
            onMenuItemClick.call(this, null, { item: this._menuItems[this._focusedItem] });
            e.preventDefault();
            return true;
        }
        break;
    }
}

function mapItems(item) {
    if (item.group) {
        return {
            block: 'menu',
            elem: 'group',
            title: item.title,
            content: item.group.map(mapItems.bind(this))
        };
    } else {
        return {
            block: 'menu-item',
            mods: {
                theme: this.getMod('theme'),
                bkg: this.getMod('bkg'),
                size: this.getMod('size')
            },
            val: item.val,
            data: item.data,
            content: item.content
        };
    }
};

provide(Input.decl({ modName: 'has-autocomplete' }, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                this.getMenu().on('item-click', onMenuItemClick, this);
                this.bindTo('keydown', handleKey);
                this._isPointerPressInProgress = false;
            }
        },
        'focused': {
            'true': function() {
                this.__base.apply(this, arguments);

                this.setMod('opened');
            },
            '': function() {
                this.__base.apply(this, arguments);

                if (!this._isPointerPressInProgress) this.delMod('opened');
            }
        },
        'opened': {
            'true': function() {
                this._updateMenuWidth();
                this.getPopup().setAnchor(this);
                this.getPopup().setMod('visible');
                this.bindToDoc('pointerpress', onDocPointerPress);
            },

            '': function() {
                this.getPopup().delMod('visible');
                this.unbindFromDoc('pointerpress', onDocPointerPress);
            }
        }
    },

    /**
     * Get the popup element
     * @return {bem-block} 'popup'
     */
    getPopup: function() {
        return this._popup || (this._popup = this.findBlockInside('popup'));
    },

    /**
     * Get the menu element
     * @return {bem-block} 'menu'
     */
    getMenu: function() {
        return this._menu || (this._menu = this.getPopup().findBlockInside('menu'));
    },

    /**
     * Returns cached list of menu-item's
     */
    getMenuItems: function() {
        return this._menuItems || (this._menuItems = this.getMenu().findBlocksInside('menu-item'));
    },

    /**
     * Returns the index of currently focused menu item.
     * Or -1 if no item is currently focused.
     */
    getFocusedItem: function() {
        if (typeof this._focusedItem === 'undefined') this._focusedItem = -1;
        return this._focusedItem;
    },

    setFocusedItem: function(value) {
        var current = this.getFocusedItem(),
            items = this.getMenuItems();

        // remove focused state from current item
        if (current != -1) items[current].delMod('focused');

        if (value != -1) {
            // add focused state to new item
            items[value].setMod('focused');
            // scroll to new item
            reveal(this.getPopup().domElem, items[value].domElem);
        }

        this._focusedItem = value;
    },

    /**
     * Set new autocomplete options
     *
     * @param {Array} opts new options
     */
    setOptions: function(opts) {
        BEMDOM.update(this.getMenu().domElem,
                      BEMHTML.apply(opts.map(mapItems.bind(this))));
        this.resetFocusedItem();
    },

    resetFocusedItem: function() {
        var items = this.getMenuItems(), focused = this._focusedItem;
        if (items && (typeof focused !== 'undefined') && items[focused]) {
            items[focused].delMod('focused');
        }
        delete this._menuItems;   // drop menuItems cache
        delete this._focusedItem;
    },

    _updateMenuWidth: function() {
        this.getPopup().domElem.css('min-width', this.domElem.outerWidth());
        this.getPopup().redraw();
    },

},
{
    live: function() {
        this.__base.apply(this, arguments);
        return true;
    }
}));

});
