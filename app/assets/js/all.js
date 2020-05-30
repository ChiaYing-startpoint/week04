
//漢堡選單
$(document).ready(function () {
    $('.hamburger').click(function (e) { 
        e.preventDefault();
        $('.hamburger').toggleClass('active');
        $('.navbar').toggleClass('open');
       
    });
});

// qa.html的下拉式選單
$(document).ready(function () {
    $('.card-item').click(function (e) { 
        e.preventDefault();
        //在card-item加上動態class，處理偽元素三角形
        $(this).toggleClass('active').siblings().removeClass('active');
        
        //找到body讓它出現
        $(this).find('.card-item-body').slideToggle(); //也可寫成$(this).children().next().slideToggle();
        //找到點擊以外body，讓他收合
        $(this).siblings().find('.card-item-body').slideUp();//$(this).siblings().children().next().slideUp();
    });
});

//product.html的subnav
$(document).ready(function () {
    $('.subnav-item').click(function (e) {
        // e.preventDefault();  
        //★★★若保留e.preventDefault();就無法進入其他分頁，
        //★★★若取消e.preventDefault();，可以進入分頁，但能夠點擊的範圍只有紅色底線16px

        $(this).addClass('active').siblings().removeClass('active');
        $('.optical').attr('href','product.html');
        $('.sunglasses').attr('href', 'product-innerSun.html');
        
    });
});

//product.html的pagination
$(document).ready(function () {
    $('.digital').click(function (e) {
        // e.preventDefault();
        //保留a連結功能，不用寫e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
});


//blog.html和blog-inner.html下拉式選單
$(document).ready(function () {
    $('.jq-blogarrow').click(function (e) { 
        e.preventDefault();
        $('.blog-nav').toggleClass('active');  //選單
        $(this).toggleClass('active');    //箭頭
        
    });
});





