<template>

  <div class="list-group">
    <a href="#" class="list-group-item active">
      <span class="glyphicon glyphicon-tasks"></span>&nbsp;&nbsp;&nbsp;
      Testing
    </a>

    <div class="panel panel-info" v-for="(test, index) in testing" :key="test.id">
      <div class="panel-heading">
        <h3 class="panel-title">{{ test.task }}</h3>
      </div>
      <div class="panel-body">
        <p>Assigned to: {{ test.assignedto }}</p>
        <p>Point: {{ test.point }}</p>
      </div>
      <a id="details" href="#" class="btn btn-xs">&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-edit"></span>&nbsp;&nbsp;Details&nbsp;&nbsp;&nbsp;</a>
    </div>
  </div>

</template>

<script>
  export default{
    computed: {
      testing () {
        return this.$store.getters.testingList
      }
    }
  }
</script>