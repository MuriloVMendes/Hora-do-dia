 function carregar(){
     let msg = window.document.getElementById('msg')
     let img = window.document.getElementById('img')
     let data = new Date()
     let hora = 9//data.getHours(10)
     
   
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'dia.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'tarde.jpg'
       document.body.style.background = '#b9846f'
    }else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
 }