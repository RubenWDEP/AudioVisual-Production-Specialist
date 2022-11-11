import { Link } from 'react-router-dom';
import Comments from '../Components/Comments';
import GalleryComponent from '../Components/GalleryComponent';
import { gaboronePhotos } from '../Photos-Data/Photos';
import './Gaborone.css';

function Gaborone() {
    const sectionCommentName = "gaborone";
    return (
        <section className='gaborone'>
            <h2>Gaborone</h2>
            <a id='gaboroneAnchor' href='#gaboroneGalleryBelow'>(galería de fotos a final de página)</a>
            <p>A 15 kilómetros de la frontera con Sudáfrica, se encuentra la capital de Botswana, Gaborone. Con sólo 200.000 habitantes, es la ciudad más poblada y rica del país.</p>
            <p>Lo primero que hice fue solucionar un problema con mi pasaporte, ya que en la frontera me sellaron por sólo 7 días cuando indiqué que me quedaría por 7 semanas. Un escrito justificando mi ampliación de estadía y una fotocopia del pasaporte bastaron para solucionarlo. Camino del departamento de inmigración concibo mis primeras amistades, con sólo ver mi cámara y mi tez blanca, la cual representa el 3% de la población, la gente se acerca por curiosidad y entablamos conversación. Tras pasar por las grandes urbes de Sudáfrica, al cruzar la frontera siento la seguridad de la que tanto me hablaban. El ambiente es muy relajado, hay personas bailando en cada esquina, sonriendo, pidiéndome selfies, fotos y monedas de España, invitándome a comer y, como Kenny, compartiendo su rinconcito conmigo.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/gaborone-3.jpg' alt='Gaborone (3)' />
            <p>La ciudad tiene fama de ser una de las más contaminadas del planeta. Y en parte es cierto, pues mucha gente acostumbra a tirar todo tipo de basura por la ventanilla del coche. La escasez de papeleras no ayuda (ni lo justifica) y las bicis brillan por su ausencia. Automóviles y gasolina son bastante asequibles y te puedes mover en «combi» (furgoneta taxi) por toda la ciudad por sólo 4 pulas (0’30 €).</p>
            <p>Casi todos los hoteles y albergues no operan con buscadores de internet y <a href='https://www.airbnb.es/' target='_blank' rel='noreferrer'>Airbnb</a> es lo más utilizado a la vez que costoso. Por suerte, los primeros dos días me quedé con Fifi, estudiante fotógrafa, gracias a a la plataforma <a href='https://www.couchsurfing.com/' target='_blank' rel='noreferrer'>Couchsurfing</a>. En la misma web quedo con Nanki, enfermera y futura pilota de aviones, que me acogió durante una semana.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/gaborone-6.jpg' alt='Gaborone (6)' />
            <p>El idioma tswana es el más hablado y muy complejo de practicar. Hasta los propios nativos nombran los números en inglés, dada la complejidad de la <a href='https://es.wikipedia.org/wiki/Lenguas_bant%C3%BAes' target='_blank' rel='noreferrer'>lengua bantú</a>.</p>
            <p>El habla inglesa es usada por todos y gracias a mi pequeña mejora encuentro más facilidades para conocer a gente local. Decido guardar la cámara y salgo de fiesta con mis anfitriones. En una venta de carretera, la multitud se reúne entre cervezas Hunter y un billar, el cual con bolas bastante pequeñas y a sólo 2 pulas la partida (0’17€) desata los piques y risas de todos. A la noche, nos agrupamos en torno a hogueras y barbacoas mientras bailamos música tradicional. Acabamos la noche en la famosa -y cara- discoteca Cigar, eso sí, no me dejaron pagar absolutamente nada.</p>
            <p>También me acompañaron al monumento de los Tres Dikgosi, el más visitado de la ciudad. Tres enormes figuras de bronce representan los jefes tribales precursores de la independencia del país. Khama III de Bangwato, Sebele I de Bakwena y Bathoen I de Bangwaketse.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/gaborone-5.jpg' alt='Los jefes tribales precursores de la independencia del país' />
            <p>Quitando su gente y safaris cercanos, en Gaborone no hay mucho más que ver. Recorrí su mercado callejero y me empaché de sus recetas típicas. Para desayunar, Pap, un alimento básico a base de harina proveniente de las tribus Bantu de Sudáfrica. De almuerzo, dumplings (masa de harina, patata y pan) con carne y verduras. Y para acompañar, Ginger Beer, una receta artesanal de bebida de jengibre. Todo esto, siempre, con un toque de picante.</p>
            <div className='showPicturesGaborone'>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/07c267d162403e036469e72eb914378e.jpg' alt='Pap' loading="lazy" />
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/gaborone-31.jpg' alt='Mercado callejero de Gaborone' loading="lazy" />
                <p>La imagen de arriba muestra una cucharada de Pap; Y la foto de abajo muestra el mercado callejero de Gaborone</p>
            </div>
            <p>Tras casi dos semanas de tranquilidad y reposo, salgo hacia el norte, Maun, donde me espera el <Link to='/mytrips/southafrica/botsuana/okavangograssland'>Delta del Okavango</Link>.</p>
            <h3 id='gaboroneGalleryBelow'>Galería de imágenes</h3>
            <GalleryComponent arrayPhotos={gaboronePhotos} />
            <Comments sectionCommentName={sectionCommentName} />
        </section>
    )
}

export default Gaborone;