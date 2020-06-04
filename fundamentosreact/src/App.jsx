import React, { Fragment } from 'react'
import Primeiro from './components/basics/First'
import ComponentJSX from './components/basics/CompnentJSX'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import './components/App.css'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'

export default () => (
    <div className="App">
        <div className="Cards">
            <Card titulo=" #01 - Desafio Número Randomico">
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
            </Card>
            <Card titulo="#02 - Desafio Número Randomico">
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
            </Card>
            <Card titulo="#03 - Situação do Aluno" color="#080">
                <ComponentJSX nome="Pedro" nota={9.3}></ComponentJSX>
                <ComponentJSX
                    nome="Maria" nota={9.7}></ComponentJSX>
                <ComponentJSX
                    nome="Caio" nota={5.7}></ComponentJSX>
            </Card>
            <Card titulo=" #04 - Membros Familia" color="#080">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Maria Julia " />
                   <FamiliaMembro nome="Luiza" />
                    <FamiliaMembro nome="Joao" />
                   
                </Familia>
            </Card>
        </div>
    </div>

)