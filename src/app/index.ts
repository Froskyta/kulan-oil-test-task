import { createApp } from 'vue';
import {router} from "./providers";
import clickOutside from '@shared/directives/click-outside'
import App from './index.vue';

export const app = createApp(App)

app.directive(
    clickOutside.name,
    clickOutside.config
)

app.use(router)
