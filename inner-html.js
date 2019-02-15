export class InnerHtml extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "html", {
            get: function() { return this.val; },
            set: function(val) {
                this.val = val;
                this.innerHTML = this.val;
            }
        });
        this.html = this.getAttribute('.html') || '';
        this.observer = new MutationObserver(this.mutationCallback.bind(this));
        this.observer.observe(this, { attributes : true });
    }
    static get is(){
        return 'inner-html';
    }
    mutationCallback(mutationsList, observer){
        mutationsList.forEach( (record => {
            if(record.type==='attributes' && record.attributeName==='.html'){
                this.html = this.getAttribute('.html');                    
            }
        }).bind(this));
    }
}
customElements.define( InnerHtml.is, InnerHtml );