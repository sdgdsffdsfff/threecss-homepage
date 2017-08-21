function IndexMediator() {
    this.init = function (view) {
        $T.moduleManager.loadModule("html/top.html", document.getElementById("menu1"), null, $T.topMediator);
        $T.moduleManager.loadModule("html/body.html", document.getElementById("main"), null, $T.bodyMediator);
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
$T.indexMediator = new IndexMediator();