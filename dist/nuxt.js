"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkL42GFWTAjs = require('./chunk-L42GFWTA.js');
require('./chunk-44ONIEX7.js');
require('./chunk-BTQOTIPQ.js');
require('./chunk-6F4PWJZI.js');

// src/nuxt.ts
var _kit = require('@nuxt/kit');
var nuxt_default = _kit.defineNuxtModule.call(void 0, {
  setup(options) {
    _kit.addWebpackPlugin.call(void 0, _chunkL42GFWTAjs.unplugin_default.webpack(options));
    _kit.addVitePlugin.call(void 0, _chunkL42GFWTAjs.unplugin_default.vite(options));
  }
});


module.exports = nuxt_default;
exports.default = module.exports;