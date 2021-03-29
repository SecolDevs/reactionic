import { createContext } from 'react'

type context = {
  nombre: string
  handleName: Function
}

const initialState = {
  nombre: '',
  handleName: () => {},
}

const SaludarContext = createContext<context>(initialState)

export default SaludarContext
