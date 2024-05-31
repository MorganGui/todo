<template>
  <v-dialog :model-value="modelValue" max-width="750px" persistent>
    <v-card>
      <v-form @submit.prevent.stop="submit">
        <v-card-title class="d-flex justify-space-between">
          Nouvelle tâche
          <v-btn icon="mdi-close" variant=text size=small @click="close" />
        </v-card-title>
        <v-card-text>
          <v-text-field label="Titre" clearable v-model="task.title" :rules="rules" />
          <v-textarea auto-grow rows=1 max-rows=5 label="Description" clearable v-model="task.desc" :rules="rules" class="mt-2" />
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn @click="close" variant=tonal>Annuler</v-btn>
          <v-btn type=submit variant=flat color=cyan>Sauvegarder</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['modelValue', 'task'],
  data() {
    return {
      rules: [
        value => {
          if (value && value.trim()) return true
          return 'Vous devez remplir ce champ.'
        }
      ]
    }
  },
  methods: {
    close() {
      this.$emit('update:modelValue', false)
    },
    async submit() {
      if (
        this.task.title && this.task.title.trim() &&
        this.task.desc && this.task.desc.trim()
      ) {
        await this.task.save()
        this.$emit('refreshTasks')
        this.close()
      }
    }
  }
}
</script>
