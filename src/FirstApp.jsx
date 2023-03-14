import React from 'react'


const myVar = "mi variable"
const myObject = {
    name: 'Vengardus',
    country: 'Peru'
}

const myFunc = (name) => {
    return `Hola ${name}`
}

export default function FirstApp() {
  return (
    <>
        <h1>Fragment</h1>
        <div>Solo debe existir un nodo o elemento padre</div>
        <div>Si hay varios nodos a un mismo nivel, deben ir dentro de un nodo "fragment": {'<> </>'}</div>

        <h1>Impresión de variables</h1>
        <div>Las variables se imprimen dentro de llaves.</div>
        <div>Dentro de las llaves puede ir cualquier expresion Js, excepto objetos (directamente)</div>
        <div>Esta es una variable: { myVar }</div>
        <div>Este es un objeto serializado: { JSON.stringify(myObject) }</div>
        <div>Esta es una propiedad del objeto: { myObject.name }</div>
        <div>Este es un valor retornado de una función: { myFunc('Gardus') }</div>

    </>
  )
}
