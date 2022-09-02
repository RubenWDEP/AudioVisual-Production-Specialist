import './WhatIDo.css';
import { data } from '../Photos-Data/whatIDoData';

const images = require.context('../Photos-Data/Whatido-images', true);


function WhatIDo() {
    console.log(data.films)
    return (
        <section className='whatido'>
            <h2>Qué hago</h2>
            <section className='series'>
                <h3>Series de televisión</h3>
                {data.series.map((result) => {
                    return <article key={result.id}>
                        <img className={'article-photo'} src={images(`./${result.img}`)} alt='Sample' />
                        <div>
                            <h4>{result.name}</h4>
                            <p>{result.position}</p>
                            <p>{result.company}</p>
                            <p>({result.location}, {result.year})</p>
                        </div>
                    </article>
                })}
            </section>
            <section className='films'>
                <h3>Largometrajes</h3>
                {data.films.map((result) => {
                    return <article key={result.id}>
                        <img className={'article-photo'} src={images(`./${result.img}`)} alt='Sample' />
                        <div>
                            <h4>{result.name}</h4>
                            <p>{result.position}</p>
                            <p>{result.company}</p>
                            <p>({result.location}, {result.year})</p>
                        </div>
                    </article>
                })}
            </section>
            <section className='campaign'>
                <h3>Campañas</h3>
                {data.campaign.map((result) => {
                    return <article key={result.id}>
                        <img className={'article-photo'} src={result.img} alt='Sample' />
                        <div>
                            <h4>{result.name}</h4>
                            <p>{result.position}</p>
                            <p>{result.company}</p>
                            <p>({result.location}, {result.year})</p>
                        </div>
                    </article>
                })}
            </section>
            <section className='documentary'>
                <h3>Documentales</h3>
                {data.documentary.map((result) => {
                    return <article key={result.id}>
                        {result.url ? <iframe width="" height="225" src={result.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img className={'article-photo'} src={result.img} alt='Sample' />}
                        <div>
                            <h4>{result.name}</h4>
                            <p>{result.position}</p>
                            <p>{result.company}</p>
                            <p>({result.location}, {result.year})</p>
                        </div>
                    </article>
                })}
            </section>
            <section className='video'>
                <h3>Videos</h3>
                {data.video.map((result) => {
                    return <article key={result.id}>
                        <img className={'article-photo'} src={result.img} alt='Sample' />
                        <div>
                            <h4>{result.name}</h4>
                            <p>{result.position}</p>
                            <p>{result.company}</p>
                            <p>({result.location}, {result.year})</p>
                        </div>
                    </article>
                })}
            </section>
            <section className='jobs'>
                <h3>Trabajos</h3>
                {data.jobs.map((result) => {
                    return <article key={result.id}>
                        <img className={'article-photo'} src={images(`./${result.img}`)} alt='Sample' />
                        <div>
                            <h4>{result.name}</h4>
                            <p>{result.position}</p>
                            <p>{result.company}</p>
                            <p>({result.location}, {result.year})</p>
                        </div>
                    </article>
                })}
            </section>
            <section className='shortfilm'>
                <h3>Cortometrajes</h3>
                {data.shortfilm.map((result) => {
                    return <article key={result.id}>
                        {result.img && <img className={'article-photo'} src={result.img} alt='Sample' />}
                        <div>
                            <h4>{result.name}</h4>
                            <p>{result.position}</p>
                            <p>{result.company}</p>
                            <p>({result.location}, {result.year})</p>
                        </div>
                    </article>
                })}
            </section>
            <section className='exhibition'>
                <h3>Exposiciones</h3>
                {data.exhibition.map((result) => {
                    return <article key={result.id}>
                        <img className={'article-photo'} src={/* images(`./${result.img}`)*/result.img} alt='Sample' />
                        <div>
                            <h4>{result.name}</h4>
                            <p>{result.position}</p>
                            <p>{result.company}</p>
                            <p>({result.location.location1}/{result.location.location2}, {result.year})</p>
                        </div>
                    </article>
                })}
            </section>
            <section className='interview'>
                <h3>Entrevistas</h3>
                {data.interview.map((result) => {
                    return <article key={result.id}>
                        <iframe width="400" height="225" src={result.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div>
                            <h4>{result.name}</h4>
                            <p>{result.position}</p>
                            <p>{result.company}</p>
                            <p>({result.location}, {result.year})</p>
                        </div>
                    </article>
                })}
            </section>
            <section className='theater'>
                <h3>Teatro</h3>
                {data.theater.map((result) => {
                    return <article key={result.id}>
                        {result.img && <img className={'article-photo'} src={result.img} alt='Sample' />}
                        <div>
                            <h4>{result.name}</h4>
                            <p>{result.position}</p>
                            <p>{result.company}</p>
                            <p>({result.location}, {result.year})</p>
                        </div>
                    </article>
                })}
            </section>
            <section className='Misc'>
                <h3>Reseñas</h3>
                <ul className='reseñas'>
                    {data.Misc.review.map((result) => {
                        return <li key={result.id}>
                            {result.reviewby}
                        </li>
                    })}
                </ul>
                <h3>Proyecciones</h3>
                <ul className='proyecciones'>
                    {data.Misc.projection.map((result) => {
                        return <li key={result.id}>
                            {result.place}
                        </li>
                    })}
                </ul>
            </section>
        </section>
    )
}

export default WhatIDo;
