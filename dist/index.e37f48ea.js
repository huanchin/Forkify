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
})({"kYpTN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
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
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _modelJs = require("./model.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _configJs = require("./config.js");
// polyfilling async await
var _runtime = require("regenerator-runtime/runtime");
// https://forkify-api.herokuapp.com/v2
const controlRecipe = async function() {
    try {
        // get id from hash
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _recipeViewJsDefault.default).renderSpinner();
        // 0) update results view to mark selected result
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultsPage());
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
        // 1) loading recipe
        await _modelJs.loadRecipe(id);
        // 2) rendering recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (err) {
        console.log(`${err} \u{1F525}\u{1F525}\u{1F525}`);
        (0, _recipeViewJsDefault.default).renderError();
    }
};
const controlSearchResults = async function() {
    try {
        // 1) create spinner
        (0, _resultsViewJsDefault.default).renderSpinner();
        // 2) get search query
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        // 3) load search results
        await _modelJs.loadSearchResults(query);
        // 4) render results
        // console.log(model.state.search.results); // all results
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage()); // select 10 results
        // 5) render initial pagination
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlPagination = function(goToPage) {
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(goToPage));
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const controlServings = function(newServings) {
    // update the recipe sevings (in state)
    _modelJs.updateServings(newServings);
    // Update the recipe view
    // we don't want to update the entire view, instead only update specific DOM element
    // recipeView.render(model.state.recipe);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
const controlAddbookmark = function() {
    // add or remove bookmark
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    // update recipe view
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    // render bookmarks
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlAddRecipe = async function(newRecipe) {
    try {
        // show loading spinner
        (0, _addRecipeViewJsDefault.default).renderSpinner();
        // upload the new recipe
        await _modelJs.uploadRecipe(newRecipe);
        // console.log(model.state.recipe);
        // render recipe view
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        // display success message
        (0, _addRecipeViewJsDefault.default).renderMessage();
        // render bookmark view
        (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
        // change id in the url
        window.history.pushState(null, "", `#${_modelJs.state.recipe.id}`);
        // close form window
        setTimeout(function() {
            (0, _addRecipeViewJsDefault.default).toggleWindow();
        }, (0, _configJs.MODEL_CLOSE_SEC) * 1000);
    } catch (err) {
        console.error(err);
        (0, _addRecipeViewJsDefault.default).renderError(err.message);
    }
};
const init = function() {
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipe);
    (0, _recipeViewJsDefault.default).addHandlerUpdateServings(controlServings);
    (0, _recipeViewJsDefault.default).addHandlerAddBookmark(controlAddbookmark);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _addRecipeViewJsDefault.default).addHandlerUpload(controlAddRecipe);
};
init();

},{"core-js/modules/web.immediate.js":"49tUX","./model.js":"Y4A21","./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","./views/bookmarksView.js":"4Lqzq","./views/paginationView.js":"6z7bi","./views/addRecipeView.js":"i6DNj","./config.js":"k5Hzs","regenerator-runtime/runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49tUX":[function(require,module,exports) {
"use strict";
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("52e9b3eefbbce1ed");
require("292fa64716f5b39e");

},{"52e9b3eefbbce1ed":"fOGFr","292fa64716f5b39e":"l7FDS"}],"fOGFr":[function(require,module,exports) {
"use strict";
var $ = require("79389288a80b279c");
var global = require("22a078687be7e1b6");
var clearImmediate = require("84ba5ca62b8b14c9").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"79389288a80b279c":"dIGt4","22a078687be7e1b6":"i8HOC","84ba5ca62b8b14c9":"7jDg7"}],"dIGt4":[function(require,module,exports) {
"use strict";
var global = require("6643b6592ad59b23");
var getOwnPropertyDescriptor = require("2ec751f39e500b85").f;
var createNonEnumerableProperty = require("b4567636b28a3b3a");
var defineBuiltIn = require("50460aa43dd4048a");
var defineGlobalProperty = require("581238c99f8c2c30");
var copyConstructorProperties = require("566a383894c688bc");
var isForced = require("f0e2e697f04e8ad9");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"6643b6592ad59b23":"i8HOC","2ec751f39e500b85":"lk5NI","b4567636b28a3b3a":"8CL42","50460aa43dd4048a":"6XwEX","581238c99f8c2c30":"ggjnO","566a383894c688bc":"9Z12i","f0e2e697f04e8ad9":"6uTCZ"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof this == "object" && this) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"lk5NI":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("c04e6fb248689dba");
var call = require("553ec943aa2a4554");
var propertyIsEnumerableModule = require("bbc5e69071aa2fbd");
var createPropertyDescriptor = require("1d2ffbfd99e01f41");
var toIndexedObject = require("c4ea69a78a643d87");
var toPropertyKey = require("8ab18ff766aa2ab9");
var hasOwn = require("3761c5d34b7aa48f");
var IE8_DOM_DEFINE = require("c4dfcc26308f1b4a");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"c04e6fb248689dba":"92ZIi","553ec943aa2a4554":"d7JlP","bbc5e69071aa2fbd":"7SuiS","1d2ffbfd99e01f41":"1lpav","c4ea69a78a643d87":"jLWwQ","8ab18ff766aa2ab9":"5XWKd","3761c5d34b7aa48f":"gC2Q5","c4dfcc26308f1b4a":"qS9uN"}],"92ZIi":[function(require,module,exports) {
"use strict";
var fails = require("735b783268fd06c0");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"735b783268fd06c0":"hL6D2"}],"hL6D2":[function(require,module,exports) {
"use strict";
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"d7JlP":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("44e025d030d66023");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"44e025d030d66023":"i16Dq"}],"i16Dq":[function(require,module,exports) {
"use strict";
var fails = require("2642aa7619056f20");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"2642aa7619056f20":"hL6D2"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
"use strict";
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
"use strict";
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("9d8f8f50ac9468eb");
var requireObjectCoercible = require("f7224aed72953ac4");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"9d8f8f50ac9468eb":"kPk5h","f7224aed72953ac4":"fOR0B"}],"kPk5h":[function(require,module,exports) {
"use strict";
var uncurryThis = require("7ba7e65983d7b662");
var fails = require("df551e12a7c872dd");
var classof = require("1d34ea813cebff9c");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === "String" ? split(it, "") : $Object(it);
} : $Object;

},{"7ba7e65983d7b662":"7GlkT","df551e12a7c872dd":"hL6D2","1d34ea813cebff9c":"bdfmm"}],"7GlkT":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("829dd7a4e960cf9e");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"829dd7a4e960cf9e":"i16Dq"}],"bdfmm":[function(require,module,exports) {
"use strict";
var uncurryThis = require("1c71c3f6daac476c");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"1c71c3f6daac476c":"7GlkT"}],"fOR0B":[function(require,module,exports) {
"use strict";
var isNullOrUndefined = require("74607922ed30019f");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};

},{"74607922ed30019f":"gM5ar"}],"gM5ar":[function(require,module,exports) {
"use strict";
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"5XWKd":[function(require,module,exports) {
"use strict";
var toPrimitive = require("53a3a67ac381c4e8");
var isSymbol = require("b992ca9cdcf7937b");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"53a3a67ac381c4e8":"a2mK1","b992ca9cdcf7937b":"4aV4F"}],"a2mK1":[function(require,module,exports) {
"use strict";
var call = require("70235907dc93b4b0");
var isObject = require("46fb53dace408c8e");
var isSymbol = require("677bdc4d74d2f983");
var getMethod = require("80395bcde336a28b");
var ordinaryToPrimitive = require("49552a7324952190");
var wellKnownSymbol = require("aea01c71276624bf");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"70235907dc93b4b0":"d7JlP","46fb53dace408c8e":"Z0pBo","677bdc4d74d2f983":"4aV4F","80395bcde336a28b":"9Zfiw","49552a7324952190":"7MME2","aea01c71276624bf":"gTwyA"}],"Z0pBo":[function(require,module,exports) {
"use strict";
var isCallable = require("f87cee1cb79cbcca");
var $documentAll = require("319a7447e596d6da");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"f87cee1cb79cbcca":"l3Kyn","319a7447e596d6da":"5MHqB"}],"l3Kyn":[function(require,module,exports) {
"use strict";
var $documentAll = require("ca3b3b4ae4b8328f");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"ca3b3b4ae4b8328f":"5MHqB"}],"5MHqB":[function(require,module,exports) {
"use strict";
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"4aV4F":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("6b6c481cdfb7df35");
var isCallable = require("2af44fcbdbf14c83");
var isPrototypeOf = require("76e903e830c40e7c");
var USE_SYMBOL_AS_UID = require("7e2fe930b3598e22");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"6b6c481cdfb7df35":"6ZUSY","2af44fcbdbf14c83":"l3Kyn","76e903e830c40e7c":"3jtKQ","7e2fe930b3598e22":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
"use strict";
var global = require("dd9e9ae04e8684f7");
var isCallable = require("f1d62079325906cb");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"dd9e9ae04e8684f7":"i8HOC","f1d62079325906cb":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
"use strict";
var uncurryThis = require("83f14842ef67e16a");
module.exports = uncurryThis({}.isPrototypeOf);

},{"83f14842ef67e16a":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("da4a972af0214ea0");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"da4a972af0214ea0":"8KyTD"}],"8KyTD":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("ecc4d354cb42bea8");
var fails = require("b37df495bcdc1d99");
var global = require("d8adff9188ad5fee");
var $String = global.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol("symbol detection");
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"ecc4d354cb42bea8":"bjFlO","b37df495bcdc1d99":"hL6D2","d8adff9188ad5fee":"i8HOC"}],"bjFlO":[function(require,module,exports) {
"use strict";
var global = require("705d79ce07ed8cf");
var userAgent = require("5afb83a49cd74e4c");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"705d79ce07ed8cf":"i8HOC","5afb83a49cd74e4c":"73xBt"}],"73xBt":[function(require,module,exports) {
"use strict";
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"9Zfiw":[function(require,module,exports) {
"use strict";
var aCallable = require("bbfed17b24e215f4");
var isNullOrUndefined = require("492a86e2970f6a26");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"bbfed17b24e215f4":"gOMir","492a86e2970f6a26":"gM5ar"}],"gOMir":[function(require,module,exports) {
"use strict";
var isCallable = require("4094667126ecac05");
var tryToString = require("fce2a7573db493fa");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + " is not a function");
};

},{"4094667126ecac05":"l3Kyn","fce2a7573db493fa":"4O7d7"}],"4O7d7":[function(require,module,exports) {
"use strict";
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
"use strict";
var call = require("abe9ca006f56626e");
var isCallable = require("c96b3a89fec6248a");
var isObject = require("551615fda0214f1b");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
};

},{"abe9ca006f56626e":"d7JlP","c96b3a89fec6248a":"l3Kyn","551615fda0214f1b":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
"use strict";
var global = require("dbe74e87464035e3");
var shared = require("6a2cda01df6b4c79");
var hasOwn = require("dccc28ffa5beeb54");
var uid = require("48d6af1225853d44");
var NATIVE_SYMBOL = require("9f762329148684");
var USE_SYMBOL_AS_UID = require("1ce268781e409df2");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"dbe74e87464035e3":"i8HOC","6a2cda01df6b4c79":"i1mHK","dccc28ffa5beeb54":"gC2Q5","48d6af1225853d44":"a3SEE","9f762329148684":"8KyTD","1ce268781e409df2":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
"use strict";
var IS_PURE = require("fe5f96cb4b2826a2");
var store = require("84eeed9891aafe14");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.34.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"fe5f96cb4b2826a2":"5ZsyC","84eeed9891aafe14":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
"use strict";
module.exports = false;

},{}],"l4ncH":[function(require,module,exports) {
"use strict";
var global = require("8756de416b94afec");
var defineGlobalProperty = require("dfb72a1d809f7b02");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"8756de416b94afec":"i8HOC","dfb72a1d809f7b02":"ggjnO"}],"ggjnO":[function(require,module,exports) {
"use strict";
var global = require("70259c1dd4aa0e14");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"70259c1dd4aa0e14":"i8HOC"}],"gC2Q5":[function(require,module,exports) {
"use strict";
var uncurryThis = require("f5dcaa60a713971f");
var toObject = require("ab17c4f45fcf0841");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"f5dcaa60a713971f":"7GlkT","ab17c4f45fcf0841":"5cb35"}],"5cb35":[function(require,module,exports) {
"use strict";
var requireObjectCoercible = require("f45a7b5dcdc4a410");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"f45a7b5dcdc4a410":"fOR0B"}],"a3SEE":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5da0fe4507da20a3");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"5da0fe4507da20a3":"7GlkT"}],"qS9uN":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("9b4278b13c076bf");
var fails = require("8aee5d88a5f9b6b5");
var createElement = require("1db4d60148afcf21");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"9b4278b13c076bf":"92ZIi","8aee5d88a5f9b6b5":"hL6D2","1db4d60148afcf21":"4bOHl"}],"4bOHl":[function(require,module,exports) {
"use strict";
var global = require("f5891d48afd7ec83");
var isObject = require("824df78b2e007250");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"f5891d48afd7ec83":"i8HOC","824df78b2e007250":"Z0pBo"}],"8CL42":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("a8753383ef98ee18");
var definePropertyModule = require("189ab650b8f71085");
var createPropertyDescriptor = require("1168c8162aa30435");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"a8753383ef98ee18":"92ZIi","189ab650b8f71085":"iJR4w","1168c8162aa30435":"1lpav"}],"iJR4w":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("ca50eb9163928400");
var IE8_DOM_DEFINE = require("d482f9e5478795e8");
var V8_PROTOTYPE_DEFINE_BUG = require("b6ad7537efb06f4b");
var anObject = require("16365a73399e7fe7");
var toPropertyKey = require("fab1d366c47796d9");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"ca50eb9163928400":"92ZIi","d482f9e5478795e8":"qS9uN","b6ad7537efb06f4b":"ka1Un","16365a73399e7fe7":"4isCr","fab1d366c47796d9":"5XWKd"}],"ka1Un":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("b22a5a2de93e3ad2");
var fails = require("249a5b857c2dfccd");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"b22a5a2de93e3ad2":"92ZIi","249a5b857c2dfccd":"hL6D2"}],"4isCr":[function(require,module,exports) {
"use strict";
var isObject = require("2b6c6258a0a6082f");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object");
};

},{"2b6c6258a0a6082f":"Z0pBo"}],"6XwEX":[function(require,module,exports) {
"use strict";
var isCallable = require("99ee13632b3fa68");
var definePropertyModule = require("9ebb3e3004fccc0a");
var makeBuiltIn = require("f10cc812a3094053");
var defineGlobalProperty = require("d354802d852d9c2b");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"99ee13632b3fa68":"l3Kyn","9ebb3e3004fccc0a":"iJR4w","f10cc812a3094053":"cTB4k","d354802d852d9c2b":"ggjnO"}],"cTB4k":[function(require,module,exports) {
"use strict";
var uncurryThis = require("ca84677f1ebd1804");
var fails = require("13360f2842eba261");
var isCallable = require("103e488c0928755a");
var hasOwn = require("cbf9b0e0779cc368");
var DESCRIPTORS = require("3f2eb7efeae2f72b");
var CONFIGURABLE_FUNCTION_NAME = require("548b10f284264c72").CONFIGURABLE;
var inspectSource = require("358f00f3103bd55b");
var InternalStateModule = require("9b2ce14119fd2412");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"ca84677f1ebd1804":"7GlkT","13360f2842eba261":"hL6D2","103e488c0928755a":"l3Kyn","cbf9b0e0779cc368":"gC2Q5","3f2eb7efeae2f72b":"92ZIi","548b10f284264c72":"l6Kgd","358f00f3103bd55b":"9jh7O","9b2ce14119fd2412":"7AMlF"}],"l6Kgd":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("8ad2bacb0e20b95c");
var hasOwn = require("4eabfd8f83afc9d5");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"8ad2bacb0e20b95c":"92ZIi","4eabfd8f83afc9d5":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
"use strict";
var uncurryThis = require("26e26db98367212e");
var isCallable = require("40ed9a4f6ae66648");
var store = require("485d48d6f4c6739e");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"26e26db98367212e":"7GlkT","40ed9a4f6ae66648":"l3Kyn","485d48d6f4c6739e":"l4ncH"}],"7AMlF":[function(require,module,exports) {
"use strict";
var NATIVE_WEAK_MAP = require("d3f0c9f3327b2fd6");
var global = require("ca46b44b6201ccd7");
var isObject = require("f82e6cc0ac249fa5");
var createNonEnumerableProperty = require("c0ae163eea4ef97");
var hasOwn = require("6dea7358344877bb");
var shared = require("3e035a1241da2f0");
var sharedKey = require("88d6ccc27e779e5a");
var hiddenKeys = require("d40b9b3abdbb956e");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"d3f0c9f3327b2fd6":"2PZTl","ca46b44b6201ccd7":"i8HOC","f82e6cc0ac249fa5":"Z0pBo","c0ae163eea4ef97":"8CL42","6dea7358344877bb":"gC2Q5","3e035a1241da2f0":"l4ncH","88d6ccc27e779e5a":"eAjGz","d40b9b3abdbb956e":"661m4"}],"2PZTl":[function(require,module,exports) {
"use strict";
var global = require("6bd2547a42528a9c");
var isCallable = require("aa77fff8d5ef0565");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"6bd2547a42528a9c":"i8HOC","aa77fff8d5ef0565":"l3Kyn"}],"eAjGz":[function(require,module,exports) {
"use strict";
var shared = require("dbc8182adeb8c92f");
var uid = require("90b4ffb58508a6e5");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"dbc8182adeb8c92f":"i1mHK","90b4ffb58508a6e5":"a3SEE"}],"661m4":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"9Z12i":[function(require,module,exports) {
"use strict";
var hasOwn = require("d91d786cc71453ce");
var ownKeys = require("88cb809f98beddc6");
var getOwnPropertyDescriptorModule = require("10ea642aad5f7c21");
var definePropertyModule = require("39ff598ce822187e");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"d91d786cc71453ce":"gC2Q5","88cb809f98beddc6":"1CX1A","10ea642aad5f7c21":"lk5NI","39ff598ce822187e":"iJR4w"}],"1CX1A":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("3cc1e4329d869e34");
var uncurryThis = require("2b8e77cbdbe3db7a");
var getOwnPropertyNamesModule = require("d703bcb62fcda216");
var getOwnPropertySymbolsModule = require("157674bad2772c6d");
var anObject = require("a09e060b9cae3c6c");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"3cc1e4329d869e34":"6ZUSY","2b8e77cbdbe3db7a":"7GlkT","d703bcb62fcda216":"fjY04","157674bad2772c6d":"4DWO3","a09e060b9cae3c6c":"4isCr"}],"fjY04":[function(require,module,exports) {
"use strict";
var internalObjectKeys = require("6d8591e17a49376c");
var enumBugKeys = require("2c933f93dd98f385");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"6d8591e17a49376c":"hl5T1","2c933f93dd98f385":"9RnJm"}],"hl5T1":[function(require,module,exports) {
"use strict";
var uncurryThis = require("363ee0e6bb4f46a7");
var hasOwn = require("3183fe0b0bf6f6ac");
var toIndexedObject = require("28192ac12e934672");
var indexOf = require("a5f9c5d8e993ccd6").indexOf;
var hiddenKeys = require("57775908f1581bc6");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"363ee0e6bb4f46a7":"7GlkT","3183fe0b0bf6f6ac":"gC2Q5","28192ac12e934672":"jLWwQ","a5f9c5d8e993ccd6":"n5IsC","57775908f1581bc6":"661m4"}],"n5IsC":[function(require,module,exports) {
"use strict";
var toIndexedObject = require("d5dcbcd68ac5acd0");
var toAbsoluteIndex = require("212b13aecfa48226");
var lengthOfArrayLike = require("e5a8b3e1da4c5637");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"d5dcbcd68ac5acd0":"jLWwQ","212b13aecfa48226":"5yh27","e5a8b3e1da4c5637":"lY4mS"}],"5yh27":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("72fe0a53ad43912c");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"72fe0a53ad43912c":"kLXGe"}],"kLXGe":[function(require,module,exports) {
"use strict";
var trunc = require("3403cba02b5f61d8");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"3403cba02b5f61d8":"7O8gb"}],"7O8gb":[function(require,module,exports) {
"use strict";
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
"use strict";
var toLength = require("23d9716c54a2ab90");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"23d9716c54a2ab90":"fU04N"}],"fU04N":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("c48d3a8b8ac52b0b");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"c48d3a8b8ac52b0b":"kLXGe"}],"9RnJm":[function(require,module,exports) {
"use strict";
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
"use strict";
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
"use strict";
var fails = require("10299561ea0c7870");
var isCallable = require("8b1ecdaf59f07210");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"10299561ea0c7870":"hL6D2","8b1ecdaf59f07210":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
"use strict";
var global = require("1e8ed58235e9956a");
var apply = require("e574be68c288c7c8");
var bind = require("df212787338802d3");
var isCallable = require("afdf018c2d01bbc6");
var hasOwn = require("35a3e849940fd612");
var fails = require("b8bf5434d2248ca7");
var html = require("731f9370cc21fc3b");
var arraySlice = require("ec358060964e4bde");
var createElement = require("907adb6d219da7a3");
var validateArgumentsLength = require("f398561ebd49a798");
var IS_IOS = require("fdfdeccf85e81d4f");
var IS_NODE = require("fcf929779abbf29c");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"1e8ed58235e9956a":"i8HOC","e574be68c288c7c8":"148ka","df212787338802d3":"7vpmS","afdf018c2d01bbc6":"l3Kyn","35a3e849940fd612":"gC2Q5","b8bf5434d2248ca7":"hL6D2","731f9370cc21fc3b":"2pze4","ec358060964e4bde":"RsFXo","907adb6d219da7a3":"4bOHl","f398561ebd49a798":"b9O3D","fdfdeccf85e81d4f":"bzGah","fcf929779abbf29c":"2Jcp4"}],"148ka":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("d07466971ded2aca");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"d07466971ded2aca":"i16Dq"}],"7vpmS":[function(require,module,exports) {
"use strict";
var uncurryThis = require("92f6f475baa85665");
var aCallable = require("547ee4f9dab0cc76");
var NATIVE_BIND = require("5acd31cba656d393");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"92f6f475baa85665":"5Hioa","547ee4f9dab0cc76":"gOMir","5acd31cba656d393":"i16Dq"}],"5Hioa":[function(require,module,exports) {
"use strict";
var classofRaw = require("8e77093015e1e67f");
var uncurryThis = require("9daa4dbbca634c9e");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"8e77093015e1e67f":"bdfmm","9daa4dbbca634c9e":"7GlkT"}],"2pze4":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("14cb391fa4a0dda8");
module.exports = getBuiltIn("document", "documentElement");

},{"14cb391fa4a0dda8":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5250b5c9324ccbe");
module.exports = uncurryThis([].slice);

},{"5250b5c9324ccbe":"7GlkT"}],"b9O3D":[function(require,module,exports) {
"use strict";
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw new $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
"use strict";
var userAgent = require("d96985a79ddda108");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"d96985a79ddda108":"73xBt"}],"2Jcp4":[function(require,module,exports) {
"use strict";
var global = require("1b4555a3a97d5ef1");
var classof = require("779f783a397f138");
module.exports = classof(global.process) === "process";

},{"1b4555a3a97d5ef1":"i8HOC","779f783a397f138":"bdfmm"}],"l7FDS":[function(require,module,exports) {
"use strict";
var $ = require("33581c362196ed1f");
var global = require("9a84e40db4964af6");
var setTask = require("4219ce460223bd08").set;
var schedulersFix = require("738dc378e6a94c64");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"33581c362196ed1f":"dIGt4","9a84e40db4964af6":"i8HOC","4219ce460223bd08":"7jDg7","738dc378e6a94c64":"cAPb6"}],"cAPb6":[function(require,module,exports) {
"use strict";
var global = require("373dd417176da2c5");
var apply = require("a68ecfcbf29c46f6");
var isCallable = require("7087588d33667af2");
var ENGINE_IS_BUN = require("7679d27a979f2651");
var USER_AGENT = require("7493ba8d8bb8623d");
var arraySlice = require("cff2c830bdea4f24");
var validateArgumentsLength = require("58a74f00cee1ac64");
var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split(".");
    return version.length < 3 || version[0] === "0" && (version[1] < 3 || version[1] === "3" && version[2] === "0");
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"373dd417176da2c5":"i8HOC","a68ecfcbf29c46f6":"148ka","7087588d33667af2":"l3Kyn","7679d27a979f2651":"2BA6V","7493ba8d8bb8623d":"73xBt","cff2c830bdea4f24":"RsFXo","58a74f00cee1ac64":"b9O3D"}],"2BA6V":[function(require,module,exports) {
"use strict";
/* global Bun -- Bun case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        page: 1,
        resultsPerPage: (0, _configJs.RES_PER_PAGE)
    },
    bookmarks: []
};
const createRecipeObject = function(data) {
    const { recipe } = data.data;
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipe = async function(id) {
    try {
        // load recipe
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}${id}?key=${(0, _configJs.KEY)}`);
        state.recipe = createRecipeObject(data);
        if (state.bookmarks.some((b)=>b.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (err) {
        throw err;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.search.results = query;
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}?search=${query}&key=${(0, _configJs.KEY)}`);
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...rec.key && {
                    key: rec.key
                }
            };
        });
        state.search.page = 1;
    } catch (err) {
        throw err;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; // 0;
    const end = page * state.search.resultsPerPage; //9;
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    });
    state.recipe.servings = newServings;
};
const addBookmark = function(recipe) {
    // add bookmark
    state.bookmarks.push(recipe);
    // mark current recipe as bookmark
    // if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    state.recipe.bookmarked = true;
};
const deleteBookmark = function(id) {
    // delete bookmark
    const index = state.bookmarks.findIndex((el)=>el.id === id);
    state.bookmarks.splice(index, 1);
    // mark current recipe as NOT bookmark
    // if (id === state.recipe.id) state.recipe.bookmarked = false;
    state.recipe.bookmarked = false;
};
const uploadRecipe = async function(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith("ingredient") && entry[1] !== "").map((ing)=>{
            const ingArr = ing[1].split(",").map((el)=>el.trim());
            if (ingArr.length !== 3) throw new Error("Wrong ingredient format! Please use the correct format :)");
            const [quantity, unit, description] = ingArr;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            title: newRecipe.title,
            publisher: newRecipe.publisher,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            servings: +newRecipe.servings,
            cooking_time: +newRecipe.cookingTime,
            ingredients: ingredients
        };
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}?key=${(0, _configJs.KEY)}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    } catch (err) {
        throw err;
    }
};

},{"./config.js":"k5Hzs","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "KEY", ()=>KEY);
parcelHelpers.export(exports, "MODEL_CLOSE_SEC", ()=>MODEL_CLOSE_SEC);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 10;
const KEY = "6a14316e-d94f-4c0c-b77d-f8287b306268";
const MODEL_CLOSE_SEC = 2.5;

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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
parcelHelpers.export(exports, "sendJSON", ()=>sendJSON);
var _regeneratorRuntime = require("regenerator-runtime");
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};
const getJSON = async function(url) {
    try {
        const fetchPro = fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};
const sendJSON = async function(url, uploadData) {
    try {
        const fetchPro = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        });
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"regenerator-runtime":"dXNgZ","./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable || iterable === "") {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
const Fraction = require("77b9b791cccef6be").Fraction;
class RecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".recipe");
    _data;
    _errorMessage = "We could not find that recipe. Please try another one!";
    _message = "";
    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderSpinner() {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${(0, _iconsSvgDefault.default)}g#icon-loader"></use>
        </svg>
      </div>
    `;
        this._parentElement.innerHTML = "";
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
    <div class="error">
          <div>
            <svg>
              <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderMessage(message = this._message) {
        const markup = `
    <div class="message">
          <div>
            <svg>
              <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    addHandlerRender(handler) {
        [
            "load",
            "hashchange"
        ].forEach((el)=>window.addEventListener(el, handler));
    // window.addEventListener('load', handler);
    // window.addEventListener('hashchange', handler);
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            const updateTo = +btn.dataset.updateTo;
            if (updateTo > 0) handler(updateTo);
        });
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings + 1}">
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
            </svg>
          </div>

          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map((ing)=>this._generateMarkupIngredients(ing)).join("")}

        

          
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `;
    }
    _generateMarkupIngredients(ing) {
        return `
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${ing.quantity ? new Fraction(ing.quantity).toString() : ""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>
      `;
    }
}
exports.default = new RecipeView();

},{"./view.js":"bWlJ9","url:../../img/icons.svg":"loVOp","77b9b791cccef6be":"3SU56","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        // convert markup string into Real DOM Object
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        // compare each DOM element
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            // update changed text
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") curEl.textContent = newEl.textContent;
            // update changed attributes
            if (!newEl.isEqualNode(curEl)) // if (newEl.attributes !== curEl.attributes) {
            //   console.log(newEl);
            //   console.log(Array.from(newEl.attributes));
            //   console.log(curEl);
            //   console.log(Array.from(curEl.attributes));
            // }
            Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderSpinner() {
        const markup = `
          <div class="spinner">
            <svg>
              <use href="${(0, _iconsSvgDefault.default)}g#icon-loader"></use>
            </svg>
          </div>
        `;
        this._parentElement.innerHTML = "";
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
        <div class="error">
              <div>
                <svg>
                  <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderMessage(message = this._message) {
        const markup = `
        <div class="message">
              <div>
                <svg>
                  <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require("9bcc84ee5d265e38").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"9bcc84ee5d265e38":"lgJ39"}],"lgJ39":[function(require,module,exports) {
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
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3SU56":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== "undefined" && denominator) {
        if (typeof numerator === "number" && typeof denominator === "number") {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === "string" && typeof denominator === "string") {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === "undefined") {
        num = numerator; // swap variable names for legibility
        if (typeof num === "number") {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === "string") {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(" ");
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match("/")) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === "string" && a.match("/")) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split("/");
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === "string" && a.match(".")) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === "NaN") return "NaN";
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + "/" + denominator);
    return result.length > 0 ? result.join(" ") : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === "number") a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === "number") a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = function() {
    var isFloat = function(n) {
        return typeof n === "number" && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
}();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num1 = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num1)if (num1 % _factor === 0) {
        factors.push(_factor); // so keep it
        num1 = num1 / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num1 != 1) factors.push(num1); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class SearchView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".search");
    getQuery() {
        const query = this._parentElement.querySelector(".search__field").value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentElement.querySelector(".search__field").value = "";
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".results");
    _errorMessage = "No recipes found for your query! Please try again ;)";
    _message = "";
    _generateMarkup() {
        return this._data.map((rec)=>{
            return this._generateMarkupPreview(rec);
        }).join("");
    }
    _generateMarkupPreview(rec) {
        const id = window.location.hash.slice(1);
        return `
    <li class="preview">
      <a class="preview__link ${rec.id === id ? "preview__link--active" : ""}" href="#${rec.id}">
        <figure class="preview__fig">
          <img src="${rec.image}" alt="${rec.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${rec.title}</h4>
          <p class="preview__publisher">${rec.publisher}</p>
          <div class="preview__user-generated ${rec.key ? "" : "hidden"}">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
            </svg>
          </div>
        </div>
        
      </a>
    </li>
    `;
    }
}
exports.default = new ResultsView();

},{"./view.js":"bWlJ9","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class BookmarksView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it :)";
    _message = "";
    _generateMarkup() {
        return this._data.map((rec)=>{
            return this._generateMarkupPreview(rec);
        }).join("");
    }
    _generateMarkupPreview(rec) {
        const id = window.location.hash.slice(1);
        return `
    <li class="preview">
      <a class="preview__link ${rec.id === id ? "preview__link--active" : ""}" href="#${rec.id}">
        <figure class="preview__fig">
          <img src="${rec.image}" alt="${rec.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${rec.title}</h4>
          <p class="preview__publisher">${rec.publisher}</p>
          <div class="preview__user-generated ${rec.key ? "" : "hidden"}">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
            </svg>
        </div>
        </div>
      </a>
    </li>
    `;
    }
}
exports.default = new BookmarksView();

},{"./view.js":"bWlJ9","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".pagination");
    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // Page 1, and there are other pages
        if (this._data.page === 1 && numPages > 1) return `
      <button data-goto="${this._data.page + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${this._data.page + 1}</span>
        <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </button>
      `;
        // Last Page
        if (this._data.page === numPages && numPages > 1) return `
      <button data-goto="${this._data.page - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._data.page - 1}</span>
      </button>
      `;
        // Other page
        if (this._data.page < numPages) return `
      <button data-goto="${this._data.page - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._data.page - 1}</span>
      </button>
      <button data-goto="${this._data.page + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${this._data.page + 1}</span>
        <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </button>
      `;
        // Page 1, and there are no other pages
        return "";
    }
}
exports.default = new PaginationView();

},{"./view.js":"bWlJ9","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6DNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _prettier = require("prettier");
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class AddPecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".upload");
    _message = "Recipe was successfully uploaded :)";
    _window = document.querySelector(".add-recipe-window");
    _overlay = document.querySelector(".overlay");
    _btnOpen = document.querySelector(".nav__btn--add-recipe");
    _btnClose = document.querySelector(".btn--close-modal");
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    toggleWindow() {
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
    }
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
    }
    _addHandlerHideWindow() {
        this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ]; // get data from form
            const data = Object.fromEntries(dataArr); // turn array into object
            handler(data);
        });
    }
    _generateMarkup() {}
}
exports.default = new AddPecipeView();

},{"prettier":"bWTPU","./view.js":"bWlJ9","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWTPU":[function(require,module,exports) {
(function(t) {
    function e() {
        var o = t();
        return o.default || o;
    }
    var f;
    module.exports = e();
})(function() {
    "use strict";
    var au = Object.create;
    var $e = Object.defineProperty;
    var Du = Object.getOwnPropertyDescriptor;
    var cu = Object.getOwnPropertyNames;
    var lu = Object.getPrototypeOf, fu = Object.prototype.hasOwnProperty;
    var pu = (t, e)=>()=>(t && (e = t(t = 0)), e);
    var Ue = (t, e)=>()=>(e || t((e = {
                exports: {}
            }).exports, e), e.exports), Me = (t, e)=>{
        for(var r in e)$e(t, r, {
            get: e[r],
            enumerable: !0
        });
    }, rr = (t, e, r, n)=>{
        if (e && typeof e == "object" || typeof e == "function") for (let o of cu(e))!fu.call(t, o) && o !== r && $e(t, o, {
            get: ()=>e[o],
            enumerable: !(n = Du(e, o)) || n.enumerable
        });
        return t;
    };
    var Ce = (t, e, r)=>(r = t != null ? au(lu(t)) : {}, rr(e || !t || !t.__esModule ? $e(r, "default", {
            value: t,
            enumerable: !0
        }) : r, t)), nr = (t)=>rr($e({}, "__esModule", {
            value: !0
        }), t);
    var du = (t, e, r)=>{
        if (!e.has(t)) throw TypeError("Cannot " + r);
    };
    var Ct = (t, e, r)=>{
        if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(t) : e.set(t, r);
    };
    var ce = (t, e, r)=>(du(t, e, "access private method"), r);
    var or = Ue((gt)=>{
        "use strict";
        Object.defineProperty(gt, "__esModule", {
            value: !0
        });
        gt.default = ur;
        function ur() {}
        ur.prototype = {
            diff: function(e, r) {
                var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = n.callback;
                typeof n == "function" && (o = n, n = {}), this.options = n;
                var u = this;
                function i(p) {
                    return o ? (setTimeout(function() {
                        o(void 0, p);
                    }, 0), !0) : p;
                }
                e = this.castInput(e), r = this.castInput(r), e = this.removeEmpty(this.tokenize(e)), r = this.removeEmpty(this.tokenize(r));
                var s = r.length, a = e.length, D = 1, c = s + a;
                n.maxEditLength && (c = Math.min(c, n.maxEditLength));
                var F = [
                    {
                        newPos: -1,
                        components: []
                    }
                ], f = this.extractCommon(F[0], r, e, 0);
                if (F[0].newPos + 1 >= s && f + 1 >= a) return i([
                    {
                        value: this.join(r),
                        count: r.length
                    }
                ]);
                function d() {
                    for(var p = -1 * D; p <= D; p += 2){
                        var m = void 0, E = F[p - 1], h = F[p + 1], g = (h ? h.newPos : 0) - p;
                        E && (F[p - 1] = void 0);
                        var C = E && E.newPos + 1 < s, _ = h && 0 <= g && g < a;
                        if (!C && !_) {
                            F[p] = void 0;
                            continue;
                        }
                        if (!C || _ && E.newPos < h.newPos ? (m = Eu(h), u.pushComponent(m.components, void 0, !0)) : (m = E, m.newPos++, u.pushComponent(m.components, !0, void 0)), g = u.extractCommon(m, r, e, p), m.newPos + 1 >= s && g + 1 >= a) return i(mu(u, m.components, r, e, u.useLongestToken));
                        F[p] = m;
                    }
                    D++;
                }
                if (o) (function p() {
                    setTimeout(function() {
                        if (D > c) return o();
                        d() || p();
                    }, 0);
                })();
                else for(; D <= c;){
                    var l = d();
                    if (l) return l;
                }
            },
            pushComponent: function(e, r, n) {
                var o = e[e.length - 1];
                o && o.added === r && o.removed === n ? e[e.length - 1] = {
                    count: o.count + 1,
                    added: r,
                    removed: n
                } : e.push({
                    count: 1,
                    added: r,
                    removed: n
                });
            },
            extractCommon: function(e, r, n, o) {
                for(var u = r.length, i = n.length, s = e.newPos, a = s - o, D = 0; s + 1 < u && a + 1 < i && this.equals(r[s + 1], n[a + 1]);)s++, a++, D++;
                return D && e.components.push({
                    count: D
                }), e.newPos = s, a;
            },
            equals: function(e, r) {
                return this.options.comparator ? this.options.comparator(e, r) : e === r || this.options.ignoreCase && e.toLowerCase() === r.toLowerCase();
            },
            removeEmpty: function(e) {
                for(var r = [], n = 0; n < e.length; n++)e[n] && r.push(e[n]);
                return r;
            },
            castInput: function(e) {
                return e;
            },
            tokenize: function(e) {
                return e.split("");
            },
            join: function(e) {
                return e.join("");
            }
        };
        function mu(t, e, r, n, o) {
            for(var u = 0, i = e.length, s = 0, a = 0; u < i; u++){
                var D = e[u];
                if (D.removed) {
                    if (D.value = t.join(n.slice(a, a + D.count)), a += D.count, u && e[u - 1].added) {
                        var F = e[u - 1];
                        e[u - 1] = e[u], e[u] = F;
                    }
                } else {
                    if (!D.added && o) {
                        var c = r.slice(s, s + D.count);
                        c = c.map(function(d, l) {
                            var p = n[a + l];
                            return p.length > d.length ? p : d;
                        }), D.value = t.join(c);
                    } else D.value = t.join(r.slice(s, s + D.count));
                    s += D.count, D.added || (a += D.count);
                }
            }
            var f = e[i - 1];
            return i > 1 && typeof f.value == "string" && (f.added || f.removed) && t.equals("", f.value) && (e[i - 2].value += f.value, e.pop()), e;
        }
        function Eu(t) {
            return {
                newPos: t.newPos,
                components: t.components.slice(0)
            };
        }
    });
    var ir = Ue((ye)=>{
        "use strict";
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        ye.diffArrays = gu;
        ye.arrayDiff = void 0;
        var hu = Cu(or());
        function Cu(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var ge = new hu.default;
        ye.arrayDiff = ge;
        ge.tokenize = function(t) {
            return t.slice();
        };
        ge.join = ge.removeEmpty = function(t) {
            return t;
        };
        function gu(t, e, r) {
            return ge.diff(t, e, r);
        }
    });
    var Pe = Ue((ss, Rr)=>{
        "use strict";
        var Ir = new Proxy(String, {
            get: ()=>Ir
        });
        Rr.exports = Ir;
    });
    var ln = {};
    Me(ln, {
        default: ()=>eo,
        shouldHighlight: ()=>Qu
    });
    var Qu, eo, fn = pu(()=>{
        Qu = ()=>!1, eo = String;
    });
    var hn = Ue((pt)=>{
        "use strict";
        Object.defineProperty(pt, "__esModule", {
            value: !0
        });
        pt.codeFrameColumns = En;
        pt.default = oo;
        var pn = (fn(), nr(ln)), to = Pe(), dn = to, jt;
        function ro(t) {
            if (t) {
                var e;
                return (e = jt) != null || (jt = new dn.constructor({
                    enabled: !0,
                    level: 1
                })), jt;
            }
            return dn;
        }
        var Fn = !1;
        function no(t) {
            return {
                gutter: t.grey,
                marker: t.red.bold,
                message: t.red.bold
            };
        }
        var mn = /\r\n|[\n\r\u2028\u2029]/;
        function uo(t, e, r) {
            let n = Object.assign({
                column: 0,
                line: -1
            }, t.start), o = Object.assign({}, n, t.end), { linesAbove: u = 2, linesBelow: i = 3 } = r || {}, s = n.line, a = n.column, D = o.line, c = o.column, F = Math.max(s - (u + 1), 0), f = Math.min(e.length, D + i);
            s === -1 && (F = 0), D === -1 && (f = e.length);
            let d = D - s, l = {};
            if (d) for(let p = 0; p <= d; p++){
                let m = p + s;
                if (!a) l[m] = !0;
                else if (p === 0) {
                    let E = e[m - 1].length;
                    l[m] = [
                        a,
                        E - a + 1
                    ];
                } else if (p === d) l[m] = [
                    0,
                    c
                ];
                else {
                    let E = e[m - p].length;
                    l[m] = [
                        0,
                        E
                    ];
                }
            }
            else a === c ? a ? l[s] = [
                a,
                0
            ] : l[s] = !0 : l[s] = [
                a,
                c - a
            ];
            return {
                start: F,
                end: f,
                markerLines: l
            };
        }
        function En(t, e, r = {}) {
            let n = (r.highlightCode || r.forceColor) && (0, pn.shouldHighlight)(r), o = ro(r.forceColor), u = no(o), i = (p, m)=>n ? p(m) : m, s = t.split(mn), { start: a, end: D, markerLines: c } = uo(e, s, r), F = e.start && typeof e.start.column == "number", f = String(D).length, l = (n ? (0, pn.default)(t, r) : t).split(mn, D).slice(a, D).map((p, m)=>{
                let E = a + 1 + m, g = ` ${` ${E}`.slice(-f)} |`, C = c[E], _ = !c[E + 1];
                if (C) {
                    let Z = "";
                    if (Array.isArray(C)) {
                        let $ = p.slice(0, Math.max(C[0] - 1, 0)).replace(/[^\t]/g, " "), Q = C[1] || 1;
                        Z = [
                            `
 `,
                            i(u.gutter, g.replace(/\d/g, " ")),
                            " ",
                            $,
                            i(u.marker, "^").repeat(Q)
                        ].join(""), _ && r.message && (Z += " " + i(u.message, r.message));
                    }
                    return [
                        i(u.marker, ">"),
                        i(u.gutter, g),
                        p.length > 0 ? ` ${p}` : "",
                        Z
                    ].join("");
                } else return ` ${i(u.gutter, g)}${p.length > 0 ? ` ${p}` : ""}`;
            }).join(`
`);
            return r.message && !F && (l = `${" ".repeat(f + 1)}${r.message}
${l}`), n ? o.reset(l) : l;
        }
        function oo(t, e, r, n = {}) {
            if (!Fn) {
                Fn = !0;
                let u = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
                {
                    let i = new Error(u);
                    i.name = "DeprecationWarning", console.warn(new Error(u));
                }
            }
            return r = Math.max(r, 0), En(t, {
                start: {
                    column: r,
                    line: e
                }
            }, n);
        }
    });
    var Qo = {};
    Me(Qo, {
        __debug: ()=>Zo,
        check: ()=>Jo,
        doc: ()=>er,
        format: ()=>su,
        formatWithCursor: ()=>iu,
        getSupportInfo: ()=>Xo,
        util: ()=>Qt,
        version: ()=>ou
    });
    var Fu = (t, e, r, n)=>{
        if (!(t && e == null)) return e.replaceAll ? e.replaceAll(r, n) : r.global ? e.replace(r, n) : e.split(r).join(n);
    }, ee = Fu;
    var Wn = Ce(ir(), 1);
    var U = "string", j = "array", M = "cursor", T = "indent", S = "align", v = "trim", A = "group", k = "fill", B = "if-break", P = "indent-if-break", L = "line-suffix", I = "line-suffix-boundary", x = "line", O = "label", b = "break-parent", We = new Set([
        M,
        T,
        S,
        v,
        A,
        k,
        B,
        P,
        L,
        I,
        x,
        O,
        b
    ]);
    function yu(t) {
        if (typeof t == "string") return U;
        if (Array.isArray(t)) return j;
        if (!t) return;
        let { type: e } = t;
        if (We.has(e)) return e;
    }
    var W = yu;
    var xu = (t)=>new Intl.ListFormat("en-US", {
            type: "disjunction"
        }).format(t);
    function _u(t) {
        let e = t === null ? "null" : typeof t;
        if (e !== "string" && e !== "object") return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
        if (W(t)) throw new Error("doc is valid.");
        let r = Object.prototype.toString.call(t);
        if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
        let n = xu([
            ...We
        ].map((o)=>`'${o}'`));
        return `Unexpected doc.type '${t.type}'.
Expected it to be ${n}.`;
    }
    var yt = class extends Error {
        name = "InvalidDocError";
        constructor(e){
            super(_u(e)), this.doc = e;
        }
    }, q = yt;
    var sr = {};
    function Au(t, e, r, n) {
        let o = [
            t
        ];
        for(; o.length > 0;){
            let u = o.pop();
            if (u === sr) {
                r(o.pop());
                continue;
            }
            r && o.push(u, sr);
            let i = W(u);
            if (!i) throw new q(u);
            if ((e == null ? void 0 : e(u)) !== !1) switch(i){
                case j:
                case k:
                    {
                        let s = i === j ? u : u.parts;
                        for(let a = s.length, D = a - 1; D >= 0; --D)o.push(s[D]);
                        break;
                    }
                case B:
                    o.push(u.flatContents, u.breakContents);
                    break;
                case A:
                    if (n && u.expandedStates) for(let s = u.expandedStates.length, a = s - 1; a >= 0; --a)o.push(u.expandedStates[a]);
                    else o.push(u.contents);
                    break;
                case S:
                case T:
                case P:
                case O:
                case L:
                    o.push(u.contents);
                    break;
                case U:
                case M:
                case v:
                case I:
                case x:
                case b:
                    break;
                default:
                    throw new q(u);
            }
        }
    }
    var xe = Au;
    var ar = ()=>{}, z = ar, ze = ar;
    function ie(t) {
        return z(t), {
            type: T,
            contents: t
        };
    }
    function oe(t, e) {
        return z(e), {
            type: S,
            contents: e,
            n: t
        };
    }
    function xt(t, e = {}) {
        return z(t), ze(e.expandedStates, !0), {
            type: A,
            id: e.id,
            contents: t,
            break: !!e.shouldBreak,
            expandedStates: e.expandedStates
        };
    }
    function Dr(t) {
        return oe(Number.NEGATIVE_INFINITY, t);
    }
    function cr(t) {
        return oe({
            type: "root"
        }, t);
    }
    function lr(t) {
        return oe(-1, t);
    }
    function fr(t, e) {
        return xt(t[0], {
            ...e,
            expandedStates: t
        });
    }
    function Ge(t) {
        return ze(t), {
            type: k,
            parts: t
        };
    }
    function pr(t, e = "", r = {}) {
        return z(t), e !== "" && z(e), {
            type: B,
            breakContents: t,
            flatContents: e,
            groupId: r.groupId
        };
    }
    function dr(t, e) {
        return z(t), {
            type: P,
            contents: t,
            groupId: e.groupId,
            negate: e.negate
        };
    }
    function _e(t) {
        return z(t), {
            type: L,
            contents: t
        };
    }
    var Fr = {
        type: I
    }, le = {
        type: b
    }, mr = {
        type: v
    }, Ae = {
        type: x,
        hard: !0
    }, _t = {
        type: x,
        hard: !0,
        literal: !0
    }, Ke = {
        type: x
    }, Er = {
        type: x,
        soft: !0
    }, G = [
        Ae,
        le
    ], He = [
        _t,
        le
    ], Be = {
        type: M
    };
    function ke(t, e) {
        z(t), ze(e);
        let r = [];
        for(let n = 0; n < e.length; n++)n !== 0 && r.push(t), r.push(e[n]);
        return r;
    }
    function qe(t, e, r) {
        z(t);
        let n = t;
        if (e > 0) {
            for(let o = 0; o < Math.floor(e / r); ++o)n = ie(n);
            n = oe(e % r, n), n = oe(Number.NEGATIVE_INFINITY, n);
        }
        return n;
    }
    function hr(t, e) {
        return z(e), t ? {
            type: O,
            label: t,
            contents: e
        } : e;
    }
    var Bu = (t, e, r)=>{
        if (!(t && e == null)) return Array.isArray(e) || typeof e == "string" ? e[r < 0 ? e.length + r : r] : e.at(r);
    }, y = Bu;
    function Cr(t) {
        let e = t.indexOf("\r");
        return e >= 0 ? t.charAt(e + 1) === `
` ? "crlf" : "cr" : "lf";
    }
    function be(t) {
        switch(t){
            case "cr":
                return "\r";
            case "crlf":
                return `\r
`;
            default:
                return `
`;
        }
    }
    function At(t, e) {
        let r;
        switch(e){
            case `
`:
                r = /\n/g;
                break;
            case "\r":
                r = /\r/g;
                break;
            case `\r
`:
                r = /\r\n/g;
                break;
            default:
                throw new Error(`Unexpected "eol" ${JSON.stringify(e)}.`);
        }
        let n = t.match(r);
        return n ? n.length : 0;
    }
    function gr(t) {
        return ee(!1, t, /\r\n?/g, `
`);
    }
    var yr = ()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
    var xr = {
        eastAsianWidth (t) {
            var e = t.charCodeAt(0), r = t.length == 2 ? t.charCodeAt(1) : 0, n = e;
            return 55296 <= e && e <= 56319 && 56320 <= r && r <= 57343 && (e &= 1023, r &= 1023, n = e << 10 | r, n += 65536), n == 12288 || 65281 <= n && n <= 65376 || 65504 <= n && n <= 65510 ? "F" : 4352 <= n && n <= 4447 || 4515 <= n && n <= 4519 || 4602 <= n && n <= 4607 || 9001 <= n && n <= 9002 || 11904 <= n && n <= 11929 || 11931 <= n && n <= 12019 || 12032 <= n && n <= 12245 || 12272 <= n && n <= 12283 || 12289 <= n && n <= 12350 || 12353 <= n && n <= 12438 || 12441 <= n && n <= 12543 || 12549 <= n && n <= 12589 || 12593 <= n && n <= 12686 || 12688 <= n && n <= 12730 || 12736 <= n && n <= 12771 || 12784 <= n && n <= 12830 || 12832 <= n && n <= 12871 || 12880 <= n && n <= 13054 || 13056 <= n && n <= 19903 || 19968 <= n && n <= 42124 || 42128 <= n && n <= 42182 || 43360 <= n && n <= 43388 || 44032 <= n && n <= 55203 || 55216 <= n && n <= 55238 || 55243 <= n && n <= 55291 || 63744 <= n && n <= 64255 || 65040 <= n && n <= 65049 || 65072 <= n && n <= 65106 || 65108 <= n && n <= 65126 || 65128 <= n && n <= 65131 || 110592 <= n && n <= 110593 || 127488 <= n && n <= 127490 || 127504 <= n && n <= 127546 || 127552 <= n && n <= 127560 || 127568 <= n && n <= 127569 || 131072 <= n && n <= 194367 || 177984 <= n && n <= 196605 || 196608 <= n && n <= 262141 ? "W" : "N";
        }
    };
    var ku = /[^\x20-\x7F]/;
    function bu(t) {
        if (!t) return 0;
        if (!ku.test(t)) return t.length;
        t = t.replace(yr(), "  ");
        let e = 0;
        for (let r of t){
            let n = r.codePointAt(0);
            if (n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879) continue;
            let o = xr.eastAsianWidth(r);
            e += o === "F" || o === "W" ? 2 : 1;
        }
        return e;
    }
    var we = bu;
    var Br = (t)=>{
        if (Array.isArray(t)) return t;
        if (t.type !== k) throw new Error(`Expect doc to be 'array' or '${k}'.`);
        return t.parts;
    };
    function Ne(t, e) {
        if (typeof t == "string") return e(t);
        let r = new Map;
        return n(t);
        function n(u) {
            if (r.has(u)) return r.get(u);
            let i = o(u);
            return r.set(u, i), i;
        }
        function o(u) {
            switch(W(u)){
                case j:
                    return e(u.map(n));
                case k:
                    return e({
                        ...u,
                        parts: u.parts.map(n)
                    });
                case B:
                    return e({
                        ...u,
                        breakContents: n(u.breakContents),
                        flatContents: n(u.flatContents)
                    });
                case A:
                    {
                        let { expandedStates: i, contents: s } = u;
                        return i ? (i = i.map(n), s = i[0]) : s = n(s), e({
                            ...u,
                            contents: s,
                            expandedStates: i
                        });
                    }
                case S:
                case T:
                case P:
                case O:
                case L:
                    return e({
                        ...u,
                        contents: n(u.contents)
                    });
                case U:
                case M:
                case v:
                case I:
                case x:
                case b:
                    return e(u);
                default:
                    throw new q(u);
            }
        }
    }
    function Je(t, e, r) {
        let n = r, o = !1;
        function u(i) {
            if (o) return !1;
            let s = e(i);
            s !== void 0 && (o = !0, n = s);
        }
        return xe(t, u), n;
    }
    function wu(t) {
        if (t.type === A && t.break || t.type === x && t.hard || t.type === b) return !0;
    }
    function kr(t) {
        return Je(t, wu, !1);
    }
    function _r(t) {
        if (t.length > 0) {
            let e = y(!1, t, -1);
            !e.expandedStates && !e.break && (e.break = "propagated");
        }
        return null;
    }
    function br(t) {
        let e = new Set, r = [];
        function n(u) {
            if (u.type === b && _r(r), u.type === A) {
                if (r.push(u), e.has(u)) return !1;
                e.add(u);
            }
        }
        function o(u) {
            u.type === A && r.pop().break && _r(r);
        }
        xe(t, n, o, !0);
    }
    function Ou(t) {
        return t.type === x && !t.hard ? t.soft ? "" : " " : t.type === B ? t.flatContents : t;
    }
    function wr(t) {
        return Ne(t, Ou);
    }
    function Ar(t) {
        for(t = [
            ...t
        ]; t.length >= 2 && y(!1, t, -2).type === x && y(!1, t, -1).type === b;)t.length -= 2;
        if (t.length > 0) {
            let e = Oe(y(!1, t, -1));
            t[t.length - 1] = e;
        }
        return t;
    }
    function Oe(t) {
        switch(W(t)){
            case S:
            case T:
            case P:
            case A:
            case L:
            case O:
                {
                    let e = Oe(t.contents);
                    return {
                        ...t,
                        contents: e
                    };
                }
            case B:
                return {
                    ...t,
                    breakContents: Oe(t.breakContents),
                    flatContents: Oe(t.flatContents)
                };
            case k:
                return {
                    ...t,
                    parts: Ar(t.parts)
                };
            case j:
                return Ar(t);
            case U:
                return t.replace(/[\n\r]*$/, "");
            case M:
            case v:
            case I:
            case x:
            case b:
                break;
            default:
                throw new q(t);
        }
        return t;
    }
    function Xe(t) {
        return Oe(Tu(t));
    }
    function Nu(t) {
        switch(W(t)){
            case k:
                if (t.parts.every((e)=>e === "")) return "";
                break;
            case A:
                if (!t.contents && !t.id && !t.break && !t.expandedStates) return "";
                if (t.contents.type === A && t.contents.id === t.id && t.contents.break === t.break && t.contents.expandedStates === t.expandedStates) return t.contents;
                break;
            case S:
            case T:
            case P:
            case L:
                if (!t.contents) return "";
                break;
            case B:
                if (!t.flatContents && !t.breakContents) return "";
                break;
            case j:
                {
                    let e = [];
                    for (let r of t){
                        if (!r) continue;
                        let [n, ...o] = Array.isArray(r) ? r : [
                            r
                        ];
                        typeof n == "string" && typeof y(!1, e, -1) == "string" ? e[e.length - 1] += n : e.push(n), e.push(...o);
                    }
                    return e.length === 0 ? "" : e.length === 1 ? e[0] : e;
                }
            case U:
            case M:
            case v:
            case I:
            case x:
            case O:
            case b:
                break;
            default:
                throw new q(t);
        }
        return t;
    }
    function Tu(t) {
        return Ne(t, (e)=>Nu(e));
    }
    function Or(t, e = He) {
        return Ne(t, (r)=>typeof r == "string" ? ke(e, r.split(`
`)) : r);
    }
    function Su(t) {
        if (t.type === x) return !0;
    }
    function Nr(t) {
        return Je(t, Su, !1);
    }
    function Ze(t, e) {
        return t.type === O ? {
            ...t,
            contents: e(t.contents)
        } : e(t);
    }
    var R = Symbol("MODE_BREAK"), K = Symbol("MODE_FLAT"), Te = Symbol("cursor");
    function Tr() {
        return {
            value: "",
            length: 0,
            queue: []
        };
    }
    function vu(t, e) {
        return Bt(t, {
            type: "indent"
        }, e);
    }
    function Pu(t, e, r) {
        return e === Number.NEGATIVE_INFINITY ? t.root || Tr() : e < 0 ? Bt(t, {
            type: "dedent"
        }, r) : e ? e.type === "root" ? {
            ...t,
            root: t
        } : Bt(t, {
            type: typeof e == "string" ? "stringAlign" : "numberAlign",
            n: e
        }, r) : t;
    }
    function Bt(t, e, r) {
        let n = e.type === "dedent" ? t.queue.slice(0, -1) : [
            ...t.queue,
            e
        ], o = "", u = 0, i = 0, s = 0;
        for (let l of n)switch(l.type){
            case "indent":
                c(), r.useTabs ? a(1) : D(r.tabWidth);
                break;
            case "stringAlign":
                c(), o += l.n, u += l.n.length;
                break;
            case "numberAlign":
                i += 1, s += l.n;
                break;
            default:
                throw new Error(`Unexpected type '${l.type}'`);
        }
        return f(), {
            ...t,
            value: o,
            length: u,
            queue: n
        };
        function a(l) {
            o += "	".repeat(l), u += r.tabWidth * l;
        }
        function D(l) {
            o += " ".repeat(l), u += l;
        }
        function c() {
            r.useTabs ? F() : f();
        }
        function F() {
            i > 0 && a(i), d();
        }
        function f() {
            s > 0 && D(s), d();
        }
        function d() {
            i = 0, s = 0;
        }
    }
    function kt(t) {
        let e = 0, r = 0, n = t.length;
        e: for(; n--;){
            let o = t[n];
            if (o === Te) {
                r++;
                continue;
            }
            for(let u = o.length - 1; u >= 0; u--){
                let i = o[u];
                if (i === " " || i === "	") e++;
                else {
                    t[n] = o.slice(0, u + 1);
                    break e;
                }
            }
        }
        if (e > 0 || r > 0) for(t.length = n + 1; r-- > 0;)t.push(Te);
        return e;
    }
    function Qe(t, e, r, n, o, u) {
        if (r === Number.POSITIVE_INFINITY) return !0;
        let i = e.length, s = [
            t
        ], a = [];
        for(; r >= 0;){
            if (s.length === 0) {
                if (i === 0) return !0;
                s.push(e[--i]);
                continue;
            }
            let { mode: D, doc: c } = s.pop();
            switch(W(c)){
                case U:
                    a.push(c), r -= we(c);
                    break;
                case j:
                case k:
                    {
                        let F = Br(c);
                        for(let f = F.length - 1; f >= 0; f--)s.push({
                            mode: D,
                            doc: F[f]
                        });
                        break;
                    }
                case T:
                case S:
                case P:
                case O:
                    s.push({
                        mode: D,
                        doc: c.contents
                    });
                    break;
                case v:
                    r += kt(a);
                    break;
                case A:
                    {
                        if (u && c.break) return !1;
                        let F = c.break ? R : D, f = c.expandedStates && F === R ? y(!1, c.expandedStates, -1) : c.contents;
                        s.push({
                            mode: F,
                            doc: f
                        });
                        break;
                    }
                case B:
                    {
                        let f = (c.groupId ? o[c.groupId] || K : D) === R ? c.breakContents : c.flatContents;
                        f && s.push({
                            mode: D,
                            doc: f
                        });
                        break;
                    }
                case x:
                    if (D === R || c.hard) return !0;
                    c.soft || (a.push(" "), r--);
                    break;
                case L:
                    n = !0;
                    break;
                case I:
                    if (n) return !1;
                    break;
            }
        }
        return !1;
    }
    function fe(t, e) {
        let r = {}, n = e.printWidth, o = be(e.endOfLine), u = 0, i = [
            {
                ind: Tr(),
                mode: R,
                doc: t
            }
        ], s = [], a = !1, D = [], c = 0;
        for(br(t); i.length > 0;){
            let { ind: f, mode: d, doc: l } = i.pop();
            switch(W(l)){
                case U:
                    {
                        let p = o !== `
` ? ee(!1, l, `
`, o) : l;
                        s.push(p), i.length > 0 && (u += we(p));
                        break;
                    }
                case j:
                    for(let p = l.length - 1; p >= 0; p--)i.push({
                        ind: f,
                        mode: d,
                        doc: l[p]
                    });
                    break;
                case M:
                    if (c >= 2) throw new Error("There are too many 'cursor' in doc.");
                    s.push(Te), c++;
                    break;
                case T:
                    i.push({
                        ind: vu(f, e),
                        mode: d,
                        doc: l.contents
                    });
                    break;
                case S:
                    i.push({
                        ind: Pu(f, l.n, e),
                        mode: d,
                        doc: l.contents
                    });
                    break;
                case v:
                    u -= kt(s);
                    break;
                case A:
                    switch(d){
                        case K:
                            if (!a) {
                                i.push({
                                    ind: f,
                                    mode: l.break ? R : K,
                                    doc: l.contents
                                });
                                break;
                            }
                        case R:
                            {
                                a = !1;
                                let p = {
                                    ind: f,
                                    mode: K,
                                    doc: l.contents
                                }, m = n - u, E = D.length > 0;
                                if (!l.break && Qe(p, i, m, E, r)) i.push(p);
                                else if (l.expandedStates) {
                                    let h = y(!1, l.expandedStates, -1);
                                    if (l.break) {
                                        i.push({
                                            ind: f,
                                            mode: R,
                                            doc: h
                                        });
                                        break;
                                    } else for(let g = 1; g < l.expandedStates.length + 1; g++)if (g >= l.expandedStates.length) {
                                        i.push({
                                            ind: f,
                                            mode: R,
                                            doc: h
                                        });
                                        break;
                                    } else {
                                        let C = l.expandedStates[g], _ = {
                                            ind: f,
                                            mode: K,
                                            doc: C
                                        };
                                        if (Qe(_, i, m, E, r)) {
                                            i.push(_);
                                            break;
                                        }
                                    }
                                } else i.push({
                                    ind: f,
                                    mode: R,
                                    doc: l.contents
                                });
                                break;
                            }
                    }
                    l.id && (r[l.id] = y(!1, i, -1).mode);
                    break;
                case k:
                    {
                        let p = n - u, { parts: m } = l;
                        if (m.length === 0) break;
                        let [E, h] = m, g = {
                            ind: f,
                            mode: K,
                            doc: E
                        }, C = {
                            ind: f,
                            mode: R,
                            doc: E
                        }, _ = Qe(g, [], p, D.length > 0, r, !0);
                        if (m.length === 1) {
                            _ ? i.push(g) : i.push(C);
                            break;
                        }
                        let Z = {
                            ind: f,
                            mode: K,
                            doc: h
                        }, $ = {
                            ind: f,
                            mode: R,
                            doc: h
                        };
                        if (m.length === 2) {
                            _ ? i.push(Z, g) : i.push($, C);
                            break;
                        }
                        m.splice(0, 2);
                        let Q = {
                            ind: f,
                            mode: d,
                            doc: Ge(m)
                        }, tr = m[0];
                        Qe({
                            ind: f,
                            mode: K,
                            doc: [
                                E,
                                h,
                                tr
                            ]
                        }, [], p, D.length > 0, r, !0) ? i.push(Q, Z, g) : _ ? i.push(Q, $, g) : i.push(Q, $, C);
                        break;
                    }
                case B:
                case P:
                    {
                        let p = l.groupId ? r[l.groupId] : d;
                        if (p === R) {
                            let m = l.type === B ? l.breakContents : l.negate ? l.contents : ie(l.contents);
                            m && i.push({
                                ind: f,
                                mode: d,
                                doc: m
                            });
                        }
                        if (p === K) {
                            let m = l.type === B ? l.flatContents : l.negate ? ie(l.contents) : l.contents;
                            m && i.push({
                                ind: f,
                                mode: d,
                                doc: m
                            });
                        }
                        break;
                    }
                case L:
                    D.push({
                        ind: f,
                        mode: d,
                        doc: l.contents
                    });
                    break;
                case I:
                    D.length > 0 && i.push({
                        ind: f,
                        mode: d,
                        doc: Ae
                    });
                    break;
                case x:
                    switch(d){
                        case K:
                            if (l.hard) a = !0;
                            else {
                                l.soft || (s.push(" "), u += 1);
                                break;
                            }
                        case R:
                            if (D.length > 0) {
                                i.push({
                                    ind: f,
                                    mode: d,
                                    doc: l
                                }, ...D.reverse()), D.length = 0;
                                break;
                            }
                            l.literal ? f.root ? (s.push(o, f.root.value), u = f.root.length) : (s.push(o), u = 0) : (u -= kt(s), s.push(o + f.value), u = f.length);
                            break;
                    }
                    break;
                case O:
                    i.push({
                        ind: f,
                        mode: d,
                        doc: l.contents
                    });
                    break;
                case b:
                    break;
                default:
                    throw new q(l);
            }
            i.length === 0 && D.length > 0 && (i.push(...D.reverse()), D.length = 0);
        }
        let F = s.indexOf(Te);
        if (F !== -1) {
            let f = s.indexOf(Te, F + 1), d = s.slice(0, F).join(""), l = s.slice(F + 1, f).join(""), p = s.slice(f + 1).join("");
            return {
                formatted: d + l + p,
                cursorNodeStart: d.length,
                cursorNodeText: l
            };
        }
        return {
            formatted: s.join("")
        };
    }
    function J(t) {
        var e;
        if (!t) return "";
        if (Array.isArray(t)) {
            let r = [];
            for (let n of t)if (Array.isArray(n)) r.push(...J(n));
            else {
                let o = J(n);
                o !== "" && r.push(o);
            }
            return r;
        }
        return t.type === B ? {
            ...t,
            breakContents: J(t.breakContents),
            flatContents: J(t.flatContents)
        } : t.type === A ? {
            ...t,
            contents: J(t.contents),
            expandedStates: (e = t.expandedStates) == null ? void 0 : e.map(J)
        } : t.type === k ? {
            type: "fill",
            parts: t.parts.map(J)
        } : t.contents ? {
            ...t,
            contents: J(t.contents)
        } : t;
    }
    function Sr(t) {
        let e = Object.create(null), r = new Set;
        return n(J(t));
        function n(u, i, s) {
            var a, D;
            if (typeof u == "string") return JSON.stringify(u);
            if (Array.isArray(u)) {
                let c = u.map(n).filter(Boolean);
                return c.length === 1 ? c[0] : `[${c.join(", ")}]`;
            }
            if (u.type === x) {
                let c = ((a = s == null ? void 0 : s[i + 1]) == null ? void 0 : a.type) === b;
                return u.literal ? c ? "literalline" : "literallineWithoutBreakParent" : u.hard ? c ? "hardline" : "hardlineWithoutBreakParent" : u.soft ? "softline" : "line";
            }
            if (u.type === b) return ((D = s == null ? void 0 : s[i - 1]) == null ? void 0 : D.type) === x && s[i - 1].hard ? void 0 : "breakParent";
            if (u.type === v) return "trim";
            if (u.type === T) return "indent(" + n(u.contents) + ")";
            if (u.type === S) return u.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + n(u.contents) + ")" : u.n < 0 ? "dedent(" + n(u.contents) + ")" : u.n.type === "root" ? "markAsRoot(" + n(u.contents) + ")" : "align(" + JSON.stringify(u.n) + ", " + n(u.contents) + ")";
            if (u.type === B) return "ifBreak(" + n(u.breakContents) + (u.flatContents ? ", " + n(u.flatContents) : "") + (u.groupId ? (u.flatContents ? "" : ', ""') + `, { groupId: ${o(u.groupId)} }` : "") + ")";
            if (u.type === P) {
                let c = [];
                u.negate && c.push("negate: true"), u.groupId && c.push(`groupId: ${o(u.groupId)}`);
                let F = c.length > 0 ? `, { ${c.join(", ")} }` : "";
                return `indentIfBreak(${n(u.contents)}${F})`;
            }
            if (u.type === A) {
                let c = [];
                u.break && u.break !== "propagated" && c.push("shouldBreak: true"), u.id && c.push(`id: ${o(u.id)}`);
                let F = c.length > 0 ? `, { ${c.join(", ")} }` : "";
                return u.expandedStates ? `conditionalGroup([${u.expandedStates.map((f)=>n(f)).join(",")}]${F})` : `group(${n(u.contents)}${F})`;
            }
            if (u.type === k) return `fill([${u.parts.map((c)=>n(c)).join(", ")}])`;
            if (u.type === L) return "lineSuffix(" + n(u.contents) + ")";
            if (u.type === I) return "lineSuffixBoundary";
            if (u.type === O) return `label(${JSON.stringify(u.label)}, ${n(u.contents)})`;
            throw new Error("Unknown doc type " + u.type);
        }
        function o(u) {
            if (typeof u != "symbol") return JSON.stringify(String(u));
            if (u in e) return e[u];
            let i = u.description || "symbol";
            for(let s = 0;; s++){
                let a = i + (s > 0 ? ` #${s}` : "");
                if (!r.has(a)) return r.add(a), e[u] = `Symbol.for(${JSON.stringify(a)})`;
            }
        }
    }
    function Lu(t, e, r = 0) {
        let n = 0;
        for(let o = r; o < t.length; ++o)t[o] === "	" ? n = n + e - n % e : n++;
        return n;
    }
    var pe = Lu;
    var Se = class extends Error {
        name = "ConfigError";
    }, ve = class extends Error {
        name = "UndefinedParserError";
    };
    var vr = {
        cursorOffset: {
            category: "Special",
            type: "int",
            default: -1,
            range: {
                start: -1,
                end: 1 / 0,
                step: 1
            },
            description: `Print (to stderr) where a cursor at the given position would move to after formatting.
This option cannot be used with --range-start and --range-end.`,
            cliCategory: "Editor"
        },
        endOfLine: {
            category: "Global",
            type: "choice",
            default: "lf",
            description: "Which end of line characters to apply.",
            choices: [
                {
                    value: "lf",
                    description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
                },
                {
                    value: "crlf",
                    description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
                },
                {
                    value: "cr",
                    description: "Carriage Return character only (\\r), used very rarely"
                },
                {
                    value: "auto",
                    description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`
                }
            ]
        },
        filepath: {
            category: "Special",
            type: "path",
            description: "Specify the input filepath. This will be used to do parser inference.",
            cliName: "stdin-filepath",
            cliCategory: "Other",
            cliDescription: "Path to the file to pretend that stdin comes from."
        },
        insertPragma: {
            category: "Special",
            type: "boolean",
            default: !1,
            description: "Insert @format pragma into file's first docblock comment.",
            cliCategory: "Other"
        },
        parser: {
            category: "Global",
            type: "choice",
            default: void 0,
            description: "Which parser to use.",
            exception: (t)=>typeof t == "string" || typeof t == "function",
            choices: [
                {
                    value: "flow",
                    description: "Flow"
                },
                {
                    value: "babel",
                    description: "JavaScript"
                },
                {
                    value: "babel-flow",
                    description: "Flow"
                },
                {
                    value: "babel-ts",
                    description: "TypeScript"
                },
                {
                    value: "typescript",
                    description: "TypeScript"
                },
                {
                    value: "acorn",
                    description: "JavaScript"
                },
                {
                    value: "espree",
                    description: "JavaScript"
                },
                {
                    value: "meriyah",
                    description: "JavaScript"
                },
                {
                    value: "css",
                    description: "CSS"
                },
                {
                    value: "less",
                    description: "Less"
                },
                {
                    value: "scss",
                    description: "SCSS"
                },
                {
                    value: "json",
                    description: "JSON"
                },
                {
                    value: "json5",
                    description: "JSON5"
                },
                {
                    value: "json-stringify",
                    description: "JSON.stringify"
                },
                {
                    value: "graphql",
                    description: "GraphQL"
                },
                {
                    value: "markdown",
                    description: "Markdown"
                },
                {
                    value: "mdx",
                    description: "MDX"
                },
                {
                    value: "vue",
                    description: "Vue"
                },
                {
                    value: "yaml",
                    description: "YAML"
                },
                {
                    value: "glimmer",
                    description: "Ember / Handlebars"
                },
                {
                    value: "html",
                    description: "HTML"
                },
                {
                    value: "angular",
                    description: "Angular"
                },
                {
                    value: "lwc",
                    description: "Lightning Web Components"
                }
            ]
        },
        plugins: {
            type: "path",
            array: !0,
            default: [
                {
                    value: []
                }
            ],
            category: "Global",
            description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
            exception: (t)=>typeof t == "string" || typeof t == "object",
            cliName: "plugin",
            cliCategory: "Config"
        },
        printWidth: {
            category: "Global",
            type: "int",
            default: 80,
            description: "The line length where Prettier will try wrap.",
            range: {
                start: 0,
                end: 1 / 0,
                step: 1
            }
        },
        rangeEnd: {
            category: "Special",
            type: "int",
            default: 1 / 0,
            range: {
                start: 0,
                end: 1 / 0,
                step: 1
            },
            description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.
This option cannot be used with --cursor-offset.`,
            cliCategory: "Editor"
        },
        rangeStart: {
            category: "Special",
            type: "int",
            default: 0,
            range: {
                start: 0,
                end: 1 / 0,
                step: 1
            },
            description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.
This option cannot be used with --cursor-offset.`,
            cliCategory: "Editor"
        },
        requirePragma: {
            category: "Special",
            type: "boolean",
            default: !1,
            description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,
            cliCategory: "Other"
        },
        tabWidth: {
            type: "int",
            category: "Global",
            default: 2,
            description: "Number of spaces per indentation level.",
            range: {
                start: 0,
                end: 1 / 0,
                step: 1
            }
        },
        useTabs: {
            category: "Global",
            type: "boolean",
            default: !1,
            description: "Indent with tabs instead of spaces."
        },
        embeddedLanguageFormatting: {
            category: "Global",
            type: "choice",
            default: "auto",
            description: "Control how Prettier formats quoted code embedded in the file.",
            choices: [
                {
                    value: "auto",
                    description: "Format embedded code if Prettier can automatically identify it."
                },
                {
                    value: "off",
                    description: "Never automatically format embedded code."
                }
            ]
        }
    };
    function et({ plugins: t = [], showDeprecated: e = !1 } = {}) {
        let r = t.flatMap((o)=>o.languages ?? []), n = [];
        for (let o of Ru(Object.assign({}, ...t.map(({ options: u })=>u), vr)))!e && o.deprecated || (Array.isArray(o.choices) && (e || (o.choices = o.choices.filter((u)=>!u.deprecated)), o.name === "parser" && (o.choices = [
            ...o.choices,
            ...Iu(o.choices, r, t)
        ])), o.pluginDefaults = Object.fromEntries(t.filter((u)=>{
            var i;
            return ((i = u.defaultOptions) == null ? void 0 : i[o.name]) !== void 0;
        }).map((u)=>[
                u.name,
                u.defaultOptions[o.name]
            ])), n.push(o));
        return {
            languages: r,
            options: n
        };
    }
    function* Iu(t, e, r) {
        let n = new Set(t.map((o)=>o.value));
        for (let o of e)if (o.parsers) {
            for (let u of o.parsers)if (!n.has(u)) {
                n.add(u);
                let i = r.find((a)=>a.parsers && Object.prototype.hasOwnProperty.call(a.parsers, u)), s = o.name;
                i != null && i.name && (s += ` (plugin: ${i.name})`), yield {
                    value: u,
                    description: s
                };
            }
        }
    }
    function Ru(t) {
        let e = [];
        for (let [r, n] of Object.entries(t)){
            let o = {
                name: r,
                ...n
            };
            Array.isArray(o.default) && (o.default = y(!1, o.default, -1).value), e.push(o);
        }
        return e;
    }
    var Yu = (t)=>t.split(/[/\\]/).pop();
    function Pr(t, e) {
        if (!e) return;
        let r = Yu(e).toLowerCase();
        return t.find((n)=>{
            var o, u;
            return ((o = n.extensions) == null ? void 0 : o.some((i)=>r.endsWith(i))) || ((u = n.filenames) == null ? void 0 : u.some((i)=>i.toLowerCase() === r));
        });
    }
    function ju(t, e) {
        if (e) return t.find(({ name: r })=>r.toLowerCase() === e) ?? t.find(({ aliases: r })=>r == null ? void 0 : r.includes(e)) ?? t.find(({ extensions: r })=>r == null ? void 0 : r.includes(`.${e}`));
    }
    function Vu(t, e) {
        let r = t.plugins.flatMap((o)=>o.languages ?? []), n = ju(r, e.language) ?? Pr(r, e.physicalFile) ?? Pr(r, e.file) ?? (e.physicalFile, void 0);
        return n == null ? void 0 : n.parsers[0];
    }
    var Lr = Vu;
    var te = {
        key: (t)=>/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(t) ? t : JSON.stringify(t),
        value (t) {
            if (t === null || typeof t != "object") return JSON.stringify(t);
            if (Array.isArray(t)) return `[${t.map((r)=>te.value(r)).join(", ")}]`;
            let e = Object.keys(t);
            return e.length === 0 ? "{}" : `{ ${e.map((r)=>`${te.key(r)}: ${te.value(t[r])}`).join(", ")} }`;
        },
        pair: ({ key: t, value: e })=>te.value({
                [t]: e
            })
    };
    var bt = Ce(Pe(), 1), Yr = (t, e, { descriptor: r })=>{
        let n = [
            `${bt.default.yellow(typeof t == "string" ? r.key(t) : r.pair(t))} is deprecated`
        ];
        return e && n.push(`we now treat it as ${bt.default.blue(typeof e == "string" ? r.key(e) : r.pair(e))}`), n.join("; ") + ".";
    };
    var se = Ce(Pe(), 1);
    var tt = Symbol.for("vnopts.VALUE_NOT_EXIST"), de = Symbol.for("vnopts.VALUE_UNCHANGED");
    var jr = " ".repeat(2), $r = (t, e, r)=>{
        let { text: n, list: o } = r.normalizeExpectedResult(r.schemas[t].expected(r)), u = [];
        return n && u.push(Vr(t, e, n, r.descriptor)), o && u.push([
            Vr(t, e, o.title, r.descriptor)
        ].concat(o.values.map((i)=>Ur(i, r.loggerPrintWidth))).join(`
`)), Mr(u, r.loggerPrintWidth);
    };
    function Vr(t, e, r, n) {
        return [
            `Invalid ${se.default.red(n.key(t))} value.`,
            `Expected ${se.default.blue(r)},`,
            `but received ${e === tt ? se.default.gray("nothing") : se.default.red(n.value(e))}.`
        ].join(" ");
    }
    function Ur({ text: t, list: e }, r) {
        let n = [];
        return t && n.push(`- ${se.default.blue(t)}`), e && n.push([
            `- ${se.default.blue(e.title)}:`
        ].concat(e.values.map((o)=>Ur(o, r - jr.length).replace(/^|\n/g, `$&${jr}`))).join(`
`)), Mr(n, r);
    }
    function Mr(t, e) {
        if (t.length === 1) return t[0];
        let [r, n] = t, [o, u] = t.map((i)=>i.split(`
`, 1)[0].length);
        return o > e && o > u ? n : r;
    }
    var Nt = Ce(Pe(), 1);
    var wt = [], Wr = [];
    function Ot(t, e) {
        if (t === e) return 0;
        let r = t;
        t.length > e.length && (t = e, e = r);
        let n = t.length, o = e.length;
        for(; n > 0 && t.charCodeAt(~-n) === e.charCodeAt(~-o);)n--, o--;
        let u = 0;
        for(; u < n && t.charCodeAt(u) === e.charCodeAt(u);)u++;
        if (n -= u, o -= u, n === 0) return o;
        let i, s, a, D, c = 0, F = 0;
        for(; c < n;)Wr[c] = t.charCodeAt(u + c), wt[c] = ++c;
        for(; F < o;)for(i = e.charCodeAt(u + F), a = F++, s = F, c = 0; c < n; c++)D = i === Wr[c] ? a : a + 1, a = wt[c], s = wt[c] = a > s ? D > s ? s + 1 : D : D > a ? a + 1 : D;
        return s;
    }
    var rt = (t, e, { descriptor: r, logger: n, schemas: o })=>{
        let u = [
            `Ignored unknown option ${Nt.default.yellow(r.pair({
                key: t,
                value: e
            }))}.`
        ], i = Object.keys(o).sort().find((s)=>Ot(t, s) < 3);
        i && u.push(`Did you mean ${Nt.default.blue(r.key(i))}?`), n.warn(u.join(" "));
    };
    var $u = [
        "default",
        "expected",
        "validate",
        "deprecated",
        "forward",
        "redirect",
        "overlap",
        "preprocess",
        "postprocess"
    ];
    function Uu(t, e) {
        let r = new t(e), n = Object.create(r);
        for (let o of $u)o in e && (n[o] = Mu(e[o], r, w.prototype[o].length));
        return n;
    }
    var w = class {
        static create(e) {
            return Uu(this, e);
        }
        constructor(e){
            this.name = e.name;
        }
        default(e) {}
        expected(e) {
            return "nothing";
        }
        validate(e, r) {
            return !1;
        }
        deprecated(e, r) {
            return !1;
        }
        forward(e, r) {}
        redirect(e, r) {}
        overlap(e, r, n) {
            return e;
        }
        preprocess(e, r) {
            return e;
        }
        postprocess(e, r) {
            return de;
        }
    };
    function Mu(t, e, r) {
        return typeof t == "function" ? (...n)=>t(...n.slice(0, r - 1), e, ...n.slice(r - 1)) : ()=>t;
    }
    var nt = class extends w {
        constructor(e){
            super(e), this._sourceName = e.sourceName;
        }
        expected(e) {
            return e.schemas[this._sourceName].expected(e);
        }
        validate(e, r) {
            return r.schemas[this._sourceName].validate(e, r);
        }
        redirect(e, r) {
            return this._sourceName;
        }
    };
    var ut = class extends w {
        expected() {
            return "anything";
        }
        validate() {
            return !0;
        }
    };
    var ot = class extends w {
        constructor({ valueSchema: e, name: r = e.name, ...n }){
            super({
                ...n,
                name: r
            }), this._valueSchema = e;
        }
        expected(e) {
            let { text: r, list: n } = e.normalizeExpectedResult(this._valueSchema.expected(e));
            return {
                text: r && `an array of ${r}`,
                list: n && {
                    title: "an array of the following values",
                    values: [
                        {
                            list: n
                        }
                    ]
                }
            };
        }
        validate(e, r) {
            if (!Array.isArray(e)) return !1;
            let n = [];
            for (let o of e){
                let u = r.normalizeValidateResult(this._valueSchema.validate(o, r), o);
                u !== !0 && n.push(u.value);
            }
            return n.length === 0 ? !0 : {
                value: n
            };
        }
        deprecated(e, r) {
            let n = [];
            for (let o of e){
                let u = r.normalizeDeprecatedResult(this._valueSchema.deprecated(o, r), o);
                u !== !1 && n.push(...u.map(({ value: i })=>({
                        value: [
                            i
                        ]
                    })));
            }
            return n;
        }
        forward(e, r) {
            let n = [];
            for (let o of e){
                let u = r.normalizeForwardResult(this._valueSchema.forward(o, r), o);
                n.push(...u.map(zr));
            }
            return n;
        }
        redirect(e, r) {
            let n = [], o = [];
            for (let u of e){
                let i = r.normalizeRedirectResult(this._valueSchema.redirect(u, r), u);
                "remain" in i && n.push(i.remain), o.push(...i.redirect.map(zr));
            }
            return n.length === 0 ? {
                redirect: o
            } : {
                redirect: o,
                remain: n
            };
        }
        overlap(e, r) {
            return e.concat(r);
        }
    };
    function zr({ from: t, to: e }) {
        return {
            from: [
                t
            ],
            to: e
        };
    }
    var it = class extends w {
        expected() {
            return "true or false";
        }
        validate(e) {
            return typeof e == "boolean";
        }
    };
    function Kr(t, e) {
        let r = Object.create(null);
        for (let n of t){
            let o = n[e];
            if (r[o]) throw new Error(`Duplicate ${e} ${JSON.stringify(o)}`);
            r[o] = n;
        }
        return r;
    }
    function Hr(t, e) {
        let r = new Map;
        for (let n of t){
            let o = n[e];
            if (r.has(o)) throw new Error(`Duplicate ${e} ${JSON.stringify(o)}`);
            r.set(o, n);
        }
        return r;
    }
    function qr() {
        let t = Object.create(null);
        return (e)=>{
            let r = JSON.stringify(e);
            return t[r] ? !0 : (t[r] = !0, !1);
        };
    }
    function Jr(t, e) {
        let r = [], n = [];
        for (let o of t)e(o) ? r.push(o) : n.push(o);
        return [
            r,
            n
        ];
    }
    function Xr(t) {
        return t === Math.floor(t);
    }
    function Zr(t, e) {
        if (t === e) return 0;
        let r = typeof t, n = typeof e, o = [
            "undefined",
            "object",
            "boolean",
            "number",
            "string"
        ];
        return r !== n ? o.indexOf(r) - o.indexOf(n) : r !== "string" ? Number(t) - Number(e) : t.localeCompare(e);
    }
    function Qr(t) {
        return (...e)=>{
            let r = t(...e);
            return typeof r == "string" ? new Error(r) : r;
        };
    }
    function Tt(t) {
        return t === void 0 ? {} : t;
    }
    function St(t) {
        if (typeof t == "string") return {
            text: t
        };
        let { text: e, list: r } = t;
        return Wu((e || r) !== void 0, "Unexpected `expected` result, there should be at least one field."), r ? {
            text: e,
            list: {
                title: r.title,
                values: r.values.map(St)
            }
        } : {
            text: e
        };
    }
    function vt(t, e) {
        return t === !0 ? !0 : t === !1 ? {
            value: e
        } : t;
    }
    function Pt(t, e, r = !1) {
        return t === !1 ? !1 : t === !0 ? r ? !0 : [
            {
                value: e
            }
        ] : "value" in t ? [
            t
        ] : t.length === 0 ? !1 : t;
    }
    function Gr(t, e) {
        return typeof t == "string" || "key" in t ? {
            from: e,
            to: t
        } : "from" in t ? {
            from: t.from,
            to: t.to
        } : {
            from: e,
            to: t.to
        };
    }
    function st(t, e) {
        return t === void 0 ? [] : Array.isArray(t) ? t.map((r)=>Gr(r, e)) : [
            Gr(t, e)
        ];
    }
    function Lt(t, e) {
        let r = st(typeof t == "object" && "redirect" in t ? t.redirect : t, e);
        return r.length === 0 ? {
            remain: e,
            redirect: r
        } : typeof t == "object" && "remain" in t ? {
            remain: t.remain,
            redirect: r
        } : {
            redirect: r
        };
    }
    function Wu(t, e) {
        if (!t) throw new Error(e);
    }
    var at = class extends w {
        constructor(e){
            super(e), this._choices = Hr(e.choices.map((r)=>r && typeof r == "object" ? r : {
                    value: r
                }), "value");
        }
        expected({ descriptor: e }) {
            let r = Array.from(this._choices.keys()).map((i)=>this._choices.get(i)).filter(({ hidden: i })=>!i).map((i)=>i.value).sort(Zr).map(e.value), n = r.slice(0, -2), o = r.slice(-2);
            return {
                text: n.concat(o.join(" or ")).join(", "),
                list: {
                    title: "one of the following values",
                    values: r
                }
            };
        }
        validate(e) {
            return this._choices.has(e);
        }
        deprecated(e) {
            let r = this._choices.get(e);
            return r && r.deprecated ? {
                value: e
            } : !1;
        }
        forward(e) {
            let r = this._choices.get(e);
            return r ? r.forward : void 0;
        }
        redirect(e) {
            let r = this._choices.get(e);
            return r ? r.redirect : void 0;
        }
    };
    var Dt = class extends w {
        expected() {
            return "a number";
        }
        validate(e, r) {
            return typeof e == "number";
        }
    };
    var ct = class extends Dt {
        expected() {
            return "an integer";
        }
        validate(e, r) {
            return r.normalizeValidateResult(super.validate(e, r), e) === !0 && Xr(e);
        }
    };
    var Le = class extends w {
        expected() {
            return "a string";
        }
        validate(e) {
            return typeof e == "string";
        }
    };
    var en = te, tn = rt, rn = $r, nn = Yr;
    var lt = class {
        constructor(e, r){
            let { logger: n = console, loggerPrintWidth: o = 80, descriptor: u = en, unknown: i = tn, invalid: s = rn, deprecated: a = nn, missing: D = ()=>!1, required: c = ()=>!1, preprocess: F = (d)=>d, postprocess: f = ()=>de } = r || {};
            this._utils = {
                descriptor: u,
                logger: n || {
                    warn: ()=>{}
                },
                loggerPrintWidth: o,
                schemas: Kr(e, "name"),
                normalizeDefaultResult: Tt,
                normalizeExpectedResult: St,
                normalizeDeprecatedResult: Pt,
                normalizeForwardResult: st,
                normalizeRedirectResult: Lt,
                normalizeValidateResult: vt
            }, this._unknownHandler = i, this._invalidHandler = Qr(s), this._deprecatedHandler = a, this._identifyMissing = (d, l)=>!(d in l) || D(d, l), this._identifyRequired = c, this._preprocess = F, this._postprocess = f, this.cleanHistory();
        }
        cleanHistory() {
            this._hasDeprecationWarned = qr();
        }
        normalize(e) {
            let r = {}, o = [
                this._preprocess(e, this._utils)
            ], u = ()=>{
                for(; o.length !== 0;){
                    let i = o.shift(), s = this._applyNormalization(i, r);
                    o.push(...s);
                }
            };
            u();
            for (let i of Object.keys(this._utils.schemas)){
                let s = this._utils.schemas[i];
                if (!(i in r)) {
                    let a = Tt(s.default(this._utils));
                    "value" in a && o.push({
                        [i]: a.value
                    });
                }
            }
            u();
            for (let i of Object.keys(this._utils.schemas)){
                if (!(i in r)) continue;
                let s = this._utils.schemas[i], a = r[i], D = s.postprocess(a, this._utils);
                D !== de && (this._applyValidation(D, i, s), r[i] = D);
            }
            return this._applyPostprocess(r), this._applyRequiredCheck(r), r;
        }
        _applyNormalization(e, r) {
            let n = [], { knownKeys: o, unknownKeys: u } = this._partitionOptionKeys(e);
            for (let i of o){
                let s = this._utils.schemas[i], a = s.preprocess(e[i], this._utils);
                this._applyValidation(a, i, s);
                let D = ({ from: d, to: l })=>{
                    n.push(typeof l == "string" ? {
                        [l]: d
                    } : {
                        [l.key]: l.value
                    });
                }, c = ({ value: d, redirectTo: l })=>{
                    let p = Pt(s.deprecated(d, this._utils), a, !0);
                    if (p !== !1) {
                        if (p === !0) this._hasDeprecationWarned(i) || this._utils.logger.warn(this._deprecatedHandler(i, l, this._utils));
                        else for (let { value: m } of p){
                            let E = {
                                key: i,
                                value: m
                            };
                            if (!this._hasDeprecationWarned(E)) {
                                let h = typeof l == "string" ? {
                                    key: l,
                                    value: m
                                } : l;
                                this._utils.logger.warn(this._deprecatedHandler(E, h, this._utils));
                            }
                        }
                    }
                };
                st(s.forward(a, this._utils), a).forEach(D);
                let f = Lt(s.redirect(a, this._utils), a);
                if (f.redirect.forEach(D), "remain" in f) {
                    let d = f.remain;
                    r[i] = i in r ? s.overlap(r[i], d, this._utils) : d, c({
                        value: d
                    });
                }
                for (let { from: d, to: l } of f.redirect)c({
                    value: d,
                    redirectTo: l
                });
            }
            for (let i of u){
                let s = e[i];
                this._applyUnknownHandler(i, s, r, (a, D)=>{
                    n.push({
                        [a]: D
                    });
                });
            }
            return n;
        }
        _applyRequiredCheck(e) {
            for (let r of Object.keys(this._utils.schemas))if (this._identifyMissing(r, e) && this._identifyRequired(r)) throw this._invalidHandler(r, tt, this._utils);
        }
        _partitionOptionKeys(e) {
            let [r, n] = Jr(Object.keys(e).filter((o)=>!this._identifyMissing(o, e)), (o)=>o in this._utils.schemas);
            return {
                knownKeys: r,
                unknownKeys: n
            };
        }
        _applyValidation(e, r, n) {
            let o = vt(n.validate(e, this._utils), e);
            if (o !== !0) throw this._invalidHandler(r, o.value, this._utils);
        }
        _applyUnknownHandler(e, r, n, o) {
            let u = this._unknownHandler(e, r, this._utils);
            if (u) for (let i of Object.keys(u)){
                if (this._identifyMissing(i, u)) continue;
                let s = u[i];
                i in this._utils.schemas ? o(i, s) : n[i] = s;
            }
        }
        _applyPostprocess(e) {
            let r = this._postprocess(e, this._utils);
            if (r !== de) {
                if (r.delete) for (let n of r.delete)delete e[n];
                if (r.override) {
                    let { knownKeys: n, unknownKeys: o } = this._partitionOptionKeys(r.override);
                    for (let u of n){
                        let i = r.override[u];
                        this._applyValidation(i, u, this._utils.schemas[u]), e[u] = i;
                    }
                    for (let u of o){
                        let i = r.override[u];
                        this._applyUnknownHandler(u, i, e, (s, a)=>{
                            let D = this._utils.schemas[s];
                            this._applyValidation(a, s, D), e[s] = a;
                        });
                    }
                }
            }
        }
    };
    var It;
    function Gu(t, e, { logger: r = !1, isCLI: n = !1, passThrough: o = !1, FlagSchema: u, descriptor: i } = {}) {
        if (n) {
            if (!u) throw new Error("'FlagSchema' option is required.");
            if (!i) throw new Error("'descriptor' option is required.");
        } else i = te;
        let s = o ? Array.isArray(o) ? (f, d)=>o.includes(f) ? {
                [f]: d
            } : void 0 : (f, d)=>({
                [f]: d
            }) : (f, d, l)=>{
            let { _: p, ...m } = l.schemas;
            return rt(f, d, {
                ...l,
                schemas: m
            });
        }, a = Ku(e, {
            isCLI: n,
            FlagSchema: u
        }), D = new lt(a, {
            logger: r,
            unknown: s,
            descriptor: i
        }), c = r !== !1;
        c && It && (D._hasDeprecationWarned = It);
        let F = D.normalize(t);
        return c && (It = D._hasDeprecationWarned), F;
    }
    function Ku(t, { isCLI: e, FlagSchema: r }) {
        let n = [];
        e && n.push(ut.create({
            name: "_"
        }));
        for (let o of t)n.push(Hu(o, {
            isCLI: e,
            optionInfos: t,
            FlagSchema: r
        })), o.alias && e && n.push(nt.create({
            name: o.alias,
            sourceName: o.name
        }));
        return n;
    }
    function Hu(t, { isCLI: e, optionInfos: r, FlagSchema: n }) {
        let { name: o } = t, u = {
            name: o
        }, i, s = {};
        switch(t.type){
            case "int":
                i = ct, e && (u.preprocess = Number);
                break;
            case "string":
                i = Le;
                break;
            case "choice":
                i = at, u.choices = t.choices.map((a)=>a != null && a.redirect ? {
                        ...a,
                        redirect: {
                            to: {
                                key: t.name,
                                value: a.redirect
                            }
                        }
                    } : a);
                break;
            case "boolean":
                i = it;
                break;
            case "flag":
                i = n, u.flags = r.flatMap((a)=>[
                        a.alias,
                        a.description && a.name,
                        a.oppositeDescription && `no-${a.name}`
                    ].filter(Boolean));
                break;
            case "path":
                i = Le;
                break;
            default:
                throw new Error(`Unexpected type ${t.type}`);
        }
        if (t.exception ? u.validate = (a, D, c)=>t.exception(a) || D.validate(a, c) : u.validate = (a, D, c)=>a === void 0 || D.validate(a, c), t.redirect && (s.redirect = (a)=>a ? {
                to: {
                    key: t.redirect.option,
                    value: t.redirect.value
                }
            } : void 0), t.deprecated && (s.deprecated = !0), e && !t.array) {
            let a = u.preprocess || ((D)=>D);
            u.preprocess = (D, c, F)=>c.preprocess(a(Array.isArray(D) ? y(!1, D, -1) : D), F);
        }
        return t.array ? ot.create({
            ...e ? {
                preprocess: (a)=>Array.isArray(a) ? a : [
                        a
                    ]
            } : {},
            ...s,
            valueSchema: i.create(u)
        }) : i.create({
            ...u,
            ...s
        });
    }
    var un = Gu;
    function Rt(t, e) {
        if (!e) throw new Error("parserName is required.");
        for(let n = t.length - 1; n >= 0; n--){
            let o = t[n];
            if (o.parsers && Object.prototype.hasOwnProperty.call(o.parsers, e)) return o;
        }
        let r = `Couldn't resolve parser "${e}".`;
        throw r += " Plugins must be explicitly added to the standalone bundle.", new Se(r);
    }
    function on(t, e) {
        if (!e) throw new Error("astFormat is required.");
        for(let n = t.length - 1; n >= 0; n--){
            let o = t[n];
            if (o.printers && Object.prototype.hasOwnProperty.call(o.printers, e)) return o;
        }
        let r = `Couldn't find plugin for AST format "${e}".`;
        throw r += " Plugins must be explicitly added to the standalone bundle.", new Se(r);
    }
    function ft({ plugins: t, parser: e }) {
        let r = Rt(t, e);
        return Yt(r, e);
    }
    function Yt(t, e) {
        let r = t.parsers[e];
        return typeof r == "function" ? r() : r;
    }
    function sn(t, e) {
        let r = t.printers[e];
        return typeof r == "function" ? r() : r;
    }
    var an = {
        astFormat: "estree",
        printer: {},
        originalText: void 0,
        locStart: null,
        locEnd: null
    };
    async function qu(t, e = {}) {
        var F;
        let r = {
            ...t
        };
        if (!r.parser) {
            if (r.filepath) {
                if (r.parser = Lr(r, {
                    physicalFile: r.filepath
                }), !r.parser) throw new ve(`No parser could be inferred for file "${r.filepath}".`);
            } else throw new ve("No parser and no file path given, couldn't infer a parser.");
        }
        let n = et({
            plugins: t.plugins,
            showDeprecated: !0
        }).options, o = {
            ...an,
            ...Object.fromEntries(n.filter((f)=>f.default !== void 0).map((f)=>[
                    f.name,
                    f.default
                ]))
        }, u = Rt(r.plugins, r.parser), i = await Yt(u, r.parser);
        r.astFormat = i.astFormat, r.locEnd = i.locEnd, r.locStart = i.locStart;
        let s = (F = u.printers) != null && F[i.astFormat] ? u : on(r.plugins, i.astFormat), a = await sn(s, i.astFormat);
        r.printer = a;
        let D = s.defaultOptions ? Object.fromEntries(Object.entries(s.defaultOptions).filter(([, f])=>f !== void 0)) : {}, c = {
            ...o,
            ...D
        };
        for (let [f, d] of Object.entries(c))(r[f] === null || r[f] === void 0) && (r[f] = d);
        return r.parser === "json" && (r.trailingComma = "none"), un(r, n, {
            passThrough: Object.keys(an),
            ...e
        });
    }
    var re = qu;
    var Dn = new Set([
        "tokens",
        "comments",
        "parent",
        "enclosingNode",
        "precedingNode",
        "followingNode"
    ]), Ju = (t)=>Object.keys(t).filter((e)=>!Dn.has(e));
    function Xu(t) {
        return t ? (e)=>t(e, Dn) : Ju;
    }
    var H = Xu;
    function Zu(t, e) {
        let { printer: { massageAstNode: r, getVisitorKeys: n } } = e;
        if (!r) return t;
        let o = H(n), u = r.ignoredProperties ?? new Set;
        return i(t);
        function i(s, a) {
            if (!(s !== null && typeof s == "object")) return s;
            if (Array.isArray(s)) return s.map((f)=>i(f, a)).filter(Boolean);
            let D = {}, c = new Set(o(s));
            for(let f in s)!Object.prototype.hasOwnProperty.call(s, f) || u.has(f) || (c.has(f) ? D[f] = i(s[f], s) : D[f] = s[f]);
            let F = r(s, D, a);
            if (F !== null) return F ?? D;
        }
    }
    var cn = Zu;
    var Cn = Ce(hn(), 1);
    async function io(t, e) {
        let r = await ft(e), n = r.preprocess ? r.preprocess(t, e) : t;
        e.originalText = n;
        let o;
        try {
            o = await r.parse(n, e, e);
        } catch (u) {
            so(u, t);
        }
        return {
            text: n,
            ast: o
        };
    }
    function so(t, e) {
        let { loc: r } = t;
        if (r) {
            let n = (0, Cn.codeFrameColumns)(e, r, {
                highlightCode: !0
            });
            throw t.message += `
` + n, t.codeFrame = n, t;
        }
        throw t;
    }
    var ae = io;
    var Ie, $t, Fe, dt, Vt = class {
        constructor(e){
            Ct(this, Ie);
            Ct(this, Fe);
            this.stack = [
                e
            ];
        }
        get key() {
            let { stack: e, siblings: r } = this;
            return y(!1, e, r === null ? -2 : -4) ?? null;
        }
        get index() {
            return this.siblings === null ? null : y(!1, this.stack, -2);
        }
        get node() {
            return y(!1, this.stack, -1);
        }
        get parent() {
            return this.getNode(1);
        }
        get grandparent() {
            return this.getNode(2);
        }
        get isInArray() {
            return this.siblings !== null;
        }
        get siblings() {
            let { stack: e } = this, r = y(!1, e, -3);
            return Array.isArray(r) ? r : null;
        }
        get next() {
            let { siblings: e } = this;
            return e === null ? null : e[this.index + 1];
        }
        get previous() {
            let { siblings: e } = this;
            return e === null ? null : e[this.index - 1];
        }
        get isFirst() {
            return this.index === 0;
        }
        get isLast() {
            let { siblings: e, index: r } = this;
            return e !== null && r === e.length - 1;
        }
        get isRoot() {
            return this.stack.length === 1;
        }
        get root() {
            return this.stack[0];
        }
        get ancestors() {
            return [
                ...ce(this, Fe, dt).call(this)
            ];
        }
        getName() {
            let { stack: e } = this, { length: r } = e;
            return r > 1 ? y(!1, e, -2) : null;
        }
        getValue() {
            return y(!1, this.stack, -1);
        }
        getNode(e = 0) {
            let r = ce(this, Ie, $t).call(this, e);
            return r === -1 ? null : this.stack[r];
        }
        getParentNode(e = 0) {
            return this.getNode(e + 1);
        }
        call(e, ...r) {
            let { stack: n } = this, { length: o } = n, u = y(!1, n, -1);
            for (let i of r)u = u[i], n.push(i, u);
            try {
                return e(this);
            } finally{
                n.length = o;
            }
        }
        callParent(e, r = 0) {
            let n = ce(this, Ie, $t).call(this, r + 1), o = this.stack.splice(n + 1);
            try {
                return e(this);
            } finally{
                this.stack.push(...o);
            }
        }
        each(e, ...r) {
            let { stack: n } = this, { length: o } = n, u = y(!1, n, -1);
            for (let i of r)u = u[i], n.push(i, u);
            try {
                for(let i = 0; i < u.length; ++i)n.push(i, u[i]), e(this, i, u), n.length -= 2;
            } finally{
                n.length = o;
            }
        }
        map(e, ...r) {
            let n = [];
            return this.each((o, u, i)=>{
                n[u] = e(o, u, i);
            }, ...r), n;
        }
        match(...e) {
            let r = this.stack.length - 1, n = null, o = this.stack[r--];
            for (let u of e){
                if (o === void 0) return !1;
                let i = null;
                if (typeof n == "number" && (i = n, n = this.stack[r--], o = this.stack[r--]), u && !u(o, n, i)) return !1;
                n = this.stack[r--], o = this.stack[r--];
            }
            return !0;
        }
        findAncestor(e) {
            for (let r of ce(this, Fe, dt).call(this))if (e(r)) return r;
        }
        hasAncestor(e) {
            for (let r of ce(this, Fe, dt).call(this))if (e(r)) return !0;
            return !1;
        }
    };
    Ie = new WeakSet, $t = function(e) {
        let { stack: r } = this;
        for(let n = r.length - 1; n >= 0; n -= 2)if (!Array.isArray(r[n]) && --e < 0) return n;
        return -1;
    }, Fe = new WeakSet, dt = function*() {
        let { stack: e } = this;
        for(let r = e.length - 3; r >= 0; r -= 2){
            let n = e[r];
            Array.isArray(n) || (yield n);
        }
    };
    var gn = Vt;
    var yn = new Proxy(()=>{}, {
        get: ()=>yn
    }), Re = yn;
    function me(t) {
        return (e, r, n)=>{
            let o = !!(n != null && n.backwards);
            if (r === !1) return !1;
            let { length: u } = e, i = r;
            for(; i >= 0 && i < u;){
                let s = e.charAt(i);
                if (t instanceof RegExp) {
                    if (!t.test(s)) return i;
                } else if (!t.includes(s)) return i;
                o ? i-- : i++;
            }
            return i === -1 || i === u ? i : !1;
        };
    }
    var xn = me(/\s/), N = me(" 	"), Ft = me(",; 	"), mt = me(/[^\n\r]/);
    function ao(t, e, r) {
        let n = !!(r != null && r.backwards);
        if (e === !1) return !1;
        let o = t.charAt(e);
        if (n) {
            if (t.charAt(e - 1) === "\r" && o === `
`) return e - 2;
            if (o === `
` || o === "\r" || o === "\u2028" || o === "\u2029") return e - 1;
        } else {
            if (o === "\r" && t.charAt(e + 1) === `
`) return e + 2;
            if (o === `
` || o === "\r" || o === "\u2028" || o === "\u2029") return e + 1;
        }
        return e;
    }
    var Y = ao;
    function Do(t, e, r = {}) {
        let n = N(t, r.backwards ? e - 1 : e, r), o = Y(t, n, r);
        return n !== o;
    }
    var V = Do;
    function co(t) {
        return Array.isArray(t) && t.length > 0;
    }
    var Ut = co;
    function lo(t) {
        return t !== null && typeof t == "object";
    }
    var _n = lo;
    function* Mt(t, e) {
        let { getVisitorKeys: r, filter: n = ()=>!0 } = e, o = (u)=>_n(u) && n(u);
        for (let u of r(t)){
            let i = t[u];
            if (Array.isArray(i)) for (let s of i)o(s) && (yield s);
            else o(i) && (yield i);
        }
    }
    function* An(t, e) {
        let r = [
            t
        ];
        for(let n = 0; n < r.length; n++){
            let o = r[n];
            for (let u of Mt(o, e))yield u, r.push(u);
        }
    }
    function fo(t) {
        let e = t.type || t.kind || "(unknown type)", r = String(t.name || t.id && (typeof t.id == "object" ? t.id.name : t.id) || t.key && (typeof t.key == "object" ? t.key.name : t.key) || t.value && (typeof t.value == "object" ? "" : String(t.value)) || t.operator || "");
        return r.length > 20 && (r = r.slice(0, 19) + "\u2026"), e + (r ? " " + r : "");
    }
    function Wt(t, e) {
        (t.comments ?? (t.comments = [])).push(e), e.printed = !1, e.nodeDescription = fo(t);
    }
    function ne(t, e) {
        e.leading = !0, e.trailing = !1, Wt(t, e);
    }
    function X(t, e, r) {
        e.leading = !1, e.trailing = !1, r && (e.marker = r), Wt(t, e);
    }
    function ue(t, e) {
        e.leading = !1, e.trailing = !0, Wt(t, e);
    }
    var zt = new WeakMap;
    function Et(t, e) {
        if (zt.has(t)) return zt.get(t);
        let { printer: { getCommentChildNodes: r, canAttachComment: n, getVisitorKeys: o }, locStart: u, locEnd: i } = e;
        if (!n) return [];
        let s = ((r == null ? void 0 : r(t, e)) ?? [
            ...Mt(t, {
                getVisitorKeys: H(o)
            })
        ]).flatMap((a)=>n(a) ? [
                a
            ] : Et(a, e));
        return s.sort((a, D)=>u(a) - u(D) || i(a) - i(D)), zt.set(t, s), s;
    }
    function kn(t, e, r, n) {
        let { locStart: o, locEnd: u } = r, i = o(e), s = u(e), a = Et(t, r), D, c, F = 0, f = a.length;
        for(; F < f;){
            let d = F + f >> 1, l = a[d], p = o(l), m = u(l);
            if (p <= i && s <= m) return kn(l, e, r, l);
            if (m <= i) {
                D = l, F = d + 1;
                continue;
            }
            if (s <= p) {
                c = l, f = d;
                continue;
            }
            throw new Error("Comment location overlaps with node location");
        }
        if ((n == null ? void 0 : n.type) === "TemplateLiteral") {
            let { quasis: d } = n, l = Kt(d, e, r);
            D && Kt(d, D, r) !== l && (D = null), c && Kt(d, c, r) !== l && (c = null);
        }
        return {
            enclosingNode: n,
            precedingNode: D,
            followingNode: c
        };
    }
    var Gt = ()=>!1;
    function bn(t, e) {
        let { comments: r } = t;
        if (delete t.comments, !Ut(r) || !e.printer.canAttachComment) return;
        let n = [], { locStart: o, locEnd: u, printer: { experimentalFeatures: { avoidAstMutation: i = !1 } = {}, handleComments: s = {} }, originalText: a } = e, { ownLine: D = Gt, endOfLine: c = Gt, remaining: F = Gt } = s, f = r.map((d, l)=>({
                ...kn(t, d, e),
                comment: d,
                text: a,
                options: e,
                ast: t,
                isLastComment: r.length - 1 === l
            }));
        for (let [d, l] of f.entries()){
            let { comment: p, precedingNode: m, enclosingNode: E, followingNode: h, text: g, options: C, ast: _, isLastComment: Z } = l;
            if (C.parser === "json" || C.parser === "json5" || C.parser === "__js_expression" || C.parser === "__ts_expression" || C.parser === "__vue_expression" || C.parser === "__vue_ts_expression") {
                if (o(p) - o(_) <= 0) {
                    ne(_, p);
                    continue;
                }
                if (u(p) - u(_) >= 0) {
                    ue(_, p);
                    continue;
                }
            }
            let $;
            if (i ? $ = [
                l
            ] : (p.enclosingNode = E, p.precedingNode = m, p.followingNode = h, $ = [
                p,
                g,
                C,
                _,
                Z
            ]), po(g, C, f, d)) p.placement = "ownLine", D(...$) || (h ? ne(h, p) : m ? ue(m, p) : E ? X(E, p) : X(_, p));
            else if (Fo(g, C, f, d)) p.placement = "endOfLine", c(...$) || (m ? ue(m, p) : h ? ne(h, p) : E ? X(E, p) : X(_, p));
            else if (p.placement = "remaining", !F(...$)) {
                if (m && h) {
                    let Q = n.length;
                    Q > 0 && n[Q - 1].followingNode !== h && Bn(n, C), n.push(l);
                } else m ? ue(m, p) : h ? ne(h, p) : E ? X(E, p) : X(_, p);
            }
        }
        if (Bn(n, e), !i) for (let d of r)delete d.precedingNode, delete d.enclosingNode, delete d.followingNode;
    }
    var wn = (t)=>!/[\S\n\u2028\u2029]/.test(t);
    function po(t, e, r, n) {
        let { comment: o, precedingNode: u } = r[n], { locStart: i, locEnd: s } = e, a = i(o);
        if (u) for(let D = n - 1; D >= 0; D--){
            let { comment: c, precedingNode: F } = r[D];
            if (F !== u || !wn(t.slice(s(c), a))) break;
            a = i(c);
        }
        return V(t, a, {
            backwards: !0
        });
    }
    function Fo(t, e, r, n) {
        let { comment: o, followingNode: u } = r[n], { locStart: i, locEnd: s } = e, a = s(o);
        if (u) for(let D = n + 1; D < r.length; D++){
            let { comment: c, followingNode: F } = r[D];
            if (F !== u || !wn(t.slice(a, i(c)))) break;
            a = s(c);
        }
        return V(t, a);
    }
    function Bn(t, e) {
        var s, a;
        let r = t.length;
        if (r === 0) return;
        let { precedingNode: n, followingNode: o } = t[0], u = e.locStart(o), i;
        for(i = r; i > 0; --i){
            let { comment: D, precedingNode: c, followingNode: F } = t[i - 1];
            Re.strictEqual(c, n), Re.strictEqual(F, o);
            let f = e.originalText.slice(e.locEnd(D), u);
            if (((a = (s = e.printer).isGap) == null ? void 0 : a.call(s, f, e)) ?? /^[\s(]*$/.test(f)) u = e.locStart(D);
            else break;
        }
        for (let [D, { comment: c }] of t.entries())D < i ? ue(n, c) : ne(o, c);
        for (let D of [
            n,
            o
        ])D.comments && D.comments.length > 1 && D.comments.sort((c, F)=>e.locStart(c) - e.locStart(F));
        t.length = 0;
    }
    function Kt(t, e, r) {
        let n = r.locStart(e) - 1;
        for(let o = 1; o < t.length; ++o)if (n < r.locStart(t[o])) return o - 1;
        return 0;
    }
    function mo(t, e) {
        let r = e - 1;
        r = N(t, r, {
            backwards: !0
        }), r = Y(t, r, {
            backwards: !0
        }), r = N(t, r, {
            backwards: !0
        });
        let n = Y(t, r, {
            backwards: !0
        });
        return r !== n;
    }
    var Ye = mo;
    function On(t, e) {
        let r = t.node;
        return r.printed = !0, e.printer.printComment(t, e);
    }
    function Eo(t, e) {
        var c;
        let r = t.node, n = [
            On(t, e)
        ], { printer: o, originalText: u, locStart: i, locEnd: s } = e;
        if ((c = o.isBlockComment) == null ? void 0 : c.call(o, r)) {
            let F = V(u, s(r)) ? V(u, i(r), {
                backwards: !0
            }) ? G : Ke : " ";
            n.push(F);
        } else n.push(G);
        let D = Y(u, N(u, s(r)));
        return D !== !1 && V(u, D) && n.push(G), n;
    }
    function ho(t, e, r) {
        var D;
        let n = t.node, o = On(t, e), { printer: u, originalText: i, locStart: s } = e, a = (D = u.isBlockComment) == null ? void 0 : D.call(u, n);
        if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || V(i, s(n), {
            backwards: !0
        })) {
            let c = Ye(i, s(n));
            return {
                doc: _e([
                    G,
                    c ? G : "",
                    o
                ]),
                isBlock: a,
                hasLineSuffix: !0
            };
        }
        return !a || r != null && r.hasLineSuffix ? {
            doc: [
                _e([
                    " ",
                    o
                ]),
                le
            ],
            isBlock: a,
            hasLineSuffix: !0
        } : {
            doc: [
                " ",
                o
            ],
            isBlock: a,
            hasLineSuffix: !1
        };
    }
    function Co(t, e) {
        let r = t.node;
        if (!r) return {};
        let n = e[Symbol.for("printedComments")];
        if ((r.comments || []).filter((a)=>!n.has(a)).length === 0) return {
            leading: "",
            trailing: ""
        };
        let u = [], i = [], s;
        return t.each(()=>{
            let a = t.node;
            if (n != null && n.has(a)) return;
            let { leading: D, trailing: c } = a;
            D ? u.push(Eo(t, e)) : c && (s = ho(t, e, s), i.push(s.doc));
        }, "comments"), {
            leading: u,
            trailing: i
        };
    }
    function Nn(t, e, r) {
        let { leading: n, trailing: o } = Co(t, r);
        return !n && !o ? e : Ze(e, (u)=>[
                n,
                u,
                o
            ]);
    }
    function Tn(t) {
        let { [Symbol.for("comments")]: e, [Symbol.for("printedComments")]: r } = t;
        for (let n of e){
            if (!n.printed && !r.has(n)) throw new Error('Comment "' + n.value.trim() + '" was not printed. Please report this error!');
            delete n.printed;
        }
    }
    async function Sn(t, e, r, n, o) {
        let { embeddedLanguageFormatting: u, printer: { embed: i, hasPrettierIgnore: s = ()=>!1, getVisitorKeys: a } } = r;
        if (!i || u !== "auto") return;
        if (i.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
        let D = H(i.getVisitorKeys ?? a), c = [];
        d();
        let F = t.stack;
        for (let { print: l, node: p, pathStack: m } of c)try {
            t.stack = m;
            let E = await l(f, e, t, r);
            E && o.set(p, E);
        } catch (E) {
            if (globalThis.PRETTIER_DEBUG) throw E;
        }
        t.stack = F;
        function f(l, p) {
            return go(l, p, r, n);
        }
        function d() {
            let { node: l } = t;
            if (l === null || typeof l != "object" || s(t)) return;
            for (let m of D(l))Array.isArray(l[m]) ? t.each(d, m) : t.call(d, m);
            let p = i(t, r);
            if (p) {
                if (typeof p == "function") {
                    c.push({
                        print: p,
                        node: l,
                        pathStack: [
                            ...t.stack
                        ]
                    });
                    return;
                }
                o.set(l, p);
            }
        }
    }
    async function go(t, e, r, n) {
        let o = await re({
            ...r,
            ...e,
            parentParser: r.parser,
            originalText: t
        }, {
            passThrough: !0
        }), { ast: u } = await ae(t, o), i = await n(u, o);
        return Xe(i);
    }
    function yo(t) {
        return ()=>{};
    }
    var vn = yo;
    function xo(t, e) {
        let { originalText: r, [Symbol.for("comments")]: n, locStart: o, locEnd: u, [Symbol.for("printedComments")]: i } = e, { node: s } = t, a = o(s), D = u(s);
        for (let c of n)o(c) >= a && u(c) <= D && i.add(c);
        return r.slice(a, D);
    }
    var Pn = xo;
    async function je(t, e) {
        ({ ast: t } = await Ht(t, e));
        let r = new Map, n = new gn(t), o = vn(e), u = new Map;
        await Sn(n, s, e, je, u);
        let i = await Ln(n, e, s, void 0, u);
        return Tn(e), i;
        function s(D, c) {
            return D === void 0 || D === n ? a(c) : Array.isArray(D) ? n.call(()=>a(c), ...D) : n.call(()=>a(c), D);
        }
        function a(D) {
            o(n);
            let c = n.node;
            if (c == null) return "";
            let F = c && typeof c == "object" && D === void 0;
            if (F && r.has(c)) return r.get(c);
            let f = Ln(n, e, s, D, u);
            return F && r.set(c, f), f;
        }
    }
    function Ln(t, e, r, n, o) {
        var a;
        let { node: u } = t, { printer: i } = e, s;
        return (a = i.hasPrettierIgnore) != null && a.call(i, t) ? s = Pn(t, e) : o.has(u) ? s = o.get(u) : s = i.print(t, e, r, n), u === e.cursorNode && (s = Ze(s, (D)=>[
                Be,
                D,
                Be
            ])), i.printComment && (!i.willPrintOwnComments || !i.willPrintOwnComments(t, e)) && (s = Nn(t, s, e)), s;
    }
    async function Ht(t, e) {
        let r = t.comments ?? [];
        e[Symbol.for("comments")] = r, e[Symbol.for("tokens")] = t.tokens ?? [], e[Symbol.for("printedComments")] = new Set, bn(t, e);
        let { printer: { preprocess: n } } = e;
        return t = n ? await n(t, e) : t, {
            ast: t,
            comments: r
        };
    }
    var _o = ({ parser: t })=>t === "json" || t === "json5" || t === "json-stringify";
    function Ao(t, e) {
        let r = [
            t.node,
            ...t.parentNodes
        ], n = new Set([
            e.node,
            ...e.parentNodes
        ]);
        return r.find((o)=>Yn.has(o.type) && n.has(o));
    }
    function In(t) {
        let e = t.length - 1;
        for(;;){
            let r = t[e];
            if ((r == null ? void 0 : r.type) === "Program" || (r == null ? void 0 : r.type) === "File") e--;
            else break;
        }
        return t.slice(0, e + 1);
    }
    function Bo(t, e, { locStart: r, locEnd: n }) {
        let o = t.node, u = e.node;
        if (o === u) return {
            startNode: o,
            endNode: u
        };
        let i = r(t.node);
        for (let a of In(e.parentNodes))if (r(a) >= i) u = a;
        else break;
        let s = n(e.node);
        for (let a of In(t.parentNodes)){
            if (n(a) <= s) o = a;
            else break;
            if (o === u) break;
        }
        return {
            startNode: o,
            endNode: u
        };
    }
    function qt(t, e, r, n, o = [], u) {
        let { locStart: i, locEnd: s } = r, a = i(t), D = s(t);
        if (!(e > D || e < a || u === "rangeEnd" && e === a || u === "rangeStart" && e === D)) {
            for (let c of Et(t, r)){
                let F = qt(c, e, r, n, [
                    t,
                    ...o
                ], u);
                if (F) return F;
            }
            if (!n || n(t, o[0])) return {
                node: t,
                parentNodes: o
            };
        }
    }
    function ko(t, e) {
        return e !== "DeclareExportDeclaration" && t !== "TypeParameterDeclaration" && (t === "Directive" || t === "TypeAlias" || t === "TSExportAssignment" || t.startsWith("Declare") || t.startsWith("TSDeclare") || t.endsWith("Statement") || t.endsWith("Declaration"));
    }
    var Yn = new Set([
        "JsonRoot",
        "ObjectExpression",
        "ArrayExpression",
        "StringLiteral",
        "NumericLiteral",
        "BooleanLiteral",
        "NullLiteral",
        "UnaryExpression",
        "TemplateLiteral"
    ]), bo = new Set([
        "OperationDefinition",
        "FragmentDefinition",
        "VariableDefinition",
        "TypeExtensionDefinition",
        "ObjectTypeDefinition",
        "FieldDefinition",
        "DirectiveDefinition",
        "EnumTypeDefinition",
        "EnumValueDefinition",
        "InputValueDefinition",
        "InputObjectTypeDefinition",
        "SchemaDefinition",
        "OperationTypeDefinition",
        "InterfaceTypeDefinition",
        "UnionTypeDefinition",
        "ScalarTypeDefinition"
    ]);
    function Rn(t, e, r) {
        if (!e) return !1;
        switch(t.parser){
            case "flow":
            case "babel":
            case "babel-flow":
            case "babel-ts":
            case "typescript":
            case "acorn":
            case "espree":
            case "meriyah":
            case "__babel_estree":
                return ko(e.type, r == null ? void 0 : r.type);
            case "json":
            case "json5":
            case "json-stringify":
                return Yn.has(e.type);
            case "graphql":
                return bo.has(e.kind);
            case "vue":
                return e.tag !== "root";
        }
        return !1;
    }
    function jn(t, e, r) {
        let { rangeStart: n, rangeEnd: o, locStart: u, locEnd: i } = e;
        Re.ok(o > n);
        let s = t.slice(n, o).search(/\S/), a = s === -1;
        if (!a) for(n += s; o > n && !/\S/.test(t[o - 1]); --o);
        let D = qt(r, n, e, (d, l)=>Rn(e, d, l), [], "rangeStart"), c = a ? D : qt(r, o, e, (d)=>Rn(e, d), [], "rangeEnd");
        if (!D || !c) return {
            rangeStart: 0,
            rangeEnd: 0
        };
        let F, f;
        if (_o(e)) {
            let d = Ao(D, c);
            F = d, f = d;
        } else ({ startNode: F, endNode: f } = Bo(D, c, e));
        return {
            rangeStart: Math.min(u(F), u(f)),
            rangeEnd: Math.max(i(F), i(f))
        };
    }
    function wo(t, e) {
        let { cursorOffset: r, locStart: n, locEnd: o } = e, u = H(e.printer.getVisitorKeys), i = (a)=>n(a) <= r && o(a) >= r, s = t;
        for (let a of An(t, {
            getVisitorKeys: u,
            filter: i
        }))s = a;
        return s;
    }
    var Vn = wo;
    var zn = "\uFEFF", $n = Symbol("cursor");
    async function Gn(t, e, r = 0) {
        if (!t || t.trim().length === 0) return {
            formatted: "",
            cursorOffset: -1,
            comments: []
        };
        let { ast: n, text: o } = await ae(t, e);
        e.cursorOffset >= 0 && (e.cursorNode = Vn(n, e));
        let u = await je(n, e, r);
        r > 0 && (u = qe([
            G,
            u
        ], r, e.tabWidth));
        let i = fe(u, e);
        if (r > 0) {
            let a = i.formatted.trim();
            i.cursorNodeStart !== void 0 && (i.cursorNodeStart -= i.formatted.indexOf(a)), i.formatted = a + be(e.endOfLine);
        }
        let s = e[Symbol.for("comments")];
        if (e.cursorOffset >= 0) {
            let a, D, c, F, f;
            if (e.cursorNode && i.cursorNodeText ? (a = e.locStart(e.cursorNode), D = o.slice(a, e.locEnd(e.cursorNode)), c = e.cursorOffset - a, F = i.cursorNodeStart, f = i.cursorNodeText) : (a = 0, D = o, c = e.cursorOffset, F = 0, f = i.formatted), D === f) return {
                formatted: i.formatted,
                cursorOffset: F + c,
                comments: s
            };
            let d = D.split("");
            d.splice(c, 0, $n);
            let l = f.split(""), p = (0, Wn.diffArrays)(d, l), m = F;
            for (let E of p)if (E.removed) {
                if (E.value.includes($n)) break;
            } else m += E.count;
            return {
                formatted: i.formatted,
                cursorOffset: m,
                comments: s
            };
        }
        return {
            formatted: i.formatted,
            cursorOffset: -1,
            comments: s
        };
    }
    async function Oo(t, e) {
        let { ast: r, text: n } = await ae(t, e), { rangeStart: o, rangeEnd: u } = jn(n, e, r), i = n.slice(o, u), s = Math.min(o, n.lastIndexOf(`
`, o) + 1), a = n.slice(s, o).match(/^\s*/)[0], D = pe(a, e.tabWidth), c = await Gn(i, {
            ...e,
            rangeStart: 0,
            rangeEnd: Number.POSITIVE_INFINITY,
            cursorOffset: e.cursorOffset > o && e.cursorOffset <= u ? e.cursorOffset - o : -1,
            endOfLine: "lf"
        }, D), F = c.formatted.trimEnd(), { cursorOffset: f } = e;
        f > u ? f += F.length - i.length : c.cursorOffset >= 0 && (f = c.cursorOffset + o);
        let d = n.slice(0, o) + F + n.slice(u);
        if (e.endOfLine !== "lf") {
            let l = be(e.endOfLine);
            f >= 0 && l === `\r
` && (f += At(d.slice(0, f), `
`)), d = ee(!1, d, `
`, l);
        }
        return {
            formatted: d,
            cursorOffset: f,
            comments: c.comments
        };
    }
    function Jt(t, e, r) {
        return typeof e != "number" || Number.isNaN(e) || e < 0 || e > t.length ? r : e;
    }
    function Un(t, e) {
        let { cursorOffset: r, rangeStart: n, rangeEnd: o } = e;
        return r = Jt(t, r, -1), n = Jt(t, n, 0), o = Jt(t, o, t.length), {
            ...e,
            cursorOffset: r,
            rangeStart: n,
            rangeEnd: o
        };
    }
    function Kn(t, e) {
        let { cursorOffset: r, rangeStart: n, rangeEnd: o, endOfLine: u } = Un(t, e), i = t.charAt(0) === zn;
        if (i && (t = t.slice(1), r--, n--, o--), u === "auto" && (u = Cr(t)), t.includes("\r")) {
            let s = (a)=>At(t.slice(0, Math.max(a, 0)), `\r
`);
            r -= s(r), n -= s(n), o -= s(o), t = gr(t);
        }
        return {
            hasBOM: i,
            text: t,
            options: Un(t, {
                ...e,
                cursorOffset: r,
                rangeStart: n,
                rangeEnd: o,
                endOfLine: u
            })
        };
    }
    async function Mn(t, e) {
        let r = await ft(e);
        return !r.hasPragma || r.hasPragma(t);
    }
    async function Xt(t, e) {
        let { hasBOM: r, text: n, options: o } = Kn(t, await re(e));
        if (o.rangeStart >= o.rangeEnd && n !== "" || o.requirePragma && !await Mn(n, o)) return {
            formatted: t,
            cursorOffset: e.cursorOffset,
            comments: []
        };
        let u;
        return o.rangeStart > 0 || o.rangeEnd < n.length ? u = await Oo(n, o) : (!o.requirePragma && o.insertPragma && o.printer.insertPragma && !await Mn(n, o) && (n = o.printer.insertPragma(n)), u = await Gn(n, o)), r && (u.formatted = zn + u.formatted, u.cursorOffset >= 0 && u.cursorOffset++), u;
    }
    async function Hn(t, e, r) {
        let { text: n, options: o } = Kn(t, await re(e)), u = await ae(n, o);
        return r && (r.preprocessForPrint && (u.ast = await Ht(u.ast, o)), r.massage && (u.ast = cn(u.ast, o))), u;
    }
    async function qn(t, e) {
        e = await re(e);
        let r = await je(t, e);
        return fe(r, e);
    }
    async function Jn(t, e) {
        let r = Sr(t), { formatted: n } = await Xt(r, {
            ...e,
            parser: "__js_expression"
        });
        return n;
    }
    async function Xn(t, e) {
        e = await re(e);
        let { ast: r } = await ae(t, e);
        return je(r, e);
    }
    async function Zn(t, e) {
        return fe(t, await re(e));
    }
    var Qt = {};
    Me(Qt, {
        addDanglingComment: ()=>X,
        addLeadingComment: ()=>ne,
        addTrailingComment: ()=>ue,
        getAlignmentSize: ()=>pe,
        getIndentSize: ()=>eu,
        getMaxContinuousCount: ()=>Qn,
        getNextNonSpaceNonCommentCharacter: ()=>nu,
        getNextNonSpaceNonCommentCharacterIndex: ()=>Uo,
        getStringWidth: ()=>we,
        hasNewline: ()=>V,
        hasNewlineInRange: ()=>tu,
        hasSpaces: ()=>ru,
        isNextLineEmpty: ()=>Go,
        isNextLineEmptyAfterIndex: ()=>ht,
        isPreviousLineEmpty: ()=>Wo,
        makeString: ()=>uu,
        skip: ()=>me,
        skipEverythingButNewLine: ()=>mt,
        skipInlineComment: ()=>Ee,
        skipNewline: ()=>Y,
        skipSpaces: ()=>N,
        skipToLineEnd: ()=>Ft,
        skipTrailingComment: ()=>he,
        skipWhitespace: ()=>xn
    });
    function To(t, e) {
        if (e === !1) return !1;
        if (t.charAt(e) === "/" && t.charAt(e + 1) === "*") {
            for(let r = e + 2; r < t.length; ++r)if (t.charAt(r) === "*" && t.charAt(r + 1) === "/") return r + 2;
        }
        return e;
    }
    var Ee = To;
    function So(t, e) {
        return e === !1 ? !1 : t.charAt(e) === "/" && t.charAt(e + 1) === "/" ? mt(t, e) : e;
    }
    var he = So;
    function vo(t, e) {
        let r = null, n = e;
        for(; n !== r;)r = n, n = N(t, n), n = Ee(t, n), n = he(t, n), n = Y(t, n);
        return n;
    }
    var Ve = vo;
    function Po(t, e) {
        let r = null, n = e;
        for(; n !== r;)r = n, n = Ft(t, n), n = Ee(t, n), n = N(t, n);
        return n = he(t, n), n = Y(t, n), n !== !1 && V(t, n);
    }
    var ht = Po;
    function Zt(t) {
        if (typeof t != "string") throw new TypeError("Expected a string");
        return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }
    function Lo(t, e) {
        let r = t.match(new RegExp(`(${Zt(e)})+`, "g"));
        return r === null ? 0 : r.reduce((n, o)=>Math.max(n, o.length / e.length), 0);
    }
    var Qn = Lo;
    function Io(t, e) {
        let r = t.lastIndexOf(`
`);
        return r === -1 ? 0 : pe(t.slice(r + 1).match(/^[\t ]*/)[0], e);
    }
    var eu = Io;
    function Ro(t, e, r) {
        for(let n = e; n < r; ++n)if (t.charAt(n) === `
`) return !0;
        return !1;
    }
    var tu = Ro;
    function Yo(t, e, r = {}) {
        return N(t, r.backwards ? e - 1 : e, r) !== e;
    }
    var ru = Yo;
    function jo(t, e) {
        let r = Ve(t, e);
        return r === !1 ? "" : t.charAt(r);
    }
    var nu = jo;
    function Vo(t, e, r) {
        let n = e === '"' ? "'" : '"', u = ee(!1, t, /\\(.)|(["'])/gs, (i, s, a)=>s === n ? s : a === e ? "\\" + a : a || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(s) ? s : "\\" + s));
        return e + u + e;
    }
    var uu = Vo;
    function $o(t, e, r) {
        return Ve(t, r(e));
    }
    function Uo(t, e) {
        return arguments.length === 2 || typeof e == "number" ? Ve(t, e) : $o(...arguments);
    }
    function Mo(t, e, r) {
        return Ye(t, r(e));
    }
    function Wo(t, e) {
        return arguments.length === 2 || typeof e == "number" ? Ye(t, e) : Mo(...arguments);
    }
    function zo(t, e, r) {
        return ht(t, r(e));
    }
    function Go(t, e) {
        return arguments.length === 2 || typeof e == "number" ? ht(t, e) : zo(...arguments);
    }
    var er = {};
    Me(er, {
        builders: ()=>Ko,
        printer: ()=>Ho,
        utils: ()=>qo
    });
    var Ko = {
        join: ke,
        line: Ke,
        softline: Er,
        hardline: G,
        literalline: He,
        group: xt,
        conditionalGroup: fr,
        fill: Ge,
        lineSuffix: _e,
        lineSuffixBoundary: Fr,
        cursor: Be,
        breakParent: le,
        ifBreak: pr,
        trim: mr,
        indent: ie,
        indentIfBreak: dr,
        align: oe,
        addAlignmentToDoc: qe,
        markAsRoot: cr,
        dedentToRoot: Dr,
        dedent: lr,
        hardlineWithoutBreakParent: Ae,
        literallineWithoutBreakParent: _t,
        label: hr,
        concat: (t)=>t
    }, Ho = {
        printDocToString: fe
    }, qo = {
        willBreak: kr,
        traverseDoc: xe,
        findInDoc: Je,
        mapDoc: Ne,
        removeLines: wr,
        stripTrailingHardline: Xe,
        replaceEndOfLine: Or,
        canBreak: Nr
    };
    var ou = "3.0.3";
    function De(t, e = 1) {
        return async (...r)=>{
            let n = r[e] ?? {}, o = n.plugins ?? [];
            return r[e] = {
                ...n,
                plugins: Array.isArray(o) ? o : Object.values(o)
            }, t(...r);
        };
    }
    var iu = De(Xt);
    async function su(t, e) {
        let { formatted: r } = await iu(t, {
            ...e,
            cursorOffset: -1
        });
        return r;
    }
    async function Jo(t, e) {
        return await su(t, e) === t;
    }
    var Xo = De(et, 0), Zo = {
        parse: De(Hn),
        formatAST: De(qn),
        formatDoc: De(Jn),
        printToDoc: De(Xn),
        printDocToString: De(Zn)
    };
    return nr(Qo);
});

},{}]},["kYpTN","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
