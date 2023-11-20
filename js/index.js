//sidebar
function SideBar(){
    
    window.addEventListener("scroll",function(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
//forEach()
    document.querySelectorAll(".content_item").forEach((element, index) => {
        if(scrollTop >= element.offsetTop){
            document.querySelectorAll("aside>ul>li").forEach(li => {
                li.classList.remove("active");
             });
            document.querySelector("aside>ul>li:nth-child("+(index+1)+")").classList.add("active");
        }
        });
    });
    //
};

function wMouse(){   
//마우스 브랜딩
document.addEventListener("mousemove",e => {
    gsap.to(".cursor",{duration:.5 , left: e.pageX +'px',top: e.pageY+'px'
});
document.querySelector(".pageX").innerText=e.pageX+'px';
document.querySelector(".pageY").innerText=e.pageY+'px';

});
//오버효과
document.querySelectorAll("h4, span").forEach(h4 =>{
    h4.addEventListener("mouseenter", ()=>{
        document.querySelector(".cursor").classList.add("active");
    });
    h4.addEventListener("mouseleave", ()=>{
        document.querySelector(".cursor").classList.remove("active");
    });
});

//
};

function wNav(){
    //$(document).ready(function(){
        $('#headerWrap').mouseover(function(e){
            $('#headerWrap nav > ul:nth-child(2) > li > ul').stop().slideDown(100);
            $('#headerWrap').css('height','400px');
        });
        $('#headerWrap').mouseout(function(e){
            $('#headerWrap nav > ul:nth-child(2) > li > ul').stop().slideUp(100);
            $('#headerWrap').css('height','0px');
        });
    //});
};


function mNav(){
    $('#btn').on('click',function(e){
        $('nav').css('display','block');
    });
    $('#close').on('click',function(e){
        $('nav').css('display','none');
    });
};
function Acodian(){
    //acodian
    $('#mainUl > li').on('click',function(e){
        if ($(this).hasClass('selected')){
            $(this).find(' > ul').stop().slideUp(300);
            $(this).removeClass('selected');
        }
        else{
            $(this).find(' > ul').stop().slideDown(300);
            $(this).addClass('selected');
        }
    });
    //   $('#mainUl > li:first').addClass('selected');
    //   $('#mainUl > li > ul:not(:first) ').hide();
    //   $('#mainUl > li').on('click',function(e){
    //       let box =$(this).next('.mainList').css('display');
    //       console.log(box);
    //       if (box == 'none'){
    //           //action
    //           $('.selected').next('.mainList').slideUp(300);
    //           $(this).next('.mainList').slideDown(300);
    //           $('#mainUl > li').removeClass('selected');
    //           $(this).addClass('selected');
    //       }
    //   });
};
