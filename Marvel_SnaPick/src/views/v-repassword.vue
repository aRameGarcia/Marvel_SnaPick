<template>
    <l-centered>
        <template #header>
            <c-header>
            </c-header>
        </template>
        <template #title>
            <h1>CAMBIAR CONTRASEÑA</h1>
        </template>
        <template #form>
            <c-text-field placeholder="Antiguo Nombre" v-model="oldPassword" />
            <c-text-field placeholder="Nuevo Nombre" v-model="newPassword" />
            <div class="v-repassword">
                <span class="v-repassword--error" v-if="errorVisibility">{{ errorMessage }}</span>
            </div>
        </template>
        <template #button>
            <c-button @click="cancelRepassword" innerText="CONFIRMAR"></c-button>
            <c-button @click="cancelRepassword" innerText="CANCELAR"></c-button>
        </template>
    </l-centered>
</template>
  
<script>
import LCentered from '../layouts/l-centered.vue'
import CHeader from '../components/c-header.vue'
import CTextField from '../components/c-text-field.vue'
import CButton from '../components/c-button.vue'
import { userStore } from '../stores/user'

export default {
    name: 'v-repassword',
    components: {
        LCentered,
        CTextField,
        CButton,
        CHeader,
    },
    data() {
        return {
            oldPassword: '',
            newPassword: '',
            errorVisibility: false,
            errorMessage: 'La antigua contraseña no coincide!!!',
        }
    },
    methods: {
        /* async doRepassword() {
          try {
            const { username, password } = this
    
            const doRegister = await userStore().register({ username, password })
    
            if (doRegister) {
              this.$router.push({ name: 'login' })
            } else {
              this.sendError()
            }
          }
          catch (error) {
            console.log(error)
          }
        }, */

        cancelRepassword() {
            this.$router.push({ name: 'profile' })
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