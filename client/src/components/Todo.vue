<template>

  <div class="list-group">
    <a href="#" class="list-group-item active">
      <span class="glyphicon glyphicon-tasks"></span>&nbsp;&nbsp;&nbsp;
      Todo
    </a>

    <div class="panel panel-info" v-for="(todo, index) in todos" :key="todo.id">
      <div class="panel-heading">
        <h3 class="panel-title">{{ todo.task }}</h3>
      </div>
      <div class="panel-body">
        <p>Assigned to: {{ todo.assignedto }}</p>
        <p>Point: {{ todo.point }}</p>
      </div>
      <a id="details" href="#" class="btn btn-xs">&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-edit"></span>&nbsp;&nbsp;Details&nbsp;&nbsp;&nbsp;</a>
    </div>
  </div>

</template>

<script>
  export default{
    computed: {
      todos () {
        return this.$store.getters.todoList
      }
    }
  }
</script>