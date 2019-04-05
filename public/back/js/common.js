
$(document)
    .ajaxStart(function () {
    NProgress.start()
}).ajaxStop(function () {
    setInterval(function () {
        NProgress.done()
    },1000)
});

//登录拦截功能
$(function () {
    if (location.href.indexOf('login.html') === -1){
        $.ajax({
            method:'get',
            url:'/employee/checkRootLogin',
            dataType:'json',
            success:function (info) {
                console.log(info);
                if (info.success){

                }else if(info.error === 400){
                    location.href = 'login.html'
                }
            }
        })
    }
});


$(function ($) {
   /*
   * 分类切换
   * 导航菜单切换
   * 退出模态框显示
   * 模态框退出
   * */
   $('.nav .categray').on('click',function () {
       $('.nav .child').stop().slideToggle()
   });

   $('.icon_menu').on('click',function () {
       $('.lt_aside').toggleClass('hidemenu');
       $('.lt_main').toggleClass('hidemenu');
       $('.lt_main .topbar').toggleClass('hidemenu');
   });

   $('.icon_logout').on('click',function () {
       $('#logout_modal').modal('show')
   });

   $('#logoutButton').click(function () {
       $.ajax({
           method:'get',
           url:'/employee/employeeLogout',
           dataType:'json',
           success:function (info) {
               if (info.success){
                   location.href = 'login.html'
               }
           }
       })
   })
});