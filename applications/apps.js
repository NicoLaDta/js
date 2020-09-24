class Application {
    constructor(){
        alert('app::init')

        this.dom = {
            circle: document.querySelector('.circle')
        }

        console.log(this.dom)
    }
}

new Application()