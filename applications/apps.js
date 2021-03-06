class Application {
    constructor() {
        console.log('app::init')
        console.log(gsap)
        this.position = {
            x: 0,
            y: 0
        };
        
        this.screen = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        this.dom = {
            circle: document.querySelector('.circle')
        }

        this.size = {
            circleWidth: this.dom.circle.offsetWidth,
            circleHeight: this.dom.circle.offsetHeight
        }

        this.addListeners()
    }

    addListeners() {
        /**
         * click
         * mousemove
         * mousedown
         * mouseup
         * mouseenter
         * mouseleave
         * 
         * scroll
         * resize
         */
        this.dom.circle.addEventListener('mouseenter', this.onMouseEnter)
        this.dom.circle.addEventListener('mouseleave', this.onMouseLeave)

        window.addEventListener('resize', this.resize)
        window.addEventListener('mousemove', this.MouseMouv)

        document.addEventListener('keydown', this.onKeyDown)
    }

    onKeyDown = (e) => {
        if (e.keyCode == 37) this.gauche();
        if (e.keyCode == 39) this.droite();
        if (e.keyCode == 38) this.haut();
        if (e.keyCode == 40) this.bas();
        this.move();
    }


    // quatre fonctions de déplacement
    gauche() {
        this.position.x-=100
        const minX = 0
        this.position.x = Math.max(this.position.x, minX)
    }

    droite() {
        this.position.x+=100
        const maxX = (this.screen.width - this.size.circleWidth)
        this.position.x = Math.min(this.position.x, maxX)
    }

    haut() {
        this.position.y-=100
        const minY = 0
        this.position.y = Math.max(this.position.y, minY)
    }

    bas() {
        this.position.y+=100
        const maxY = (this.screen.height - this.size.circleHeight)
        this.position.y = Math.min(this.position.y, maxY)

    }
    move(){
        //this.dom.circle.style.transform=`translate(${this.position.x}px,${this.position.y}px)`

        gsap.to(this.dom.circle, {
            x: this.position.x,
            y: this.position.y,
            duration: 2.5,
            ease: Elastic.easeOut.config(1, 0.3)
        })
    }

    resize = (e) => {
        console.log('resize', window.innerWidth)
        this.screen.width = window.innerWidth
        this.screen.height = window.innerHeight

        this.size = {
            circleWidth: this.dom.circle.offsetWidth,
            circleHeight: this.dom.circle.offsetHeight
        }
    }

    setRandomColor() {
        let randomColorR = 255 * Math.random()
        let randomColorG = 255 * Math.random()
        let randomColorB = 255 * Math.random()

        this.dom.circle.style.backgroundColor = `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})` // change la couleur de manière aleatoire
    }

    clearColor() {
        this.dom.circle.style.backgroundColor = ''
    }

    MouseMouv = (e) => {
        const cursorX = e.clientX - (this.size.circleWidth/2)
        const cursorY = e.clientY - (this.size.circleHeight/2)
        this.position.x=cursorX
        this.position.y=cursorY
        
        this.move()
        console.log(cursorX, cursorY)
    }
    
    onMouseEnter = (e) => {
        console.log('circle enter')
        this.setRandomColor()
    }

    onMouseLeave = (e) => {
        console.log('circle leave')
        this.clearColor()
    }
}

new Application()