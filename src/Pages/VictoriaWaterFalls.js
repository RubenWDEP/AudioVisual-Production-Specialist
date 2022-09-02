import GalleryComponent from '../Components/GalleryComponent';
import { waterFallPhotos } from '../Photos-Data/Photos';
import './VictoriaWaterFalls.css';

function VictoriaWaterFalls() {
    return (
        <section className='victoriaWaterfalls'>
            <h2>Zimbaue</h2>
            <a id='zimbaueAnchor' href='#zimbaueGalleryBelow'>(galería de fotos a final de página)</a>
            <p>Mi entrada a Zimbabwe quedó marcada por la tensión que se vivía en el país. Después de las elecciones se sucedieron muchas revueltas por supuesto amaño en los comicios, lo que causó hasta seis muertes durante las protestas.</p>
            <p>Relleno el debido informe para cruzar la frontera, y tras una hora de espera, previo pago de 30 dólares por tasas, consigo entrar. Llama la atención una caja expendedora de preservativos gratis, en mitad de la oficina de la aduana, como parte de la campaña en prevención del VIH. El virus afecta casi a 2 de los 16 millones de personas del país.</p>
            <p>Cruzo la frontera, no sin antes pisar en una especie de cuadrilátero de cemento para evitar el traspaso de enfermedades, y me dirijo a la ciudad de Victoria Falls. Entre instrumentos y esculturas, me intentan vender el que ellos consideran uno de los souvenirs más llamativos de la ciudad, un billete de un billón de dólares.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/cataratas-victoria-37.jpg' alt='Cataratas Victoria' />
            <p>Me dirijo al parque de las Cataratas, del cual disfrutaré durante cinco horas por el precio de 30 dólares la entrada. Este espectáculo fluvial es bautizado así por David Livingstone, el misionero y explorador escocés, que en 1855 las nombró por la reina Victoria.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/cataratas-victoria-16.jpg' alt='Cataratas Victoria' />
            <p>Localmente son conocidas como Mosi-oa-Tunya, «el humo que truena». Son una de las mayores atracciones turísticas del África austral, con una enorme oferta de viajes en helicóptero, avionetas, barcos, excursiones guiadas y hasta puenting sobre un antiguo arco de 1905.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/cataratas-victoria-32.jpg' alt='Cataratas Victoria' />
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/cataratas-victoria-33.jpg' alt='Cataratas Victoria' />
            <p>En una hora y media de recorrido podemos acceder por más de 15 puntos de vista a las diferentes cataratas, entre densa fauna y muchos monos buscando comida a nuestro alrededor. Toda una maravilla de la naturaleza, con lluvia intermitente en algunos cabos y adornado con arcoiris en cada paisaje. Con una anchura aproximada de 1,7 kilómetros, 108 metros de alto y aproximadamente una caída de 600 millones de litros cúbicos por minuto.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/cataratas-victoria-31.jpg' alt='Cataratas Victoria' />
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/cataratas-victoria-29.jpg' alt='Cataratas Victoria' />
            <p>A la salida no es extraño encontrarse con locales vestidos con atuendos típicos cantando, bailando e invitando a los turistas a unirse a su particular fiesta.</p>
            {/* <iframe></iframe> */}
            <h3 id='victoriaWaterfallsGalleryBelow'>Galería de imágenes</h3>
            <GalleryComponent arrayPhotos={waterFallPhotos} />

        </section>
    )
}

export default VictoriaWaterFalls;