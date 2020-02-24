//declaration
let form = document.getElementById('form');
let Tweet = document.getElementById('tweet')
let tweetList = document.getElementById('tweet-list');
//eventListener
eventListener();

function eventListener(){
    form.addEventListener('submit', sendTweet);
    tweetList.addEventListener('click', removeTweet);
    document.addEventListener('DOMContentLoaded',showfromlocalStorage);
}

//function
function sendTweet(e){
    //function to add o tweet List
    e.preventDefault();
    if(Tweet.value === ""){
        Tweet.style.borderBottomColor ="red";
      
    }
    else{
        let div= document.createElement('li');
        div.textContent=Tweet.value;
        checkLocalStorage(Tweet.value);
        let removeBtn = document.createElement('div');
        removeBtn.textContent="X";
        removeBtn.classList.add('remove-tweet');
        div.appendChild(removeBtn);
        tweetList.appendChild(div);
        Tweet.style.borderBottomColor ="green"
        form.reset();
    }
    
}

function removeTweet(e){
    if(e.target.classList.contains("remove-tweet")){
        console.log(e.target.parentElement.remove());
    }
}

function checkLocalStorage(Tweets){
    let storage =getandsaveinLocalStorage();
    storage.push(Tweets);
    localStorage.setItem('Tweets',JSON.stringify(storage));
}
function getandsaveinLocalStorage(){
    let show = localStorage.getItem('Tweets');
    let storage;
    if(show === null){
        storage =[]
    }
    else{
        storage=JSON.parse(show);
    }
    return storage;
}

function showfromlocalStorage(){
    let storage =getandsaveinLocalStorage();
    storage.forEach(function(tweets){
        let div= document.createElement('li');
        div.textContent=tweets;
        let removeBtn = document.createElement('div');
        removeBtn.textContent="X";
        removeBtn.classList.add('remove-tweet');
        div.appendChild(removeBtn);
        tweetList.appendChild(div);
    })
}