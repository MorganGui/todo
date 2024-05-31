<template>
  <v-card :color="task.checked ? 'green-lighten-3' : ''">
    <v-card-title class="d-flex justify-space-between">
      {{ task.title }}
      <div class="d-flex align-center">
        <v-btn icon variant=text color=red size=small @click="deleteTask(task)">
          <v-icon size=x-large>mdi-delete-outline</v-icon>
          <v-tooltip activator=parent location=bottom>Supprimer</v-tooltip>
        </v-btn>
        <v-btn icon variant=text color=cyan size=small @click="$emit('openModal', task)">
          <v-icon size=x-large>mdi-pencil-outline</v-icon>
          <v-tooltip activator=parent location=bottom>Modifier</v-tooltip>
        </v-btn>
        <v-checkbox v-model="task.checked" hide-details @change="task.save()" />
      </div>
    </v-card-title>
    <v-card-text>
      {{ task.desc }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    async deleteTask(task) {
      await task.delete()
      this.$emit('refreshTasks')
    }
  }
}
</script>
