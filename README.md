# Proyecto Final - API REST con Node.js, Express, Firestore y JWT

## Descripción

Este proyecto consiste en el desarrollo de una API REST utilizando **Node.js** y **Express**, implementando una arquitectura en capas, autenticación mediante **JSON Web Token (JWT)** y almacenamiento de datos en **Firebase Firestore**.

La aplicación permite gestionar productos mediante operaciones CRUD protegidas por autenticación.

---

# Tecnologías utilizadas

* Node.js
* Express.js
* Firebase Firestore
* JSON Web Token (JWT)
* JavaScript (ES Modules)
* Git
* GitHub
* Vercel

---

# Arquitectura del proyecto

El proyecto está organizado siguiendo una arquitectura en capas:

* **Routes**

  * Define los endpoints de la API.

* **Controllers**

  * Reciben las solicitudes HTTP y coordinan la lógica.

* **Services**

  * Contienen la lógica de negocio.

* **Models**

  * Gestionan el acceso a Firestore.

* **Middlewares**

  * Verificación del token JWT y otras funcionalidades.

---

# Funcionalidades

## Autenticación

* Login mediante JWT.
* Generación de token.
* Protección de rutas mediante middleware.

---

## Productos

Operaciones disponibles:

* Obtener todos los productos.
* Obtener un producto por ID.
* Crear un producto.
* Eliminar un producto.

Todas estas operaciones requieren un token válido.

---

# Endpoints

## Login

**POST**

```text
/auth/login
```

---

## Productos

Obtener todos

```text
GET /api/products
```

Obtener por ID

```text
GET /api/products/:id
```

Crear producto

```text
POST /api/products/create
```

Eliminar producto

```text
DELETE /api/products/:id
```

---

# Despliegue

La API fue desplegada en Vercel.

**URL pública**

```text
https://proyectonode-owyw9y7z9-vilma-timonieris-projects.vercel.app/
```

---

# Instalación

Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar al proyecto

```bash
cd proyecto-final-api
```

Instalar dependencias

```bash
npm install
```

Crear un archivo `.env` con las variables correspondientes.

Ejecutar el servidor

```bash
npm start
```

---

# Variables de entorno

El proyecto utiliza un archivo `.env` para almacenar información sensible, como:

* SECRET_KEY del JWT.
* Configuración de Firebase.

Estas variables no se incluyen en el repositorio por razones de seguridad.

---

# Autenticación

Para acceder a las rutas protegidas es necesario:

1. Realizar el login.
2. Obtener el token JWT.
3. Enviar el token en el encabezado:

```text
Authorization: Bearer <TOKEN>
```

---

# Base de datos

La información se almacena en **Firebase Firestore**, permitiendo una base de datos NoSQL en la nube.

---

# Pruebas

La API fue probada utilizando Thunder Client verificando:

* Login.
* Generación del token.
* Acceso autorizado.
* Acceso sin token.
* Creación de productos.
* Consulta de productos.
* Eliminación de productos.

---

# Estado del proyecto

Proyecto funcional.

Características implementadas:

* API REST.
* Arquitectura en capas.
* Express.
* Firestore.
* JWT.
* Variables de entorno.
* Despliegue en Vercel.

---

# Autor

**Vilma Victoria Timonieri**

Proyecto desarrollado como trabajo final de Node.js.
