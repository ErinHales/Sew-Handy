<template>
<transition name="fade">
  <div class="signup">
    <transition name="fade">
      <Modal v-if="modal" :name="name" :email="email" :signup="signup" :popUp="popUp" />
    </transition>
    <v-form action="" @submit.prevent="popUp" lazy-validation>
      <img src="../../assets/Horizontal-Logo.png" alt="" class="logo">
      <v-text-field
        color="black"
        type="text"
        v-model="name"
        label="Name"
        solo
        :rules="[rules.required]"
        required></v-text-field>
      <v-text-field
        color="black"
        type="text"
        v-model="email"
        label="Email"
        solo
        :rules="[rules.required, rules.email]"
        required
        onChange="(e) => checkEmail(e.target.value)"></v-text-field>
      <v-text-field
        color="black"
        type="text"
        v-model="password1"
        label="Password"
        counter="8"
        solo
        :rules="[rules.required, rules.min]"
        hint="At least 8 characters"
        required></v-text-field>
      <v-text-field
        color="black"
        type="text"
        v-model="password2"
        label="Confirm Password"
        counter="8"
        solo
        :rules="[rules.required, rules.passwordMatch]"
        hint="At least 8 characters"
        required></v-text-field>
      <v-btn color="#F86C26" type="submit" class="submit">Create Account</v-btn>
      <h5>Already have an account? <router-link to="/" class="link">Login<font-awesome-icon icon="angle-double-right" class="arrow" /></router-link></h5>
    </v-form>
  </div>
</transition>
</template>

<script>
import Modal from './Modal'
import axios from 'axios'
import { debounce } from 'lodash'

export default {
  name: 'SignUp',
  data () {
    return {
      name: '',
      email: '',
      password1: '',
      password2: '',
      modal: false,
      validEmail: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        passwordMatch: v => v === this.password1 || 'Passwords do not match',
        email: v => this.validate() || 'Invalid Email'
        // unique: v => this.checkEmail() || 'Email must be unique'
      }
    }
  },
  watch: {
    email: debounce((email) => {
      axios.get(`/api/finduser/${email}`).then(response => {
        if (response.data[0]) {
          this.validEmail = false
          alert('Email must be unique!')
        }
      })
    }, 500)
  },
  components: {
    Modal
  },
  methods: {
    signup () {
      let userData = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password1
      }
      if (
        this.name !== '' &&
        this.username !== '' &&
        this.validEmail === true &&
        this.password1.length >= 8 &&
        this.password1 === this.password2
      ) {
        axios.post('/api/newuser', userData).then(response => {
          this.$store.commit({
            type: 'setUserData',
            data: response.data[0]
          })
          this.$store.commit({
            type: 'toggleLogin',
            toggle: true
          })
          window.location.hash = '#/users'
        })
      }
    },
    popUp () {
      if (
        this.name !== '' &&
        this.username !== '' &&
        this.validEmail === true &&
        this.password1.length >= 8 &&
        this.password1 === this.password2
      ) {
        this.modal = !this.modal
      } else {
        alert('You must fill in all fields!')
      }
    },
    validate () {
      if (this.email.indexOf('@') >= 0 && this.email.indexOf('.com') === this.email.length - 4) {
        this.validEmail = true
        return true
      }
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signup {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F7F7F0;
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
  width: 90%;
  max-width: 600px;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  /* padding: 0px 10px 10px 10px; */
}
.submit {
  margin-bottom: 20px;
  width: 100%;
  max-width: 350px;
  height: 75px !important;
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
  .form {
    width: 100%;
    height: 100%;
  }
  .submit {
    font-size: 16px;
  }
}
</style>
