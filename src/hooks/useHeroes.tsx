import { useEffect, useState } from "react";
import type { Hero } from "../types"
import { heroApi } from "../api";

type UseHeroesReturn = {
  heroes: Hero[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  addHero: (hero: Omit<Hero, 'id'>) => Promise<void>;
  removeHero: (id: number) => Promise<void>;
};


export function useHeroes(): UseHeroesReturn {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await heroApi.getAll();
        if (!cancelled) setHeroes(data);
      } catch (err) {
        if (!cancelled) setError((err as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [tick]);

  const refetch = () => setTick(t => t + 1);

  const addHero = async (hero: Omit<Hero, 'id'>) => {
    const created = await heroApi.create(hero);
    setHeroes(prev => [...prev, created]);
  };

  const removeHero = async (id: number) => {
    await heroApi.remove(id);
    setHeroes(prev => prev.filter(h => h.id !== id));
  };

  return { heroes, loading, error, refetch, addHero, removeHero };
}