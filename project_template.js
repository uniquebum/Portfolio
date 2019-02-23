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
                    width: 90%;
                    margin: auto;
                }
                .text_area {
                    width: 70%;
                    margin-left: auto;
                    margin-right: auto;
                }
                .img_area img{
                    display: block;
                    width: 70%;
                    padding-bottom: 5px;
                    margin-left: auto;
                    margin-right: auto;
                }
            </style>
            <div class="template_body">
                <div class="img_area">
                    <img src="${this.getAttribute("img")}" alt="img"/>
                </div>    
                <div class="text_area">
                    <samp><h2>Infinite Run - <span>Javascript, HTML5/CSS</span></h2></samp>
                    <p>
                        HTML5 canvas based platformer game.
                        Coded at around 2014 with plain JS and some simple
                        AJAX queries to save high scores to server side text file.  
                    </p>
                </div>
            </div>
        `
    }
    
}

customElements.define("project-template",projectTemplate);