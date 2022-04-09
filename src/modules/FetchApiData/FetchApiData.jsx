import React, { useEffect, useState } from 'react';
import ShipsListing from './components/ShipsListing';
import axios from 'axios';

const FetchApiData = () => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(false);
    axios
      .get('https://swapi.dev/api/starships')
      .then((response) => {
        const { data } = response;
        setShips(data.results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
        setError('Es ist ein Fehler beim Laden der Daten aufgetreten');
      });
  }, []);

  if (loading) {
    return 'Lädt...';
  }

  if (error) {
    return error;
  }

  return (
    <main>
      <ShipsListing ships={ships} />
    </main>
  );
};

export default FetchApiData;
