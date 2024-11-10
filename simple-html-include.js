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
            const t = document.createElement("template");
            t.innerHTML = html;
            // security restrictions require us to manually re-create each script node
            let scripts = t.content.querySelectorAll("script");
            scripts.forEach((script) => {
              const newScript = document.createElement("script");
              newScript.text = script.text;
              script.replaceWith(newScript);
            });
            this.replaceWith(t.content);
          });
      }
    }
  }
  customElements.define("html-include", HTMLInclude);
})();
