import { useState } from "react";

function MovieTrailer({movieId}) {

    const videoUrl = `https://www.youtube.com/embed/${movieId}`;

    const [showTrailer, setShowTrailer] = useState(false);

    const handleShowTrailer = () => {
        setShowTrailer(true);
    };

    return (
        <div className='iframe-container'>
            {!showTrailer && (
                <button className="btn btn-primary" onClick={handleShowTrailer}>
                    <span className="far fa-play-circle"></span> Play Trailer
                </button>
            )}
            {showTrailer && (
                <iframe
                title='Movie trailer'
                width="1200"
                height="600"
                src={videoUrl}
                allowFullScreen
                >
                    

                </iframe>
            )}

        </div>
    );
}

export default MovieTrailer;
