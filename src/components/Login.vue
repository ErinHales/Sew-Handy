<template>
<transition name="fade">
  <div class="login">
    <!-- <NavBar title="LOG IN" /> -->
    <v-form action="" @submit.prevent="login" class="form">
      <img src="../../assets/Horizontal-Logo.png" alt="" class="logo">
      <v-text-field
        color="black"
        type="text"
        v-model="username"
        label="Email"
        class="input"
        solo
        :rules="[() => !!username || 'This field is required']"
        required></v-text-field>
      <v-text-field
        color="black"
        type="text"
        v-model="password"
        label="Password"
        class="input"
        solo
        :rules="[() => !!password || 'This field is required']"
        required></v-text-field>
      <v-btn type="submit" color="#F86C26" class="submit">LOG IN</v-btn>
      <h5>Don't have an account? <router-link to="/signup" class="link">Sign Up<font-awesome-icon icon="angle-double-right" class="arrow" /></router-link></h5>
    </v-form>
  </div>
</transition>
</template>

<script>
import NavBar from './NavBar'
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    NavBar
  },
  methods: {
    login () {
      axios.get(`/api/user/${this.username}/${this.password}`).then(response => {
        if (response.data === 'Username does not exist') {
          alert('Email does not exist. Try again or go to sign up page')
        } else if (response.data === 'Password did not match the email') {
          alert('Incorrect password. Try again or go to sign up page.')
        } else {
          this.$store.commit({
            type: 'setUserData',
            data: response.data
          })
          this.$store.commit({
            type: 'toggleLogin',
            toggle: true
          })
          window.location.hash = '#/users'
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  height: 100vh;
}
.logo {
  width: 100%;
  max-width: 450px;
  margin-bottom: 20px;
}
.v-form {
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 600px;
  height: 100%;
  max-height: 650px;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  padding: 0px 10px 10px 10px;
}
.submit {
  width: 100%;
  max-width: 350px;
  height: 75px;
  font-size: 20px;
  color: white;
}
.link {
  color: white;
  background-color: #2daca7;
  padding: 5px;
  text-decoration: none;
  border-radius: 3px;
}
.arrow {
  margin: 0px 5px;
}
.v-input {
  width: 100%;
  max-width: 300px;
  flex: 0 1 auto;
}
@media (max-width: 450px) {
  .v-form {
    width: 100%;
    height: 100%;
  }
  .submit {
    font-size: 16px;
  }
}
</style>
