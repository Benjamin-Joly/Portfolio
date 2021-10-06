<script>
  //svelte
  import { onMount } from "svelte";
  import CanvasGrid from "./CanvasGrid.svelte";
  //JS
  import Circle from "./Circle";
  // Canvas Size handler
  const initSize = () => {
    let size;
    if (window.innerWidth >= 1024) {
      return (size = window.innerHeight);
    } else {
      return (size = window.innerWidth);
    }
  };
  let size = initSize();
  window.addEventListener("resize", (e, ctx) => {
    size = initSize();
  });
  //variables init
  let circles = [];
  let move = 0;
  let reset = false;
  let canvas;
  //Circle creation logic
  const drawTheBlob = (cx, cy, size, amp, color, ctx) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    for (let a = 0; a < 362; a++) {
      const angle = (a * Math.PI) / 180;
      const x =
        cx + size * Math.cos(angle) + Math.floor(Math.sin(Math.random()) * amp);
      const y =
        cy + size * Math.sin(angle) + Math.floor(Math.sin(Math.random()) * amp);
      ctx.lineTo(x, y);
    }
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
  };
  const createCircle = (x, y, size, color, amp, ctx) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size + Math.random(size, size + 5), 0, Math.PI * 2);
    ctx.fill();
    return new Circle(x, y, color, size, amp);
  };
  const setCircles = (ctx) => {
    if (window.innerWidth >= 1024 && window.innerWidth <= 1540 /* laptop */) {
      circles = [
        createCircle(
          size - size * 0.25,
          size - size * 0.45,
          150,
          "#8478F6",
          3.5,
          ctx
        ),
        createCircle(
          size - size * 0.5,
          size - size * 0.2,
          50,
          "#8478F6",
          1.2,
          ctx
        ),
        createCircle(
          size - size * 0.8,
          size - size * 0.5,
          80,
          "#8478F6",
          1.5,
          ctx
        ),
      ];
    } else if (window.innerWidth >= 1540 /* Desktop */) {
      circles = [
        createCircle(
          size - size * 0.25,
          size - size * 0.5,
          180,
          "#8478F6",
          4,
          ctx
        ),
        createCircle(
          size - size * 0.5,
          size - size * 0.2,
          50,
          "#8478F6",
          1.2,
          ctx
        ),
        createCircle(
          size - size * 0.8,
          size - size * 0.5,
          90,
          "#8478F6",
          1.5,
          ctx
        ),
      ];
    } else if (window.innerWidth <= 700 /* Mobile */) {
      circles = [
        createCircle(
          size - size * 0.25,
          size - size * 0.5,
          80,
          "#8478F6",
          2,
          ctx
        ),
        createCircle(
          size - size * 0.5,
          size - size * 0.2,
          20,
          "#8478F6",
          1.15,
          ctx
        ),
        createCircle(
          size - size * 0.8,
          size - size * 0.5,
          50,
          "#8478F6",
          1.2,
          ctx
        ),
      ];
    } else {
      circles = [
        createCircle(
          size - size * 0.25,
          size - size * 0.5,
          120,
          "#8478F6",
          1.5,
          ctx
        ),
        createCircle(
          size - size * 0.5,
          size - size * 0.2,
          40,
          "#8478F6",
          1.2,
          ctx
        ),
        createCircle(
          size - size * 0.8,
          size - size * 0.6,
          60,
          "#8478F6",
          1,
          ctx
        ),
      ];
    }
  };
  //Magnetism
  const isMagnet = (e, circle, rect) => {
    if (
      e.x - rect.left < circle.x + circle.size &&
      e.x - rect.left > circle.x - circle.size &&
      e.y - rect.top < circle.y + circle.size &&
      e.y - rect.top > circle.y - circle.size
    ) {
      circle.hooked = true;
    } else if (
      circle.distance.x > circle.size ||
      circle.distance.y > circle.size ||
      circle.distance.x < -circle.size ||
      circle.distance.y < -circle.size
    ) {
      circle.hooked = false;
    }
  };
  const handleMagnetCircle = (e, circle) => {
    const rect = canvas.getBoundingClientRect();
    isMagnet(e, circle, rect);
    if (circle.hooked === true) {
      circle.x = e.x - rect.left;
      circle.y = e.y - rect.top;
      circle.distance.x += e.movementX;
      circle.distance.y += e.movementY;
      circle.color = "#5E4FEC";
    } else {
      circle.color = "#8478F6";
    }
  };
  //linear interpolation function
  const lerp = (start, end, amt) => {
    return (1 - amt) * start + amt * end;
  };
  onMount(() => {
    const ctx = canvas.getContext("2d");
    setCircles(ctx);
    window.addEventListener("resize", () => {
      setCircles(ctx);
    });
    const renderCircles = (reset, ctx) => {
      ctx.clearRect(0, 0, size, size);
      circles.forEach((circle) => {
        if (reset === true || circle.hooked === false) {
          circle.x = lerp(circle.x, circle.baseCoordinates.x, 0.03);
          circle.y = lerp(circle.y, circle.baseCoordinates.y, 0.03);
        }
        createCircle(
          circle.x,
          circle.y,
          circle.size,
          circle.color,
          circle.noiseAmp,
          ctx
        );
        drawTheBlob(
          circle.x - 0.7,
          circle.y - 0.7,
          circle.size + 2,
          circle.noiseAmp,
          circle.color,
          ctx
        );
      });
    };
    //Canvas mouseOver
    const onMouseMove = (e) => {
      console.log(circles);
      circles.forEach((circle) => {
        handleMagnetCircle(e, circle);
        if (
          circle.distance.x > circle.size ||
          circle.distance.y > circle.size ||
          circle.distance.x < -circle.size ||
          circle.distance.y < -circle.size
        ) {
          circle.hooked = false;
        }
      });
    };
    canvas.addEventListener("mousemove", onMouseMove.bind(this));
    //animation loop
    let frame;
    function loop() {
      renderCircles(reset, ctx);
      frame = requestAnimationFrame(loop);
    }
    loop();
  });
</script>

<canvas
  bind:this={canvas}
  id="canvas"
  width={size}
  height={size}
  style="min-width: {size}px"
/>
<CanvasGrid {size} />

<style>
  #canvas {
    position: absolute;
    opacity: 1;
    z-index: 0;
  }
  /* Mobile */
  @media (max-width: 500px) {
    #canvas {
      position: absolute;
      top: var(--spacing-58);
      opacity: 1;
      z-index: -1;
    }
  }
</style>
