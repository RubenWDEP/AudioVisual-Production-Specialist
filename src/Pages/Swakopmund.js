import Comments from '../Components/Comments';
import GalleryComponent from '../Components/GalleryComponent';
import { swakopmundPhotos } from '../Photos-Data/Photos';
import './Swakopmund.css';

function Swakopmund() {
    const sectionCommentName = "swakopmund";
    return (
        <section className='swakopmund'>
            <h2>Swakopmund</h2>
            <a id='swakopmundAnchor' href='#swakopmundGalleryBelow'>(galería de fotos a final de página)</a>
            <p>Walvis Bay y Swakopmund quedan separadas por 33 kilómetros de asfalto y puro desierto de dunas alzándose a poca distancia del Atlántico. Por 40 dólares namibios (2’40€) y media hora de camino podemos cruzar de una ciudad a otra.</p>
            <p>Con una población de más de 35.000 habitantes, Swakopmund destaca por su arquitectura colonial, debido a la ocupación alemana en 1892, fecha en la que fue fundada como puerto comercial de la entonces África del Sudoeste Alemana, quedando en la actualidad como una ciudad de vacaciones para las clases pudientes germanas.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/swakopmund-6.jpg' alt='Swakopmund' />
            <p>Como ocurrió en la mayoría de ocupaciones en África, los pueblos nativos fueron desplazados, en este caso, los Herero y los Nama, los cuales llegaron a sufrir torturas y asesinatos. A causa de estos enfrentamientos aún a día de hoy es palpable la segregación racial, pues la población negra reside en modestas construcciones (muchas de ellas chabolas) en el extrarradio, mientras que en el centro conviven los colonos blancos que son además la mayoría dueña de los negocios, basados en general en el turismo, principal base de la economía de la localidad.</p>
            <p>Me alojé una semana en el centro, en el albergue Salty Jackal Backpackers, donde hice amistad con una pareja voluntaria de Israel que me indicaron las actividades más destacadas del sitio. Ésta es la capital regional de los deportes de aventura, con una gran oferta de actividades: paseos a caballo, paracaidismo o sandboard por el desierto. Pasé otra semana en casa de Jasana, en Mondesa, un suburbio periférico alejado del turismo. Recorrí toda la costa en la que se sitúa el famoso puente.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/swakopmund-15.jpg' alt='Swakopmund' />
            <p>Terminado en abril de 1905 cuenta con 275 metros de largo y 9 de ancho. Usado entonces como embarcadero y transporte de mercancías, hoy día es el gran atractivo de pescadores y turistas, desde donde disfrutamos una amplia vista panorámica de la ciudad.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/swakopmund-9.jpg' alt='Swakopmund' />
            <p>Visité el museo colindante al rojiblanco faro. Es el museo privado más grande de Namibia (30$ la entrada, 1’70€) y en su interior obtenemos vista e información de una enorme variedad de minerales, plantas indígenas, animales, una exposición arqueológica, muchos objetos históricos culturales, recreaciones de casas locales y hasta la sala de un dentista de la época, así como un recorrido por la cronología de las máquinas de escribir y la locomotora. </p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/swakopmund-4.jpg' alt='Swakopmund' />
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/swakopmund-museum-cultural-history-owanbo.jpg' alt='Swakopmund' />
            <p>Al contrario que el museo, el Acuario prometía ser más grande de lo que realmente era. En unos 20 minutos de visita está finiquitado y en él observamos, entre otras especies, rayas y tiburones.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/img_9073.jpg' alt='Swakopmund' />
            <p>Namibia es uno de los mayores exportadores de minerales y productor de gemas brutas y uranio. Hacemos cuenta de ello en el museo y en una conocida Galería de cristal, donde abundan joyas y piedras preciosas.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/swakopmund-7.jpg' alt='Swakopmund' />
            <p>Siguiendo mi paso bordeando el desierto encontré un enorme cementerio. La arena está cada vez más presente y las casas empiezan a escasear a la vez que aumentan su tamaño y lujo. Son muy agradables y particulares las sensaciones en este sitio, donde el Desierto de Namib rodea tres de los puntos cardinales y en el cuarto, al oeste, se localizan las frías aguas del Atlántico.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/img_9038.jpg' alt='Swakopmund' />
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/img_9024.jpg' alt='Swakopmund' />
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/img_9051.jpg' alt='Swakopmund' />

            <p>Por último, buscando el Snake Park, hallé de casualidad una tienda de antigüedades con una representación de la locomotora de vapor Martin Luther de 1896, abandonada en el desierto. En el refugio de serpientes, además de contar con especies como la mamba negra podemos ver varios lagartos, tortugas y camaleones.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/swakopmund-110.jpg' alt='Swakopmund' />
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/swakopmund-3-1.jpg' alt='Swakopmund' />

            <h3 id='swakopmundGalleryBelow'>Galería de imágenes</h3>
            <GalleryComponent arrayPhotos={swakopmundPhotos} />
            <Comments sectionCommentName={sectionCommentName} />

        </section>
    )
}

export default Swakopmund;