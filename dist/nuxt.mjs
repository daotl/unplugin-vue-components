import {
  unplugin_default
} from "./chunk-BJ3IUMIZ.mjs";
import "./chunk-IN2W2XFC.mjs";
import "./chunk-ZKNUHGJ4.mjs";
import "./chunk-WBQAMGXK.mjs";

// src/nuxt.ts
import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from "@nuxt/kit";
var nuxt_default = defineNuxtModule({
  setup(options) {
    addWebpackPlugin(unplugin_default.webpack(options));
    addVitePlugin(unplugin_default.vite(options));
  }
});
export {
  nuxt_default as default
};
