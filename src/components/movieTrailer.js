import { useState } from "react";
import { useFetchMovieTrailerQuery } from "../store";
import '../App.css';

function MovieTrailer({ movieId }) {

    const [showTrailer, setShowTrailer] = useState(false);
    const { data: trailerData, error: trailerError, isFetching: trailerFetching } = useFetchMovieTrailerQuery(movieId);

    const handleShowTrailer = () => {
        setShowTrailer(true);
    }

    const handleCloseTrailer = () => {
        setShowTrailer(false);
    };

    // If trailer is still fetching, show loading
    if (trailerFetching) {
        return <div>Loading...</div>;
    }

    // If there's an error fetching the trailer, show error message
    if (trailerError) {
        return <div>Error loading trailer.</div>;
    }

    // If trailer data is available and showTrailer is true, show trailer
    if (trailerData && showTrailer) {

        const videoUrl = `https://www.youtube.com/embed/${trailerData.results[0]?.key}`;

        return (
            <div className="modal" style={{ display: "block" }}>
              <div className="modal-content">
                <span className="close" onClick={handleCloseTrailer}>&times;</span>
                <div className="video-container">
                  <iframe
                    title="Movie Trailer"
                    width="560"
                    height="315"
                    src={videoUrl}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          );
        }
        
    return (
        <div>
            <button className="btn btn-primary" onClick={handleShowTrailer}>
            Play Trailer
            </button>
        </div>
        );

}

export default MovieTrailer;
