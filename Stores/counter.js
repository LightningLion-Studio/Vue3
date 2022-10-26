import { defineStore } from "pinia"

const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
    }
  },
  actions: {},
})

export { useCounterStore }
