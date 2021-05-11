import modalReducer from '../reducers/modalReducer'
import {createContext,useReducer} from 'react'


export const ModalContext=createContext()


export const ModalProvider=({children})=>{

    const initialState={
        modalOpen:true
    }

    const [state, dispatch] = useReducer(modalReducer,initialState)
    const {modalOpen}=state

    return <ModalContext.Provider value={{
        modalOpen,
        dispatch
    }}>
       {children}
          </ModalContext.Provider>
}