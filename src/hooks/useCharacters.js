import { useState, useEffect } from 'react';

const URL = 'https://rickandmortyapi.com/api/character';

export default function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const json = await res.json();
        const mapped = json.results.map((c) => ({
          id: c.id,
          title: c.name,
          image: c.image,
          description: `${c.species} - ${c.status} - ${c.gender}`,
        }));
        setCharacters(mapped);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { characters, loading, error };
}