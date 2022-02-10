<template>
  <div class="login">
    <h1>Create Account</h1>
    <v-form v-model="valid">
      <v-text-field
        label="Email"
        placeholder="Email"
        filled
        required
        v-model="email"
        :rules="emailRules"
      ></v-text-field>
      <v-text-field
        label="Password"
        placeholder="Password"
        filled
        required
        v-model="password"
        :rules="passwordRules"
      ></v-text-field>
      <v-btn @click="pressed">Create Account</v-btn>
    </v-form>
    <div class="error" v-if="error">{{ error.message }}</div>
    <Nuxt-Link to="/login">Login</Nuxt-Link>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase.js';
import 'firebase/compat/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      valid: false,
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length > 6 || 'Password must be more than 6 characters',
      ],
    };
  },
  methods: {
    async pressed() {
      if (this.valid) {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .catch((error) => {
            this.error = error;
          });
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push('/');
          })
          .catch((error) => {
            this.error = error;
          });
      }
    },
  },
};
</script>
