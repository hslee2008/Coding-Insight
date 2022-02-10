<template>
  <div>
    <h1>Account</h1>
    <p>{{ email }}</p>
  </div>
</template>

<script>
import firebase from '../plugins/firebase.js';
import 'firebase/compat/auth';

export default {
  data() {
    return {
      email: '',
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.email = firebase.auth().currentUser.multiFactor.user.email;
      }
    });
  },
};
</script>
