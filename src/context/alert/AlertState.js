import React, {useReducer} from 'react'
import { alertContext } from './alertContext'
import { alertReducer } from './alertReducer'
import { SHOW_ALERT, HIDE_ALERT } from '../types'

export const AlertState = ({children}) => {
    
    const [state, dispatch] = useReducer(alertReducer, {visible: false})
    
    const show = async (text, type = 'warning') => {
        dispatch({
            type: SHOW_ALERT, 
            payload: {
                text,
                type
            }})
        await setTimeout(_ => hide(), 2000)
    }

    const hide = () => {
        dispatch({
            type: HIDE_ALERT
        })
    }

    return (
        <alertContext.Provider value={{
            show, hide,
            alert: state
        }}>
            {children}
        </alertContext.Provider>
    )
} 