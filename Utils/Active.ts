import copyer from "clipboard-copy"

export function copyToClip(func: Function) {
  copyer("LightningLion")
  func()
  /*copy("LightningLion",{
    onCopy() {
      func()
    }
  })*/
}

export function openBili(address: string) {
  location.href = address
}
