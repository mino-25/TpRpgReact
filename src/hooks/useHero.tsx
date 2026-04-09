

import { useState, useEffect } from 'react';
import type { Hero }            from '../types';
import { heroApi }              from '../api';

type UseHeroReturn = {
  hero:    Hero | null;
  loading: boolean;
  error:   string | null;
};

export function useHero(id: number | undefined): UseHeroReturn {
  const [hero,    setHero]    = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await heroApi.getOne(id);
        if (!cancelled) setHero(data);
      } catch (err) {
        if (!cancelled) setError((err as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [id]); 

  return { hero, loading, error };
}