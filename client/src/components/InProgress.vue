<template>

  <div class="list-group">
    <a href="#" class="list-group-item active">
      <span class="glyphicon glyphicon-tasks"></span>&nbsp;&nbsp;&nbsp;
      In Progress
    </a>

    <div class="panel panel-info" v-for="(p, index) in progress" :key="p.id">
      <div class="panel-heading">
        <h3 class="panel-title">{{ p.task }}</h3>
      </div>
      <div class="panel-body">
        <p>Assigned to: {{ p.assignedto }}</p>
        <p>Point: {{ p.point }}</p>
      </div>
      <a id="details" href="#" class="btn btn-xs">&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-edit"></span>&nbsp;&nbsp;Details&nbsp;&nbsp;&nbsp;</a>
    </div>
  </div>

</template>

<script>
  export default{
    computed: {
      progress () {
        return this.$store.getters.progressList
      }
    }
  }
</script>