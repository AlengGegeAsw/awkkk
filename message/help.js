exports.menu = (prefix, i, xinz) => {
    return `*Xinz Bot*
Created by Aqulzz

*MODE ${xinz.mode}*

*INFO*
${i.free} cekprefix
${i.free} ${prefix}stats
${i.free} ${prefix}limit
${i.free} ${prefix}balance
${i.free} ${prefix}runtime
${i.free} ${prefix}speed
${i.free} ${prefix}owner
${i.free} ${prefix}donasi
${i.free} ${prefix}sourcecode

*Multi Session*
${i.limit} ${prefix}jadibot
${i.free} ${prefix}stopjadibot
${i.free} ${prefix}getcode
${i.free} ${prefix}listbot

*Coverter / Tools*
${i.limit} ${prefix}sticker
${i.prem} ${prefix}swm
${i.prem} ${prefix}take
${i.limit} ${prefix}toimg
${i.limit} ${prefix}ttp text
${i.limit} ${prefix}attp text
${i.limit} ${prefix}trigger
${i.limit} ${prefix}cs
${i.limit} ${prefix}circle
${i.limit} ${prefix}tinyurl url
${i.limit} ${prefix}nuliskiri text
${i.limit} ${prefix}nuliskanan text
${i.limit} ${prefix}foliokiri text
${i.limit} ${prefix}foliokanan text
${i.limit} ${prefix}translate kodebahasa [reply pesan/text]

*Downloader*
${i.limit} ${prefix}ytmp4 url
${i.limit} ${prefix}ytmp3 url
${i.limit} ${prefix}igdl url
${i.limit} ${prefix}fbdl url
${i.limit} ${prefix}tiktoknowm url
${i.limit} ${prefix}tiktokwm url
${i.limit} ${prefix}yts query
${i.limit} ${prefix}play query
${i.limit} ${prefix}playmp4 query

*Stalker*
${i.limit} ${prefix}igstalk username
${i.limit} ${prefix}ghstalk username

*Text Marker*
${i.limit} ${prefix}blackpink text
${i.limit} ${prefix}tahta text
${i.limit} ${prefix}neon text
${i.limit} ${prefix}glitch text1|text2

*Baileys*
${i.free} ${prefix}tagme
${i.limit} ${prefix}kontak nomor|nama
${i.prem} ${prefix}hidetag
${i.limit} ${prefix}getpp @tag atau 'group'

*Sewa*
${i.free} ${prefix}sewa
${i.free} ${prefix}sewa batal
${i.owner} ${prefix}addsewa link waktu
${i.owner} ${prefix}delsewa idgroup

*Premium*
${i.free} ${prefix}premium
${i.free} ${prefix}premium batal
${i.owner} ${prefix}addprem @tag waktu
${i.owner} ${prefix}delprem @tag
${i.owner} ${prefix}cekprem
${i.free} ${prefix}listprem

*Ban*
${i.owner} ${prefix}ban @tag
${i.owner} ${prefix}unban @tag
${i.free} ${prefix}listban

*Game*
${i.free} ${prefix}buylimit _jumlah_
${i.free} ${prefix}buyglimit _jumlah_
${i.glimit} ${prefix}tictactoe @tag
${i.free} ${prefix}delttt
${i.glimit} ${prefix}tebakgambar
${i.glimit} ${prefix}family100
${i.glimit} ${prefix}suit

*Group*
${i.free} ${prefix}afk
${i.free} ${prefix}infogrup
${i.free} ${prefix}chatinfo
${i.owner} ${prefix}add 628xx
${i.owner} ${prefix}kick @tag
${i.owner} ${prefix}promote @tag
${i.owner} ${prefix}demote @tag
${i.free} ${prefix}linkgc
${i.owner} ${prefix}leave
${i.owner} ${prefix}setdesc
${i.owner} ${prefix}setgrupname
${i.owner} ${prefix}setppgrup
${i.owner} ${prefix}opengrup
${i.owner} ${prefix}closegrup
${i.owner} ${prefix}join
${i.owner} ${prefix}tagall
${i.owner} ${prefix}mute
${i.owner} ${prefix}unmute

*Enable / Disable*
${i.owner} ${prefix}antilink
${i.owner} ${prefix}welcome
${i.owner} ${prefix}left
${i.owner} ${prefix}antibadword
${i.free} ${prefix}listbadword
${i.owner} ${prefix}addbadword
${i.owner} ${prefix}delbadword

*Owner*
${i.owner} >
${i.owner} $
${i.owner} ${prefix}self
${i.owner} ${prefix}public
${i.owner} ${prefix}setprefix
${i.owner} ${prefix}bc
${i.owner} ${prefix}sendbug
${i.owner} ${prefix}antidelete
${i.owner} ${prefix}clearall
${i.owner} ${prefix}exif nama|author

Note :
${i.owner} : Fitur Admin Grup atau Owner
${i.free} : Fitur gratis yang tidak memakai limit
${i.limit} : Fitur yang memakai 1 limit harian
${i.glimit} : Fitur yang memakai 1 limit game
${i.prem} : Fitur khusus premium user

INGIN PREMIUM ? Kirim ${prefix}premium
INGIN SEWA BOT ? Kirim ${prefix}sewa`
}