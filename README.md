---
title: API de Star Wars - Documentación
author: Abel Jean Pool Seminario Leon
---

## Description

Se desarrolló una api que interactúe con el API de Star Wars: https://swapi.py4e.com/ .
Esta API tambien tiene enpoints con métodos GET, POST, PATCH & DELETE, que interactúan con una base de datos MySql,
Ahí se realizararán operaciones (transacciones sql) como listar film, crear film, actualizar film y eliminar film.
La API usa el framework serverless para despliegue como function lamba en AWS.

## Configuration

Se configurarán las credenciales de la base de datos en el archivo: .env, este está incluido en el gitignore por posibles problemas de
cruce o actualzación de credenciales desde git, por lo que se usará de base el archivo: env.example .

**Parametros de configuración:**

***API_STARWARS=>*** Acá se coloca el url del API externo de Star Wars

***DB_HOST=>*** Acá se coloca la dirección del host de la base de datos

***DB_NAME=>*** Acá se coloca el nombre de la base datos

***DB_PORT=>*** Acá se coloca el puerto de la base datos

***DB_USER=>*** Acá se coloca el nombre de usario de la base datos

***DB=PASS=>*** Acá se coloca el password del usario de la base datos

## Installation

**Para instalar las dependencias del proyecto, ubicarse en carpeta raíz de la solución y ejecutar el siguiente comando:**
```bash
$ npm install
```

## Running the app

**Para Transpilar la solución:**
```bash
$ npm run build
```
**Para Desplegar la aplicación en servidor de AWS:**

*Primer paso: tiene que tener cuenta en AWS, sus credenciales e instalado el AWS CLI y AWS SAM.*

*Segundo paso: tiene que configurar el archivo serverless.yml con la configuración necesaria con la que desea desplegar en AWS.*

*Tercer paso: tiene que ubicarse en una terminal a nivel de la carpeta raiz y ejecutar el comando de abajo.*

```bash
# production
$ serverless deploy
```

**Para Desplegar la aplicación en modo de prueba como serverless offline:**

```bash
# development
$ npx serverless offline
```
## Swagger

**Para acceder al Swagger (Api Documentation)**

*Debe acceder  a la dirección url generada al desplegar, ubicarse en el puerto 8080  y añadir la ruta : /api*

Ejemplo: (https://localhost:8080/api)

*Ahí se podrá ver todos los endpoints, parámetros de uso y ejemplo de como se podrían usar.*
## Unit Test

**Para correr las pruebas unitarias:**

*Ubicarse en la carpeta raíz con una terminal y ejecutar el siguiente comando:*
```bash
# unit tests
$ npm run test
```

## Support

- Soporte - [Abel Jean Pool Seminario Leon](e3corpion@gmail.com)

## About

- Autor - [Abel Jean Pool Seminario Leon](https://github.com/werpoz)