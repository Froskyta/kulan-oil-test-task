import cities from '@mock/cities.json';
import distances from '@mock/distances.json'

export type CityT = {
    id: number
    address: string
}

export type DistanceT = {
    from: number
    to: number
    value: number
}

export const getCities = ():CityT[] => {
    return cities
}

export const getDistances = ():DistanceT[] => {
    return distances
}
