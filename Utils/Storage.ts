const storage = {
  json(key:any, value:any) {
    localStorage.setItem(key, JSON.stringify(value))
  },
	parse(key:any) {
		let data = localStorage.getItem(key)
		if (typeof data === "string") {
			return JSON.parse(data)
		}
	}
}

export default storage
