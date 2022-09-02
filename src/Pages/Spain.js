import { spainPhotos } from '../Photos-Data/Photos'
import GalleryComponent from '../Components/GalleryComponent';


function Spain() {
    return (
        <section className='spain'>
            <h2>España</h2>
            <GalleryComponent arrayPhotos={spainPhotos} />
        </section>
    )
}

export default Spain;