import { createApp, defineAsyncComponent } from 'vue';

import App from './App.vue';
import { router } from './router';
import { store } from './store';
import {
  BaseBadge,
  BaseButton,
  BaseCard,
  // BaseDialog,
  BaseSpinner,
} from './components';

const BaseDialog = defineAsyncComponent(() => import('./components'));

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-dialog', BaseDialog);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
