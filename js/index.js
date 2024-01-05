window.onload = () => {
  // const colorMode = document.getElementById("color-mode");
  // colorMode.onclick = () => {
  //   if (!document.body.classList.contains("dark")) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // };

  /**
   * Adds copy and language in code blocks
   */
  document.querySelectorAll(".org-src-container").forEach((el) => {
    const toolbar = document.createElement("div");
    toolbar.classList.add("src-toolbar");
    const preRef = el.firstChild;
    const preEl = el.firstElementChild;

    const srcLanguage = document.createElement("span");
    srcLanguage.classList.add("src-language");
    srcLanguage.innerText = preEl.classList[1].split("-")[1];

    const copyBtn = document.createElement("button");
    copyBtn.classList.add("copy-btn");
    copyBtn.innerText = "copy";
    copyBtn.onclick = (e) => {
      navigator.clipboard.writeText(preEl.innerText);
      copyBtn.innerText = "copied";
      setTimeout(() => {
        copyBtn.innerText = "copy";
      }, 500);
    };

    toolbar.appendChild(srcLanguage);
    toolbar.appendChild(copyBtn);

    el.insertBefore(toolbar, preRef);
  });
};
