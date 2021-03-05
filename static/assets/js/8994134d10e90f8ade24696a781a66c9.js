(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('港南区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"450803","properties":{"name":"港南区","cp":[109.599556,23.075573],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CA@@@@@AA@AAAB@@@@A@A@@BA@ABA@A@AB@@A@@@@@ABA@@@@A@@@@@B@@AB@A@@@@@@A@@AB@@@@@@@A@@@A@@@@@AA@@A@@A@@BABA@A@@@A@@@AA@E@@@A@@ACB@AC@A@@@AB@AA@A@@AA@A@@@A@A@AA@@AA@@A@AA@@A@BAA@@AA@@@A@@@@@@@@@AD@B@@@B@@CDAB@B@@@BABA@@@A@A@CB@AA@A@@B@B@BB@@B@@@B@@@BBB@@@@@@@BA@@BA@@@A@@B@@BBB@@BB@@@D@BB@@BBB@BB@@BBBBABA@@B@@CB@@@@@B@@@D@@@B@BCD@B@@ABA@@@@B@@A@@BA@@BABAD@@@BA@A@@@A@A@@@A@@@@@@B@B@DBB@@@@@B@@A@@B@@@@@BA@@@@@A@@@@@AD@BA@@BAB@BA@@BA@A@@@AB@@ABA@@@A@A@A@AA@AAAAA@@CA@BABA@@@@B@@@B@B@@AB@@A@@BA@@@A@@B@@BBB@DBB@@BBB@@@DB@@B@@A@@DABAB@@@@AB@@AB@@@B@BABCBABA@@B@@@B@@AB@@A@@D@F@@@BDDBB@@DDABADED@BA@@B@BB@@D@B@@ABAD@@@@A@@@A@AB@AAACAA@ABA@C@A@AFABABAB@B@@@B@@BD@B@@ABC@CDCCC@A@A@A@@@AA@B@@@BA@AB@@A@A@A@A@@BA@AAABAAA@A@@A@@@AA@@@A@@@C@A@A@AAAA@@A@A@A@@@A@@@@B@B@@A@@@A@A@AB@AA@A@@@A@ABA@A@BA@AAAA@C@A@A@@@A@@@A@@@A@@B@@@B@BB@@BABBB@BB@@@BA@@B@@B@@@B@@@B@@BB@B@@@DABA@@DABAB@@@BBB@@BBB@B@@BBB@B@B@@BBAB@B@@@B@@BBBB@B@@BBBBB@@B@BA@@BAB@BAB@BBB@@@@@B@@BBB@BBD@BAB@B@DA@AB@@C@@B@BAB@BBDB@@BB@@@B@BB@B@BBA@CDA@@BAD@B@BA@A@A@@BEDAB@BA@AB@@AAA@ABBD@@DBBBDDDBDDJFFFFDHDBBHDBBDFBB@D@@BHDDDDDDBB@@BBB@BBDBB@B@B@@@BBB@@@BB@@BB@@BD@B@D@BAD@B@B@BBD@DBB@D@BBD@JBH@JA@AH@BAB@B@D@F@D@D@BBD@B@BBDBD@@BBBBB@@@D@F@BAHAFCBABAB@B@FADABADE@A@@@@@AAA@@BA@@@A@A@@BA@ABAB@@AB@D@@@@@B@BBDBDBFBPDFBD@HBF@J@B@FBBBB@BB@@AD@DABCFCDEDKHGFC@GDMDIBEBE@EBCBIDABA@ED@B@@AD@B@DBBDFDDFFDFBDBBHHDDBB@@BB@B@B@@@BADABABC@C@CBCAGACACAE@IAGAA@A@CBA@ABABAD@B@BBFBBBB@@BDBBBB@DBD@B@B@B@@CDABC@G@A@CB@@C@AB@@A@AB@D@@BB@BBB@BB@BBBBB@FBDBDBB@BBB@DFBD@B@@@F@@CD@B@@GFA@CDCD@B@B@B@BBB@BFDFB@@BDDBFF@@DD@B@@@BBD@B@DBB@DBDBBBDBBBBDBDDB@DBBBBBB@BB@@DBBBFBB@@@B@B@B@B@B@BAB@B@@@DAFCFCBABAB@BA@@B@BAD@B@BADBB@BBBBDFB@BBBB@@@@B@FBJ@F@BBD@BDBD@B@HBDBDBD@BB@@BDB@@D@J@B@B@D@HAD@D@J@BBBAD@B@FAJCRGBAB@B@@@DBBBB@BB@BBBDHBDBBBBDBBBBBD@@@D@D@D@D@BANC@@@@D@@ABABADGBA@ABA@CBABK@C@CBC@CBA@@BC@@DA@@FAPELANAF@L@@@TBJB@@F@BBB@@@BBDD@BB@@@DHDFBDFJDFBBFDDBB@D@B@J@JANANCBB@AAEAAAA@ADA@A@@@@BA@@B@@@BBBDBB@D@@@@BBB@BA@@@@@@CEAA@A@A@@@A@@@@@@B@FF@@@@B@BB@AD@@@@A@@@@@AE@A@@AA@@AAA@A@@@A@@BA@@B@D@B@B@B@@BB@B@@@B@@A@@@A@@@@CAA@A@A@@@AA@A@@@A@@@@B@BAB@B@B@D@@@@AB@FCBADA@@BA@@@AA@CA@AAC@AAE@A@@@A@@BC@@AC@A@@AC@AAA@@@AAA@@@ABA@@BCB@@@@AB@@C@@@ABA@@@@@@BA@@@A@@@@@@FE@@B@@@BA@@@A@@BABA@A@@B@@@@@BA@@@@@@@@@@@AA@@@@@@@@@@@B@AA@@@@A@@@AA@B@@AAA@@@A@@@@B@@AAAA@@@@@@B@B@@@@@@A@@A@@@A@@@@@A@@A@@B@@@@A@@@@AC@@@@@B@@@@A@@A@@B@@A@@@@@@@@@@@AB@@@@AA@@@@A@@@A@@@@@@A@@AA@@@@@@C@@@A@@@AA@@@AAA@@B@BA@AB@B@@@@BB@@@@AAAB@@@@@B@@A@@@AA@@@A@@B@@A@@AA@@@A@AB@@@B@@@DCBA@@@C@@@@@AA@A@@@@AA@A@@B@@@@AAAC@@AB@@A@A@@@@@@@A@@BA@@A@@@@@@A@@@@B@@@@@@B@@@@@BB@@@B@@@@@B@A@@AA@@@@@@@B@@@@@B@BBA@B@@@@AB@@@AA@@AA@@@@@@@A@A@@@@@C@@B@@@@AA@A@@@@@@@@@AA@@@A@@@@@@AB@B@@@@@@BB@@@@@@A@@@AA@@@@@@@@A@@@@@@A@@@AB@@AAA@@@@@@@B@B@@@@A@@@@A@@@@@@@A@@A@@@@A@AAA@AAEB@@AC@@AA@@@@A@@A@@@A@@@BAA@@A@AA@AA@AA@AA@@@@B@@A@@@B@@A@@BA@@@@@AA@A@@AAA@@@@@BA@@@@@A@@@@@@A@@@@B@@@@@@A@@A@@AA@@@A@@A@@@AA@@A@BA@@@A@@A@@@@A@@@@@A@@@@B@A@@@@@@@@@A@@@@A@@@@B@@@BA@@@A@@@A@@A@@A@@AA@A@A@@@@A@AA@@@AB@@@B@@@@ABA@@@@@A@@B@@A@@B@@@@A@@@A@AA@BA@@@A@A@@@@AAA@@@@A@@@A@@@@@@A@@@@@AAB@@@@@BA@@@@@@@@AC@@@@BA@@@@@@A@@@@@@@AB@@@@A@@@AA@@@@@B@@@AAB@@@@@@ABB@A@@@@@A@@@@@@@@@AA@@A@@@A@@@@@AA@@A@@@A@@BB@AB@A@@AB@AA@@@@@@@@@A@@@@D@@@B@@@BB@@@@@A@@BA@@A@@@BA@@@@@B@@@BB@@@@@BAA@@@@@BAB@@AB@B@@AB@@@B@@@@@B@@@@@BB@@B@@@@@@BA@@@AB@@@B@@B@BB@@B@@@B@@@B@B@@@@A@@@@AA@@@@A@@@@@@@@A@@@@@@AA@@B@@ABA@@@A@@B@@AA@@@@@@@@@BA@B@@B@AAB@@@@@@@@A@@B@@@@@@@B@@@@A@@@A@@BB@@@A@@@@@AB@@A@@AA@@@@AA@@B@@@@@@A@@B@@A@@BA@@@@@@B@@@@A@@BA@@@@B@@@BA@@@@A@@A@@@A@@@@@AB@B@@@@@@@B@@A@@@@@A@A@@B@@@@AB@@@@A@@@@@A@@@@BA@A@@A@@@@A@@B@@@BAB@@@BB@B@B@@B@@@@@BB@@@@@@DB@A@@B@@A@@AA@@@@@A@@@A@@A@@@AAA@@@A@@A@@@AB@@@@@B@@@@@@@@A@A@@B@@@@AA@BAA@AABA@@@A@@@AA@@A@@@@A@@@@@@@B@@@@@B@@@B@@@A@BA@@BABC@@BCB@@@D@BA@@B@B@@@B@BA@@D@BAB@@@BA@@B@@A@A@@B@@A@A@@A@@AA@@BA@@A@@@@CA@@A@@@@@A@A@@@AB@@@BA@@@@@@@C@A@AB@@@@A@@BA@@@@@BB@@A@@@@@@@@A@@AB@AA@@B@@@@A@@@A@@@@B@@CA@@@@@@BB@@@@@@A@@B@@@@@@AA@@@@AA@@@A@@@B@@@@@@@A@@@AA@@A@@A@@@A@@@@C@@@A@@@@@@A@@A@@@BA@@AA@B@@A@@@@@A@@@@@@@@D@@@@@@A@@AB@A@@@@@@@@BA@@@B@@B@@A@@BA@@B@@@BAB@BC@@BAB@@@@@BA@AB@@@@A@A@C@@@@@@@A@@AA@@@A@@@@B@@A@@@A@@@@@@B@B@B@@@BAB@@A@@B@B@BB@@ABBB@@BA@@@BBBA@@@A@A@@@@@A@@@AB@@@@ABA@@@@BBB@@@@B@B@@@@BBB@@BB@@BA@@@@BA@@@@@A@@@AA@@@@@BA@@B@@@BAB@BA@@@@B@@@@A@A@@@AA@@AB@@@@A@@@@B@B@@@@@@A@@@@B@@B@BB@@@@ABB@@AB@@@@B@@@@A@@B@@@@A@@BB@@@A@@BA@@@@AAAAB@AAAA@@A@CA@@@BA@@@@@@@ABA@@@@@AB@@@BA@@BA@@AAB@@A@@A@BA@@BA@@@@AA@@@@@A@@BA@A@@A@@A@AB@@@@@@@B@@B@@@ABA@A@@@@@A@A@@BA@@@A@@@B@@B@@@@BB@@@B@@@B@@@B@B@@@@@@A@@@AB@@@B@@A@@@@A@@@@@@A@@@BB@@AB@@@@A@@@@@A@@@@@@@@@@A@@@@A@@@A@@AA@@@@@AB@@A@@@@A@@B@@A@@@@C@C@A@@@@B@@@BA@@@A@@@@@A@@@@@@@A@A@@@@AB@@@@@AA@@AB@@@A@@A@@@A@@A@@@@ABA@@@@AC@@A@A@ABA@@BCBC@@AA@@@B@@AA@@AB@@@A@@@@@A@@AAB@@A@@@A@@BA@@@@@A@@@AAA@@@A@@@A@ABA@@A@@@@@A@A@@@@A@AB@@AAA@@@@@@BA@@@B@@B@@@@A@@@@AA@@@BA@@AA@@@A@@@A@AAA@@AA@@@CBAA@@@@@A@@@@B@A@@@@A@@AA@@@@@A@@@A@@C@@@@@@@AAB@@@BAD@B@B@@A@@@@BA@@AA@@A@@@A@@AA@A@BAA@@@@AA@AB@@@@@@AA@@@@@@@@@@A@@B@@A@@@@B@@@B@@@B@@@B@@@@A@C@@@@B@@@BA@AB@@@@@@@B@@A@@@@A@AA@@B@@A@BB@@@@@B@@@@AB@@@@A@@@AB@@ABAAA@@@A@@@@@AA@@@@@@A@A@@@@@@@@A@@A@@@@@A@AA@@@@@@AB@@@@@@@@@@@@@A@@@@@@@@@@A@@@A@BBA@B@A@@@@@@A@@@@A@@@@AA@@@AB@@@B@@@B@@@@A@A@@@A@AD@B@@A@@BAAA@A@@A@@A@@@@AB@@ADC@@AA@@@A@@@AB@@@AA@@AAA@@@@@A@A@@@@A@@A@@@AA@@@AA@@@@@@@AA@@@@@@A@@@@@A@@@@@@@AA@@@A@@@@@A@@A@BA@A@@B@@AAA@@BAA@@ABAB@@@@@@A@@@@@AB@@A@A@C@@BAB@@@@@@@@@@@@@@A@A@BBA@@@@@AAA@@@@BA@@@C@A@@BA@@BB@@BAB@@A@AA@@@@AB@@@BC@@@@@@AA@@@A@@B@@@@CA@@C@@C@@@AA@E@@BA@@@A@A@A@CA@BA@@BA@ABA@ABAB@@C@A@@AA@AAAAA@AAA@A@@@CA@@E@@@@@A@@@@@@@@B@@@B@BAB@@AB@@A@@@@B@B@@AA@B@@A@@@@@A@@@@B@@AB@@@B@B@B@@@@@B@B@BA@@BB@@DAD@@@BA@ABA@@@C@@@CBABA@A@@@@BAB@@@B@BAB@BA@@@A@@@ACC@@@AB@@@@A@@A@A@@@@@@AA@@AAA@AAA@A@A@AA@@AA@@@AA@A@@@@A@@@C@A@C@@AA@A@@@CA@@CA@@A@C@A@ABCAA@ABAA@@@@@AA@AA@AA@@A@@@A@@@@AA@@@@AA@@A@A@A@@@@@@B@@A@A@@B@@@DA@@BA@@@A@AB@@AB@@A@@@C@@@ABA@AAA@@AA@AAABC@@@C@A@@@@A@AAAAAAA@@@ACAA@@@@A@@AA@AB@@@AA@A@A@@@AB@@A@@@@AA@@@@AA@@@@AA@A@A@@A@A@@AA@@@@@@AA@@A@@@ADE@@BA@AA@BA@@DAB@BABA@@@@B@@A@A@@@@AA@@BA@@@@AAA@@@A@A@@@A@@A@BAA@@BAA@@A@AA@@@@@AA@@A@@@ABA@A@ABA@@@AA@B@AA@@@@@A@@A@@A@@@@@AB@A@BAA@@@@@AA@@@A@@@@@A@@@A@@A@@@B@@A@@@A@@@@@A@@@@@A@@AA@A@A@@@A@@@A@@@AAC@@@@@@@@AABGE@AAACAC@@AA@@AAAA@@BA@AAA@@@A@@A@AA@@AAABAA@@A@@A@A@AABA@@CC@@A@CC@@@CA@@@AA@@@A"],"encodeOffsets":[[112298,23210]]}}],"UTF8Encoding":true});}));