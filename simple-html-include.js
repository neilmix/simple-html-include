(() => {
  class HTMLInclude extends HTMLElement {
    connectedCallback() {
      let src = this.getAttribute("src");
      function error(e) {
        console.error(`simple-html-include of ${src} failed: ${e}`);
      }
      if (src) {
        fetch(src)
          .then((response) => {
            if (response.status >= 400) {
              error(response.statusText);
              return "";
            } else {
              return response.text();
            }
          })
          .catch((e) => {
            error(e);
          })
          .then((html) => {
            this.outerHTML = html;
          });
      }
    }
  }
  customElements.define("html-include", HTMLInclude);
})();
