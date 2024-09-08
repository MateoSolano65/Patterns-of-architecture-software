// Interfaz para los manejadores
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

// Clase base para manejar la cadena
abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

// Manejador Concreto 1: Gerente
class ManagerHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'Aprobación del gerente') {
      return 'Gerente: Aprobó la solicitud';
    }
    return super.handle(request);
  }
}

// Manejador Concreto 2: Director
class DirectorHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'Aprobación del director') {
      return 'Director: Aprobó la solicitud';
    }
    return super.handle(request);
  }
}

// Manejador Concreto 3: CEO
class CEOHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'Aprobación del CEO') {
      return 'CEO: Aprobó la solicitud';
    }
    return super.handle(request);
  }
}

// Configuración de la cadena de aprobación
const manager = new ManagerHandler();
const director = new DirectorHandler();
const ceo = new CEOHandler();

manager.setNext(director).setNext(ceo);

// Enviando solicitudes a la cadena de aprobación
function clientCode(handler: Handler) {
  const requests = [
    'Aprobación del gerente',
    'Aprobación del director',
    'Aprobación del CEO',
  ];

  for (const request of requests) {
    console.log(handler.handle(request));
  }
}

clientCode(manager);
