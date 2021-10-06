<script>
  import request from "../../utils/Req";
  import ArrowIcon from "./ArrowIcon.svelte";
  let color = "#8478f6";
  const req = request("navigatio");
  let active = false;
  const toggle = () => {
    active === true ? (active = false) : (active = true);
  };
  let navElements;
</script>

<nav on:click={toggle} class={active ? "nav " : "nav nav--closed"}>
  <div class="nav__wrap">
    <div class="nav__button">
      <h5>Projets</h5>
      <div class="nav__icon {active ? '' : 'nav__icon--closed'}">
        <div />
        <div />
      </div>
    </div>
    <ul class="nav__list {active ? '' : 'nav__list--closed'}">
      {#await req then res}
        {#each res.data.body as item}
          <div class="nav__list__item__wrap">
            <ArrowIcon {color} />
            <div class="nav__list__anchor" />
            <li class="nav__list__item">
              <h5>{item.primary.navmenutitle}</h5>
              <p>{item.primary.navmenudescr}</p>
            </li>
          </div>
        {/each}
      {/await}
    </ul>
  </div>
</nav>

<style>
  .nav {
    overflow: hidden;
    position: absolute;
    z-index: 9999;
    top: var(--spacing-24);
    right: var(--spacing-8);
    margin-right: var(--spacing-8);
  }
  .nav--closed {
    height: var(--spacing-58);
  }
  .nav__wrap {
    position: relative;
    background: var(--dark-70);
    padding: var(--spacing-8) var(--spacing-24) var(--spacing-24)
      var(--spacing-24);
    display: flex;
    flex-direction: column;
  }
  .nav__wrap::after {
    content: "";
    position: absolute;
    inset: 0;
    height: 56px;
    border: solid 1px var(--light-90);
    z-index: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  .nav__wrap:hover::after {
    opacity: 1;
  }
  .nav__button {
    color: var(--light-90);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: calc(var(--spacing-24) + 2px);
    margin-bottom: var(--spacing-8);
    border-bottom: solid 1px var(--light-90);
  }
  .nav__button h5 {
    font-size: var(--h5-size);
    font-weight: var(--h5-weight);
    pointer-events: none;
  }
  .nav__icon {
    position: relative;
    height: 36px;
    width: 36px;
    background: black;
    border-radius: 50%;
    margin-left: var(--spacing-24);
    pointer-events: none;
    transform: rotate(-180deg);
    transition: transform 0.2s ease-in-out;
  }
  .nav__icon--closed {
    transform: rotate(0deg);
  }
  .nav__icon div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
    height: 1px;
    border-bottom: solid 2px var(--light-90);
    margin: auto;
  }
  .nav__icon div:nth-child(1) {
    left: 3px;
    transform: rotate(45deg);
  }
  .nav__icon div:nth-child(2) {
    right: 3px;
    transform: rotate(-45deg);
  }
  .nav__list {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }
  .nav__list--closed {
    transform: translateY(var(--spacing-8));
    opacity: 0;
    pointer-events: none;
  }
  .nav__list__item {
    color: var(--light-90);
    list-style-type: none;
    margin-right: var(--spacing-24);
    margin-bottom: var(--spacing-8);
  }
  .nav__list__item h5 {
    font-size: var(--h5-size);
    font-weight: var(--med-weight);
  }
  .nav__list__item p {
    font-weight: var(--light-weight);
  }
  .nav__list__item__wrap {
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: solid 1px var(--light-50);
    margin: var(--spacing-8) auto;
  }
  .nav__list__anchor {
    width: var(--spacing-8);
    height: var(--spacing-8);
    background: var(--light-90);
    margin: var(--spacing-24);
  }
  /* Desktop version */
  @media (min-width: 1540px) {
    .nav {
      position: relative;
      width: 100%;
      margin-top: var(--spacing-24);
    }
    .nav--closed {
      height: auto;
    }
    .nav__wrap {
      background: none;
    }
    .nav__wrap::after {
      display: none;
    }
    .nav__button {
      display: none;
    }
    .nav__list__item {
      color: var(--dark-100);
      list-style-type: none;
    }
    .nav__list--closed {
      transform: translateY(0);
      opacity: 1;
    }
    .nav__list__anchor {
      background: var(--dark-100);
    }
  }
  /*Tablet*/
  @media (max-width: 1024px) {
    .nav {
      top: 0;
      right: 0;
      height: 60px;
    }
    .nav__wrap {
      background: none;
    }
    .nav__wrap::after {
      display: none;
    }
    .nav__list {
      position: fixed;
      inset: 0;
      background: var(--light-90);
      transform: translate(0, 0);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .nav__list__item {
      color: var(--dark-100);
      margin-bottom: var(--spacing-24);
    }
    .nav__list__anchor {
      background: var(--dark-100);
    }
    .nav__list--closed {
      transform: translate(0, 100vw);
    }
    .nav__button {
      z-index: 99;
      mix-blend-mode: difference;
    }
    .nav__icon {
      background: none;
    }
  }
</style>
