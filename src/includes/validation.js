import { Form as VeeForm, Field as VeeField } from 'vee-validate'

export default {
  // we have access to vue app, and options (additional data passed to the vue instance)
  install(app, options) {
    console.log(app, 'what is app')
    console.log(options, 'what is options')
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
  }
}
