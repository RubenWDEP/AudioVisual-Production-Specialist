import './Botsuana.css';

function Botsuana() {
    return (
        <section className='botsuanaMapSection'>
            <h2>Botsuana</h2>
            <iframe className='botsuanaMap' src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d7621147.446253308!2d20.30286506341315!3d-21.141913397457344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m5!1s0x1ebb5b3c2ceea9bf%3A0x49a1769397ae11a1!2sGaborone!3m2!1d-24.6282079!2d25.923147099999998!4m5!1s0x19544d054c080299%3A0xad7cc125ed822f4b!2sMaun!3m2!1d-19.9952622!2d23.4180769!4m5!1s0x194d3cf14ca040d7%3A0xb7eceda342872ba6!2sNata!3m2!1d-20.210522299999997!2d26.1772994!4m5!1s0x195a9dc0331a2e35%3A0x23f9e2c759c3bc2e!2sKasane!3m2!1d-17.7952306!2d25.1711298!5e0!3m2!1ses!2sbw!4v1661612280828!5m2!1ses!2sbw" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Botsuana Map Route'></iframe>
        </section>
    )
}

export default Botsuana;