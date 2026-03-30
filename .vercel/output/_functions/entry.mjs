import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_TaL13kLf.mjs';
import { manifest } from './manifest_1Y_XZuAl.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/cv.astro.mjs');
const _page4 = () => import('./pages/cv-clarity.astro.mjs');
const _page5 = () => import('./pages/cv-clarity-pdf.astro.mjs');
const _page6 = () => import('./pages/cv-humandone.astro.mjs');
const _page7 = () => import('./pages/cv-humandone-pdf.astro.mjs');
const _page8 = () => import('./pages/cv-icl-group.astro.mjs');
const _page9 = () => import('./pages/cv-icl-group-pdf.astro.mjs');
const _page10 = () => import('./pages/cv-joko.astro.mjs');
const _page11 = () => import('./pages/cv-joko-pdf.astro.mjs');
const _page12 = () => import('./pages/cv-monday.astro.mjs');
const _page13 = () => import('./pages/cv-monday-pdf.astro.mjs');
const _page14 = () => import('./pages/cv-pdf.astro.mjs');
const _page15 = () => import('./pages/cv-rewardful.astro.mjs');
const _page16 = () => import('./pages/cv-rewardful-pdf.astro.mjs');
const _page17 = () => import('./pages/cv-roamless.astro.mjs');
const _page18 = () => import('./pages/cv-roamless-pdf.astro.mjs');
const _page19 = () => import('./pages/cv-tripledot.astro.mjs');
const _page20 = () => import('./pages/cv-tripledot-ai.astro.mjs');
const _page21 = () => import('./pages/cv-tripledot-ai-pdf.astro.mjs');
const _page22 = () => import('./pages/cv-tripledot-pdf.astro.mjs');
const _page23 = () => import('./pages/video-editing.astro.mjs');
const _page24 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/cv.astro", _page3],
    ["src/pages/cv-clarity.astro", _page4],
    ["src/pages/cv-clarity-pdf.astro", _page5],
    ["src/pages/cv-humandone.astro", _page6],
    ["src/pages/cv-humandone-pdf.astro", _page7],
    ["src/pages/cv-icl-group.astro", _page8],
    ["src/pages/cv-icl-group-pdf.astro", _page9],
    ["src/pages/cv-joko.astro", _page10],
    ["src/pages/cv-joko-pdf.astro", _page11],
    ["src/pages/cv-monday.astro", _page12],
    ["src/pages/cv-monday-pdf.astro", _page13],
    ["src/pages/cv-pdf.astro", _page14],
    ["src/pages/cv-rewardful.astro", _page15],
    ["src/pages/cv-rewardful-pdf.astro", _page16],
    ["src/pages/cv-roamless.astro", _page17],
    ["src/pages/cv-roamless-pdf.astro", _page18],
    ["src/pages/cv-tripledot.astro", _page19],
    ["src/pages/cv-tripledot-ai.astro", _page20],
    ["src/pages/cv-tripledot-ai-pdf.astro", _page21],
    ["src/pages/cv-tripledot-pdf.astro", _page22],
    ["src/pages/video-editing.astro", _page23],
    ["src/pages/index.astro", _page24]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6357f9cd-37eb-4d1e-aba0-2aed13f75323",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
