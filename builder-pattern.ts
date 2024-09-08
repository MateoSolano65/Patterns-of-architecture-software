// Producto
class House {
  walls!: number;
  doors!: number;
  windows!: number;
  roof!: string;
}

// Builder
class HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  setWalls(walls: number): this {
    this.house.walls = walls;
    return this;
  }

  setDoors(doors: number): this {
    this.house.doors = doors;
    return this;
  }

  setWindows(windows: number): this {
    this.house.windows = windows;
    return this;
  }

  setRoof(roof: string): this {
    this.house.roof = roof;
    return this;
  }

  build(): House {
    return this.house;
  }
}

// Uso del Builder
const house = new HouseBuilder()
  .setWalls(4)
  .setDoors(2)
  .setWindows(6)
  .setRoof('Tile')
  .build();

console.log(house);
