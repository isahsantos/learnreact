import React, { Fragment } from 'react'
import Primeiro from './components/basics/First'
import ComponentJSX from './components/basics/CompnentJSX'
import Aleatorio from './components/basics/Aleatorio'


export default () => (
    <Fragment>
        < Primeiro > </Primeiro>
        <Aleatorio min={1} max={100}></Aleatorio>
        <ComponentJSX titulo="Auno" subtitulo="Situação do Aluno" ></ComponentJSX>
        <ComponentJSX nome="Pedro" nota={9.3}></ComponentJSX>
        <ComponentJSX
            nome="Maria" nota={9.7}></ComponentJSX>
        <ComponentJSX
            nome="Caio" nota={5.7}></ComponentJSX>
    </Fragment>

)