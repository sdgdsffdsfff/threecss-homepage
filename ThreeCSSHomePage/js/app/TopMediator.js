function TopMediator() {
    this.init = function (view) {

        var menu = document.getElementById('menu1'),
            WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange' : 'resize';

        function toggleHorizontal() {
            [].forEach.call(
                document.getElementById('menu1').querySelectorAll('.custom-can-transform'),
                function (el) {
                    el.classList.toggle('pure-menu-horizontal');
                }
            );
        };

        function toggleMenu() {
            // set timeout so that the panel has a chance to roll up
            // before the menu switches states
            if (menu.classList.contains('open')) {
                setTimeout(toggleHorizontal, 500);
            }
            else {
                toggleHorizontal();
            }
            menu.classList.toggle('open');
            document.getElementById('toggle').classList.toggle('x');
        };

        function closeMenu() {
            if (menu.classList.contains('open')) {
                toggleMenu();
            }
        }

        document.getElementById('toggle').addEventListener('click', function (e) {
            toggleMenu();
            e.preventDefault();
        });

        window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);


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
$T.topMediator = new TopMediator();