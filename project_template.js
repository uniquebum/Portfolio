class projectTemplate extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = `
            <div class="template_body">
                <div class="text_area">
                    <h3>Project name</h3>
                    <p>text text text text text 
                    text text text text text 
                    text text text text text 
                    text text text text 
                    text text text text text text<br/><br/> 
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