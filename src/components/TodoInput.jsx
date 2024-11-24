import React, { useState } from 'react'

export default function TodoInput(props) {
const {handleTodolist, setInputTodo, inputTodo} = props

  return (
    <header>
        <input value={inputTodo} onChange={(e)=>{
          setInputTodo(e.target.value)
        }} placeholder='Enter TODO...' />

        <button onClick={()=>{
          handleTodolist(inputTodo)
          setInputTodo('')
        }}>
            ADD
        </button>
    </header>
  )
}
