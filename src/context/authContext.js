import authReducer from '../reducers/authReducer'
import { createContext, useReducer } from 'react'



export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const user=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null
    const initialState={
        user:user
    }
    const [state, dispatch] = useReducer(authReducer,initialState)

    return <AuthContext.Provider value={{
        state,
        dispatch
    }}>
        {children}
    </AuthContext.Provider>
}