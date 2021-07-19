<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <span class="mx-auto font-weight-light white--text">Simply the Best Services, LLC.</span>
      <v-spacer></v-spacer>
      <div class="text-center" v-if="authState === 'signedin' && user.username === 'eands9'">
        <v-btn @click="setShowEmp" rounded color="primary" dark> Change View </v-btn>
      </div>
      <v-spacer></v-spacer>
      <amplify-sign-out v-if="authState === 'signedin'">
        </amplify-sign-out>
    </v-app-bar>
    <v-main>
              
      <!-- <Nav />         -->
      <Calendar v-if="authState === 'signedin' && user && showCal" />
      <CalendarEmp v-if="authState === 'signedin' && user && showEmp"/>
    </v-main>
    <div>
      <amplify-authenticator>
        <div v-if="authState === 'signedin' && user">
        </div>
      </amplify-authenticator>
    </div>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar';
import CalendarEmp from './components/CalendarEmp';
// import Nav from './components/Nav';
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

export default {
  name: 'App',
  components: {
    Calendar,
    // Nav,
    CalendarEmp
  },
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    })
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
      showCal: true,
      showEmp: false
    }
  },
  methods: {
    setShowEmp(){
      this.showCal = !this.showCal
      this.showEmp = !this.showEmp
    }
  },
  beforeDestroy() {
    this.unsubscribeAuth();
  }
};
</script>
<style>
  :root {
    --amplify-primary-color: rgba(19, 89, 194, 0.776);
  }
</style>