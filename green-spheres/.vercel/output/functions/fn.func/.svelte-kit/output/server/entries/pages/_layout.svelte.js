import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
const logo = "/_app/immutable/assets/favicon.Dxine1b7.png";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navbarLinks = [
    {
      Name: "Accueil",
      Link: "/",
      Active: false,
      Sub: [
        { Name: "Notre mission", Link: "/#mission" },
        {
          Name: "Nos services",
          Link: "/#accompagnements"
        }
      ]
    },
    {
      Name: "Nos Services RSE",
      Link: "/team",
      Active: false,
      Sub: [
        {
          Name: "Notre offre start-up",
          Link: "/services/offrestartup"
        },
        {
          Name: "Nos offres moyennes et grandes entreprises",
          Link: "/services/offremoyennegrande"
        },
        {
          Name: "Nos services à la demande",
          Link: "/services/servicealademande"
        }
      ]
    },
    // {Name:"Nos Services RSE", Link:"/services", Active:false, Sub:[
    //         {Name:"Lancer et relancer une politique RSE", Link:"/"},
    //         {Name:"Fresque des organisations responsables", Link:"/"},
    //         {Name:"Le numérique responsable", Link:"/"},
    //         {Name:"La RSE à l’international", Link:"/"}
    //     ]},
    {
      Name: "Nous Contacter",
      Link: "/contact",
      Active: false,
      Sub: [{ Name: "Contact", Link: "/contact" }]
    }
  ];
  return `<nav class="bg-white shadow sticky top-0 z-50"><div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"><div class="relative flex h-16 justify-between"><div class="absolute inset-y-0 left-0 flex items-center sm:hidden"> <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"><span class="absolute -inset-0.5"></span> <span class="sr-only" data-svelte-h="svelte-1bvqpab">Open main menu</span>  <svg class="block h-6 w-6"${add_attribute("display", "block", 0)} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>  <svg${add_attribute("display", "hidden", 0)} class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"><div class="flex flex-shrink-0 items-center"><img class="h-12 w-auto hover:cursor-pointer"${add_attribute("src", logo, 0)} alt="Your Company"></div> <div class="hidden sm:ml-6 sm:flex sm:space-x-8">      ${each(navbarLinks, (item, index) => {
    return `<div class="mt-3 relative inline-block text-left"><div><button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">${escape(item.Name)} <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg> </button></div>  <div ${!item.Active ? "hidden" : ""} class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"><div class="py-1" role="none"> ${each(item.Sub, (sub) => {
      return `<a${add_attribute("href", sub.Link, 0)} class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabindex="-1" id="menu-item-0">${escape(sub.Name)}</a>`;
    })} </div></div> </div>`;
  })}    </div></div> <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" data-svelte-h="svelte-1cvvy29"></div></div></div>  <div ${"hidden"} class="sm:hidden" id="mobile-menu"><div class="space-y-1 pb-4 pt-2"> ${each(navbarLinks, (item, index) => {
    return `<div class="mt-3 relative inline-block text-left"><div><button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">${escape(item.Name)} <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg> </button></div>  <div ${!item.Active ? "hidden" : ""} class="absolute content-center z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"><div class="py-1" role="none"> ${each(item.Sub, (sub) => {
      return `<a${add_attribute("href", sub.Link, 0)} class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabindex="-1" id="menu-item-0">${escape(sub.Name)}</a>`;
    })} </div></div> </div>`;
  })}</div></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
