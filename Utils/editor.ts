export const tools: Array<any> = [
  "revoke",
  "next",
  "-",
  "bold",
  "underline",
  "italic",
  "image",
  "-",
  "strikeThrough",
  "title",
  "sub",
  "sup",
  "quote",
  "unorderedList",
  "orderedList",
  "-",
  "codeRow",
  "code",
  "link",
  "table",
  "=",
  "pageFullscreen",
  "fullscreen",
  "preview",
  "htmlPreview",
  "catalog",
]

export function fixEditor() {
  // 移动端无法点击图片按钮的问题
  document
    .getElementsByClassName("md-editor-toolbar-item")[5]
    .addEventListener("click", () => {
      document
        .querySelector(".md-dropdown")!
        .classList.remove("md-dropdown-hidden")
    })

  // 移动端无法点击表格按钮
  document
    .getElementsByClassName("md-editor-toolbar-item")[16]
    .addEventListener("click", () => {
      document
        .querySelector(".md-dropdown")!
        .classList.remove("md-dropdown-hidden")
    })
}
