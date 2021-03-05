(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('康县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"621224","properties":{"name":"康县","cp":[105.609169,33.329136],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GEEIECCEEAGCI@I@KCA@ABAB@FCH@B@B@D@@BBBB@@@D@BDF@@@D@DAHAB@B@@@DAB@B@@BB@@BBB@BD@@@BA@@@E@@BA@@@@DA@AB@@AB@DADA@@@ABA@A@@BCBAB@BABAB@B@DADABABAB@@@BDBB@BBB@@B@@@BAB@@ABA@ABAB@B@@BBB@D@B@D@B@BBBBB@BBF@D@B@B@BADAFA@BBBB@BBB@BBB@BDBBBBBBBBD@@BB@@B@@@B@@BBDDDB@BB@@BAB@@A@ABC@A@AB@F@H@@AB@B@D@B@B@@KBEBABA@AAA@KDA@C@A@@@ABCJA@AD@@@DBB@BAB@B@BBB@B@BAB@D@@@@ABABCB@@AB@@@BA@@@A@A@A@A@AA@@AAC@A@A@ABADA@A@@@A@@@C@A@@@C@@@IBC@@@CB@BC@E@C@@@ABABAFAF@BAD@@@BA@CBA@CBA@@@ADA@@BA@AB@@BBBD@B@@AB@B@@BBBF@@AB@B@B@D@@@@AB@@A@@@BD@B@@AB@B@B@@A@ABCBCBAB@@AB@@AB@@C@A@A@A@@@CB@@CDA@@@AB@B@BABA@@@@DABA@@B@BA@AB@DABB@@BABBBA@@DAB@BABCD@B@@@BABADA@@@AD@@@B@B@DA@@B@@BB@BAB@@ABCB@DA@@@ABAB@@AB@@A@AB@@@B@@@B@@ABA@@B@@CB@B@@AB@BA@A@A@A@C@CBA@A@CAA@A@C@A@ABABABCD@BCDADA@CAC@@@@B@@ABCBA@ADAB@BG@ABABA@A@ABA@A@E@@@AD@BAB@BBBAD@@@BCB@@ADABCDA@ADA@A@AAA@CAA@@@@@A@@AABA@@@C@AA@@A@@B@@ABAB@@@@AB@@C@@@A@@@ABEDADAB@@A@A@A@CFEDA@A@CAC@A@AAA@@@@AEA@@C@AA@@A@A@A@C@AA@@@@AB@BA@ABA@A@@BA@@@BB@BA@@@@DADBB@B@@BB@@@B@B@@ADABCBABABABC@@BA@@BA@@BA@AB@@A@@BCFCFAB@DCJAB@@@@C@C@A@@@ABA@@BA@E@A@@@CDA@@B@@@B@BB@HH@@BBA@@B@BA@@B@@@BBBDDFDBB@B@D@@AB@B@@BDB@@B@@A@@B@@@DA@@BAB@@AB@@ADAB@B@B@B@B@B@B@B@@@B@BA@@@C@A@AB@@AD@BABAB@BABCB@B@@@@@BBD@@BBDF@BBBB@FD@@BBBBB@BBB@D@BB@@BD@HBF@@@D@@AD@B@B@BBBBD@B@@@B@BABCDABCBAB@B@@@@@BBBB@@DB@BB@@DB@BB@BB@@B@@B@BB@FFB@DBDBBBB@@@F@@@BBBB@BB@D@B@F@B@FB@@BBBBFDB@DBB@FDB@BBB@@@@B@B@FC@ABA@@B@@@BCDAB@BA@@B@B@@A@CB@@@B@D@B@BA@@@@F@@AB@@A@ABA@@@BBBB@@@B@@BDB@EDCB@@EB@@CBAB@@@BB@@@B@@BB@@B@B@BBB@BBDBBB@@@HB@@BB@@BBBBDBBDB@BDBB@B@B@@@B@BABABAD@B@BA@ABAB@@ADAFAB@BABAFADABCDABCJCDABCDABA@A@@BAAABC@EACAAB@@A@@BADADAFCH@DCFAB@BAD@@@DBB@D@D@BA@ABGFCDAB@@A@ABC@@@ABABAAA@AA@AA@@@A@A@@BCFAD@@ABA@ABEDABADAB@BABABABA@A@CAC@@@A@A@A@A@A@G@A@E@CAA@@@A@A@E@EA@@CBA@A@AAA@CA@@C@AB@@@@@@AB@D@D@@@BDFBD@B@@BDBDBD@@@BHH@@@B@B@@@BABAB@@@BBB@BAD@B@B@@@B@BBB@D@H@@ABADAB@BBB@B@@@B@B@B@BA@BBA@AFAB@BB@@B@BADBB@B@BABBBBDBBDBBBD@BB@BB@DFB@@@B@@A@A@@DEB@BB@@@@@B@B@F@F@B@BB@@BBBD@@@@B@@AD@@BB@B@B@D@B@B@B@DAF@BBD@BAB@B@BB@@@BBB@@@B@@@DCB@@@FBB@@@B@B@BAB@DCBBB@BAB@BAD@B@B@@B@A@@@@@C@@@@B@B@H@DBB@BBB@BBB@HB@@BB@@@D@B@@@BB@@B@@@BBB@@AB@BBB@@H@@BLFBDDBBBB@@B@@@B@DBB@@BBB@B@HB@@BB@BBBB@BB@@@B@@BB@BDBDB@B@@@BAB@@BB@DBBBD@BBB@B@BBB@D@@@B@DB@@BB@@B@BBD@@BD@B@B@DBD@BBBFH@@D@DAFCBADADAD@D@D@BAB@BABAB@BAFADCB@D@FBB@@B@@@B@BB@FB@BBB@D@DBBBB@@D@@@DB@@BAB@@@BADCB@FAB@FCB@@ABAB@BAF@BABABA@@@@@A@@AAA@GAA@A@C@I@ABCB@@A@A@A@AA@@C@AB@@A@A@AA@AAA@A@A@AB@BCDCBAB@F@@@BAFADCBAB@BABAB@B@@@BABEBA@AFAFABAB@FBB@B@B@D@DAB@BA@@BCB@@AB@B@DA@@B@@ADADEBA@@DAB@D@B@B@DB@@DBB@B@B@B@@@DA@@B@@@D@BBFB@@B@B@@ADAB@@@HAB@B@DAB@B@DA@@BABCBA@@@@DADA@@BA@EB@@ABE@A@A@AB@DA@@BA@A@AB@B@BCB@BAB@BAB@@ABC@@DAB@HAB@BAB@B@@@B@FAFABAB@B@JAD@B@BABAD@@@BBB@D@B@BA@@DABABCBA@AB@B@B@B@DB@@DDB@B@B@D@@@BADAFAB@B@FBBAB@B@@@DCBA@A@@@EBA@CBABADCB@B@B@@@B@B@BD@@@B@@AFAB@BAB@B@B@@BB@@B@DBJAF@@AB@BAB@BCB@B@B@B@BBDBBB@@B@@A@A@ABAAA@A@@@ADEBA@A@@@AA@CAA@@A@@@A@ADAB@B@B@@@D@DBDA@@BBDBBB@BB@BD@BBB@@FBB@D@@@D@DABBDADAB@D@@@BBB@BD@B@B@@ABABAB@@@B@@BBBBB@B@B@JC@@D@H@DBB@DB@BB@@D@BA@@@A@CBA@@@ABB@@@@@@BBBBAD@D@@@D@@@B@@@BBBB@@B@D@BAB@@A@ABCBA@A@@B@BB@@@B@@@DA@@DA@ABABABE@C@A@@@@BAB@B@B@@BBBBB@B@BBB@F@DAF@B@B@@@B@@BB@ABABA@@BB@@BB@@BB@D@D@LAB@D@B@@@BBB@DB@@B@@B@BAB@@AB@B@@@B@B@BBB@@B@DADA@@@AB@@A@C@@B@@@DBBBDB@@B@@AB@@ABA@A@@DEBA@@@AB@@@D@@AFAD@HAF@D@B@@@B@@@@BBB@@DFB@BJ@@B@BB@@B@@AB@@A@A@A@A@@BAB@B@B@DAD@BADCBABABC@AAAAAAA@AB@@AB@D@BBFDBB@@BA@@BA@C@@BA@@@ADE@C@I@@@@@AB@B@B@B@@AB@@CBA@@B@@@BB@@B@B@BA@@B@@AAA@AC@AA@@@A@@@ABAB@@AB@BB@@B@BB@BBBB@DBB@@@@@BA@AB@B@D@B@DBDBB@@BB@B@B@B@B@@@DA@AB@@AB@BAD@B@B@BABAB@B@@@D@BBB@B@B@D@BB@A@@B@DABABBAIAIIO@AECGGCCGCSMGAIGAAAACGBE@E@GAGAEGICECEAECEBIBMFK@GBE@ABI@E@CBI@KCG@ICEAECM@CACACCEIAGAGBA@C@IAI@@@@@IDQBIDEBA@K@@@@@I@K@K@I@GB@@E@C@EBEDCBABCBG@A@IAGCKCCACCAEDCDEHGFGDGJMFGFGBABCFCHGDAFCFEDCFCDCBGCG@CAEKECC@IBC@ABGFGFEFEDCDABALEN@N@HAJCDABGCC@GBGBA@AHEFCFAHAFAJAT@B@H@NEHEDGFEFEFADCFAPA@@LDLBP@HDH@FBJ@F@L@F@HAHAFABADABABAFGLKLIHCDALCHC@@NGFEDI@GBGAEBE@@@GAG@GBG@KAGBC@E@CAEIIEACBABCFGDEBAB@@AB@@@B@J@D@@ADABA@ABABBBBBBBBDBB@B@B@@ABA@EAEAC@C@A@CB@B@B@BBBDBJH@BD@FADB@B@DCBGBEFBDAB@BA@ABABC@CBAAC@AA@AAC@A@@@A@E@ABCDAA@ECA@CACCCCAA@@@@DGLM@@KG@AGEIAECIGEECE@EAADEDCDAF@NFFHFBHDDBFADCDABCCCEACCEEACBGBCBABG@@TBHE@CAE@AECEBG@GG@@GCACBGAM@CBCFCDCDGBC@@FCFC@AEA@A@CAAEAG@G@CCACAGAI@A@EFGHGDCHADA@E@IBGBEAAECEG@@@S@GEGAICGECCCOMKM@@EGGECC@@AAGGEEEECECEEGECGGGCG@ADCBGBMHIDGBGBA@G@CCICCCGCEEICWKKGEAEAC@GEGACACAIAGEIEICIEKAGCA@IAG@IAG@GBE@C@GAI@SCGAGAG@CA@@GAE@EAE@E@GC"],"encodeOffsets":[[108193,33685]]}}],"UTF8Encoding":true});}));