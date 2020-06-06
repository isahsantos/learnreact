import React from 'react'
import produtos from '../../data/produto'
import produto from '../../data/produto'
export default props => {
  const produtoid = produtos.map(produo =>{
    return  <tr key={produo.id}> {produo.id}</tr>
  })
    const produtodesc = produtos.map(produo =>{
      return  <tr> {produo.desc}</tr>
    })
       const produtopreco = produtos.map(produo =>{
      return  <tr> {produo.preco}</tr>});
return (
 <table >
  <tr>
    <th>Id</th>
    <th>Descrição</th>
    <th>Preço</th> 
    </tr>
    <tr>
    <td>{produtoid}</td>
    <td>{produtodesc}</td>
    <td>{produtopreco}</td>
  </tr>
</table>
)

}