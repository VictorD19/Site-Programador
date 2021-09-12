const imgesArray = ["card.png", "landingPage.png", "siteComida.png", "fundo.jpg"]



function carrucel() {
    for (let i = 0; i < imgesArray.length; i++) {
        const imgBox = document.querySelector(`#img${[i]}`)
        imgBox.style = `background: url('./img/${imgesArray[i]}'); background-size:100% ;`

    }
}




window.onload = carrucel()