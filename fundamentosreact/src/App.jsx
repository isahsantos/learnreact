import React, { Fragment } from 'react'
import Primeiro from './components/basics/First'
import ComponentJSX from './components/basics/CompnentJSX'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'

export default () => (
    <Fragment>
        <Card titulo="Primeiro Componente">
            < Primeiro > </Primeiro>
        </Card>
        <Card titulo="Desafio Número Randomico">
            <Aleatorio min={1} max={100}></Aleatorio>
            <Aleatorio min={1} max={100}></Aleatorio>
            <Aleatorio min={1} max={100}></Aleatorio>
            <Aleatorio min={1} max={100}></Aleatorio>
            <Aleatorio min={1} max={100}></Aleatorio>
        </Card>
        <Card titulo="Situação do Aluno">
            <ComponentJSX nome="Pedro" nota={9.3}></ComponentJSX>
            <ComponentJSX
                nome="Maria" nota={9.7}></ComponentJSX>
            <ComponentJSX
                nome="Caio" nota={5.7}></ComponentJSX>
        </Card>
    </Fragment>

)