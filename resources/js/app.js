import {createApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/inertia-vue3'
import '../css/app.css'

createInertiaApp({
  resolve: (name) => require(`./pages/${name}`),
  setup ({el, App, props, plugin}) {
    createApp({render: () => h(App, props)})
      .use(plugin)
      .mount(el)
  },
})
