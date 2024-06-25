function ButtonStrip(options) {
    this.id = options.id;
    this.buttons = [];
}

ButtonStrip.prototype.addButton = function(pName, pActive, pType, pCallback) {
    this.buttons.push({
        name: pName,
        active: pActive,
        event: {
            type: pType,
            callback: pCallback
        }
    });
}

ButtonStrip.prototype.append = function(element) {
    var rootDiv = document.createElement('div');
    rootDiv.classList.add('button-strip');
    rootDiv.id = this.id;

    for (var i = 0; i < this.buttons.length; i++) {
        var self = this;
        var button = this.buttons[i];

        var innerSpan = document.createElement('span');
        innerSpan.classList.add('strip-button-text');
        innerSpan.innerHTML = button.name;

        var buttonDiv = document.createElement('div');
        buttonDiv.classList.add('strip-button');
        var stripButtonClassIterator = 'strip-button-' + i.toString();
        buttonDiv.classList.add(stripButtonClassIterator);
        if (button.active) {
            buttonDiv.classList.add('active-strip-button');
            this.activeSelector = '#' + this.id + ' .' + stripButtonClassIterator;
        }
        buttonDiv.appendChild(innerSpan);
        buttonDiv.addEventListener(button.event.type, button.event.callback);
        buttonDiv.addEventListener('click', function(){
            document.querySelector(self.activeSelector).classList.remove('active-strip-button');
            document.querySelector('#' + self.id + ' .' + this.classList[1]).classList.add('active-strip-button');
            self.activeSelector = '#' + self.id + ' .' + this.classList[1];
        });

        rootDiv.appendChild(buttonDiv);
    }
    
    document.querySelector(element).appendChild(rootDiv);
}