import React from 'react'
export default function ComParametro(props) {
    console.log(props)
    const status = props.nota >= 7 ? 'APROVADO' : 'REPROVADO'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <p> Nome: {props.nome}</p>
            <p>Nota:  {props.nota}</p>
            <p> Situação do Aluno {status}</p>

        </div>
    )
}