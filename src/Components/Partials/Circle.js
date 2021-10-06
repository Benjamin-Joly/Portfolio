export default class Circle {
  constructor(x, y, color, size, noiseAmp) {
    (this.hooked = false),
      (this.color = color),
      (this.size = size),
      (this.x = x),
      (this.y = y),
      (this.distance = { x: 0, y: 0 }),
      (this.baseCoordinates = {
        x: x,
        y: y,
      });
    this.noiseAmp = noiseAmp;
  }
}
