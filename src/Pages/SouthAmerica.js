import './SouthAmerica.css';


function SouthAmerica() {
    return (
        <section className='southAmerica'>
            <h2>Sudamérica 2014-15</h2>
            <div className='importedMap'>
                <iframe className='importedMapIframe' src="https://www.tripline.net/map?tripId=3342444155361011A05BE7F14657906C&onSite=0" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen title='SouthAmerica Map'></iframe>
            </div>
            <iframe src="https://www.tripline.net/trip?id=3342444155361011A05BE7F14657906C&list=1" width="600" height="1000" frameborder="0" title='SouthAmerica Route Map'></iframe>
            <p>A continuación muestro un video resumen del viaje</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aaqzd2Xq16w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


        </section>
    )
}

export default SouthAmerica;