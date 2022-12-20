import { NuxtModule } from '@nuxt/schema';
import { Options } from './types.js';
import '@rollup/pluginutils';
import 'unplugin';
import '@antfu/utils';

declare const _default: NuxtModule<Options>;

export { _default as default };
