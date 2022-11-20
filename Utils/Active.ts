import * as copy from 'copy-to-clipboard';

export function copyToClip(func: Function) {
  copy("LightningLion",{
    onCopy() {
      func()
    }
  })
}

export function openBili(address: string) {
  location.href = address
}
