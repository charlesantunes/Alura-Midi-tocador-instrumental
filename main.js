function tocaSom(idAudio) {
    document.querySelector(idAudio).play();
}
//codigo que busca tecla por tecla, querySelector()
//document.querySelector('.tecla_pom').onclick = tocaSomPom;

//codigo que busca todas as tecla de uma vez, querySelectoraAll(). Ele junsta em um array de lista
let teclaSom =  document.querySelectorAll('.tecla');

/*
let n = 0;
//while foi otimizado para for
while (n < teclaSom.length) {
    const todaClassSom = teclaSom[n]
    const classTecla =  teclaSom[n].classList[1];
    const idaudio = `#som_${classTecla}`
    

    todaClassSom.onclick = ()=> tocaSom(idaudio)
    //tocaSom('#som_tecla_toim');//foi preciso fazer uma function anonima para passar parametros, funtion normal inicia sozinha se colocar () para inserir parametros.
    n++
}
*/

for (let i = 0; i < teclaSom.length; i++) {
    const todaClassSom = teclaSom[i]
    const classTecla =  teclaSom[i].classList[1];
    const idaudio = `#som_${classTecla}`
    
    todaClassSom.onclick = ()=> tocaSom(idaudio);

    todaClassSom.onkeydown = (event) =>{

        if ((event.code === 'Enter') || (event.code === 'Space')) {
            //onkeydown = quando pressiona a tecla
            todaClassSom.classList.add('ativa') // classe criada para pinta de vermelho a tecla
            
        }
        //onkeyup = quando solta a tecla
        todaClassSom.onkeyup = () =>todaClassSom.classList.remove('ativa')
        
        
    }
        
    }