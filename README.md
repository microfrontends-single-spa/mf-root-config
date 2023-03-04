# Microfrontend Root-Config

<p style='text-align: justify;'> Este proyecto es un microfrontend desarrollado en webpack versión 5.75.0 y con single-spa en su version 5.9.3. Su principal función es ser el orquestador de los micro-frontends de la aplicación. El aplicativo se encuentra en el siguiente <a href="https://mf-root-config.netlify.app/" target="_blank">enlace</a>.</p>


## Importmap JSON

<p style='text-align: justify;'> Dado que se usa single-spa los micro-frontends necesitan desplegarse en un dominio y colocar su dominio en un archivo JSON cuyo contenido debe ser el siguiente </p>

```javascript
{
  "imports": {
    "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
    "single-spa-vue": "https://cdn.jsdelivr.net/npm/single-spa-vue@2.1.0/dist/umd/single-spa-vue.min.js",
    "@portafolio/root-config": "//localhost:9000/portafolio-root-config.js",
    "@portafolio/mf-menu": "//localhost:4201/main.js",
    "@portafolio/mf-header": "//localhost:4203/main.js",
    "@portafolio/mf-advertising": "//localhost:4204/main.js",
    "@portafolio/mf-styles": "//localhost:4202/styles.js",
    "@portafolio/mf-whatsapp": "//localhost:8084/app.js"
  }
}
```

Las rutas deben ser cambiados segun el dominio de nuestra aplicación, es decir, reeemplazar `localhost:${port}` por el respectivo dominio

## Servidor de desarrollo

<p style='text-align: justify;'> Primero debemos clonar el código del <a href="https://github.com/lamatcalderon/mf-root-config">repositorio</a> y con una terminal instalar las dependencias</p> 

```sh
npm i
```

<p style='text-align: justify;'> Luego debemos ejecutar</p> 

```sh
npm start
```

<p style='text-align: justify;'> Esto levantará un servidor de desarrollo localhost en el puerto 9000 </p> 


## Construcción

<p style='text-align: justify;'> Los archivos generados a través del proceso de contrucción se almacenan en la carpeta <strong>dist</strong>, para construir el proyecto debemos ejecutar el siguiente comando en una terminal</p> 


```sh
npm run build
```