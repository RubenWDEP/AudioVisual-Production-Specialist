import GalleryComponent from '../Components/GalleryComponent';
import { grootFonteinPhotos } from '../Photos-Data/Photos';
import './GrootFontein.css';

function GrootFontein() {
    return (
        <section className='grootFontein'>
            <h2>Ciudad del Cabo</h2>
            <a id='grootFonteinAnchor' href='#grootFonteinGalleryBelow'>(galería de fotos a final de página)</a>
            <p>Amanece en Kasane y pongo rumbo al centro del pueblo en busca de transporte hacia la frontera y Grootfontein, donde haré una parada antes de seguir hacia el corazón del país. Encuentro la combi que hace dicho recorrido pero en la furgoneta hay seis asientos más y tengo que esperar a que se ocupen. Tras casi dos horas el vehículo se completa y por 100 pulas (8€) cada pasajero partimos hacia Katima Mulilo, el primer pueblo namibio.</p>
            <p>Tras cuatro horas de trayecto llegamos al país que fue colonia alemana. De nuevo me sellan mal el pasaporte, solicito 50 días de estancia turística pero sólo me adjudican 30. Un rato de espera y mi ticket de vuelo de vuelta y el problema está resuelto. Llama la atención un puesto informativo colindante a la oficina de la aduana, en el que ofrecen preservativos gratis y folletos con información preventiva del ébola y otras enfermedades.</p>
            <p>Al llegar a Katima Mulilo compro una tarjeta SIM en un bazar chino (el primero que encuentro en mi estadía en África) con tal suerte que la hora de mi móvil se desactualiza y ésto hace que casi pierda el último bus hacia Grootfontein. Un hombre que casualmente habla castellano se ofrece a llevarme en su coche y conseguimos alcanzar al bus.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/grootfontein-1.jpg' alt='Grootfontein' />
            <p>230 dólares namibios (14€) y unas siete horas hasta entrar a la región de Otjozondjupa. Por el camino nos para la policía militar solicitando registro del maletero y revisión de pasaportes. Durante el trámite conozco a un profesor de USA voluntario en un poblado. En todas las horas de la ruta apenas nos hemos cruzado un pueblo y me cuenta que la mayoría de aldeas carecen de electricidad.</p>
            <p>Llevo despierto desde las cinco de la mañana y se acercan las doce de la noche cuando la chica del Airbnb que reservé me dice que es imposible alojarme, se le ha inundado la casa. Me ofrece otro sitio pero bajo advertencia de que está lleno de cazadores, a lo que rehúso y decido buscar otro sitio. En un pequeño apartamento, mi tocayo alemán Max por fin me da una cama donde descansar.</p>
            <p>En Grootfontein hay poco que ver, y aunque hay casi 30.000 habitantes, es domingo y las calles están desiertas. Durante mi paseo me cruzo una cárcel, varios campos de fútbol y rugby y lo que será una costumbre en los lugares pobres de Namibia, muchas iglesias y bares.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/grootfontein-5.jpg' alt='Grootfontein' />
            <p>En <a href='https://es.wikipedia.org/wiki/Afrik%C3%A1ans' target='_blank' rel='noreferrer'>afrikáans</a>, su nombre significa «Gran Manantial», por el balneario termal que hay a las afueras. A unos 24 kilómetros al oeste se encuentra el meteorito Hoba, el más grande en la Tierra y la mayor masa de hierro conocida.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/grootfontein-7.jpg' alt='Grootfontein' />
            <p>Se calcula que impactó en nuestro planeta hace unos 80.000 años. Fue descubierto por un agricultor mientras labraba y desde entonces no se ha movido del lugar en el que cayó debido a sus dimensiones.  Cuenta con un peso aproximado de 60 toneladas, aunque en 1920 se estimó que eran 66, pero la erosión, los estudios científicos y el vandalismo hicieron que degradara. El gobierno de la entonces África del Sudoeste declaró el Hoba como Monumento Nacional en 1955 para frenar un futuro deterioro. Tiene unas medidas de 3×3 metros y casi un metro de altura y es inusualmente plano en sus dos superficies mayores, lo que da lugar a la teoría de que rebotó sobre la Tierra como una piedra plana rebota sobre el agua. Su composición es de 82% hierro, 16% níquel, 1% cobalto y otros elementos.</p>

            <h3 id='grootFonteinGalleryBelow'>Galería de imágenes</h3>
            <GalleryComponent arrayPhotos={grootFonteinPhotos} />
        </section>
    )
}

export default GrootFontein;