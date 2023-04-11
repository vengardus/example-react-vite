# Aprendiendo React con Vite 
## Iré agregando ejemplos varios

## Requeriments
yarn    
$ npm install -g yarn

## Create app
$ yarn create vite
or
$ yarn create vite@latest

## Install dependencies
$ yarn install

## Install react-icons
$ yarn add react-icons

## Install dayjs (formato de fechas, ligero)
$ yarn add dayjs

## Install react router
$ yarn add react-router-dom

## Install react-player
$ yarn add react-player

## Install y configurar tailwind (reemṕlaza a chakra-ui )
https://tailwindcss.com/docs/guides/vite

## Install stardard.js (Reglas de estilo js con linter para corregir errores en el código )
yarn add standard -D
### Install extension VsCode de ESLint de Microsoft
### Config autocorrecciones automáticas de código en VsCode
1. Abrir la paleta de comandos: Ctrl+Shift+P en Windows y Cmd+Shift+P en Mac
2. Escribir settings json
3. Seleccionar las preferencias de usuario: Preferences: Open User Settings (JSON)
4. Añadir al final del archivo y antes de que cierre la última llave, lo siguiente:
'''
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  }
'''
5. Grabar

## Directorios
/src 
  /components
    /ui         <--- user interfase
    /<funcionalidad>
      ...       <--- componentes, hooks, data
  /pages
    xxxPage.jsx
  /assets
    /css
    /img
  /data         <--- array o datos generales
  /hooks        <--- hooks generales
  main.jsx    
  router.jsx
  store.js