import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
const {todo} = props
 
  return (
    <ul className='main'>
        {todo.map((todos,todoindex) => {
            return (
                <TodoCard key={todoindex} {...props} index={todoindex}>
                  <p>{todos}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
