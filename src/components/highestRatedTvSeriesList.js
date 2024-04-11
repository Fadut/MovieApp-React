import { useFetchHighestRatedTvSeriesQuery } from "../store/apis/moviesApi";
import TvCard from "./tvCard";

function HighestRatedTvSeriesList() {
    const {data, error, isFetching } = useFetchHighestRatedTvSeriesQuery();

    let content; 
    if (isFetching) {
        content = <div>Loading;</div>
    } else if (error) {
        content = <div>Error loading tv series.</div>
    } else {
        content = data.results
        .filter(tv => tv.poster_path !== null && tv.vote_average !== 0)
        .map((tv) => { return <TvCard key={tv.id} tv={tv}></TvCard>});
    }

    return (
        <div className="row row-cols-3 row-cols-md-2 m-4">
            {content}
        </div>
    );
}

export default HighestRatedTvSeriesList;

