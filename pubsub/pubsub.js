this.Nevermind = this.Nevermind || {};

(function(nevermind) {

    "use strict";

    function PubSub() {}

    Object.defineProperty(PubSub.prototype, "_listeners", {
        value: []
    });

    PubSub.prototype._getListener = function(eventName) {
        this._listeners[eventName] = this._listeners[eventName] || [];
        return this._listeners[eventName];
    };

    PubSub.prototype.subscribe = function(eventName, callback) {
        this._getListener(eventName).push(callback);
    };

    PubSub.prototype.publish = function(eventName, data) {
        var listener = this._getListener(eventName),
            length = listener.length,
            i = 0;

        for (; i < length; i = i + 1) {
            listener[i](data);
        }
    };

    nevermind.PubSub = new PubSub();

}(this.Nevermind));

(function(global) {

    "use strict";

    var dispatcher = (function() {

        var listeners = [],

            getListener = function(eventName) {

                listeners[eventName] = listeners[eventName] || [];
                return listeners[eventName];

            },

            trigger = function(eventName, data) {

                var listener = getListener(eventName),
                    length = listener.length,
                    i = 0;

                for (; i < length; i = i + 1) {

                    listener[i](data);

                }

            },

            on = function(eventName, callback) {

                getListener(eventName).push(callback);

            };

        return {

            getListener: getListener,

            on: on,

            trigger: trigger

        };

    })();

    global.dispatcher = dispatcher;

})(this.Nevermind || {});
