# [Aplicación de Orientación Vocacional](https://adminlte.io)

*Esta aplicación de orientación vocacional permite a los usuarios crear una cuenta para realizar un test que, basado en sus respuestas, les proporciona una lista de carreras profesionales a las cuales tienen mayor afinidad. Por otro lado incluye usuarios administradores que permite gestionar las preguntas, las carreras y las relaciones entre ellas, como a su vez tener visualizacion grafica y tabular de los resultados obtenidos por los usuarios, esta aplicación fue desarrollada para entidades que ofrecen educacion superior, con el fin de orientar a sus futuros estudiantes en la eleccion de su carrera profesional. La aplicación incluye un backend desarrollado en Node.js con utilizando express.js como framework, typescript como lenguaje de programación, sequelize como orm y SQL para consultar complejas a la base de datos y un frontend en Angular con la utilizacion de bootstrap y Angular Material para estilos, dando como resultado un aplicacion web completa con autenticación de usuarios y gestión de datos.*

<h1 align="center">Orientación vocacional</h1>
<p align="center">interfaz principal de la herramienta</p>
<p align="center"><img src="https://media.licdn.com/dms/image/v2/D4E22AQEEjg16MlSDNA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1686881680355?e=1727913600&v=beta&t=37W_ulk93fDGGEmIzr9U04XG-buZI_pW5ri6ixTwCbc"/></p> 

---

## Tabla de contenidos:


- [Instalación](#instalación)
- [Como empezar](#como-empezar)
- [API y Rutas](#api-y-rutas)
- [Caracteristicas](#caracteristicas)
- [Arquitectura](#arquitectura)
- [Implementación en la nube](#implementacion-en-la-nube)
- [Autor/es](#autores)
- [Directorio Github](#directorio-github)

---

## Instalación


### Requisitos Previos
Para ejecutar esta aplicación correctamente, es **recomendado** tener instalada una versión **par** de Node.js, específicamente **v20.x**. Asegúrate de que tu entorno cumpla con los siguientes requisitos:

- Node.js **v20.x**: Puedes descargarlo desde [Node.js Official Website](https://nodejs.org/).
- npm (viene con la instalación de Node.js).
- Git: Para clonar el repositorio. Puedes descargarlo desde [sitio web oficial de Git](https://git-scm.com/download/win).
- Base de datos local o en la nube: Asegúrate de tener una base de datos. Puedes tener una local descargando [App Server](https://www.appserv.org/en/download/).

### Instrucciones de Instalación

#### 1. Clonar el Repositorio
Primero, clona el repositorio a tu máquina local utilizando Git. Abre tu terminal en la carpeta que deseas ubicar el repositorio y ejecuta el siguiente comando:

```cmd
git clone https://github.com/Juanara21/OrientacionVocacional.git
```
---

## Como empezar


Una vez que hayas clonado el repositorio y cumplido con los requisitos previos, sigue estos pasos para comenzar a trabajar con la aplicación:

### 1. Instalación de Dependencias

#### Backend
1. **Navega al directorio del backend:**
   - Abre una terminal `cmd` y dirígete al directorio donde clonaste el repositorio.
   - Luego, ingresa al directorio del backend ejecutando el siguiente comando:
     ```cmd
     cd OrientacionVocacional\BackEnd_OrientacionVocacional
     ```

2. **Instala las dependencias necesarias:**
   - Ejecuta el siguiente comando para instalar todas las dependencias del backend:
     ```cmd
     npm install
     ```

#### Frontend
1. **Instalar Angular CLI (si no está instalado):**
   - Antes de instalar las dependencias del frontend, asegúrate de que Angular CLI esté instalado globalmente en tu sistema.
   - Si no lo tienes, puedes instalarlo ejecutando el siguiente comando:
     ```cmd
     npm install -g @angular/cli
     ```

2. **Navega al directorio del frontend:**
   - Luego, dirígete al directorio del frontend ejecutando el siguiente comando:
     ```cmd
     cd OrientacionVocacional\FrontEnd_OrientacionVocacional
     ```

3. **Instala las dependencias necesarias:**
   - Ejecuta el siguiente comando para instalar todas las dependencias del frontend:
     ```cmd
     npm install
     ```

## 2. Configuración de Variables de Entorno

1. **Configura las variables de entorno en el backend:**
   - Dentro del directorio `OrientacionVocacional\BackEnd_OrientacionVocacional`, crea un archivo `.env`.
   - Utiliza una base de datos Mysql
   - Añade las siguientes variables necesarias con las credenciales y configuraciones adecuadas:

     ```cmd
     SECRET_KEY=''                  ##Clave secreta para jwt puede ser generada en https://www.roboform.com/es/password-generator
     DB_NAME=''                     ##Nombre de la base datos
     DB_USER=''                     ##Usuario de la base datos
     DB_PASSWORD=''                 ##Contraseña de la base datos
     DB_HOST=''                     ##Host
     PORT=''                        ##Puerto recomendado 3001 para modo desarrollo


     ```
  
   - Asegúrate de reemplazar estos valores con las credenciales y configuraciones específicas para tu entorno.


### 3. Iniciar la Aplicación

#### Backend
1. **Inicia el servidor backend:**
   - Desde el directorio `backend`, ejecuta el siguiente comando para iniciar el servidor:
     ```cmd
     npm run dev
     ```
   - Esto levantará el servidor en el puerto configurado en las variables de entorno, generalmente `http://localhost:3001`.

#### Frontend
1. **Levanta la aplicación Angular:**
   - Desde el directorio `frontend`, ejecuta el siguiente comando:
     ```cmd
     ng serve
     ```
   - La aplicación frontend estará disponible en `http://localhost:4200`.

### 4. Acceder a la Aplicación

- Una vez que ambos servidores (backend y frontend) estén en funcionamiento, puedes acceder a la aplicación visitando `http://localhost:4200` en tu navegador.

---
## API y Rutas



### [Rutas de Usuario](https://adminlte.io)

 * #### `GET /api/users/`


    -Este endpoint no requiere un cuerpo JSON para la solicitud.

      ```javascript

      // (GET) Ruta para obtener todos los usuarios (requiere auth por JWT)
      localhost:3001/api/users/     

      ```

* #### `GET /api/users/user/:username`

    -Este endpoint no requiere un cuerpo JSON para la solicitud, pero si remplazar `:username` en la URL con el nombre de usuario que deseas buscar.

     ```javascript

      // (GET) Ruta para obtener un usuario por nombre de usuario (requiere auth por JWT)
      localhost:3001/api/users/user/:username
      

     ```

* #### `PUT /api/users/user/:username`

    -Este endpoint requiere un cuerpo JSON para la solicitud y `:username` en la URL con el nombre de usuario que deseas actualizar.

     ```javascript

      // (PUT) Ruta para actualizar un usuario existente (requiere auth por JWT)
      localhost:3001/api/users/:username

     ```
    - Ejemplo del JSON requerido.

      ```javascript

          {
            "primer_nombre": "Juan",
            "segundo_nombre": "Carlos",
            "primer_apellido": "Araujo",
            "segundo_apellido": "Saucedo",
            "email": "nuevoemail@example.com",
            "tipo_identificacion": "Cédula",
            "identificacion": 1234567890,
            "sexo": "M"
          }

      ```
* #### `DELETE /api/users/:username`

    -Este endpoint no requiere un cuerpo JSON para la solicitud, pero si remplazar `:username` en la URL con el nombre de usuario que deseas buscar.

    ```javascript

      // (DELETE) Ruta para eliminar un usuario (requiere auth por JWT, rol: admin)
      localhost:3001/api/users/:username
      

    ```


* #### `PUT /api/users/user/:username`

    -Este endpoint requiere un cuerpo JSON para la solicitud.

    ```javascript


      // (PUT) Ruta para cambiar la contraseña de un usuario (requiere auth por JWT)
      localhost:3001/api/users/user/:username

    ```
    - Ejemplo del JSON requerido.

      ```javascript

        {
          "oldPassword": "SecurePass1",
          "newPassword": "NewSecurePass2"
        }


      ```


## [Rutas de sesion](https://adminlte.io)

* #### `POST/api/sesion/`

    -Este endpoint requiere un cuerpo JSON para la solicitud.

    ```javascript


      // (POST) Ruta para crear un nuevo usuario (requiere auth por JWT)
      localhost:3001/api/sesion/

    ```
    - Ejemplo del JSON requerido.

      ```javascript

        {
          "username": "juan123",
          "password": "SecurePass1",
          "primer_nombre": "Juan",
          "segundo_nombre": "Carlos",
          "primer_apellido": "Araujo",
          "segundo_apellido": "Saucedo",
          "email": "juan.araujo@example.com",
          "tipo_identificacion": "Cédula",
          "identificacion": 1234567890,
          "sexo": "M"
        }

      ```
* #### `POST/api/sesion/login/`

    -Este endpoint requiere un cuerpo JSON para la solicitud.

    ```javascript



    // (POST) Ruta para iniciar sesión de un usuario (requiere auth por JWT)
    localhost:3001/api/sesion/login

    ```
    - Ejemplo del JSON requerido.

      ```javascript

      {
        "username": "juan123",
        "password": "SecurePass1"
      }


      ```



## [Rutas de Reportes](https://adminlte.io)

 * #### `GET/api/reportes/`


    -Este endpoint no requiere un cuerpo JSON para la solicitud.

      ```javascript

      // (GET) Ruta para obtener todos los usuarios (requiere auth por JWT, rol: admin)
      localhost:3001/api/reportes/    

      ```

* #### `GET /api/reportes/user`

    -Este endpoint no requiere un cuerpo JSON para la solicitud, pero si remplazar `:username` en la URL con el nombre de usuario que deseas buscar.

     ```javascript

      // (GET) Ruta para obtener usuarios sin información completa (requiere auth por JWT, rol: admin)
      localhost:3001/api/reportes/user
      

     ```
* #### `GET /api/reportes/:id`

    -Este endpoint no requiere un cuerpo JSON para la solicitud, pero si remplazar `:id` en la URL con el id de usuario que deseas buscar.

     ```javascript

      // (GET) Ruta para obtener un usuario por ID (requiere auth por JWT, rol: admin)
      localhost:3001/api/reportes/:id
      

     ```    



## [Rutas de Preguntas](https://adminlte.io)

  * #### `GET/api/question/`


     -Este endpoint no requiere un cuerpo JSON para la solicitud.

      ```javascript

        // (GET) Ruta para obtener todas las preguntas (requiere auth por JWT)
        localhost:3001/api/question/    

       ``` 
  * #### `POST/api/question/`

      -Este endpoint requiere un cuerpo JSON para la solicitud.

      ```javascript


        // (POST) Ruta para crear una nueva pregunta (requiere auth por JWT, rol: admin)
        localhost:3001/api/question/

      ```
      - Ejemplo del JSON requerido.

        ```javascript

          {
            "descripcion": "¿Cuál es la capital de Francia?",
            "CareerId": 1
          }

        ```      

  * #### `DELETE /api/question/:id`

      -Este endpoint no requiere un cuerpo JSON para la solicitud, pero si remplazar `:id` en la URL con el id de la pregunta que deseas eliminar.

       ```javascript
        // (DELETE) Ruta para eliminar una pregunta existente (requiere auth por JWT, rol: admin)
        localhost:3001/api/question/:id
      ```

  * #### `PATCH/api/question/:id`

    -Este endpoint requiere un cuerpo JSON para la solicitud y `:id` en la URL con el id de la pregunta que deseas actualizar..

     ```javascript
        // (PATCH) Ruta para actualizar una pregunta existente (requiere auth por JWT, rol: admin)
        localhost:3001/api/question/:id
     ```

     - Ejemplo del JSON requerido.

        ```json
            {
              "descripcion": "¿Cuál es la capital de Italia?",
              "CareerId": 2
            }
        ```  




## [Rutas de Carreras](https://adminlte.io)

* #### `GET /api/career/`

  -Este endpoint no requiere un cuerpo JSON para la solicitud.

    ```javascript
    // (GET) Ruta para obtener todas las carreras (requiere auth por JWT)
    localhost:3001/api/career/
    ```

* #### `POST /api/career/`

  -Este endpoint requiere un cuerpo JSON para la solicitud.

    ```javascript
    // (POST) Ruta para crear una nueva carrera (requiere auth por JWT, rol: admin)
    localhost:3001/api/career/
    ```

  - Ejemplo del JSON requerido.

    ```json
    {
      "career": "Ingeniería en Sistemas"
    }
    ```

* #### `PUT /api/career/:id`

  -Este endpoint requiere un cuerpo JSON para la solicitud y `:id` en la URL con el ID de la carrera que deseas actualizar.

    ```javascript
    // (PUT) Ruta para actualizar una carrera existente (requiere auth por JWT, rol: admin)
    localhost:3001/api/career/:id
    ```

  - Ejemplo del JSON requerido.

    ```json
    {
      "career": "Ingeniería en Redes"
    }
    ```

  
* #### `DELETE /api/career/:id`

  -Este endpoint no requiere un cuerpo JSON para la solicitud, pero debes reemplazar `:id` en la URL con el ID de la carrera que deseas eliminar.

    ```javascript
    // (DELETE) Ruta para eliminar una carrera existente (requiere auth por JWT, rol: admin)
    localhost:3001/api/career/:id
    ```

 ## [Rutas de Respuestas](https://adminlte.io)

* #### `GET /api/answer/`

  -Este endpoint no requiere un cuerpo JSON para la solicitud.

    ```javascript
    // (GET) Ruta para obtener todas las respuestas (requiere auth por JWT)
    localhost:3001/api/answer/
    ```

* #### `POST /api/answer/`

  -Este endpoint requiere un cuerpo JSON para la solicitud.

    ```javascript
    // (POST) Ruta para crear una nueva respuesta (requiere auth por JWT, rol: user)
    localhost:3001/api/answer/
    ```

  - Ejemplo del JSON requerido.

    ```json
    {
      "valor": "Respuesta correcta",
      "UserId": 1,
      "QuestionId": 1
    }
    ```

* #### `PUT /api/answer/:id`

  -Este endpoint requiere un cuerpo JSON para la solicitud y `:id` en la URL con el ID de la respuesta que deseas actualizar.

    ```javascript
    // (PUT) Ruta para actualizar una respuesta existente (requiere auth por JWT, rol: admin)
    localhost:3001/api/answer/:id
    ```

  - Ejemplo del JSON requerido.

    ```json
    {
      "valor": "Respuesta actualizada"
    }
    ```

 

* #### `DELETE /api/answer/:id`

  -Este endpoint no requiere un cuerpo JSON para la solicitud, pero debes reemplazar `:id` en la URL con el ID de la respuesta que deseas eliminar.

    ```javascript
    // (DELETE) Ruta para eliminar una respuesta existente (requiere auth por JWT, rol: admin)
    localhost:3001/api/answer/:id
    ```








