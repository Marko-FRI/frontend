<template>
  <div />
</template>

<script>
import { useUserStore } from 'src/stores/UserStore'

export default {
  setup () {
    const userStore = useUserStore()

    return { userStore }
  },
  mounted () {
    if (this.userStore.token !== null) { this.userStore.token = null; this.userStore.data = null }
    this.$router.push('/')
  }
}
</script>
