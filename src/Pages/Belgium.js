import GalleryComponent from "../Components/GalleryComponent";
import { belgiumPhotos } from "../Photos-Data/Photos";



function Belgium() {
    return (
        <section className='belgium'>
            <h2>Bélgica</h2>
            <GalleryComponent arrayPhotos={belgiumPhotos} />
        </section>
    )
}

export default Belgium;