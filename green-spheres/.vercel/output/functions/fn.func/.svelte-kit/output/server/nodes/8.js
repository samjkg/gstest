

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.BNdelABG.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.BKH2UFYu.js"];
export const stylesheets = [];
export const fonts = [];
