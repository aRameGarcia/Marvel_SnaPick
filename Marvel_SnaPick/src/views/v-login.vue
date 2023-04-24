<template>
  <main>
    <c-text-field id="username_input" placeholder="Usuario"/>
    <c-text-field id="password_input" placeholder="Contraseña" :type="type"/>
    <div class="v-login">
      <span class="v-login__error" v-if="errorVisibility">{{ errorMessage }}</span>
      <span class="v-login__success" v-else-if="success">{{ successMessage }}</span>
    </div>
    <c-button @click="checkLogin"></c-button>
  </main>
</template>

<script>
import CTextField from '../components/c-text-field.vue'
import CButton from '../components/c-button.vue'

export default{
  name: 'v-login',
  components:{
    CTextField,
    CButton,
  },
  data(){
    return{
      username:'',
      password:'',
      success: false,
      errorVisibility: false,
      errorMessage: 'Credenciales Incorrectas!!!',
      successMessage: 'Las credenciales son correctas!!!',
      type:'password'
    };
  },
  methods:{
    checkLogin(){
      if(this.username==='Álvaro' && this.password==='1234'){
        this.success=true;
        this.errorVisible=false;
      }else{
        this.sendError();
      }
    },
    sendError(){
      this.errorVisible=true;
      this.success=false;
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
</style>
