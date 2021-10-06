<script>
  import request from "../../utils/Req";
  import ArrowIcon from "../Header/ArrowIcon.svelte";
  let color = "#fff";
  const req = request("aside");
</script>

<section class="project__aside">
  <div class="project__wrap">
    {#await req then res}
      <h2 class="project__heading">{res.data.asidetitle}</h2>
      <p class="project__descr">{res.data.asidedescr}</p>
      <button class="project__cta">
        <div class="arrow__wrap">
          <ArrowIcon {color} />
        </div>
        {res.data.asidecta}
      </button>
    {/await}
  </div>
</section>

<style>
  .project__aside {
    background-color: var(--light-90);
    height: 100%;
  }
  .project__wrap {
    margin: 204px var(--spacing-24) 0 var(--spacing-24);
  }
  .project__wrap h2,
  p {
    margin-bottom: var(--spacing-24);
  }
  .project__cta {
    cursor: pointer;
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: space-between;
    max-width: 200px;
    margin-right: 0;
    font-weight: 500;
    border: none;
  }
  .arrow__wrap {
    padding: 1rem;
    background: var(--dark-100);
    height: 100%;
  }
  /* Desktop version */
  @media (min-width: 1540px) {
    .project__aside {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .project__wrap {
      margin: calc(var(--spacing-108) * 1.15) var(--spacing-24) 0
        var(--spacing-24);
    }
    .project__descr {
      max-width: 400px;
    }
  }
  /* Tablet */
  @media (max-width: 1024px) {
    .project__aside {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .project__wrap {
      margin: var(--spacing-24);
    }
  }
</style>
