import React, {useContext, useEffect} from 'react'
import { Form } from '../components/Form'
import { Notes } from '../components/Notes'
import { FirebaseContext } from '../context/fireabse/firebaseContext'
import { Alert } from '../components/Alert'
import { Loader } from '../components/Loader'
import { alertContext } from '../context/alert/alertContext'

export const Home = () => {
    const {notes, loading, fetchNotes, removeNote} = useContext(FirebaseContext)
    const {show} = useContext(alertContext)


    useEffect(() => {
        fetchNotes().catch(_ => {
            show('Empty notes')
        })
    }, [])

    return (
        <>
        <Alert/>
        <Form/>

        <hr/>
        {loading
            ?<Loader/>:
            <Notes notes={notes} removeNote={removeNote}/>
        }
        </>
    )
}