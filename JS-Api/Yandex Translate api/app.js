// trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481


eventListeners();


function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit", translateWord);
    //change
    document.getElementById("language").onchange = function(){
        //arayüz işlemleri
        ui.changeUI();
    }

}
const ui = new UI();
const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value);
function translateWord(e){

    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value);

    translate.translateWord(function(err , response){
        if(err){
            //Hatalı durum
            console.log(err);
        }
        else{
            ui.displayTranslate(response);
        }

    });



    e.preventDefault();
}

