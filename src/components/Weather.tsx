import {useAppSelector} from "../app/hooks.ts";
import {useGetWeatherByCityQuery} from "../features/api/weatherAction.ts";

const Weather = () => {
    //const weather = useAppSelector(state => state.weather);
    //const message = useAppSelector(state => state.message);
    const city = useAppSelector(state => state.city);
    const {data, error, isLoading} = useGetWeatherByCityQuery(city);

    if (!city) {
        return <div className={'infoWeath'}>Enter city name</div>;
    }

    if (isLoading) {
        return <div className={'infoWeath'}>Loading...</div>;
    }

    if (error) {
        return <div className={'infoWeath'}>Enter correct city name</div>;
    }

    return (
        <div className={'infoWeath'}>
            {!!data &&
                <>
                    <p>Location: {data.sys.country}, {data.name}</p>
                    <p>Temp: {data.main.temp}</p>
                    <p>Pressure: {data.main.pressure}</p>
                    <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                </>
            }
        </div>
    )


    /*
        if (message) {
            return (
                <div className={'infoWeath'}>
                    {message}
                </div>
            )
        } else {
            return (
                <div className={'infoWeath'}>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {weather.sunset?.toLocaleTimeString()}</p>
                </div>
            )
        }
        */
}

export default Weather;