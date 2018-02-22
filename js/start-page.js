function main() {
    window.onscroll = () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolling')
        } else {
            header.classList.remove('scrolling')
        }
    }
}

window.onload = main