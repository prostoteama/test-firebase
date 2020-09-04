import React, {useContext} from 'react'
import { alertContext } from '../context/alert/alertContext'

export const Alert = () => { 
    const {alert, hide} = useContext(alertContext)

    if (!alert.visible) return null

return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <strong>Attentive</strong>
            {' ' + alert.text}
            <button type="button" className="close" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
)}