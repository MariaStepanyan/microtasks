import React, { FC } from 'react'
import { Button } from './Button'

export type TasksType = {
  id: number
  title: string
  isDone: boolean
}

type TodolistPropsType = {
  title: string
  tasks: Array<TasksType>
}

export const Todolist: FC<TodolistPropsType> = ({ title, tasks }) => {
  const tasksItems: JSX.Element = tasks.length !== 0
  ? <ul>{tasks.map((task) => {
      return (
        <li>
          <input type="checkbox" checked={task.isDone} />
          <span>{task.title}</span>
        </li>
      )
    })}</ul> : <span>Давай, до свидания</span>


  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button text="+" />
      </div>
      {tasksItems}
      <div>
        <Button text="All" />
        <Button text="Active" />
        <Button text="Completed" />
      </div>
    </div>
  )
}
