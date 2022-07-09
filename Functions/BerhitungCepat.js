class BerhitungCepat {
  constructor() {
    this.x = Math.floor(Math.random() * 11) + 1;
    this.y = Math.floor(Math.random() * 11) + 1;
  }
  multiplayValue(range = 1) {
    const value = { x: this.x * range, y: this.y * range };
    const result = this.x * range * this.y * range;
    return { value, result };
  }
  divideValue(range = 1) {
    const value = { x: this.x * this.y * range, y: this.y * range };
    const result = (this.x * this.y * range) / (this.y * range);
    return { value, result };
  }
  addValue(range = 1) {
    const value = { x: this.x * range, y: this.y * range };
    const result = this.x * range + this.y * range;
    return { value, result };
  }
  substracValue(range = 1) {
    const value = { x: this.x + this.y * range, y: this.y * range };
    const result = this.x + this.y * range - this.y * range;
    return { value, result };
  }
}

export default BerhitungCepat;
