import {ref} from "vue";
import {TabT} from "@features/delivery-calculator/ui/switcher/config";
import {tabs} from "@features/delivery-calculator/ui/switcher/config";

export const currentTab = ref<TabT | null>(null)

export function setCurrentTab(tab:TabT):void {
    currentTab.value = tab
}

export function setDefaultTab():void {
    currentTab.value = tabs[0]
}
