import Comments from '../Components/Comments';
import GalleryComponent from '../Components/GalleryComponent';
import { addoPhotos } from '../Photos-Data/Photos';
import './Addo.css';

function Addo() {
    return (
        <section className='addo'>
            <h2>Safari Parque Nacional de ADDO</h2>
            <a id='addoAnchor' href='#addoGalleryBelow'>(galería de fotos a final de página)</a>
            <p>El Addo Elephant National Park es uno de los 19 parques nacionales que componen Sudáfrica y el tercero más grande, situado a una hora en coche desde Port Elizabeth. Establecido en 1931 para salvar de la extinción a 11 elefantes, de los cuales en la actualidad alberga más de 450.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/img_6110-1-3.jpg' alt='Elefante' />
            <p>Un elefante adulto africano puede alcanzar un peso de hasta 7 toneladas, es la especie terrestre con el tamaño corporal y cerebral más grande del reino animal. Viven hasta los 70 años, de los cuales reparten 16 horas de cada día a comer, consumiendo más de 220 kilos por jornada.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/elefantes-y-pumbas.jpg' alt='Elefantes y pumbas' />
            <p>Los jóvenes machos son expulsados del grupo a los 12 años, mientras que la hembra más adulta es quien lidera el grupo y protege a las crías de los enemigos. Con su trompa la madre ayuda a levantarlas y a caminar. Como curiosidades, en su época adulta nunca se sientan y es el único animal de cuatro patas incapaz de saltar.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/img_6110-1-2.jpg' alt='Elefante' />
            <p>Mi tour lo contraté con <a href='https://www.african-adventures.co.uk/' target='_blank' rel='noreferrer'>Africadventures</a> por unos 1250R (80€), lo que incluye guía, transporte, entrada al parque y almuerzo dentro del mismo. Como es temporada baja, tuve la gran suerte de realizar esta excursión con sólo una persona más, por lo que el trato con el guía fue muy cercano.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/vistas.jpg?w=692&h=&zoom=2' alt='Vistas' />
            <p>El término más famoso dentro de los safaris es el de «Big five», compuesto por el león, el leopardo, el rinoceronte, el búfalo y el elefante. Al leer los «Cinco grandes» interpretamos que se nombran así por su tamaño, pero el motivo es otro. El término fue acuñado por los colonizadores que llegaron a África en el siglo XIX y usado más tarde por los que cazan por deporte. Se les denomina a estas cinco especies por la dificultad y peligro de darles caza.</p>
            <p>Dentro del parque conviven búfalos, rinocerontes negros, antílopes, escarabajos voladores, alces, coyotes, ciervos, monos, avestruces, cebras, hienas, suricatos y facóceros, además de muchos pájaros extravagantes.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/addo-national-park-5.jpg' alt='Addo National Park (5)' />
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/addo-national-park-7.jpg' alt='Addo National Park (7)' />
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/mono-2.jpg' alt='Mono (2)' />
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/pc3a1jaro-1.jpg' alt='Pájaro (1)' />
            <p>Casi al final del safari, antes de ocultarse el Sol, tuvimos la fortuna de cruzarnos con una leona en la carretera. Sólo habita una decena de leones en el parque, y teniendo en cuenta que su superficie se compone de 1.640 kilómetros cuadrados, se puede decir que nos tocó la lotería.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/addo-national-park-21.jpg' alt='Addo National Park (21)' />
            <p>Ya en el último tramo del trayecto, un elefante comía del ramaje ocupando media calzada. Intentamos seguir sigilosamente por el camino, pero cada vez que nos acercábamos el paquidermo movía bruscamente la cabeza hacia nosotros, lo que implica agresividad y  territorialidad, así que dimos media vuelta y optamos por otra vía para regresar a Port Elizabeth.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/addo-national-park-6.jpg' alt='Addo National Park (6)' />
            <h3 id='addoGalleryBelow'>Galería de imágenes</h3>
            <GalleryComponent arrayPhotos={addoPhotos} />
            <Comments />
        </section>
    )
}

export default Addo;