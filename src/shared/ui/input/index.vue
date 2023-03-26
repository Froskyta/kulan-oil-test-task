<template>
  <div class="input-wrapper">
    <component v-if="icon"
               :is="icon"
               class="icon"/>
    <input :type="type || 'text'"
           v-model="model"
           :class="[
               icon && 'has-icon'
           ]"
           :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts" setup>
import {computed, defineProps, defineEmits} from "vue";

const props = defineProps<{
  icon?: any
  placeholder?: string
  type?: 'text' | 'number' | 'password'
  value: string | number
}>()

const emit = defineEmits(['update:value'])

const model = computed<string | number>({
  get: () => props.value,
  set: (newValue) => emit('update:value', newValue)
})
</script>

<script lang="ts">
export default {
  name: "TheInput"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
