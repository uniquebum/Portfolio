class projectTemplate extends HTMLElement {

    constructor() {
        super();
        const root = this.attachShadow({mode: "open"});
        //root.appendChild(this.innerHTML);
        this.shadowRoot.innerHTML = `
            <style>
                .template_body {
                    background-color: ${this.getAttribute("bgColor")};
                    color: ${this.getAttribute("txtColor")};
                }
                .img_area {
                    display: inline-block;
                }
            </style>
            <div class="template_body">
                <div class="text_area">
                    <h2>Project name</h2>
                    <p>text text text text text 
                    text text text text text 
                    text text text text text 
                    text text text text 
                    text text text text text text<br/>
                    text text text text text 
                    text text text text text text 
                    text text text text text text 
                    text text text text text text </p>
                </div>
                <div class="img_area">
                    <img src="${this.getAttribute("img")}" alt="img"/>
                </div>
            </div>
        `
    }
    
}

customElements.define("project-template",projectTemplate);