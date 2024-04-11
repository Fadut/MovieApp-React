import { useFetchSearchMultiQuery} from '../store';
import MovieCard from './movieCard';
import { useSelector } from 'react-redux';
// import useDispatch

function SearchedMultiList() {
    // const dispatch = useDispatch();
    const searchTerm = useSelector((state) => {
        return state.searchMulti.searchTerm
    });

    const {data, error, isFetching } = useFetchSearchMultiQuery(searchTerm);

    let content
    if (isFetching) {
        content = <div>Loading;</div>
    } else if (error) {
        content = <div>Error loading multi</div>
    } else {
        content = data.results
        .filter(movie => movie.poster_path !== null)
        .map((movie) => {
            return <MovieCard key={movie.id} movie={movie}></MovieCard>
        });
    }

    return (
        <div className='row row-cols-3 row-cols-md-2 m-4'>
            {content}
        </div>
    );
}

export default SearchedMoviesList;
