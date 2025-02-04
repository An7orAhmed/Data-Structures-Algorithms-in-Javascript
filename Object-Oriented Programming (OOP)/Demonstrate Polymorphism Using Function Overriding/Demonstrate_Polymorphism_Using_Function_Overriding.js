// Base class: Shape
class Shape {
    area() {
        return 0;
    }
}

// Derived class: Square extends Shape and overrides area() method
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
}

// Derived class: Circle extends Shape and overrides area() method
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return 3.14 * this.radius * this.radius;
    }
}

console.log(new Square(4).area());  // Output: 16
console.log(new Circle(2).area());  // Output: 12.56