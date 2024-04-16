

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/accueil/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BNdelABG.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.BKH2UFYu.js"];
export const stylesheets = [];
export const fonts = [];
