<template>
  <div class="d-flex flex-column align-center gap-3 pa-12">
    <v-card v-for="task of tasks" width="100%" max-width="500px">
      <v-card-title class="d-flex justify-space-between">
        {{ task.name }}
        <v-checkbox v-model="task.checked" />
      </v-card-title>
      <v-card-text>
        {{ task.desc }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: '0',
          name: 'task 1',
          desc: 'blabla',
          checked: false
        },
        {
          id: '1',
          name: 'task 2',
          desc: 'blabla',
          checked: false
        },
        {
          id: '2',
          name: 'task 3',
          desc: 'blabla',
          checked: false
        },
        {
          id: '3',
          name: 'task 4',
          desc: 'blabla',
          checked: false
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
