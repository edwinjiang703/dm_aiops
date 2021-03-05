(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('海城市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"210381","properties":{"name":"海城市","cp":[122.685217,40.882377],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BQDK@I@KACMSMKQGOC[AIBIGAIDECU[YKEKGECCGBIJKCIKCMAQKIIGGOGGDGHOHGLCFCJCJIHIDSHIBKLONOJ@@AA@AABA@@@ABCB@@A@A@@@A@@BC@AB@@ABA@@@AAA@A@@@A@A@A@@@A@A@@@@@A@A@C@AB@@@BA@C@C@@@@AA@@@CA@AA@C@A@@A@@AAA@A@@A@AA@A@A@C@A@AA@@AA@AA@A@AAC@@@A@@@@B@@ABA@C@C@A@@@A@AAAAA@@@AB@@CDEB@@@BC@A@C@@@CBABA@@@@@A@A@A@ABC@@@A@A@A@ABA@A@A@@@EB@@CAA@@B@@ABA@A@@B@BABAB@B@D@FABABABAB@BC@@B@@@B@@@BABABA@@@A@A@C@A@@BABCRADGHKHKBQAWAKBMBKFQFIAOA@AIBIFOLSNCBG@A@C@C@A@@AA@AA@@@AA@@AA@@A@@CAA@@@AAA@A@A@@@A@@@AA@@@@GBC@AB@@@@A@EBC@@@@@AACBAAAAA@@AAA@@@A@@@AB@@@BA@@@@@@B@AA@AAAAA@AA@A@@@EBC@A@@@A@BDA@@D@@@F@D@BG@BB@BC@A@@@@BA@@BA@@@A@@@@@@@A@AB@@@@A@@BA@A@@BAB@@A@@@ABA@@@@BABED@@CBA@A@@@@BF@@@B@B@B@D@B@B@HBDBB@B@B@BDB@AB@@B@@BBBHB@B@@BB@B@@@B@@@BB@@B@@@@@B@@BBBB@@AB@B@BB@@@ABA@AB@B@BA@CBC@@@AB@@AD@B@@B@BB@@BBDAD@B@@@@@BB@BBB@@BB@@@B@@@BB@@@@B@@@BAB@B@@C@@@@BBDB@B@BB@D@B@DBBBBB@DB@@B@BB@@B@@BB@D@BB@@BDBB@B@B@B@B@B@@@BA@@@AAA@AAA@@@ABBBA@A@A@A@@@@@@AAA@B@AA@A@A@CAC@@@@@@@@@AA@@ABA@AAA@A@CA@@@@@A@A@@@@A@@@AAEEA@AAAAADADAAA@@@@@@@@@@BBB@@@BCB@BA@A@AB@@A@A@A@A@CBAB@@@BA@@B@@BDADBB@BA@@@BBCB@@@BABBB@@BB@@BBB@@B@@CB@B@@AB@@@BB@@@B@BB@@BB@B@@DDB@@@BBB@@@BB@@@BB@B@D@DB@BB@@BBBBBB@BB@@B@B@@BBB@B@@@@B@BBBBBB@BBB@@@D@B@@@@@B@BB@@@A@@N@PAH@L@BA@AHCFA@KBSBgBQBMAKCG@E@IHQLMDGBUBWBG@@BBBCBE@G@@@E@A@@@A@C@@@@@BDDB@BBDJLBDBBFHFFBBDFBADD@@@@@BA@A@@@BBDDB@@@BBBBA@GDBB@@@@BFBBABAD@@@B@DDJBBBDGBAAAB@@@B@@AB@@@BB@CBGBA@AAC@CBC@@B@@AB@@@@BD@B@@@D@@@BBDE@@BA@BFKBA@@B@BDH@F@@@@OBA@AAA@A@@@@@CA@@CBA@A@@@A@E@GDC@C@@@ABC@@BBBBDFJ@BA@FFBBBDDB@@@@BBBBBB@@JD@H@@@FOFABA@AL@H@B@F@BBDDF@@HHFLFAFJGBFXCD@BADC@GBOBEA@ACAO@A@@DA@MBE@KBEDA@A@A@A@@BE@E@CAA@@@A@EB@@A@@@@@@EAAA@@AA@@@@@A@A@AGG@A@E@ECA@@@@AAAA@@AAA@@@@AA@@A@@@ABA@@@ABC@@DA@@AA@A@CAAACCC@E@GAA@@@@@@BCAAB@@@B@@I@CBA@AAA@AA@AAA@@@A@@@@@A@@@@A@A@@@@A@A@C@KIAQ@ADAB@@@@@B@BA@ABABC@A@ABC@AAA@E@AAA@CCA@@@@AB@@A@AA@CC@@AAC@A@AAA@ADABCBA@K@E@A@A@AB@@BB@@F@FBBBBBBB@BADEDIFAD@B@BBB@@BBD@B@D@FEFCDAB@H@DBDBBD@D@BEJAFAF@FBBDDPFB@BD@B@D@@ABCBGDSDEBED@BCBAF@B@BBBB@B@FAHAHAF@FBLBHFHDBFFJDF@B@B@@CBA@AAGCIGEAE@CAABA@@@ABAB@BBDBD@BLJNLB@HDDBF@FCDEHGFCHCTC@B@RBDFBF@DALODAFBFJJLNVFBNADBHB@@B@@@B@BBB@@@@@@B@@@B@DB@@BBB@B@@@B@@@D@B@@@B@BCD@B@BA@@B@@AB@@A@@@AB@@AA@@@@A@@AB@@A@@BABABA@@@@@A@A@A@ABA@@@A@@A@@A@AA@@@@@@@AB@BA@@@@B@@@BBD@BA@@DAB@@AB@@ABA@A@CBABC@@@AB@@AB@B@BA@@B@BBD@D@BA@@B@B@@AB@B@@@B@@@B@@B@BBB@BBD@D@B@B@J@D@B@B@@@BB@@BB@@@B@BB@@@@@B@B@B@B@BAB@@@B@@@@@@B@@@B@B@B@@@B@@@B@B@B@@BB@@BB@@@@@B@@@@AB@@@@A@A@A@A@@@AA@@@A@AACAA@@AA@@@@A@@@A@@@AB@@@BA@CBADBHFHPLNJ`CLGXHVHRF@@@@DBDB@HBB@@@@DDHBNAJA@@@@BAHBBF@HBRDFLFPHJJTBN@JBPRJLAPETCVBFBBNDLIJALCHCPGNKNIJC@@@@FAPCFANEJAPGJKBCPKHILEPCV@D@^CbA@@PEJCJG@@@@B@BC^SLABA@@B@F@@@@@D@@@@@BAF@HC@@JCFAJADDB@@A@A@@AA@CB@BABBB@BDB@@@HC@@DBDBBBB@@@BA@A@ADA@@B@D@@@BBB@D@B@BBFA@@FEB@@@B@@@BDBDBBB@FA@@BA@@B@B@@B@BBBB@BBDBD@B@@B@@B@BA@@@CB@@@BAB@BBB@F@DBB@B@@@B@@A@@@C@@@A@A@ABAB@BAB@@@B@@@@C@AA@@AB@AAB@AC@ACAGGAAE@@@BA@AJEAAEC@@@@B@@A@@@@A@AB@@A@@A@@A@@@E@@@A@@B@@@@@AAA@@A@AAAADA@@AE@@B@B@B@@@@@@A@@A@@A@@@@@@AAA@@@AA@@AB@@@AIICAA@@CA@AAA@@ACC@AA@C@@AACAA@AA@A@EDA@AG@@AA@@@ABC@A@AAAECAA@K@@A@A@AB@@CBAB@BC@AAAB@BABGDA@A@EAA@AHA@A@OEEAAB@B@B@BGDA@@@AEA@A@A@@BABA@@DA@A@@C@AE@@@AA@AB@@A@A@ABAEGAAA@AB@@AAEE@@A@A@AAA@AA@AA@@@A@ABCAA@C@E@A@A@C@@@CA@@A@@A@@@A@A@A@@@AACCAFCB@JC@ABA@A@A@A@@JC@ABA@A@ABANAB@BA@A@ABABA@GBA@@DAD@AMBAB@H@@B@BB@HA@BB@B@B@B@HCDA@A@@@AFAB@B@B@B@@@BBB@FBB@AA@@AAB@@ADA@ABA@A@ABAB@BBB@@B@@B@B@B@B@@AB@B@@@B@B@@BB@B@@@B@@BB@@@B@@AA@@AB@@AAA@@@A@A@@BA@@BA@AB@@AB@@@B@B@B@D@@@B@BAB@@@B@B@B@@A@A@A@ABAB@BAB@B@B@B@B@@@BAB@@@B@B@B@@@BBBA@@@C@@@@BA@A@@BA@@BA@A@A@@@AB@@A@AA@BAB@@@D@B@BB@BB@@B@@BB@ABABAB@@ABA@@BA@@B@BA@@B@BA@@B@BA@A@@BA@@@AB@B@DABB@@BB@B@@BB@B@@B@@BFCB@D@BBD@H@JCB@@@BA@A@@@ABA@AB@BAD@@@B@@@BAB@@AB@@@B@DBBA@@B@@@B@B@B@B@B@B@B@@@D@@BB@B@@BB@@@B@DBB@B@BA@@B@B@BBB@D@D@@BB@BABA@ABA@@BABAD@B@D@B@B@D@BBB@B@DBBAB@B@B@D@DBFBJFB@B@@@D@H@LDFBB@D@HATAH@HBF@FDD@^LDAJIFIJKBG@IIIQKKECIEICEDQDE@@@@DADACICICEHSXFNBNCD@@@@@FCJGJCHCJCFABC@EEECIIEKMICMGIGCMAIDQLQLMRQNKTMREVILM@KFICCAIFSFIHM@@DK@CBCDUGMMOKSWSIKCIBI"],"encodeOffsets":[[126072,41586]]}}],"UTF8Encoding":true});}));