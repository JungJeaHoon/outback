

const elLi =document.querySelectorAll('#gnb > ul > li');
const elMenu =document.querySelectorAll('#gnb > ul > li > a');
const elBar =document.querySelector('.bar');

elLi.forEach(function(aa){
    aa.onmouseover = function(){
        elBar.style = `width:${this.offsetWidth}px;
                        left:${this.offsetLeft}px;`;                    // nav 라인 따라 빨간줄 생기기!!
        // if(this.children[1]) this.children[1].style.display = 'block';  //서브메뉴 나타내기!!
    }
    aa.onmouseout = function(){
        elBar.style = `width:0;
                        left:${this.offsetLeft}px;`                     // nav 라인 따라 빨간줄 생기기!!
        // if(this.children[1]) this.children[1].style.display = 'none';   //서브메뉴 나타내기!!
    }
})



/************ jQuery 사용 - 서브메뉴 나타내기 ***************/

const jLi = $('#gnb > ul > li');

jLi.on('mouseenter',function(){
    $(this).children('.sub').stop().fadeIn(500)
    })
    jLi.on('mouseleave',function(){
        $(this).children('.sub').stop().fadeOut(100)
    })





