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
                    height: 100%;
                    padding-top: 20px;
                    margin-left: auto;
                    margin-right: auto;

                    box-shadow: 0px 1px 0px 0px #FFF;
                    transition: box-shadow .5s;
                }
                .template_body:hover {
                    box-shadow: 
                        0px -1px 1px 0px #c8c8c8, 
                        0px 1px 0px 0px #c8c8c8;
                }
                .text_area {
                    width: 90%;
                    margin-left: auto;
                    margin-right: auto;
                    font-family: Arial, Helvetica, sans-serif;
                }
                .img_area img{
                    display: block;
                    width: 90%;
                    padding-bottom: 0px;
                    margin-left: auto;
                    margin-right: auto;
                    box-shadow: 
                        1px -1px 0 #767676,
                        -1px 2px 1px #969494, 
                        -2px 4px 1px #adadad, 
                        -3px 6px 1px #fcfbfb;
                }
                h2, h3 {
                    margin: 0;
                    padding: 0;
                }
                h2 {
                    padding-top: 4px;
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