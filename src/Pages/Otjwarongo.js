import Comments from '../Components/Comments';
import GalleryComponent from '../Components/GalleryComponent';
import { otjwarongoPhotos } from '../Photos-Data/Photos';
import './Otjwarongo.css';

function Otjwarongo() {
    return (
        <section className='otjwarongo'>
            <h2>Otjwarongo</h2>
            <a id='otjwarongoAnchor' href='#otjwarongoGalleryBelow'>(galería de fotos a final de página)</a>
            <p>La conexión entre los pueblos namibios, así como sus carreteras, se antojan difíciles. A falta de Blablacar, existe un grupo en facebook, <a href='https://www.facebook.com/groups/namlifts/' target='_blank' rel='noreferrer'>Namlifts</a>, donde se ofrecen o buscan asientos libres para determinadas rutas. Otra forma de moverse es gracias a los taxis, que funcionan como combis, a similar precio que encuentras en Namlifts.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/otjiwarongo-3.jpg' alt='Otjiwarongo' />
            <p>Negocié el trayecto desde Grootfontein por 110 dolares namibios (unos 7€) y tras dos horas de viaje llegué al pequeño pueblo de Otjiwarongo, que según las lenguas nativas significa «Lugar agradable» y además es sede del Fondo de Conservación del Guepardo.</p>
            <p>Allí me daría encuentro con Monique, que aceptó hopedarme varios días mediante <a href='https://www.couchsurfing.com/' target='_blank' rel='noreferrer'>Couchsurfing</a>. Nativa francesa que a sus 70 años, tras muchos viajes por distintas partes del globo, decidió asentarse en Namibia. Compartió conmigo muchas historias sobre la época hippie, su infinita colección de piedras y su admiración al jazz y al Che Guevara.</p>
            <p>Con ayuda de una asociación francesa en 2008 creó <a href='https://peri-naua.com/' target='_blank' rel='noreferrer'>Peri Naua</a> («¿Qué tal estás?» en lengua Himba), una escuela y una biblioteca destinadas a niños en situación desfavorecida. Situada en el township, donde se concentra la población pobre y la mayoría de familias no pueden pagar las tasas escolares. A unos 10 minutos en coche del centro del pueblo, a parte del pequeño colegio, sólo hay iglesias y bares, con muchas zonas sin electricidad ni abastecimiento de agua.</p>
            <p>Pasé un par de días con los niños y los voluntarios, que además están construyendo un edificio destinado a una cocina social.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/otjiwarongo-12.jpg' alt='Otjiwarongo' />
            <p>Los fondos provienen de donaciones y de ventas de artesanía africana, que financian los costes de la construcción y el mantenimiento de la escuela y la biblioteca. Si quieres aportar tu granito a que este proyecto siga creciendo puedes hacerlo <a href='https://peri-naua.com/' target='_blank' rel='noreferrer'>aquí</a>.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/otjiwarongo-23.jpg' alt='Otjiwarongo' />



            <h3 id='otjwarongoGalleryBelow'>Galería de imágenes</h3>
            <GalleryComponent arrayPhotos={otjwarongoPhotos} />
            <Comments />


        </section>
    )
}

export default Otjwarongo;