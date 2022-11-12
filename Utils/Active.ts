export function copyToClip(func:Function) {
  navigator.clipboard
    .writeText("LightningLion")
    .then(func())
    .catch(err => {
      alert("错误，请自行复制口令，否则无法下载腕上B站！" + err)
    })
}

export function openBili(address:string) {
  location.href = address
}
