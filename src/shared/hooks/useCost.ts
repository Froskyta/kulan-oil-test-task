import {getDistances} from "@features/delivery-calculator/api";

export const distances = getDistances()

export function calculateDistance(from: number, to: number) {
    const findDistance = distances.find((distance) => {
        return distance.from === from && distance.to === to
    })
    return findDistance?.value || null
}

export function calculateTime(from:number, to:number) {
    const distance = calculateDistance(from, to)

    if (distance) {
        if (distance < 100) return 24
        if (distance >= 100 && distance <= 499) return 48
        if (distance >= 500) return 96
        return Infinity
    } else {
        return null
    }
}

export function calculatePrice(from: number, to: number) {
    const distance = calculateDistance(from, to)
    const time = calculateTime(from, to)

    if (distance && time) {
        return distance * time
    } else {
        return null
    }
}
