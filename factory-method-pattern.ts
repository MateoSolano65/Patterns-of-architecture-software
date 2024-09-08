// Producto
interface Product {
  operation(): string;
}

// Producto Concreto 1
class ConcreteProductA implements Product {
  operation(): string {
    return 'Resultado del Producto A';
  }
}

// Producto Concreto 2
class ConcreteProductB implements Product {
  operation(): string {
    return 'Resultado del Producto B';
  }
}

// Creador (Factory Method)
abstract class Creator {
  abstract factoryMethod(): Product;

  someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: Trabajando con ${product.operation()}`;
  }
}

// Creador Concreto 1
class ConcreteCreatorA extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

// Creador Concreto 2
class ConcreteCreatorB extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

// Uso del patrón Factory Method
function clientCode(creator: Creator) {
  console.log(creator.someOperation());
}

clientCode(new ConcreteCreatorA()); // Creator: Trabajando con Resultado del Producto A
clientCode(new ConcreteCreatorB()); // Creator: Trabajando con Resultado del Producto B
