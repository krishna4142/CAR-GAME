let car1=document.querySelector(".car1");
let car2=document.querySelector(".car2")
let car3=document.querySelector(".car3");
let car4=document.querySelector('.car4');
let car5=document.querySelector(".car5");
let car6=document.querySelector(".car6");
let car7=document.querySelector(".car7");

let body1=document.querySelector(".body")
car2.style.left='-50px'
car3.style.left='-20px'
car4.style.right='-5px'
car5.style.right='-20px'
car6.style.right='-40px'
// car7.style.right='0'
let clearInterval
        let val=0;
        function left(){
            val-=50;
            if(val<=0){
                val=0;
            }
            car1.style.left=`${val}px`;
        }
        function right(){
            val+=50;
            if(val>=350){
                val=350;
            }
            car1.style.left=`${val}px`
        }
        let level=setInterval(lev,100);
        function lev(){

        }
        let ti=setInterval(ss,0);
             function ss(){
                 
                // let score=document.querySelector(".run_score").innerText=''
                let mycar_top=document.querySelector(".car1").getBoundingClientRect().top;
                    mycar_top=Math.abs(Math.floor(mycar_top));
                let mycar_bottom=document.querySelector(".car1").getBoundingClientRect().bottom;
                    mycar_bottom=Math.abs(Math.floor(mycar_bottom));
                let mycar_left=document.querySelector(".car1").getBoundingClientRect().left;
                    mycar_left=Math.abs(Math.floor(mycar_left));
                let mycar_right=document.querySelector(".car1").getBoundingClientRect().right;
                    mycar_right=Math.abs(Math.floor(mycar_right));

                let ecar1_top=document.querySelector(".car2").getBoundingClientRect().top;
                    ecar1_top=Math.abs(Math.floor(ecar1_top));
                let ecar1_bottom=document.querySelector(".car2").getBoundingClientRect().bottom;
                    ecar1_bottom=Math.abs(Math.floor(ecar1_bottom));
                let ecar1_left=document.querySelector(".car2").getBoundingClientRect().left;
                    ecar1_left=Math.abs(Math.floor(ecar1_left));
                let ecar1_right=document.querySelector(".car2").getBoundingClientRect().right;
                    ecar1_right=Math.abs(Math.floor(ecar1_right));

                let ecar2_top=document.querySelector(".car3").getBoundingClientRect().top;
                    ecar2_top=Math.abs(Math.floor(ecar2_top));
                let ecar2_bottom=document.querySelector(".car3").getBoundingClientRect().bottom;
                    ecar2_bottom=Math.abs(Math.floor(ecar2_bottom));
                let ecar2_left=document.querySelector(".car3").getBoundingClientRect().left;
                    ecar2_left=Math.abs(Math.floor(ecar2_left));
                let ecar2_right=document.querySelector(".car3").getBoundingClientRect().right;
                    ecar2_right=Math.abs(Math.floor(ecar2_right));

                let ecar3_top=document.querySelector(".car4").getBoundingClientRect().top;
                    ecar3_top=Math.abs(Math.floor(ecar3_top));
                let ecar3_bottom=document.querySelector(".car4").getBoundingClientRect().bottom;
                    ecar3_bottom=Math.abs(Math.floor(ecar3_bottom));
                let ecar3_left=document.querySelector(".car4").getBoundingClientRect().left;
                    ecar3_left=Math.abs(Math.floor(ecar3_left));
                let ecar3_right=document.querySelector(".car4").getBoundingClientRect().right;
                    ecar3_right=Math.abs(Math.floor(ecar3_right));

                let ecar4_top=document.querySelector(".car5").getBoundingClientRect().top;
                    ecar4_top=Math.abs(Math.floor(ecar4_top));
                let ecar4_bottom=document.querySelector(".car5").getBoundingClientRect().bottom;
                    ecar4_bottom=Math.abs(Math.floor(ecar4_bottom));
                let ecar4_left=document.querySelector(".car5").getBoundingClientRect().left;
                    ecar4_left=Math.abs(Math.floor(ecar4_left));
                let ecar4_right=document.querySelector(".car5").getBoundingClientRect().right;
                    ecar4_right=Math.abs(Math.floor(ecar4_right));

                let ecar5_top=document.querySelector(".car6").getBoundingClientRect().top;
                    ecar5_top=Math.abs(Math.floor(ecar5_top));
                let ecar5_bottom=document.querySelector(".car6").getBoundingClientRect().bottom;
                    ecar5_bottom=Math.abs(Math.floor(ecar5_bottom));
                let ecar5_left=document.querySelector(".car6").getBoundingClientRect().left;
                    ecar5_left=Math.abs(Math.floor(ecar5_left));
                let ecar5_right=document.querySelector(".car6").getBoundingClientRect().right;
                    ecar5_right=Math.abs(Math.floor(ecar5_right));

                if(((ecar1_left<mycar_left&&mycar_left<ecar1_right) || (ecar1_left<mycar_right && mycar_right<ecar1_right))&&((ecar1_top<mycar_top&&mycar_top<ecar1_bottom)||(ecar1_top<mycar_bottom&&mycar_bottom<ecar1_bottom))){
                    alert("game over");
                    // clearInterval(ti)
                }
                if(((ecar2_left<mycar_left&&mycar_left<ecar2_right) || (ecar2_left<mycar_right && mycar_right<ecar2_right))&&((ecar2_top<mycar_top&&mycar_top<ecar2_bottom)||(ecar2_top<mycar_bottom&&mycar_bottom<ecar2_bottom))){
                    alert("game over");
                    // clearInterval(ti)
                }
                if(((ecar3_left<mycar_left&&mycar_left<ecar3_right) || (ecar3_left<mycar_right && mycar_right<ecar3_right))&&((ecar3_top<mycar_top&&mycar_top<ecar3_bottom)||(ecar3_top<mycar_bottom&&mycar_bottom<ecar3_bottom))){
                    alert("game over");
                    // clearInterval(ti)
                }
                if(((ecar4_left<mycar_left&&mycar_left<ecar4_right) || (ecar4_left<mycar_right && mycar_right<ecar4_right))&&((ecar4_top<mycar_top&&mycar_top<ecar4_bottom)||(ecar4_top<mycar_bottom&&mycar_bottom<ecar4_bottom))){
                    alert("game over");
                    // clearInterval(ti)
                }
                if(((ecar5_left<mycar_left&&mycar_left<ecar5_right) || (ecar5_left<mycar_right && mycar_right<ecar5_right))&&((ecar5_top<mycar_top&&mycar_top<ecar5_bottom)||(ecar5_top<mycar_bottom&&mycar_bottom<ecar5_bottom))){
                    alert("game over");
                    // clearInterval(ti)
                }
             }
            // console.log(typeof e)
            let body=document.querySelector(".body");
            function start(){
            body.classList.add("one");

            car2.style.animation='sai 5s infinite';
            car3.style.animation='sai 7s infinite linear'
            car4.style.animation='sai 4s infinite linear'
            car5.style.animation='sai 5s infinite linear'
            car6.style.animation='sai 7s infinite linear'
            car7.style.animation='sai 6s infinite linear'
             
            let game=document.querySelector('.game')
            game.style.animation=' road 3s infinite linear'
             
            let scr=setInterval(s,800);
            let n=0;
            let leve=0;
            function s(){
                n+=1;
                let scor=document.querySelector('.run_score').innerText=`   ${n}`
                let temp=n;
                if(temp>3){
                    leve+=1;
                    let level=document.querySelector(".run_level").innerText=leve
                    temp=0;
                }
            }
            let direction=setInterval(dire,100);
            function dire(){
                let value=Math.abs(Math.floor(Math.random()*100))
                // car2.style.left=`${value*100}px`
                console.log(value)
            }
            
        }
         