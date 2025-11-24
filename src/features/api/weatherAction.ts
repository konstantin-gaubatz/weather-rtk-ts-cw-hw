import {api_key, base_url} from "../../utils/constants.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {WeatherInfo} from "../../utils/types";


export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: builder => ({
        getWeatherByCity: builder.query({
            query: city => `?q=${city}&appid=${api_key}&units=metric`,
            keepUnusedDataFor: 10, // Опция endpoint-а.
            // Устанавливает время хранения неиспользуемых данных для этого запроса в секундах.
            // Имеет выше приоритет, чем аналогичная опция у всего api (default - 60)

            // Еще одна возможная опция endpoint-а, которая позволяет вернуть измененный объект,
            // их тех данных, что нам отдает сервер по запросу.
            transformResponse: (response: WeatherInfo) => ({
                location: `${response.sys.country}, ${response.name}`,
                temp: Math.round(response.main.temp),
                pressure: response.main.pressure,
                sunset: new Date(response.sys.sunset * 1000).toLocaleTimeString()
            })
        })
    })
})


export const {useGetWeatherByCityQuery} = weatherApi