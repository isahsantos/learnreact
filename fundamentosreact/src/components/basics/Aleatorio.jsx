import React from 'react'
export default function Random(props){
    console.log(props)
    const aleatorio = parseInt( Math.random() * (props.max - props.min) + props.min);
    return(
    
<p> Numero aletorio {aleatorio}</p>
    )
}