import React from 'react'

export default function FormModalCategoria() {
  return (
    <form action="">
      <input type="number" name='cod_categ' placeholder='Codigo da categoria' required />
      <input type="text" name='descricao' placeholder='Descrição' required />
      <input type="number" name='valor_diaria' placeholder='Valor da diária' required />
      <button className="singup" type="submit">
        Cadastrar
      </button>
    </form>
  )
}
