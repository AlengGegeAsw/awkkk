const fs = require('fs-extra')

exports.wait = () => {
    return `Mohon tunggu sebentar~`
}

exports.ok = () => {
    return `Ok desu~`
}

exports.wrongFormat = (prefix) => {
    return `Format salah! Silakan cek cara penggunaan di *${prefix}menu*, Karena sudah diberikan penjelasan beserta cara pakai.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Command *${cmd}* tidak terdaftar di *${prefix}menu*`
}

exports.limit = (prefix) => {
    return `
*── 「 LIMIT 」 ──*

Limit penggunaan kamu telah habis! Silakan lakukan hal berikut:
❏ *_Tunggu hingga jam 07:00 WIB_*
❏ *_Membeli fitur premium dengan ketik ${prefix}uptopremium_*
❏ *_Join Group FAX and Leveling Spammer di ${prefix}FAXgroup_*
❏ *_Minta Give limit ke Member Premium :D_*

Info Lebih lengkap hubungi owner
Ketik *${prefix}owner*
    `
}

exports.hadis = (command) => {
    return `*── 「 HADIS 」 ──*

Daftar hadis:
1. Hadis Bukhari ada 6638 hadis
    _usage_: ${command} bukhari 1
2. Hadis Muslim ada 4930 hadis
    _usage_: ${command} muslim 25
3. Hadis Tirmidzi ada 3625 hadis
    _usage_: ${command} tirmidzi 10
4. Hadis nasai ada 5364 hadis
    _usage_: ${command} nasai 6
5. Hadis Ahmad ada 4305 hadis
    _usage_: ${command} ahmad 5
6. Hadis Abu Daud ada 4419 hadis
    _usage_: ${command} abu-daud 45
7. Hadis Malik ada 1587 hadis
    _usage_: ${command} malik 45
8. Hadis Ibnu Majah ada 4285 hadis
    _usage_: ${command} ibnu-majah 8
9. Hadis Darimi ada 2949 hadis
    _usage_: ${command} darimi 3`
}

exports.blocked = (ownerNumber) => {
    return `Bot tidak menerima panggilan. Karena kamu melanggar rules, maka kamu diblok!\n\nHarap hubungi owner: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.groupBot = (sender) => {
    return `
Link Group Fardan Fenst : https://chat.whatsapp.com/C9t9klLMGzg2dC84ii4fqY

Jangan lupa join ya kak @${sender.split('@')[0]}`
}

exports.BlockBan = (ownerNumber, prefix) => {
    return `*Sepertinya kamu telah diblok/diban. Command ${prefix}unban untuk mengetahui cara membuka blok!*\n\n Owner: wa.me/${ownerNumber}`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner-sama!`
}

exports.bannedOnly = () => {
    return `Command ini khusus user bot yang *Terbanned*`
}

exports.ownerClosed = () => {
    return `Command ditutup sementara oleh owner!`
}

exports.ownerTobat = (cekRamadhan) => {
    return `Ayo kawan, tingkatkan amal ibadahmu di bulan ramadhan 1442H yang berakhir pada *${cekRamadhan}* lagi.\n\nOwner mengucapkan selamat menunaikan Ibadah puasa, mohon maaf lahir dan batin.`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner-sama~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `Command ini hanya bisa digunakan oleh admin grup!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

exports.stickerDel = () => {
    return `Stiker berhasil dihapus dari database!`
}

exports.stickerAdd = () => {
    return `Stiker berhasil ditambahkan ke database!`
}

exports.updateAdd = () => {
    return `Update fitur berhasil ditambahkan ke database!`
}

exports.stickerAddAlready = (q) => {
    return `Stiker dengan keyword "${q}" sudah ada di database!`
}

exports.stickerNotFound = () => {
    return `Stiker tidak ditemukan!`
}

exports.vnDel = () => {
    return `Vn berhasil dihapus dari database!`
}

exports.vnAdd = () => {
    return `Vn berhasil ditambahkan ke database!`
}

exports.vnAddAlready = (q) => {
    return `Vn dengan keyword "${q}" sudah ada di database!`
}

exports.vnNotFound = () => {
    return `Vn tidak ditemukan!`
}

exports.imageAdd = () => {
    return `image berhasil ditambahkan ke database!`
}

exports.imageAddAlready = (q) => {
    return `image dengan keyword "${q}" sudah ada di database!`
}

exports.imageNotFound = () => {
    return `image tidak ditemukan!`
}

exports.addedGroup = (chat) => {
    return `Terima kasih telah mengundangku, para member *${chat.contact.name}*!\n\nSilakan register terlebih dahulu untuk menggunakan bot.`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.botSupport = () => {
    return `
*── 「 HOW TO UNBAN OR BLOCK 」 ──*
1. Cari tau dulu, kena Block/Ban karena apa.
2. Follow ig owner www.instagram.com/rashidsiregar28
3. Jika sudah, chat owner dengan sopan.
4. Jangan ulangi kesalahan yang sama

Have a nice day😎`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notPremium = (prefix) => {
    return `Maaf! Command ini khusus untuk user premium saja. Info lebih lanjut ketik *${prefix}uptopremium*`
}

exports.notSewa = (prefix) => {
    return `Maaf! group ini tidak termasuk dalam list sewa. Info lebih lanjut ketik *${prefix}sewabot*`
}

exports.notAdmin = () => {
    return `User bukan seorang admin!`
}

exports.adminAlready = () => {
    return `Tidak dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu!`
}

exports.masukSholat = (time, sholat) => {
    return `
*── 「 JAM MASUK SHOLAT ${sholat}  」 ──*

Jam Masuk Sholat \`\`\`${sholat}\`\`\` Untuk daerah Mandau Kabupaten Bengkalis dan Sekitarnya tanggal ${time}

\`\`\`~FAXBot\`\`\``
}


exports.ytFound = (res) => {
    return `
*── 「 YOUTUBE DOWNLOADER  」 ──*

➸ *Judul*: ${res.title}
➸ *Size*:${res.filesizeF}

Media sedang dikirim, mohon tunggu...`
}

exports.notRegistered = (prefix) => {
    return `
*── 「 NOT REGISTERED 」 ──*
Silakan register terlebih dahulu sebelum menggunakan bot. Cara register cukup dengan command *${prefix}register*

Note:
Harap save nomor ku agar bisa mendapatkan serial!!`
}

exports.registered = (userId, time, serial, prefix) => {
    return `
*── 「 REGISTRATION 」 ──*

Akun kamu telah terdaftar dengan data:

➸ *ID*: ${userId}
➸ *Waktu pendaftaran*: ${time}
➸ *Serial*: ${serial}

Catatan:
Harap simpan data *serial* anda ,karena dibutuhkan suatu saat!
Ketik *${prefix}rules* terlebih dahulu ya~`
}

exports.respon = (ketikan, respt) => {
    return `
*── 「 AUTO RESPON 」 ──*

Auto-Respon berhasil dibuat dengan:

➸ *Text*: ${ketikan}
➸ *Akan Merespon*: ${respt}`
}

exports.responAlready = (ketikan) => {
    return `
Maaf, autorespon untuk teks "${ketikan}" sudah ada sebelumnya,harap memasukkan teks lain.`
}

exports.registeredAlready = () => {
    return `Kamu sudah mendaftar sebelumnya.`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.PornPicDetected = (nilaipersen) => {
    return `
*── 「 PORN DETECTOR 」 ──*

Gambar ini tidak aman untuk grup dan Anda akan dikick!
*Keyakinan: ${nilaipersen}/100%*`
}

exports.PornVidDetected = (nilaipersen) => {
    return `
*── 「 PORN DETECTOR 」 ──*

Anda akan di-kick karena video ini mengandung pornografi!
*Keyakinan: ${nilaipersen}/100%*`
}

exports.ThisisPorn = (nilaipersen) => {
    return `
*── 「 PORN CHECK 」 ──*

Gambar ini tidak aman untuk grup anda!
*Keyakinan: ${nilaipersen}/100%*`
}

exports.ThisisNotPorn = (nilaipersen) => {
    return `*── 「 PORN CHECK 」 ──*

Gambar ini aman untuk grup Anda!
*Persentase unsur pornografi: ${nilaipersen}/100%*`
}

exports.daily = (time) => {
    return `Maaf, tetapi kamu telah mencapai limit menggunakan command ini.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.`
}

exports.SpamMez = () => {
    return `Harap tidak Melakukan Spam bot.\nSilakan tunggu *5 detik* lagi Untuk Menggunakan Command.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.joox = (result) => {
    return `
*── 「 JOOX  」 ──*

Lagu ditemukan!
➸ *Penyanyi*: ${result.info.singer}
➸ *Judul*: ${result.info.song}
➸ *Album*: ${result.info.album}
➸ *Duration*: ${result.info.duration}
➸ *Tanggal Rilis*: ${result.info.date}
➸ *Viewers*: ${result.audio[0].size}

Media sedang dikirim, mohon tunggu...`
}

exports.gsm = (result) => {
    return `
*── 「 GSM ARENA 」 ──*

➸ *Model HP*: ${result.title}
➸ *Spesifikasi*:
${result.spec}`
}

exports.receipt = (result) => {
    return `
*${result.title}*

${result.desc}

*Bahan*: ${result.bahan}
*Cara membuat*:
${result.cara}`
}

exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `
*── 「 YOUTUBE SEARCH 」 ──*

➸ *Judul*: ${title}
➸ *Channel*: ${channel}
➸ *Durasi*: ${duration}
➸ *Views*: ${views}
➸ *Link*: ${urlyt}`
}

exports.profile = (sender, status, premi, adm, level, requiredXp, xp) => {
    return `
*── 「 USER INFO 」 ──*

➸ *Username*: @${sender.split('@')[0]}
➸ *Status*: ${status}
➸ *Premium*: ${premi}
➸ *Admin*: ${adm}

=_=_=_=_=_=_=_=_=_=_=_=_=

Your progress:
➸ *Level*: ${level}
➸ *XP*: ${xp} / ${requiredXp}`
}

exports.detectorOn = (name) => {
    return `
*── 「 ANTI GROUP LINK 」 ──*

Perhatian untuk penghuni grup ${name}
Grup ini memiliki anti-group link detector, apabila ada salah satu member mengirim group link di sini maka dia akan ter-kick secara otomatis.

Sekian terima kasih.
- Admin ${name}`
}

exports.detectorOff = () => {
    return `Fitur anti-group link berhasil *dinonaktifkan*!`
}

exports.detectorOnAlready = () => {
    return `Fitur anti-group link telah diaktifkan sebelumnya.`
}

exports.antiNsfwOn = (name) => {
    return `
*──「 ANTI NSFW 」──*

Perhatian untuk penghuni grup ${name}
Grup ini memiliki anti-NSFW detector, apabila ada salah satu member mengirim link, gambar, atau video NSFW/porn di sini maka dia akan ter-kick secara otomatis.

Sekian terima kasih.
- Admin ${name}`
}

exports.antiNsfwOff = () => {
    return `Fitur anti-NSFW berhasil *dinonaktifkan*!`
}

exports.MuteOnAlready = () => {
    return `Bot Telah di Mute sebelumnya.`
}

exports.MuteOn = (name) => {
    return `
*──「 MUTE 」──*

Perhatian untuk penghuni grup ${name}
Bot telah dimute, bot hanya merespon command admin group.Sekian terima kasih.`
}

exports.MuteOff = () => {
    return `Bot Berhasil di unmute`
}

exports.antiNsfwOnAlready = () => {
    return `Fitur anti-NSFW telah diaktifkan sebelumnya.`
}


exports.antiVirtexOn = (name) => {
    return `
*──「 ANTI VIRTEX 」──*
Perhatian untuk penghuni grup ${name}
Grup ini memiliki anti-Virtex detector, apabila ada salah satu member mengirim virtex di sini maka dia akan ter-kick secara otomatis.

Sekian terima kasih.
- Admin ${name}`
}

exports.antiVirtexOff = () => {
    return `Fitur anti-virtex berhasil *dinonaktifkan*!`
}

exports.antiVirtexOnAlready = () => {
    return `Fitur anti-Virtex telah diaktifkan sebelumnya.`
}

exports.linkDetected = () => {
    return `
*──「 ANTI GROUP LINK 」──*

Kamu mengirim link group chat!
Maaf tapi kami harus mengeluarkan mu...
Selamat tinggal~`
}

exports.linkWrong = () => {
    return `
*──「 PROBLEM 」──*

Maaf Owner-sama, bot gagal join dengan beberapa alasan:
1. Link Tidak Valid
2. Bot Telah dikick sebelumnya
3. Tautan Link Sudah Disetel Ulang
4. Group melebihi 257 member`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}

exports.levelNull = () => {
    return `Kamu belum memiliki level!`
}

exports.welcomeOn = () => {
    return `Fitur welcome berhasil *diaktifkan*!`
}

exports.claimOn = (yo) => {
    return `
*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *10000Xp* dan *$${yo}* balance
Dari claim harian`
}

exports.claimOnAlready = () => {
    return `Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`
}

exports.welcomeOff = () => {
    return `Fitur welcome berhasil *dinonaktifkan*!`
}

exports.welcomeOnAlready = () => {
    return `Fitur welcome telah diaktifkan sebelumnya.`
}

exports.simiOn = (prefix) => {
    return `Fitur simsimi berhasil *diaktifkan*, command *${prefix}simsimi disable* untuk menonaktifkan!`
}

exports.simiOff = () => {
    return `Fitur simsimi berhasil *dinonaktifkan*!`
}

exports.simiOnAlready = () => {
    return `Fitur simsimi telah diaktifkan sebelumnya.`
}

exports.minimalDb = () => {
    return `Perlu setidaknya *10* user yang memiliki level di database!`
}

exports.autoStikOn = () => {
    return `Fitur auto-stiker berhasil *diaktifkan*!`
}

exports.autoStikOff = () => {
    return `Fitur auto-stiker berhasil *dinonaktifkan*!`
}

exports.autoStikOnAlready = () => {
    return `Fitur auto-stiker telah diaktifkan sebelumnya.`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason) => {
    return `
*──「 AFK MODE 」──*

Sssttt! Orangnya lagi AFK, jangan diganggu!
➸ *Alasan*: ${getReason}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.gcMute = () => {
    return `
*──「 MUTED 」──*

Hanya admin yang dapat mengirim pesan ke grup ini.`
}

exports.gcUnmute = () => {
    return `
*──「 UNMUTED 」──*

Sekarang semua anggota dapat mengirim chat di grup ini.`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `➸ *Nama*: ${title}\n➸ *ID*: ${app_id}\n➸ *Developer*: ${developer}\n➸ *Gratis*: ${free}\n➸ *Harga*: ${price}\n➸ *Deskripsi*: ${description}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸ *Nama*: ${nama}\n➸ *Harga*: ${harga}\n➸ *Terjual*: ${terjual}\n➸ *Lokasi*: ${shop_location}\n➸ *Link produk*: ${link_product}\n➸ *Deskripsi*: ${description}`
}

exports.registeredFound = (name, age, time, serial, userId) => {
    return `
*──「 REGISTERED 」──*

Akun ditemukan!

➸ *Nama*: ${name}
➸ *Umur*: ${age}
➸ *ID*: ${userId}
➸ *Waktu pendaftaran*: ${time}
➸ *Serial*: ${serial}`
}

exports.registeredNotFound = (serial) => {
    return `Akun dengan serial: *${serial}* tidak ditemukan!`
}

exports.ytPlay = (result) => {
    return `
*──「 PLAY 」──*

➸ *Judul*: ${result.title}
➸ *Size*: ${result.size}

Media sedang dikirim, mohon tunggu...`
}

exports.pcOnly = () => {
    return `Command ini hanya bisa digunakan di dalam private chat saja!`
}

exports.linkNsfw = () => {
    return `
*──「 ANTI NSFW LINK 」──*

Kamu telah mengirim link NSFW!
Maaf, tapi aku harus mengeluarkan mu...`
}

exports.AntiVirtez = () => {
    return `
*──「 ANTI VIRTEX 」──*

Kamu telah mengirim VIRTEX!
Maaf, tapi aku harus mengeluarkan mu...`
}

exports.menu = (prefix, ucap, pushname2, jumlahUser, timebot, owner, authorStick, jumlahHarian, jumlahCommand, sender, time, cekRamadhan, public, levelMenu, xpMenu, reqXp, uangku, role, Limitnya) => {
    return `\`\`\`Selamat ${ucap} Kak @${sender.split('@')[0]} 😳\`\`\`

┌── 「 *BOT INFO* 」 ──
│
│❒͡  _*Fardan BOT 💞*_ 
│❒͡ *OWNER* : _*Fardan💞*_
│❒͡ *Contact My Owner*
│ *https://wa.me/${owner}*
│❒͡ *Time: ${time}*
│❒͡ *STATUS* :「 ${public} 」
│❒͡ *Prefix :「 MULTI 」*
│❒͡ *Memperingati HARI ULTA*
│❒͡ *05-05-2007*
│❒͡ *Join Group*
│ *https://bit.ly/3uKbMDc*
│
└── 「 *FAX CHAN* 」 ──

*Name* : *${pushname2}*
*Your API* : *https://wa.me/${sender.split('@')[0]}*
*Limit* : *${Limitnya}*


*Your Progress*:
*Level: ${levelMenu}*
*XP: ${xpMenu} / ${reqXp}*
*Role: ${role}*
*Your Balance: $${uangku}*

*───「 BOT STATUS 」────*

❏ *${timebot}*

𒍮 *Auto-Regis User: ${jumlahUser}*

𒍮 *Total Hit Bot : ${jumlahCommand}*

𒍮 *Total Hit Today : ${jumlahHarian}*

*──── 「 FAX CHAN 」 ────*

Catatan:
Perlakukan bot secara baik, Owner akan bertindak tegas apabila user melanggar rules.
Bot ini terdapat Anti-Spam yang berupa cooldown command selama *5 detik* setiap kali pemakaian.

*Official BOT By @0*`
}

exports.menuDownloader = (prefix) => {
    return `
*── 「 DOWNLOADER 」 ──*

1. *${prefix}facebook*
Download Facebook video.
Aliases: *fb*
Usage: *${prefix}facebook* link_video

2. *${prefix}joox*
Mencari dan men-download lagu dari Joox.
Aliases: -
Usage: *${prefix}joox* judul_lagu

3. *${prefix}tiktok*
Mendownload video TikTok.
Aliases: -
Usage: *${prefix}tiktok* link_video

4. *${prefix}twitter*
Download Twitter media.
Aliases: *twt*
Usage: *${prefix}twiter* link

5. *${prefix}tiktokmusic*
Download source music dari tiktokvideo.
Aliases: -
Usage: *${prefix}tiktokmusic* link_video

6. *${prefix}igdl*
Download video dari Source Instagram.
Aliases: *instagramdl*, *ig*
Usage: *${prefix}ig* link_video

7. *${prefix}igstory*
Download video Story user di Instagram
Aliases: *storyig*
Usage: *${prefix}igstory* username

8. *${prefix}mediafire*
Info dan direct link mediafire.
Aliases: -
Usage: *${prefix}mediafire* link

9. *${prefix}gdrive*
Info dan direct link google drive.
Aliases: googledrive
Usage: *${prefix}gdrive* link

10. *${prefix}soundcloud*
Download soundcloud music.
Aliases: -
Usage: *${prefix}souncloud* link_music

11. *${prefix}linedl*
Download sticker line via link.
Aliases: -
Usage: *${prefix}linedl* link_sticker

12. *${prefix}cocofun*
Download video cocofun.
Aliases: -
Usage: *${prefix}cocofun* link

13. *${prefix}smule*
Download video atau audio smule.
Aliases: -
Usage: *${prefix}smule* link

14. *${prefix}starmaker*
Download video starmaker.
Aliases: -
Usage: *${prefix}starmaker* link

15. *${prefix}teledl*
Download sticker Telegram via Link..
Aliases: -
Usage: *${prefix}teledl* link

16. *${prefix}pindl*
Download file pinterest via Link..
Aliases: -
Usage: *${prefix}pindl* link

17. *${prefix}zippyshare*
Info dan direct link zippyshare.
Aliases: -
Usage: *${prefix}zippyshare* link
    `
}

exports.menuText = (prefix) => {
    return `
┌── 「 TEXT MAKER 」 ──*
│
│ ${prefix}blackpink':
│ ${prefix}neon Text
│ ${prefix}greenneon Text
│ ${prefix}advanceglow Text
│ ${prefix}futureneon Text
│ ${prefix}sandwriting Text
│ ${prefix}sandsummer Text
│ ${prefix}sandengraved Text
│ ${prefix}metaldark Text
│ ${prefix}neonlight Text
│ ${prefix}holographic Text
│ ${prefix}text1917 Text
│ ${prefix}minion Text
│ ${prefix}deluxesilver Text
│ ${prefix}newyearcard Text
│ ${prefix}bloodfrosted Text
│ ${prefix}halloween Text
│ ${prefix}jokerlogo Text
│ ${prefix}fireworksparkle Text
│ ${prefix}natureleaves Text
│ ${prefix}bokeh Text
│ ${prefix}toxic Text
│ ${prefix}strawberry Text
│ ${prefix}box3d Text
│ ${prefix}roadwarning Text
│ ${prefix}breakwall Text
│ ${prefix}icecold Text
│ ${prefix}luxury Text
│ ${prefix}cloud Text
│ ${prefix}summersand Text
│ ${prefix}horrorblood Text
│ ${prefix}thunder2 Text
│ ${prefix}christmas Text
│
└── 「 *FAX CHAN* 」 ──
    `
}

exports.menuPremi = (prefix) => {
    return `
*── 「 PREMIUM 」 ──*
Halo premium users ヽ(・∀・)ﾉ!

1. *${prefix}tiktoknowm*
Download Tiktok video tanpa WM.
Aliases: *tktoknowm*
Usage: *${prefix}tiktoknowm* link_video

2. *${prefix}stickerwm*
Buat stiker dengan WM.
Aliases: *stcwm*
Usage: Kirim gambar dengan caption *${prefix}stickerwm* pack_name | author_name atau reply gambar dengan caption *${prefix}stickerwm* pack_name | author_name.

3. *${prefix}takestick*
Merubah watermark sticker.
Aliases: -
Usage: Reply stiker dengan caption *${prefix}takestick* pack_name | author_name

4. *${prefix}asupan*
Asupan video cewek-cewek.
Aliases: -
Usage: *${prefix}asupan*

5. *${prefix}multilewds*
Mengirim up to 5 anime lewd pics.
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *${prefix}multilewds*

6. *${prefix}nhdl*
Mendownload doujin dari nHentai sebagai file PDF.
Aliases: -
Usage: *${prefix}nhdl* kode

7. *${prefix}nekosearch*
Nekopoi search.
Aliases: -
Usage: *${prefix}nekosearch* query

8. *${prefix}multifetish*
Mengirim up to 5 fetish pics.
Aliases: *mfetish*
Usage: *${prefix}multifetish* <ecchi/lewdanimegirls/hentai/hentaifemdom/hentaiparadise/hentai4everyone/animearmpits/animefeets/animethighss/animebooty/biganimetiddies/animebellybutton/sideoppai/ahegao/hentaianal/anal/pussy/animepussy/yaoi/yuri/hentaiblowjob/blowjob/futanari/kitsunehentai/midriffhentai/erohentai/cumhentai/paizuri>


9. *${prefix}brainly*
Mencari Jawaban dari Source Brainly
Aliases: -
Usage: *${prefix}brainly* pertanyaan

10. *${prefix}brainlysearch*
Mencari result brainly.
Aliases: -
Usage: *${prefix}brainlysearch* pertanyaan

11. *${prefix}spamcall*
Spam call.
Aliases: -
Usage: *${prefix}spamcall* 812xxxxxxxx

12. *${prefix}bokep*
Mengirim random bokep.
Aliases: randombokep
Usage: *${prefix}bokep*

13. *${prefix}pinterest*
Mengirim gambar source pinterest.
Aliases: -
Usage: *${prefix}pinterest* query

14. *${prefix}ytmp3*
Download YouTube audio.
Aliases: -
Usage: *${prefix}ytmp3* link

15. *${prefix}ytmp4*
Download YouTube video.
Aliases: -
Usage: *${prefix}ytmp4* link

16. *${prefix}oadd*
Menambah user ke dalam group.
Aliases: -
Usage: *${prefix}oadd* 628xxxxxxxxxx

17. *${prefix}okick*
Mengeluarkan member dari grup.
Aliases: -
Usage: *${prefix}okick* @member1

18. *${prefix}opromote*
Promote member menjadi admin.
Aliases: -
Usage: *${prefix}opromote* @member1

19. *${prefix}odemote*
Demote member dari admin.
Aliases: -
Usage: *${prefix}odemote* @member1

20. *${prefix}oleave*
Bot akan meninggalkan grup.
Aliases: -
Usage: *${prefix}oleave*

21. *${prefix}otagall*
Mention semua member group.
Aliases: -
Usage: *${prefix}otagall*

22. *${prefix}odelete*
Hapus pesan dari bot.
Aliases: *odel*
Usage: Reply pesan yang dihapus dengan caption *${prefix}odelete*.

23. *${prefix}spamsms*
Spam OTP SMS.
Aliases: -
Usage: *${prefix}spamsms* 0812xxxxxxxx 

24. *${prefix}googleimg*
Search gambar source google.com.
Aliases: -
Usage: *${prefix}googleimg* query

25. *${prefix}getmusic*
Mengambil music dari database list.
Aliases: -
Usage: Reply pesan bot yg berisikan data audio dan command *${prefix}getvideo* angka

26. *${prefix}delvn*
Menghapus vn dari database bot.
Aliases: -
Usage: *${prefix}delvn* query

27. *${prefix}getvideo*
Mengambil Video dari database list.
Aliases: -
Usage: Reply pesan yg berisikan data video dan gunakan *${prefix}getvideo* angka

28. *${prefix}delsticker*
Menghapus sticker dari database bot.
Aliases: -
Usage: *${prefix}delsticker* query

29. *${prefix}addimage*
Menambah image ke database bot.
Aliases: -
Usage: Reply/kirim image beriringan dengan command *${prefix}imagesticker* query

30. *${prefix}delimage*
Menghapus image dari database bot.
Aliases: -
Usage: *${prefix}delsticker* query

31. *${prefix}addrespon*
Menambah respon ke database bot.
Aliases: -
Usage: *${prefix}addrespon* query | responnya

32. *${prefix}delrespon*
Menghapus respon dari database bot.
Aliases: -
Usage: *${prefix}delrespon* query

33. *${prefix}addcmd*
Custom add cmd untuk sticker.
Aliases: -
Usage: reply sticker dengan command *${prefix}addcmd* cmdnya

34. *${prefix}delcmd*
Custom delete cmd untuk sticker.
Aliases: -
Usage: reply sticker dengan command *${prefix}delcmd* cmdnya
    `
}

exports.menuSticker = (prefix) => {
    return `
*── 「 STICKER 」 ──*

1. *${prefix}sticker*
Membuat stiker dari gambar yang dikirim atau di-reply.
Aliases: *stiker*
Usage: Kirim gambar dengan caption *${prefix}sticker* atau reply gambar dengan caption *${prefix}sticker*.

2. *${prefix}stickergif*
Membuat stiker dari video MP4 atau GIF yang dikirim atau di-reply.
Aliases: *stikergif*, *sgif*
Usage: Kirim video/GIF dengan caption *${prefix}stickergif* atau reply video/GIF dengan caption *${prefix}stickergif*.

3. *${prefix}ttg*
Membuat stiker text to GIF.
Aliases: -
Usage: *${prefix}ttg* teks

4. *${prefix}stickertoimg*
Konversi stiker ke foto.
Aliases: *stikertoimg toimg*
Usage: Reply sticker dengan caption *${prefix}stickertoimg*.

5. *${prefix}emojisticker*
Konversi emoji ke stiker.
Aliases: *emojistiker*
Usage: *${prefix}emojisticker* emoji

6. *${prefix}findsticker*
Untuk mencari sticker yang kamu cari
Aliases: *findstiker*
Usage: *${prefix}findsticker* teks

7. *${prefix}stickermeme*
Buat sticker meme.
Aliases: *stcmeme*
Usage: Kirim gambar dengan caption *${prefix}stickermeme* teks_atas | teks_bawah atau reply gambar dengan caption *${prefix}stickermeme* teks_atas | teks_bawah.

8. *${prefix}ttp*
Membuat stiker text.
Aliases: -
Usage: *${prefix}ttp* teks

9. Random Sticker.
Mengirim sticker dengan random.
Aliases: -
List: 
*${prefix}nimestick*
*${prefix}patrik*
*${prefix}doge*
*${prefix}bucinstick*
*${prefix}gurastick*


10. *${prefix}stickerp*
Membuat stiker tanpa crop.
Aliases: -
Usage: Kirim atau reply gambar dengan caption *${prefix}stickerp*

11. *${prefix}stickernobg*
Membuat stiker dengan menghapus background.
Aliases: -
Usage: Kirim atau reply gambar dengan caption *${prefix}stickernobg*

12. *${prefix}ttp2*
Membuat stiker text.
Aliases: -
Usage: *${prefix}ttp2* teks

13. *${prefix}ttp3*
Membuat stiker text.
Aliases: -
Usage: *${prefix}ttp3* teks

14. *${prefix}attp*
Membuat stiker text gif.
Aliases: -
Usage: *${prefix}attp* teks

15. *${prefix}sfire*
Membuat stiker gif efek fire.
Aliases: -
Usage: Kirim atau reply gambar dengan caption *${prefix}sfire*

16. *${prefix}circle*
Membuat stiker dengan crop lingkaran.
Aliases: -
Usage: Kirim atau reply gambar dengan caption *${prefix}circle*

    `
}

exports.menuWeeaboo = (prefix) => {
    return `
*── 「 WEEABOO 」 ──*

1. *${prefix}neko*
Mengirim foto neko girl.
Aliases: -
Usage: *${prefix}neko*

2. *${prefix}wallpaper*
Mengirim wallpaper anime.
Aliases: *wp*
Usage: *${prefix}wallpaper*

3. *${prefix}kemono*
Mengirim foto kemonomimi girl.
Aliases: -
Usage: *${prefix}kemono*

4. *${prefix}kusonime*
Mencari info anime dan link download batch di Kusonime.
Aliases: -
Usage: *${prefix}kusonime* judul_anime

5. *${prefix}kusonimedl*
link download di kusonime.
Aliases: -
Usage: *${prefix}kusonimedl* link

6. *${prefix}wait*
Mencari source anime dari screenshot scene.
Aliases: -
Usage: Kirim screenshot dengan caption *${prefix}wait* atau reply screenshot dengan caption *${prefix}wait*.

7. *${prefix}source*
Mencari source dari panel doujin, ilustrasi, dan gambar yang berhubungan dengan anime.
Aliases: *sauce*
Usage: Kirim gambar dengan caption *${prefix}source* atau reply gambar dengan caption *${prefix}source*.

8. *${prefix}waifu*
Mengirim random foto waifu.
Aliases: -
Usage: *${prefix}waifu*

9. *${prefix}otakudesu*
Cek update terbaru otakudesu.
Aliases: -
Usage: *${prefix}otakudesu*

10. *${prefix}anime*
Cari anime.
Aliases: -
Usage: *${prefix}anime* judul

11. *${prefix}otakudesudl*
Link downnload otakudesu 
Aliases: -
Usage: *${prefix}otakudesudl* link

12. *${prefix}husbu*
Mengirim random pict husbu.
Aliases: -
Usage: *${prefix}husbu*

13. *${prefix}manga*
Cari manga.
Aliases: -
Usage: *${prefix}manga* judul

14. *${prefix}loli*
Mengirim random pict loli.
Aliases: -
Usage: *${prefix}loli*

15. *${prefix}elf*
Mengirim random pict elf.
Aliases: -
Usage: *${prefix}elf*

16. *${prefix}shota*
Mengirim random pict shota.
Aliases: -
Usage: *${prefix}shota*

17. *${prefix}fan)*
Mengirim random pict fanart.
Aliases: -
Usage: *${prefix}fanart*

18. *${prefix}pixivsearch*
Mencari pict from pixiv.
Aliases: -
Usage: *${prefix}pixivsearch* query

19. *${prefix}genshininfo*
Mencari informasi karakter genshin.
Aliases: -
Usage: *${prefix}genshininfo* nama_chara

20. *${prefix}quotesnime*
Random quotes anime.
Aliases: -
Usage: *${prefix}quotesnime*

21. *${prefix}konachan*
Cari random pict konnachan.
Aliases: -
Usage: *${prefix}konnachan* query

22. *${prefix}sagiri*
Cari random pict sagiri.
Aliases: -
Usage: *${prefix}sagiri*

23. *${prefix}shinobu*
Cari random pict shinobu.
Aliases: -
Usage: *${prefix}shinobu*

24. *Berikut Menu*
${prefix}art
${prefix}bts
${prefix}exo
Cari random pict art.
Aliases: -
Usage: *${prefix}art*
Usage: *${prefix}bts*
Usage: *${prefix}exo*

    `
}

exports.menuFun = (prefix) => {
    return `
*── 「 FUN FEATURE 」 ──*

1. *${prefix}partner*
Weton jodoh.
Aliases: *pasangan*
Usage: *${prefix}partner* nama | pasangan

3. *${prefix}zodiac*
Ramalan zodiak Mingguan.
Aliases: *zodiak*
Usage: *${prefix}zodiac* zodiak

4. *${prefix}write*
Membuat catatan tulisan di buku.
Aliases: *nulis*
Usage: *${prefix}write* teks

5. *${prefix}simi*
Chat SimiSimi.
Aliases: -
Usage: *${prefix}simi* teks

6. *${prefix}tod*
Bermain truth or dare.
Aliases: -
Usage: *${prefix}tod*

7. *${prefix}weton*
Kirim ramalan weton.
Aliases: -
Usage: *${prefix}weton* tanggal | bulan | tahun

8. *${prefix}citacita*
Meme cita-cita.
Aliases: -
Usage: *${prefix}citacita*

9. *${prefix}readmore*
Generate teks baca selengkapnya.
Aliases: -
Usage: *${prefix}readmore* teks1 | teks2

10. *${prefix}reminder*
Pengingat. 
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}reminder* 10s | pesan_pengingat

11. *${prefix}purba*
Generate purba text.
Aliases: -
Usage: *${prefix}purba* text

12. *${prefix}toxic*
Random toxic.
Aliases: -
Usage: *${prefix}toxic*

13. *${prefix}motivasi*
Kata-kata motivasi.
Aliases: -
Usage: *${prefix}motivasi*

14. *${prefix}afk*
Set akun kamu ke mode AFK, aku akan mengirim pesan ke orang yang me-mention kamu.
Aliases: -
Usage: *${prefix}afk* alasan. Kirim pesan ke grup untuk menonaktifkan mode AFK.

15. *${prefix}kbbi*
Mengirim definisi kata dari KBBI.
Aliases: -
Usage: *${prefix}kbbi* teks

16. *${prefix}say*
Bot akan mengulang pesan mu.
Aliases: -
Usage: *${prefix}say* teks

17. *${prefix}meme*
Bot akan mengirim meme secara random.
Aliases: -
Usage: *${prefix}meme*

18. *${prefix}memeindo*
Bot akan mengirim meme indo secara random.
Aliases: -
Usage: *${prefix}meme*

19. *${prefix}darkjoke*
Bot akan mengirim dark joke alay versi tiktok secara random.
Aliases: darkjokes
Usage: *${prefix}darkjoke*

20. *${prefix}caklontong*
Random kuis caklontong.
Aliases: -
Usage: *${prefix}caklontong*

21. *${prefix}univ*
Mencari info universitas
Aliases: university, universitas
Usage: *${prefix}univ* query

22. *${prefix}ganteng*
Bot akan mentag random member grup.
Aliases: -
Usage: *${prefix}ganteng*

23. *${prefix}Sange*
Bot akan mentag random member grup.
Aliases: -
Usage: *${prefix}sange*

24. *${prefix}babi*
Bot akan mentag random member grup.
Aliases: -
Usage: *${prefix}babi*

25. *${prefix}cerpen*
Bot akan mengirim random cerpen.
Aliases: -
Usage: *${prefix}cerpen

26. *${prefix}puisi*
Bot akan mengirim random puisi.
Aliases: -
Usage: *${prefix}puisi

27. *${prefix}email*
Spam Email.
Aliases: -
Usage: *${prefix}email* rashidsixxxxx@gmail.com | subjek | pesan

28. *${prefix}tebakbendera*
Random kuis tebak bendera*
Aliases: -
Usage: *${prefix}tebakbendera*

29. *${prefix}jamdunia*
Bot akan mengkonversi jam dunia sesuai query.
Aliases: -
Usage: *${prefix}jamdunia* kota

30. *${prefix}fckmylife*
Bot akan mengirim random fuckmylife.
Aliases: fml
Usage: *${prefix}fckmylife*

31. *${prefix}nickepep*
Bot akan mengirim random nickname game ff.
Aliases: nickff
Usage: *${prefix}nickepep*

32. *${prefix}tebakgambar*
Random kuis tebak gambar*
Aliases: -
Usage: *${prefix}tebakgambar*

33. *${prefix}family100
Random kuis family100
Aliases: -
Usage: *${prefix}family100

34. *${prefix}alay*
mengubah tulisan menjadi mock font.
Aliases: mock
Usage: *${prefix}alay* text

35. *${prefix}hilih*
Giti iji gi pihim.
Aliases: -
Usage: *${prefix}hilih* text

36. *${prefix}bucin*
Random kata kata bucin.
Aliases: -
Usage: *${prefix}bucin*

37. *${prefix}katabijak*
Kata-kata random.
Aliases: -
Usage: *${prefix}katabijak*

38. *${prefix}bapakfont*
Mengubah tulisan menjadi cirikhas bApack BaPacK.
Aliases: -
Usage: *${prefix}bapakfont* text

39. *${prefix}artinama*
Mencari artinama seseorang.
Aliases: -
Usage: *${prefix}artinama* nama

40. *${prefix}joke*
Random joke.
Aliases: -
Usage: *${prefix}joke*

41. *${prefix}creepyfact*
Mengambil random fakta creepy.
Aliases: -
Usage: *${prefix}creepyfact*

42. *${prefix}jumlahhuruf*
Menghitung huruf.
Aliases: -
Usage: *${prefix}jumlahhuruf* teks

43. *${prefix}balikhuruf*
Bot akan membalik huruf.
Aliases: -
Usage: *${prefix}balikhuruf* teks

44. *${prefix}howgay*
Rate gay member.
Aliases: -
Usage: *${prefix}howgay* nama

45. *${prefix}whipped*
Rate kebucinan seseorang
Aliases: -
Usage: *${prefix}whipped* nama

46. *${prefix}hidetag*
Hidetag versi lawack.
Aliases: -
Usage: *${prefix}hidetag* teks

47. *${prefix}onecak*
Random onecak meme.
Aliases: -
Usage: *${prefix}onecak*

48. *${prefix}ramaljadian*
Kirim ramalan tanggal jadian.
Aliases: -
Usage: *${prefix}ramaljadian* tanggal | bulan | tahun

49. *${prefix}fakename*
Random nama palsu.
Aliases: -
Usage: *${prefix}fakename*

50. *${prefix}namaninja*
Random nama ninja.
Aliases: -
Usage: *${prefix}namaninja* nama


    `
}

exports.menuImage = (prefix) => {
    return `
*── 「 EFFECT AND MANIPULATION 」 ──*

1. *${prefix}phcomment*
Membuat capton ala PH comment., nantinya akan membutuhkan image profil whatsapp.
Aliases: -
Usage: *${prefix}phcomment* username | teks


2. *${prefix}triggered*
Membuat efek triggered dari gambar.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}triggered* atau reply pesan orang dengan *${prefix}triggered* atau bisa gunakan command *${prefix}triggered* langsung.

3. *${prefix}kiss*
Kiss someone ( ͡° ͜ʖ ͡°).
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}kiss* atau reply gambar dengan *${prefix}kiss*.

4. *${prefix}wasted*
Membuat gambar Wasted GTA V.
Aliases: -
Usage: Upload foto dengan caption *${prefix}wasted*

5. *${prefix}gay*
Membuat gambar efek rainbow.
Aliases: -
Usage: Upload foto dengan caption *${prefix}gay*

6. *${prefix}wanted*
Membuat gambar efek wanted.
Aliases: -
Usage: Upload foto dengan caption *${prefix}wanted*

7. *${prefix}wasted*
Membuat gambar This is Beautiful.
Aliases: -
Usage: Upload foto dengan caption *${prefix}beautiful*

8. *${prefix}hitler*
Membuat gambar There was Hitler :3.
Aliases: -
Usage: Upload foto dengan caption *${prefix}hitler*

9. *${prefix}trash*
Membuat gambar Sampah/Trash.
Aliases: -
Usage: Upload foto dengan caption *${prefix}trash*

10. *${prefix}spank*
Spank Someone.
Aliases: -
Usage: Upload foto atau tag gambar dengan caption *${prefix}spank*

11. *${prefix}threats*
Memanipulasi gambar efek threats.
Aliases: -
Usage: Upload foto dengan caption *${prefix}threats*

12. *${prefix}glass*
Memanipulasi gambar efek glass.
Aliases: -
Usage: Upload foto dengan caption *${prefix}glass*

13. *${prefix}greyscale*
Filter gambar efek greyscale.
Aliases: -
Usage: Upload foto dengan caption *${prefix}greyscale*

14. *${prefix}invert*
Filter gambar efek invert.
Aliases: -
Usage: Upload foto dengan caption *${prefix}invert*

15. *${prefix}invertgrey*
Filter gambar efek kombinasi invert dan greyscale.
Aliases: -
Usage: Upload foto dengan caption *${prefix}invertgrey*

16. *${prefix}brightness*
Filter gambar efek brightness.
Aliases: -
Usage: Upload foto dengan caption *${prefix}brightness*

17. *${prefix}threshold*
Filter gambar.
Aliases: -
Usage: Upload foto dengan caption *${prefix}threshold*

18. *${prefix}sepia*
Filter gambar.
Aliases: -
Usage: Upload foto dengan caption *${prefix}sepia*

19. *${prefix}buriq*
Menurunkan kualitas gambar.
Aliases: -
Usage: Upload foto dengan caption *${prefix}buriq*

20. *${prefix}deepfry*
Memanipulasi Gambar deep.
Aliases: -
Usage: Upload foto dengan caption *${prefix}deepfry*

22. *${prefix}magik*
Filter Gambar effect.
Aliases: -
Usage: Upload foto dengan caption *${prefix}magik*

23. *${prefix}chaptcha*
Filter Gambar effect.
Aliases: -
Usage: Upload foto dengan caption *${prefix}chaptcha* text

24. *${prefix}ytcomment*
Membuat capton ala YT command , nantinya akan membutuhkan image profil whatsapp.
Aliases: -
Usage: *${prefix}ytcomment* username | teks

25. *${prefix}fisheye*
Membuat gambar efek fisheye.
Aliases: -
Usage: Upload foto dengan caption *${prefix}fisheye*

26. *${prefix}pencil*
Membuat gambar efek.
Aliases: -
Usage: Upload foto dengan caption *${prefix}pencil*


    `
}

exports.menuKerang = (prefix) => {
    return `
*── 「 KERANG 」 ──*

1. *${prefix}kapankah*
Mengambil jawaban random dari bot.
Aliases: -
Usage: *${prefix}kapankah* text

2. *${prefix}bisakah*
Mengambil jawaban random dari bot.
Aliases: -
Usage: *${prefix}bisakah* text

3. *${prefix}rate*
Mengambil jawaban random dari bot
Aliases: nilai
Usage: *${prefix}rate* pertanyaan


    `
}

exports.menuModeration = (prefix) => {
    return `
*── 「 MODERATION GROUP 」 ──*

1. *${prefix}add*
Menambah user ke dalam group.
Aliases: -
Usage: *${prefix}add* 628xxxxxxxxxx

2. *${prefix}kick*
Mengeluarkan member dari grup.
Aliases: -
Usage: *${prefix}kick* @member1

3. *${prefix}promote*
Promote member menjadi admin.
Aliases: -
Usage: *${prefix}promote* @member1

4. *${prefix}demote*
Demote member dari admin.
Aliases: -
Usage: *${prefix}demote* @member1

5. *${prefix}leave*
Bot akan meninggalkan grup.
Aliases: -
Usage: *${prefix}leave*

6. *${prefix}tagall*
Mention semua member group.
Aliases: *everyone*
Usage: *${prefix}tagall*

7. *${prefix}nsfw*
Mematikan/menyalakan mode NSFW.
Aliases: -
Usage: *${prefix}nsfw* enable/disable

8. *${prefix}groupicon*
Mengganti icon grup.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}groupicon* atau reply gambar dengan caption *${prefix}groupicon*.

9. *${prefix}antilink*
Mematikan/menyalakan fitur anti-group link.
Aliases: -
Usage: *${prefix}antilink* enable/disable

10. *${prefix}welcome*
Mematikan/menyalakan fitur welcome di grup agar menyambut setiap kedatangan member.
Aliases: -
Usage: *${prefix}welcome* enable/disable

11. *${prefix}autosticker*
Mematikan/menyalakan fitur auto-stiker. Setiap foto yang dikirim akan selalu diubah ke stiker.
Aliases: *autostiker, autostik*
Usage: *${prefix}autostiker* enable/disable

12. *${prefix}antinsfw*
Mematikan/menyalakan fitur anti-NSFW link.
Aliases: -
Usage: *${prefix}antinsfw* enable/disable

13. *${prefix}group*
Mematikan/menyalakan group.
Aliases: -
Usage: *${prefix}group* enable/disable

14. *${prefix}linkgroup*
Cek link invite group.
Aliases: -
Usage: *${prefix}linkgroup*

15. *${prefix}ownergroup*
Memberikan/tag pembuat grup.
Aliases: -
Usage: *${prefix}ownergrup*

16. *${prefix}mute*
Membisukan bot di grup.
Aliases: -
Usage: *${prefix}mute* enable/disable

17. *${prefix}revoke*
Setel ulang link invite group.
Aliases: -
Usage: *${prefix}revoke*

18. *${prefix}antivirtex*
Detector Virtex.
Aliases: -
Usage: *${prefix}antivirtex* enable/disable
    `
}


exports.menuNsfw = (prefix) => {
    return `
*── 「 NSFW 」 ──*

1. *${prefix}lewds*
Mengirim pict anime lewd.
Aliases: *lewd*
Usage: *${prefix}lewds*

2. *${prefix}nhentai*
Mengirim info doujinshi dari nHentai.
Aliases: *nh*
Usage: *${prefix}nhentai* kode

3. *${prefix}nekoinfo*
Mengirim info nekopoi via link.
Aliases: -
Usage: *${prefix}nekoinfo* link_nekopoi

4. *${prefix}waifu18*
Mengirim random foto waifu NSFW.
Aliases: -
Usage: *${prefix}waifu18*

5. *${prefix}fetish*
Mengirim fetish pics.
Aliases: -
Usage: *${prefix}fetish* <ecchi/lewdanimegirls/hentai/hentaifemdom/hentaiparadise/hentai4everyone/animearmpits/animefeets/animethighss/animebooty/biganimetiddies/animebellybutton/sideoppai/ahegao/hentaianal/anal/pussy/animepussy/yaoi/yuri/hentaiblowjob/blowjob/futanari/kitsunehentai/midriffhentai/erohentai/cumhentai/paizuri>

6. *${prefix}xhamstersearch*
xhamster search
Aliases: -
Usage *${prefix}xhamstersearch* link

7. *${prefix}lewdavatar*
Mengirim random avatar lewd.
Aliases: -
Usage: *${prefix}lewdavatar*

8. *${prefix}femdom*
Mengirim random foto ero femdom.
Aliases: -
Usage: *${prefix}femdom*

9. *${prefix}xnxxsearch*
xnxxsearch search.
Aliases: -
Usage: *${prefix}xnxxsearch* query

10. *${prefix}cersex*
Random cersex.
Aliases: ceritasex
Usage: *${prefix}cersex*

11. *${prefix}lewdholo*
Mengirim random hololive lewd.
Aliases: -
Usage: *${prefix}lewdholo*

12. *${prefix}ecchi*
Mengirim random pict ecchi(-soft hentai).
Aliases: -
Usage: *${prefix}ecchi*

13. *${prefix}xnxxdl*
Download video xnxx.
Aliases: -
Usage: *${prefix}xnxxdl* link_nya

14. *${prefix}xhamsterdl*
Download video xvideos.
Aliases: -
Usage: *${prefix}xhamsterdl* link_nya

    `
}

exports.menuOwner = (prefix) => {
    return `
*── 「 OWNER MENU 」 ──*
Halo Owner-sama ヽ(・∀・)ﾉ!

1. *${prefix}bc*
Membuat broadcast.
Aliases: -
Usage: *${prefix}bc* <teks> 

2. *${prefix}clearall*
Menghapus semua chat di akun bot.
Aliases: -
Usage: *${prefix}clearall*

3. *${prefix}ban*
Menambah/menghapus user yang diban.
Aliases: -
Usage: *${prefix}ban* add/del 62812xxxxxxxx

4. *${prefix}leaveall*
Keluar dari semua grup.
Aliases: -
Usage: *${prefix}leaveall*

5. *>*
Evaluate kode JavaScript.
Aliases: -
Usage: *>* kode eval

6. *${prefix}shutdown*
Men-shutdown bot.
Aliases: -
Usage: *${prefix}shutdown*

7. *${prefix}premium*
Menambah/menghapus user premium.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}premium* add/del 62812xxxxxxxx 30d

8. *${prefix}setstatus*
Mengganti status about me.
Aliases: *setstats setstat*
Usage: *${prefix}status* teks

9. *${prefix}exif*
Atur WM stiker bot.
Aliases: -
Usage: *${prefix}exif* pack_name | author_name

10. *${prefix}join*
Join grup via link.
Aliases: -
Usage: *${prefix}join* link_group

11. *${prefix}setname*
Mengganti status nama.
Aliases: *setnama*
Usage: *${prefix}setnama* teks

12. *${prefix}give*
Give Level ke member.
Aliases: -
Usage: *${prefix}give* 62812xxxx  jumlah_xp

13. *${prefix}addupdate*
Nambah list update bot.
Aliases: -
Usage: *${prefix}addupdate* query

14. *${prefix}sewa*
Menambah/menghapus group sewa.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}sewa* add/del 30d.

15. *${prefix}reset*
Reset database bot.
Aliases: -
Usage: *${prefix}reset*
    `
}

exports.menuLeveling = (prefix) => {
    return `
*── 「 LEVELING 」 ──*

1. *${prefix}level*
Untuk melihat level kamu.
Aliases: -
Usage: *${prefix}level*

2. *${prefix}leaderboard*
Untuk melihat leaderboard.
Aliaases: -
Usage: *${prefix}leaderboard*

3. *${prefix}limit*
Cek Limit Kamu.
Aliases: *ceklimit*
Usage: *${prefix}limit*

4. *${prefix}dadu*
Bot akan mengirim dadu dan dapatkan sejumlah Xp.
Aliases: -
Usage: *${prefix}dadu*

5. *${prefix}slot*
Game Slot hadiah Xp.
Aliases: -
Usage: *${prefix}slot*

6. *${prefix}suit*
Bot akan mengirim suit dan dapatkan sejumlah Xp.
Aliases: -
Usage: *${prefix}suit*

7. *${prefix}balance*
Cek Uang Kamu.
Aliases: *atm*, *bal*, *uangku*
Usage: *${prefix}balance*

8. *${prefix}buylimit*
Beli Limit Kamu.
Aliases: *-*
Usage: *${prefix}buylimit* jumlah limit

9. *${prefix}buyglimit*
Beli Limit Game Kamu.
Aliases: *-*
Usage: *${prefix}buyglimit* jumlah limit
    `
}

exports.menuBail = (prefix) => {
    return `
*── 「 MULTI-SESSION MENU 」 ──*

1. *${prefix}jadibot*
JadiBot Sementara.
Aliases: -
Usage: *${prefix}jadibot* kode-base64

2. *${prefix}listbot*
Menampilkan user yang sedang jadibot.
Aliaases: -
Usage: *${prefix}artimimpi* tema_mimpi

3. *${prefix}stopjadibot*
Cancel Bot Sementara.
Aliases: -
Usage: *${prefix}stopjadibot*

4. *${prefix}getcode*
Ambil Session mu.
Aliases: -
Usage: *${prefix}getcode*
Note: Hanya untuk yg jadibot.

    `
}

exports.menuPrimbon = (prefix) => {
    return `
*── 「 PRIMBON MENU 」 ──*

1. *${prefix}artinama*
Ramalan primbon arti nama.
Aliases: -
Usage: *${prefix}artinama* nama_anda

2. *${prefix}artimimpi*
Tafsir mimpi yang kamu alami.
Aliaases: -
Usage: *${prefix}artimimpi* tema_mimpi

3. *${prefix}jodoh*
Cek ramalan jodoh kamu dan pasanganmu.
Aliases: *pasangan* *partner*
Usage: *${prefix}jodoh* nama1|nama2

4. *${prefix}ramaljadian*
Ramalan tanggal jadian.
Aliases: -
Usage: *${prefix}ramaljadian* tanggal|bulan|tahun

5. *${prefix}weton*
Weton tanggal lahir.
Aliases: -
Usage: *${prefix}weton* tanggal|bulan|tahun

6. *${prefix}zodiak*
Ramalan Harian zodiak.
Aliases: -
Usage: *${prefix}zodiak* query

    `
}

exports.menuPray = (prefix) => {
    return `
*── 「 PRAY 」 ──*

1. *${prefix}listsurah*
Melihat list surah Al-Qur'an.
Aliases: -
Usage: *${prefix}listsurah*

2. *${prefix}surah*
Mengirim surah Al-Qur'an.
Aliases: *quran*
Usage: *${prefix}surah* nomor_surah

3. *${prefix}js*
Mengetahui jadwal shalat di daerah kalian
Aliases: jadwalshalat
Usage: *${prefix}js* namadaerah

4. *${prefix}alkitab*
Al-Kitab search.
Aliases: -
Usage: *${prefix}alkitab* nama_injil

5. *${prefix}hadis*
Hadis search.
Aliases: -
Usage: *${prefix}hadis* nama no_hadis

6. *${prefix}kisahnabi*
Cerita kisah 25 nabi.
Aliases: -
Usage: *${prefix}kisahnabi* nama_nabi

7. *${prefix}asmaulhusna*
Random asmaul Husna.
Aliases: -
Usage: *${prefix}asmaulhusna*

8. *${prefix}randomquran*
Dapatkan audio ayat / surah random.
Aliases: -
Usage: *${prefix}randomquran*

9. *${prefix}alquranaudio*
Dapatkan audio ayat / surah.
Aliases: -
Usage: *${prefix}alquranaudio* nomor_surah

10. *${prefix}renungharian*
Renungan harian.
Aliases: -
Usage: *${prefix}renungharian*

11. *${prefix}alkitabharian*
Dapatkan ayat alkitab harian.
Aliases: -
Usage: *${prefix}alkitabharian*


_Index of [13]_
    `
}

exports.menuMisc = (prefix) => {
    return `
*── 「 MEDIA AND MISC 」 ──*

1. *${prefix}lirik*
Mencari lirik lagu.
Aliases: -
Usage: *${prefix}lirik* judul_lagu

2. *${prefix}shortlink*
Membuat shortlink.
Aliases: -
Usage: *${prefix}shortlink* link

3. *${prefix}wikipedia*
Mengirim Wikipedia dari teks yang diberikan.
Aliases: *wiki*
Usage: *${prefix}wikipedia* teks

4. *${prefix}igstalk*
Stalk akun Instagram.
Aliases: -
Usage: *${prefix}igstalk* username

5. *${prefix}gsmarena*
Mengirim info spesifikasi HP dari GSMArena.
Aliases: -
Usage: *${prefix}gsmarena* model_hp

6. *${prefix}receipt*
Mengirim resep makanan.
Aliases: *resep*
Usage: *${prefix}receipt* nama_makanan

7. *${prefix}ytsearch*
Mengirim hasil pencarian di YouTube.
Aliases: *yts*
Usage: *${prefix}ytsearch* query

8. *${prefix}tts*
Membuat Text to Speech. Kalian perlu kode bahasa setiap menggunakan, cek di sini https://id.wikipedia.org/wiki/Daftar_bahasa_menurut_ISO_639-2
Aliases: -
Usage: *${prefix}tts* kode_bahasa | teks


9. *${prefix}distance*
Untuk mengetahui jarak dari kotamu ke kota yang kamu tuju
Aliases: -
Usage: *${prefix}distance* kota_asal | kota_tujuan

10. *${prefix}math*
Kalkulator.
* = Perkalian
+ = Pertambahan
- = Pengurangan
/ = Pembagian
Aliases: -
Usage: *${prefix}math* 12*12

11. *${prefix}mutual*
Dapatkan kontak WA random.
Aliases: -
Usage: *${prefix}mutual*

12. *${prefix}whois*
IP look-up.
Aliases: -
Usage: *${prefix}whois* ip_address

13. *${prefix}play*
Play audio dari YouTube.
Aliases: - 
Usage: *${prefix}play* judul_video


14. *${prefix}linesticker*
Sticker Line terbaru.
Aliases: *linestiker*
Usage: *${prefix}linesticker*


15. *${prefix}cekongkir*
Cek ongkos kirim.
Aliases: -
Usage: *${prefix}ongkir* kurir | asal | tujuan

16. *${prefix}movie*
Cari film.
Aliases: -
Usage: *${prefix}movie* judul

17. *${prefix}imagetourl*
Image uploader.
Aliases: *imgtourl*
Usage: Kirim gambar dengan caption *${prefix}imagetourl* atau reply gambar dengan caption *${prefix}imagetourl*.

18. *${prefix}infohoax*
Cek update info hoax.
Aliases: -
Usage: *${prefix}infohoax*

19. *${prefix}trending*
Cek trending di Twitter suatu negara.
Aliases: -
Usage: *${prefix}trending* namanegara

20. *${prefix}jobseek*
Mencari info lowongan kerja.
Aliases: -
Usage: *${prefix}jobseek*

21. *${prefix}fakta*
Memberikan ranfom fakna unik.
Aliases: fact
Usage: *${prefix}fact*

22. *${prefix}quote*
Memberikan quotes random dari tokoh terkenal.
Aliases: quotes
Usage: *${prefix}quotes*

23. *${prefix}jadwalbola*
Memberikan Informasi Jadwal bola terbaru.
Aliases: jbola
Usage: *${prefix}jadwalbola*

23. *${prefix}berita*
Memberikan Info berita terbaru.
Aliases: news
Usage: *${prefix}berita*

24. *${prefix}pantun*
Memberikan pantun random .
Aliases: -
Usage: *${prefix}pantun*

25. *${prefix}cat*
Memberikan gambar random kucing.
Aliases: kucing
Usage: *${prefix}cat*

26. *${prefix}pict*
Memberikan gambar random pict sesuai query.
Aliases: -
Usage: *${prefix}pict* query

31. *${prefix}cuaca*
Prediksi cuaca bersumber bmkg.
Aliases: weather
Usage: *${prefix}cuaca* namadaerah

32. *${prefix}tiktokhastag*
Mencari tiktok berdasarkan hastag.
Aliases: tiktoksearch
Usage: *${prefix}tiktokhastag* query

35. *${prefix}infoalamat*
Dapatkan info alamat.
Aliases: -
Usage: *${prefix}infoalamat* query

36. *${prefix}gitstalk*
Stalk akun Github.
Aliases: gitprofile
Usage: *${prefix}gitstalk* username

37. *${prefix}happymod*
Memberikan link download apk mod dari happymod.
Aliases: -
Usage: *${prefix}happymod* namaapk

38. *${prefix}moddroid*
Dapatkan aplikasi mod dari moddroid.
Aliases: -
Usage: *${prefix}moddroid* namaapk

39. *${prefix}corona*
Dapatkan info kasus corona suatu daerah.
Aliases: coronavirus
Usage: *${prefix}corona* negara

40. *${prefix}wikien*
Mengirim Wikipedia dari teks yang diberikan.
Aliases: *wikien*
Usage: *${prefix}wikien* teks

41. *${prefix}tiktokstalk*
Stalk akun Tiktok.
Aliases: -
Usage: *${prefix}tiktokstalk* username

42. *${prefix}shortlink2*
Membuat shortlink alternatif. ( Bit.ly )
Aliases: -
Usage: *${prefix}shortlink2* link

43. *${prefix}shortlink3*
Membuat shortlink alternatif. ( schd.co )
Aliases: -
Usage: *${prefix}shortlink3* link

44. *${prefix}kurs*
Info kurs update Indonesia.
Aliases: -
Usage: *${prefix}kurs* mata_uang_negara

45. *${prefix}readqr*
Membaca kode qr.
Aliases: -
Usage: Upload gambar qr yang akan dibaca dengan caption *${prefix}readqr*

46. *${prefix}wpsearch*
Mencari wallpaper berdasarkan query
Aliases: *wallpapersearch*
Usage: *${prefix}wpsearch* query

47. *${prefix}wattpadsearch*
Mencari novel.
Aliases: -
Usage: *${prefix}wattpadsearch* judul

48. *${prefix}wattpadinfo*
Mengambil Informasi wattpad berdasarkan link.
Aliases: -
Usage: *${prefix}wattpadinfo* link

49. *${prefix}twtstalk*
Stalk akun Twitter.
Aliases: -
Usage: *${prefix}twtstalk* username

50. *${prefix}google*
Mencari query from google.
Aliases: -
Usage: *${prefix}google* query

51. *${prefix}freepik*
Mengirim gambar source freepik.
Aliases: -
Usage: *${prefix}freepik* query

52. *${prefix}translate*
Menerjemahkan teks.
Aliases: -
Usage: *${prefix}translate* teks_nya | kode_bahasa

53. *Animal Fact*
Mencari Fakta Hewan.
Tersedia: 
1.*${prefix}dogfact*
2.*${prefix}catfact*
3.*${prefix}pandafact*
4.*${prefix}foxfact*
5.*${prefix}birdfact*
6.*${prefix}koalafact*
7.*${prefix}racoonfact*
8.*${prefix}kangaroofact*

54. *${prefix}kelpersegi*
Menghitung keliling persegi.
Aliases: -
Usage: *${prefix}kelpersegi* angka

55. *${prefix}luaspersegi*
Menghitung Luas persegi.
Aliases: -
Usage: *${prefix}luaspersegi* angka

56. *${prefix}kuadrat*
Menghitung kuadrat.
Aliases: -
Usage: *${prefix}kuadrat* angka

57. *${prefix}kubik*
Menghitung kubik.
Aliases: -
Usage: *${prefix}kubik* angka

58. *${prefix}apkpure*
Mencari apk dari source apkpure.
Aliases: -
Usage: *${prefix}apkpure* teks

59. *${prefix}chord*
Mencari chord lagu.
Aliases: -
Usage: *${prefix}chord* judul_lagu

60. *${prefix}jadwaltv*
Mencari jadwal tv setempat.
Aliases: -
Usage: *${prefix}jadwaltv* nama_siaran

61. *${prefix}qrmaker*
Buat qr.
Aliases: -
Usage: *${prefix}qrmaker* text

62. *${prefix}colourviewer*
Mengirim warna sesuai kode hex 
Aliases: -
Usage: *${prefix}colourviewer* kode_hex

63. *${prefix}rgbtohex*
Mengubah rgb ke format hex.
Aliases: -
Usage: *${prefix}tgbtohex* kode_rgb

64. *${prefix}hextorgb*
Mengubah kode hex ke rgb.
Aliases: -
Usage: *${prefix}hextorgb* kode_hex

65. *${prefix}texttobinary*
Mengubah text ke format binary.
Aliases: -
Usage: *${prefix}texttobinary* teks

66. *${prefix}binarytotext*
Mengubah text format binnary ke text biasa.
Aliases: -
Usage: *${prefix}binarytotext* tes

67. *${prefix}base64totext*
Recode base64 ke teks.
Aliases: -
Usage: *${prefix}base64totext* base64_format

68. *${prefix}texttobase64*
Encode teks ke base64.
Aliases: -
Usage: *${prefix}texttobase64* teks

69. *${prefix}ccgenerator*
Generate cc.
Aliases: -
Usage: *${prefix}ccgenerator*

70. *${prefix}playmp4*
Play video dari YouTube.
Aliases: *mp4*
Usage: *${prefix}playmp4* judul_video

71. *${prefix}imagetopdf*
Convert to pdf.
Aliases: -
Usage: Kirim gambar atau reply gambar dengan caption *${prefix}imagetopdf*

72. *${prefix}ssweb*
Screenshot web via link.
Aliases: -
Usage: *${prefix}ssweb* link

73. *${prefix}imagetopdf*
Image convert.
Aliases: *imgtopdf*
Usage: Kirim gambar dengan caption *${prefix}imagetopdf* atau reply gambar dengan caption *${prefix}imagetopdf*.

74. *${prefix}jadwaltvnow*
Mencari jadwal tv setempat langsung.
Aliases: -
Usage: *${prefix}jadwaltvnow* nama_siaran

75. *${prefix}liststicker*
Memberikan list sticker yang ada di database bot.
Aliases: -
Usage: *${prefix}liststicker*

76. *${prefix}listvn*
Memberikan list vn yang terdaftar di database bot.
Aliases: -
Usage: *${prefix}listvn*

77. *${prefix}listimage*
Memberikan list image yang terdaftar di database bot.
Aliases: -
Usage: *${prefix}listimage*

78. *${prefix}getimage*
Mengambil gambar yang terdaftar di database bot.
Aliases: -
Usage: *${prefix}getimage* query

79. *${prefix}listrespon*
Memberikan list respon yang terdaftar di database bot.
Aliases: -
Usage: *${prefix}listrespon*

80. *${prefix}shortlink4*
Membuat shortlink alternatif ( Cuttly )
Aliases: -
Usage: *${prefix}shortlink4* link

81. *${prefix}shortlink5*
Membuat shortlink alternatif ( Shorturl-at )
Aliases: -
Usage: *${prefix}shortlink5* link

82. *${prefix}ytstalk*
Stalk akun youtube channel.
Aliases: -
Usage: *${prefix}ytstalk* nama_channel

    `
}

exports.menuBot = (prefix) => {
    return `
*── 「 BOT STAT 」 ──*

1. *${prefix}rules*
Wajib baca.
Aliases: *rule*
Usage: *${prefix}rules*

2. *${prefix}menu*
Menampilkan commands yang tersedia.
Aliases: *help*
Usage: *${prefix}menu*

3. *${prefix}status*
Menampilkan status bot.
Aliases: *stats*
Usage: *${prefix}status*

4. *${prefix}listblock*
Cek nomor yang diblokir.
Aliases: -
Usage: *${prefix}listblock*

5. *${prefix}ping*
Cek speed bot.
Aliases: *p*
Usage: *${prefix}ping*

6. *${prefix}delete*
Hapus pesan dari bot.
Aliases: *del*
Usage: Reply pesan yang dihapus dengan caption *${prefix}delete*.

7. *${prefix}report*
Laporkan bug ke dev.
Aliases: -
Usage: *${prefix}report* pesan

8. *${prefix}tos*
Syarat dan ketentuan. (TOS)
Aliases: -
Usage: *${prefix}tos*

9. *${prefix}owner*
Mengirim kontak owner.
Aliases: -
Usage: *${prefix}owner*

10. *${prefix}getpic*
Mengirim foto profil user.
Aliases: -
Usage: *${prefix}getpic* @user/group

11. *${prefix}premiumcheck*
Cek masa aktif premium.
Aliases: *cekpremium*
Usage: *${prefix}premiumcheck*

12. *${prefix}premiumlist*
Cek list user premium.
Aliases: *listpremium*
Usage: *${prefix}premiumlist*

13. *${prefix}runtime*
Memberikan berapa jam bot aktif.
Aliases: -
Usage: *${prefix}runtime*

14. *${prefix}listgroup*
Memberikan list group bot.
Aliases: -
Usage: *${prefix}listgroup*

15. *${prefix}sider*
Memberikan member yang sudah membaca pesan bot.
Aliases: *chatinfo*
Usage: *${prefix}sider*

16. *${prefix}uptopremium*
Memberikan informasi manfaat dan harga upgrade ke premium.
Aliases: -
Usage: *${prefix}uptopremium*

17. *${prefix}update*
Memberikan list update bot.
Aliases: -
Usage: *${prefix}update*

18. *${prefix}ceksewa*
Cek masa aktif group sewa.
Aliases: *-*
Usage: *${prefix}ceksewa*

19. *${prefix}sewalist*
Cek list group sewa.
Aliases: *listsewa*
Usage: *${prefix}sewalist*

    `
}

exports.menuPrice = (owner, pushname) => {
    return `
*── 「 PRICE LIST 」 ──*
 
*Hai kak  ${pushname}*
*Harga Sewa Bot*
*15K/Group Selama 1 Bulan*

*Pembayaran Bisa Melalui Metode Pembayaran di Bawah:*
*OVO/Dana/Gopay = ${owner}*
*QRis yang dilampirkan*

*_note_*:
*Jika kalian ingin menjadi owner bot,bisa chat owner untuk price nya :D*
*wa.me/${owner} (Owner)*

    `
}

exports.UpToPremi = (ownerNumber, prefix) => {
    return `
*── 「 UPGRADE PREMIUM 」 ──*

*Tarif Premium User adalah 10K Perbulan*
*Keuntungan Premium Diantaranya:*
♲ *Bebas memakai fitur premium*
♲ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*

*Jika Tertarik,Kalian Bisa Bayar Melalui Metode Pembayaran di Bawah:*
*OVO/Dana/Gopay = ${ownerNumber}*
*Qris pada gambar diatas*


*Info Lebih Lengkap Chat Owner, Ketik ${prefix}owner
*_note_*:
*Pembelian Premium yang disertai SewaBot hanya akan membayar 20K (Diskon 5K)*

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES 」 ──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

    `
}

exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
6281523940672 (Indosat/GoPay)

Atau kalian juga bisa donasi melalui QRis diatas.

Terima kasih!

Contact person Owner:
wa.me/${ownerNumber} (Owner)

Untuk melihat script yang bot gunakan,ketik ${prefix}sc
    `
}
