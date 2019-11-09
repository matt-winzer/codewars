u = "I should have known that you would have a perfect answer for me!!!"
v = ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]
Test.assertSimilar(encodeStr(u, 1), v)
Test.assertSimilar(decode(v), u)

u = "abcdefghjuty12"
v = ["abbc", "defg", "hikv", "uz12"]
Test.assertSimilar(encodeStr(u, 1), v)
Test.assertSimilar(decode(v), u)

u = "O CAPTAIN! my Captain! our fearful trip is done;"
v = ["opP DBQUBJ", "O! nz Dbqu", "bjo! pvs g", "fbsgvm usj", "q jt epof;"]
Test.assertSimilar(encodeStr(u, 1), v)
Test.assertSimilar(decode(v), u)

u = "For you bouquets and ribbon'd wreaths--for you the shores a-crowding;"
v = ["fgGps zpv cpvrv", "fut boe sjccpo'", "e xsfbuit--gps ", "zpv uif tipsft ", "b-dspxejoh;"]
Test.assertSimilar(encodeStr(u, 1), v)
Test.assertSimilar(decode(v), u)

u = "Exult, O shores, and ring, O bells! But I, with mournful tread, Walk the deck my Captain lies, Fallen cold and dead. "
v = ["efFyvmu, P tipsft, boe s", "joh, P cfmmt! Cvu J, xju", "i npvsogvm usfbe, Xbml u", "if efdl nz Dbqubjo mjft,", " Gbmmfo dpme boe efbe. "]
Test.assertSimilar(encodeStr(u, 1), v)
Test.assertSimilar(decode(v), u)

u = "Had I the heavens' embroidered cloths, Enwrought with golden and silver light,"
v = ["hiIbe J uif ifbw", "fot' fncspjefsfe", " dmpuit, Foxspvh", "iu xjui hpmefo b", "oe tjmwfs mjhiu,"]
Test.assertSimilar(encodeStr(u, 1), v)
Test.assertSimilar(decode(v), u)

u = "The blue and the dim and the dark cloths Of night and light and the half-light,"
v = ["tuUif cmvf boe ui", "f ejn boe uif ebs", "l dmpuit Pg ojhiu", " boe mjhiu boe ui", "f ibmg-mjhiu,"]
Test.assertSimilar(encodeStr(u, 1), v)
Test.assertSimilar(decode(v), u)

u = "I would spread the cloths under your feet: But I, being poor, have only my dreams;"
v = ['ijJ xpvme tqsfbe ', 'uif dmpuit voefs ', 'zpvs gffu: Cvu J,', ' cfjoh qpps, ibwf', ' pomz nz esfbnt;']
Test.assertSimilar(encodeStr(u, 1), v)
Test.assertSimilar(decode(v), u)

u = "I have spread my dreams under your feet; Tread softly because you tread on my dreams. William B Yeats (1865-1939)"
Test.assertSimilar(decode(encodeStr(u, 25)), u)