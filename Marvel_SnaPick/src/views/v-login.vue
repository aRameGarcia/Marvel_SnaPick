<template>
  <l-centered>
    <template #header>
        <div class="header-user"><span>Usuario logeado</span></div>
        <div class="header-image">
          <img src="../assets/cards/logo.png" alt="Marvel SnaPick">
        </div>
        <div class="header-button">
          <button>PERFIL</button>
        </div>
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
import CTextField from '../components/c-text-field.vue'
import CButton from '../components/c-button.vue'
import { userStore } from '../stores/user'
import { mapActions } from 'pinia'

export default {
  name: 'v-login',
  components: {
    LCentered,
    CTextField,
    CButton,
  },
  data() {
    return {
      username: '',
      password: '',
      errorVisibility: false,
      errorMessage: 'Credenciales Incorrectas!!!',
      type: 'password'
    };
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
        this.sendError();
      }
    },
    sendError() {
      this.errorVisibility = true;
      this.success = false;
      setTimeout(() => {
        this.errorVisibility = false;
      }, 5000)
    },
    /* showPassword(){
      this.type='password';
      if(this.type==='password'){
        this.type='text';
      }
    } */
  }

}
</script>

<style>
.header-user{
  display: flex;
  justify-content: start;
  flex: 1;
  height: 100%;
  border: 1px solid blue;
}
.header-image {
  display: flex;
  justify-content: center;
  flex: 1;
  height: 100%;
  border: 1px solid red;
}
.header-image img{
  height: 120px;
}
.header-button {
  display: flex;
  justify-content: end;
  align-items: flex-start;
  flex: 1;
  height: 100%;
  border: 1px solid green;

}
</style>
