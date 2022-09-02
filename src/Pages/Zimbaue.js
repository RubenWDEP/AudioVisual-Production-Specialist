import './Zimbaue.css';

function Zimbaue() {
    return (
        <section className='zimbaueMapSection'>
            <h2>Zimbaue</h2>
            <iframe className='zimbaueMap' src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d121472.29771752321!2d25.790538!3d-17.93172!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m5!1s0x194fe53f0d97964b%3A0xb5064359416ab317!2sVictoria%20Falls%2C%20Zimbabue!3m2!1d-17.9315803!2d25.8301677!4m0!5e0!3m2!1ses!2sbw!4v1661767100379!5m2!1ses!2sbw" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Zimbaue Map'></iframe>
        </section>
    )
}

export default Zimbaue;