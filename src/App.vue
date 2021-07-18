<template>
  <v-app>
    <v-main>
      <Nav/>        
      <Calendar v-if="authState === 'signedin' && user"/>
    </v-main>
    <div>
      <amplify-authenticator>
        <div v-if="authState === 'signedin' && user">
          <div>Hello, {{user.username}}</div>
        </div>
        <amplify-sign-out></amplify-sign-out>
      </amplify-authenticator>
    </div>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar';
import Nav from './components/Nav';
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

export default {
  name: 'App',

  components: {
    Calendar,
    Nav
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
      unsubscribeAuth: undefined
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