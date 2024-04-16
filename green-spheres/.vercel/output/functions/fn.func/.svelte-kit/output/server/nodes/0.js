

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Dt-DbHne.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.BKH2UFYu.js"];
export const stylesheets = ["_app/immutable/assets/0.DcAkT6kn.css"];
export const fonts = [];
