$(function () {
    $.ajax({
        method:'get',
        url:'/user/queryUser',
        data:{
            page : 1,
            pageSize :5
        },
        dataType:'json',
        success:function (info) {
            console.log(info)
            //配合模板引擎渲染
            var html = template('tpl',info)
            $('.lt_content tbody').html( html);
        }
    })

})