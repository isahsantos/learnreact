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
import ParouImpar from './components/condicional/ParouImpar'
import Usuario from './components/condicional/Usuario'
export default () => (
    <div className="App">
        <div className="Cards">
            <Card titulo="#01 - Desafio Número Randomico" color ="#8bbabb">
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
                <Aleatorio min={1} max={100}></Aleatorio>
            </Card>
            <Card titulo="#02 - Situação do Aluno" color="#6c7b95">
                <ComponentJSX nome="Pedro" nota={9.3}></ComponentJSX>
                <ComponentJSX
                    nome="Maria" nota={9.7}></ComponentJSX>
                <ComponentJSX
                    nome="Caio" nota={5.7}></ComponentJSX>
            </Card>
            <Card titulo=" #03 - Membros Familia" color="#464159">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Maria Julia " />
                    <FamiliaMembro nome="Luiza" />
                    <FamiliaMembro nome="Joao" />
                </Familia>
            </Card>
            <Card titulo=" #04 - Lista Alunos" color= "#35d0ba">
                    <ListaAluno></ListaAluno>
                </Card>
                <Card titulo=" #05 - Produtos" color= "#6886c5">
                    <Produtos></Produtos>
                </Card>
                <Card  titulo=" #06 - Par ou Impar" color= "#726a95">
                   <ParouImpar numero={20}></ParouImpar>
                </Card>
                <Card  titulo=" #07 - Usuario Info" color= "#726a95">
                   <Usuario usuario={{ nome:'Mariana Carvalho'}}/>
                   <Usuario usuario={{}}/>
                </Card>
        </div>
    </div>

)