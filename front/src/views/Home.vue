<template>
  <div class="container">
    <div class="d-flex align-center justify-space-evenly mb-6">
      <v-btn icon @click="openModal">
        <v-icon>mdi-plus</v-icon>
        <v-tooltip activator=parent location=bottom>Ajouter une tâche</v-tooltip>
      </v-btn>
      <v-btn icon @click="refreshTasks()">
        <v-icon>mdi-refresh</v-icon>
        <v-tooltip activator=parent location=bottom>Actualiser la liste</v-tooltip>
      </v-btn>
    </div>

    <TaskCard v-for="task of tasks" v-bind:key="task.id" :task="task" @openModal="openModal" @refreshTasks="refreshTasks" />

    <TaskModal v-model="modal" :task="currentTask" @refreshTasks="refreshTasks" />
  </div>
</template>

<script>
import Task from '@/classes/Task.js'
import TaskCard from '@/components/TaskCard.vue'
import TaskModal from '@/components/TaskModal.vue'

export default {
  components: { TaskCard, TaskModal },
  data() {
    return {
      tasks: [],
      currentTask: null,
      modal: false
    }
  },
  created() {
    this.refreshTasks()
  },
  methods: {
    async refreshTasks() {
      this.tasks = await Task.getAll()
    },
    openModal(task) {
      this.currentTask = task ? Object.assign(new Task(), JSON.parse(JSON.stringify(task))) : new Task()
      this.modal = true
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
