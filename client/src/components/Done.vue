<template>

  <div class="list-group">
    <a href="#" class="list-group-item active">
      <span class="glyphicon glyphicon-tasks"></span>&nbsp;&nbsp;&nbsp;
      Done
    </a>

    <div class="panel panel-info" v-for="(d, index) in done" :key="d.id">
      <div class="panel-heading">
        <h3 class="panel-title">{{ d.task }}</h3>
      </div>
      <div class="panel-body">
        <p>Assigned to: {{ d.assignedto }}</p>
        <p>Point: {{ d.point }}</p>
      </div>
      <a id="details" href="#" class="btn btn-xs">&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-edit"></span>&nbsp;&nbsp;Details&nbsp;&nbsp;&nbsp;</a>
    </div>
  </div>

</template>

<script>
  export default{
    computed: {
      done () {
        return this.$store.getters.doneList
      }
    }
  }
</script>