function toggleMode () {
    const html = document.documentElement
    

/* 1° forma de fazer ele verificar se tem o "light" e se não tiver ele adiciona: 
        if(html.classList.contains('light')){
            html.classList.remove('light')
        } else {
            html.classList.add('light')
        }
*/



/* segunda forma de fazer isso: */ 

    html.classList.toggle('light') 
   


/*  agr vamos trocar o avatar qnd clicar no botão*/



//pegar a img
    const img = document.querySelector("#profile img")
//substituir a imagem!
    if (html.classList.contains("light")) {
//se tiver o light mode, adicionar a imagem light
    img.setAttribute("src", "../img/avatar-light.png")        
    } else {
//se tiver o light mode, manter normal
    img.setAttribute("src", "../img/avatar.png")        
    }

 }