this.Nevermind = this.Nevermind || {};

(function(nevermind) {

    "use strict";

    function PubSub() {}

    Object.defineProperty(PubSub.prototype, "_listeners", {
        value: []
    });

    PubSub.prototype._getListener = function(eventName) {
        return this._listeners[eventName] = this._listeners[eventName] || [];
    };

    PubSub.prototype.subscribe = function(eventName, callback) {
        this._getListener(eventName).push(callback);
    };

    PubSub.prototype.publish = function(eventName, data) {
        var listener = this._getListener(eventName);
        var length = listener.length;
        var i = 0;

        for (i = 0; i < length; i = i + 1) {
            listener[i](data);
        }
    };

    nevermind.PubSub = new PubSub();

}(this.Nevermind));