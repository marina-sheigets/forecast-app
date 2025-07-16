import type { Weather } from "./Weather";

export interface HistoryItem {
    id: string;
    searchedAt: Date;
    timezone: string,
    weather: Weather;
};