<template>
  <div class="popup-list-wrapper"
       v-click-outside="() => isShowList = false">
    <TheInput :icon="SearchIcon"
              :placeholder="placeholder"
              @click="isShowList = true"
              v-model:value="searchModel" />
    <ul v-if="isShowList">
      <li v-for="item in filteredList"
           @click="setCurrentItem(item)"
           :key="item[labelKey]">
        {{ item[labelKey] }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {TheInput} from "@ui/input/index";
import SearchIcon from '@media/icons/search.svg';
import {computed, defineProps, nextTick, ref, watch} from "vue";

interface IModel {
  [key: string]: any
}

const searchModel = ref<string>('')
const filteredList = computed<IModel[]>(
    () => props.list.filter((item: IModel) => {
      if (!searchModel.value) return true;
      if (
          item[props.labelKey].toLowerCase().indexOf(
              searchModel.value.toLowerCase()
          ) > -1
      ) {
        return true
      }
      return false
    })
)
const props = defineProps<{
  value: any
  list: any[]
  trackBy: string
  labelKey: string
  placeholder?: string
}>()
const emit = defineEmits(['change', 'update:value'])
const currentModelData = computed<IModel | null>({
  get: () => props.value,
  set: (newValue) => emit('update:value', newValue)
})
const isShowList = ref<boolean>(false)

function setCurrentItem(model: IModel | null):void {
  currentModelData.value = model || null
  searchModel.value = model?.[props.labelKey] || ''
  isShowList.value = false
}

watch(
    () => searchModel.value,
    (newValue) => {
      if (!newValue) setCurrentItem(null)
    }
)

watch(
    () => currentModelData.value,
    (newValue) => {
      searchModel.value = newValue?.[props.labelKey] || ''
    },
    {
      deep: true
    }
)
</script>

<script lang="ts">
export default {
  name: "ThePopupList"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
