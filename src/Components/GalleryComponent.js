import './GalleryComponent.css'


function GalleryComponent({ arrayPhotos }) {
    const arrayRange = Math.ceil(arrayPhotos.length / 4);
    const PhotosSlice1 = arrayPhotos.slice(0, arrayRange);
    const PhotosSlice2 = arrayPhotos.slice(arrayRange, arrayRange * 2);
    const PhotosSlice3 = arrayPhotos.slice(arrayRange * 2, arrayRange * 3);
    const PhotosSlice4 = arrayPhotos.slice(arrayRange * 3);

    return (
        <section className='PhotosSection'>
            <div className='row'>
                <div className='column'>
                    {PhotosSlice1.map((result, index) => {
                        return <img className='PhotosGalery' key={index} src={result} alt='Location' loading="lazy" />
                    })}
                </div>
                <div className='column'>
                    {PhotosSlice2.map((result, index) => {
                        return <img className='PhotosGalery' key={index} src={result} alt='Mauritania' loading="lazy" />
                    })}
                </div>
                <div className='column'>
                    {PhotosSlice3.map((result, index) => {
                        return <img className='PhotosGalery' key={index} src={result} alt='Mauritania' loading="lazy" />
                    })}
                </div>
                <div className='column'>
                    {PhotosSlice4.map((result, index) => {
                        return <img className='PhotosGalery' key={index} src={result} alt='Mauritania' loading="lazy" />
                    })}
                </div>
            </div>
        </section>

    )
}

export default GalleryComponent;