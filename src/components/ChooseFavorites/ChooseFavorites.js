import { useState, useEffect } from "react";
import Select from "../Select/Select";
import Alert from "../Alert/Alert";
import { fetchLocationData } from "../../fetch";

export default function ChooseLocation({
  favorites,
  setLocationData,
  error,
  setError
}) {
  const [loading, setLoading] = useState(false);
  const [selectedFavorite, setSelectedFavorite] = useState("");

  useEffect(() => {
    if (selectedFavorite) {
      setLoading(true);
      const selected = favorites.filter((f) => f.city === selectedFavorite);
      const state = selected[0].state;
      const country = selected[0].country;
      const params = `city?city=${selectedFavorite}&state=${state}&country=${country}&`;
      console.log(
        `https://api.airvisual.com/v2/${params}key=e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d`
      );
      fetchLocationData(params, setLocationData, setError, setLoading);
    }
  }, [selectedFavorite]);

  return (
    <div>
      {error && <Alert message={error} />}
      {favorites && (
        <Select
          category="Favorites"
          options={favorites.map((f) => f.city)}
          selectedOption={selectedFavorite}
          selectOption={(option) => {
            setError(false);
            setSelectedFavorite(option);
          }}
        />
      )}
      {loading && <h2>Loading...</h2>}
    </div>
  );
}
