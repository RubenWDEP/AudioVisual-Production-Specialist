import GalleryComponent from '../Components/GalleryComponent';
import { kasanePhotos } from '../Photos-Data/Photos';
import './Kasane.css';
import { Link } from 'react-router-dom';

function Kasane() {
    return (
        <section className='kasane'>
            <h2>Kasane</h2>
            <a id='kasaneAnchor' href='#kasaneGalleryBelow'>(galería de fotos a final de página)</a>
            <p>Kasane es una pequeñísima ciudad de apenas diez mil habitantes situada al extremo norte del país. Cuenta con aeropuerto propio, debido a su buena ubicación geográfica, muy cerca de las Cataratas Victoria y donde se encuentran las «Cuatro esquinas» de África, Botswana, Namibia, Zambia y Zimbabwe.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/kasane-6-1.jpg' alt='Kasane' />
            <p>Es una ciudad ideal para pasear en barco y hacer expediciones al parque Nacional de Chobe. Agradable y bonita, está construida en el medio de colinas verdes en la confluencia del río Chobe con el río Zambeze.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/kasane-2-1.jpg' alt='Kasane' />
            <p>La llegada en bus fue difícil, pues la carretera está en muy mal estado. Durante la primera hora de Maun a Nata el conductor no paró de serpentear esquivando enormes socavones. Eso sí, alguna vez que otra nos parábamos, pues a nuestro paso cruzaban cebras, jirafas y elefantes. El coste de este trayecto de de 600km fue de  160 pulas (13€) Maun-Nata y Nata-Kasane.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/kasane-4-1.jpg' alt='Kasane' />
            <p>Paseando por el pueblo encontramos muchas agencias de viajes, un par de supermercados grandes y pequeños comercios de artesanías, rodeados de monos y facóceros. Unos chavales se me acercan, quieren enseñarme la pesca del día.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/kasane-16-1.jpg' alt='Kasane' />
            <div className='showPicturesKasane'>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/kasane-16-1.jpg' alt='Kasane' loading="lazy" />
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/kasane-1-1.jpg' alt='Kasane' loading="lazy" />
                <p>La imagen de arriba muestra facoceros descansando; La foto de abajo muestra un joven enseñando la pesca del día</p>
            </div>
            <p>Me alojo por unos días en Bananya backpackers que, aunque alejado del pueblo, es bastante apañado y tiene un ambiente muy tranquilo. Se sitúa entre casas pequeñas y mucha amabilidad proveniente de sus vecinos. Salgo a caminar por los alrededores y me advierten del peligro de búfalos y elefantes cerca, debo de andar y pisar con más suavidad. Por (mala) suerte, no me crucé con ninguno.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/kasane-10-1.jpg' alt='Kasane' />
            <p>Aquí entablo amistad con un abogado de Zambia y una profesora de Canadá voluntaria con niños. Además, unos niños me acompañan por uno de mis habituales paseos y me abordan a preguntas llenos de curiosidad y risas, les gusta mi cámara y les enseño a tomar fotografías.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/kasane-1-3.jpg' alt='Kasane' />
            <p>También conozco a un anciano alemán ahora residente y enamorado Botsuana, el cual me ayuda con el cambio a dólares para mi próximo viaje a <Link to='/mytrips/southafrica/zimbaue/victoriawaterfalls'>Cataratas Victoria</Link> en Zimbabwe, aunque al final no era obligatorio pagar en esta moneda.</p>
            <h3 id='kasaneGalleryBelow'>Galería de imágenes</h3>
            <GalleryComponent arrayPhotos={kasanePhotos} />

        </section>
    )
}

export default Kasane;