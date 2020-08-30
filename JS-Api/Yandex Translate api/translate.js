function Translate(word,language){
    this.apiKey = "trnsl.1.1.20200124T143530Z.d150dcb9f94d14a9.deaa2728ae30edad0b2677aef9863540af082686";
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback) {

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null,text);
            //console.log(JSON.parse(this.xhr.responseText).text[0]);
        }
        else{
            callback("Bir hata oluştu",null)
        }
    }

    this.xhr.send();



}
Translate.prototype.changeParameters = function(newWord , newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}


