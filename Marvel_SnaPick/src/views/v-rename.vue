<template>
    <l-centered>
        <template #header>
            <c-header>
            </c-header>
        </template>
        <template #title>
            <h1>CAMBIAR NOMBRE</h1>
        </template>
        <template #form>
            <c-text-field placeholder="Usuario" v-model="oldUsername" />
            <c-text-field placeholder="Contraseña" v-model="newUsername" />
            <div class="v-rename">
                <span class="v-rename--error" v-if="errorVisibility">{{ errorMessage }}</span>
            </div>
        </template>
        <template #button>
            <c-button @click="cancelRename" innerText="CONFIRMAR"></c-button>
            <c-button @click="cancelRename" innerText="CANCELAR"></c-button>
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
    name: 'v-register',
    components: {
        LCentered,
        CTextField,
        CButton,
        CHeader,
    },
    data() {
        return {
            oldUsername: '',
            newUsername: '',
            errorVisibility: false,
            errorMessage: 'Credenciales Incorrectas!!!',
        }
    },
    methods: {
        /* async doRename() {
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

        cancelRename() {
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