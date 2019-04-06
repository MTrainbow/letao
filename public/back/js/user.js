$(function () {
    //当前页和当前页显示条数
    var currentPage = 1;
    var currentSize = 5;
    //当前ID 状态改变使用
    var currentID;
    var isDeteled;

    //一进入页面就进行渲染
    render();

    /**
     * 分页效果和数据渲染
     */
    function render() {
        $.ajax({
            method:'get',
            url:'/user/queryUser',
            data:{
                page : currentPage,
                pageSize :currentSize
            },
            dataType:'json',
            success:function (info) {
                console.log(info)

                //配合模板引擎渲染
                var html = template('tpl',info);
                $('.lt_content tbody').html( html);

                //分页效果
                $('#pagintor').bootstrapPaginator({
                    bootstrapMajorVersion:3,
                    currentPage:info.page,
                    totalPages:Math.ceil(info.total/info.size),

                    numberOfPages: 5,
                    shouldShowPage:true,//是否显示该按钮
                    itemTexts: function (type, page, current) {

                        switch (type) {

                            case "first":

                                return "首页";

                            case "prev":

                                return "上一页";

                            case "next":

                                return "下一页";

                            case "last":

                                return "末页";

                            case "page":

                                return page;
                        }
                    },
                    onPageClicked:function (even,originalEvent,type,page) {
                        currentPage = page;
                        render()
                    }
                })
            }
        })
    }

//禁用和启用功能,采用委托代理
    $('tbody').on('click','.btn',function () {
        $('#userModal').modal('show');
        currentID = $(this).parent().data('id');
        isDeteled = $(this).hasClass('btn-success') ? 1 : 0 ;
        console.log(isDeteled)
    });

    $('#subBtn').click(function () {
        $.ajax({
            method:'post',
            url:'/user/updateUser',
            data:{
                id:currentID,
                isDelete:isDeteled
            },
            dataType:'json',
            success:function (info) {
                if (info.success){
                    $('#userModal').modal('hide');
                    render()
                }
            }
        })
    })


})