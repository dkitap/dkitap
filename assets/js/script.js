availableImages=['/assets/images/hacker-nine/1.jpg','/assets/images/hacker-nine/1.jpg','/assets/images/hacker-nine/2.jpg','/assets/images/hacker-nine/2.jpg','/assets/images/hacker-nine/3.jpg','/assets/images/hacker-nine/3.jpg',
'/assets/images/hacker-nine/4.jpg','/assets/images/hacker-nine/4.jpg','/assets/images/hacker-nine/5.jpg','/assets/images/hacker-nine/5.jpg','/assets/images/hacker-nine/6.jpg','/assets/images/hacker-nine/6.jpg','/assets/images/hacker-nine/7.jpg',
'/assets/images/hacker-nine/7.jpg','/assets/images/hacker-nine/8.jpg','/assets/images/hacker-nine/8.jpg']

function start(){
    let moves =0;
    const maindiv = document.getElementById("boardgame");
    while (maindiv.firstChild) {
        maindiv.removeChild(maindiv.lastChild);
    }
    const scorediv = document.getElementById("score");
    while (scorediv.firstChild) {
       scorediv.removeChild(scorediv.lastChild);
    }

    var row = document.createElement('div')
    row.setAttribute('class','mainimgdiv');
    let boxcount = 16;
    ImagesCopy= JSON.parse(JSON.stringify( availableImages))
    for(let j=1;j<=boxcount;j++){
        var div = document.createElement('div');
        div.setAttribute('class','imgdiv')
        var image = document.createElement('img')
        randomImg = ImagesCopy.splice(Math.floor(Math.random() * ImagesCopy.length),1);
        image.setAttribute('src',randomImg);
        image.setAttribute('class','hide')
        div.appendChild(image)
        row.appendChild(div);
        
        if(j%boxcount==0){
            document.getElementById('boardgame').append(row)
            row = document.createElement('div')
        }

        div.addEventListener('click',function(event){
            moves++;
            let curr = event.currentTarget.children
            let currImg = curr[0]
           var currentlyshowing = document.getElementsByClassName('showimg');
            currentlyshowing = document.getElementsByClassName('showimg');
            let flag=0;
            if(currentlyshowing.length >= 1){
                for(let i=0;i<currentlyshowing.length;i++)
                {
                    if(currentlyshowing[i].src != currImg.src)
                    currentlyshowing[i].classList.remove('showimg');
                    else{
                        currentlyshowing[i].classList.add('match');
                        currImg.classList.add('match')
                        flag=1;
                    }
                }
            }

            if(document.getElementsByClassName('match').length==boxcount){
                alert("Tebrikler Kazandın !!! ")
                let button = document.createElement('button');
                button.setAttribute('class' , 'btn btn-warning');
                let node= document.createTextNode("Kazandın!!! Deneme Sayısı: "+moves);
                button.appendChild(node)
                document.getElementById('score').appendChild(button) 
            }

            if(flag==0)
            currImg.classList.add('showimg');
        })
    }
}
