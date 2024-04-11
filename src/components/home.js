import MovieImg from '../assets/Image/movie_black2.jpg';

function Home() {
    return (
        <div className='container text-center'>
            <img className='rounded movie_img' src={MovieImg} width="450" height="450" alt='Film roll'/>
        </div>
    )
}

export default Home;