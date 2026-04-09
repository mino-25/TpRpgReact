

import { useState, useEffect } from 'react';
import type { Quest }           from '../types';
import { questApi }             from '../api';

type UseQuestsReturn = {
  quests:       Quest[];
  loading:      boolean;
  error:        string | null;
  refetch:      () => void;
  removeQuest:  (id: number) => Promise<void>;
};

export function useQuests(): UseQuestsReturn {
  const [quests,  setQuests]  = useState<Quest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);
  const [tick,    setTick]    = useState(0);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await questApi.getAll();
        if (!cancelled) setQuests(data);
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

  const removeQuest = async (id: number) => {
    await questApi.remove(id);
    setQuests(prev => prev.filter(q => q.id !== id));
  };

  return { quests, loading, error, refetch, removeQuest };
}