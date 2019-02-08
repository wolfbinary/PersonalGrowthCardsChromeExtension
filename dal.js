class Dal{
    
    fetchQuotes(){
        let url = chrome.runtime.getURL('data/quotes.json');
        fetch(url)
        .then((response) => response.json()) //assuming file contains json
        .then((json) => {
            alert(json.version);
        });
    }
}