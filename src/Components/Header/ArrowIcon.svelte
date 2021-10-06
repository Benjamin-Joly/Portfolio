<script>
  export let color;
</script>

<div class="arrow__icon__wrap">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26.003"
    height="21.139"
    viewBox="0 0 26.003 21.139"
  >
    <g id="arrow" data-name="arrow" transform="translate(0 20.428) rotate(-90)">
      <path
        id="pointe"
        data-name="Tracé 4"
        d="M.035,13.942,0,0,13.942.035"
        transform="translate(9.859 24.585) rotate(-135)"
        fill="none"
        stroke={color}
        stroke-width="2"
      />
      <path
        id="trait"
        data-name="Tracé 5"
        d="M0,24.242V0"
        transform="translate(9.858)"
        fill="none"
        stroke={color}
        stroke-width="2"
      />
    </g>
  </svg>
</div>

<style>
  .arrow__icon__wrap {
    margin-left: var(--spacing-8);
  }
</style>
