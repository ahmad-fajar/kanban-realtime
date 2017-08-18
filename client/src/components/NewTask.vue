<template>
  
  <!-- modal new task -->
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <form class="form-horizontal">
          <fieldset>

            <legend>Add New Task</legend>

            <div class="form-group">
              <label class="col-lg-2 control-label">Task name</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" placeholder="Task name" v-model="task">
              </div>
            </div>

            <div class="form-group">
              <label  class="col-lg-2 control-label">Assigned to</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" id="inputPassword" placeholder="Assigned to" v-model="assignedto">
              </div>
            </div>

            <div class="form-group">
              <label class="col-lg-2 control-label">Point</label>
              <div class="col-lg-10">
                <select class="form-control" id="select" v-model="point">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="textArea" class="col-lg-2 control-label">Details</label>
              <div class="col-lg-10">
                <textarea class="form-control" rows="3" id="textArea" v-model="desc"></textarea>
              </div>
            </div>

            <div class="form-group">
              <div class="modal-footer col-lg-10 col-lg-offset-2">
                <button type="button" class="btn btn-default">
                  <router-link to='/' style="color:white;text-decoration:none;">
                    Cancel
                  </router-link>
                </button>
                <button type="submit" class="btn btn-primary" @click="addTask">
                  Submit
                </button>
              </div>
            </div>

          </fieldset>
        </form>
      </div>
    </div>
  </div>
  <!-- modal new task -->

</template>

<script>
  export default {
    data () {
      return {
        assignedto: null,
        desc: null,
        point: null,
        task: null
      }
    },
    methods: {
      addTask (event) {
        event.preventDefault();
        console.log('clicked')
        if (this.task && this.assignedto && !isNaN(this.point)) {
          let payload = {
            assignedto : this.assignedto,
            desc : this.assignedto,
            point : this.point,
            task : this.task
          }
        this.$store.dispatch('newTask', payload),
        this.assignedto = '',
        this.desc = '',
        this.point = '',
        this.task = ''
        }
      }
    }
  }
</script>