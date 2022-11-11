import Comments from "../Components/Comments";
import GalleryComponent from "../Components/GalleryComponent";
import { germanyPhotos } from "../Photos-Data/Photos";


function Germany() {
    const sectionCommentName = "germany";
    return (
        <section className='france'>
            <h2>Alemania</h2>
            <GalleryComponent arrayPhotos={germanyPhotos} />
            <Comments sectionCommentName={sectionCommentName} />

        </section>
    )
}

export default Germany;