import './index.css'
import Primeiro from './components/basics/First'
import ReactDOM from 'react-dom'
import React from 'react'
import CompnentJSX from './components/basics/CompnentJSX'


ReactDOM.render(<div> < Primeiro > </Primeiro>
    <CompnentJSX titulo="Auno" subtitulo="Situação do Aluno" ></CompnentJSX>
   <CompnentJSX nome="Pedro" nota ={9.3}></CompnentJSX>
    <CompnentJSX 
    nome="Maria" nota ={9.7}></CompnentJSX>
    <CompnentJSX 
    nome="Caio" nota ={5.7}></CompnentJSX>
</div> , document.getElementById('root'))