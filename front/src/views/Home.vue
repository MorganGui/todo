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

    <v-dialog v-model="modal" max-width="750px" persistent>
      <v-card>
        <v-form @submit.prevent.stop="submit">
          <v-card-title class="d-flex justify-space-between">
            Nouvelle tâche
            <v-btn icon="mdi-close" variant=text size=small @click="closeModal" />
          </v-card-title>
          <v-card-text>
            <v-text-field label="Titre" clearable v-model="currentTask.title" :rules="rules" />
            <v-textarea auto-grow rows=1 max-rows=5 label="Description" clearable v-model="currentTask.desc" :rules="rules" class="mt-2" />
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn @click="closeModal" variant=tonal>Annuler</v-btn>
            <v-btn type=submit variant=flat color=cyan>Sauvegarder</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Task from '@/classes/Task.js'
import TaskCard from '@/components/TaskCard.vue'

export default {
  components: { TaskCard },
  data() {
    return {
      tasks: [],
      rules: [
        value => {
          if (value && value.trim()) return true
          return 'Vous devez remplir ce champ.'
        }
      ],
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
    },
    closeModal() {
      this.modal = false
    },
    async submit() {
      if (
        this.currentTask.title && this.currentTask.title.trim() &&
        this.currentTask.desc && this.currentTask.desc.trim()
      ) {
        await this.currentTask.save()
        this.refreshTasks()
        this.closeModal()
      }
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
