export interface WeatherResponse {
    sys: {
        country: string;
        sunset: number;
    };
    name: string;
    main: {
        temp: number;
        pressure: number;
    };
}

export interface WeatherInfo {
    location: string;
    temp: number,
    pressure: number,
    sunset: string
}