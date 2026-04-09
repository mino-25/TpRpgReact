import type { Hero, Quest } from './types';

const BASE_URL = 'http://localhost:3001'

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`Erreur ${res.status} :${res.statusText}`)
    return res.json() as Promise<T>;

}

export const heroApi = {
    getAll: () => fetchJson<Hero[]>(`${BASE_URL}/heroes`),
    getOne: (id: number) => fetchJson<Hero>(`$BASE_URL/heroes/${id}`),
    create: (hero: Omit<Hero, 'id'>) => fetchJson<Hero>(`${BASE_URL}/heroes`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(hero)
    }),
    update: (id: number, hero: Partial<Hero>) => fetchJson<Hero>(`${BASE_URL}/heroes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(hero)
    }),
    remove: (id: number) =>
        fetch(`${BASE_URL}/heroes/${id}`, { method: 'DELETE' })
            .then(res => { if (!res.ok) throw new Error(`Erreur ${res.status}`); }),
};

export const questApi = {
    getAll: () => fetchJson<Quest[]>(`${BASE_URL}/quests`),
    getOne: (id: number) => fetchJson<Quest>(`$BASE_URL/questes/${id}`),
    create: (Quest: Omit<Quest, 'id'>) => fetchJson<Quest>(`${BASE_URL}/quests`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(Quest)
    }),
    update: (id: number, Quest: Partial<Quest>) => fetchJson<Quest>(`${BASE_URL}/quests/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(Quest)
    }),
    remove: (id: number) =>
        fetch(`${BASE_URL}/quests/${id}`, { method: 'DELETE' })
            .then(res => { if (!res.ok) throw new Error(`Erreur ${res.status}`); })
}
