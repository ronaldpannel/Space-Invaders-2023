class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  sub(other) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  mult(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  div(scalar) {
    if (scalar !== 0) {
      this.x /= scalar;
      this.y /= scalar;
    }
    return this;
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  // Calculate the magnitude squared of the vector
  magSq() {
    return this.x * this.x + this.y * this.y;
  }

  // Constrain the vector's components within a specified range
  constrain(minX, maxX, minY, maxY) {
    this.x = Math.min(Math.max(this.x, minX), maxX);
    this.y = Math.min(Math.max(this.y, minY), maxY);
    return this;
  }

  // p5.js version of constrain function
  constrained(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  normalize() {
    const m = this.mag();
    if (m !== 0) {
      this.div(m);
    }
    return this;
  }

  limit(max) {
    const mSq = this.x * this.x + this.y * this.y;
    if (mSq > max * max) {
      this.normalize();
      this.mult(max);
    }
    return this;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  // Static function to calculate the Euclidean distance between two vectors
  static dist(vec1, vec2) {
    const dx = vec1.x - vec2.x;
    const dy = vec1.y - vec2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  static add(vec1, vec2) {
    return new Vector(vec1.x + vec2.x, vec1.y + vec2.y);
  }

  static sub(vec1, vec2) {
    return new Vector(vec1.x - vec2.x, vec1.y - vec2.y);
  }

  static mult(vec, scalar) {
    return new Vector(vec.x * scalar, vec.y * scalar);
  }

  static div(vec, scalar) {
    if (scalar !== 0) {
      return new Vector(vec.x / scalar, vec.y / scalar);
    }
    return new Vector(0, 0);
  }

  static random2D() {
    const angle = Math.random() * Math.PI * 2;
    return new Vector(Math.cos(angle), Math.sin(angle));
  }

  // Static function to create a new vector from an angle
  static fromAngle(angle) {
    return new Vector(Math.cos(angle), Math.sin(angle));
  }

  // Calculate the dot product of two vectors
  dot(other) {
    return this.x * other.x + this.y * other.y;
  }

  // Calculate the angle between two vectors in radians
  angleBetween(other) {
    const dotProduct = this.dot(other);
    const magProduct = this.mag() * other.mag();
    return Math.acos(dotProduct / magProduct);
  }
  // Calculate the heading angle of the vector in radians
  heading() {
    return Math.atan2(this.y, this.x);
  }

  // Create a copy of the vector
  copy() {
    return new Vector(this.x, this.y);
  }

  // Set the vector to (0, 0)
  clear() {
    this.x = 0;
    this.y = 0;
    return this;
  }

  // Return a normalized copy of the vector
  normalized() {
    const m = this.mag();
    if (m !== 0) {
      return new Vector(this.x / m, this.y / m);
    }
    return new Vector(0, 0);
  }

  // Rotate the vector by a given angle in radians
  rotate(angle) {
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    const x = this.x * cosAngle - this.y * sinAngle;
    const y = this.x * sinAngle + this.y * cosAngle;
    this.x = x;
    this.y = y;
    return this;
  }

  // Calculate the distance between this vector and another vector
  dist(other) {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // Limit the vector's magnitude to a given value
  setMag(magnitude) {
    this.normalize().mult(magnitude);
    return this;
  }

  // Return the heading angle of the vector in radians
  heading() {
    return Math.atan2(this.y, this.x);
  }
}
