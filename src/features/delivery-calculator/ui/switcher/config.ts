import {Component,markRaw} from "vue";

import {TheCalculateTheCost} from "@features/delivery-calculator/ui/calculate-the-cost/index";
import {TheCallACourier} from "@features/delivery-calculator/ui/call-a-courier/index";
import {TheTrackThePackage} from "@features/delivery-calculator/ui/track-the-package/index";

export type TabT = {
    title: string
    component: Component
}

export const tabs: TabT[] = [
    {
        title: 'Рассчитать стоимость',
        component: markRaw(TheCalculateTheCost)
    },
    {
        title: 'Вызвать курьера',
        component: markRaw(TheCallACourier)
    },
    {
        title: 'Отследить посылку',
        component: markRaw(TheTrackThePackage)
    }
]
