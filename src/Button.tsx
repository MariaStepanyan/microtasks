import React, { FC } from 'react'

type ButtonPropstype = {
  text: string 
}

export const Button: FC<ButtonPropstype> = ({ text }) => {
  return <button>{text}</button>
}
