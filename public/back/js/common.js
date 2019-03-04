
$(document)
    .ajaxStart(function () {
    NProgress.start()
}).ajaxStop(function () {
    setInterval(function () {
        NProgress.done()
    },5000)
})
