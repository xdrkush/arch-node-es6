# Base node es6

## Pré-requis
  - Node v16
  - Visual Studio Code

## Mise en place
  - Ouvrez le dossier avec visual Studio Code
  - Dans les onglets en haut clicker sur Terminal puis Nouveau Terminal
  - Enfin taper les commandes si dessous (#RUN)

## Run
`npm i` : Ce qui installera les dépendances inscrites dans le package.json

`npm run dev`: Ce qui démarera la commandes dans le scripts du package.json (nodemon .)

# Architecture
`api` : Contiens toute la logique back-end router, controllers, middlewares, ... (db)

`config` : fichier configuration, fakedb, db, domain, key, ...

`helpers` : Function pour les registerHelpers de handlebars home made

`public` : fichier upload, acces via express.static

`utils` : Ici nous pourrions stocker des Function récurrente, formatDate, objToArray, ...

`views` : Toute la structure html parser avec handlebars

`.env` : Variable d'environement

`index.js`: Point d'entrée de notre fichier

`package.json`: Config npm

# Doc:
  - NodeJS: https://nodejs.org/api/http.html
  - NPM: https://www.npmjs.com/
  - https://github.com/xdrkush/cours-fullstack-web

Enjoy'

By DrKush