score = 0;
cross = true;

let audio = new Audio('Music.mp3')
let audiogo = new Audio('Pause.mp3')
setTimeout(() => {
    audio.play();
}, 100);
document.onkeydown = function(e)
{
  
    if(e.keyCode == 38)
    {
        let dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');           
        },1200)
    }

    if(e.keyCode == 39)
    {
        let dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX + 112) + "px";
    }

    if(e.keyCode == 37)
    {
        let dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX - 100) + "px";
    }
}



document.onmousedown= function(e)
{

        let dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');           
        },1200) 

}



setInterval(() => {
    
      let dino = document.querySelector('.dino');
      let obstacle = document.querySelector('.obstacle');
      let gameOver = document.querySelector('.gameOver');
    

      dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
      dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));



      ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
      oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

      
      let offsetX = Math.abs(dx-ox);
      let offsetY = Math.abs(dy-oy);

      if(offsetX < 130 && offsetY < 52)
      {
         obstacle.classList.remove('obstacleAni')
         gameOver.innerHTML = "Game Over"
         audiogo.play();
         setTimeout(() => {
             audio.pause();
             audio.pause();
         }, 1000);


      }
      else if(offsetX < 145 && cross)
      {
         score +=1;
         updateScore(score);
         cross = false;
         setTimeout(() => {
           cross = true
         }, 1000);

         setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));

            newDur = aniDur - 0.2;
            obstacle.style.animationDuration = newDur + 's';
         }, 1000);
      }

}, 100);



function updateScore(score)
{
    document.getElementById("scoreCont").innerHTML = "Your Score: " + score
}



