'use strict';

class Popup{
    constructor(previousBtnId, nextBtnId){
        this.previousBtn = document.getElementById(`${previousBtnId}`);
        this.url = chrome.runtime.getURL('data/quotes.json');
        this.previousBtn.addEventListener("click", this.previous);
        
        this.nextBtn = document.getElementById(`${nextBtnId}`);
        this.nextBtn.addEventListener("click", this.next);
    }
    fetchQuotes(){
        
    }
    
    previous(){
        let url = chrome.runtime.getURL('data/quotes.json');
        fetch(url)
        .then((response) => response.json()) //assuming file contains json
        .then((json) => {
            alert(json.version);
        });
    }

    next(){
        alert("Next");
    }
}
