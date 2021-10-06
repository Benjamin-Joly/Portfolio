<script>
  import request from "../../utils/Req";
  const req = request("homepage");
</script>

<div class="logo">
  <div class="logo__circle" />
  <div class="name__wrap">
    {#await req then res}
      <p class="name">{res.data.logotitle}</p>
      <p class="job">{res.data.logotext}</p>
    {/await}
  </div>
</div>

<style>
  .logo {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .logo__circle {
    overflow: hidden;
    position: relative;
    background: var(--dark-100);
    width: var(--spacing-58);
    height: var(--spacing-58);
    border-radius: 50%;
    transition: transform 1.5s ease-in-out;
  }
  @keyframes logo-anim {
    0% {
      transform: translateX(38px) scale(0.8) rotate(0deg);
    }
    50% {
      transform: translateX(38px) scale(1.3) rotate(90deg);
    }
    100% {
      transform: translateX(38px) scale(0.8) rotate(0deg);
    }
  }
  .logo__circle::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--contrast);
    filter: blur(10px);
    transform: translateX(38px) scale(1);
    animation: logo-anim 3s ease-in-out infinite;
    transition: transform 1.5s ease-in-out;
  }
  .name__wrap {
    display: none;
  }
  /* Desktop version */
  @media (min-width: 1540px) {
    .name__wrap {
      display: block;
      margin-left: var(--spacing-8);
      color: var(--contrast);
    }
    p.name {
      font-size: var(--h5-size);
      font-weight: var(--h5-weight);
      line-height: 1.2;
      margin-bottom: 0;
    }
    p.job {
      line-height: 1.2;
      margin-bottom: 0;
    }
  }
  /*Tablet*/
  @media (max-width: 1024px) {
    .logo {
      margin-left: var(--spacing-8);
    }
    .logo__circle {
      width: 42px;
      height: 42px;
    }
    .logo__circle::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--contrast);
      filter: blur(10px);
      transform: translateX(10px) scale(2);
      animation: logo-anim 3s ease-in-out infinite;
      transition: transform 1.5s ease-in-out;
    }
  }
</style>
