export interface WeatherInfo {
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