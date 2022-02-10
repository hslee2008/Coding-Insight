<template>
  <div class="login">
    <h1>Login</h1>
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
      <v-btn @click="pressed">Login</v-btn>
      <div class="error" v-if="error">{{ error.message }}</div>
    </v-form>

    <v-row justify="center" style="margin: 20px">
      <Nuxt-Link to="/create">Create an account</Nuxt-Link>
    </v-row>

    <v-row style="gap: 10px">
      <v-btn @click="google"><v-icon left>mdi-google</v-icon>Google</v-btn>
      <v-btn @click="github"><v-icon left>mdi-github</v-icon>GitHub</v-btn>
    </v-row>
  </div>
</template>

<script>
import firebase, { auth } from '~/plugins/firebase.js';
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
      if (this.valid)
        await auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push('/');
          })
          .catch((error) => {
            this.error = error;
          });
    },
    google() {
      auth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(() => this.$router.push('/'));
    },
    github() {
      auth
        .signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then(() => this.$router.push('/'));
    },
  },
};
</script>
