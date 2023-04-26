<template>
  <l-centered>
    <template #header>
      <c-header>
        <template #user>
          <c-user></c-user>
        </template>
        <template #buttonProfile>
          <c-button-profile></c-button-profile>
        </template>
      </c-header>
    </template>
    <template #form>
      <c-text-field id="username_input" placeholder="Usuario" v-model="username" />
      <c-text-field id="password_input" placeholder="Contraseña" :type="type" v-model="password" />
      <div class="v-login">
        <span class="v-login__error" v-if="errorVisibility">{{ errorMessage }}</span>
      </div>
    </template>
    <template #button>
      <c-button id="confirm_button" @click="doLogin" innerText="CONFIRMAR"></c-button>
      <c-button id="register_button" innerText="REGISTRARSE"></c-button>
    </template>
  </l-centered>
</template>

<script>
import LCentered from '../layouts/l-centered.vue'
import CHeader from '../components/c-header.vue'
import CButtonProfile from '../components/c-button-profile.vue'
import CUser from '../components/c-user.vue'
import CTextField from '../components/c-text-field.vue'
import CButton from '../components/c-button.vue'
import { userStore } from '../stores/user'

export default {
  name: 'v-login',
  components: {
    LCentered,
    CTextField,
    CButton,
    CButtonProfile,
    CHeader,
    CUser
  },
  data() {
    return {
      username: '',
      password: '',
      errorVisibility: false,
      errorMessage: 'Credenciales Incorrectas!!!',
      type: 'password'
    }
  },
  methods: {
    /* checkLogin() {
      if (this.username === 'Álvaro' && this.password === '1234') {
        this.success = true;
        this.errorVisibility = false;
      } else {
        this.sendError();
      }
    }, */
    async doLogin() {
      const { username, password } = this

      const doLogin = await userStore().login({ username, password })

      if (doLogin) {
        this.$router.push({ name: 'collection' })
      } else {
        this.sendError()
      }
    },
    sendError() {
      this.errorVisibility = true
      this.success = false
      setTimeout(() => {
        this.errorVisibility = false
      }, 5000)
    }
    /* showPassword(){
      this.type='password';
      if(this.type==='password'){
        this.type='text';
      }
    } */
  }
}
</script>
