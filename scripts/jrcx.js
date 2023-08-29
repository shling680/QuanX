/***** ***** ***** ***** *****

[task_local]
0 6 * * * https://raw.githubusercontent.com/shling680/QuanX/main/scripts/jrcx.js, tag=吉日查询, enabled=true

***** ***** ***** ***** *****/

const jrurl = {"open-url": "http://mobile.51wnl-cq.com/huangli_tab_h5/"}
$notify("黄历", "吉日查询", "点击查看今日详情...", jrurl);
$done();
