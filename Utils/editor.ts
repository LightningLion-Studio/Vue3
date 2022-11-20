export const tools:Array = [
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
];

export function fixEditor():void {
  // 修复移动端无法点击上传按钮的问题
  document
    .querySelector(".md-toolbar-item[title='图片']")
    .addEventListener("click", () => {
      document
        .querySelector(".md-dropdown")
        .classList.remove("md-dropdown-hidden");
    });
  document
    .querySelector(".md-toolbar-item[title='标题']")
    .addEventListener("click", () => {
      document
        .querySelector(".md-dropdown")[1]
        .classList.remove("md-dropdown-hidden");
    });
  document
    .querySelector(".md-toolbar-item[title='表格']")
    .addEventListener("click", () => {
      document
        .querySelector(".md-dropdown")[2]
        .classList.remove("md-dropdown-hidden");
    });
}