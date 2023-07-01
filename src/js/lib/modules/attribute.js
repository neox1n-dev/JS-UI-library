import $ from "../core";

$.prototype.getAttr = function(attr) {
    for(let i = 0; i < this.length; i++) {
        this[i].getAttribute(attr);
    }
    return this;
}

$.prototype.setAttr = function(attr, value) {
    for(let i = 0; i < this.length; i++) {
        this[i].setAttribute(attr, value);
    }
    return this;
}

$.prototype.toggleAttr = function(attr, value) {
    for(let i = 0; i < this.length; i++) {
        if (this[i].getAttribute(attr)) {
            this[i].removeAttribute(attr);
        } else {
            this[i].setAttribute(attr, value);
        }
    }
    return this;
}