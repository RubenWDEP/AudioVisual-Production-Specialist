import './Comments.css';
import { useEffect, useState } from 'react';
import { getSectionComment, sectionComment } from '../auxOps/auxOps';
import userProfile from '../images/profile-svgrepo-com.svg';


function Comments({ sectionCommentName }) {
    const [getComment, setGetComment] = useState(null);
    const [reFetch, setRefetch] = useState(false);

    let userName;
    let comment;

    useEffect(() => {
        async function getSectionComments(sectionCommentName) {
            const fetchComments = await getSectionComment(sectionCommentName);
            setGetComment(fetchComments)
        };
        getSectionComments(sectionCommentName)
    }, [sectionCommentName, reFetch]);

    const handleUserComment = async (e) => {
        e.preventDefault();
        console.log(userName);
        console.log(comment);
        console.log(sectionCommentName);

        try {
            const sendSectionComment = await sectionComment(userName, comment, sectionCommentName);
            console.log(sendSectionComment);
            userName = "";
            comment = "";
            e.target.reset();
            setRefetch(!reFetch)
        } catch (error) {
            console.error(error);
            e.target.reset();
        }

    }

    return (
        <section className='comments'>
            <h3 className='postCommentSection'>Deja aquí tu comentario</h3>
            <form className='userComments' onSubmit={handleUserComment}>
                <label htmlFor='userName'>Nombre</label>
                <input type='text' name='userName' maxLength='8' minLength='4' required onChange={(e) => { userName = e.target.value }} />
                <label htmlFor='comment'>Escribe aquí tu comentario:</label>
                <textarea className='commentTextArea' name='comment' rows='6' cols='30' onChange={(e) => { comment = (e.target.value) }}></textarea>
                <button>Enviar</button>
            </form>
            <h4>Comentarios:</h4>
            {getComment &&
                <ul>
                    {getComment.result.map((result, index) => {
                        return <li className='userCommentsStyle' key={index}>
                            <div>
                                <img id='commentImage' src={userProfile} alt='user profile' />
                                <p id='userNameComment'>{result.name} - {new Date(result.create_at).toLocaleDateString()}</p>
                            </div>
                            <p id='userComment'>{result.comment}</p>
                        </li>
                    })}
                </ul>
            }
            {!getComment && <p className='noComments'>No hay comentarios</p>}
        </section>
    )
};

export default Comments;