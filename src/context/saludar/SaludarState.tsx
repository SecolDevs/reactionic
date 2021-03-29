import { useReducer } from 'react'
import SaludarContext from './SaludarContext'
import SaludarReducer from './SaludarReducer'

const SaludarState = (props: any) => {
  const initialState = {
    nombre: '',
  }

  const [state, dispatch] = useReducer(SaludarReducer, initialState)

  const handleName = (nombre: string) => {
    dispatch({
      type: '1',
      payload: nombre,
    })
  }

  return (
    <SaludarContext.Provider value={{ nombre: state.nombre, handleName }}>
      {props.children}
    </SaludarContext.Provider>
  )
}

export default SaludarState
