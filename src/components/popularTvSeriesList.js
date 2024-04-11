import { useFetchPopularTvSeriesQuery } from "../store";
import TvCard from "./tvCard";

function PopularTvSeriesList() {                                   
  const {data, error, isFetching } = useFetchPopularTvSeriesQuery();
                                                                    
let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results.map((tv) => {
      return <TvCard key={tv.id} tv={tv}></TvCard>
    });
  }

    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}

export default PopularTvSeriesList;