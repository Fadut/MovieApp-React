import { useState } from "react";
import MovieTrailer from "./movieTrailer";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";

function MovieCard({movie}){
    const [isFavorite, setIsFavorite] = useState(movie.isFavorite);
    const queryClient = useQueryClient();

    const addToFavoritesMutation = useMutation(
        (newFavorite) => fetch(`http://localhost:3001/favorites`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify({ movieId}),
            body: JSON.stringify(newFavorite),
        }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("favorites");
            },
        }
    );

    const removeFromFavoritesMutation = useMutation(
        (favoriteId) => fetch(`http://localhost:3001/favorites/${favoriteId}`, {
            method: 'DELETE',
        }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("favorites");
            },
        }
    );

    // const handleFavoriteClick = async () => {
    //     if (isFavorite) {
    //         const favorite = movie.favorites.find(
    //             (fav) => fav.movieId === movie.id
    //         );
    //         if (favorite) {
    //             await removeFromFavoritesMutation.mutateAsync(favorite.id);
    //             // setIsFavorite(false);
    //         }
    //     } else {
    //         const newFavorite = { movieId: movie.id, title: movie.title };
    //         await addToFavoritesMutation.mutateAsync(newFavorite);
    //         // setIsFavorite(true);
    //     }
    //     setIsFavorite(!isFavorite);
    // };

    const handleFavoriteClick = async () => {
        if (movie.favorites && movie.favorites.length > 0) {
          if (isFavorite) {
            const favorite = movie.favorites.find((fav) => fav.movieId === movie.id);
            if (favorite) {
              await removeFromFavoritesMutation.mutateAsync(favorite.id);
            }
          } else {
            const newFavorite = { movieId: movie.id, title: movie.title };
            await addToFavoritesMutation.mutateAsync(newFavorite);
          }
        } else {
          // If movie.favorites is undefined or empty, add the movie to favorites
          const newFavorite = { movieId: movie.id, title: movie.title };
          await addToFavoritesMutation.mutateAsync(newFavorite);
        }
        setIsFavorite(!isFavorite);
      };


    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
                <img src= {posterBasePath + movie.poster_path} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title "><span>{movie.title.substring(0,200)}</span></h5>
                    <span className="far fa-star" aria-hidden="true"></span>
                    <span className="ml-1">{movie.vote_average}</span>
                    <p className="card-text">{movie.overview.substring(0,125).concat('....')}</p>
                    <div className="d-flex justify-content-between p-0">

                        <button onClick={handleFavoriteClick} className="far fa-star">
                            {isFavorite ? "DEL" : "ADD"}
                        </button>

                        <span className="far fa-calendar" aria-hidden="true"> {movie.release_date}</span>

                        <MovieTrailer movieId={movie.id} />
                        
                    </div>            
                </div>
            </div>
        </div>
      );
}
      
export default MovieCard;

    
