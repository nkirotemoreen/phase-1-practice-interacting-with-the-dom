document.addEventListener('DOMContentLoaded', () => {
    let count = document.getElementById('counter');
    let timerString = count.innerText;
    let plus = document.querySelector('button#plus');
    let minus = document.querySelector('button#minus');
    let pause = document.querySelector('button#pause');
    let heart = document.querySelector('button#heart');
    let likes = document.querySelector('.likes');
    console.log('likes:', likes);
    console.log("plus:", plus);
    console.log("minus:", minus);



    let interval = setInterval(timerCount, 1000);

    function timerCount(){
        let timer = parseInt(timerString);
        let t = ++timer;
        timerString = t.toString();
        count.innerText = timerString;
        console.log("time", time);
        console.log("timerString:", timerString)
        console.log("t:",t);
        console.log("innerText:", count.innerText);
    }
    plus.addEventListener('click', (e) => {
        console.log("e:",e.target.id);
        console.log("timerString:", timerString);
        timerCount();
    });

    minus.addEventListener('click', (e) => {
        let curr = parseInt(timerString);
        let m = --curr;
        if(m >= 0){
            timerString = m.toString();
        } else {
            timeString = '0';
        }
        count.innerText = timerString;
    });

    pause.addEventListener('click', (e) => {
        if(pause.innerText === "pause"){
            clearInterval(interval);
            pause.innerText = "resume";
        } else {
            pause.innerText = "pause";
            interval = setInterval(timerCount, 1000);
        }
    });

    heart.addEventListener('click', (e) => {
        let likeNum = 1;
        let list = likes.querySelector(`[data-count = "${timerString}"]`);

        if(list){
                                                                                                                                                                                                                        
            list.dataset.likes = parseInt(list.dataset.likes) + 1;
            let likeString = document.createTextNode(`${timerString} has been liked ${list.dataset.likes} times`);
            list.nodeValue = likeString;
            console.log("list:", list);
        } else {
            list = document.createElement("LI");
            list.dataset.likes = 1;
            list.dataset.count = timerString;
            let likeString = document.createTextNode(`${timerString} has been liked ${likeNum} time`);
            list.appendChild(likeString);
            likes.appendChild(list);
        }
        list.appendChild(likeString);
        likes.appendChild(list);
        likeNum = ++likeNum;
        console.log("list text:", list.innerText);
        console.log("likeString:", likeString);
    });

});
