import { defineStore } from "pinia"

const useCounterStore:Function = defineStore("counter", {
  state: ():Object => {
    return {
      count: 0,
    }
  },
  actions: {

	},
})

export { useCounterStore }
