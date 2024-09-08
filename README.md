## **README**

### **Introducción**

Este repositorio contiene ejemplos de varios patrones de diseño implementados en **TypeScript**. Cada patrón está organizado en un archivo separado y demuestra cómo aplicar el patrón en situaciones comunes de desarrollo de software.

### **Requisitos previos**

- Node.js v12 o superior.
- TypeScript instalado globalmente (`npm install -g typescript`).

### **Instrucciones para ejecutar los ejemplos**

1. Clona el repositorio o descarga los archivos.
2. Navega a la carpeta del proyecto.
3. Asegúrate de tener **Node.js** y **TypeScript** instalados. Puedes instalar TypeScript de manera global si no lo tienes ya:
   ```bash
   npm install -g typescript
   ```
4. Instala los paquetes necesarios:

   ```bash
   npm init -y
   npm install --save-dev typescript ts-node
   ```

5. Compila y ejecuta cada archivo como se describe a continuación.

### **Archivos y ejemplos**

---

### **1. Builder Pattern** (`builder-pattern.ts`)

**Descripción**:
Este archivo contiene la implementación del patrón **Builder**. El patrón facilita la creación de objetos complejos (como una `House`) paso a paso, permitiendo construir diferentes configuraciones sin tener que usar un constructor largo o complejo.

**Cómo ejecutarlo**:

```bash
ts-node builder-pattern.ts
```

---

### **2. Observer Pattern** (`observer-pattern.ts`)

**Descripción**:
Este archivo implementa el patrón **Observer**, donde múltiples objetos (`LoggingObserver`, `EmailObserver`) observan a un sujeto (`Editor`) y son notificados cuando su estado cambia, como cuando se abre o se guarda un archivo.

**Cómo ejecutarlo**:

```bash
ts-node observer-pattern.ts
```

---

### **3. Factory Method Pattern** (`factory-method-pattern.ts`)

**Descripción**:
Este archivo contiene una implementación del patrón **Factory Method**, donde las subclases deciden qué tipo de producto concreto (`ConcreteProductA` o `ConcreteProductB`) crear sin que la clase base (`Creator`) tenga que saberlo.

**Cómo ejecutarlo**:

```bash
ts-node factory-method-pattern.ts
```

---

### **4. Chain of Responsibility Pattern** (`chain-of-responsibility-pattern.ts`)

**Descripción**:
Este archivo muestra cómo funciona el patrón **Chain of Responsibility**, donde varias clases (`ManagerHandler`, `DirectorHandler`, `CEOHandler`) manejan una solicitud en cadena hasta que una de ellas la procesa. Este patrón es útil para solicitudes con diferentes niveles de aprobación.

**Cómo ejecutarlo**:

```bash
ts-node chain-of-responsibility-pattern.ts
```

---

### **5. Memento Pattern** (`memento-pattern.ts`)

**Descripción**:
Este archivo implementa el patrón **Memento**, que captura y guarda el estado de un objeto (`Originator`) y lo restaura cuando sea necesario, útil para funcionalidades como "deshacer" en un editor de texto.

**Cómo ejecutarlo**:

```bash
ts-node memento-pattern.ts
```

---

### **Conclusión**

Cada archivo contiene un ejemplo funcional de un patrón de diseño en TypeScript. Puedes probarlos individualmente y ajustar los ejemplos según tus necesidades. Estos patrones son una parte fundamental del desarrollo de software orientado a objetos y te ayudarán a construir soluciones escalables y flexibles.
