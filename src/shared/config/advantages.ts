import CarSpeedIcon from '@media/icons/car-speed.svg'
import GuaranteeIcon from '@media/icons/guarantee.svg'
import Clock24Icon from '@media/icons/24-clock.svg'
import StockIcon from '@media/icons/stock.svg'

export const title:string = 'Наши преимущества'
export type cardType = {
    title: string
    icon: any
}
export const list:cardType[] = [
    {
        title: 'Быстрая доставка',
        icon: CarSpeedIcon
    },
    {
        title: 'Доставим в любую точку города и области',
        icon: GuaranteeIcon
    },
    {
        title: 'Ежедневные отправки',
        icon: Clock24Icon
    },
    {
        title: 'Собственный склад',
        icon: StockIcon
    }
]
