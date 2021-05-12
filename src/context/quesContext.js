import quesReducer from '../reducers/quesReducer'
import {createContext,useReducer} from 'react'


export const QuesContext=createContext()


export const QuesProvider=({children})=>{

    const initialState={
        num:0
    }

    const [state, dispatch] = useReducer(quesReducer,initialState)
    const {num}=state

    return <QuesContext.Provider value={{
        num,
        dispatch
    }}>
       {children}
          </QuesContext.Provider>
}