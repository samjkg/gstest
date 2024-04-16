

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/offrestartup/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.DwcaZlDk.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.BKH2UFYu.js"];
export const stylesheets = [];
export const fonts = [];
