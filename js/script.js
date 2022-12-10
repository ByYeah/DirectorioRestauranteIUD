document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){

        if (e.key ==="Escape")e.target.value = " "

        document.querySelectorAll(".cartas").forEach(carta =>{

            carta.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            ?carta.classList.remove("filtro")
            :carta.classList.add("filtro")
        })
    }
})