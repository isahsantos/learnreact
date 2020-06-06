import React, { Fragment } from 'react'
import ComponentJSX from './components/basics/CompnentJSX'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import './components/App.css'
import './components/layout/Produtos.css'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import ListaAluno from './components/repeticao/ListaAluno'
import Produtos from './components/repeticao/Produto'


export default () => (
    <div className="App">
        <div className="Cards">
            <Card titulo=" #01 - Desafio Número Randomico" color="#c7f0db">
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
            </Card>
            <Card titulo="#02 - Desafio Número Randomico" color ="#8bbabb">
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
            </Card>
            <Card titulo="#03 - Situação do Aluno" color="#6c7b95">
                <ComponentJSX nome="Pedro" nota={9.3}></ComponentJSX>
                <ComponentJSX
                    nome="Maria" nota={9.7}></ComponentJSX>
                <ComponentJSX
                    nome="Caio" nota={5.7}></ComponentJSX>
            </Card>
            <Card titulo=" #04 - Membros Familia" color="#464159">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Maria Julia " />
                    <FamiliaMembro nome="Luiza" />
                    <FamiliaMembro nome="Joao" />

                </Familia>
            </Card>
            <Card titulo=" #05 - Lista Alunos" color= "#35d0ba">
                    <ListaAluno></ListaAluno>
                </Card>
                <Card titulo=" #06 - Produtos" color= "#6886c5">
                    <Produtos></Produtos>
                </Card>
        </div>
    </div>

)