// Clase Memento que guarda el estado
class Memento {
  constructor(private state: string) {}

  public getState(): string {
    return this.state;
  }
}

// Originador que crea y restaura estados
class Originator {
  private state!: string;

  public setState(state: string): void {
    this.state = state;
    console.log(`Estado actual: ${this.state}`);
  }

  public saveStateToMemento(): Memento {
    return new Memento(this.state);
  }

  public getStateFromMemento(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Estado restaurado a: ${this.state}`);
  }
}

// Clase Caretaker que gestiona los mementos
class Caretaker {
  private mementoList: Memento[] = [];

  public addMemento(memento: Memento): void {
    this.mementoList.push(memento);
  }

  public getMemento(index: number): Memento {
    return this.mementoList[index];
  }
}

// Uso del patrón Memento
const originator = new Originator();
const caretaker = new Caretaker();

originator.setState('Estado 1');
originator.setState('Estado 2');
caretaker.addMemento(originator.saveStateToMemento());

originator.setState('Estado 3');
caretaker.addMemento(originator.saveStateToMemento());

originator.setState('Estado 4');

originator.getStateFromMemento(caretaker.getMemento(0)); // Estado 1
originator.getStateFromMemento(caretaker.getMemento(1)); // Estado 3
