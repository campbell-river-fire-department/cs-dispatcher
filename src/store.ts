// See:
// https://stephanlangeveld.medium.com/simple-local-storage-implementation-using-vue-3-vueuse-and-pinia-with-zero-extra-lines-of-code-cb9ed2cce42a

import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    todos: useStorage('todos', [])
  }),
  getters: {},
  actions: {}
})
