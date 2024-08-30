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
- Git: Para clonar el repositorio.

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
1. **Navega al directorio del frontend:**
   - Abre otra terminal `cmd` o utiliza la misma terminal después de instalar las dependencias del backend.
   - Dirígete al directorio del frontend ejecutando el siguiente comando:
     ```cmd
     cd OrientacionVocacional\FrontEnd_OrientacionVocacional
     ```

2. **Instala las dependencias necesarias:**
   - Ejecuta el siguiente comando para instalar todas las dependencias del frontend:
     ```cmd
     npm install
     ```

### 2. Configuración de Variables de Entorno

1. **Configura las variables de entorno en el backend:**
   - Dentro del directorio `backend`, crea un archivo `.env`.
   - Añade las variables necesarias como las credenciales de la base de datos, puerto, secret keys, etc.

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



