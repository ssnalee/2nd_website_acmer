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
};   

function mAcodian1(){
    //mobile acodian
    $('#box02>dl>dt:first').addClass('selectted');
    $('#box02>dl>dd:not(:first)').hide();

    $('#box02>dl>dt').on('click',function(e){
        let box = $(this).next('dd').css('display');
        if(box=='none'){
            //action
            $('.selectted').next('dd').slideUp(300);
            $(this).next('dd').slideDown(300);
            $('#box02>dl>dt').removeClass('selectted');
            $(this).addClass('selectted');
        }
    });
}

function mAcodian2(){
    //mobile acodian
    $('#box03>ul>li>h5:first').addClass('selectted02');
    $('#box03>ul>li:not(:first)>figure').hide();

    $('#box03>ul>li>h5').on('click',function(e){
        let box = $(this).next('figure').css('display');
        if(box=='none'){
            //action
            $('.selectted02').next('figure').slideUp(300);
            $(this).next('figure').slideDown(300);
            $('#box03>ul>li>h5').removeClass('selectted02');
            $(this).addClass('selectted02');
        }
    });
}