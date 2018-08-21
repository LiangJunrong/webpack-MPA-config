$(function() {
    // 点击说明
    $('#rules').click(function () {
        $('.pop,.mask_rule').addClass('block');
        $('.active_bg').removeClass('block');
    })
    // 点击说明图片消失
    $('.mask_rule').click(function () {
        $(this).removeClass('block');
        $('.pop').removeClass('block');
    })
    // 填表弹窗
    $('.index_content .btn').click(function () {
        $('.pop,.check_in').addClass('block');
    })
    // 判断登记信息
    $('.check_in .btn').click(function () {
        $(this).removeClass('block');
        $('.pop').removeClass('block');
    })
})