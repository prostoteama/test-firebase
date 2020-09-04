import React from 'react'

export const Notes = ({notes, removeNote}) => {

    if (notes.length === 0) return <h3 className="text-center">Empty</h3>

    return (
        
        <ul className="list-group">
            {notes.map(note => (
                <li className="list-group-item" 
                key={note.id}>
                    
                    <div className="item-info">
                    <strong>{note.title}</strong>
                    <span>{note.date}</span>
                    </div>

                <button 
                type="button" 
                className="btn btn-outline-danger btn-sm"
                onClick={_ => removeNote(note.id)}
                >
                    &times;
                </button>
                </li>
            ))}
        </ul>
    )
}
