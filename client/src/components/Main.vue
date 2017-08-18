<template>
  <div>
    <MainContent></MainContent>
  </div>
</template>

<script>
  import MainContent from '@/components/MainContent'
  import Navbar from '@/components/Navbar'
  import NewTask from '@/components/NewTask'
  export default {
    components: {
      MainContent,
      Navbar,
      NewTask
    },
    created () {
      this.$store.commit('allTasks')
    }
  }
</script>