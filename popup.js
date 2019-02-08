'use strict';

class Popup{
    constructor(previousBtnId, nextBtnId){
        this.previousBtn = document.getElementById(`${previousBtnId}`);
        this.url = chrome.runtime.getURL('data/quotes.json');
        this.previousBtn.addEventListener("click", this.previous);
        
        this.nextBtn = document.getElementById(`${nextBtnId}`);
        this.nextBtn.addEventListener("click", this.next);

        this._dal = new Dal();
    }
    
    get dal(){
        return this._dal;
    }

    set dal(newDal){
        this._dal = newDal;
    }
    
    previous(){
        this._dal = new Dal();
        this._dal.fetchQuotes();
    }

    next(){
        alert("Next");
    }
}
