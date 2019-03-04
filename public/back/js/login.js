$(function ($) {
    // 1. 进行表单校验
    //    校验要求: (1) 用户名不能为空
    //              (2) 密码不能为空, 且必须是 6-12 位
    $('#form').bootstrapValidator({
        //配置图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        //配置字段
        fields: {
            //校验用户名，对应name表单的name属性
            username: {
                validators:{
                    notEmpty:{
                        messsage:'用户名不能为空',
                    },
                    stringLength:{
                        min:2,
                        max:6,
                        message:"用户名必须2至6位"
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '用户名由数字字母下划线和.组成'
                    },
                    callback:{
                        message:"用户名不存在"
                    }
                }
            },
            password: {
                validators: {
                    notEmpty:{
                        messsage:'密码不能为空',
                    },
                    stringLength:{
                        min:6,
                        max:16,
                        message:"密码必须6至16位"
                    },
                    callback:{
                        message:"密码错误"
                    }
                }
            }
        }
    });
    //表单验证成功
    $('#form').on('success.form.bv',function (e) {
        // $('#form').serialize() --序列化
        // new FormData(document.querySelector('#form')).get('username') --序列化
        //$('#form').data('bootstrapValidator')  获取表单校验实例对象
        e.preventDefault();
        $.ajax({
            url:'/employee/employeeLogin',
            method:'post',
            data:$('#form').serialize(),
            dataType:'json',
            success:function (info) {
                if (info.success) {
                    location.href = 'index.html'
                } 
                if (info.error === 1000 ) {
                    $('#form').data('bootstrapValidator').updateStatus('username','INVALID','callback')
                }
                if (info.error === 1001) {
                    $('#form').data('bootstrapValidator').updateStatus('password','INVALID','callback')
                }
            }
        })
    })
//重置功能,type=reset本身会重置value,此处重置样式
$('[type="reset"]').on('click',function (e) {
    $('#form').data('bootstrapValidator').resetForm()
})
});