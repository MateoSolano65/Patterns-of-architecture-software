// Interfaz del Observer (suscriptor)
interface Observer {
  update(eventType: string, data: string): void;
}

// Clase concreta del Observer - Logging
class LoggingObserver implements Observer {
  constructor(private logFileName: string) {}

  update(eventType: string, data: string): void {
    console.log(
      `Logging to ${this.logFileName}: ${eventType} with data ${data}`
    );
  }
}

// Clase concreta del Observer - Email
class EmailObserver implements Observer {
  constructor(private email: string) {}

  update(eventType: string, data: string): void {
    console.log(
      `Sending email to ${this.email}: ${eventType} with data ${data}`
    );
  }
}

// Clase Sujeto (Editor)
class Editor {
  private observers: { [eventType: string]: Observer[] } = {};

  subscribe(eventType: string, observer: Observer): this {
    if (!this.observers[eventType]) {
      this.observers[eventType] = [];
    }
    this.observers[eventType].push(observer);
    return this;
  }

  unsubscribe(eventType: string, observer: Observer): this {
    this.observers[eventType] = this.observers[eventType].filter(
      (obs) => obs !== observer
    );
    return this;
  }

  notify(eventType: string, data: string): void {
    this.observers[eventType].forEach((observer) =>
      observer.update(eventType, data)
    );
  }

  openFile(filename: string): void {
    console.log(`Opening file: ${filename}`);
    this.notify('open', filename);
  }

  saveFile(filename: string): void {
    console.log(`Saving file: ${filename}`);
    this.notify('save', filename);
  }
}

// Uso del patrón Observer
const editor = new Editor();
const loggingObserver = new LoggingObserver('logfile.txt');
const emailObserver = new EmailObserver('admin@example.com');

editor.subscribe('open', loggingObserver).subscribe('save', emailObserver);

editor.openFile('document.txt');
editor.saveFile('document.txt');
