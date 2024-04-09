<script>
    import {onMount} from 'svelte';
    import logo from '../public/favicon.png';

    let isOpen = false;

    const toggle = () => {
        isOpen = !isOpen;
        console.log("test");
    };

    const changeCurrentActive = (newActive) => {
        currentActive = newActive;
    }

    const navbarLinks = [
        {Name:"Accueil", Link:"/"},
        {Name:"Notre Equipe", Link:"/team"},
        {Name:"Nos Services RSE", Link:"/services"},
        {Name:"Nous Contacter", Link:"/contact"}
    ];

    let currentActive = "Accueil";

    onMount(() => {

    })


</script>

<nav class="bg-white shadow sticky top-0 z-50">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button -->
                <button on:click={toggle} type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>
                    <!--
                      Icon when menu is closed.

                      Menu open: "hidden", Menu closed: "block"
                    -->
                    <svg class="block h-6 w-6" display={isOpen ? "hidden" : "block"} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <!--
                      Icon when menu is open.

                      Menu open: "block", Menu closed: "hidden"
                    -->
                    <svg display={isOpen ? "block" : "hidden"} class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex flex-shrink-0 items-center">
                    <img class="h-12 w-auto" src={logo} alt="Your Company">
                </div>
                <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                    {#each navbarLinks as item (item)}
                        {#if item.Name == currentActive}
                            <a href="{item.Link}" on:click={() => {changeCurrentActive(item.Name)}} class="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900">{item.Name}</a>
                            {:else}
                            <a href="{item.Link}" on:click={() => {changeCurrentActive(item.Name)}} class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">{item.Name}</a>
                            {/if}
                    {/each}
                </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            </div>
        </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div hidden="{!isOpen}" class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 pb-4 pt-2">
            <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
            {#each navbarLinks as item (item)}
                <a href="{item.Link}" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">{item.Name}</a>
            {/each}
        </div>
    </div>
</nav>
