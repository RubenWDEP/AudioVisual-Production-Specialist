import GalleryComponent from "../Components/GalleryComponent";
import { italyPhotos } from "../Photos-Data/Photos";


function Italy() {
    return (
        <section className='france'>
            <h2>Italia</h2>
            <GalleryComponent arrayPhotos={italyPhotos} />
        </section>
    )
}

export default Italy;