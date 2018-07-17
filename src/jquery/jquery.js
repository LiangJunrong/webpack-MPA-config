require("./jquery.css");
// 这只是其中的一种小方法，还可以使用<script>加载CDN等方式
// import $ from '../assets/js/jquery.min.js';

// 由于各种原因，runBall()方法只能提升到window上才能正常使用。
window.runBall = function() {
    $("#circle").animate({
        left: '-=110px',
        top: '+=150px',
        backgroundColor: 'red'
    });
    $("#circle").animate({
        left: '110px',
        backgroundColor:  'rgb(5, 243, 172)'
    });
    $("#circle").animate({
        left: '0',
        top: '0',
        backgroundColor: 'rgb(243, 207, 5)'
    });
};

$(function () {
    var start;
    $("#stop").click(function () {
        clearInterval(start);
        $("#start").show();
        $("#stop").hide();
    });
    $("#start").click(function () {
        start = setInterval("runBall()", 1000);
        $("#start").hide();
        $("#stop").show();
    });
});


window.onload = function () {
    console.log("这里可以使用ES5原生咯~");
}