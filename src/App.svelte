<script>
  //Components
  import Cursor from "./Components/Cursor.svelte";
  import request from "./utils/Req";
  import Header from "./Components/Header/Header.svelte";
  import Canvas from "./Components/Partials/Canvas.svelte";
  import ProjectAside from "./Components/Partials/ProjectAside.svelte";
  //Props
  //Locals
  const whichDevice = () => {
    let device = "";
    if (window.innerWidth <= 1540 && window.innerWidth >= 1025) {
      device = "laptop";
    } else if (window.innerWidth <= 1024 && window.innerWidth >= 601) {
      device = "tablet";
    } else if (window.innerWidth <= 600) {
      device = "mobile";
    } else {
      device = "desktop";
    }
    return device;
  };
  let device = whichDevice();
</script>

<svelte:head>
  <link
    href="https://api.fontshare.com/css?f[]=plein@300,500,701,900,1&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<!-- <Cursor /> -->

<div class="grid__document__wrap">
  <Header />
  <main>
    <Canvas />
    <ProjectAside />
  </main>
</div>

<style>
  /* Variables */
  :root {
    /* colors */
    --dark-100: #1a1a1a;
    --dark-70: #272727;
    --med: #707070;
    --light-50: #9d9d9d;
    --light-90: #d6d6d6;
    --contrast: #8478f6;
    /* spacing */
    --spacing-108: 108px;
    --spacing-58: 58px;
    --spacing-24: 24px;
    --spacing-8: 8px;
    /* font-size */
    --h1-size: 2.2rem;
    --h5-size: 1.2rem;
    /* font-weight */
    --h1-weight: 900;
    --h5-weight: 700;
    --med-weight: 500;
    --light-weight: 300;
    /* border-radius */
    --border-radius: 4px;
    /*breakpoints*/
    --breakpoint-desktop: 1540px;
    --breakpoint-laptop: 1240px;
    --breakpoint-tablet: 1024px;
    --breakpoint-mobile: 700px;
  }
  /* Global Styles */
  :global(html, body, *) {
    margin: 0;
    padding: 0;
    /* overflow: hidden; */
    font-family: "Plein", sans-serif;
  }
  *::-webkit-scrollbar {
    display: none;
  }
  /* @media (max-width: 1024px) {
    :global(main) {
      overflow: initial;
    }
  } */
  :global(html) {
    font-size: 16px;
    font-family: "Plein", sans-serif;
  }
  /* Local Styles */
  .grid__document__wrap {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(10, 1fr);
    width: 100%;
    height: 100%;
    background: yellow;
  }
  main {
    grid-column: 1/13;
    grid-row: 1/11;
    height: 100%;
    background: var(--dark-100);
    display: flex;
  }
  /* Desktop version*/
  @media (min-width: 1540px) {
    main {
      position: relative;
      z-index: 0;
      grid-column: 3/13;
      grid-row: 1/11;
      height: 100%;
      justify-items: flex-start;
      align-items: flex-start;
      background: var(--dark-100);
      display: flex;
    }
  }
  /*Tablet*/
  @media (max-width: 1024px) {
    main {
      position: relative;
      z-index: 0;
      grid-column: 1/13;
      grid-row: 1/11;
      height: 100%;
      justify-items: flex-start;
      align-items: flex-start;
      background: var(--dark-100);
      display: flex;
      flex-direction: column;
    }
    .grid__document__wrap {
      overflow: scroll;
    }
  }
</style>
