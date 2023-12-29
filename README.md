<p align="center">
    <h1 align="center"/> Landing page SCVO </h1>
    <h4 align="center"> <a href="/docs/README(EN).md">Click here for the English version </a></h4>
</p>

- - -

## Requisitos

Para ejecutar este proyecto, necesitarás:

- [Node.js](https://nodejs.org/en/) versión 21.5.0 o superior.
- [npm](https://www.npmjs.com/) (viene con Node.js) o [Yarn](https://yarnpkg.com/).

Después de clonar el proyecto, necesitarás instalar las dependencias del proyecto. Navega al directorio del proyecto y ejecuta el siguiente comando:

### Instalación automática
Necesitas ejecutar.
```bash
npm ci
```
Esto asegura que uses las dependencias exactas.

### Instalación manual

```bash
npm install
```

Este proyecto utiliza las siguientes dependencias clave:

- [Next.js](https://nextjs.org/) - El marco de React para producción.
- [React](https://reactjs.org/) - Una biblioteca de JavaScript para construir interfaces de usuario.
- [React DOM](https://reactjs.org/docs/react-dom.html) - Sirve como el punto de entrada a los renderizadores del DOM y del servidor para React.
- [ESLint](https://eslint.org/) - Una herramienta de linting configurable y enchufable para identificar e informar sobre patrones en JavaScript.
- [Prettier](https://prettier.io/) - Un formateador de código con opiniones.
- [Jest](https://jestjs.io/) - Un marco de pruebas de JavaScript con un enfoque en la simplicidad.

Para asegurar la calidad del código, este proyecto utiliza [ESLint](https://eslint.org/) para el linting y [Prettier](https://prettier.io/) para el formateo del código. Asegúrate de ejecutar el linter y el formateador antes de hacer commit:

```bash
npm run lint
npm run pre-commit
```

Para ejecutar las pruebas, usa el siguiente comando:

```bash
npm test
```
- - -
## Empezando

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

Puedes empezar a editar la página modificando `pages/index.js`. La página se actualiza automáticamente a medida que editas el archivo.

Las [rutas de la API](https://nextjs.org/docs/api-routes/introduction) se pueden acceder en [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Este endpoint se puede editar en `pages/api/hello.js`.

El directorio `pages/api` está mapeado a `/api/*`. Los archivos en este directorio se tratan como [rutas de la API](https://nextjs.org/docs/api-routes/introduction) en lugar de páginas de React.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente Inter, una fuente personalizada de Google.
- - -
## Contribuyendo

### Cómo enviar una contribución

1. Crea una rama. Nómbrala correctamente con los estándares de "Convención de nombres de ramas de Git" si es posible. Por ejemplo:<br>
   `feat/nombre`: Una nueva característica <br>
   `fix/nombre`: Una corrección de error <br>
   `dox/nombre`: Cambios en la documentación<br>
   `style/nombre`: Cambios que no afectan al código (formateo)<br>
   `refactor/nombre`: Para cualquier refactorización.<br>
   `test/`: Añadir pruebas faltantes o corregir pruebas existentes<br>
2. Haz tus cambios en tu rama. Usa la [convención simplificada de commit](https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4)
3. Prueba tus cambios para asegurarte de que no rompen nada.
4. Envía una solicitud de extracción con tus cambios.

### Cómo aceptar contribuciones.
Todo el código debe ser revisado y aceptado por al menos 2 participantes antes de fusionarse en `master`
- - -
## Aprende más

Para aprender más sobre Next.js, echa un vistazo a los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y la API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

Puedes echar un vistazo al [repositorio de GitHub de Next.js](https://github.com/vercel/next.js/) - ¡tus comentarios y contribuciones son bienvenidos!

## Despliegue en Vercel

La forma más fácil de desplegar tu aplicación Next.js es utilizar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment) para más detalles.