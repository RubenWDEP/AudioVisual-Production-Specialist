import './WhoIAm.css'
import { Link } from 'react-router-dom';


function WhoIAm() {
    return (
        <section className='whoiam'>
            <h2>Quién Soy</h2>
            <img className='whoiam-photo' src="https://laemancipaciondelvertigo.files.wordpress.com/2021/10/dsc00007-21.jpg" alt='Maximiliano Porta' />
            <p>Me llamo Maxi y soy realizador audiovisual. Aunque además de ser realizador he pasado por todo tipo de trabajos. Camarero, friegaplatos, repartidor en bici, agricultor y mecánico de automóviles. Me decidí por el audiovisual y en 2013 me gradué en el IES Néstor Almendros (Tomares, Sevilla). Desde entonces he compaginado mis viajes en solitario con la fotografía y el vídeo, además de mi interés por la autogestión y la transformación social.</p>
            <p>He grabado y fotografiado alrededor de Europa occidental, Sudamérica y África. Posteriormente lo he expuesto por varios bares y centros culturales. He trabajado en varios cortometrajes y dos largometrajes. He escrito guiones y poemas. He dirigido un documental. También he sido fotógrafo en hoteles. He estado en decenas de escenarios, tanto de teatro como de eventos, unas veces tirando cables, otras montando el escenario y en otras, por supuesto, cámara en mano.  Todo esto por Nuakchot, Dublín, Las Palmas, Barcelona, Sevilla y Cádiz.</p>
            <p>En ésta página verás la mayoría de mis trabajos así como los desgloses de mis rutas.</p>
            <p>No dudes en <Link to="/contact">escribirme</Link>  si quieres utilizar algo de lo que te encuentres por aquí o si quieres consultarme cualquier otra cosa. También puedes encontrarme en Instagram.</p>
        </section>
    )
}

export default WhoIAm;