'use strict';const _0x3633a7=_0x30e9;(function(_0x51a9b2,_0x21b40b){const _0x2567b7=_0x30e9,_0x5c5450=_0x51a9b2();while(!![]){try{const _0x12aadf=parseInt(_0x2567b7(0x16e))/0x1+parseInt(_0x2567b7(0x170))/0x2*(-parseInt(_0x2567b7(0x168))/0x3)+-parseInt(_0x2567b7(0x14d))/0x4+parseInt(_0x2567b7(0x11d))/0x5+parseInt(_0x2567b7(0x175))/0x6*(parseInt(_0x2567b7(0x16c))/0x7)+-parseInt(_0x2567b7(0x157))/0x8*(parseInt(_0x2567b7(0x13a))/0x9)+-parseInt(_0x2567b7(0x13b))/0xa*(parseInt(_0x2567b7(0x16f))/0xb);if(_0x12aadf===_0x21b40b)break;else _0x5c5450['push'](_0x5c5450['shift']());}catch(_0xa83000){_0x5c5450['push'](_0x5c5450['shift']());}}}(_0x9b79,0x63016));function _0x30e9(_0x2737e5,_0x4221be){const _0x9b79e7=_0x9b79();return _0x30e9=function(_0x30e9e2,_0x5b4526){_0x30e9e2=_0x30e9e2-0x119;let _0x42b0fd=_0x9b79e7[_0x30e9e2];return _0x42b0fd;},_0x30e9(_0x2737e5,_0x4221be);}let {WAConnection:_WAConnection}=require(_0x3633a7(0x11f)),{MessageType}=require(_0x3633a7(0x11f));const qrcode=require('qrcode-terminal'),figlet=require(_0x3633a7(0x137)),fs=require('fs'),{color,XinzLog}=require('./lib/color'),{serialize,serializeM}=require(_0x3633a7(0x12c)),myfunc=require(_0x3633a7(0x12c)),afk=require(_0x3633a7(0x11c));let WAConnection=myfunc[_0x3633a7(0x15d)](_WAConnection),_afk=JSON[_0x3633a7(0x147)](fs[_0x3633a7(0x14c)](_0x3633a7(0x151))),welcome=JSON[_0x3633a7(0x147)](fs[_0x3633a7(0x14c)](_0x3633a7(0x123))),setting=JSON['parse'](fs['readFileSync'](_0x3633a7(0x15b))),blocked=[];global[_0x3633a7(0x16b)]=new WAConnection(),xinz[_0x3633a7(0x121)]=_0x3633a7(0x142),xinz['baterai']={'baterai':0x0,'cas':![]},xinz[_0x3633a7(0x12a)]=!![],xinz[_0x3633a7(0x146)]=![],xinz[_0x3633a7(0x12b)]=_0x3633a7(0x156),require(_0x3633a7(0x143)),nocache(_0x3633a7(0x143),_0x1aee61=>console[_0x3633a7(0x120)](color('\x27'+_0x1aee61+_0x3633a7(0x119)))),require(_0x3633a7(0x125)),nocache(_0x3633a7(0x125),_0x4f1f80=>console[_0x3633a7(0x120)](color('\x27'+_0x4f1f80+_0x3633a7(0x119)))),require('./help/ind.js'),nocache(_0x3633a7(0x173),_0x4bb8cf=>console[_0x3633a7(0x120)](color('\x27'+_0x4bb8cf+_0x3633a7(0x119)))),require(_0x3633a7(0x14b)),nocache(_0x3633a7(0x14b),_0x41672e=>console[_0x3633a7(0x120)](color('\x27'+_0x41672e+_0x3633a7(0x119))));const start=async _0x2d73e0=>{const _0x258ef0=_0x3633a7;xinz['logger'][_0x258ef0(0x174)]=_0x258ef0(0x148),console[_0x258ef0(0x120)](color(figlet['textSync']('Xinz\x20Bot',{'font':_0x258ef0(0x15c),'horizontalLayout':_0x258ef0(0x171),'vertivalLayout':_0x258ef0(0x171),'whitespaceBreak':![]}),_0x258ef0(0x145))),console[_0x258ef0(0x120)](color(_0x258ef0(0x158))),xinz['on']('qr',_0x560b41=>{qrcode['generate'](_0x560b41,{'small':!![]}),console['log'](XinzLog('Scan\x20QR\x20~~'));}),fs[_0x258ef0(0x166)](_0x2d73e0)&&xinz[_0x258ef0(0x159)](_0x2d73e0),xinz['on']('connecting',()=>{const _0x12d1e1=_0x258ef0;console[_0x12d1e1(0x120)](XinzLog(_0x12d1e1(0x12e)));}),xinz['on']('open',_0x115f19=>{const _0x269020=_0x258ef0;console[_0x269020(0x120)](XinzLog(_0x269020(0x129)));}),await xinz[_0x258ef0(0x14e)]({'timeoutMs':0x1e*0x3e8}),fs[_0x258ef0(0x16d)](_0x2d73e0,JSON[_0x258ef0(0x169)](xinz[_0x258ef0(0x136)](),null,'\x09')),xinz['on'](_0x258ef0(0x172),()=>{const _0x47e404=_0x258ef0;console[_0x47e404(0x120)](XinzLog(_0x47e404(0x11e)));}),xinz['on'](_0x258ef0(0x12d),async({reason:_0x533d12,isReconnecting:_0x3e9d8f})=>{const _0x4e56d8=_0x258ef0;console[_0x4e56d8(0x120)](XinzLog(_0x4e56d8(0x138)+_0x533d12+'\x0aMencoba\x20mengkoneksi\x20ulang\x20:'+_0x3e9d8f)),!_0x3e9d8f&&console[_0x4e56d8(0x120)](XinzLog(_0x4e56d8(0x124)));}),xinz['on']('CB:Blocklist',_0x67eb6c=>{const _0x2d30d2=_0x258ef0;if(blocked[_0x2d30d2(0x13d)]>0x2)return;for(let _0x413aef of _0x67eb6c[0x1][_0x2d30d2(0x144)]){blocked[_0x2d30d2(0x160)](_0x413aef['replace'](_0x2d30d2(0x11a),'s.whatsapp.net'));}}),xinz['on'](_0x258ef0(0x135),_0x5392ad=>{const _0xd50651=_0x258ef0,_0x3a3e47=_0x5392ad[0x2][0x0][0x1][_0xd50651(0x152)],_0x4bffeb=_0x5392ad[0x2][0x0][0x1][_0xd50651(0x134)];xinz[_0xd50651(0x126)][_0xd50651(0x126)]=_0x3a3e47,xinz[_0xd50651(0x126)]['cas']=_0x4bffeb;}),xinz['on'](_0x258ef0(0x128),async _0x107e40=>{const _0x54a93d=_0x258ef0;require(_0x54a93d(0x150))(xinz,_0x107e40);}),xinz['on']('chat-update',async _0x246bd1=>{const _0x2d321f=_0x258ef0;if(_0x246bd1[_0x2d321f(0x131)])for(let _0x52c3e5 in _0x246bd1[_0x2d321f(0x131)]){(_0x246bd1[_0x2d321f(0x131)][_0x52c3e5][_0x2d321f(0x165)]===_0x2d321f(0x13e)||_0x246bd1[_0x2d321f(0x131)][_0x52c3e5][_0x2d321f(0x165)]===_0x2d321f(0x14f))&&(afk[_0x2d321f(0x162)](_0x52c3e5,_afk)&&(_afk[_0x2d321f(0x153)](afk['getAfkPosition'](_0x52c3e5,_afk),0x1),fs['writeFileSync'](_0x2d321f(0x151),JSON[_0x2d321f(0x169)](_afk)),xinz[_0x2d321f(0x16a)](_0x246bd1[_0x2d321f(0x155)],'@'+_0x52c3e5[_0x2d321f(0x154)]('@')[0x0]+'\x20berhenti\x20afk,\x20dia\x20sedang\x20'+(_0x246bd1[_0x2d321f(0x131)][_0x52c3e5][_0x2d321f(0x165)]===_0x2d321f(0x13e)?'mengetik':'merekam'),MessageType[_0x2d321f(0x12f)],{'contextInfo':{'mentionedJid':[_0x52c3e5]}})));}if(!_0x246bd1['hasNewMessage'])return;_0x246bd1=_0x246bd1[_0x2d321f(0x161)]['all']()[0x0];if(!_0x246bd1['message'])return;if(_0x246bd1[_0x2d321f(0x163)]&&_0x246bd1[_0x2d321f(0x163)][_0x2d321f(0x133)]=='status@broadcast')return;_0x246bd1[_0x2d321f(0x130)]&&(_0x246bd1[_0x2d321f(0x130)]==0x44&&xinz['clearMessage'](_0x246bd1[_0x2d321f(0x163)]));let _0x324a59=serialize(xinz,_0x246bd1),_0x4fa4f6=serializeM(xinz,_0x246bd1);_0x324a59[_0x2d321f(0x14a)]&&_0x324a59[_0x2d321f(0x164)]&&_0x324a59[_0x2d321f(0x13f)]&&_0x324a59[_0x2d321f(0x149)][_0x2d321f(0x139)]===_0x2d321f(0x15e)&&xinz[_0x2d321f(0x132)](_0x324a59['key']),require(_0x2d321f(0x15a))(xinz,_0x324a59,_0x4fa4f6,blocked,_afk,welcome);}),xinz['on']('group-participants-update',async _0x47a273=>{require('./message/group')(xinz,_0x47a273,welcome);});};function nocache(_0x5d52c8,_0x1ecde0=()=>{}){const _0x450a23=_0x3633a7;console[_0x450a23(0x120)](color(_0x450a23(0x15f)+_0x5d52c8+_0x450a23(0x141))),fs[_0x450a23(0x122)](require[_0x450a23(0x140)](_0x5d52c8),async()=>{const _0x28b554=_0x450a23;await uncache(require[_0x28b554(0x140)](_0x5d52c8)),_0x1ecde0(_0x5d52c8);});}function uncache(_0x3eafa8='.'){return new Promise((_0xfbfcd1,_0x1687d6)=>{const _0x41e228=_0x30e9;try{delete require[_0x41e228(0x167)][require[_0x41e228(0x140)](_0x3eafa8)],_0xfbfcd1();}catch(_0x26ed05){_0x1687d6(_0x26ed05);}});}function _0x9b79(){const _0x8d8a9=['Module\x20','push','messages','checkAfkUser','key','isBaileys','lastKnownPresence','existsSync','cache','3yIHikb','stringify','sendMessage','xinz','4476031kALnYJ','writeFileSync','524986aKVSAX','100606GJqrzs','654230NDFjuE','default','ws-close','./help/ind.js','level','6Egiwyq','\x27\x20Telah\x20berubah!','c.us','_self.json','./lib/afk','2716735JqIMNF','Koneksi\x20terputus,\x20mencoba\x20menghubungkan\x20kembali..','@adiwajshing/baileys','log','mode','watchFile','./database/welcome.json','Connect\x20To\x20Phone\x20Rejected\x20and\x20Shutting\x20Down.','./message/antidelete.js','baterai','sessionName','message-delete','Connect,\x20Welcome\x20Owner','multi','prefa','./lib/myfunc','close','Connecting...','extendedText','messageStubType','presences','clearMessage','remoteJid','live','CB:action,,battery','base64EncodedAuthInfo','figlet','Terputus,\x20Alasan\x20:','type','75177eXtAmX','350EoRPkt','catch','length','composing','isQuotedMsg','resolve','\x20Dipantau\x20oleh\x20kang\x20Bakso','self','./message/xinz.js','blocklist','cyan','nopref','parse','warn','quotedMsg','message','./database/scommand.json','readFileSync','2519824QwwaKw','connect','recording','./message/antidelete','./database/afk.json','value','splice','split','jid','anjing','24IWAonn','[\x20CREATED\x20BY\x20XINZTEAM\x20]','loadAuthInfo','./message/xinz','./config.json','Standard','WAConnection','orderMessage'];_0x9b79=function(){return _0x8d8a9;};return _0x9b79();}start('./'+setting[_0x3633a7(0x127)]+_0x3633a7(0x11b))[_0x3633a7(0x13c)](_0x149561=>console[_0x3633a7(0x120)](_0x149561));