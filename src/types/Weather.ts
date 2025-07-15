import type { WeatherDescription } from "./WeatherDescription";

export interface Weather {
    timezone: string,
    dt: number, 
    temp: number, 
    wind_speed: number,
    weather: WeatherDescription
    min: number,
    max: number,
}