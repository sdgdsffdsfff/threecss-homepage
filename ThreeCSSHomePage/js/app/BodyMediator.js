function BodyMediator() {
    this.init = function (view) {
        $T.moduleManager.loadModule("html/footer.html", document.getElementById("footer"), null, $T.footerMediator);
    }
    // 注销方法
    this.dispose = function () {

    }
    // 关心消息数组
    this.listNotificationInterests = [];
    // 关心的消息处理
    this.handleNotification = function (data) {

    }
}
$T.bodyMediator = new BodyMediator();