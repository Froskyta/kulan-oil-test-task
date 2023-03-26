const name = 'click-outside'
const config = {
    mounted(el: any, binding: any) {
        el.clickOutsideEvent = function(event: any) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value()
            }
        }
        document.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted(el: any) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
}

export default {
    name,
    config
}
