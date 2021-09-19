const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()

const app = createApp({
  template: '#app-template',
  data () {
    return {
      dialog: false,
    }
  },
}).use(vuetify).mount('#app')