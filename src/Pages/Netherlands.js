import Comments from "../Components/Comments";
import GalleryComponent from "../Components/GalleryComponent";
import { netherlandsPhotos } from "../Photos-Data/Photos";


function Netherlands() {
    return (
        <section className='netherlands'>
            <h2>Holanda</h2>
            <GalleryComponent arrayPhotos={netherlandsPhotos} />
            <Comments />
        </section>
    )
}

export default Netherlands;