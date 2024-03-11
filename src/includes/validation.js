import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from 'vee-validate'
// defineRule allows us to register a rule globally
import { required } from '@vee-validate/rules'

export default {
  // we have access to vue app, and options (additional data passed to the vue instance)
  install(app, options) {
    console.log(app, 'what is app')
    console.log(options, 'what is options')
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
  }
}
