function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var formularioano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if(formularioano.value.length == 0 || Number(formularioano.value) > anoatual){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var formulariosexo = document.getElementsByName("radsex")
        var idade = anoatual -  Number(formularioano.value)
        var genero = ''
        var img = window.document.getElementById('imagem')
        if (formulariosexo[0].checked){
           var genero = "Homem"

           if(idade >=0 && idade < 4){
            //bebe
            img.src = "imagens/baby.png"
           } else if(idade >= 4 && idade < 13){
            //criança
            img.src = "imagens/homemcriança.png"
           } else if(idade >=13 && idade < 25){
            //jovem
            img.src = "imagens/homemjovem.png"
            
           } else if(idade >=25 && idade < 50){
            //Adulto
            img.src = "imagens/homemadulto.png"
           }
           else if(idade >=50 && idade < 200 ){
            //Idoso
            img.src = "imagens/homemidoso.png"
           }
           else if(idade >=200 ){
            img.src = "imagens/caveira.png"
           }

        }else if(formulariosexo[1].checked){
            //formulariosexo[1].checked não é necessário pois só tem duas opções (Masculino e Feminino)
            var genero = "Mulher"
            
            if(idade >=0 && idade < 4){
            //bebe
            img.src = "imagens/baby.png"
           } else if(idade >= 4 && idade < 13){
            //criança
             img.src = "imagens/mulhercriança.png"
           } else if(idade >=13 && idade < 25){
            //jovem
             img.src = "imagens/mulherjovaem.png"
           } else if(idade >=25 && idade < 50){
            //Adulto
             img.src = "imagens/mulheradulta.png"
           }
           else if(idade >=50 && idade < 200 ){
            //Idoso
             img.src = "imagens/mulheridosa.png"
           }
           
        }

            res.style.textAlign = 'center'
            res.innerHTML = 'Detectamos '+genero+ ' com '+idade+' anos'
    }
        
    }
  

