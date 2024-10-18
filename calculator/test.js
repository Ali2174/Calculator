
var computerchoise,result;
const score = JSON.parse(localStorage.getItem('score')) || {

wintimes:0,
losetimes:0,
tietimes:0

};




function playermove(player){

    const number=Math.ceil(Math.random()*3);

    if(number===1){
        computerchoise='Rock';
    }else if(number===2){
        computerchoise='Scissor';
    }else{
        computerchoise='Paper';
    }

if(player==='Rock'){
    if(computerchoise=='Rock'){
        result='Tie';
        score.tietimes++;
        }else if(computerchoise==='Scissor'){
        
        result='You win';
        score.wintimes++;
        }else if(computerchoise==='Paper'){ result='You lost'; score.losetimes++;}


}else if(player==='Paper'){

    if(computerchoise==='Rock'){
        result='You Win';
        score.losetimes++;
        }else if(computerchoise==='Scissor'){
        result='You Lose';
        score.wintimes++;
        }else if(computerchoise==='Paper'){ result='Tie'; score.tietimes++;}


}else if(player==='Scissor'){

    if(computerchoise==='Rock'){
        result='You Lose';
        score.losetimes+=1;
        
        }else if(computerchoise==='Scissor'){
            result='Tie';
        score.tietimes+=1;
        }else if(computerchoise==='Paper'){result='You Win'; score.wintimes+=1; }

}
   
    localStorage.setItem('score',JSON.stringify(score));



    console.log('Result:',result,'|| Computer choice:',computerchoise);



    document.getElementById('resultator').innerHTML=` You choose ${player} <br>RESULT:${result}<br> Computer's choice was ${computerchoise}<br> tietimes:${score.tietimes}, wintimes:${score.wintimes} , lostimes: ${score.losetimes} `

}






