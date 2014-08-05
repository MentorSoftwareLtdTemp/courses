// Generated by CoffeeScript 1.7.1
(function() {
  var $, Ajax, Base, Collection, Extend, GenerateURL, Include, Model, Queue, Singleton, Spine,
    __slice = [].slice,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Spine = this.Spine || require('spine');

  $ = Spine.$;

  Model = Spine.Model;

  Queue = $({});

  Ajax = {
    getURL: function(object) {
      if (object.className != null) {
        return this.generateURL(object);
      } else {
        return this.generateURL(object, encodeURIComponent(object.id));
      }
    },
    getCollectionURL: function(object) {
      return this.generateURL(object);
    },
    getScope: function(object) {
      return (typeof object.scope === "function" ? object.scope() : void 0) || object.scope;
    },
    getCollection: function(object) {
      if (object.url !== object.generateURL) {
        if (typeof object.url === 'function') {
          return object.url();
        } else {
          return object.url;
        }
      } else if (object.className != null) {
        return object.className.toLowerCase() + 's';
      }
    },
    generateURL: function() {
      var args, collection, object, path, scope;
      object = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      collection = Ajax.getCollection(object) || Ajax.getCollection(object.constructor);
      scope = Ajax.getScope(object) || Ajax.getScope(object.constructor);
      args.unshift(collection);
      args.unshift(scope);
      path = args.join('/');
      path = path.replace(/(\/\/)/g, "/");
      path = path.replace(/^\/|\/$/g, "");
      if (path.indexOf("../") !== 0) {
        return Model.host + "/" + path;
      } else {
        return path;
      }
    },
    enabled: true,
    disable: function(callback) {
      var e;
      if (this.enabled) {
        this.enabled = false;
        try {
          return callback();
        } catch (_error) {
          e = _error;
          throw e;
        } finally {
          this.enabled = true;
        }
      } else {
        return callback();
      }
    },
    queue: function(request) {
      if (request) {
        return Queue.queue(request);
      } else {
        return Queue.queue();
      }
    },
    clearQueue: function() {
      return this.queue([]);
    },
    config: {
      loadMethod: 'GET',
      updateMethod: 'PUT',
      createMethod: 'POST',
      destroyMethod: 'DELETE'
    }
  };

  Base = (function() {
    function Base() {}

    Base.prototype.defaults = {
      dataType: 'json',
      processData: false,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    };

    Base.prototype.queue = Ajax.queue;

    Base.prototype.ajax = function(params, defaults) {
      return $.ajax(this.ajaxSettings(params, defaults));
    };

    Base.prototype.ajaxQueue = function(params, defaults, record) {
      var deferred, jqXHR, parallel, promise, request, settings;
      jqXHR = null;
      deferred = $.Deferred();
      promise = deferred.promise();
      if (!Ajax.enabled) {
        return promise;
      }
      settings = this.ajaxSettings(params, defaults);
      parallel = settings.parallel !== void 0 ? settings.parallel : settings.type === 'GET';
      request = function(next) {
        var _ref;
        if ((record != null ? record.id : void 0) != null) {
          if (settings.url == null) {
            settings.url = Ajax.getURL(record);
          }
          if ((_ref = settings.data) != null) {
            _ref.id = record.id;
          }
        }
        if (typeof settings.data !== 'string' && settings.processData !== true) {
          settings.data = JSON.stringify(settings.data);
        }
        jqXHR = $.ajax(settings).done(deferred.resolve).fail(deferred.reject).then(next, next);
        if (parallel) {
          return Queue.dequeue();
        }
      };
      promise.abort = function(statusText) {
        var index;
        if (jqXHR) {
          return jqXHR.abort(statusText);
        }
        index = $.inArray(request, this.queue());
        if (index > -1) {
          this.queue().splice(index, 1);
        }
        deferred.rejectWith(settings.context || settings, [promise, statusText, '']);
        return promise;
      };
      this.queue(request);
      return promise;
    };

    Base.prototype.ajaxSettings = function(params, defaults) {
      return $.extend({}, this.defaults, defaults, params);
    };

    return Base;

  })();

  Collection = (function(_super) {
    __extends(Collection, _super);

    function Collection(model) {
      this.model = model;
      this.failResponse = __bind(this.failResponse, this);
      this.recordsResponse = __bind(this.recordsResponse, this);
    }

    Collection.prototype.find = function(id, params, options) {
      var record;
      if (options == null) {
        options = {};
      }
      record = new this.model({
        id: id
      });
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.loadMethod,
        url: options.url || Ajax.getURL(record),
        parallel: options.parallel
      }).done(this.recordsResponse).fail(this.failResponse);
    };

    Collection.prototype.all = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.loadMethod,
        url: options.url || Ajax.getURL(this.model),
        parallel: options.parallel
      }).done(this.recordsResponse).fail(this.failResponse);
    };

    Collection.prototype.fetch = function(params, options) {
      var id;
      if (params == null) {
        params = {};
      }
      if (options == null) {
        options = {};
      }
      if (id = params.id) {
        delete params.id;
        return this.find(id, params, options).done((function(_this) {
          return function(record) {
            return _this.model.refresh(record, options);
          };
        })(this));
      } else {
        return this.all(params, options).done((function(_this) {
          return function(records) {
            return _this.model.refresh(records, options);
          };
        })(this));
      }
    };

    Collection.prototype.recordsResponse = function(data, status, xhr) {
      return this.model.trigger('ajaxSuccess', null, status, xhr);
    };

    Collection.prototype.failResponse = function(xhr, statusText, error) {
      return this.model.trigger('ajaxError', null, xhr, statusText, error);
    };

    return Collection;

  })(Base);

  Singleton = (function(_super) {
    __extends(Singleton, _super);

    function Singleton(record) {
      this.record = record;
      this.failResponse = __bind(this.failResponse, this);
      this.recordResponse = __bind(this.recordResponse, this);
      this.model = this.record.constructor;
    }

    Singleton.prototype.reload = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.loadMethod,
        url: options.url,
        parallel: options.parallel
      }, this.record).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    Singleton.prototype.create = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.createMethod,
        contentType: 'application/json',
        data: this.record.toJSON(),
        url: options.url || Ajax.getCollectionURL(this.record),
        parallel: options.parallel
      }).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    Singleton.prototype.update = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.updateMethod,
        contentType: 'application/json',
        data: this.record.toJSON(),
        url: options.url,
        parallel: options.parallel
      }, this.record).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    Singleton.prototype.destroy = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.destroyMethod,
        url: options.url,
        parallel: options.parallel
      }, this.record).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    Singleton.prototype.recordResponse = function(options) {
      if (options == null) {
        options = {};
      }
      return (function(_this) {
        return function(data, status, xhr) {
          var _ref;
          Ajax.disable(function() {
            if (!(Spine.isBlank(data) || _this.record.destroyed)) {
              if (data.id && _this.record.id !== data.id) {
                _this.record.changeID(data.id);
              }
              return _this.record.refresh(data);
            }
          });
          _this.record.trigger('ajaxSuccess', data, status, xhr);
          return (_ref = options.done) != null ? _ref.apply(_this.record) : void 0;
        };
      })(this);
    };

    Singleton.prototype.failResponse = function(options) {
      if (options == null) {
        options = {};
      }
      return (function(_this) {
        return function(xhr, statusText, error) {
          var _ref;
          _this.record.trigger('ajaxError', xhr, statusText, error);
          return (_ref = options.fail) != null ? _ref.apply(_this.record) : void 0;
        };
      })(this);
    };

    return Singleton;

  })(Base);

  Model.host = '';

  GenerateURL = {
    include: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      args.unshift(encodeURIComponent(this.id));
      return Ajax.generateURL.apply(Ajax, [this].concat(__slice.call(args)));
    },
    extend: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return Ajax.generateURL.apply(Ajax, [this].concat(__slice.call(args)));
    }
  };

  Include = {
    ajax: function() {
      return new Singleton(this);
    },
    generateURL: GenerateURL.include,
    url: GenerateURL.include
  };

  Extend = {
    ajax: function() {
      return new Collection(this);
    },
    generateURL: GenerateURL.extend,
    url: GenerateURL.extend
  };

  Model.Ajax = {
    extended: function() {
      this.fetch(this.ajaxFetch);
      this.change(this.ajaxChange);
      this.extend(Extend);
      return this.include(Include);
    },
    ajaxFetch: function() {
      var _ref;
      return (_ref = this.ajax()).fetch.apply(_ref, arguments);
    },
    ajaxChange: function(record, type, options) {
      if (options == null) {
        options = {};
      }
      if (options.ajax === false) {
        return;
      }
      return record.ajax()[type](options.ajax, options);
    }
  };

  Model.Ajax.Methods = {
    extended: function() {
      this.extend(Extend);
      return this.include(Include);
    }
  };

  Ajax.defaults = Base.prototype.defaults;

  Ajax.Base = Base;

  Ajax.Singleton = Singleton;

  Ajax.Collection = Collection;

  Spine.Ajax = Ajax;

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Ajax;
  }

}).call(this);

//# sourceMappingURL=ajax.map
