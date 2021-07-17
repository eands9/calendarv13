<template>
    <v-app-bar app color="primary" dark>
    <span class="mx-auto font-weight-light white--text">Simply the Best Services, LLC.</span>
      <v-spacer></v-spacer>
        <amplify-sign-out v-if="authState === 'signedin'">
        <v-btn color="black" class="white--text">
            <v-icon color="white">
            mdi-logout
            </v-icon>
            Logout
        </v-btn>
        </amplify-sign-out>

    </v-app-bar>

</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

export default {
  name: 'AuthStateApp',
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
}
</script>