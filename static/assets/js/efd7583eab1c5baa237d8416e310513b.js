(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('彰武县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"210922","properties":{"name":"彰武县","cp":[122.538793,42.386543],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@B@@AB@@AB@@@@@B@B@B@B@D@B@@@B@BAB@B@B@@@DAB@DAB@B@@AB@@A@@DABABAB@BA@@BADABABA@AB@@A@A@@BA@A@@BA@@D@BABAB@B@BAB@BABA@@B@@AB@@@BAB@@@B@@@@@BA@@@@@CB@@A@@@A@A@@@A@ABA@@@@B@@@@@BA@@B@@@B@B@B@D@B@@@B@D@B@BAB@D@@@B@B@B@@@@@B@B@B@BAB@@@B@B@@@B@@@B@B@@@B@D@B@B@B@@@B@D@B@BA@@B@FAB@@@B@BAB@@@B@@ABA@ABA@ABA@C@AB@@@@@B@BBDBB@B@D@BBB@B@B@B@DADADA@@DAB@BA@A@@@@@@BC@@AA@@@A@@@A@@@@@@@@@A@@@AB@BABA@@B@B@DBBBB@BBBB@BBBB@BBB@DBB@BBB@D@B@DB@@@@@B@@@BBB@@B@B@@BB@D@D@@@D@BAB@B@BADBB@B@B@D@D@B@F@B@B@D@@@D@B@B@BBB@B@BBBBBB@@AD@BAB@@@DA@@B@B@B@B@@@@@D@B@D@B@D@B@B@BB@@BBBBB@BBBB@@BB@BBB@DBBBB@DBB@B@BBB@DBHBDBBBB@BBB@BBBBDB@@B@@BB@DBBBBBBBDFBF@B@@BB@B@F@B@B@BB@@BBB@@DBBBB@B@B@BBB@DBB@D@BBB@DBBBB@@BBB@B@B@B@@@BAB@@@B@B@@@@@BAB@D@BAD@BAB@D@@ABA@@@A@EAE@A@AA@@A@@@A@A@A@@@AAA@@AA@AAA@@@A@C@ABA@@@@@A@C@A@@@A@A@@@A@C@A@A@A@C@A@E@CBE@A@GB@@E@C@A@ABC@A@A@A@@@A@@@A@A@C@@@C@A@A@C@A@A@@@C@@@CBA@C@@@ABA@ABA@AB@B@BA@@BAB@BABABABABA@@BAB@@@B@B@B@B@B@B@BAB@BAD@BAB@BAB@B@DAB@B@B@BAB@B@@@@AB@BADAB@@ADA@AB@B@B@@@B@D@B@DBB@DBBBBBBDBBBB@@@@@BB@@B@B@@@F@BBF@F@B@B@D@D@D@D@D@B@DBB@B@B@D@BBF@@@D@D@B@F@B@@@DBD@DBD@D@DBD@D@B@DBF@B@B@B@@@@@B@@@@@D@D@B@D@D@B@BAD@DAD@B@BAD@B@B@B@B@D@B@B@D@D@D@B@DAF@BA@@F@D@F@B@B@DAB@F@B@BAB@F@D@B@F@B@D@B@D@D@B@@@B@BA@@@@@@@@B@@A@@B@@@@@DA@@B@B@D@@@@@B@B@DA@@B@BAB@DAB@B@@@B@@@B@@@B@@@B@B@@@@@D@@AB@B@@@B@@@B@D@@A@@B@@@@@B@B@@@B@B@@@B@@@B@B@@@B@B@@@HAH@B@@@B@@@BA@@@@B@B@D@@AB@FA@@@@BADA@@B@B@DA@@BABA@@@A@@@@@AAA@@AC@@@@AC@@A@@CA@@A@@AA@@@@@A@@@A@@BABAB@@AB@BA@@@A@@@@BA@A@@BA@AB@BC@@@@BC@@@@@C@@@@@@BC@@@A@@FA@@@@BADAB@@@B@B@BAB@B@DA@@B@B@@@B@B@@@@@B@@@BABAB@@@@@B@DAB@@@FA@@B@B@DA@@B@B@BAB@@@B@BAB@@AB@@@BCB@BABAB@@@@B@@B@@@B@@@@@B@BBB@B@B@BB@@@@FBB@@@FB@@B@BBB@B@@@B@B@DBBBDBB@B@@BB@B@@@B@F@@@@@B@@@FA@@@@B@D@B@@@@@B@@@D@@@BAB@B@B@@BB@@@@@FA@@@@B@F@@B@@B@D@B@@@FB@@B@B@D@@@BB@@B@DA@@@@B@@@B@B@B@@@BA@@@@BBB@@@B@BB@@D@@@B@@@F@@@@@BBB@B@BBB@B@B@B@@@B@DB@@@@B@@@B@D@@@B@DBB@@@BAB@B@@@B@@A@@@AB@@@@@AA@A@@B@@A@@@A@@@A@@@A@@B@@A@@@A@AB@@@@A@@@A@@@@@@BA@@@A@@B@@AB@DA@@B@BAB@B@BAB@B@@@@@BAB@@@B@B@@@@@B@@BB@@@B@@@D@@@B@@@@@BAB@@AB@@@@ABAB@@A@@@@@A@@@@@AB@BAB@BA@@B@@@B@B@B@@@B@B@B@B@@@B@@@B@@@BA@@B@@@BA@@@@@A@@B@@@B@FBB@@@@@@@@@B@@@@@@@@@B@@@A@@A@@@@@@@AB@BA@@@@@A@@@@@@@@@A@@B@@@@@@A@@B@@AB@B@@@BA@@@@@AB@B@@A@@@@@AB@@A@@@A@@BABA@A@A@AB@@AD@B@B@BB@@BB@BB@@@B@@ADADA@AB@B@BA@@B@B@B@B@@@B@@@@A@@@A@@@A@ABA@@BA@@BA@@B@@@BABABAB@@ADABABADA@@B@B@BB@@D@D@B@B@@A@EAA@EACABADC@ABA@G@EB@A@@@@A@@@A@A@CBIBA@CBABMHGBA@@A@@KEC@AAAAAA@AA@IB@@AA@CAAAC@@AACCC@@AA@A@CBC@@@AA@@A@AC@@KCIEKIBKCAA@@AAAA@BAB@HGDCBABAHADAP@BADA@@D@BAB@DCB@@E@@@AB@@@BAB@BADAB@JG@@@@@ABCBAAA@@@C@C@E@@B@BAPBRBD@HADA@@@B@@B@D@@B@@B@@@BBB@@@@@@AB@@@B@@@@@@@B@B@@@BA@@@BB@@@B@@@@A@@@@@@@@@ABB@@B@@@@@@@@AB@@BB@A@@@@@B@@BBA@@@@@@@@BB@@@A@AB@@ABB@AB@B@D@A@@AA@@A@@A@@@@AA@@AA@@@BA@@@@@A@AFKA@@@@@@@DC@@@@A@@@@AJENGRKJMLI@@@@D@BB@BB@@@BCB@@A@@BD@BB@B@BABBD@@@FAB@BAB@B@B@HFB@FBBB@@DADABAB@DABAD@FAJCJC@@BADAAAAAA@EEBAAC@@@A@@H@@E@@DA@@BA@AJCB@LC@@@A@@HA@@@AJ@BABADA@AB@@@F@BAFADAB@DA@@B@DA@AAEBABADABA@@A@@A@@@@C@CA@@A@A@@@@@@C@AA@@A@AA@AB@@A@@AEEEG@ACA@@@BA@CCAAA@@@AA@@A@ABEBA@@@@BGC@@@@@@GCCAYOIKACB@@ABA@C@C@AAA@@@@@@AACBA@A@@A@C@@@A@CA@CC@@@A@ABI@@@A@@@AAA@@BA@@A@@AB@A@@@CBEB@A@@@A@AA@C@A@G@GBABC@A@@BA@ABA@AAA@@@@@A@@B@BU@aEWAQC@AUICAEA@@BAB@FB@@FA@@@C@@C@@@@@@@AA@A@@AA@A@@A@@@EC@A@@@@BC@@@A@@@@A@@AA@@AB@B@@@B@AADA@A@@@@@A@@B@@A@@@A@@AAAA@A@@DC@@@A@A@ADA@@@AA@@ACA@A@@@A@@DCDC@@@A@ABACA@ADA@@BAAA@@@@@C@A@C@A@@C@@@A@@@@@@AB@@@BA@A@@@AB@@B@@B@BB@@@@@@@@DC@ABCBAA@A@A@A@CAAAA@@@B@BA@@@AA@@A@@A@BA@@B@@@@@AA@@E@@@A@A@@@@A@@@@A@@@@A@AACAC@AD@BABA@@D@@@BBB@@@@@BBB@@@B@B@@@@@@BB@@@@@B@B@B@@B@@@A@AB@@@@A@AAA@@CACAA@@A@@@A@@BA@@@A@@@ADC@@BA@AB@BAB@@@B@@@B@@@BABBB@@@BAB@B@BA@@B@B@@@B@@B@BB@@@@AB@@B@B@B@@@BD@B@D@H@BA@@@@BDDB@@BABC@A@AB@BE@A@A@A@@@@@A@@B@BA@AB@B@@AB@BA@@B@@@@ABA@@B@FBF@@BB@BAA@@@@AB@@A@@A@@A@@@AACAA@AAAAAACAGJ@@AAA@AAA@@B@BAAUAI@C@CAGKACBW@@@@A@AGE@@A@@@@@@A@@A@CCIEECGCWIcYGC@@A@@@AAA@GEKEQKC@@AA@M@IAIEA@AA@@ICQEK@CAECEAA@BC@A@A@@@@GC@@D@@@GC@@@@@AB@BAAACCA@CAEDECOIOIGIEEIGUIUGSIICE@A@@AA@@@ABAB@@AAA@@BABAD@@QA@@AADA@AAAB@@A@@A@@@AAC@A@AB@B@@ABA@AA@@ABAB@@CAAB@@@A@@CA@AE@BCI@A@E@C@DQBGFIEAQEWKSEOGQGYGKCQGSGOGOGWK@AeQQIICKCEAMBIBABAD@@A@@@@@@@A@EA@BA@@BA@@A@@CAAAAAAA@AA@@ABADA@@BA@A@@A@AAA@C@A@CD@B@@F@ILGDA@AD@BAB@B@@CBABGBCBA@@F@@B@@B@B@DAB@@AB@D@@@@@@DB@@AB@B@@@@@@B@BA@@BB@@ABABAB@@A@AB@B@@B@D@@@@D@@@DABG@AAAB@BA@@BB@BBLB@@CBABC@DDDAB@@@@BEB@@F@D@@@@@ADB@HB@@A@CBC@CBABAB@BB@BBABBD@B@@A@ABA@@@AAB@@AB@A@AAA@@BA@@@GCBC@A@@A@A@@@ADA@@B@@@@@BB@@@@BA@A@CD@@A@CB@@@BB@BA@D@@F@@@@DA@@B@@@@@@AB@@AB@@BB@@AB@@@@@@@A@@A@EB@@A@@D@@C@A@@B@@@BBB@@HLBB@B@@DBLHDLIZBDDPOTUAOBQRCHCBM@GACEGCE@KD@DLJBHCBYII@EDBDABBBF@LDBFAHSDBPCFA@KAC@CBAFDFLDBBABEBICAB@BABG@KDIAKBKDCACGEAEJABGAEHABUAAB@BPJBBA@GBCBGB@ADECAEEEBCDABCDADBBAD@BABBDEJA@A@OCG@ABBB@BDB@DGBABBDBBFEH@D@BBCJ@@HBBB@DGBM@I@AJCFKCEECBCBBFFBDDAHDBENGBMAOAG@CBAB@LCBHFADBLGDKBMBILITKLMB[AEQQCOFGHSBAR[KKNGXADIZKVQZUJWLEDE@AFCB@DCBKD@B@@@BAAA@C@E@CBDBADCBGDCFA@E@ED@BGBC@CBE@CFCDCAABC@CAABC@CBCAMLMNCF@@@@@B@@@@A@@@@B@@@B@@@@ABCBABABA@CBCBEBIDCBCBCBEDEBAB@@@@BB@@@@@@@@A@@@C@@@GB@@@@@B@@@B@@AB@@@@@B@@@@@B@D@B@@B@BB@@@@B@@BA@@BAB@@CB@@CBCBA@@@AB@@@B@@AB@@@B@@@@A@AB@@@B@@BBB@B@B@@BBA@@B@@@D@B@@@@ABA@A@@@@@A@@BA@AB@BABABA@@B@D@B@BBB@BBBB@@@B@B@B@BAB@@@BA@ADCD@BAB@@@B@@@@@BDBB@B@@@B@B@@@BB@@BBB@@BB@@@@@@BA@@@A@@BA@@BA@@@@@AB@@A@@B@@A@AB@@C@AB@@A@@@@BABABA@@B@@A@AB@@@@AB@@@BA@@BA@@B@@@BB@@BB@@@H@@@@@B@B@BBB@@@B@B@BB@@@@BBB@@@B@BB@@B@@@@B@@AB@BA@A@A@A@A@C@A@@@A@ABA@@@AA@@@@AA@@A@A@ABA@@B@@ABBB@@@B@BB@@@@@@B@@@@@@@BB@BBB@BBB@@@D@BAB@@@BA@A@@@@BABA@@B@B@B@@BB@@@BB@@B@@B@B@@ABABAB@@@B@B@B@@@BA@@@@B@@BD@@BBBBBB@B@@@BABCBABAB@@@@BB@@B@BBD@@B@@B@@B@BB@@BBBBDFBBBB@BAB@BADCDAD@DBB@@BBD@D@BADABELCH@@@B@@BDDB@D@@B@BBFAJ@B@BAD@D@F@B@D@B@B@@BBB@@AD@FAD@B@@BDBBFBD@B@@@D@B@DAD@B@@@DCB@@AB@BIBA@ABBDBFDBDBB@F@DBDDBDBF@DAH@HAHCLCDAD@BBB@BBBDBFBBB@@@BBH@F@D@DBDBB@B@DBD@DB@BB@@B@@@B@@AB@B@@@B@B@BB@B@DBNFB@D@B@B@BAFAFAB@BC@AAAAC@A@CBAD@F@HBFDFBD@B@B@BCB@BEDKBAB@B@B@H@JAFAFADADADABAB@D@FDB@D@D@BCBA@AAAAA@A@AB@D@D@F@B@FCB@B@DAD@FAB@B@@@@@B@AB@@@B@@@BB@@@B@DAB@@@BC@@@AB@@@@@B@@B@@@BBB@@@@@B@@A@@BB@@@B@@@B@@@BA@@@AB@B@BAD@@@D@@@B@@@DBBB@@D@DBLBB@FBH@BABCBCAG@AAA@A@A@@B@@B@@@@@@@@@@B@@BB@B@@@@@B@@@@@B@@@@@BB@@BB@BB@@B@B@@@B@@@@BB@@@B@B@B@B@@@@AB@@@BBD@D@@@H@BBH@B@@DD@BBB@@@@@B@D@BAB@@@BADAD@@AB@B@D@B@DAB@B@@AB@@@B@@@@BB@@@@B@"],"encodeOffsets":[[125139,43759]]}}],"UTF8Encoding":true});}));