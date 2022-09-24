import { useState } from 'react';
import { contactAction } from '../auxOps/auxOps';
import './Contact.css';


function Contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [comment, setComment] = useState();
    const [status, setStatus] = useState()
    const [success, setSuccess] = useState()
    const [error, setError] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(name);
            console.log(email);
            console.log(comment);
            setStatus("Enviando");
            const contactActionRes = await contactAction(name, email, comment);
            if (contactActionRes.code === 200) {
                setSuccess(contactActionRes.message)
                console.log(contactActionRes.message);
                setStatus("Enviado");
            }
        } catch (error) {
            console.error(error.message);
            setError(error.message);
        } finally {
            e.target.reset();
            setTimeout(() => {
                setStatus(null);
                setSuccess(null)
            }, 3000);
        }
    }

    return (
        <section className='contact'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Nombre (Obligatorio)</label>
                <input type="text" name="name" minLength="4" maxLength="8" required onChange={(e) => setName(e.target.value)} />
                <label htmlFor='email'>Correo electronico (Obligatorio)</label>
                <input type="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='comment'>Comentario (Obligatorio)</label>
                <textarea name="name" rows="10" cols="50" minLength="50" maxLength="300" required onChange={(e) => setComment(e.target.value)} />
                <button>{status ? status : "Enviar"}</button>
                {error && <p>{error}</p>}
                {success && <p>{success}</p>}
            </form>
        </section>
    )
}

export default Contact;