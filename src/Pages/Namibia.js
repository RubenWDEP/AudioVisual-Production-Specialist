import './Namibia.css';

function Namibia() {
    return (
        <section className='namibiaMapSection'>
            <h2>Namibia</h2>
            <iframe className='namibiaMap' src="https://www.google.com/maps/embed?pb=!1m48!1m8!1m3!1d7663136.1057686815!2d19.392172!3d-20.309964!3m2!1i1024!2i768!4f13.1!4m37!3e2!4m5!1s0x195a241307afa6b7%3A0x4bfd5ea6f84ee36f!2sKatima%20Mulilo%2C%20Namibia!3m2!1d-17.5061578!2d24.280655799999998!4m5!1s0x1bf17cdeeef43e27%3A0x672413f2b406fe86!2sGrootfontein%2C%20Namibia!3m2!1d-19.572870899999998!2d18.1072924!4m5!1s0x1bf4ae1458427ed9%3A0x7c48f10693a1d452!2sOtjiwarongo%2C%20Namibia!3m2!1d-20.454542!2d16.664500699999998!4m5!1s0x1c76ef00d003fbb1%3A0x7b2b78577c36fede!2sWalvis%20Bay%2C%20Namibia!3m2!1d-22.9584081!2d14.5057511!4m5!1s0x1c7658ef0b44d78f%3A0xde9e043bc3383c4c!2sSwakopmund%2C%20Namibia!3m2!1d-22.6749351!2d14.525761099999999!4m5!1s0x1c0b1b5cb30c01ed%3A0xe4b84940cc445d3b!2sWindhoek%2C%20Namibia!3m2!1d-22.5608807!2d17.065754899999998!5e0!3m2!1ses!2sbw!4v1661767554931!5m2!1ses!2sbw" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Namibia Map'></iframe>
        </section>
    )
}

export default Namibia;