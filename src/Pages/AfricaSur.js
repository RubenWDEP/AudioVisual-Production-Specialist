import './AfricaSur.css';


function AfricaSur() {
    return (
        <section className='southAfricaRouteMapSection'>
            <h2>África del Sur 2018</h2>
            <iframe className='southAfricaRouteMap' src="https://www.tripline.net/map?tripId=20132462515410138B8E8CD55CBD4BE1&onSite=0" title='Africa map' width="512" height="288" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen>Viaje Africa 2018</iframe>

            {/* <div style="position: relative;margin: 5px 0 5px 0;padding-bottom: 56.25%;height: 0;clear: both;"><iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;border: 0;" src="https://www.tripline.net/map?tripId=20132462515410138B8E8CD55CBD4BE1&onSite=0" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div> */}

            <iframe className='southAfricaRoute' src="https://www.tripline.net/trip?id=20132462515410138B8E8CD55CBD4BE1&list=1" width="600" height="1500" title='Africa route' frameBorder="0"></iframe>
        </section>
    )
}

export default AfricaSur;