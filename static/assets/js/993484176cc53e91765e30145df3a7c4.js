(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('柏乡县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"130524","properties":{"name":"柏乡县","cp":[114.693425,37.482422],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CCGEIEIA@BWBIB@B@FCBC@AB@DEB@JB@JBDD@@FL@BGD@@CBAH@DBN@FB@BFABCAAB@F@F@@@B@BAD@P@DAJBBDFBHDF@B@@E@QCM@ABM@BFB@B@@H@BDFBH@@@AF@@DBBEJABAH@D@BAF@@@@@DLB@BCF@FCD@BBJFDCFE@EB@@@@RTFBR@PBTAJ@\\FFDLBLDJBN@BJ@FHJBBBBBDHPBH@@DH@@@@@@BF@@@@DNBFBHBDPDDHAF@BTJPARAJAJARABAB@B@HQBKJIBQBC@@@GHSHU@U@MCICOAEAEDGDEBIBIBGBGDUIUAAAA@ACCKKCAA@KE@A@A@G@M@K@AFGLA@E@GAE@CA@SD@KAAGCA@@@@@AAC@AGAAC@M@@@G@GBEDEAI@CBCD@BKDGBCBKBC@AAA@A@C@C@[IMISQAA"],"encodeOffsets":[[117414,38313]]}}],"UTF8Encoding":true});}));