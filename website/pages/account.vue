<template>
  <div class="account">
    <h1 v-if="error">{{ error.message }}</h1>
    <h1>Edit Account</h1>
    <v-divider></v-divider>
    <br />
    <v-form v-model="valid">
      <v-text-field
        label="Name"
        placeholder="Name"
        filled
        required
        dense
        solo
        validate-on-blur
        v-model="name"
        :rules="nameRules"
        value="name"
        prepend-inner-icon="mdi-account"
      ></v-text-field>
      <v-text-field
        label="Email"
        placeholder="Email"
        filled
        required
        dense
        disabled
        solo
        validate-on-blur
        v-model="emaili"
        :rules="emailRules"
        value="email"
        prepend-inner-icon="mdi-email"
      ></v-text-field>
      <v-card tile justify-center>
        <v-text-field
          label="URL"
          placeholder="URL"
          filled
          required
          shaped
          flat
          dense
          solo
          validate-on-blur
          v-model="photo"
          :rules="photoRules"
          value="photo"
          prepend-inner-icon="mdi-camera"
        ></v-text-field>
        <v-card-text style="display: flex; justify-content: center">
          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            :src="photo"
            max-width="100"
          />
        </v-card-text>
      </v-card>

      <br />

      <v-btn @click="update" color="primary"
        ><v-icon left>mdi-account</v-icon>Update</v-btn
      >
      <v-btn @click="email" v-if="!verified"
        ><v-icon left>mdi-email</v-icon>Verify Email</v-btn
      >
      <v-dialog width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="error" v-bind="attrs" v-on="on"
            ><v-icon left>mdi-alert-rhombus</v-icon>Delete Account</v-btn
          >
        </template>

        <v-card>
          <v-card-title> You are about to delete your account! </v-card-title>

          <v-card-text> This is permanent and cannot be undone. </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="delete_danger">
              Whatever
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-form>
  </div>
</template>

<style scoped>
.account {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 88px);
}
</style>

<script>
import { auth } from '~/plugins/firebase.js';
import 'firebase/compat/auth';
import {
  getAuth,
  updateProfile,
  deleteUser,
  sendEmailVerification,
} from 'firebase/auth';

export default {
  data() {
    return {
      dialog: false,
      name: '',
      photo: '',
      error: '',
      emaili: '',
      verified: false,
      valid: true,
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 30 || 'Name must be less than 30 characters',
      ],
      photoRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 500 || 'Name must be less than 500 characters',
      ],
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /^\S+@\S+\.\S+$/.test(v) || 'Email must be valid',
      ],
      icons: ['mdi-pencil'],
      transparent: 'rgba(255, 255, 255, 0)',
    };
  },
  head: () => ({
    title: 'Account',
  }),
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.name = user.displayName;
        this.photo = user.photoURL;
        this.emaili = user.email;
        this.verified = user.emailVerified;
      }
    });
  },
  methods: {
    async update() {
      const auth = getAuth();
      await updateProfile(auth.currentUser, {
        displayName: this.name,
        photoURL: this.photo,
      })
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          console.error('Error updating profile: ', error);
          this.error = error.message;
        });
      this.$forceUpdate();
    },
    email() {
      sendEmailVerification(auth.currentUser);
      auth.currentUser.reload();

      auth.onAuthStateChanged((user) => {
        if (user) {
          this.verified = user.emailVerified;
        }
      });
    },
    delete_danger() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          deleteUser(user);
          this.$router.push('/');
        }
      });
    },
  },
};
</script>

<style scoped>
.v-card {
  transition: opacity 1s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 1;
}

.show-btns {
  color: rgb(0, 0, 0) !important;
}
</style>
