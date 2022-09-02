import './Contact.css';


function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className='contact'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Nombre (Obligatorio)</label>
                <input type="text" name="name" minlength="4" maxlength="8" required />
                <label htmlFor='email'>Correo electronico (Obligatorio)</label>
                <input type="email" name="email" required />
                <label htmlFor='comment'>Comentario (Obligatorio)</label>
                <textarea name="name" rows="10" cols="50" minlength="50" maxlength="300" required />
                <button>Enviar</button>
            </form>
        </section>
    )
}

export default Contact;