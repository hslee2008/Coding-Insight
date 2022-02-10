<template>
  <div>
    <NuxtLink
      aria-label="BeforeButton"
      :to="'./' + bef"
      style="text-decoration: none; float: left"
    >
      <v-btn class="ma-2" outlined ripple>
        <v-icon left> mdi-arrow-left-circle-outline </v-icon>Back
      </v-btn>
    </NuxtLink>

    <v-row style="float: right">
      <v-switch
        v-model="switch1"
        inset
        :label="switch1 ? '끝남으로 표시' : '나중에 다시 보기'"
        style="margin: 10px"
      ></v-switch>
      <v-btn class="ma-2" outlined ripple @click="next">
        Next<v-icon right> mdi-arrow-right-circle-outline </v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import firebase, { db } from '../plugins/firebase.js';

export default {
  name: 'NaviBtn',
  props: ['bef', 'aft'],
  methods: {
    setDataToUser(user, cur) {
      firebase
        .database()
        .ref('users/' + user.uid)
        .set({ ...this.getDataFromUser(user), ...cur })
        .catch((error) => {
          console.log(error.message);
        });
    },
    getDataFromUser(user) {
      let reference = db.ref('users/' + user.uid);
      reference.on('value', function (snapshot) {
        snapshot.forEach(function (userSnapshot) {
          return userSnapshot.val();
        });
      });
    },
    next() {
      this.$router.push('./' + this.aft);

      if (this.switch1) {
        this.obj[this.$route.path.replaceAll('/', '-')] = true;
        this.setDataToUser(firebase.auth().currentUser, this.obj);
      }
    },
  },
  data() {
    return {
      switch1: true,
      obj: {},
    };
  },
};
</script>
