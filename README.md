# 10Pines Blog

El [Blog](https://blog.10pines.com/) de 10Pines usa [Ghost](https://ghost.org/), una plataforma de blogs.

Este repo tiene el theme de Ghost usado en el Blog, que es un fork de [Casper](https://github.com/TryGhost/Casper).

## Desarrollo

### Requerimientos

* [nvm](https://github.com/nvm-sh/nvm)
* [docker](https://docs.docker.com/engine/install/)
* [docker-compose](https://docs.docker.com/compose/install/)

### Cómo configurar Ghost localmente

1. Levantar Ghost: `docker-compose up`.
2. Ingresar al panel de admin en http://localhost:3000/ghost y configurar cuenta admin.<br/>
   Nota: el puerto se puede cambiar con la variable `GHOST_PORT` en el archivo `.env`.
3. *Opcional.* Exportar datos y configuraciones del Ghost productivo desde la sección
   [Labs](https://blog.10pines.com/ghost/#/settings/labs) del panel de admin e importarlo en la
   misma sección del Ghost local.<br/>
   Nota: es posible que algunas cosas no se importen correctamente.

### Live reloading

Las hojas de estilo se pueden buildear automáticamente con `make watch`. ¡No te olvides de correr `nvm use` antes!

Las modificaciones de los archivos son refrescadas automáticamente por Ghost, pero para archivos nuevos hay que reinciar el container.

## Build

### Cómo generar zip del theme para subir al blog

```sh
# Cambiar a la versión de node del proyecto
$ nvm use
# Instalar dependencias
$ npm install
# Generar zip (queda en dist/)
$ make build
```
