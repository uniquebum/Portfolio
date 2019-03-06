class projectTemplate extends HTMLElement {

    constructor() {
        super();
        const root = this.attachShadow({mode: "open"});
        //root.appendChild(this.innerHTML);
        this.shadowRoot.innerHTML = `
            <style>
                .template_body {
                    position: relative;
                    background-color: ${this.getAttribute("bgColor")};
                    color: ${this.getAttribute("txtColor")};
                    width: 300px;
                    height: 350px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .text_area {
                    width: 80%;
                    margin-left: auto;
                    margin-right: auto;
                    font-family: Arial, Helvetica, sans-serif;
                }
                .img_area img{
                    display: block;
                    width: 80%;
                    padding-bottom: 0px;
                    margin-left: auto;
                    margin-right: auto;
                }
                h2, h3 {
                    margin: 0;
                    padding: 0;
                }
            </style>
            <div class="template_body">
                <div class="img_area">
                    <img src="${this.getAttribute("img")}" alt="img"/>
                </div>    
                <div class="text_area">
                    <samp><h2>${this.getAttribute("name")}</h2></samp>
                    <samp><h3>${this.getAttribute("languages")}</h3></samp>
                    <samp><h3>${this.getAttribute("year")}</h3></samp>
                    <a href="https://github.com/uniquebum/${this.getAttribute("gitname")}">Github - ${this.getAttribute("gitname")}</a>
                    <p>${this.getAttribute("text")}</p>
                </div>
            </div>
        `
    }
    
}

customElements.define("project-template",projectTemplate);