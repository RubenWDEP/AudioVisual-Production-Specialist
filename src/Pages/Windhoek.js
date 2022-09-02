import GalleryComponent from '../Components/GalleryComponent';
import { windhoekPhotos } from '../Photos-Data/Photos';
import './Windhoek.css';

function Windhoek() {
    return (
        <section className='windhoek'>
            <h2>Windhoek</h2>
            <a id='windhoekAnchor' href='#windhoekGalleryBelow'>(galería de fotos a final de página)</a>
            <p>Pasé los últimos días de mi ruta en la capital de Namibia, Windhoek, que en afrikáans significa «esquina del viento».</p>
            <p>Con una población de 300.000 habitantes (el 12% del país), formada por gente de ascendencia alemana (casi el 10%), ovambos, hereros, namas, afrikáners (6%), mestizos, asiáticos (7%) y otras etnias nativas. Es el centro político, económico y comercial (especializado en pieles de ovejas) del país.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/windhoek-9.jpg?w=1500&h=' alt='Windhoek' />
            <p>Acudí a su enorme museo de cuatro plantas y me empapé de su historia. Antes de entrar se alza el monumento a la independencia de Sam Nujoma, que en 1990 se convirtió en el primer presidente de Namibia.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/windhoek-11.jpg' alt='Windhoek' />
            <p>Windhoek fue en sus orígenes el centro de mando de un jefe nama que derrotó a los habitantes herero a principios del siglo XIX. En 1885 fue ocupado por el Imperio alemán y quedó como el asiento del régimen colonial en 1892 como la capital del África del Sudoeste Alemana.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/windhoek-16.jpg' alt='Windhoek' />
            <p>Durante la Primera Guerra Mundial, Windhoek fue capturada por tropas sudafricanas y estuvo bajo dominio británico y el apartheid desde 1948. Tras más de treinta años de guerrilla y lances burocráticos con la ONU consiguen la independencia. En dicho logro tuvo un papel importante Fidel Castro, por lo cual tiene una calle a su nombre al lado de la iglesia luterana situada en el centro histórico.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/windhoek-23.jpg' alt='Windhoek' />
            <p>En la última planta del museo contemplé una bonita panorámica de toda la ciudad, además de comer en el restaurante que pone fin a la visita. Pedí lo más tradicional que me pudieran ofrecer y acabé almorzando Osuswa yo Shiwambo y Oshikundu.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/08/windhoek-8.jpg' alt='Windhoek' />
            <p>Lo que traducido viene siendo pollo con pap, el principal acompañamiento de las comidas africanas con origen en las tribus Bantu de Sudáfrica, compuesto de harina de maíz, con una bebida consistente en  mijo fermentado. Éste plato, como todos los que llevan pap, se consume con las manos. También me invitaron por mi cumpleaños a una Tafel, la cerveza típica de la región.</p>
            <p>Visité la <a href='http://www.nagn.org.na/' target='_blank' rel='noreferrer'>Galería nacional de arte</a>, con una amplia colección de cuadros, la mayoría de arte abstracto, además de un espacio para exposición de estudiantes y una pequeña biblioteca. No permitían hacer fotos.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/09/1024x1024.jpg' alt='Windhoek' />
            <p>Residí varios días en el township periférico de Katutura, fundada para ser habitada por familias negras desplazadas por el entonces gobierno del apartheid. El nuevo barrio nativo fue bautizado Katutura por los Hereros, que significa «nosotros no tenemos una residencia permanente».</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/09/hakahanashackssmall.jpg' alt='Windhoek' />
            <p>Pasé otra semana viviendo en Avis, también a las afueras y muy cerca de las montañas, donde se encuentra la Reserva natural Avis Dam.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/09/img_9415-1.jpg' alt='Windhoek' />
            <p>Su presa se inundó en abril de 1934, pero sólo volvió a superar el 75% en 2007, y actualmente se encuentra alarmantemente seca. En esta área hay casi 200 especies diferentes de aves y se puede disfrutar de bonitos y largos senderos escénicos. Su entrada es gratuita.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/09/img_9442-1.jpg' alt='Windhoek' />
            <p>A cuarenta minutos caminando se encuentra el Jardín Botánico, el cual también es gratis y a su vez está muy seco.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/09/img_9478-1.jpg' alt='Windhoek' />
            <p>El parque cubre un total de 12 hectáreas donde descubrir la flora local y admirar su diversidad, con marcados senderos que completan una hora y media de excursión. Todas las plantas tienen un letrero con su descripción y algunas están a la venta a un precio asequible. Destacan la planta aloe Littorali y el árbol emblemático del país, el Quiver (foto de abajo). También hay varios Rock Hyrax habitando en la zona, muchos pájaros extravagantes, diversos lagartos y un mirador final en el que reposar disfrutando de las vistas a la ciudad.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/09/img_9498-1.jpg' alt='Windhoek' />

            <h3 id='windhoekGalleryBelow'>Galería de imágenes</h3>
            <GalleryComponent arrayPhotos={windhoekPhotos} />

        </section>
    )
}

export default Windhoek;