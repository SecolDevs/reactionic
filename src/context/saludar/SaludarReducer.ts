const SaludarReducer = (state: any, action: any) => {
  switch (action.type) {
    case '1':
      return {
        ...state,
        nombre: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

export default SaludarReducer
