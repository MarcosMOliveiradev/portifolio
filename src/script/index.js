class MobileNavbar {
    constructor(menu, navList, navLinks) {
        this.menu = document.querySelector(menu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = 'activ'

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((links, index) => {
            links.style.animation
              ? (links.style.animation = "")
              : (links.style.animation = `navLinkFade 0.6s ease forwards 0.1s`)
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass)
        this.menu.classList.toggle(this.activeClass)
        this.animateLinks()
    }

    addClickEvent() {
        this.menu.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.menu) {
            this.addClickEvent()
        }
        return this;
    }
}

const mobalNavBar = new MobileNavbar(
    ".menu",
    ".navList",
    ".navList li"
)

mobalNavBar.init()