import GalleryComponent from '../Components/GalleryComponent';
import './CapeTown.css';
import { capeTownPhotos } from '../Photos-Data/Photos'
import Comments from '../Components/Comments';

function CapeTown() {
    console.log(capeTownPhotos.length)
    return (
        <section className='capeTown'>
            <h2>Ciudad del Cabo</h2>
            <a id='anchor' href='#galleryBelow'>(galería de fotos a final de página)</a>
            <p>Tras día y medio entre aviones y escalas, al fin llego a Ciudad del Cabo. Me da la bienvenida un recepcionista de unos doce años que me avisa del riesgo de sequía.</p>
            <p>Las <a href='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/1.jpg'>advertencias</a> se hacen notar en todo el albergue. El 1 de febrero de 2018 se proclamó la restricción de nivel 6, la que nos prohíbe duchas de más de minuto y medio, poner una lavadora y dejar correr el agua del lavabo. El objetivo, un consumo menor de 50 litros al día por persona. Eso sí, la compra de un litro y medio de agua sólo cuesta 9 rands sudafricanos, es decir, unos 0’60 céntimos. (1€=16ZAR)</p>
            <p>Cape Town (Ciudad del Cabo), es el asentamiento europeo más antiguo de Sudáfrica y la segunda ciudad más poblada del país. Famosa por su diversidad geográfica, su comercio portuario y cuna del movimiento anti-apartheid. A 10 kilómetros mar adentro se encuentra Robben Island, antigua isla penitenciaria donde encarcelaron a Nelson Mandela. El 11 de febrero de 1990 fue liberado y horas después, desde el balcón del edificio municipal de la ciudad, narró el discurso que abría una nueva era para el país con las primeras elecciones democráticas.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/12.jpg' alt='Lugar del primer discurso de Mandela' loading="lazy" />
                <figcaption>Edificio en el que Mandela proclamó su discurso</figcaption>
            </figure>
            <p>Muy cerca de allí se encuentra Companys Garden. Este jardín botánico alberga mucha flora y fauna de diferentes lugares del mundo. En él, <a href='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/23.jpg' target='_blank' rel='noreferrer'>las ardillas se acercan con facilidad a tu mano</a> y es muy frecuente encontrarse a grupos de escolares bailando y cantando para ganarse unas monedas.</p>
            <p>Con un muy mejorable inglés, fui familiarizándome con la ciudad. Adquirí la tarjeta mycity para moverme en bus, lo cual resulta muy sencillo por sus amplias conexiones. El tiempo es muy inestable en Cape Town, con mayoría de veces de cielo encapotado, alternando días de lluvia y Sol.</p>
            <p>Un profesor de inglés aprovechó sus vacaciones de Vietnam y me enseñó Boo Kap, el colorido barrio musulmán. Este distrito se identifica por las diferentes tonalidades de sus casas, calles empedradas y más de diez mezquitas.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/2.jpg' alt='Barrio musulmán' loading="lazy" />
                <figcaption>Barrio de Boo Kap</figcaption>
            </figure>
            <p>La mayoría de habitantes son mezcla de descendientes de inmigrantes y esclavos importados por los holandeses en el siglo XVIII. Actualmente la gente se beneficia que Bo Kaap está de moda para alquilar o vender sus casas a buen precio, lo que está creando un aburguesamiento y gentrificación del barrio.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/6.jpg' alt='Barrio musulmán' loading="lazy" />
                <figcaption>Barrio de Boo Kap</figcaption>
            </figure>
            <p>La calle de mi hostel, Long Street, olía peculiarmente a acuarela. Con casas de la época victoriana, variados comercios y un tránsito enorme, en ellas se da la mayor conglomeración de turistas con gente local.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/11.jpg' alt='Final de Long Street' loading="lazy" />
                <figcaption>Final de Long Street</figcaption>
            </figure>
            <p>Al anochecer, advertencia general, los forasteros vuelven a sus hostels. La noche no es recomendable y varios altercados sucedieron bajo mi balcón. «Cuidado con la cámara», me percibían una y otra vez. Todo cuidado es necesario, pues mi compañero de litera nipón sufrió el robo de su tarjeta de crédito a manos de un ladrón disfrazado de policía.</p>
            <p>Otro de los distritos de moda es el de Waterfront. En el antiguo puerto industrial, ahora remodelado, encontramos focas descansando y artistas callejeros entre una multitud de  turistas camino del centro comercial. En sus tiendas llama la atención la tanzanita, una gema  azul  de gran valor descubierta cerca del Kilimanjaro.</p>
            <div className='showPictures'>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/9.jpg' alt='focas descansando' loading="lazy" />
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/10.jpg' alt='artistas callejeros' loading="lazy" />
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/8.jpg' alt='Waterfront' loading="lazy" />
                <p>La imagen de la derecha muestra las focas descansando; La foto de en medio muestra artistas en la calle; Y la foto de la derecha muestra la zona de Waterfront</p>
            </div>
            <p>A unos cuarenta minutos andando, se encuentra Castle of Good Hope, el Castillo de la Buena Esperanza. La mejor muestra de una fortaleza de la Compañía Neerlandesa de las Indias Orientales. En su interior vemos a militares desfilando y hasta una demostración de cómo funcionaban los cañones.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/13.jpg' alt='Militares desfilando' loading="lazy" />
                <figcaption>Militares en alto en el Castillo de Buena Esperanza</figcaption>
            </figure>
            <p>Visité el Museo Militar del Castillo y la Colección de William Fehr, con pinturas al óleo, cerámica y mobiliario antiguo, muestra de cómo era la vida de los primeros colonizadores que llegaron a Sudáfrica. Además de entrar en la mazmorra Dark Hole y en la Sala de Tortura.</p>
            <p>Para quitarme este último mal sabor de boca acudí al, según el Daily Telegraph, el mejor coffee shop del mundo, el Truth Coffee Roasting. Los baristas, con su atuendo antiguo, te ofrecen el <a href='https://cdn.shopify.com/s/files/1/2147/2987/files/TRUTH_MENU_FOR_WEB_8174b5d7-e0dc-42e2-8c1d-2d0950d948ff_2048x2048.png?v=1527593586' target='_blank' rel='noreferrer'>periódico</a> (la carta) de la tienda, donde puedes seleccionar minuciosamente tu café.</p>
            <div className='showPictures'>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/16.jpg' alt='Cerámicas' loading="lazy" />
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/15.jpg' alt='Sala de la tortura' loading="lazy" />
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/18.jpg' alt='Barista en Truth Coffe Roasting' loading="lazy" />
                <p>La imagen de la derecha muestra algunas cerámicas del museo; La foto de en medio muestra la Sala de Tortura; Y la foto de la derecha muestra a un barista del Truth Coffe Roasting</p>
            </div>
            <p>Dejé que el barista me recomendara su favorito y lo acompañé con el plato Steampunk Benedict. Otros sabores populares de Sudáfrica son alimentos como el Bobotie, una mezcla de carne picada y huevo, o el Snoek, un atún baratísimo gracias a su gran oferta.</p>
            <div className='showPictures'>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/20.jpg' alt='Steampunk Benedict' loading="lazy" />
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/19.jpg' alt='Bobotie' loading="lazy" />
                <p>La imagen de la derecha muestra le plato Steampunk Benedict; Y la foto de la derecha muestra un plato de Bobotie</p>
            </div>
            <p>Uno de los tours más llamativos es el Cape Peninsula Day Tour, que recorre todo el cabo sur de la ciudad. Por 690R (43€) adquieres transporte, desayuno, almuerzo, entradas a los parques y equipamiento para una ruta en bicicleta. El día comienza con el trayecto a Sea Point. Allí podemos dar una vuelta en barco por el muelle, ver cómo se alimentan las focas y visitar pequeñas tiendas artesanales.</p>
            <div className='showPictures'>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/27-2.jpg' alt='Muelle' loading="lazy" />
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/24.jpg' alt='Marinero y foca' loading="lazy" />
                <p>La imagen de arriba muestra el muelle; Y la foto de la derecha muestra a un marinero compartiendo comida con una foca</p>
            </div>
            <p>Tras una parada para desayunar desde el mirador de Hout Bay, continuamos hacia Simon’s Town. En la Playa de Boulders residen los famosos pingüinos africanos, que disfrutan dándose un chapuzón o descansando al Sol ante la mirada de bastantes turistas.</p>
            <p>Ésta es una especie en peligro de extinción. Afortunadamente, con los más de 60.000 visitantes que acuden a la ciudad de Simon se consigue recaudar dinero para la conservación del pingüino y su hábitat, tanto en esta playa como en el resto de parques nacionales del país.</p>
            <div className='showPictures'>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/mirador-hout-bay.jpg' alt='Mirador Hout Bay' loading="lazy" />
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/36396303_1855183911213833_9079890287735603200_n.jpg' alt='Playa de Boulders' loading="lazy" />
                <p>La imagen de arriba muestra el mirador de Hout Bay; Y la foto de la derecha muestra la Playa de Boulders</p>
            </div>
            <p>En la parada para almorzar tenemos oportunidad de recrearnos en un paisaje frondoso con un Museo muy curioso, con una minuciosa selección de huesos de animales, flores e incluso objetos de la edad de piedra, además de una amplia explicación de la historia y que rodea el sitio.</p>
            <p>Por último, llegamos a Cape Point, donde nos deleitamos unas de las vistas más privilegiadas de Sudáfrica. Por los senderos montañosos es muy común cruzarse con avestruces, y en el camino de subida hacia su antiguo faro abundan los babuinos.</p>
            <div className='showPictures'>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/paisaje-frondoso.jpg' alt='Paisaje' loading="lazy" />
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/37.jpg' alt='Babuino' loading="lazy" />
                <p>La imagen de arriba muestra el paisaje; Y la foto de la derecha muestra a un babuino con su cría recién fallecida</p>
            </div>
            <p>Desde la cima, divisamos el Cabo de Buena Esperanza. Bautizado por Bartolomé Díaz como el Cabo de las Tormentas a causa de la gran cantidad de embarcaciones que naufragaron en su costa. Juan II de Portugal fue el encargado de darle el nombre con el que hoy se conoce, pues durante muchos años fue la única ruta marítima conocida hacia la India.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/38.jpg' alt='Cabo de Buena Esperanza' loading="lazy" />
                <figcaption>Cabo de Buena Esperanza</figcaption>
            </figure>
            <p>Para cerrar el día hicimos una sencilla ruta en bicicleta por Cape Peninsula Nature Reserve. Unos 10 kilómetros por un terreno muy tranquilo y afable.</p>
            <p>En mi último día acudí a Table Mountain, considerada una de las montaña más antiguas del mundo y una de las actuales siete maravillas. Montaña de la mesa, llamada así por su parte superior plana. Datada de más de 600.000 años, nos ofrece la mejor vista de toda Ciudad del Cabo. Podemos llegar a su pico subiendo al moderno <a href='https://tablemountain.net/plan-your-visit/' target='_blank' rel='noreferrer'>teleférico</a> (si el viento lo permite) o recorriendo durante dos horas su ladera.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/07/camino-a-table-mountain.jpg' alt='Camino a Table Mountain' loading="lazy" />
                <figcaption>Camino a Table Mountain</figcaption>
            </figure>
            <p>Una vez arriba, entre más de 350 senderos por los que caminar, admiramos una flora del mundo única, con la mayor concentración conocida de especies de plantas (1.300 por cada 10.000 km2), las cuales emplean estrategias reproductivas tales como las respuestas adaptativas al fuego y el esparcimiento de semillas por medio de insectos. Además, nos rodean más de 2.500 especies de <a href='https://es.wikipedia.org/wiki/Fynbos' target='_blank' rel='noreferrer'>fynbos</a> y unas 500 especies de <a href='https://es.wikipedia.org/wiki/Erica' target='_blank' rel='noreferrer'>erica</a>. Como curiosidad, también tenemos a nuestra disposición un buzón de correos justo a la entrada de la cima.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/06/46.jpg' alt='Camino a Table Mountain' loading="lazy" />
                <figcaption>Vista desde Table Mountain</figcaption>
            </figure>
            <p>Para hacernos una idea de la grandeza de este sitio recordamos que en el planeta hay seis reinos florales reconocidos: Antártico, Australasiano, Boreal, Neotrópico, Paleotrópico y el de este Cabo. Sin duda, un lugar adecuado para despedirse de Cape Town.</p>
            <h3 id='galleryBelow'>Galería de imágenes</h3>
            <GalleryComponent arrayPhotos={capeTownPhotos} />
            <Comments />
        </section>

    )
}

export default CapeTown;