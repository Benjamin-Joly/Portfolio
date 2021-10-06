<script>
  import request from "../../utils/Req";
  const req = request("homepage");
  export let size;
  let menu = {
    title: "",
    opacity: 0,
  };
  const rows = 10;
  const columns = 12;

  // const handleCircleHover = (e) => {
  //   if (e.target.dataset.menu) {
  //     menu.opacity = 1;
  //     return (menu.title = e.target.dataset.menu);
  //   } else {
  //     menu.opacity = 0;
  //     return (menu.title = "");
  //   }
  // };
  /* data-menu={projects.integrations.menu.title}
data-menu={projects.interfaces.menu.title}
data-menu={projects.sites.menu.title}*/
</script>

<div
  class="grid"
  width={size}
  height={size}
  style="min-width: {size}px; min-height: {size}px;"
>
  <div class="heading__wrap grid__element">
    {#await req then res}
      <h1 class="home__title">
        {res.data.logotitle} <span>| {res.data.logotext}</span>
      </h1>
      <p class="heading__descr">
        {res.data.h2text}
      </p>
    {/await}
  </div>
  <div class="menu__title__wrap" style="opacity : {menu.opacity}">
    <h2 class="menu__title">{menu.title}</h2>
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-gap: 0px;
    border: solid 1px white;
    align-items: center;
    justify-items: center;
  }
  /* .grid__element {
    border: solid 1px var(--light-90);
    width: 100%;
    height: 100%;
  } */
  .heading__wrap {
    grid-column: 2/12;
    grid-row: 3/4;
  }
  .heading__wrap h1 {
    font-size: 1.8rem;
    font-weight: 750;
    color: var(--contrast);
    margin-left: var(--spacing-8);
  }
  .heading__wrap span {
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--contrast);
  }
  .heading__wrap p {
    font-weight: 300;
    color: var(--light-90);
    margin-left: var(--spacing-8);
  }
  .menu__title__wrap {
    grid-column: 9/13;
    grid-row: 8/10;
    color: var(--light-90);
    font-size: var(--h5-size);
    opacity: 0;
    transition: opacity 0.2s;
  }
  /* Desktop version */
  @media (min-width: 1540px) {
    .heading__wrap {
      display: none;
    }
  }
  /* Mobile */
  @media (max-width: 500px) {
    .heading__wrap h1 {
      font-size: 1.2rem;
      font-weight: 750;
      color: var(--contrast);
    }
    .heading__wrap span {
      font-size: 1rem;
      font-weight: 300;
      color: var(--contrast);
    }
    .heading__wrap p {
      font-size: 0.8rem;
      font-weight: 300;
      color: var(--light-90);
    }
    .grid {
      margin-top: var(--spacing-58);
      background: none;
    }
    .grid__circle {
      border: solid 1px white;
      border-radius: 50%;
      opacity: 0 !important;
    }
    .grid__circle:nth-child(1) {
      grid-column: 2/6;
      grid-row: 4/8;
      width: 80px;
      height: 80px;
    }
    .grid__circle:nth-child(2) {
      grid-column: 6/9;
      grid-row: 7/10;
      width: 50px;
      height: 50px;
    }
    .grid__circle:nth-child(3) {
      grid-column: 7/12;
      grid-row: 3/8;
      width: 100px;
      height: 100px;
    }
    .heading__wrap {
      grid-column: 2/12;
      grid-row: 2/3;
    }
  }
</style>
