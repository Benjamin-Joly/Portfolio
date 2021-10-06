<script>
  import Navigation from "./Navigation.svelte";
  import Logo from "./Logo.svelte";
  export let device;
</script>

<header class="header">
  <div class="header__wrap">
    <Logo />
  </div>
  <Navigation {device} />
</header>

<style>
  .header {
    grid-column: 1/13;
    grid-row: 1/2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--dark-100);
    border: solid 1px var(--light-90);
    z-index: 999;
  }
  .header__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: var(--spacing-24);
  }
  /* Desktop version */
  @media (min-width: 1540px) {
    .header {
      grid-column: 1/3;
      grid-row: 1/11;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      background: var(--light-90);
      border: none;
      z-index: 999;
    }
  }
  /*Tablet*/
  @media (max-width: 1024px) {
    .header {
      max-height: 60px;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
    }
    .header__wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: var(--spacing-8);
    }
  }
</style>
