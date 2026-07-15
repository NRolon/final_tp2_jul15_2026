Final de Taller de Programacion 2

-- Para levantar el proyecto se hace lo siguiente

1) npm install
2) npm run dev

-- Variables de Entorno

PORT=3000
JWT_SECRET=supersecret
AUTH_USER=admin
AUTH_PASSWORD=admin123
DB_PROVIDER=json

-- Para realizar el testeo

1) Utilizar primero el que dice LoginValido y copiar el token que aparecerà al costado.
èsto es sumamente importante ya que con eso vas a poder utilizar los testeos que pidan token que son en los PUT y DELETE. ACLARACION: EL BEARER NO SE ELIMINA, Dejè unos de ejemplos donde hay tokens de prueba
2) Cuando crees habitaciones, tener en cuenta de guardarte el ID de la misma, ya que lo usaras para los DELETE, PUT, para el getById

Eso es todo. Gracias
