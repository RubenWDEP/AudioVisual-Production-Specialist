import './Comments.css';
import { useState } from 'react';


function Comments() {
    const [comment, setComment] = useState();

    const handleUserComment = (e) => {
        e.preventDefault()
    }

    return (
        <section className='comments'>
            <h3 className='postCommentSection'>Deja aquí tu comentario</h3>
            <form className='userComments' onSubmit={handleUserComment}>
                <label htmlFor='userName'>Nombre</label>
                <input type='text' name='userName' maxLength='8' minLength='4' required />
                <label htmlFor='comment'>Deja aquí tu comentario:</label>
                <textarea className='commentTextArea' name='comment' rows='6' cols='30'>Escribe aquí</textarea>
                <button>Enviar</button>
            </form>
            <h4>Comentarios:</h4>
            {comment &&
                <ul>
                    {comment.map((result) => {
                        return <li key={result.userNumber}>
                            <p>{result.userName} - {result.userCommentDate}</p>
                            <p>{result.userComment}</p>
                        </li>

                    })}
                </ul>
            }
            {!comment && <p className='noComments'>No hay comentarios</p>}
        </section>
    )
};

export default Comments;