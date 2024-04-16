import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { useQuery } from "react-query";

function FavoritesPage() {
  const queryClient = useQueryClient();

  const removeFromFavoritesMutation = useMutation(
    (favoriteId) => fetch(`http://localhost:3001/favorites/${favoriteId}`, {
      method: "DELETE",
    }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("favorites");
      },
    }
  );

  const handleRemoveFromFavorites = async (favoriteId) => {
    await removeFromFavoritesMutation.mutateAsync(favoriteId);
  };

  const { data: favorites, isLoading, error } = useQuery("favorites", () =>
    fetch("http://localhost:3001/favorites").then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Favorite Movies</h2>
      <div className="favorites-list">
        {favorites.map((favorite) => (
          <div key={favorite.id}>
            <p>{favorite.title}</p>
            <button onClick={() => handleRemoveFromFavorites(favorite.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;