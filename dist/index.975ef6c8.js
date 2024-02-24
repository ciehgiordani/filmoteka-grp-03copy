// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1RB6v":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _trailer = require("./js/trailer");
var _customComponents = require("./js/custom-components");
var _renderingMovieCards = require("./js/rendering-movie-cards");
var _searchByKeyword = require("./js/search-by-keyword");
var _openAndCloseModal = require("./js/open-and-close-modal");
var _teamLoadToModal = require("./js/team-load-to-modal");
var _createGalleryMarkup = require("./js/create-gallery-markup");
var _loadingIntoModal = require("./js/loading-into-modal");
var _sound = require("./js/sound");
var _loader = require("./js/loader");
var _refs = require("./js/refs");
var _pagination = require("./js/pagination");
var _slider = require("./js/slider");
var _addToWatchedQueue = require("./js/add-to-watched&queue");
window.addEventListener("load", (0, _slider.onLoadMarkup));
(0, _refs.refs).pagination.addEventListener("click", (0, _pagination.onBtnPageClick));
(0, _refs.refs).slider.addEventListener("click", (0, _slider.onLinkPlayClick));
(0, _refs.refs).btnWrapper.addEventListener("click", (0, _addToWatchedQueue.onBtnAddToLibrary));

},{"./js/trailer":"boCse","./js/custom-components":"3wsn7","./js/rendering-movie-cards":"2jDv3","./js/search-by-keyword":"fgZi7","./js/open-and-close-modal":"dFNG1","./js/team-load-to-modal":"jQ8Lr","./js/create-gallery-markup":"5nFxi","./js/loading-into-modal":"coViy","./js/sound":"9Y0Iv","./js/loader":"aAovl","./js/refs":"2WoF2","./js/pagination":"9j1Dd","./js/slider":"aMYz0","./js/add-to-watched&queue":"7FmdW"}],"boCse":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basiclightbox = require("basiclightbox");
var _api = require("./api");
var _basicLightboxMinCss = require("basiclightbox/dist/basicLightbox.min.css");
var _loadingIntoModal = require("./loading-into-modal");
const srcTrailer = "https://www.youtube.com/embed/";
const trailerBtn = document.querySelector(".trailer-btn");
const closeModalHandler = (e)=>{
    if (e.code === "Escape") modal.close();
    window.removeEventListener("keydown", closeModalHandler);
};
trailerBtn.addEventListener("click", ()=>{
    openTrailer((0, _loadingIntoModal.filmId));
});
const modal = _basiclightbox.create(`
  <iframe class="iframe-container" width="900" height="600" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<button class="close-modal__trailer">
     </button>`);
const iframeTrailer = modal.element().querySelector("iframe");
const modal2 = _basiclightbox.create(`
    <iframe class="iframe-container" src="${srcTrailer}6DhiiFGk4_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);
function openTrailer(id) {
    (0, _api.fetchTrailerById)(id).then((data)=>{
        const key = data.results[0].key;
        iframeTrailer.src = srcTrailer + key;
        modal.show();
        const closeBtn = document.querySelector(".close-modal__trailer");
        closeBtn.addEventListener("click", closeModalHandler);
        window.addEventListener("keydown", closeModalHandler);
    }).catch((error)=>{
        modal2.show();
        console.log(error);
    });
}
exports.default = openTrailer;

},{"basiclightbox":"h9e8q","./api":"9u7qN","basiclightbox/dist/basicLightbox.min.css":"lf3c2","./loading-into-modal":"coViy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h9e8q":[function(require,module,exports) {
!function(e) {
    module.exports = e();
}(function() {
    return (function e1(n, t, o) {
        function r(c, u) {
            if (!t[c]) {
                if (!n[c]) {
                    var s = undefined;
                    if (!u && s) return s(c, !0);
                    if (i) return i(c, !0);
                    var a = new Error("Cannot find module '" + c + "'");
                    throw a.code = "MODULE_NOT_FOUND", a;
                }
                var l = t[c] = {
                    exports: {}
                };
                n[c][0].call(l.exports, function(e) {
                    return r(n[c][1][e] || e);
                }, l, l.exports, e1, n, t, o);
            }
            return t[c].exports;
        }
        for(var i = undefined, c1 = 0; c1 < o.length; c1++)r(o[c1]);
        return r;
    })({
        1: [
            function(e2, n1, t1) {
                "use strict";
                Object.defineProperty(t1, "__esModule", {
                    value: !0
                }), t1.create = t1.visible = void 0;
                var o = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t = document.createElement("div");
                    return t.innerHTML = e.trim(), !0 === n ? t.children : t.firstChild;
                }, r = function(e, n) {
                    var t = e.children;
                    return 1 === t.length && t[0].tagName === n;
                }, i1 = function(e) {
                    return null != (e = e || document.querySelector(".basicLightbox")) && !0 === e.ownerDocument.body.contains(e);
                };
                t1.visible = i1;
                t1.create = function(e3, n2) {
                    var t2 = function(e4, n) {
                        var t = o('\n		<div class="basicLightbox '.concat(n.className, '">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	')), i = t.querySelector(".basicLightbox__placeholder");
                        e4.forEach(function(e) {
                            return i.appendChild(e);
                        });
                        var c = r(i, "IMG"), u = r(i, "VIDEO"), s = r(i, "IFRAME");
                        return !0 === c && t.classList.add("basicLightbox--img"), !0 === u && t.classList.add("basicLightbox--video"), !0 === s && t.classList.add("basicLightbox--iframe"), t;
                    }(e3 = function(e) {
                        var n = "string" == typeof e, t = e instanceof HTMLElement == 1;
                        if (!1 === n && !1 === t) throw new Error("Content must be a DOM element/node or string");
                        return !0 === n ? Array.from(o(e, !0)) : "TEMPLATE" === e.tagName ? [
                            e.content.cloneNode(!0)
                        ] : Array.from(e.children);
                    }(e3), n2 = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (null == (e = Object.assign({}, e)).closable && (e.closable = !0), null == e.className && (e.className = ""), null == e.onShow && (e.onShow = function() {}), null == e.onClose && (e.onClose = function() {}), "boolean" != typeof e.closable) throw new Error("Property `closable` must be a boolean");
                        if ("string" != typeof e.className) throw new Error("Property `className` must be a string");
                        if ("function" != typeof e.onShow) throw new Error("Property `onShow` must be a function");
                        if ("function" != typeof e.onClose) throw new Error("Property `onClose` must be a function");
                        return e;
                    }(n2)), c2 = function(e5) {
                        return !1 !== n2.onClose(u1) && function(e, n) {
                            return e.classList.remove("basicLightbox--visible"), setTimeout(function() {
                                return !1 === i1(e) || e.parentElement.removeChild(e), n();
                            }, 410), !0;
                        }(t2, function() {
                            if ("function" == typeof e5) return e5(u1);
                        });
                    };
                    !0 === n2.closable && t2.addEventListener("click", function(e) {
                        e.target === t2 && c2();
                    });
                    var u1 = {
                        element: function() {
                            return t2;
                        },
                        visible: function() {
                            return i1(t2);
                        },
                        show: function(e6) {
                            return !1 !== n2.onShow(u1) && function(e, n) {
                                return document.body.appendChild(e), setTimeout(function() {
                                    requestAnimationFrame(function() {
                                        return e.classList.add("basicLightbox--visible"), n();
                                    });
                                }, 10), !0;
                            }(t2, function() {
                                if ("function" == typeof e6) return e6(u1);
                            });
                        },
                        close: c2
                    };
                    return u1;
                };
            },
            {}
        ]
    }, {}, [
        1
    ])(1);
});

},{}],"9u7qN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "page", ()=>page);
parcelHelpers.export(exports, "query", ()=>query);
parcelHelpers.export(exports, "fetchPopularMovies", ()=>fetchPopularMovies);
parcelHelpers.export(exports, "fetchTodayPopularMovies", ()=>fetchTodayPopularMovies);
parcelHelpers.export(exports, "fetchMoviesByQuery", ()=>fetchMoviesByQuery);
parcelHelpers.export(exports, "fetchMovieById", ()=>fetchMovieById);
parcelHelpers.export(exports, "fetchTrailerById", ()=>fetchTrailerById);
parcelHelpers.export(exports, "fetchGenres", ()=>fetchGenres);
parcelHelpers.export(exports, "BASE_URL", ()=>BASE_URL);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
let page;
let query;
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "9ce408291b177c2a2e598968d33c0b4a";
// const WATCH_KEY = 'watched';
// const QUEUE_KEY = 'queue';
async function fetchPopularMovies(page1) {
    const url = new URL(`${BASE_URL}/trending/movie/week`);
    url.searchParams.append("api_key", API_KEY);
    url.searchParams.append("page", page1);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchTodayPopularMovies() {
    const url = new URL(`${BASE_URL}/trending/movie/day`);
    url.searchParams.append("api_key", API_KEY);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchMoviesByQuery(query1, page2) {
    const url = new URL(`${BASE_URL}/search/movie`);
    url.searchParams.append("api_key", API_KEY);
    url.searchParams.append("query", query1);
    url.searchParams.append("page", page2);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchMovieById(id) {
    const url = new URL(`${BASE_URL}/movie/${id}`);
    url.searchParams.append("api_key", API_KEY);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchTrailerById(id) {
    const url = new URL(`${BASE_URL}/movie/${id}/videos`);
    url.searchParams.append("api_key", API_KEY);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchGenres() {
    const url = new URL(`${BASE_URL}/genre/movie/list`);
    url.searchParams.append("api_key", API_KEY);
    const response = await fetch(url);
    const data = await response.json();
    return data.genres;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lf3c2":[function() {},{}],"coViy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filmId", ()=>filmId);
parcelHelpers.export(exports, "getInitialModalData", ()=>getInitialModalData);
let filmId;
const NO_POSTER = "https://i.ibb.co/r76r6Vt/oie-30214851-Ms-Wl-PTS0.png";
const averageElement = document.createElement("span");
const countElement = document.createElement("span");
const getInitialModalData = ()=>{
    const cardData = JSON.parse(localStorage.getItem("modalCardData"));
    const filmImg = document.getElementById("film-img");
    const filmTitle = document.getElementById("film-title");
    const votes = document.getElementById("votes");
    const popul = document.getElementById("popul");
    const origTitle = document.getElementById("origTitle");
    const genre = document.getElementById("genre");
    const trailerBtn = document.querySelector(".trailer-btn");
    trailerBtn.dataset.filmId = cardData.id;
    filmId = cardData.id;
    filmImg.src = cardData.poster_path !== "null" ? filmImg.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${cardData.poster_path}')` : filmImg.style.backgroundImage = `url('${NO_POSTER}')`;
    filmTitle.innerText = cardData.title ? `${cardData.title}` : "N/A";
    about.innerText = cardData.overview ? `${cardData.overview}` : "N/A";
    averageElement.className = "average";
    countElement.className = "count";
    averageElement.innerText = cardData.vote_average ? `${(cardData.vote_average * 1).toFixed(1)}` : "N/A";
    countElement.innerText = cardData.vote_count ? `/ ${cardData.vote_count}` : "N/A";
    votes.append(averageElement, countElement);
    popul.innerText = cardData.popularity ? `${(cardData.popularity * 1).toFixed(1)}` : "N/A";
    origTitle.innerText = cardData.original_title ? `${cardData.original_title}` : "N/A";
    genre.innerText = cardData.genre_ids ? `${cardData.genre_ids}` : "N/A";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3wsn7":[function(require,module,exports) {
//-----------------------------HORiZONTAL-INDICATOR-----------------------------//
window.onscroll = function() {
    myFunction();
};
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = winScroll / height * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
//-----------------------------HORiZONTAL-INDICATOR-----------------------------//
//--------------------------------CUSTOM-ANCHOR---------------------------------//
//Make sure the user has scrolled at least double the height of the browser
var toggleHeight = $(window).outerHeight() * 1.2;
$(window).scroll(function() {
    if ($(document).scrollTop() > toggleHeight) //Adds active class to make button visible
    $("#up-button").addClass("active");
    else //Removes active class to make button visible
    $("#up-button").removeClass("active");
});
const circleUp = document.querySelector(".up-button");
circleUp.addEventListener("click", setScrollToUp);
function setScrollToUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
} //------------------------------CUSTOM-ANCHOR-END-------------------------------//

},{}],"2jDv3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "moviesEl", ()=>moviesEl);
var _api = require("./api");
var _createGalleryMarkup = require("./create-gallery-markup");
var _pagination = require("./pagination");
var _state = require("./state");
const moviesEl = document.querySelector(".movies");
window.addEventListener("load", ()=>{
    (0, _pagination.resetCurrentPage)();
    (0, _api.fetchPopularMovies)((0, _state.state).currentPage).then((res)=>{
        if ((0, _state.state).whatPaginated === "local") return;
        (0, _state.state).whatPaginated = "main";
        const { results , total_pages  } = res;
        (0, _state.state).totalPages = total_pages;
        (0, _pagination.renderPaginationMarkup)();
        return (0, _createGalleryMarkup.renderGallery)(results);
    }).then((res)=>{
        moviesEl?.insertAdjacentHTML("beforeend", res);
    });
});

},{"./api":"9u7qN","./create-gallery-markup":"5nFxi","./pagination":"9j1Dd","./state":"2FZFo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5nFxi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGenres", ()=>getGenres);
parcelHelpers.export(exports, "renderGallery", ()=>renderGallery);
// fetchPopularMovies(2)
//   .then(res => {
//     const obj = res.results;
//     return renderGallery(obj);
//   })
//   .then(res => {
//     moviesEl.insertAdjacentHTML('beforeend', res);
//   });
parcelHelpers.export(exports, "getClassByRate", ()=>getClassByRate);
var _api = require("./api");
const NO_POSTER = `https://i.ibb.co/r76r6Vt/oie-30214851-Ms-Wl-PTS0.png`;
function getGenres(arrayId, genres) {
    const arr = [];
    for (const value of genres){
        if (arrayId === "N/A" || arrayId.length === 0) {
            arr.push("Other");
            break;
        } else if (arrayId.includes(value.id)) arr.push(value.name);
    }
    if (arr.length > 2) arr.splice(2, arr.length - 2, "Other");
    return arr.join(", ");
}
async function renderGallery(movies) {
    const genres = await (0, _api.fetchGenres)();
    return movies.map(({ id , poster_path , title , release_date , genre_ids , original_title , vote_average , popularity , vote_count , overview ,  } = movies)=>{
        const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : NO_POSTER;
        const releaseYear = release_date ? release_date.split("-")[0] : "Unknown";
        const checkGenres = genre_ids ? getGenres(genre_ids, genres) : "Unknown";
        return `
      <li class='movie_list_item' data-id="${id}" >
      <div href="" class='movie_list_link link' id=${id}>
      <div class="movie__cover--darkened"
        data-id="${id}"
        data-poster_path="${poster_path}"
        data-title="${title}"
        data-genre_ids="${checkGenres}"
        data-original_title="${original_title}"
        data-vote_average="${vote_average}"
        data-popularity="${popularity}"
        data-vote_count="${vote_count}"
        data-overview="${overview}"
        data-release_date="${release_date}"
      ></div>
        <img class="movie_list_image" src=${poster} alt='Poster ${original_title}' loading='lazy' />
        <div class='movie-info'>
            <p class='movie-title'>
              <b>${title.toUpperCase()}</b>
            </p>
            <p class='movie-date'>
              <span>${checkGenres} | ${releaseYear}</span>
            </p>
            <div class="movie__average movie__average--${getClassByRate(vote_average)}">${Number(vote_average).toFixed(1)}</div>
        </div>
        </div>
      </li>
      `;
    }).join("");
}
function getClassByRate(vote) {
    if (vote >= 8) return "green";
    else if (vote > 6) return "orange";
    else return "red";
}

},{"./api":"9u7qN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9j1Dd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resetCurrentPage", ()=>resetCurrentPage);
parcelHelpers.export(exports, "clearPagination", ()=>clearPagination);
parcelHelpers.export(exports, "renderPaginationMarkup", ()=>renderPaginationMarkup);
parcelHelpers.export(exports, "onBtnPageClick", ()=>onBtnPageClick);
var _api = require("./api");
var _createGalleryMarkup = require("./create-gallery-markup");
var _customComponents = require("./custom-components");
var _localStorage = require("./local-storage");
var _refs = require("./refs");
var _renderFromStorage = require("./render-from-storage");
var _renderingMovieCards = require("./rendering-movie-cards");
var _state = require("./state");
const { pagination  } = (0, _refs.refs);
const resetCurrentPage = ()=>{
    (0, _state.state).currentPage = 1;
};
const clearPagination = ()=>{
    pagination.innerHTML = "";
};
const whatPaginated = async (where)=>{
    let markupGallery;
    switch(where){
        case "main":
            try {
                const { results  } = await (0, _api.fetchPopularMovies)((0, _state.state).currentPage);
                markupGallery = await (0, _createGalleryMarkup.renderGallery)(results);
                (0, _renderingMovieCards.moviesEl).insertAdjacentHTML("beforeend", markupGallery);
            } catch (error) {
                console.error(error.message);
            }
            break;
        case "search":
            try {
                const { results  } = await (0, _api.fetchMoviesByQuery)((0, _state.state).query, (0, _state.state).currentPage);
                markupGallery = await (0, _createGalleryMarkup.renderGallery)(results);
                (0, _renderingMovieCards.moviesEl).insertAdjacentHTML("beforeend", markupGallery);
            } catch (error1) {
                console.error(error1.message);
            }
            break;
        case "local":
            try {
                const films = (0, _state.state).whatchedOrQueue === "WATCHED" ? (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).WATCHED) || [] : (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).QUEUE) || [];
                markupGallery = await (0, _createGalleryMarkup.renderGallery)((0, _renderFromStorage.localPaginate)(films, (0, _state.state).currentPage));
            } catch (error2) {
                console.error(error2.message);
            }
            break;
        default:
            throw new Error(`Invalid 'where' parameter: ${where}`);
    }
    (0, _renderingMovieCards.moviesEl).insertAdjacentHTML("beforeend", markupGallery);
};
const paginate = (totalPages, currentPage)=>{
    const groupSize = 5;
    const numGroups = Math.ceil(totalPages / groupSize);
    const currentGroup = Math.ceil(currentPage / groupSize);
    const startPage = (currentGroup - 1) * groupSize + 1;
    const endPage = Math.min(startPage + groupSize - 1, totalPages);
    const pages = Array.from({
        length: endPage - startPage + 1
    }, (_, i)=>startPage + i);
    const hasPrevGroup = currentGroup > 1;
    const hasNextGroup = currentGroup < numGroups;
    return {
        pages,
        hasPrevGroup,
        hasNextGroup
    };
};
const paginationMarkup = ()=>{
    if ((0, _state.state).totalPages <= 1) return;
    const { pages , hasPrevGroup , hasNextGroup  } = paginate((0, _state.state).totalPages, (0, _state.state).currentPage);
    const firstPage = `<button type="button" class="start-btn page-btn">1</button>`;
    const lastPage = `<button type="button" class="end-btn page-btn">${(0, _state.state).totalPages}</button>`;
    const prev = `<button type="button" class="prev-btn page-btn"><svg class="icon icon-arrow-left">
    <use xlink:href="${(0, _state.state).sprite}#icon-arrow-left"></use>
  </svg></button>`;
    const next = `<button type="button" class="next-btn page-btn"><svg class="icon icon-arrow-right">
    <use xlink:href="${(0, _state.state).sprite}#icon-arrow-right"></use>
  </svg></button>`;
    const dotsBtnPrev = `<button class="page-btn prev-dots">...</button>`;
    const dotsBtnNext = `<button class="page-btn next-dots">...</button>`;
    const btnPages = pages.map((num)=>{
        const isActive = num === (0, _state.state).currentPage ? "active-page" : "";
        return `<button type="button" class="page-btn ${isActive}
        ">${num}</button>`;
    }).join("");
    const leftGroup = hasPrevGroup ? prev + firstPage + dotsBtnPrev : "";
    const rightGroup = hasNextGroup ? dotsBtnNext + lastPage + next : "";
    return leftGroup + btnPages + rightGroup;
};
const renderPaginationMarkup = ()=>{
    pagination.insertAdjacentHTML("beforeend", paginationMarkup());
};
const updateCurrentPage = (newPage)=>{
    (0, _state.state).currentPage = newPage;
    clearPagination();
    renderPaginationMarkup();
};
const goToNextPage = ()=>{
    updateCurrentPage((0, _state.state).currentPage + 1);
};
const goToPrevPage = ()=>{
    updateCurrentPage((0, _state.state).currentPage - 1);
};
const goToNextGroupBtn = ()=>{
    const { pages  } = paginate((0, _state.state).totalPages, (0, _state.state).currentPage);
    const lastPageOfCurrentGroup = pages[pages.length - 1];
    const newPage = Math.min(lastPageOfCurrentGroup + 1, (0, _state.state).totalPages);
    (0, _state.state).currentPage = pages[pages.length - 1] + 1;
    updateCurrentPage(newPage);
};
const goToPrevGroupBtn = ()=>{
    const { pages  } = paginate((0, _state.state).totalPages, (0, _state.state).currentPage);
    const firstPageOfCurrentGroup = pages[0];
    const newPage = Math.max(firstPageOfCurrentGroup - 1, 1);
    updateCurrentPage(newPage);
};
const changePageByClick = (evt)=>{
    const activeBtn = document.querySelector(".active-page");
    const selectedPage = Number(evt.target.textContent) || (0, _state.state).currentPage;
    if (selectedPage === (0, _state.state).currentPage) return;
    updateCurrentPage(selectedPage);
    activeBtn.classList.remove("active-page");
    evt.target.classList.add("active-page");
};
const onBtnPageClick = async (evt)=>{
    if (evt.target.nodeName !== "BUTTON") return;
    if (Number(evt.target.textContent) === (0, _state.state).currentPage) return;
    if (evt.target.classList.contains("next-btn")) goToNextPage();
    if (evt.target.classList.contains("prev-btn")) goToPrevPage();
    if (evt.target.classList.contains("next-dots")) goToNextGroupBtn();
    if (evt.target.classList.contains("prev-dots")) goToPrevGroupBtn();
    changePageByClick(evt);
    window.scrollTo({
        top: 0
    });
    (0, _renderingMovieCards.moviesEl).innerHTML = "";
    whatPaginated((0, _state.state).whatPaginated);
};

},{"./api":"9u7qN","./create-gallery-markup":"5nFxi","./custom-components":"3wsn7","./local-storage":"4Qyzi","./refs":"2WoF2","./render-from-storage":"gir1X","./rendering-movie-cards":"2jDv3","./state":"2FZFo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Qyzi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setToLocalStorage", ()=>setToLocalStorage);
parcelHelpers.export(exports, "getFromStorage", ()=>getFromStorage);
parcelHelpers.export(exports, "localStorageKeys", ()=>localStorageKeys);
const setToLocalStorage = (key, value)=>{
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error.messege);
    }
};
const getFromStorage = (key)=>{
    try {
        const serialisedState = localStorage.getItem(key);
        return serialisedState === null ? undefined : JSON.parse(serialisedState);
    } catch (error) {
        console.log(error.messege);
    }
};
const localStorageKeys = {
    WATCHED: "watched",
    QUEUE: "queue"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2WoF2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "refs", ()=>refs);
const refs = {
    foterLink: document.querySelector(".footer__link"),
    form: document.querySelector(".header-search-form"),
    pagination: document.querySelector(".pagination"),
    slider: document.querySelector(".swiper-wrapper"),
    btnWrapper: document.querySelector("#buttonWrapper"),
    addToWatchedBtn: document.querySelector(".add-to-watched-btn"),
    addToQueueBtn: document.querySelector(".add-to-queue-btn"),
    moviesLib: document.querySelector(".movies-lib"),
    watchedQueueBtnBlock: document.querySelector(".buttons-block"),
    buttonWatched: document.querySelector(".button-watched"),
    buttonQueue: document.querySelector(".button-queue")
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gir1X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateLibRender", ()=>updateLibRender);
parcelHelpers.export(exports, "localPaginate", ()=>localPaginate);
parcelHelpers.export(exports, "loadFromStorageWatched", ()=>loadFromStorageWatched);
parcelHelpers.export(exports, "onClickWatched", ()=>onClickWatched);
var _createGalleryMarkup = require("./create-gallery-markup");
var _localStorage = require("./local-storage");
var _pagination = require("./pagination");
var _renderingMovieCards = require("./rendering-movie-cards");
var _state = require("./state");
const updateLibRender = async (data)=>{
    try {
        let markup = "";
        const warning = `<li class="watched-img"><p class="watched-warning">No movies added. Choose something that you like</p></li>`;
        (0, _pagination.resetCurrentPage)();
        const films = localPaginate(data, (0, _state.state).currentPage);
        if (data === undefined || data.length === 0) {
            (0, _pagination.clearPagination)();
            markup = warning;
        } else {
            markup = await (0, _createGalleryMarkup.renderGallery)(films);
            (0, _pagination.clearPagination)();
            (0, _pagination.renderPaginationMarkup)();
        }
        (0, _renderingMovieCards.moviesEl).innerHTML = "";
        (0, _renderingMovieCards.moviesEl).insertAdjacentHTML("beforeend", markup);
    } catch (error) {
        console.error(error.message);
    }
};
const localPaginate = (array, currentPage)=>{
    if (!array) return;
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    (0, _state.state).totalPages = Math.ceil(array.length / itemsPerPage);
    return array.slice(startIndex, startIndex + itemsPerPage);
};
const loadFromStorageWatched = ()=>{
    const data = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).WATCHED);
    (0, _state.state).whatPaginated = "local";
    (0, _state.state).whatchedOrQueue = "WATCHED";
    updateLibRender(data);
};
const onClickWatched = async (evt)=>{
    if (evt.target.nodeName !== "BUTTON") return;
    if (evt.target.classList.contains("active")) return;
    const activeBtn = document.querySelector(".active");
    let key = evt.target.dataset.value.toUpperCase();
    (0, _state.state).whatchedOrQueue = key;
    const data = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys)[key]);
    updateLibRender(data);
    activeBtn.classList.remove("active");
    evt.target.classList.add("active");
};

},{"./create-gallery-markup":"5nFxi","./local-storage":"4Qyzi","./pagination":"9j1Dd","./rendering-movie-cards":"2jDv3","./state":"2FZFo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2FZFo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    currentPage: 1,
    totalPages: 0,
    activeFilm: null,
    query: null,
    whatPaginated: null,
    whatchedOrQueue: null,
    sprite: new URL(require("e94c2fcab3cafd29"))
};

},{"e94c2fcab3cafd29":"ctJdp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ctJdp":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "sprite.f14d31f7.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"fgZi7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _api = require("./api");
var _createGalleryMarkup = require("./create-gallery-markup");
var _renderingMovieCards = require("./rendering-movie-cards");
var _notiflix = require("notiflix");
var _notiflixDefault = parcelHelpers.interopDefault(_notiflix);
var _pagination = require("./pagination");
var _state = require("./state");
const searchFormEl = document.querySelector(".header-search-form");
const inputEl = document.querySelector(".form-input");
(0, _pagination.resetCurrentPage)();
searchFormEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (!inputEl.value.trim()) return (0, _notiflixDefault.default).Notify.failure("No movie title have been placed in Search box!");
    (0, _state.state).whatPaginated = "search";
    (0, _pagination.resetCurrentPage)();
    (0, _state.state).query = inputEl.value.trim();
    (0, _renderingMovieCards.moviesEl).innerHTML = "";
    (0, _pagination.clearPagination)();
    (0, _api.fetchMoviesByQuery)((0, _state.state).query, (0, _state.state).currentPage).then((res)=>{
        const { results , total_pages  } = res;
        (0, _state.state).totalPages = total_pages;
        if ((0, _state.state).totalPages > 1) {
            (0, _pagination.renderPaginationMarkup)();
            (0, _notiflixDefault.default).Notify.success("Group three have found movie lists for you! :)");
            inputEl.value = "";
            removeNotifMeme();
        } else {
            (0, _notiflixDefault.default).Notify.failure("Nothing found, sorry :(");
            inputEl.value = "";
            addNotifMeme();
        }
        return (0, _createGalleryMarkup.renderGallery)(results);
    }).then((res)=>{
        (0, _renderingMovieCards.moviesEl).insertAdjacentHTML("beforeend", res);
    });
});
function addNotifMeme() {
    const memeNothing = document.querySelector(".meme-notif-nothing");
    memeNothing.style.display = "block";
}
function removeNotifMeme() {
    const memeNothing = document.querySelector(".meme-notif-nothing");
    memeNothing.style.display = "none";
}

},{"./api":"9u7qN","./create-gallery-markup":"5nFxi","./rendering-movie-cards":"2jDv3","notiflix":"fuMq1","./pagination":"9j1Dd","./state":"2FZFo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fuMq1":[function(require,module,exports) {
var global = arguments[3];
/* Notiflix AIO (https://notiflix.github.io) - Version: 3.2.7 - Author: Furkan (https://github.com/furcan) - Copyright 2019 - 2024 Notiflix, MIT License (https://opensource.org/licenses/MIT) */ (function(t, e) {
    "function" == typeof define && define.amd ? define([], function() {
        return e(t);
    }) : "object" == typeof module.exports ? module.exports = e(t) : t.Notiflix = e(t);
})("undefined" == typeof global ? "undefined" == typeof window ? this : window : global, function(t1) {
    "use strict";
    if ("undefined" == typeof t1 && "undefined" == typeof t1.document) return !1;
    var e1, i1, a1, n1, o1, r1 = "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation", s1 = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', l1 = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
    }, m1 = {
        wrapID: "NotiflixNotifyWrap",
        overlayID: "NotiflixNotifyOverlay",
        width: "280px",
        position: "right-top",
        distance: "10px",
        opacity: 1,
        borderRadius: "5px",
        rtl: !1,
        timeout: 3e3,
        messageMaxLength: 110,
        backOverlay: !1,
        backOverlayColor: "rgba(0,0,0,0.5)",
        plainText: !0,
        showOnlyTheLastOne: !1,
        clickToClose: !1,
        pauseOnHover: !0,
        ID: "NotiflixNotify",
        className: "notiflix-notify",
        zindex: 4001,
        fontFamily: "Quicksand",
        fontSize: "13px",
        cssAnimation: !0,
        cssAnimationDuration: 400,
        cssAnimationStyle: "fade",
        closeButton: !1,
        useIcon: !0,
        useFontAwesome: !1,
        fontAwesomeIconStyle: "basic",
        fontAwesomeIconSize: "34px",
        success: {
            background: "#32c682",
            textColor: "#fff",
            childClassName: "notiflix-notify-success",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-check-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            background: "#ff5549",
            textColor: "#fff",
            childClassName: "notiflix-notify-failure",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-times-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            background: "#eebf31",
            textColor: "#fff",
            childClassName: "notiflix-notify-warning",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-exclamation-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            background: "#26c0d3",
            textColor: "#fff",
            childClassName: "notiflix-notify-info",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-info-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    }, c1 = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
    }, p1 = {
        ID: "NotiflixReportWrap",
        className: "notiflix-report",
        width: "320px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        rtl: !1,
        zindex: 4002,
        backOverlay: !0,
        backOverlayColor: "rgba(0,0,0,0.5)",
        backOverlayClickToClose: !1,
        fontFamily: "Quicksand",
        svgSize: "110px",
        plainText: !0,
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageFontSize: "13px",
        messageMaxLength: 400,
        buttonFontSize: "14px",
        buttonMaxLength: 34,
        cssAnimation: !0,
        cssAnimationDuration: 360,
        cssAnimationStyle: "fade",
        success: {
            svgColor: "#32c682",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#32c682",
            buttonColor: "#fff",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            svgColor: "#ff5549",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#ff5549",
            buttonColor: "#fff",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            svgColor: "#eebf31",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#eebf31",
            buttonColor: "#fff",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            svgColor: "#26c0d3",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#26c0d3",
            buttonColor: "#fff",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    }, f1 = {
        Show: "Show",
        Ask: "Ask",
        Prompt: "Prompt"
    }, d1 = {
        ID: "NotiflixConfirmWrap",
        className: "notiflix-confirm",
        width: "300px",
        zindex: 4003,
        position: "center",
        distance: "10px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        backOverlay: !0,
        backOverlayColor: "rgba(0,0,0,0.5)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 300,
        cssAnimationStyle: "fade",
        plainText: !0,
        titleColor: "#32c682",
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageColor: "#1e1e1e",
        messageFontSize: "14px",
        messageMaxLength: 110,
        buttonsFontSize: "15px",
        buttonsMaxLength: 34,
        okButtonColor: "#f8f8f8",
        okButtonBackground: "#32c682",
        cancelButtonColor: "#f8f8f8",
        cancelButtonBackground: "#a9a9a9"
    }, x1 = {
        Standard: "Standard",
        Hourglass: "Hourglass",
        Circle: "Circle",
        Arrows: "Arrows",
        Dots: "Dots",
        Pulse: "Pulse",
        Custom: "Custom",
        Notiflix: "Notiflix"
    }, g1 = {
        ID: "NotiflixLoadingWrap",
        className: "notiflix-loading",
        zindex: 4e3,
        backgroundColor: "rgba(0,0,0,0.8)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 400,
        clickToClose: !1,
        customSvgUrl: null,
        customSvgCode: null,
        svgSize: "80px",
        svgColor: "#32c682",
        messageID: "NotiflixLoadingMessage",
        messageFontSize: "15px",
        messageMaxLength: 34,
        messageColor: "#dcdcdc"
    }, b1 = {
        Standard: "Standard",
        Hourglass: "Hourglass",
        Circle: "Circle",
        Arrows: "Arrows",
        Dots: "Dots",
        Pulse: "Pulse"
    }, u1 = {
        ID: "NotiflixBlockWrap",
        querySelectorLimit: 200,
        className: "notiflix-block",
        position: "absolute",
        zindex: 1e3,
        backgroundColor: "rgba(255,255,255,0.9)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 300,
        svgSize: "45px",
        svgColor: "#383838",
        messageFontSize: "14px",
        messageMaxLength: 34,
        messageColor: "#383838"
    }, y1 = function(t) {
        return console.error("%c Notiflix Error ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + t + r1);
    }, k1 = function(t) {
        return console.log("%c Notiflix Info ", "padding:2px;border-radius:20px;color:#fff;background:#26c0d3", "\n" + t + r1);
    }, w = function(e) {
        return e || (e = "head"), null !== t1.document[e] || (y1('\nNotiflix needs to be appended to the "<' + e + '>" element, but you called it before the "<' + e + '>" element has been created.'), !1);
    }, h1 = function(e, i) {
        if (!w("head")) return !1;
        if (null !== e() && !t1.document.getElementById(i)) {
            var a = t1.document.createElement("style");
            a.id = i, a.innerHTML = e(), t1.document.head.appendChild(a);
        }
    }, v = function() {
        var t = {}, e = !1, a2 = 0;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0], a2++);
        for(var n = function(i) {
            for(var a in i)Object.prototype.hasOwnProperty.call(i, a) && (t[a] = e && "[object Object]" === Object.prototype.toString.call(i[a]) ? v(t[a], i[a]) : i[a]);
        }; a2 < arguments.length; a2++)n(arguments[a2]);
        return t;
    }, N = function(e) {
        var i = t1.document.createElement("div");
        return i.innerHTML = e, i.textContent || i.innerText || "";
    }, C1 = function(t, e) {
        t || (t = "110px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i;
    }, z1 = function(t, e) {
        t || (t = "110px"), e || (e = "#ff5549");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i;
    }, S1 = function(t, e) {
        t || (t = "110px"), e || (e = "#eebf31");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i;
    }, L1 = function(t, e) {
        t || (t = "110px"), e || (e = "#26c0d3");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i;
    }, W1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e + '" width="' + t + '" height="' + t + '" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';
        return i;
    }, I1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';
        return i;
    }, R1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + t + '" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:' + t + ";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:" + t + ';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="' + e + '" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';
        return i;
    }, A1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';
        return i;
    }, M = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';
        return i;
    }, B = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';
        return i;
    }, X1 = function(t, e, i) {
        t || (t = "60px"), e || (e = "#f8f8f8"), i || (i = "#32c682");
        var a = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="' + t + '" height="' + t + '" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:' + e + ';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="' + i + '" stroke="' + i + '" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';
        return a;
    }, D1 = function() {
        return '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
    }, T1 = 0, F1 = function(a, n, o, r) {
        if (!w("body")) return !1;
        e1 || G.Notify.init({});
        var c = v(!0, e1, {});
        if ("object" == typeof o && !Array.isArray(o) || "object" == typeof r && !Array.isArray(r)) {
            var p = {};
            "object" == typeof o ? p = o : "object" == typeof r && (p = r), e1 = v(!0, e1, p);
        }
        var f = e1[a.toLocaleLowerCase("en")];
        T1++, "string" != typeof n && (n = "Notiflix " + a), e1.plainText && (n = N(n)), !e1.plainText && n.length > e1.messageMaxLength && (e1 = v(!0, e1, {
            closeButton: !0,
            messageMaxLength: 150
        }), n = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'), n.length > e1.messageMaxLength && (n = n.substring(0, e1.messageMaxLength) + "..."), "shadow" === e1.fontAwesomeIconStyle && (f.fontAwesomeIconColor = f.background), e1.cssAnimation || (e1.cssAnimationDuration = 0);
        var d = t1.document.getElementById(m1.wrapID) || t1.document.createElement("div");
        if (d.id = m1.wrapID, d.style.width = e1.width, d.style.zIndex = e1.zindex, d.style.opacity = e1.opacity, "center-center" === e1.position ? (d.style.left = e1.distance, d.style.top = e1.distance, d.style.right = e1.distance, d.style.bottom = e1.distance, d.style.margin = "auto", d.classList.add("nx-flex-center-center"), d.style.maxHeight = "calc((100vh - " + e1.distance + ") - " + e1.distance + ")", d.style.display = "flex", d.style.flexWrap = "wrap", d.style.flexDirection = "column", d.style.justifyContent = "center", d.style.alignItems = "center", d.style.pointerEvents = "none") : "center-top" === e1.position ? (d.style.left = e1.distance, d.style.right = e1.distance, d.style.top = e1.distance, d.style.bottom = "auto", d.style.margin = "auto") : "center-bottom" === e1.position ? (d.style.left = e1.distance, d.style.right = e1.distance, d.style.bottom = e1.distance, d.style.top = "auto", d.style.margin = "auto") : "right-bottom" === e1.position ? (d.style.right = e1.distance, d.style.bottom = e1.distance, d.style.top = "auto", d.style.left = "auto") : "left-top" === e1.position ? (d.style.left = e1.distance, d.style.top = e1.distance, d.style.right = "auto", d.style.bottom = "auto") : "left-bottom" === e1.position ? (d.style.left = e1.distance, d.style.bottom = e1.distance, d.style.top = "auto", d.style.right = "auto") : (d.style.right = e1.distance, d.style.top = e1.distance, d.style.left = "auto", d.style.bottom = "auto"), e1.backOverlay) {
            var x = t1.document.getElementById(m1.overlayID) || t1.document.createElement("div");
            x.id = m1.overlayID, x.style.width = "100%", x.style.height = "100%", x.style.position = "fixed", x.style.zIndex = e1.zindex - 1, x.style.left = 0, x.style.top = 0, x.style.right = 0, x.style.bottom = 0, x.style.background = f.backOverlayColor || e1.backOverlayColor, x.className = e1.cssAnimation ? "nx-with-animation" : "", x.style.animationDuration = e1.cssAnimation ? e1.cssAnimationDuration + "ms" : "", t1.document.getElementById(m1.overlayID) || t1.document.body.appendChild(x);
        }
        t1.document.getElementById(m1.wrapID) || t1.document.body.appendChild(d);
        var g = t1.document.createElement("div");
        g.id = e1.ID + "-" + T1, g.className = e1.className + " " + f.childClassName + " " + (e1.cssAnimation ? "nx-with-animation" : "") + " " + (e1.useIcon ? "nx-with-icon" : "") + " nx-" + e1.cssAnimationStyle + " " + (e1.closeButton && "function" != typeof o ? "nx-with-close-button" : "") + " " + ("function" == typeof o ? "nx-with-callback" : "") + " " + (e1.clickToClose ? "nx-notify-click-to-close" : ""), g.style.fontSize = e1.fontSize, g.style.color = f.textColor, g.style.background = f.background, g.style.borderRadius = e1.borderRadius, g.style.pointerEvents = "all", e1.rtl && (g.setAttribute("dir", "rtl"), g.classList.add("nx-rtl-on")), g.style.fontFamily = '"' + e1.fontFamily + '", ' + s1, e1.cssAnimation && (g.style.animationDuration = e1.cssAnimationDuration + "ms");
        var b = "";
        if (e1.closeButton && "function" != typeof o && (b = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + f.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'), !e1.useIcon) g.innerHTML = '<span class="nx-message">' + n + "</span>" + (e1.closeButton ? b : "");
        else if (e1.useFontAwesome) g.innerHTML = '<i style="color:' + f.fontAwesomeIconColor + "; font-size:" + e1.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + f.fontAwesomeClassName + " " + ("shadow" === e1.fontAwesomeIconStyle ? "nx-message-icon-fa-shadow" : "nx-message-icon-fa-basic") + '"></i><span class="nx-message nx-with-icon">' + n + "</span>" + (e1.closeButton ? b : "");
        else {
            var u = "";
            a === l1.Success ? u = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>' : a === l1.Failure ? u = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>' : a === l1.Warning ? u = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>' : a === l1.Info && (u = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'), g.innerHTML = u + '<span class="nx-message nx-with-icon">' + n + "</span>" + (e1.closeButton ? b : "");
        }
        if ("left-bottom" === e1.position || "right-bottom" === e1.position) {
            var y = t1.document.getElementById(m1.wrapID);
            y.insertBefore(g, y.firstChild);
        } else t1.document.getElementById(m1.wrapID).appendChild(g);
        var k = t1.document.getElementById(g.id);
        if (k) {
            var h, C, z = function() {
                k.classList.add("nx-remove");
                var e = t1.document.getElementById(m1.overlayID);
                e && 0 >= d.childElementCount && e.classList.add("nx-remove"), clearTimeout(h);
            }, S = function() {
                if (k && null !== k.parentNode && k.parentNode.removeChild(k), 0 >= d.childElementCount && null !== d.parentNode) {
                    d.parentNode.removeChild(d);
                    var e = t1.document.getElementById(m1.overlayID);
                    e && null !== e.parentNode && e.parentNode.removeChild(e);
                }
                clearTimeout(C);
            };
            if (e1.closeButton && "function" != typeof o) {
                var L = t1.document.getElementById(g.id).querySelector("span.nx-close-button");
                L.addEventListener("click", function() {
                    z();
                    var t = setTimeout(function() {
                        S(), clearTimeout(t);
                    }, e1.cssAnimationDuration);
                });
            }
            if (("function" == typeof o || e1.clickToClose) && k.addEventListener("click", function() {
                "function" == typeof o && o(), z();
                var t = setTimeout(function() {
                    S(), clearTimeout(t);
                }, e1.cssAnimationDuration);
            }), !e1.closeButton && "function" != typeof o) {
                var W = function() {
                    h = setTimeout(function() {
                        z();
                    }, e1.timeout), C = setTimeout(function() {
                        S();
                    }, e1.timeout + e1.cssAnimationDuration);
                };
                W(), e1.pauseOnHover && (k.addEventListener("mouseenter", function() {
                    k.classList.add("nx-paused"), clearTimeout(h), clearTimeout(C);
                }), k.addEventListener("mouseleave", function() {
                    k.classList.remove("nx-paused"), W();
                }));
            }
        }
        if (e1.showOnlyTheLastOne && 0 < T1) for(var I, R = t1.document.querySelectorAll("[id^=" + e1.ID + "-]:not([id=" + e1.ID + "-" + T1 + "])"), A = 0; A < R.length; A++)I = R[A], null !== I.parentNode && I.parentNode.removeChild(I);
        e1 = v(!0, e1, c);
    }, E1 = function() {
        return '[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
    }, j1 = function(e2, a3, n, o, r, l) {
        if (!w("body")) return !1;
        i1 || G.Report.init({});
        var m = {};
        if ("object" == typeof r && !Array.isArray(r) || "object" == typeof l && !Array.isArray(l)) {
            var f = {};
            "object" == typeof r ? f = r : "object" == typeof l && (f = l), m = v(!0, i1, {}), i1 = v(!0, i1, f);
        }
        var d = i1[e2.toLocaleLowerCase("en")];
        "string" != typeof a3 && (a3 = "Notiflix " + e2), "string" != typeof n && (e2 === c1.Success ? n = '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein' : e2 === c1.Failure ? n = '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford' : e2 === c1.Warning ? n = '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk' : e2 === c1.Info && (n = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')), "string" != typeof o && (o = "Okay"), i1.plainText && (a3 = N(a3), n = N(n), o = N(o)), i1.plainText || (a3.length > i1.titleMaxLength && (a3 = "Possible HTML Tags Error", n = 'The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.', o = "Okay"), n.length > i1.messageMaxLength && (a3 = "Possible HTML Tags Error", n = 'The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.', o = "Okay"), o.length > i1.buttonMaxLength && (a3 = "Possible HTML Tags Error", n = 'The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.', o = "Okay")), a3.length > i1.titleMaxLength && (a3 = a3.substring(0, i1.titleMaxLength) + "..."), n.length > i1.messageMaxLength && (n = n.substring(0, i1.messageMaxLength) + "..."), o.length > i1.buttonMaxLength && (o = o.substring(0, i1.buttonMaxLength) + "..."), i1.cssAnimation || (i1.cssAnimationDuration = 0);
        var x = t1.document.createElement("div");
        x.id = p1.ID, x.className = i1.className, x.style.zIndex = i1.zindex, x.style.borderRadius = i1.borderRadius, x.style.fontFamily = '"' + i1.fontFamily + '", ' + s1, i1.rtl && (x.setAttribute("dir", "rtl"), x.classList.add("nx-rtl-on")), x.style.display = "flex", x.style.flexWrap = "wrap", x.style.flexDirection = "column", x.style.alignItems = "center", x.style.justifyContent = "center";
        var g = "", b = !0 === i1.backOverlayClickToClose;
        i1.backOverlay && (g = '<div class="' + i1.className + "-overlay" + (i1.cssAnimation ? " nx-with-animation" : "") + (b ? " nx-report-click-to-close" : "") + '" style="background:' + (d.backOverlayColor || i1.backOverlayColor) + ";animation-duration:" + i1.cssAnimationDuration + 'ms;"></div>');
        var u = "";
        if (e2 === c1.Success ? u = C1(i1.svgSize, d.svgColor) : e2 === c1.Failure ? u = z1(i1.svgSize, d.svgColor) : e2 === c1.Warning ? u = S1(i1.svgSize, d.svgColor) : e2 === c1.Info && (u = L1(i1.svgSize, d.svgColor)), x.innerHTML = g + '<div class="' + i1.className + "-content" + (i1.cssAnimation ? " nx-with-animation " : "") + " nx-" + i1.cssAnimationStyle + '" style="width:' + i1.width + "; background:" + i1.backgroundColor + "; animation-duration:" + i1.cssAnimationDuration + 'ms;"><div style="width:' + i1.svgSize + "; height:" + i1.svgSize + ';" class="' + i1.className + '-icon">' + u + '</div><h5 class="' + i1.className + '-title" style="font-weight:500; font-size:' + i1.titleFontSize + "; color:" + d.titleColor + ';">' + a3 + '</h5><p class="' + i1.className + '-message" style="font-size:' + i1.messageFontSize + "; color:" + d.messageColor + ';">' + n + '</p><a id="NXReportButton" class="' + i1.className + '-button" style="font-weight:500; font-size:' + i1.buttonFontSize + "; background:" + d.buttonBackground + "; color:" + d.buttonColor + ';">' + o + "</a></div>", !t1.document.getElementById(x.id)) {
            t1.document.body.appendChild(x);
            var y = function() {
                var e = t1.document.getElementById(x.id);
                e.classList.add("nx-remove");
                var a = setTimeout(function() {
                    null !== e.parentNode && e.parentNode.removeChild(e), clearTimeout(a);
                }, i1.cssAnimationDuration);
            }, k = t1.document.getElementById("NXReportButton");
            if (k.addEventListener("click", function() {
                "function" == typeof r && r(), y();
            }), g && b) {
                var h = t1.document.querySelector(".nx-report-click-to-close");
                h.addEventListener("click", function() {
                    y();
                });
            }
        }
        i1 = v(!0, i1, m);
    }, O1 = function() {
        return '[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
    }, H1 = function(e, i2, n2, o, r, l, m, c, p) {
        if (!w("body")) return !1;
        a1 || G.Confirm.init({});
        var x = v(!0, a1, {});
        "object" != typeof p || Array.isArray(p) || (a1 = v(!0, a1, p)), "string" != typeof i2 && (i2 = "Notiflix Confirm"), "string" != typeof n2 && (n2 = "Do you agree with me?"), "string" != typeof r && (r = "Yes"), "string" != typeof l && (l = "No"), "function" != typeof m && (m = void 0), "function" != typeof c && (c = void 0), a1.plainText && (i2 = N(i2), n2 = N(n2), r = N(r), l = N(l)), a1.plainText || (i2.length > a1.titleMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.', r = "Okay", l = "..."), n2.length > a1.messageMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.', r = "Okay", l = "..."), (r.length || l.length) > a1.buttonsMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.', r = "Okay", l = "...")), i2.length > a1.titleMaxLength && (i2 = i2.substring(0, a1.titleMaxLength) + "..."), n2.length > a1.messageMaxLength && (n2 = n2.substring(0, a1.messageMaxLength) + "..."), r.length > a1.buttonsMaxLength && (r = r.substring(0, a1.buttonsMaxLength) + "..."), l.length > a1.buttonsMaxLength && (l = l.substring(0, a1.buttonsMaxLength) + "..."), a1.cssAnimation || (a1.cssAnimationDuration = 0);
        var g = t1.document.createElement("div");
        g.id = d1.ID, g.className = a1.className + (a1.cssAnimation ? " nx-with-animation nx-" + a1.cssAnimationStyle : ""), g.style.zIndex = a1.zindex, g.style.padding = a1.distance, a1.rtl && (g.setAttribute("dir", "rtl"), g.classList.add("nx-rtl-on"));
        var b = "string" == typeof a1.position ? a1.position.trim() : "center";
        g.classList.add("nx-position-" + b), g.style.fontFamily = '"' + a1.fontFamily + '", ' + s1;
        var u = "";
        a1.backOverlay && (u = '<div class="' + a1.className + "-overlay" + (a1.cssAnimation ? " nx-with-animation" : "") + '" style="background:' + a1.backOverlayColor + ";animation-duration:" + a1.cssAnimationDuration + 'ms;"></div>');
        var y = "";
        "function" == typeof m && (y = '<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:' + a1.cancelButtonColor + ";background:" + a1.cancelButtonBackground + ";font-size:" + a1.buttonsFontSize + ';">' + l + "</a>");
        var k = "", h = null, C = void 0;
        if (e === f1.Ask || e === f1.Prompt) {
            h = o || "";
            var z = e === f1.Ask ? Math.ceil(1.5 * h.length) : 200 < h.length ? Math.ceil(1.5 * h.length) : 250, S = e === f1.Prompt ? 'value="' + h + '"' : "";
            k = '<div><input id="NXConfirmValidationInput" type="text" ' + S + ' maxlength="' + z + '" style="font-size:' + a1.messageFontSize + ";border-radius: " + a1.borderRadius + ';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>';
        }
        if (g.innerHTML = u + '<div class="' + a1.className + '-content" style="width:' + a1.width + "; background:" + a1.backgroundColor + "; animation-duration:" + a1.cssAnimationDuration + "ms; border-radius: " + a1.borderRadius + ';"><div class="' + a1.className + '-head"><h5 style="color:' + a1.titleColor + ";font-size:" + a1.titleFontSize + ';">' + i2 + '</h5><div style="color:' + a1.messageColor + ";font-size:" + a1.messageFontSize + ';">' + n2 + k + '</div></div><div class="' + a1.className + '-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok' + ("function" == typeof m ? "" : " nx-full") + '" style="color:' + a1.okButtonColor + ";background:" + a1.okButtonBackground + ";font-size:" + a1.buttonsFontSize + ';">' + r + "</a>" + y + "</div></div>", !t1.document.getElementById(g.id)) {
            t1.document.body.appendChild(g);
            var L = t1.document.getElementById(g.id), W = t1.document.getElementById("NXConfirmButtonOk"), I = t1.document.getElementById("NXConfirmValidationInput");
            if (I && (I.focus(), I.setSelectionRange(0, (I.value || "").length), I.addEventListener("keyup", function(t) {
                var i = t.target.value;
                if (e === f1.Ask && i !== h) t.preventDefault(), I.classList.add("nx-validation-failure"), I.classList.remove("nx-validation-success");
                else {
                    e === f1.Ask && (I.classList.remove("nx-validation-failure"), I.classList.add("nx-validation-success"));
                    var a = "enter" === (t.key || "").toLocaleLowerCase("en") || 13 === t.keyCode;
                    a && W.dispatchEvent(new Event("click"));
                }
            })), W.addEventListener("click", function(t) {
                if (e === f1.Ask && h && I) {
                    var i = (I.value || "").toString();
                    if (i !== h) return I.focus(), I.classList.add("nx-validation-failure"), t.stopPropagation(), t.preventDefault(), t.returnValue = !1, t.cancelBubble = !0, !1;
                    I.classList.remove("nx-validation-failure");
                }
                "function" == typeof m && (e === f1.Prompt && I && (C = I.value || ""), m(C)), L.classList.add("nx-remove");
                var n = setTimeout(function() {
                    null !== L.parentNode && (L.parentNode.removeChild(L), clearTimeout(n));
                }, a1.cssAnimationDuration);
            }), "function" == typeof m) {
                var R = t1.document.getElementById("NXConfirmButtonCancel");
                R.addEventListener("click", function() {
                    "function" == typeof c && (e === f1.Prompt && I && (C = I.value || ""), c(C)), L.classList.add("nx-remove");
                    var t = setTimeout(function() {
                        null !== L.parentNode && (L.parentNode.removeChild(L), clearTimeout(t));
                    }, a1.cssAnimationDuration);
                });
            }
        }
        a1 = v(!0, a1, x);
    }, P1 = function() {
        return '[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}';
    }, U1 = function(e, i, a, o, r) {
        if (!w("body")) return !1;
        n1 || G.Loading.init({});
        var l = v(!0, n1, {});
        if ("object" == typeof i && !Array.isArray(i) || "object" == typeof a && !Array.isArray(a)) {
            var m = {};
            "object" == typeof i ? m = i : "object" == typeof a && (m = a), n1 = v(!0, n1, m);
        }
        var c = "";
        if ("string" == typeof i && 0 < i.length && (c = i), o) {
            c = c.length > n1.messageMaxLength ? N(c).toString().substring(0, n1.messageMaxLength) + "..." : N(c).toString();
            var p = "";
            0 < c.length && (p = '<p id="' + n1.messageID + '" class="nx-loading-message" style="color:' + n1.messageColor + ";font-size:" + n1.messageFontSize + ';">' + c + "</p>"), n1.cssAnimation || (n1.cssAnimationDuration = 0);
            var f = "";
            if (e === x1.Standard) f = W1(n1.svgSize, n1.svgColor);
            else if (e === x1.Hourglass) f = I1(n1.svgSize, n1.svgColor);
            else if (e === x1.Circle) f = R1(n1.svgSize, n1.svgColor);
            else if (e === x1.Arrows) f = A1(n1.svgSize, n1.svgColor);
            else if (e === x1.Dots) f = M(n1.svgSize, n1.svgColor);
            else if (e === x1.Pulse) f = B(n1.svgSize, n1.svgColor);
            else if (e === x1.Custom && null !== n1.customSvgCode && null === n1.customSvgUrl) f = n1.customSvgCode || "";
            else if (e === x1.Custom && null !== n1.customSvgUrl && null === n1.customSvgCode) f = '<img class="nx-custom-loading-icon" width="' + n1.svgSize + '" height="' + n1.svgSize + '" src="' + n1.customSvgUrl + '" alt="Notiflix">';
            else {
                if (e === x1.Custom && (null === n1.customSvgUrl || null === n1.customSvgCode)) return y1('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'), !1;
                f = X1(n1.svgSize, "#f8f8f8", "#32c682");
            }
            var d = parseInt((n1.svgSize || "").replace(/[^0-9]/g, "")), b = t1.innerWidth, u = d >= b ? b - 40 + "px" : d + "px", k = '<div style="width:' + u + "; height:" + u + ';" class="' + n1.className + "-icon" + (0 < c.length ? " nx-with-message" : "") + '">' + f + "</div>", h = t1.document.createElement("div");
            if (h.id = g1.ID, h.className = n1.className + (n1.cssAnimation ? " nx-with-animation" : "") + (n1.clickToClose ? " nx-loading-click-to-close" : ""), h.style.zIndex = n1.zindex, h.style.background = n1.backgroundColor, h.style.animationDuration = n1.cssAnimationDuration + "ms", h.style.fontFamily = '"' + n1.fontFamily + '", ' + s1, h.style.display = "flex", h.style.flexWrap = "wrap", h.style.flexDirection = "column", h.style.alignItems = "center", h.style.justifyContent = "center", n1.rtl && (h.setAttribute("dir", "rtl"), h.classList.add("nx-rtl-on")), h.innerHTML = k + p, !t1.document.getElementById(h.id) && (t1.document.body.appendChild(h), n1.clickToClose)) {
                var C = t1.document.getElementById(h.id);
                C.addEventListener("click", function() {
                    h.classList.add("nx-remove");
                    var t = setTimeout(function() {
                        null !== h.parentNode && (h.parentNode.removeChild(h), clearTimeout(t));
                    }, n1.cssAnimationDuration);
                });
            }
        } else if (t1.document.getElementById(g1.ID)) var z = t1.document.getElementById(g1.ID), S = setTimeout(function() {
            z.classList.add("nx-remove");
            var t = setTimeout(function() {
                null !== z.parentNode && (z.parentNode.removeChild(z), clearTimeout(t));
            }, n1.cssAnimationDuration);
            clearTimeout(S);
        }, r);
        n1 = v(!0, n1, l);
    }, V1 = function(e) {
        "string" != typeof e && (e = "");
        var i = t1.document.getElementById(g1.ID);
        if (i) {
            if (0 < e.length) {
                e = e.length > n1.messageMaxLength ? N(e).substring(0, n1.messageMaxLength) + "..." : N(e);
                var a = i.getElementsByTagName("p")[0];
                if (a) a.innerHTML = e;
                else {
                    var o = t1.document.createElement("p");
                    o.id = n1.messageID, o.className = "nx-loading-message nx-loading-message-new", o.style.color = n1.messageColor, o.style.fontSize = n1.messageFontSize, o.innerHTML = e, i.appendChild(o);
                }
            } else y1("Where is the new message?");
        }
    }, q1 = function() {
        return '[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}';
    }, Q = 0, Y1 = function(e3, i3, a4, n3, r, l) {
        var m;
        if (Array.isArray(a4)) {
            if (1 > a4.length) return y1("Array of HTMLElements should contains at least one HTMLElement."), !1;
            m = a4;
        } else if (Object.prototype.isPrototypeOf.call(NodeList.prototype, a4)) {
            if (1 > a4.length) return y1("NodeListOf<HTMLElement> should contains at least one HTMLElement."), !1;
            m = Array.prototype.slice.call(a4);
        } else {
            var c = "string" != typeof a4 || 1 > (a4 || "").length || 1 === (a4 || "").length && ("#" === (a4 || "")[0] || "." === (a4 || "")[0]);
            if (c) return y1("The selector parameter must be a string and matches a specified CSS selector(s)."), !1;
            var p = t1.document.querySelectorAll(a4);
            if (1 > p.length) return y1('You called the "Notiflix.Block..." function with "' + a4 + '" selector, but there is no such element(s) in the document.'), !1;
            m = p;
        }
        o1 || G.Block.init({});
        var f = v(!0, o1, {});
        if ("object" == typeof n3 && !Array.isArray(n3) || "object" == typeof r && !Array.isArray(r)) {
            var d = {};
            "object" == typeof n3 ? d = n3 : "object" == typeof r && (d = r), o1 = v(!0, o1, d);
        }
        var x = "";
        "string" == typeof n3 && 0 < n3.length && (x = n3), o1.cssAnimation || (o1.cssAnimationDuration = 0);
        var g = u1.className;
        "string" == typeof o1.className && (g = o1.className.trim());
        var h = "number" == typeof o1.querySelectorLimit ? o1.querySelectorLimit : 200, C = (m || []).length >= h ? h : m.length, z = "nx-block-temporary-position";
        if (e3) {
            for(var S, L = [
                "area",
                "base",
                "br",
                "col",
                "command",
                "embed",
                "hr",
                "img",
                "input",
                "keygen",
                "link",
                "meta",
                "param",
                "source",
                "track",
                "wbr",
                "html",
                "head",
                "title",
                "script",
                "style",
                "iframe"
            ], X = 0; X < C; X++)if (S = m[X], S) {
                if (-1 < L.indexOf(S.tagName.toLocaleLowerCase("en"))) break;
                var D = S.querySelectorAll("[id^=" + u1.ID + "]");
                if (1 > D.length) {
                    var T = "";
                    i3 && (i3 === b1.Hourglass ? T = I1(o1.svgSize, o1.svgColor) : i3 === b1.Circle ? T = R1(o1.svgSize, o1.svgColor) : i3 === b1.Arrows ? T = A1(o1.svgSize, o1.svgColor) : i3 === b1.Dots ? T = M(o1.svgSize, o1.svgColor) : i3 === b1.Pulse ? T = B(o1.svgSize, o1.svgColor) : T = W1(o1.svgSize, o1.svgColor));
                    var F = '<span class="' + g + '-icon" style="width:' + o1.svgSize + ";height:" + o1.svgSize + ';">' + T + "</span>", E = "";
                    0 < x.length && (x = x.length > o1.messageMaxLength ? N(x).substring(0, o1.messageMaxLength) + "..." : N(x), E = '<span style="font-size:' + o1.messageFontSize + ";color:" + o1.messageColor + ';" class="' + g + '-message">' + x + "</span>"), Q++;
                    var j = t1.document.createElement("div");
                    j.id = u1.ID + "-" + Q, j.className = g + (o1.cssAnimation ? " nx-with-animation" : ""), j.style.position = o1.position, j.style.zIndex = o1.zindex, j.style.background = o1.backgroundColor, j.style.animationDuration = o1.cssAnimationDuration + "ms", j.style.fontFamily = '"' + o1.fontFamily + '", ' + s1, j.style.display = "flex", j.style.flexWrap = "wrap", j.style.flexDirection = "column", j.style.alignItems = "center", j.style.justifyContent = "center", o1.rtl && (j.setAttribute("dir", "rtl"), j.classList.add("nx-rtl-on")), j.innerHTML = F + E;
                    var O = t1.getComputedStyle(S).getPropertyValue("position"), H = "string" == typeof O ? O.toLocaleLowerCase("en") : "relative", P = Math.round(1.25 * parseInt(o1.svgSize)) + 40, U = S.offsetHeight || 0, V = "";
                    P > U && (V = "min-height:" + P + "px;");
                    var q = "";
                    q = S.getAttribute("id") ? "#" + S.getAttribute("id") : S.classList[0] ? "." + S.classList[0] : (S.tagName || "").toLocaleLowerCase("en");
                    var Y = "", K = -1 >= [
                        "absolute",
                        "relative",
                        "fixed",
                        "sticky"
                    ].indexOf(H);
                    if (K || 0 < V.length) {
                        if (!w("head")) return !1;
                        K && (Y = "position:relative!important;");
                        var $ = '<style id="Style-' + u1.ID + "-" + Q + '">' + q + "." + z + "{" + Y + V + "}</style>", J = t1.document.createRange();
                        J.selectNode(t1.document.head);
                        var Z = J.createContextualFragment($);
                        t1.document.head.appendChild(Z), S.classList.add(z);
                    }
                    S.appendChild(j);
                }
            }
        } else var _ = function(e) {
            var i = setTimeout(function() {
                null !== e.parentNode && e.parentNode.removeChild(e);
                var a = e.getAttribute("id"), n = t1.document.getElementById("Style-" + a);
                n && null !== n.parentNode && n.parentNode.removeChild(n), clearTimeout(i);
            }, o1.cssAnimationDuration);
        }, tt = function(t) {
            if (t && 0 < t.length) for(var e, n = 0; n < t.length; n++)e = t[n], e && (e.classList.add("nx-remove"), _(e));
            else "string" == typeof a4 ? k1('"Notiflix.Block.remove();" function called with "' + a4 + '" selector, but this selector does not have a "Block" element to remove.') : k1('"Notiflix.Block.remove();" function called with "' + a4 + '", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.');
        }, et = function(t) {
            var e = setTimeout(function() {
                t.classList.remove(z), clearTimeout(e);
            }, o1.cssAnimationDuration + 300);
        }, it = setTimeout(function() {
            for(var t, e = 0; e < C; e++)t = m[e], t && (et(t), D = t.querySelectorAll("[id^=" + u1.ID + "]"), tt(D));
            clearTimeout(it);
        }, l);
        o1 = v(!0, o1, f);
    }, G = {
        Notify: {
            init: function(t) {
                e1 = v(!0, m1, t), h1(D1, "NotiflixNotifyInternalCSS");
            },
            merge: function(t) {
                return e1 ? void (e1 = v(!0, e1, t)) : (y1("You have to initialize the Notify module before call Merge function."), !1);
            },
            success: function(t, e, i) {
                F1(l1.Success, t, e, i);
            },
            failure: function(t, e, i) {
                F1(l1.Failure, t, e, i);
            },
            warning: function(t, e, i) {
                F1(l1.Warning, t, e, i);
            },
            info: function(t, e, i) {
                F1(l1.Info, t, e, i);
            }
        },
        Report: {
            init: function(t) {
                i1 = v(!0, p1, t), h1(E1, "NotiflixReportInternalCSS");
            },
            merge: function(t) {
                return i1 ? void (i1 = v(!0, i1, t)) : (y1("You have to initialize the Report module before call Merge function."), !1);
            },
            success: function(t, e, i, a, n) {
                j1(c1.Success, t, e, i, a, n);
            },
            failure: function(t, e, i, a, n) {
                j1(c1.Failure, t, e, i, a, n);
            },
            warning: function(t, e, i, a, n) {
                j1(c1.Warning, t, e, i, a, n);
            },
            info: function(t, e, i, a, n) {
                j1(c1.Info, t, e, i, a, n);
            }
        },
        Confirm: {
            init: function(t) {
                a1 = v(!0, d1, t), h1(O1, "NotiflixConfirmInternalCSS");
            },
            merge: function(t) {
                return a1 ? void (a1 = v(!0, a1, t)) : (y1("You have to initialize the Confirm module before call Merge function."), !1);
            },
            show: function(t, e, i, a, n, o, r) {
                H1(f1.Show, t, e, null, i, a, n, o, r);
            },
            ask: function(t, e, i, a, n, o, r, s) {
                H1(f1.Ask, t, e, i, a, n, o, r, s);
            },
            prompt: function(t, e, i, a, n, o, r, s) {
                H1(f1.Prompt, t, e, i, a, n, o, r, s);
            }
        },
        Loading: {
            init: function(t) {
                n1 = v(!0, g1, t), h1(P1, "NotiflixLoadingInternalCSS");
            },
            merge: function(t) {
                return n1 ? void (n1 = v(!0, n1, t)) : (y1("You have to initialize the Loading module before call Merge function."), !1);
            },
            standard: function(t, e) {
                U1(x1.Standard, t, e, !0, 0);
            },
            hourglass: function(t, e) {
                U1(x1.Hourglass, t, e, !0, 0);
            },
            circle: function(t, e) {
                U1(x1.Circle, t, e, !0, 0);
            },
            arrows: function(t, e) {
                U1(x1.Arrows, t, e, !0, 0);
            },
            dots: function(t, e) {
                U1(x1.Dots, t, e, !0, 0);
            },
            pulse: function(t, e) {
                U1(x1.Pulse, t, e, !0, 0);
            },
            custom: function(t, e) {
                U1(x1.Custom, t, e, !0, 0);
            },
            notiflix: function(t, e) {
                U1(x1.Notiflix, t, e, !0, 0);
            },
            remove: function(t) {
                "number" != typeof t && (t = 0), U1(null, null, null, !1, t);
            },
            change: function(t) {
                V1(t);
            }
        },
        Block: {
            init: function(t) {
                o1 = v(!0, u1, t), h1(q1, "NotiflixBlockInternalCSS");
            },
            merge: function(t) {
                return o1 ? void (o1 = v(!0, o1, t)) : (y1('You have to initialize the "Notiflix.Block" module before call Merge function.'), !1);
            },
            standard: function(t, e, i) {
                Y1(!0, b1.Standard, t, e, i);
            },
            hourglass: function(t, e, i) {
                Y1(!0, b1.Hourglass, t, e, i);
            },
            circle: function(t, e, i) {
                Y1(!0, b1.Circle, t, e, i);
            },
            arrows: function(t, e, i) {
                Y1(!0, b1.Arrows, t, e, i);
            },
            dots: function(t, e, i) {
                Y1(!0, b1.Dots, t, e, i);
            },
            pulse: function(t, e, i) {
                Y1(!0, b1.Pulse, t, e, i);
            },
            remove: function(t, e) {
                "number" != typeof e && (e = 0), Y1(!1, null, t, null, null, e);
            }
        }
    };
    return "object" == typeof t1.Notiflix ? v(!0, t1.Notiflix, {
        Notify: G.Notify,
        Report: G.Report,
        Confirm: G.Confirm,
        Loading: G.Loading,
        Block: G.Block
    }) : {
        Notify: G.Notify,
        Report: G.Report,
        Confirm: G.Confirm,
        Loading: G.Loading,
        Block: G.Block
    };
});

},{}],"dFNG1":[function(require,module,exports) {
var _addToWatchedQueue = require("./add-to-watched&queue");
var _api = require("./api");
var _loadingIntoModal = require("./loading-into-modal");
var _localStorage = require("./local-storage");
var _refs = require("./refs");
var _state = require("./state");
const modal = document.getElementById("info-modal");
const modalWind = document.getElementById("modal");
const animationLogic = ()=>{
    modalWind.classList.remove("openModalAnimation");
    modalWind.classList.add("closeModalAnimation");
    setTimeout(()=>{
        modal.classList.remove("open");
        localStorage.removeItem("modalCardData");
    }, 600);
};
window.addEventListener("keydown", (event)=>{
    if (event.key === "Escape") animationLogic();
});
const backdrop = document.getElementById("close-modal");
backdrop.addEventListener("click", (event)=>{
    if (event.target == backdrop) animationLogic();
});
window.onclick = (event)=>{
    let modal1 = document.getElementById("info-modal");
    if (event.target == modal1) animationLogic();
};
window.onload = ()=>{
    const movieListItems = document.getElementsByClassName("movies")[0];
    const movieLib = document.getElementsByClassName("movies-lib")[0];
    movieListItems?.addEventListener("click", (e)=>{
        onMovieItemHandler(e);
    });
    movieLib?.addEventListener("click", (e)=>{
        onMovieItemHandler(e);
    });
    const onMovieItemHandler = (e)=>{
        const cardData = {
            ...e.target.dataset
        };
        if (!Object.keys(cardData).length) return;
        ////buttons
        (0, _state.state).activeFilm = cardData;
        ////buttons
        localStorage.setItem("modalCardData", JSON.stringify(cardData));
        openModal();
        //buttons
        const watchedFilms = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).WATCHED) || [];
        const queueFilms = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).QUEUE) || [];
        if (watchedFilms.find((film)=>film.id === (0, _state.state).activeFilm.id)) (0, _refs.refs).addToWatchedBtn.innerText = "REMOVE FROM WATCHED";
        else (0, _refs.refs).addToWatchedBtn.innerText = "ADD TO WATCHED";
        if (queueFilms.find((film)=>film.id === (0, _state.state).activeFilm.id)) (0, _refs.refs).addToQueueBtn.innerText = "REMOVE FROM QUEUE";
        else (0, _refs.refs).addToQueueBtn.innerText = "ADD TO QUEUE";
    //buttons
    };
};
const openModal = ()=>{
    const modal2 = document.getElementById("info-modal");
    modal2.classList.add("open");
    modalWind.classList.add("openModalAnimation");
    _loadingIntoModal.getInitialModalData();
};

},{"./add-to-watched&queue":"7FmdW","./api":"9u7qN","./loading-into-modal":"coViy","./local-storage":"4Qyzi","./refs":"2WoF2","./state":"2FZFo"}],"7FmdW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onBtnAddToLibrary", ()=>onBtnAddToLibrary);
parcelHelpers.export(exports, "updateMarkupLibrary", ()=>updateMarkupLibrary);
var _localStorage = require("./local-storage");
var _pagination = require("./pagination");
var _refs = require("./refs");
var _renderFromStorage = require("./render-from-storage");
var _state = require("./state");
const onBtnAddToLibrary = (evt)=>{
    const watchedFilmsArray = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).WATCHED) || [];
    const queueFilmsArray = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).QUEUE) || [];
    if (evt.target.innerText === "ADD TO WATCHED") saveToStorageFilm(watchedFilmsArray, (0, _localStorage.localStorageKeys).WATCHED, "WATCHED", evt);
    else if (evt.target.innerText === "REMOVE FROM WATCHED") deleteFromStorageFilm(watchedFilmsArray, (0, _localStorage.localStorageKeys).WATCHED, "WATCHED", evt);
    else if (evt.target.innerText === "ADD TO QUEUE") saveToStorageFilm(queueFilmsArray, (0, _localStorage.localStorageKeys).QUEUE, "QUEUE", evt);
    else if (evt.target.innerText === "REMOVE FROM QUEUE") deleteFromStorageFilm(queueFilmsArray, (0, _localStorage.localStorageKeys).QUEUE, "QUEUE", evt);
};
function saveToStorageFilm(array, key, keyValue, evt) {
    array.push((0, _state.state).activeFilm);
    (0, _localStorage.setToLocalStorage)(key, array);
    evt.target.innerText = `REMOVE FROM ${keyValue}`;
}
function deleteFromStorageFilm(array, key, keyValue, evt) {
    const filteredFilms = array.filter((film)=>film.id !== (0, _state.state).activeFilm.id);
    (0, _localStorage.setToLocalStorage)(key, filteredFilms);
    evt.target.innerText = `ADD TO ${keyValue}`;
}
function updateMarkupLibrary(evt) {
    if (evt.target.innerText === "ADD TO WATCHED") deleteFromWatchedMarkup();
    else if (evt.target.innerText === "REMOVE FROM WATCHED") deleteFromWatchedMarkup();
    else if (evt.target.innerText === "ADD TO QUEUE") deleteFromQueueMarkup();
    else if (evt.target.innerText === "REMOVE FROM QUEUE") deleteFromQueueMarkup();
}
async function deleteFromWatchedMarkup() {
    (0, _pagination.resetCurrentPage)();
    const watchedFilmsinLocalStorage = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).WATCHED) || [];
    const films = (0, _renderFromStorage.localPaginate)(watchedFilmsinLocalStorage, (0, _state.state).currentPage);
    (0, _renderFromStorage.updateLibRender)(films);
    chahgeBtnActiveStatus((0, _refs.refs).buttonWatched, (0, _refs.refs).buttonQueue);
}
async function deleteFromQueueMarkup() {
    (0, _pagination.resetCurrentPage)();
    const queueFilmsinLocalStorage = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).QUEUE) || [];
    const films = (0, _renderFromStorage.localPaginate)(queueFilmsinLocalStorage, (0, _state.state).currentPage);
    (0, _renderFromStorage.updateLibRender)(films);
    chahgeBtnActiveStatus((0, _refs.refs).buttonQueue, (0, _refs.refs).buttonWatched);
}
function chahgeBtnActiveStatus(elFirst, elSecond) {
    elFirst.classList.add("active");
    elSecond.classList.remove("active");
}

},{"./local-storage":"4Qyzi","./pagination":"9j1Dd","./refs":"2WoF2","./render-from-storage":"gir1X","./state":"2FZFo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jQ8Lr":[function(require,module,exports) {
const refs = {
    openModal: document.querySelector(".open-modal-team"),
    closeModal: document.querySelector(".close-modal-team"),
    teamBackdrop: document.querySelector(".backdrop-modal"),
    teamModal: document.getElementsByClassName("team__modal")
};
refs.openModal.addEventListener("click", openModalTeam);
refs.closeModal.addEventListener("click", closeModalTeam);
function openModalTeam(event) {
    refs.teamBackdrop.classList.remove("team__backdrop--hidden");
    document.addEventListener("keydown", onEscapeClose);
    document.addEventListener("click", onBackdropClose);
    refs.teamModal[0].classList.add("openModalAnimationTeam");
// document.body.style.overflow = 'hidden';
}
function closeModalTeam(event) {
    refs.teamModal[0].classList.remove("closeModalAnimationTeam");
    refs.teamBackdrop.classList.add("team__backdrop--hidden");
    document.removeEventListener("keydown", onEscapeClose);
    document.body.style.overflow = "";
}
function onEscapeClose(event) {
    if (event.code === "Escape") {
        refs.teamModal[0].classList.remove("openModalAnimationTeam");
        refs.teamModal[0].classList.add("closeModalAnimationTeam");
        setTimeout(()=>{
            closeModalTeam();
        }, 400);
        closeModalTeam();
    }
}
function onBackdropClose(event) {
    if (event.target === refs.teamBackdrop) {
        refs.teamModal[0].classList.remove("openModalAnimationTeam");
        refs.teamModal[0].classList.add("closeModalAnimationTeam");
        setTimeout(()=>{
            closeModalTeam();
        }, 400);
    }
}

},{}],"9Y0Iv":[function(require,module,exports) {
const watchedBtns = document.querySelectorAll("#btn");
const track1 = document.getElementById("1");
watchedBtns.forEach(function(watchedBtn) {
    watchedBtn.addEventListener("click", function() {
        // track2.pause();
        track1.currentTime = 0;
        track1.play();
    });
});

},{}],"aAovl":[function(require,module,exports) {
const mask = document.querySelector(".mask");
window.addEventListener("load", ()=>{
    mask.classList.add("hide");
});

},{}],"aMYz0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "swiper", ()=>swiper);
parcelHelpers.export(exports, "onLoadMarkup", ()=>onLoadMarkup);
parcelHelpers.export(exports, "onLinkPlayClick", ()=>onLinkPlayClick);
var _swiper = require("swiper");
var _swiperDefault = parcelHelpers.interopDefault(_swiper);
var _swiperScss = require("swiper/swiper.scss");
var _refs = require("./refs");
var _api = require("./api");
var _state = require("./state");
var _basiclightbox = require("basiclightbox");
const swiper = new (0, _swiperDefault.default)(".swiper", {
    modules: [
        (0, _swiper.Navigation),
        (0, _swiper.Autoplay)
    ],
    slidesPerView: 8,
    spaceBetween: 8,
    autoplay: {
        enabled: true,
        delay: 1500
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 2
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 4
        },
        1278: {
            slidesPerView: 8,
            spaceBetween: 8
        }
    }
});
const renderMarkupSlider = (movies)=>{
    const markup = movies.map(({ id , title , poster_path  })=>{
        return `<li class="swiper-slide">
        <a class="swiper-link" href="#" data-id="${id}"><img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" />
            <div class="swiper-backdrop">
                <svg class="icon-play">
                    <use href="${(0, _state.state).sprite}#icon-play"></use>
                </svg>
            </div>
        </a>
      </li>`;
    }).join("");
    (0, _refs.refs).slider.insertAdjacentHTML("beforeend", markup);
};
const onLoadMarkup = async ()=>{
    try {
        const { results  } = await (0, _api.fetchTodayPopularMovies)();
        renderMarkupSlider(results);
    } catch (error) {
        console.error(error.message);
    }
};
const onLinkPlayClick = async (evt)=>{
    evt.preventDefault();
    if (evt.target.nodeName !== "A") return;
    try {
        const { results  } = await (0, _api.fetchTrailerById)(evt.target.dataset.id);
        const { key  } = results[results.length - 1];
        const closeModal = (e)=>{
            if (e.code === "Escape") instance.close();
        };
        const instance = _basiclightbox.create(`<iframe class="youtube-frame" width="560" height="315" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, {
            onShow: ()=>{
                document.addEventListener("keydown", closeModal);
            },
            onClose: ()=>{
                document.removeEventListener("keydown", closeModal);
            }
        });
        instance.show();
    } catch (error) {
        console.error(error.message);
    }
};

},{"swiper":"iM6UL","swiper/swiper.scss":"iXKG4","./refs":"2WoF2","./api":"9u7qN","./state":"2FZFo","basiclightbox":"h9e8q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iM6UL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Swiper 11.0.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 5, 2024
 */ parcelHelpers.export(exports, "Swiper", ()=>(0, _swiperCoreMjs.S));
parcelHelpers.export(exports, "default", ()=>(0, _swiperCoreMjs.S));
var _swiperCoreMjs = require("./shared/swiper-core.mjs");

},{"./shared/swiper-core.mjs":"c1Vcv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c1Vcv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "S", ()=>Swiper);
parcelHelpers.export(exports, "d", ()=>defaults);
var _ssrWindowEsmMjs = require("./ssr-window.esm.mjs");
var _utilsMjs = require("./utils.mjs");
let support;
function calcSupport() {
    const window = (0, _ssrWindowEsmMjs.a)();
    const document = (0, _ssrWindowEsmMjs.g)();
    return {
        smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
        touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
    };
}
function getSupport() {
    if (!support) support = calcSupport();
    return support;
}
let deviceCached;
function calcDevice(_temp) {
    let { userAgent  } = _temp === void 0 ? {} : _temp;
    const support1 = getSupport();
    const window = (0, _ssrWindowEsmMjs.a)();
    const platform = window.navigator.platform;
    const ua = userAgent || window.navigator.userAgent;
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    // iPadOs 13 fix
    const iPadScreens = [
        "1024x1366",
        "1366x1024",
        "834x1194",
        "1194x834",
        "834x1112",
        "1112x834",
        "768x1024",
        "1024x768",
        "820x1180",
        "1180x820",
        "810x1080",
        "1080x810"
    ];
    if (!ipad && macos && support1.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            "13_0_0"
        ];
        macos = false;
    }
    // Android
    if (android && !windows) {
        device.os = "android";
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.os = "ios";
        device.ios = true;
    }
    // Export object
    return device;
}
function getDevice(overrides) {
    if (overrides === void 0) overrides = {};
    if (!deviceCached) deviceCached = calcDevice(overrides);
    return deviceCached;
}
let browser;
function calcBrowser() {
    const window = (0, _ssrWindowEsmMjs.a)();
    const device = getDevice();
    let needPerspectiveFix = false;
    function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
        const ua = String(window.navigator.userAgent);
        if (ua.includes("Version/")) {
            const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num)=>Number(num));
            needPerspectiveFix = major < 16 || major === 16 && minor < 2;
        }
    }
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
    const isSafariBrowser = isSafari();
    const need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
        isSafari: needPerspectiveFix || isSafariBrowser,
        needPerspectiveFix,
        need3dFix,
        isWebView
    };
}
function getBrowser() {
    if (!browser) browser = calcBrowser();
    return browser;
}
function Resize(_ref) {
    let { swiper , on , emit  } = _ref;
    const window = (0, _ssrWindowEsmMjs.a)();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("beforeResize");
        emit("resize");
    };
    const createObserver = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries)=>{
            animationFrame = window.requestAnimationFrame(()=>{
                const { width , height  } = swiper;
                let newWidth = width;
                let newHeight = height;
                entries.forEach((_ref2)=>{
                    let { contentBoxSize , contentRect , target  } = _ref2;
                    if (target && target !== swiper.el) return;
                    newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                    newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                });
                if (newWidth !== width || newHeight !== height) resizeHandler();
            });
        });
        observer.observe(swiper.el);
    };
    const removeObserver = ()=>{
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("orientationchange");
    };
    on("init", ()=>{
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
            createObserver();
            return;
        }
        window.addEventListener("resize", resizeHandler);
        window.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", ()=>{
        removeObserver();
        window.removeEventListener("resize", resizeHandler);
        window.removeEventListener("orientationchange", orientationChangeHandler);
    });
}
function Observer(_ref) {
    let { swiper , extendParams , on , emit  } = _ref;
    const observers = [];
    const window = (0, _ssrWindowEsmMjs.a)();
    const attach = function(target, options) {
        if (options === void 0) options = {};
        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations)=>{
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (swiper.__preventObserver__) return;
            if (mutations.length === 1) {
                emit("observerUpdate", mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit("observerUpdate", mutations[0]);
            };
            if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate);
            else window.setTimeout(observerUpdate, 0);
        });
        observer.observe(target, {
            attributes: typeof options.attributes === "undefined" ? true : options.attributes,
            childList: typeof options.childList === "undefined" ? true : options.childList,
            characterData: typeof options.characterData === "undefined" ? true : options.characterData
        });
        observers.push(observer);
    };
    const init = ()=>{
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = (0, _utilsMjs.a)(swiper.hostEl);
            for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
        }
        // Observe container
        attach(swiper.hostEl, {
            childList: swiper.params.observeSlideChildren
        });
        // Observe wrapper
        attach(swiper.wrapperEl, {
            attributes: false
        });
    };
    const destroy = ()=>{
        observers.forEach((observer)=>{
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });
    on("init", init);
    on("destroy", destroy);
}
/* eslint-disable no-underscore-dangle */ var eventsEmitter = {
    on (events1, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push";
        events1.split(" ").forEach((event)=>{
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once (events2, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        function onceHandler() {
            self.off(events2, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events2, onceHandler, priority);
    },
    onAny (handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push";
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
        return self;
    },
    offAny (handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) self.eventsAnyListeners.splice(index, 1);
        return self;
    },
    off (events3, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        events3.split(" ").forEach((event)=>{
            if (typeof handler === "undefined") self.eventsListeners[event] = [];
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index)=>{
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
            });
        });
        return self;
    },
    emit () {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        let events4;
        let data;
        let context;
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        if (typeof args[0] === "string" || Array.isArray(args[0])) {
            events4 = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events4 = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events4) ? events4 : events4.split(" ");
        eventsArray.forEach((event)=>{
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler)=>{
                eventHandler.apply(context, [
                    event,
                    ...data
                ]);
            });
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler)=>{
                eventHandler.apply(context, data);
            });
        });
        return self;
    }
};
function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width;
    else width = el.clientWidth;
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height;
    else height = el.clientHeight;
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
    // Subtract paddings
    width = width - parseInt((0, _utilsMjs.o)(el, "padding-left") || 0, 10) - parseInt((0, _utilsMjs.o)(el, "padding-right") || 0, 10);
    height = height - parseInt((0, _utilsMjs.o)(el, "padding-top") || 0, 10) - parseInt((0, _utilsMjs.o)(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
    });
}
function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const { wrapperEl , slidesEl , size: swiperSize , rtlTranslate: rtl , wrongRTL  } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = (0, _utilsMjs.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") return;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
    swiper.virtualSize = -spaceBetween;
    // reset margins
    slides.forEach((slideEl)=>{
        if (rtl) slideEl.style.marginLeft = "";
        else slideEl.style.marginRight = "";
        slideEl.style.marginBottom = "";
        slideEl.style.marginTop = "";
    });
    // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        (0, _utilsMjs.s)(wrapperEl, "--swiper-centered-offset-before", "");
        (0, _utilsMjs.s)(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) swiper.grid.initSlides(slides);
    else if (swiper.grid) swiper.grid.unsetSlides();
    // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
        return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for(let i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        let slide1;
        if (slides[i]) slide1 = slides[i];
        if (gridEnabled) swiper.grid.updateSlide(i, slide1, slides);
        if (slides[i] && (0, _utilsMjs.o)(slide1, "display") === "none") continue; // eslint-disable-line
        if (params.slidesPerView === "auto") {
            if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
            const slideStyles = getComputedStyle(slide1);
            const currentTransform = slide1.style.transform;
            const currentWebKitTransform = slide1.style.webkitTransform;
            if (currentTransform) slide1.style.transform = "none";
            if (currentWebKitTransform) slide1.style.webkitTransform = "none";
            if (params.roundLengths) slideSize = swiper.isHorizontal() ? (0, _utilsMjs.f)(slide1, "width", true) : (0, _utilsMjs.f)(slide1, "height", true);
            else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, "width");
                const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                const boxSizing = slideStyles.getPropertyValue("box-sizing");
                if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight;
                else {
                    const { clientWidth , offsetWidth  } = slide1;
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) slide1.style.transform = currentTransform;
            if (currentWebKitTransform) slide1.style.webkitTransform = currentWebKitTransform;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for(let i = 0; i < snapGrid.length; i += 1){
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }
    if (isVirtual && params.loop) {
        const size = slidesSizesGrid[0] + spaceBetween;
        if (params.slidesPerGroup > 1) {
            const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
            const groupSize = size * params.slidesPerGroup;
            for(let i = 0; i < groups; i += 1)snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
        for(let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1){
            if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
            slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
            swiper.virtualSize += size;
        }
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
        slides.filter((_, slideIndex)=>{
            if (!params.cssMode || params.loop) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).forEach((slideEl)=>{
            slideEl.style[key] = `${spaceBetween}px`;
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap)=>{
            if (snap <= 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
            snapGrid.forEach((snap, snapIndex)=>{
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex)=>{
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        (0, _utilsMjs.s)(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
        (0, _utilsMjs.s)(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    swiper.emit("slidesUpdated");
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
            if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
    }
}
function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") swiper.setTransition(speed);
    else if (speed === true) swiper.setTransition(swiper.params.speed);
    const getSlideByIndex = (index)=>{
        if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
        return swiper.slides[index];
    };
    // Find slides currently in view
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide2)=>{
            activeSlides.push(slide2);
        });
        else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        }
    } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
    // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
    }
    // Update Height
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    // eslint-disable-next-line
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
}
function updateSlidesProgress(translate1) {
    if (translate1 === void 0) translate1 = this && this.translate || 0;
    const swiper = this;
    const params = swiper.params;
    const { slides , rtlTranslate: rtl , snapGrid  } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
    let offsetCenter = -translate1;
    if (rtl) offsetCenter = translate1;
    // Visible Slides
    slides.forEach((slideEl)=>{
        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
    });
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
    for(let i = 0; i < slides.length; i += 1){
        const slide3 = slides[i];
        let slideOffset = slide3.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide3.swiperSlideSize + spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide3.swiperSlideSize + spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
            swiper.visibleSlides.push(slide3);
            swiper.visibleSlidesIndexes.push(i);
            slides[i].classList.add(params.slideVisibleClass);
        }
        if (isFullyVisible) slides[i].classList.add(params.slideFullyVisibleClass);
        slide3.progress = rtl ? -slideProgress : slideProgress;
        slide3.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
}
function updateProgress(translate2) {
    const swiper = this;
    if (typeof translate2 === "undefined") {
        const multiplier = swiper.rtlTranslate ? -1 : 1;
        // eslint-disable-next-line
        translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress , isBeginning , isEnd , progressLoop  } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate2 - swiper.minTranslate()) / translatesDiff;
        const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
        const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
        isBeginning = isBeginningRounded || progress <= 0;
        isEnd = isEndRounded || progress >= 1;
        if (isBeginningRounded) progress = 0;
        if (isEndRounded) progress = 1;
    }
    if (params.loop) {
        const firstSlideIndex = swiper.getSlideIndexByData(0);
        const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
        const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
        const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
        const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
        const translateAbs = Math.abs(translate2);
        if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
        else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
        if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
        progress,
        progressLoop,
        isBeginning,
        isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
    if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
    swiper.emit("progress", progress);
}
function updateSlidesClasses() {
    const swiper = this;
    const { slides , params , slidesEl , activeIndex  } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector)=>{
        return (0, _utilsMjs.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    slides.forEach((slideEl)=>{
        slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
    });
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
        if (params.loop) {
            let slideIndex = activeIndex - swiper.virtual.slidesBefore;
            if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
            if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
            activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
        } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    } else if (gridEnabled) {
        activeSlide = slides.filter((slideEl)=>slideEl.column === activeIndex)[0];
        nextSlide = slides.filter((slideEl)=>slideEl.column === activeIndex + 1)[0];
        prevSlide = slides.filter((slideEl)=>slideEl.column === activeIndex - 1)[0];
    } else activeSlide = slides[activeIndex];
    if (activeSlide) {
        // Active classes
        activeSlide.classList.add(params.slideActiveClass);
        if (gridEnabled) {
            if (nextSlide) nextSlide.classList.add(params.slideNextClass);
            if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
        } else {
            // Next Slide
            nextSlide = (0, _utilsMjs.p)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !nextSlide) nextSlide = slides[0];
            if (nextSlide) nextSlide.classList.add(params.slideNextClass);
            // Prev Slide
            prevSlide = (0, _utilsMjs.q)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            params.loop;
            if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
        }
    }
    swiper.emitSlidesClasses();
}
const processLazyPreloader = (swiper, imageEl)=>{
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = ()=>swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
        let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        if (!lazyEl && swiper.isElement) {
            if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            else // init later
            requestAnimationFrame(()=>{
                if (slideEl.shadowRoot) {
                    lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                    if (lazyEl) lazyEl.remove();
                }
            });
        }
        if (lazyEl) lazyEl.remove();
    }
};
const unlazy = (swiper, index)=>{
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute("loading");
};
const preload = (swiper)=>{
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
        const activeColumn = activeIndex;
        const preloadColumns = [
            activeColumn - amount
        ];
        preloadColumns.push(...Array.from({
            length: amount
        }).map((_, i)=>{
            return activeColumn + slidesPerView + i;
        }));
        swiper.slides.forEach((slideEl, i)=>{
            if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
        });
        return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) for(let i1 = activeIndex - amount; i1 <= slideIndexLastInView + amount; i1 += 1){
        const realIndex = (i1 % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
    else {
        for(let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1)if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
    }
};
function getActiveIndexByTranslate(swiper) {
    const { slidesGrid , params  } = swiper;
    const translate3 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for(let i = 0; i < slidesGrid.length; i += 1){
        if (typeof slidesGrid[i + 1] !== "undefined") {
            if (translate3 >= slidesGrid[i] && translate3 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
            else if (translate3 >= slidesGrid[i] && translate3 < slidesGrid[i + 1]) activeIndex = i + 1;
        } else if (translate3 >= slidesGrid[i]) activeIndex = i;
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
    }
    return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate4 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { snapGrid , params , activeIndex: previousIndex , realIndex: previousRealIndex , snapIndex: previousSnapIndex  } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex)=>{
        let realIndex = aIndex - swiper.virtual.slidesBefore;
        if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
        if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
        return realIndex;
    };
    if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
    if (snapGrid.indexOf(translate4) >= 0) snapIndex = snapGrid.indexOf(translate4);
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit("snapIndexChange");
        }
        return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.realIndex = getVirtualRealIndex(activeIndex);
        return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    // Get real index
    let realIndex1;
    if (swiper.virtual && params.virtual.enabled && params.loop) realIndex1 = getVirtualRealIndex(activeIndex);
    else if (gridEnabled) {
        const firstSlideInColumn = swiper.slides.filter((slideEl)=>slideEl.column === activeIndex)[0];
        let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
        if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
        realIndex1 = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
        const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
        if (slideIndex) realIndex1 = parseInt(slideIndex, 10);
        else realIndex1 = activeIndex;
    } else realIndex1 = activeIndex;
    Object.assign(swiper, {
        previousSnapIndex,
        snapIndex,
        previousRealIndex,
        realIndex: realIndex1,
        previousIndex,
        activeIndex
    });
    if (swiper.initialized) preload(swiper);
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        if (previousRealIndex !== realIndex1) swiper.emit("realIndexChange");
        swiper.emit("slideChange");
    }
}
function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide4 = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide4 && swiper.isElement && path && path.length > 1 && path.includes(el)) [
        ...path.slice(path.indexOf(el) + 1, path.length)
    ].forEach((pathEl)=>{
        if (!slide4 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide4 = pathEl;
    });
    let slideFound = false;
    let slideIndex;
    if (slide4) {
        for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide4) {
            slideFound = true;
            slideIndex = i;
            break;
        }
    }
    if (slide4 && slideFound) {
        swiper.clickedSlide = slide4;
        if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide4.getAttribute("data-swiper-slide-index"), 10);
        else swiper.clickedIndex = slideIndex;
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}
var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
};
function getSwiperTranslate(axis) {
    if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
    const swiper = this;
    const { params , rtlTranslate: rtl , translate: translate5 , wrapperEl  } = swiper;
    if (params.virtualTranslate) return rtl ? -translate5 : translate5;
    if (params.cssMode) return translate5;
    let currentTranslate = (0, _utilsMjs.i)(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}
function setTranslate(translate6, byController) {
    const swiper = this;
    const { rtlTranslate: rtl , params , wrapperEl , progress  } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate6 : translate6;
    else y = translate6;
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    else if (!params.virtualTranslate) {
        if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment();
        else y -= swiper.cssOverflowAdjustment();
        wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }
    // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (translate6 - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate6);
    swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
    return -this.snapGrid[0];
}
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate7, speed, runCallbacks, translateBounds, internal) {
    if (translate7 === void 0) translate7 = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (translateBounds === void 0) translateBounds = true;
    const swiper = this;
    const { params , wrapperEl  } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) return false;
    const minTranslate1 = swiper.minTranslate();
    const maxTranslate1 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate7 > minTranslate1) newTranslate = minTranslate1;
    else if (translateBounds && translate7 < maxTranslate1) newTranslate = maxTranslate1;
    else newTranslate = translate7;
    // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
        else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsMjs.r)({
                    swiper,
                    targetPosition: -newTranslate,
                    side: isH ? "left" : "top"
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? "left" : "top"]: -newTranslate,
                behavior: "smooth"
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.emit("transitionEnd");
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.emit("transitionStart");
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;
                if (runCallbacks) swiper.emit("transitionEnd");
            };
            swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}
var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
};
function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
        swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
        swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
    }
    swiper.emit("setTransition", duration, byController);
}
function transitionEmit(_ref) {
    let { swiper , runCallbacks , direction , step  } = _ref;
    const { activeIndex , previousIndex  } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = "next";
        else if (activeIndex < previousIndex) dir = "prev";
        else dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === "reset") {
            swiper.emit(`slideResetTransition${step}`);
            return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === "next") swiper.emit(`slideNextTransition${step}`);
        else swiper.emit(`slidePrevTransition${step}`);
    }
}
function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params  } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) swiper.updateAutoHeight();
    transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: "Start"
    });
}
function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params  } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: "End"
    });
}
var transition = {
    setTransition,
    transitionStart,
    transitionEnd
};
function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (typeof index === "string") index = parseInt(index, 10);
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const { params , snapGrid , slidesGrid , previousIndex , activeIndex , rtlTranslate: rtl , wrapperEl , enabled  } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial || swiper.destroyed) return false;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate8 = -snapGrid[snapIndex];
    // Normalize slideIndex
    if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
        const normalizedTranslate = -Math.floor(translate8 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
            else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
        } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && (rtl ? translate8 > swiper.translate && translate8 > swiper.minTranslate() : translate8 < swiper.translate && translate8 < swiper.minTranslate())) return false;
        if (!swiper.allowSlidePrev && translate8 > swiper.translate && translate8 > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false;
        }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
    // Update progress
    swiper.updateProgress(translate8);
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset";
    // Update Index
    if (rtl && -translate8 === swiper.translate || !rtl && translate8 === swiper.translate) {
        swiper.updateActiveIndex(slideIndex);
        // Update Height
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== "slide") swiper.setTranslate(translate8);
        if (direction !== "reset") {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate8 : -translate8;
        if (speed === 0) {
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = "none";
                swiper._immediateVirtual = true;
            }
            if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                swiper._cssModeVirtualInitialSet = true;
                requestAnimationFrame(()=>{
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                });
            } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
            if (isVirtual) requestAnimationFrame(()=>{
                swiper.wrapperEl.style.scrollSnapType = "";
                swiper._immediateVirtual = false;
            });
        } else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsMjs.r)({
                    swiper,
                    targetPosition: t,
                    side: isH ? "left" : "top"
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? "left" : "top"]: t,
                behavior: "smooth"
            });
        }
        return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate8);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
    else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
        };
        swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}
function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (typeof index === "string") {
        const indexAsNumber = parseInt(index, 10);
        index = indexAsNumber;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
        if (swiper.virtual && swiper.params.virtual.enabled) // eslint-disable-next-line
        newIndex = newIndex + swiper.virtual.slidesBefore;
        else {
            let targetSlideIndex;
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                targetSlideIndex = swiper.slides.filter((slideEl)=>slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
            } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
            const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
            const { centeredSlides  } = swiper.params;
            let slidesPerView = swiper.params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic();
            else {
                slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView = slidesPerView + 1;
            }
            let needLoopFix = cols - targetSlideIndex < slidesPerView;
            if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
            if (needLoopFix) {
                const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                swiper.loopFix({
                    direction,
                    slideTo: true,
                    activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                    slideRealIndex: direction === "next" ? swiper.realIndex : undefined
                });
            }
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                newIndex = swiper.slides.filter((slideEl)=>slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
            } else newIndex = swiper.getSlideIndexByData(newIndex);
        }
    }
    requestAnimationFrame(()=>{
        swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
}
/* eslint no-unused-vars: "off" */ function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { enabled , params , animating  } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: "next"
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
        if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
            requestAnimationFrame(()=>{
                swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
            });
            return true;
        }
    }
    if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params , snapGrid , slidesGrid , rtlTranslate , enabled , animating  } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: "prev"
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate9 = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate9);
    const normalizedSnapGrid = snapGrid.map((val)=>normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex)=>{
            if (normalizedTranslate >= snap) // prevSnap = snap;
            prevSnapIndex = snapIndex;
        });
        if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
        requestAnimationFrame(()=>{
            swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        });
        return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    if (swiper.destroyed) return;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (threshold === void 0) threshold = 0.5;
    const swiper = this;
    if (swiper.destroyed) return;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate10 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate10 >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate10 - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate10 - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
    const swiper = this;
    if (swiper.destroyed) return;
    const { params , slidesEl  } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
        if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = swiper.getSlideIndex((0, _utilsMjs.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                (0, _utilsMjs.n)(()=>{
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = swiper.getSlideIndex((0, _utilsMjs.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
            (0, _utilsMjs.n)(()=>{
                swiper.slideTo(slideToIndex);
            });
        } else swiper.slideTo(slideToIndex);
    } else swiper.slideTo(slideToIndex);
}
var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
};
function loopCreate(slideRealIndex) {
    const swiper = this;
    const { params , slidesEl  } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    const initSlides = ()=>{
        const slides = (0, _utilsMjs.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
        slides.forEach((el, index)=>{
            el.setAttribute("data-swiper-slide-index", index);
        });
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides)=>{
        for(let i = 0; i < amountOfSlides; i += 1){
            const slideEl = swiper.isElement ? (0, _utilsMjs.c)("swiper-slide", [
                params.slideBlankClass
            ]) : (0, _utilsMjs.c)("div", [
                params.slideClass,
                params.slideBlankClass
            ]);
            swiper.slidesEl.append(slideEl);
        }
    };
    if (shouldFillGroup) {
        if (params.loopAddBlankSlides) {
            const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
            addBlankSlides(slidesToAdd);
            swiper.recalcSlides();
            swiper.updateSlides();
        } else (0, _utilsMjs.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        initSlides();
    } else if (shouldFillGrid) {
        if (params.loopAddBlankSlides) {
            const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
            addBlankSlides(slidesToAdd);
            swiper.recalcSlides();
            swiper.updateSlides();
        } else (0, _utilsMjs.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        initSlides();
    } else initSlides();
    swiper.loopFix({
        slideRealIndex,
        direction: params.centeredSlides ? undefined : "next"
    });
}
function loopFix(_temp) {
    let { slideRealIndex , slideTo: slideTo1 = true , direction , setTranslate: setTranslate1 , activeSlideIndex , byController , byMousewheel  } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit("beforeLoopFix");
    const { slides , allowSlidePrev , allowSlideNext , slidesEl , params  } = swiper;
    const { centeredSlides  } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
        if (slideTo1) {
            if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
            else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
            else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        swiper.emit("loopFix");
        return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic();
    else {
        slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) slidesPerView = slidesPerView + 1;
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) (0, _utilsMjs.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    else if (gridEnabled && params.grid.fill === "row") (0, _utilsMjs.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el)=>el.classList.contains(params.slideActiveClass))[0]);
    else activeIndex = activeSlideIndex;
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate1 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    // prepend last slides before start
    if (activeColIndexWithShift < loopedSlides) {
        slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
        for(let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1){
            const index = i - Math.floor(i / cols) * cols;
            if (gridEnabled) {
                const colIndexToPrepend = cols - index - 1;
                for(let i = slides.length - 1; i >= 0; i -= 1)if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
            // slides.forEach((slide, slideIndex) => {
            //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
            // });
            } else prependSlidesIndexes.push(cols - index - 1);
        }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
        slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
        for(let i = 0; i < slidesAppended; i += 1){
            const index = i - Math.floor(i / cols) * cols;
            if (gridEnabled) slides.forEach((slide5, slideIndex)=>{
                if (slide5.column === index) appendSlidesIndexes.push(slideIndex);
            });
            else appendSlidesIndexes.push(index);
        }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
    if (isPrev) prependSlidesIndexes.forEach((index)=>{
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
    });
    if (isNext) appendSlidesIndexes.forEach((index)=>{
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
    });
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") swiper.updateSlides();
    else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach((slide6, slideIndex)=>{
        swiper.grid.updateSlide(slideIndex, slide6, swiper.slides);
    });
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    if (slideTo1) {
        if (prependSlidesIndexes.length > 0 && isPrev) {
            if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
                else {
                    swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                    if (setTranslate1) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else if (setTranslate1) {
                const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                swiper.touchEventsData.currentTranslate = swiper.translate;
            }
        } else if (appendSlidesIndexes.length > 0 && isNext) {
            if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
                else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate1) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
        }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
        const loopParams = {
            slideRealIndex,
            direction,
            setTranslate: setTranslate1,
            activeSlideIndex,
            byController: true
        };
        if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c)=>{
            if (!c.destroyed && c.params.loop) c.loopFix({
                ...loopParams,
                slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo1 : false
            });
        });
        else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
            ...loopParams,
            slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo1 : false
        });
    }
    swiper.emit("loopFix");
}
function loopDestroy() {
    const swiper = this;
    const { params , slidesEl  } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl)=>{
        const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
        newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl)=>{
        slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl)=>{
        slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
    loopCreate,
    loopFix,
    loopDestroy
};
function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) swiper.__preventObserver__ = true;
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
}
function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    if (swiper.isElement) swiper.__preventObserver__ = true;
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
}
var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
};
// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
    if (base === void 0) base = this;
    function __closestFrom(el) {
        if (!el || el === (0, _ssrWindowEsmMjs.g)() || el === (0, _ssrWindowEsmMjs.a)()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        if (!found && !el.getRootNode) return null;
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
    const window = (0, _ssrWindowEsmMjs.a)();
    const { params  } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === "prevent") {
            event.preventDefault();
            return true;
        }
        return false;
    }
    return true;
}
function onTouchStart(event) {
    const swiper = this;
    const document = (0, _ssrWindowEsmMjs.g)();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    const data = swiper.touchEventsData;
    if (e.type === "pointerdown") {
        if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
        data.pointerId = e.pointerId;
    } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
    if (e.type === "touchstart") {
        // don't proceed touch event
        preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
        return;
    }
    const { params , touches , enabled  } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === "mouse") return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
    let targetEl = e.target;
    if (params.touchEventsTarget === "wrapper") {
        if (!swiper.wrapperEl.contains(targetEl)) return;
    }
    if ("which" in e && e.which === 3) return;
    if ("button" in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    // eslint-disable-next-line
    const eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    if (!preventEdgeSwipe(swiper, e, startX)) return;
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = (0, _utilsMjs.d)();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
        preventDefault = false;
        if (targetEl.nodeName === "SELECT") data.isTouched = false;
    }
    if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
    swiper.emit("touchStart", e);
}
function onTouchMove(event) {
    const document = (0, _ssrWindowEsmMjs.g)();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params , touches , rtlTranslate: rtl , enabled  } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === "mouse") return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (e.type === "pointermove") {
        if (data.touchId !== null) return; // return from pointer if we use touch
        const id = e.pointerId;
        if (id !== data.pointerId) return;
    }
    let targetTouch;
    if (e.type === "touchmove") {
        targetTouch = [
            ...e.changedTouches
        ].filter((t)=>t.identifier === data.touchId)[0];
        if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    } else targetTouch = e;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
        return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = (0, _utilsMjs.d)();
        }
        return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) // Vertical
        {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
    }
    if (document.activeElement) {
        if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === "undefined") {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
        else // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
    }
    if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
    if (typeof data.startMoving === "undefined") {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
    }
    if (data.isScrolling) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) return;
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
        diff = Math.abs(diff) * (rtl ? 1 : -1);
        touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
        diff = -diff;
        touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
    if (!data.isMoved) {
        if (isLoop && allowLoopFix) swiper.loopFix({
            direction: swiper.swipeDirection
        });
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) {
            const evt = new window.CustomEvent("transitionend", {
                bubbles: true,
                cancelable: true
            });
            swiper.wrapperEl.dispatchEvent(evt);
        }
        data.allowMomentumBounce = false;
        // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
        swiper.emit("sliderFirstMove", e);
    }
    let loopFixed;
    new Date().getTime();
    if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
        Object.assign(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY,
            startTranslate: data.currentTranslate
        });
        data.loopSwapReset = true;
        data.startTranslate = data.currentTranslate;
        return;
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) resistanceRatio = 0;
    if (diff > 0) {
        if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) swiper.loopFix({
            direction: "prev",
            setTranslate: true,
            activeSlideIndex: 0
        });
        if (data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
    } else if (diff < 0) {
        if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) swiper.loopFix({
            direction: "next",
            setTranslate: true,
            activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
        if (data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
    }
    if (disableParentSwiper) e.preventedByNestedSwiper = true;
    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
    // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return;
    // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let targetTouch;
    const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
    if (!isTouchEvent) {
        if (data.touchId !== null) return; // return from pointer if we use touch
        if (e.pointerId !== data.pointerId) return;
        targetTouch = e;
    } else {
        targetTouch = [
            ...e.changedTouches
        ].filter((t)=>t.identifier === data.touchId)[0];
        if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    }
    if ([
        "pointercancel",
        "pointerout",
        "pointerleave",
        "contextmenu"
    ].includes(e.type)) {
        const proceed = [
            "pointercancel",
            "contextmenu"
        ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
        if (!proceed) return;
    }
    data.pointerId = null;
    data.touchId = null;
    const { params , touches , rtlTranslate: rtl , slidesGrid , enabled  } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === "mouse") return;
    if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
    // Time diff
    const touchEndTime = (0, _utilsMjs.d)();
    const timeDiff = touchEndTime - data.touchStartTime;
    // Tap, doubleTap, Click
    if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
        swiper.emit("tap click", e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
    }
    data.lastClickTime = (0, _utilsMjs.d)();
    (0, _utilsMjs.n)(()=>{
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
    else currentPos = -data.currentTranslate;
    if (params.cssMode) return;
    if (params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
            currentPos
        });
        return;
    }
    // Find current slide
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== "undefined") {
            if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        } else if (swipeToLast || currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
        if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        else if (swiper.isEnd) rewindFirstIndex = 0;
    }
    // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === "next") {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === "prev") {
            if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex);
            else swiper.slideTo(stopIndex);
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
            if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
    }
}
function onResize() {
    const swiper = this;
    const { params , el  } = swiper;
    if (el && el.offsetWidth === 0) return;
    // Breakpoints
    if (params.breakpoints) swiper.setBreakpoint();
    // Save locks
    const { allowSlideNext , allowSlidePrev , snapGrid  } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true);
    else swiper.slideTo(swiper.activeIndex, 0, false, true);
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        clearTimeout(swiper.autoplay.resizeTimeout);
        swiper.autoplay.resizeTimeout = setTimeout(()=>{
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
        }, 500);
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}
function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}
function onScroll() {
    const swiper = this;
    const { wrapperEl , rtlTranslate , enabled  } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
    else swiper.translate = -wrapperEl.scrollTop;
    // eslint-disable-next-line
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
    swiper.update();
}
function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded) return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
}
const events = (swiper, method)=>{
    const document = (0, _ssrWindowEsmMjs.g)();
    const { params , el , wrapperEl , device  } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    // Touch Events
    document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
        passive: false,
        capture
    });
    el[domMethod]("touchstart", swiper.onTouchStart, {
        passive: false
    });
    el[domMethod]("pointerdown", swiper.onTouchStart, {
        passive: false
    });
    document[domMethod]("touchmove", swiper.onTouchMove, {
        passive: false,
        capture
    });
    document[domMethod]("pointermove", swiper.onTouchMove, {
        passive: false,
        capture
    });
    document[domMethod]("touchend", swiper.onTouchEnd, {
        passive: true
    });
    document[domMethod]("pointerup", swiper.onTouchEnd, {
        passive: true
    });
    document[domMethod]("pointercancel", swiper.onTouchEnd, {
        passive: true
    });
    document[domMethod]("touchcancel", swiper.onTouchEnd, {
        passive: true
    });
    document[domMethod]("pointerout", swiper.onTouchEnd, {
        passive: true
    });
    document[domMethod]("pointerleave", swiper.onTouchEnd, {
        passive: true
    });
    document[domMethod]("contextmenu", swiper.onTouchEnd, {
        passive: true
    });
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
    if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
    // Resize handler
    if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    else swiper[swiperMethod]("observerUpdate", onResize, true);
    // Images loader
    el[domMethod]("load", swiper.onLoad, {
        capture: true
    });
};
function attachEvents() {
    const swiper = this;
    const { params  } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, "on");
}
function detachEvents() {
    const swiper = this;
    events(swiper, "off");
}
var events$1 = {
    attachEvents,
    detachEvents
};
const isGridEnabled = (swiper, params)=>{
    return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
    const swiper = this;
    const { realIndex , initialized , params , el  } = swiper;
    const breakpoints1 = params.breakpoints;
    if (!breakpoints1 || breakpoints1 && Object.keys(breakpoints1).length === 0) return;
    // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(breakpoints1, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints1 ? breakpoints1[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        el.classList.add(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    }
    // Toggle navigation, pagination, scrollbar
    [
        "navigation",
        "pagination",
        "scrollbar"
    ].forEach((prop)=>{
        if (typeof breakpointParams[prop] === "undefined") return;
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
        if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
        if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) swiper.changeDirection();
    (0, _utilsMjs.u)(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
        if (needsReLoop) {
            swiper.loopDestroy();
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        } else if (!wasLoop && hasLoop) {
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        } else if (wasLoop && !hasLoop) swiper.loopDestroy();
    }
    swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base, containerEl) {
    if (base === void 0) base = "window";
    if (!breakpoints2 || base === "container" && !containerEl) return undefined;
    let breakpoint = false;
    const window = (0, _ssrWindowEsmMjs.a)();
    const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point)=>{
        if (typeof point === "string" && point.indexOf("@") === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value,
                point
            };
        }
        return {
            value: point,
            point
        };
    });
    points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10));
    for(let i = 0; i < points.length; i += 1){
        const { point , value  } = points[i];
        if (base === "window") {
            if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
        } else if (value <= containerEl.clientWidth) breakpoint = point;
    }
    return breakpoint || "max";
}
var breakpoints = {
    setBreakpoint,
    getBreakpoint
};
function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item)=>{
        if (typeof item === "object") Object.keys(item).forEach((classNames)=>{
            if (item[classNames]) resultClasses.push(prefix + classNames);
        });
        else if (typeof item === "string") resultClasses.push(prefix + item);
    });
    return resultClasses;
}
function addClasses() {
    const swiper = this;
    const { classNames , params , rtl , el , device  } = swiper;
    // prettier-ignore
    const suffixes = prepareClasses([
        "initialized",
        params.direction,
        {
            "free-mode": swiper.params.freeMode && params.freeMode.enabled
        },
        {
            "autoheight": params.autoHeight
        },
        {
            "rtl": rtl
        },
        {
            "grid": params.grid && params.grid.rows > 1
        },
        {
            "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
        },
        {
            "android": device.android
        },
        {
            "ios": device.ios
        },
        {
            "css-mode": params.cssMode
        },
        {
            "centered": params.cssMode && params.centeredSlides
        },
        {
            "watch-progress": params.watchSlidesProgress
        }
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
}
function removeClasses() {
    const swiper = this;
    const { el , classNames  } = swiper;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
}
var classes = {
    addClasses,
    removeClasses
};
function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked , params  } = swiper;
    const { slidesOffsetBefore  } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else swiper.isLocked = swiper.snapGrid.length === 1;
    if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
    if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
}
var checkOverflow$1 = {
    checkOverflow
};
var defaults = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
        if (obj === void 0) obj = {};
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== "object" || moduleParams === null) {
            (0, _utilsMjs.u)(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) params[moduleParamName] = {
            enabled: true
        };
        if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
        if ([
            "pagination",
            "scrollbar"
        ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
        if (!(moduleParamName in params && "enabled" in moduleParams)) {
            (0, _utilsMjs.u)(allModulesParams, obj);
            return;
        }
        if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
        if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
        };
        (0, _utilsMjs.u)(allModulesParams, obj);
    };
}
/* eslint no-param-reassign: "off" */ const prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
};
const extendedDefaults = {};
class Swiper {
    constructor(){
        let el;
        let params;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0];
        else [el, params] = args;
        if (!params) params = {};
        params = (0, _utilsMjs.u)({}, params);
        if (el && !params.el) params.el = el;
        const document = (0, _ssrWindowEsmMjs.g)();
        if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
            const swipers = [];
            document.querySelectorAll(params.el).forEach((containerEl)=>{
                const newParams = (0, _utilsMjs.u)({}, params, {
                    el: containerEl
                });
                swipers.push(new Swiper(newParams));
            });
            // eslint-disable-next-line no-constructor-return
            return swipers;
        }
        // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = getSupport();
        swiper.device = getDevice({
            userAgent: params.userAgent
        });
        swiper.browser = getBrowser();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [
            ...swiper.__modules__
        ];
        if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
        const allModulesParams = {};
        swiper.modules.forEach((mod)=>{
            mod({
                params,
                swiper,
                extendParams: moduleExtendParams(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        });
        // Extend defaults with modules params
        const swiperParams = (0, _utilsMjs.u)({}, defaults, allModulesParams);
        // Extend defaults with passed params
        swiper.params = (0, _utilsMjs.u)({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = (0, _utilsMjs.u)({}, swiper.params);
        swiper.passedParams = (0, _utilsMjs.u)({}, params);
        // add event listeners
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
            swiper.on(eventName, swiper.params.on[eventName]);
        });
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
        // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el,
            // Classes
            classNames: [],
            // Slides
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal () {
                return swiper.params.direction === "horizontal";
            },
            isVertical () {
                return swiper.params.direction === "vertical";
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            cssOverflowAdjustment () {
                // Returns 0 unless `translate` is > 2**23
                // Should be subtracted from css values to prevent overflow
                return Math.trunc(this.translate / 8388608) * 8388608;
            },
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: 0,
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                startMoving: undefined,
                pointerId: null,
                touchId: null
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        });
        swiper.emit("_swiper");
        // Init
        if (swiper.params.init) swiper.init();
        // Return app instance
        // eslint-disable-next-line no-constructor-return
        return swiper;
    }
    getDirectionLabel(property) {
        if (this.isHorizontal()) return property;
        // prettier-ignore
        return ({
            "width": "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            "marginRight": "marginBottom"
        })[property];
    }
    getSlideIndex(slideEl) {
        const { slidesEl , params  } = this;
        const slides = (0, _utilsMjs.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
        const firstSlideIndex = (0, _utilsMjs.g)(slides[0]);
        return (0, _utilsMjs.g)(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
        return this.getSlideIndex(this.slides.filter((slideEl)=>slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
    }
    recalcSlides() {
        const swiper = this;
        const { slidesEl , params  } = swiper;
        swiper.slides = (0, _utilsMjs.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) swiper.setGrabCursor();
        swiper.emit("enable");
    }
    disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
        swiper.emit("disable");
    }
    setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(" ").filter((className)=>{
            return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
        const swiper = this;
        if (swiper.destroyed) return "";
        return slideEl.className.split(" ").filter((className)=>{
            return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(" ");
    }
    emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.forEach((slideEl)=>{
            const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl,
                classNames
            });
            swiper.emit("_slideClass", slideEl, classNames);
        });
        swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
        if (view === void 0) view = "current";
        if (exact === void 0) exact = false;
        const swiper = this;
        const { params , slides , slidesGrid , slidesSizesGrid , size: swiperSize , activeIndex  } = swiper;
        let spv = 1;
        if (typeof params.slidesPerView === "number") return params.slidesPerView;
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
            let breakLoop;
            for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                slideSize += Math.ceil(slides[i].swiperSlideSize);
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for(let i2 = activeIndex - 1; i2 >= 0; i2 -= 1)if (slides[i2] && !breakLoop) {
                slideSize += slides[i2].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else {
            // eslint-disable-next-line
            if (view === "current") for(let i = activeIndex + 1; i < slides.length; i += 1){
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            }
            else // previous
            for(let i3 = activeIndex - 1; i3 >= 0; i3 -= 1){
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i3] < swiperSize;
                if (slideInView) spv += 1;
            }
        }
        return spv;
    }
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const { snapGrid , params  } = swiper;
        // Breakpoints
        if (params.breakpoints) swiper.setBreakpoint();
        [
            ...swiper.el.querySelectorAll('[loading="lazy"]')
        ].forEach((imageEl)=>{
            if (imageEl.complete) processLazyPreloader(swiper, imageEl);
        });
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate2() {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        let translated;
        if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
            setTranslate2();
            if (params.autoHeight) swiper.updateAutoHeight();
        } else {
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                translated = swiper.slideTo(slides.length - 1, 0, false, true);
            } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (!translated) setTranslate2();
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) needUpdate = true;
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) // eslint-disable-next-line
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
        if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
        swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.forEach((slideEl)=>{
            if (newDirection === "vertical") slideEl.style.width = "";
            else slideEl.style.height = "";
        });
        swiper.emit("changeDirection");
        if (needUpdate) swiper.update();
        return swiper;
    }
    changeLanguageDirection(direction) {
        const swiper = this;
        if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
        swiper.rtl = direction === "rtl";
        swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
        if (swiper.rtl) {
            swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = "rtl";
        } else {
            swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = "ltr";
        }
        swiper.update();
    }
    mount(element) {
        const swiper = this;
        if (swiper.mounted) return true;
        // Find el
        let el = element || swiper.params.el;
        if (typeof el === "string") el = document.querySelector(el);
        if (!el) return false;
        el.swiper = swiper;
        if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
        const getWrapperSelector = ()=>{
            return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
        };
        const getWrapper = ()=>{
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = el.shadowRoot.querySelector(getWrapperSelector());
                // Children needs to return slot items
                return res;
            }
            return (0, _utilsMjs.e)(el, getWrapperSelector())[0];
        };
        // Find Wrapper
        let wrapperEl = getWrapper();
        if (!wrapperEl && swiper.params.createElements) {
            wrapperEl = (0, _utilsMjs.c)("div", swiper.params.wrapperClass);
            el.append(wrapperEl);
            (0, _utilsMjs.e)(el, `.${swiper.params.slideClass}`).forEach((slideEl)=>{
                wrapperEl.append(slideEl);
            });
        }
        Object.assign(swiper, {
            el,
            wrapperEl,
            slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
            hostEl: swiper.isElement ? el.parentNode.host : el,
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === "rtl" || (0, _utilsMjs.o)(el, "direction") === "rtl",
            rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || (0, _utilsMjs.o)(el, "direction") === "rtl"),
            wrongRTL: (0, _utilsMjs.o)(wrapperEl, "display") === "-webkit-box"
        });
        return true;
    }
    init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit("beforeInit");
        // Set breakpoint
        if (swiper.params.breakpoints) swiper.setBreakpoint();
        // Add Classes
        swiper.addClasses();
        // Update size
        swiper.updateSize();
        // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
        // Slide To Initial Slide
        if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
        else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        // Create loop
        if (swiper.params.loop) swiper.loopCreate();
        // Attach events
        swiper.attachEvents();
        const lazyElements = [
            ...swiper.el.querySelectorAll('[loading="lazy"]')
        ];
        if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
        lazyElements.forEach((imageEl)=>{
            if (imageEl.complete) processLazyPreloader(swiper, imageEl);
            else imageEl.addEventListener("load", (e)=>{
                processLazyPreloader(swiper, e.target);
            });
        });
        preload(swiper);
        // Init Flag
        swiper.initialized = true;
        preload(swiper);
        // Emit
        swiper.emit("init");
        swiper.emit("afterInit");
        return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) deleteInstance = true;
        if (cleanStyles === void 0) cleanStyles = true;
        const swiper = this;
        const { params , el , wrapperEl , slides  } = swiper;
        if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
        swiper.emit("beforeDestroy");
        // Init Flag
        swiper.initialized = false;
        // Detach events
        swiper.detachEvents();
        // Destroy loop
        if (params.loop) swiper.loopDestroy();
        // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            el.removeAttribute("style");
            wrapperEl.removeAttribute("style");
            if (slides && slides.length) slides.forEach((slideEl)=>{
                slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                slideEl.removeAttribute("style");
                slideEl.removeAttribute("data-swiper-slide-index");
            });
        }
        swiper.emit("destroy");
        // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach((eventName)=>{
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            swiper.el.swiper = null;
            (0, _utilsMjs.v)(swiper);
        }
        swiper.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        (0, _utilsMjs.u)(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return defaults;
    }
    static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m)=>Swiper.installModule(m));
            return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
    }
}
Object.keys(prototypes).forEach((prototypeGroup)=>{
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod)=>{
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
});
Swiper.use([
    Resize,
    Observer
]);

},{"./ssr-window.esm.mjs":"th8PY","./utils.mjs":"9mU7V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"th8PY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>getWindow);
parcelHelpers.export(exports, "g", ()=>getDocument);
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */ /* eslint-disable no-param-reassign */ function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target, src) {
    if (target === void 0) target = {};
    if (src === void 0) src = {};
    Object.keys(src).forEach((key)=>{
        if (typeof target[key] === "undefined") target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
    });
}
const ssrDocument = {
    body: {},
    addEventListener () {},
    removeEventListener () {},
    activeElement: {
        blur () {},
        nodeName: ""
    },
    querySelector () {
        return null;
    },
    querySelectorAll () {
        return [];
    },
    getElementById () {
        return null;
    },
    createEvent () {
        return {
            initEvent () {}
        };
    },
    createElement () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute () {},
            getElementsByTagName () {
                return [];
            }
        };
    },
    createElementNS () {
        return {};
    },
    importNode () {
        return null;
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState () {},
        pushState () {},
        go () {},
        back () {}
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener () {},
    removeEventListener () {},
    getComputedStyle () {
        return {
            getPropertyValue () {
                return "";
            }
        };
    },
    Image () {},
    Date () {},
    screen: {},
    setTimeout () {},
    clearTimeout () {},
    matchMedia () {
        return {};
    },
    requestAnimationFrame (callback) {
        if (typeof setTimeout === "undefined") {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame (id) {
        if (typeof setTimeout === "undefined") return;
        clearTimeout(id);
    }
};
function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9mU7V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>elementParents);
parcelHelpers.export(exports, "b", ()=>elementOffset);
parcelHelpers.export(exports, "c", ()=>createElement);
parcelHelpers.export(exports, "d", ()=>now);
parcelHelpers.export(exports, "e", ()=>elementChildren);
parcelHelpers.export(exports, "f", ()=>elementOuterSize);
parcelHelpers.export(exports, "g", ()=>elementIndex);
parcelHelpers.export(exports, "h", ()=>classesToTokens);
parcelHelpers.export(exports, "i", ()=>getTranslate);
parcelHelpers.export(exports, "j", ()=>elementTransitionEnd);
parcelHelpers.export(exports, "k", ()=>isObject);
parcelHelpers.export(exports, "l", ()=>getSlideTransformEl);
parcelHelpers.export(exports, "m", ()=>makeElementsArray);
parcelHelpers.export(exports, "n", ()=>nextTick);
parcelHelpers.export(exports, "o", ()=>elementStyle);
parcelHelpers.export(exports, "p", ()=>elementNextAll);
parcelHelpers.export(exports, "q", ()=>elementPrevAll);
parcelHelpers.export(exports, "r", ()=>animateCSSModeScroll);
parcelHelpers.export(exports, "s", ()=>setCSSProperty);
parcelHelpers.export(exports, "t", ()=>showWarning);
parcelHelpers.export(exports, "u", ()=>extend);
parcelHelpers.export(exports, "v", ()=>deleteProps);
var _ssrWindowEsmMjs = require("./ssr-window.esm.mjs");
function classesToTokens(classes) {
    if (classes === void 0) classes = "";
    return classes.trim().split(" ").filter((c)=>!!c.trim());
}
function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key)=>{
        try {
            object[key] = null;
        } catch (e) {
        // no getter for object
        }
        try {
            delete object[key];
        } catch (e1) {
        // something got wrong
        }
    });
}
function nextTick(callback, delay) {
    if (delay === void 0) delay = 0;
    return setTimeout(callback, delay);
}
function now() {
    return Date.now();
}
function getComputedStyle(el) {
    const window = (0, _ssrWindowEsmMjs.a)();
    let style;
    if (window.getComputedStyle) style = window.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}
function getTranslate(el, axis) {
    if (axis === void 0) axis = "x";
    const window = (0, _ssrWindowEsmMjs.a)();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle(el);
    if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a)=>a.replace(",", ".")).join(", ");
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
        matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function isObject(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
    const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    const noExtend = [
        "__proto__",
        "constructor",
        "prototype"
    ];
    for(let i = 1; i < arguments.length; i += 1){
        const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0);
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        to[nextKey] = {};
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
    let { swiper , targetPosition , side  } = _ref;
    const window = (0, _ssrWindowEsmMjs.a)();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target)=>{
        return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = ()=>{
        time = new Date().getTime();
        if (startTime === null) startTime = time;
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.overflow = "hidden";
            swiper.wrapperEl.style.scrollSnapType = "";
            setTimeout(()=>{
                swiper.wrapperEl.style.overflow = "";
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            });
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window.requestAnimationFrame(animate);
    };
    animate();
}
function getSlideTransformEl(slideEl) {
    return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector) {
    if (selector === void 0) selector = "";
    return [
        ...element.children
    ].filter((el)=>el.matches(selector));
}
function showWarning(text) {
    try {
        console.warn(text);
        return;
    } catch (err) {
    // err
    }
}
function createElement(tag, classes) {
    if (classes === void 0) classes = [];
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes) ? classes : classesToTokens(classes));
    return el;
}
function elementOffset(el) {
    const window = (0, _ssrWindowEsmMjs.a)();
    const document = (0, _ssrWindowEsmMjs.g)();
    const box = el.getBoundingClientRect();
    const body = document.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window ? window.scrollY : el.scrollTop;
    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
    };
}
function elementPrevAll(el, selector) {
    const prevEls = [];
    while(el.previousElementSibling){
        const prev = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if (prev.matches(selector)) prevEls.push(prev);
        } else prevEls.push(prev);
        el = prev;
    }
    return prevEls;
}
function elementNextAll(el, selector) {
    const nextEls = [];
    while(el.nextElementSibling){
        const next = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if (next.matches(selector)) nextEls.push(next);
        } else nextEls.push(next);
        el = next;
    }
    return nextEls;
}
function elementStyle(el, prop) {
    const window = (0, _ssrWindowEsmMjs.a)();
    return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
        i = 0;
        // eslint-disable-next-line
        while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
        return i;
    }
    return undefined;
}
function elementParents(el, selector) {
    const parents = []; // eslint-disable-line
    let parent = el.parentElement; // eslint-disable-line
    while(parent){
        if (selector) {
            if (parent.matches(selector)) parents.push(parent);
        } else parents.push(parent);
        parent = parent.parentElement;
    }
    return parents;
}
function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
        if (e.target !== el) return;
        callback.call(el, e);
        el.removeEventListener("transitionend", fireCallBack);
    }
    if (callback) el.addEventListener("transitionend", fireCallBack);
}
function elementOuterSize(el, size, includeMargins) {
    const window = (0, _ssrWindowEsmMjs.a)();
    if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    return el.offsetWidth;
}
function makeElementsArray(el) {
    return (Array.isArray(el) ? el : [
        el
    ]).filter((e)=>!!e);
}

},{"./ssr-window.esm.mjs":"th8PY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXKG4":[function() {},{}]},["1RB6v","8lqZg"], "8lqZg", "parcelRequired7c6")

//# sourceMappingURL=index.975ef6c8.js.map
