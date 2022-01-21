export interface ICity {
    city_name: string,
    city_id?: string
    state_code?: string,
    country_code?: string
}

export interface IWeather {
    coord: {
        lon: number,
        lat: number
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    base: string,
    main: {
        temp: number,
        pressure: number,
        humidity: number,
        temp_min: number,
        temp_max: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        message: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    id: number,
    name: string,
    cod: number
}

export interface APIProps {
    city: string
}

export interface ExtractorProps extends APIProps {
    onChange: Function
}

export interface MiniCardProps extends APIProps {
    onClick: Function
}