import CarImage from './media/car.png'

export type SlideT = {
    title?: string
    description?: string
    image?: Object
    submit?: {
        title: string
        method(): void
    }
}

export const slides:SlideT[] = [
    {
        title: 'Внутригородская доставка',
        description: 'Курьерская служба Exline предлагает Вашему вниманию услуги по внутригородской доставке отправлений во всех областных центрах Республики Казахстан',
        image: CarImage,
        submit: {
            title: 'Подробнее',
            method() {
                alert('Так ты меня кликнул')
            }
        }
    },
    {
        title: 'Внутригородская доставка',
        description: 'Курьерская служба Exline предлагает Вашему вниманию услуги по внутригородской доставке отправлений во всех областных центрах Республики Казахстан',
        image: CarImage,
        submit: {
            title: 'Подробнее',
            method() {
                alert('Так ты меня кликнул')
            }
        }
    }
]
