<template>
  <div>

    <!-- navbar -->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <<router-link to='/' >
            <a class="navbar-brand" href="#">Kanban</a>
          </router-link>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
          <form class="navbar-form navbar-left">
          <router-link to='/new-task'>
            <button type="button" class="btn btn-default">
              <span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;&nbsp;
              Add New Task
            </button>
          </router-link>
          </form>
          </ul>
        </div>
      </div>
    </nav>
    <!-- navbar -->

  </div>
</template>

<script>
  export default {
  }
</script>