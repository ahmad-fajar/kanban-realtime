<template>
    <!-- blok konten -->
    <div class="container-fluid">

      <!-- todo -->
      <div class="col-xs-12 col-md-3">
        <Todo></Todo>
      </div>

      <!-- progress -->
      <div class="col-xs-12 col-md-3">
        <InProgress></InProgress>
      </div>

      <!-- testing -->
      <div class="col-xs-12 col-md-3">
        <Testing></Testing>
      </div>

      <!-- done -->
      <div class="col-xs-12 col-md-3">
        <Done></Done>
      </div>

    </div>

    
</template>

<script>
  import Done from '@/components/Done'
  import InProgress from '@/components/InProgress'
  import Testing from '@/components/Testing'
  import Todo from '@/components/Todo' 
  export default {
    components: {
      Done,
      InProgress,
      Testing,
      Todo
    }
  }
</script>

<style>
  /* * {
    border: 1px solid black;
  } */
  #details {
    display: flex;
    justify-content: center;
  }
  #details:hover {
    color: blue;
  }
</style>