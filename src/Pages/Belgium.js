import Comments from "../Components/Comments";
import GalleryComponent from "../Components/GalleryComponent";
import { belgiumPhotos } from "../Photos-Data/Photos";



function Belgium() {
    const sectionCommentName = "belgium";
    return (
        <section className='belgium'>
            <h2>Bélgica</h2>
            <GalleryComponent arrayPhotos={belgiumPhotos} />
            <Comments sectionCommentName={sectionCommentName} />
        </section>
    )
}

export default Belgium;