import React, {useContext, useState} from 'react'
import { alertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/fireabse/firebaseContext'



export const Form = () => {
    const [value, setInput] = useState("")
    const {show} = useContext(alertContext)
    const {addNote} = useContext(FirebaseContext)
    
    const submitHadler = (event) => {
        event.preventDefault()
        if (!value.trim()) {
            show('Empty area', 'danger') 
        }
        else {
            addNote(value.trim()).then(() => {
                show('Have been created', 'success')
            }).catch(() => {
                show('Error', 'danger')
            })
        }
        setInput("")
    } 

    return (
        <form onSubmit={submitHadler}> 
            <div className="form-group">
                <input 
                className="form-control" 
                type="text" 
                placeholder="Name of mark"
                value={value}
                onChange={e => setInput(e.target.value)}
                ></input>
            </div>
        </form>
    )
}   