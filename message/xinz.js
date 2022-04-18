"use strict";
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    mentionedJid,
    WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys");
const fs = require("fs");
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process");
const qrcode = require("qrcode");
const ffmpeg = require("fluent-ffmpeg");
const fetch = require("node-fetch");
const ms = require("parse-ms");
const toMS = require("ms");
const axios = require("axios");
const cheerio = require("cheerio");
const speed = require("performance-now");
const yts = require("yt-search");
const translate = require("@vitalets/google-translate-api");
const listbahasa = require("@vitalets/google-translate-api/languages");
const { default: Axios } = require("axios");
const util = require("util");
const nhSearch = require('nhentai-node-api');
const canvas = require("canvacord");
const text2png = require("text2png");
const nhentai = require('nhentai-js');
const mathjs = require('mathjs');
const request = require('request');
const tele = require('telegraph-uploader');
const tts = require('node-gtts');
const FormData = require('form-data');
const getMime = require('file-type');
const Ra = require('ra-api');
const Zhr = require('zahir-api');
const cron = require('node-cron');
const puppeteer = require('puppeteer');
const gis = require('g-i-s');
const google = require('google-it');
const got = require('got')
const WSF = require('wa-sticker-formatter')
const petpet = require('pet-pet-gif')

// Nekos.life
const Nekos = require('nekos.life');
const neko = new Nekos();

// Sagiri (Source)
const sagiri = require('sagiri')
const saus = sagiri('c9a89b78a804ac00c3568ab82d0d8e7fcb98f731', { results: 5 })

const { color, bgcolor } = require("../lib/color");
const { serialize, serializeM, getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, logic } = require("../lib/myfunc");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const _prem = require("../lib/premium");
const _sewa = require("../lib/sewa");
const afk = require("../lib/afk");
const { ind } = require('../help/')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("../lib/banned");
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const tictac = require("../lib/tictac");
const { yta, ytv } = require("../lib/ytdl");
const { getUser, getPost, searchUser } = require('../lib/instagram');
const { fbdl } = require("../lib/fbdl");
const { fakeStatus, fakeToko } = require("./fakeReply");
const game = require("../lib/game");
const { requestPay, checkPay } = require("../lib/saweria");
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("../lib/badword");

// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let setting = JSON.parse(fs.readFileSync('./config.json'));
let mess = JSON.parse(fs.readFileSync('./message/mess.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let bancmd = JSON.parse(fs.readFileSync('./database/bancmd.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let antinsfw = JSON.parse(fs.readFileSync('./database/antinsfw.json'));
let nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'));
let antiviewonce = JSON.parse(fs.readFileSync('./database/antiviewonce.json'));
let badword = JSON.parse(fs.readFileSync('./database/badword.json'));
let grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
let senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let _respon = JSON.parse(fs.readFileSync('./database/respon.json'))
let _stick = JSON.parse(fs.readFileSync('./database/sticker.json'))
let _vn = JSON.parse(fs.readFileSync('./database/vn.json'))
let _update = JSON.parse(fs.readFileSync('./database/update.json'))
let _image = JSON.parse(fs.readFileSync('./database/image.json'))
let _video = JSON.parse(fs.readFileSync('./database/video.json'))
let _document = JSON.parse(fs.readFileSync('./database/document.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let _groupprefix = JSON.parse(fs.readFileSync('./database/groupprefix.json'))
let _claim = JSON.parse(fs.readFileSync('./database/claim.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));

// Hit
global.hit = {}

//Gambar Url
const qris = 'https://i.ibb.co/mHdLQxR/IMG-20210816-220955.jpg'
const bgbot = 'https://telegra.ph/file/af856da891451664cf100.jpg'
const qriss = 'https://i.ibb.co/wpgMKP7/IMG-20210817-010840.jpg'


// Game
let tictactoe = [];
let tebakgambar = [];
let kuis = [];
let kimiakuis = [];
let tebakbendera = [];
let tebaklirik = [];
let siapaaku = [];
let mathkuis = [];
let family100 = [];

//Nhentai
let nhid = [];
let nhidd = [];

//Simih
let simi = [];

// Jadi bot
if (global.conns instanceof Array) console.log()
else global.conns = []

let {
    ownerNumber,
    limitCount,
    lolkey,
    vhkey,
    zekskey,
    gamewaktu,
    tobzkey,
    aqulzkey
} = setting

moment.tz.setDefault("Asia/Jakarta").locale("id");
     
            // Leveling
            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) // Each minute
}

const addResponBot = (txt, respon) => {
    const obj = { txt: txt, resp: respon }
    _respon.push(obj)
    fs.writeFileSync('./database/respon.json', JSON.stringify(_respon))
}

const checkText = (txt) => {
    let status = false
    Object.keys(_respon).forEach((i) => {
        if (_respon[i].txt === txt) {
            status = true
        }
    })
    return status
}

const getRespon = (txt) => {
    let position = null
    Object.keys(_respon).forEach((i) => {
        if (_respon[i].txt === txt) {
            position = i
        }
    })
    if (position !== null) {
        return _respon[position].resp
    }
}

const getResponPosition = (txt) => {
    let position = null
    Object.keys(_respon).forEach((i) => {
        if (_respon[i].txt === txt) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getAllRespon = () => {
    const array = []
    Object.keys(_respon).forEach((i) => {
        array.push(_respon[i].txt)
    })
    return array
}

const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}

const addPrefixGroup = (id, prefix) => {
    const obj = { id: id, prefix: prefix }
    _groupprefix.push(obj)
    fs.writeFileSync('./database/groupprefix.json', JSON.stringify(_groupprefix))
}

const getPrefixPos = (id) => {
    let position = null
    Object.keys(_groupprefix).forEach((i) => {
        if (_groupprefix[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getPrefix = (id) => {
    let position = null
    Object.keys(_groupprefix).forEach((i) => {
        if (_groupprefix[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _groupprefix[position].prefix
    }
}


const checkGP = (id) => {
    let status = false
    Object.keys(_groupprefix).forEach((i) => {
        if (_groupprefix[i].id === id) {
            status = true
        }
    })
    return status
}

module.exports = async(xinz, msg, smsg, blocked, _afk, welcome, left) => {
    try {
        const m = smsg
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('DD/MM/YY HH:mm:ss z')
        const ucap = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const { type, quotedMsg, isGroup, isQuotedMsg, mentioned, sender, from, fromMe, pushname, chats, isBaileys } = msg
        if (fromMe && isBaileys) return
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, listMessage, buttonsMessage, contactsArray, groupInviteMessage } = MessageType
		const args = chats.split(' ')
		const command = chats.toLowerCase().split(' ')[0] || ''

     var levelRole = getLevelingLevel(sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }

        if (isGroup && checkGP(from)) {
            var prefix = getPrefix(from)
        } else {
        if (xinz.multi){
		    var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|!?#%^&.+,\/\\©^]/.test(command) ? command.match(/^[°•π÷×¶∆£¢€¥®™✓=|!?#%^&.+,\/\\©^]/gi) : '#'
        } else {
            if (xinz.nopref){
                prefix = ''
            } else {
                prefix = xinz.prefa
            }
        }
       }

        const isCmd = command.startsWith(prefix)
        const q = chats.slice(command.length + 1, chats.length)
        const body = chats.startsWith(prefix) ? chats : ''



        const botNumber = xinz.user.jid
        const groupMetadata = isGroup ? await xinz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false

        const isOwner = ownerNumber.includes(sender)
        const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
	    const isBan = cekBannedUser(sender, ban)
        const isClaimOn = _claim.includes(sender)
        const isBlocked = blocked.includes(sender)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntiVirtex = isGroup ? antivirtex.includes(from) : true
        const isAntiVO = isGroup ? antiviewonce.includes(from) : false
        const isWelcome = isGroup ? welcome.includes(from) : true
        const isAutoSticker = isGroup ? autosticker.includes(from) : false
        const isNsfw = isGroup ? nsfw.includes(from) : false
        const isAntiNsfw = isGroup ? antinsfw.includes(from) : true
        const isBadword = isGroup ? grupbadword.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isLevelingOn = isGroup ? _leveling.includes(from) : true
        const isUser = pendaftar.includes(sender)
        
        const gcounti = setting.gcount
        const gcount = isPremium ? gcounti.prem : gcounti.user

        const buttonmsg = xinz.sendButtons
        const buttonvid = xinz.sendButtonsVideo
        const listmsg = xinz.sendList
        const listmsgTunggal = xinz.sendListMsg
        const sendFileFromUrl = xinz.sendFileFromUrl

        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const nebal = (angka) => {
            return Math.floor(angka)
        }
        async function ssweb(link, type, q = '') {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setUserAgent(type ? 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36' : 'Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-J500G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/13.0 Chrome/83.0.4103.106 Mobile Safari/537.36')
            await page.goto(link)
            await page.setViewport(type ? { width: 1280, height: 720} : { width: 720, height: 1280})
            await page.screenshot({ path: './ss.png'})
            return await xinz.sendImage(from, fs.readFileSync('./ss.png'), q, msg).then(async(res) =>{ await browser.close();fs.unlinkSync('./ss.png')})
        }
        const reply = (teks, id, options) => {
            return xinz.reply(from, teks, id ? id : msg, options)
        }
        const testqq = (from, desk) => {
            return xinz.sendButtons(from, `Pilihan Anda Salah!!`, `Pilih yang bener, jangan ngasal!!`,`Pilih Enable atau Disable`, [{"buttonId": `${prefix}${desk} enable`,"buttonText": {"displayText": "ENABLE"},"type": "RESPONSE"},{"buttonId": `${prefix}${desk} disable`,"buttonText": {"displayText": "DISABLE"},"type": "RESPONSE"}], false, null)
        }
        const mentions = (teks, memberr, id) => {
            let ai = (id == null || id == undefined || id == false) ? xinz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : xinz.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": memberr}})
            return ai
        }
        const textImg = (teks, id, men) => {
            return xinz.textImg(from, teks, id ? id : msg, men ? men : [sender, "0@s.whatsapp.net"])
        }
        async function uptotele(path){
            let form = new FormData();
            form.append('photo', fs.createReadStream(path))
            let data = await Axios({ method: "POST", url: "https://telegra.ph/upload",data: form, headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}`}})
            return 'https://telegra.ph' + data.data[0].src
         }
        async function uptoibb(path){
            return new Promise (async (resolve, reject) => {
            require('imgbb-uploader')('91904762b2cd230ce1d861279bd6bf1d', path).then((res) =>{
            resolve(res.url)
		        	}).catch(reject)
        	})
         }
        async function uptoaqulz(path) {
	        let form = new FormData();
            form.append('apikey', aqulzkey)
            form.append('fileToUpload', fs.createReadStream(path))
            let data = await Axios({ method: "POST", url: "https://justaqul.xyz/upload",data: form, headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}`}})
            return data.data.result
        }
        async function uptougu(path) {
        	const bodyForm = new FormData();
         	bodyForm.append('files[]', fs.createReadStream(path)) 
            let data = await Axios({ method: 'POST', url: "https://uguu.se/upload.php",data: bodyForm,headers: {"accept": "*/*","accept-language": "en-US,en;q=0.9,id;q=0.8","Content-Type": `multipart/form-data; boundary=${bodyForm._boundary}`}})
            return data.data.files[0].url
		}
        async function uptofileio(path) {
        	const bodyForm = new FormData();
         	bodyForm.append('file', fs.createReadStream(path)) 
            let data = await Axios({ method: 'POST', url: "https://file.io/",data: bodyForm,headers: {"accept": "*/*","accept-language": "en-US,en;q=0.9,id;q=0.8","Content-Type": `multipart/form-data; boundary=${bodyForm._boundary}`}})
            return data.data.link
		}
        async function tiktokdl(Url) {
        	return new Promise (async (resolve, reject) => {
	    	await axios.request({ url: "https://ttdownloader.com/", method: "GET", headers: {"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "accept-language": "en-US,en;q=0.9,id;q=0.8", "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36", "cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"}}).then(respon => {
		    	const $ = cheerio.load(respon.data)
		    	const token = $('#token').attr('value')
		    	axios({ url: "https://ttdownloader.com/req/",method: "POST",data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),headers: {"accept": "*/*","accept-language": "en-US,en;q=0.9,id;q=0.8","content-type": "application/x-www-form-urlencoded; charset=UTF-8","user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36","cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"}}).then(res => {
	    			const ch = cheerio.load(res.data);const result = {status: res.status, result: {nowatermark: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'), watermark: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href')}}
				    resolve(result)
		        	}).catch(reject)
	        	}).catch(reject)
        	})
        }
        async function lirikLagu(query) {
        	return new Promise (async (resolve, reject) => {
            await got({ url: 'https://www.musixmatch.com/search/' + encodeURIComponent(query), method: 'GET', headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36' }}).then(respon => {
		    	const $ = cheerio.load(respon.body)
                const token = $('#search-all-results > div.main-panel > div:nth-child(1)').find('div.box-content > div > ul > li > div > div.media-card-body > div > h2 > a').attr('href')
                if (token === undefined) return resolve(undefined)
			    got('https://www.musixmatch.com' + token, { method: 'GET', headers: { 'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36' }}).then(response => {
			    	const ch = cheerio.load(response.body)
                    const title = ch('div.mxm-track-banner.top > div > div > div > div').find('div.track-title-header > div.mxm-track-title').find('h1').text().trim().replace(/Lyrics/, '')
                    const thumbnail = 'https:' + ch('div.mxm-track-banner.top > div > div > div').find('div > div > div > div > img').attr('src')
                    const artist = ch('div.mxm-track-banner.top > div > div > div > div').find('div.track-title-header > div.mxm-track-title > h2 > span').text().trim()
                    const lirik = ch('div.mxm-track-lyrics-container > div.container > div > div > div').find('div > div.mxm-lyrics > span').text().trim()
                    resolve({title, thumbnail, artist, lirik})
			        }).catch(reject)
	    	    }).catch(reject)
        	})
        }
        async function film() {
        	return new Promise (async (resolve, reject) => {
                axios.get('https://www.ngefilm21.biz/').then(get_data => {
                    const $ = cheerio.load(get_data.data)
                    let result = []
                    $("#Blog1 > div.blog-posts.hfeed.container > article").each(function (a, b) {
                        let genreText = $(b).find("span > a").eq(1).text();
                        result.push({ title: $(b).find("div > div > div > div.post-title-container > h2 > a").text().trim(), status: $(b).find("span:nth-child(1) > a").text().slice(1), genre: $(b).find("span > a").text().split(genreText)[1], url: $(b).find("div > div > div > div.post-title-container > h2 > a").attr("href"), thumburl: $(b).find("div > div > style").toString().split("url(")[1].split(");")[0].replace(/\\/gi, "").replace(/=w182/g, "=w1000") })
                    })
                    resolve(result)
                }).catch(reject)
            })
        }
        async function getGroup() {
            let totalchat = await xinz.chats.all();let grup = []; let a = []; let b = []
        	for (let c of totalchat){
	        	a.push(c.jid)
        	};for (let d of a){
	        	if (d && d.includes('g.us')){
        		b.push(d)
       		    }};for (let e of b){
	         	let ingfo = await xinz.groupMetadata(e)
	        	grup.push(ingfo)
	        }
	        return grup
        }

        const isImage = (type === 'imageMessage')
        const isVideo = (type === 'videoMessage')
        const isSticker = (type == 'stickerMessage')
        const isList = (type == 'listResponseMessage')
        const isButton = (type == 'buttonsResponseMessage')
        const isViewOnce = (type == 'viewOnceMessage')
        const isQuotedImage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
        const isQuotedAudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
        const isQuotedDocument = isQuotedMsg ? (quotedMsg.type === 'documentMessage') ? true : false : false
        const isQuotedVideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
        const isQuotedSticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false
        const isQuotedList = isQuotedMsg ? (quotedMsg.type === 'listResponseMessage') ? true : false : false
        const isQuotedButton = isQuotedMsg ? (quotedMsg.type === 'buttonsResponseMessage') ? true : false : false
        const isQuotedContact = isQuotedMsg ? (quotedMsg.type === 'contactMessage') ? true : false : false

        // Mode
        if (xinz.mode === 'self'){
            if (!isOwner && !fromMe) return
            if (fromMe && isBaileys) return
        }

        // Only Me
       if (isList && isCmd && !quotedMsg.fromMe) return
       if (isButton && isCmd && !quotedMsg.fromMe) return
       if (isButton && isCmd && quotedMsg.fromMe) xinz.deleteMessage(from, { id: msg.message.buttonsResponseMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })

        // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                xinz.groupRemove(from, [sender])
            }
        }

        if (isGroup && isAntiVirtex && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.length >= 7000) {
                reply(`*「 ANTI VIRTEX DETECTOR 」*\n\nSepertinya kamu mengirimkan Virtex, maaf kamu akan di kick`)
                xinz.groupRemove(from, [sender])
            }
        }

        if (isGroup && isViewOnce && isAntiVO && xinz.mode !== 'self') {
            let typenya = msg.message.viewOnceMessage.message["videoMessage"] ? msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage
            typenya["viewOnce"] = false
            typenya["caption"] = `\`\`\`Anti-ViewOnce\n\n\nCaption : ${(typenya.caption === '') ? 'NONE' : typenya.caption}\`\`\``
            let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: msg.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: msg.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }
            let pe = await xinz.prepareMessageFromContent(from, msg.message.viewOnceMessage.message, {quoted: peq})
            await xinz.relayWAMessage(pe)
        }
            

        if (isGroup && isAntiNsfw && !isOwner && !isGroupAdmins && isBotGroupAdmins ) {
            if (isImage) {
                var filePath = await xinz.downloadAndSaveMediaMessage(msg);
                var form = new FormData();
                form.append('img', fs.createReadStream(filePath));
                fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${lolkey}`,  {
                    method: 'POST',
                    credentials: 'include',
                    body: form
                }).then((res) => {
                    fs.unlinkSync(filePath)
                    let nsfw = false
                    if (Number(res.result.split("%")[0]) >= 60) nsfw = true
                    if (nsfw) {
                        mentions(`Gambar NSFW Terdeteksi maaf @${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`, [sender], true)
                        xinz.groupRemove(from, [sender])
                    }           
                })     
            }
        }

         if (isGroup && !isCmd && !isBaileys) {
                    const autoresp = getRespon(chats.toLowerCase())
                    if (autoresp !== null && autoresp !== undefined) return reply(autoresp)
                if (_stick.includes(chats.toLowerCase())) {
                    xinz.sendSticker(from, `./media/sticker/${chats}.webp`, msg)
                }
               if (_vn.includes(chats.toLowerCase())) {
                    xinz.sendMessage(from, fs.readFileSync(`./media/audio/${chats}.mp3`), audio, { quoted: msg, ptt: true, mimetype: 'audio/mpeg' })
                }
                }

       if (isQuotedMsg){
          if (nhid.includes(quotedMsg.id) && chats !== '') {
             reply('Tunggu sebentar ya,aku cari dulu')
             nhSearch.search(chats, ['popular','popular-week','popular-today','date'][Math.floor(Math.random() * 4)])
             .then((res) =>{
                        let list = []
                        for (let x of res){
                        const yy = {
                            title: `${x.title}`,
                            description: `Nhentai ini menggunakan bahasa ${x.language}`,
                            rowId: `${prefix}tes1234 ${x.id}`
                          }
                        list.push(yy)
                    }
                    xinz.sendListMsg(from, `Ini Kak`, `Hasil Pencarian Nhentai nya`, `Pilih ya kak`,`Pilih Disini`, `Nhentai Search`, list, msg)
                })
              }
          if (nhidd.includes(quotedMsg.id)) {
              nhentai.exists(args[0]).then((validate) => {
                if (validate === true) {
                nhentai.getDoujin(args[0]).then(async (yooi) => {
                let be = await xinz.prepareMessage(from, await getBuffer(yooi.pages[0]), image)
                let qweriio = be.message["ephemeralMessage"] ? be.message.ephemeralMessage : be
                var pepe = `*NHENTAI INFO*\n\n*Title:* ${yooi.title}\n*Japanese Title:* ${yooi.nativeTitle}\n*Pages:* ${yooi.details.pages[0]}\n*Artist:* ${yooi.details.artists[0]}\n*Uploaded:* ${yooi.details.uploaded[0]}`
                let qqppp = [{
                    "buttonId": `${prefix}nhdll ${args[0]}`,
                    "buttonText": {
                        "displayText": "LINK DOWNLOAD"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}nhdl ${args[0]}`,
                    "buttonText": {
                        "displayText": "FILE"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}nhdlll ${args[0]}`,
                    "buttonText": {
                        "displayText": "GAMBAR"
                    },
                    "type": "RESPONSE"
                }]
                xinz.sendButtons(from, `Data didapatkan!`, pepe, `Mau dikirim via Document atau disajikan dalam link pdf, ataukah gambar?`, qqppp, true, msg, null, qweriio.message.imageMessage)
                   })
                } else {
                  reply(`Code tidak valid`)
                }
              })
           }
        }

        if (isGroup && isAutoSticker) {
                if (isImage || isVideo) {
                    let media = await xinz.downloadAndSaveMediaMessage(msg, `./sticker/${sender}`)
                    xinz.sendSticker(from, media, msg).then((res) => fs.unlinkSync(media))
             }
        }

//function leveling
                        if (isGroup && isLevelingOn && isUser && xinz.mode !== 'self' && !isMuted && !isGained(sender)) {
                                const currentLevel = getLevelingLevel(sender)
                                const checkId = getLevelingId(sender)
                                try {
                                        addCooldown(sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 150
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(sender)
                                        addLevelingXp(sender, amountXp)
                                        if (requiredXp <= getLevelingXp(sender)) {
                                        addLevelingLevel(sender, 1)
                                        await textImg(`*──「 LEVEL UP 」──*\n\n❑ *Name*: @${sender.split('@')[0]}\n❑ *XP*: ${getLevelingXp(sender)}\n❑ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n❑ *Role*: ${role} \n\nCongrats!! 🎉\nSemakin Sering Berinteraksi Dengan Bot Maka Semakin Banyak Xp Di Dapatkan`)
                                }
                        } catch (err) {
                                console.error(err)
                        }
                }
        // Badword
        if (isGroup && isBadword && !isOwner && !isGroupAdmins && !fromMe){
            for (let kasar of badword){
                if (chats.toLowerCase().includes(kasar)){
                    if (isCountKasar(sender, senbadword)){
                        if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
                        reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
                        xinz.groupRemove(from, [sender])
                        delCountKasar(sender, senbadword)
                    } else {
                        addCountKasar(sender, senbadword)
                        reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
                    }
                }
            }
        }
        if (isGroup && isBaileys) {
            if (mentioned.length >= groupMembers.length){
                if (!chats.match(/(@)/gi)) {
                    mentions(`Terdeteksi @${sender.split('@')[0]} melakukan hidetag`, [sender], false)
                }
            }
        }

        // Banned 
        if (isBlocked && isCmd && command.split(prefix)[1] !== 'unban')textImg(ind.BlockBan(ownerNumber[0].split('@')[0], prefix))
        if (isBan && isCmd && command.split(prefix)[1] !== 'unban') return textImg(ind.BlockBan(ownerNumber[0].split('@')[0], prefix))
        if (isBan) return
        if (isBlocked) return 
        if (isCmd && isGroup && bancmd.includes(command.split(prefix)[1] + from)) return reply('Command itu di lock di group ini')
        BannedExpired(ban)

        // MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner) return
            }

        // TicTacToe
        if (isTicTacToe(from, tictactoe)) tictac(xinz, chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance)
       
            function ramadhan(kapan){
                var ibadah = ms(kapan - Date.now())
                return `${ibadah.days} Hari ${ibadah.hours} Jam ${ibadah.minutes} Menit`
            }
                var waktunya = 1632934799400
                const cekRamadhan = ramadhan(waktunya)

        // GAME 
        game.cekWaktuFam(xinz, family100)
        game.cekWaktuTG(xinz, tebakgambar)
        game.cekWaktuK(xinz, kuis)
        game.cekWaktuTB(xinz, tebakbendera)
        game.cekWaktuTL(xinz, tebaklirik)
        game.cekWaktuSA(xinz, siapaaku)
        game.cekWaktuKK(xinz, kimiakuis)
        game.cekWaktuMK(xinz, mathkuis)
        game.cekWaktuSimih(simi)


        // GAME 
        if (game.isTebakGambar(from, tebakgambar) && isUser){
            if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
                var htgm = randomNomor(100)
                addBalance(sender, htgm, balance)
                let list = []
                let kuispref = [`family100`,`tebakgambar`,`kuis`,`tebakbendera`,`tebaklirik`,`siapaaku`,`kimiakuis`,`mathkuis`,`dadu`]
                let kuisdesk = [`Game Dimana berusaha menebak jawaban terbanyak berdasarkan survey 100 orang`,`Game kombinasi beberapa gambar yang apabila dirangkai dapat menjadi sebuah kata`,`Game asah otak dengan jawaban jenaka`,`Tebak nama suatu negara berdasarkan emoticon yang diberikan`,`Menebak satu kata dari sepotong lirik lagu yang diberikan`,`Game tebak-tebakan Menentukan sesuatu berdasarkan kisi-kisi yang diberikan`,`Tebak unsur kimia dari nama ilmiah nya`,`Game Hitung-hitungan menggunakan operasi random (: + - ×)`,`Random dadu berdasarkan tingkat keberuntungan, jika mendapat angka 6 kamu dinyatakan menang`]
                let kuistitle = [`Family100 Game`,`Tebak Gambar`,`Kuis Game`,`Tebak Bendera`,`Tebak Lirik`,`Siapa Aku?`,`Tebak Kimia-Unsur`,`Matematika Hitungan`,`Dadu Games`]
                let startnum = 0 ; let startnumm = 0
                    for (let x of kuispref) {
                        const yyyy = {
                        title: `${kuistitle[startnum++]}`,
                        description: `${kuisdesk[startnumm++]}`,
                        rowId: `${prefix}${x}`
                      }
                        list.push(yyyy)
                    }
                xinz.sendListMsg(from, `Selamat @${sender.split('@')[0]}`, `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`, `Ingin bermain kuis lain? Pilih dibawah`,`Pilih Disini`, `List Kuis`, list, null, [sender])
                tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
            }
        }
        if (game.isKuis(from, kuis) && isUser){
            if (chats.toLowerCase().includes(game.getJawabanKuis(from, kuis))){
                var htgmk = randomNomor(100)
                addBalance(sender, htgmk, balance)
                let list = []
                let kuispref = [`family100`,`tebakgambar`,`kuis`,`tebakbendera`,`tebaklirik`,`siapaaku`,`kimiakuis`,`mathkuis`,`dadu`]
                let kuisdesk = [`Game Dimana berusaha menebak jawaban terbanyak berdasarkan survey 100 orang`,`Game kombinasi beberapa gambar yang apabila dirangkai dapat menjadi sebuah kata`,`Game asah otak dengan jawaban jenaka`,`Tebak nama suatu negara berdasarkan emoticon yang diberikan`,`Menebak satu kata dari sepotong lirik lagu yang diberikan`,`Game tebak-tebakan Menentukan sesuatu berdasarkan kisi-kisi yang diberikan`,`Tebak unsur kimia dari nama ilmiah nya`,`Game Hitung-hitungan menggunakan operasi random (: + - ×)`,`Random dadu berdasarkan tingkat keberuntungan, jika mendapat angka 6 kamu dinyatakan menang`]
                let kuistitle = [`Family100 Game`,`Tebak Gambar`,`Kuis Game`,`Tebak Bendera`,`Tebak Lirik`,`Siapa Aku?`,`Tebak Kimia-Unsur`,`Matematika Hitungan`,`Dadu Games`]
                let startnum = 0 ; let startnumm = 0
                    for (let x of kuispref) {
                        const yyyy = {
                        title: `${kuistitle[startnum++]}`,
                        description: `${kuisdesk[startnumm++]}`,
                        rowId: `${prefix}${x}`
                      }
                        list.push(yyyy)
                    }
                xinz.sendListMsg(from, `Selamat @${sender.split('@')[0]}`, `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanKuis(from, kuis)}\n*Hadiah :* $${htgmk}\n\nIngin bermain lagi? kirim *${prefix}kuis*`, `Ingin bermain kuis lain? Pilih dibawah`,`Pilih Disini`, `List Kuis`, list, null, [sender])
                kuis.splice(game.getKuisPosi(from, kuis), 1)
            }
        }
        if (game.isTebakBendera(from, tebakbendera) && isUser){
            if (chats.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
                var htgmkq = randomNomor(100)
                addBalance(sender, htgmkq, balance)
                let list = []
                let kuispref = [`family100`,`tebakgambar`,`kuis`,`tebakbendera`,`tebaklirik`,`siapaaku`,`kimiakuis`,`mathkuis`,`dadu`]
                let kuisdesk = [`Game Dimana berusaha menebak jawaban terbanyak berdasarkan survey 100 orang`,`Game kombinasi beberapa gambar yang apabila dirangkai dapat menjadi sebuah kata`,`Game asah otak dengan jawaban jenaka`,`Tebak nama suatu negara berdasarkan emoticon yang diberikan`,`Menebak satu kata dari sepotong lirik lagu yang diberikan`,`Game tebak-tebakan Menentukan sesuatu berdasarkan kisi-kisi yang diberikan`,`Tebak unsur kimia dari nama ilmiah nya`,`Game Hitung-hitungan menggunakan operasi random (: + - ×)`,`Random dadu berdasarkan tingkat keberuntungan, jika mendapat angka 6 kamu dinyatakan menang`]
                let kuistitle = [`Family100 Game`,`Tebak Gambar`,`Kuis Game`,`Tebak Bendera`,`Tebak Lirik`,`Siapa Aku?`,`Tebak Kimia-Unsur`,`Matematika Hitungan`,`Dadu Games`]
                let startnum = 0 ; let startnumm = 0
                    for (let x of kuispref) {
                        const yyyy = {
                        title: `${kuistitle[startnum++]}`,
                        description: `${kuisdesk[startnumm++]}`,
                        rowId: `${prefix}${x}`
                      }
                        list.push(yyyy)
                    }
                xinz.sendListMsg(from, `Selamat @${sender.split('@')[0]}`, `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTB(from, tebakbendera)}\n*Hadiah :* $${htgmkq}\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`, `Ingin bermain kuis lain? Pilih dibawah`,`Pilih Disini`, `List Kuis`, list, null, [sender])
                tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
            }
        }
        if (game.isTebakLirik(from, tebaklirik) && isUser){
            if (chats.toLowerCase().includes(game.getJawabanTL(from, tebaklirik))){
                var htgmkw = randomNomor(100)
                addBalance(sender, htgmkw, balance)
                let list = []
                let kuispref = [`family100`,`tebakgambar`,`kuis`,`tebakbendera`,`tebaklirik`,`siapaaku`,`kimiakuis`,`mathkuis`,`dadu`]
                let kuisdesk = [`Game Dimana berusaha menebak jawaban terbanyak berdasarkan survey 100 orang`,`Game kombinasi beberapa gambar yang apabila dirangkai dapat menjadi sebuah kata`,`Game asah otak dengan jawaban jenaka`,`Tebak nama suatu negara berdasarkan emoticon yang diberikan`,`Menebak satu kata dari sepotong lirik lagu yang diberikan`,`Game tebak-tebakan Menentukan sesuatu berdasarkan kisi-kisi yang diberikan`,`Tebak unsur kimia dari nama ilmiah nya`,`Game Hitung-hitungan menggunakan operasi random (: + - ×)`,`Random dadu berdasarkan tingkat keberuntungan, jika mendapat angka 6 kamu dinyatakan menang`]
                let kuistitle = [`Family100 Game`,`Tebak Gambar`,`Kuis Game`,`Tebak Bendera`,`Tebak Lirik`,`Siapa Aku?`,`Tebak Kimia-Unsur`,`Matematika Hitungan`,`Dadu Games`]
                let startnum = 0 ; let startnumm = 0
                    for (let x of kuispref) {
                        const yyyy = {
                        title: `${kuistitle[startnum++]}`,
                        description: `${kuisdesk[startnumm++]}`,
                        rowId: `${prefix}${x}`
                      }
                        list.push(yyyy)
                    }
                xinz.sendListMsg(from, `Selamat @${sender.split('@')[0]}`, `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTL(from, tebaklirik)}\n*Hadiah :* $${htgmkw}\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`, `Ingin bermain kuis lain? Pilih dibawah`,`Pilih Disini`, `List Kuis`, list, null, [sender])
                tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
            }
        }
        if (game.isSiapaAku(from, siapaaku) && isUser){
            if (chats.toLowerCase().includes(game.getJawabanSA(from, siapaaku))){
                var htgmke = randomNomor(100)
                addBalance(sender, htgmke, balance)
                let list = []
                let kuispref = [`family100`,`tebakgambar`,`kuis`,`tebakbendera`,`tebaklirik`,`siapaaku`,`kimiakuis`,`mathkuis`,`dadu`]
                let kuisdesk = [`Game Dimana berusaha menebak jawaban terbanyak berdasarkan survey 100 orang`,`Game kombinasi beberapa gambar yang apabila dirangkai dapat menjadi sebuah kata`,`Game asah otak dengan jawaban jenaka`,`Tebak nama suatu negara berdasarkan emoticon yang diberikan`,`Menebak satu kata dari sepotong lirik lagu yang diberikan`,`Game tebak-tebakan Menentukan sesuatu berdasarkan kisi-kisi yang diberikan`,`Tebak unsur kimia dari nama ilmiah nya`,`Game Hitung-hitungan menggunakan operasi random (: + - ×)`,`Random dadu berdasarkan tingkat keberuntungan, jika mendapat angka 6 kamu dinyatakan menang`]
                let kuistitle = [`Family100 Game`,`Tebak Gambar`,`Kuis Game`,`Tebak Bendera`,`Tebak Lirik`,`Siapa Aku?`,`Tebak Kimia-Unsur`,`Matematika Hitungan`,`Dadu Games`]
                let startnum = 0 ; let startnumm = 0
                    for (let x of kuispref) {
                        const yyyy = {
                        title: `${kuistitle[startnum++]}`,
                        description: `${kuisdesk[startnumm++]}`,
                        rowId: `${prefix}${x}`
                      }
                        list.push(yyyy)
                    }
                xinz.sendListMsg(from, `Selamat @${sender.split('@')[0]}`, `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSA(from, siapaaku)}\n*Hadiah :* $${htgmke}\n\nIngin bermain lagi? kirim *${prefix}siapaaku*`, `Ingin bermain kuis lain? Pilih dibawah`,`Pilih Disini`, `List Kuis`, list, null, [sender])
                siapaaku.splice(game.getSAPosi(from, siapaaaku), 1)
            }
        }
        if (game.isKimiaKuis(from, kimiakuis) && isUser){
            if (chats.includes(game.getJawabanKK(from, kimiakuis))){
                var htgmkr = randomNomor(100)
                addBalance(sender, htgmkr, balance)
                let list = []
                let kuispref = [`family100`,`tebakgambar`,`kuis`,`tebakbendera`,`tebaklirik`,`siapaaku`,`kimiakuis`,`mathkuis`,`dadu`]
                let kuisdesk = [`Game Dimana berusaha menebak jawaban terbanyak berdasarkan survey 100 orang`,`Game kombinasi beberapa gambar yang apabila dirangkai dapat menjadi sebuah kata`,`Game asah otak dengan jawaban jenaka`,`Tebak nama suatu negara berdasarkan emoticon yang diberikan`,`Menebak satu kata dari sepotong lirik lagu yang diberikan`,`Game tebak-tebakan Menentukan sesuatu berdasarkan kisi-kisi yang diberikan`,`Tebak unsur kimia dari nama ilmiah nya`,`Game Hitung-hitungan menggunakan operasi random (: + - ×)`,`Random dadu berdasarkan tingkat keberuntungan, jika mendapat angka 6 kamu dinyatakan menang`]
                let kuistitle = [`Family100 Game`,`Tebak Gambar`,`Kuis Game`,`Tebak Bendera`,`Tebak Lirik`,`Siapa Aku?`,`Tebak Kimia-Unsur`,`Matematika Hitungan`,`Dadu Games`]
                let startnum = 0 ; let startnumm = 0
                    for (let x of kuispref) {
                        const yyyy = {
                        title: `${kuistitle[startnum++]}`,
                        description: `${kuisdesk[startnumm++]}`,
                        rowId: `${prefix}${x}`
                      }
                        list.push(yyyy)
                    }
                xinz.sendListMsg(from, `Selamat @${sender.split('@')[0]}`, `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanKK(from, kimiakuis)}\n*Hadiah :* $${htgmkr}\n\nIngin bermain lagi? kirim *${prefix}kimiakuis*`, `Ingin bermain kuis lain? Pilih dibawah`,`Pilih Disini`, `List Kuis`, list, null, [sender])
                kimiakuis.splice(game.getKKPosi(from, kimiakuis), 1)
            }
        }
        if (game.isMathKuis(from, mathkuis) && isUser){
            if (chats.toLowerCase().includes(game.getJawabanMK(from, mathkuis))){
                var htgmkt = randomNomor(100)
                addBalance(sender, htgmkt, balance)
                let list = []
                let kuispref = [`family100`,`tebakgambar`,`kuis`,`tebakbendera`,`tebaklirik`,`siapaaku`,`kimiakuis`,`mathkuis`,`dadu`]
                let kuisdesk = [`Game Dimana berusaha menebak jawaban terbanyak berdasarkan survey 100 orang`,`Game kombinasi beberapa gambar yang apabila dirangkai dapat menjadi sebuah kata`,`Game asah otak dengan jawaban jenaka`,`Tebak nama suatu negara berdasarkan emoticon yang diberikan`,`Menebak satu kata dari sepotong lirik lagu yang diberikan`,`Game tebak-tebakan Menentukan sesuatu berdasarkan kisi-kisi yang diberikan`,`Tebak unsur kimia dari nama ilmiah nya`,`Game Hitung-hitungan menggunakan operasi random (: + - ×)`,`Random dadu berdasarkan tingkat keberuntungan, jika mendapat angka 6 kamu dinyatakan menang`]
                let kuistitle = [`Family100 Game`,`Tebak Gambar`,`Kuis Game`,`Tebak Bendera`,`Tebak Lirik`,`Siapa Aku?`,`Tebak Kimia-Unsur`,`Matematika Hitungan`,`Dadu Games`]
                let startnum = 0 ; let startnumm = 0
                    for (let x of kuispref) {
                        const yyyy = {
                        title: `${kuistitle[startnum++]}`,
                        description: `${kuisdesk[startnumm++]}`,
                        rowId: `${prefix}${x}`
                      }
                        list.push(yyyy)
                    }
                xinz.sendListMsg(from, `Selamat @${sender.split('@')[0]}`, `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMK(from, mathkuis)}\n*Hadiah :* $${htgmkt}\n\nIngin bermain lagi? kirim *${prefix}mathkuis*`, `Ingin bermain kuis lain? Pilih dibawah`,`Pilih Disini`, `List Kuis`, list, null, [sender])
                mathkuis.splice(game.getMKPosi(from, mathkuis), 1)
            }
        }
        if (game.isfam(from, family100) && isUser){
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (chats.toLowerCase().includes(i)){
                    var htgmi = Math.floor(Math.random() * 20) + 1
                    addBalance(sender, htgmi, balance)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmi}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                let list = []
                let kuispref = [`family100`,`tebakgambar`,`kuis`,`tebakbendera`,`tebaklirik`,`siapaaku`,`kimiakuis`,`mathkuis`,`dadu`]
                let kuisdesk = [`Game Dimana berusaha menebak jawaban terbanyak berdasarkan survey 100 orang`,`Game kombinasi beberapa gambar yang apabila dirangkai dapat menjadi sebuah kata`,`Game asah otak dengan jawaban jenaka`,`Tebak nama suatu negara berdasarkan emoticon yang diberikan`,`Menebak satu kata dari sepotong lirik lagu yang diberikan`,`Game tebak-tebakan Menentukan sesuatu berdasarkan kisi-kisi yang diberikan`,`Tebak unsur kimia dari nama ilmiah nya`,`Game Hitung-hitungan menggunakan operasi random (: + - ×)`,`Random dadu berdasarkan tingkat keberuntungan, jika mendapat angka 6 kamu dinyatakan menang`]
                let kuistitle = [`Family100 Game`,`Tebak Gambar`,`Kuis Game`,`Tebak Bendera`,`Tebak Lirik`,`Siapa Aku?`,`Tebak Kimia-Unsur`,`Matematika Hitungan`,`Dadu Games`]
                let startnum = 0 ; let startnumm = 0
                    for (let x of kuispref) {
                        const yyyy = {
                        title: `${kuistitle[startnum++]}`,
                        description: `${kuisdesk[startnumm++]}`,
                        rowId: `${prefix}${x}`
                      }
                        list.push(yyyy)
                    }
                xinz.sendListMsg(from, `Family Game`, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, `Ingin bermain kuis lain? Pilih dibawah`,`Pilih Disini`, `List Kuis`, list, null)
                family100.splice(game.getfamposi(from, family100), 1)
            }
        }
        // Premium
        _prem.expiredCheck(global.xinz, premium)

        if (isCmd && !isUser){
			pendaftar.push(sender)
			fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar))
        } 

        // Add hit
        if (isCmd) {
            axios.get('https://api.countapi.xyz/hit/ChikaBot/visits').then(({data}) => hit.all = data.value)
            axios.get(`https://api.countapi.xyz/hit/ChikaBot${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`).then(({data}) => hit.today = data.value)
        }

        // Sewa
        _sewa.expiredCheck(global.xinz, sewa)


        // AFK
        if (isGroup && xinz.mode !== 'self' && !isBaileys) {
            if (mentioned.length !== 0){
            if (mentioned.includes(xinz.user.jid)) return textImg(`Iya, ada yg bisa Faxa Bantu Kak?`)
                for (let ment of mentioned) {
                    if (afk.checkAfkUser(ment, _afk)) {
                        const getId = afk.getAfkId(ment, _afk)
                        const getReason = afk.getAfkReason(getId, _afk)
                        const getTime = Date.now() - afk.getAfkTime(getId, _afk)
                        const heheh = ms(getTime)
                        await mentions(`@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`, [ment], true)
                        xinz.sendMess(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nIn Group : ${groupName}\nPesan : ${chats}`)
                    }
                }
            }
                if (afk.checkAfkUser(sender, _afk)) {
                    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
                    fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
                    await mentions(`@${sender.split('@')[0]} telah kembali`, [sender], true)
                }
            }

        // Auto Read
        if (xinz.mode !== 'public') {
            xinz.chatRead(from, "read")
        }

        // CMD
        if (isCmd && !isGroup && !isBaileys) {
			//xinz.updatePresence(from, Presence.composing)
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[CMD]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`))
        }
        if (isCmd && isGroup && !isBaileys) {
			//xinz.updatePresence(from, Presence.composing)
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[CMD]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }

        if (isOwner){
            if (chats.startsWith("> ")){
                console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                try {
                    let evaled = await eval(chats.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    textImg(`${evaled}`)
                } catch (err) {
                    textImg(`${err}`)
                }
            } else if (chats.startsWith("$ ")){
                console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                exec(chats.slice(2), (err, stdout) => {
					if (err) return textImg(`${err}`)
					if (stdout) textImg(`${stdout}`)
				})
            }
        }

        switch(command){
            case 'prefix': case 'cekprefix':{
                if (isGroup && checkGP(from)) return reply(getPrefix(from))
                textImg(`${prefix}`)
            }
                break
            case prefix+'setprefixgrup':
                if (!isGroup) return reply('Only Group')
                if (checkGP(from)) return reply(`Group ini sudah diatur prefixnya, harap reset terlebih dahulu dengan cara ${prefix}resetprefix`)
				if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                addPrefixGroup(from, args[1])
                textImg(`Sukses mengatur prefix di group ini menjadi = "${args[1]}"`)
                break
            case prefix+'resetprefix':
                if (!isGroup) return reply(ind.groupOnly())
				if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                _groupprefix.splice(getPrefixPos(from), 1)
                fs.writeFileSync('./database/groupprefix.json', JSON.stringify(_groupprefix))
                  textImg("Sukses kembali ke Prefix Awal bot")
                 break
            case prefix+'pantun':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson(`https://api.lolhuman.xyz/api/random/pantun?apikey=${lolkey}`)
                .then((kontlo)=>{
                    textImg(kontlo.result)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
            }
                break
            case prefix+'?':case prefix+'menu': case prefix+'help':{
                let qqppp = [{
                    "buttonId": `${prefix}allmenu`,
                    "buttonText": {
                        "displayText": "COMMAND"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}rules`,
                    "buttonText": {
                        "displayText": "RULES"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}nhmenu`,
                    "buttonText": {
                        "displayText": "NHENTAI BOT BETA"
                    },
                    "type": "RESPONSE"
                }]
                let a = 'https://telegra.ph/file/d68ec3b03503f5fd991a6.jpg'
                xinz.sendButtonsLoc(from, `*Hai Kak @${sender.split('@')[0]}*\n\nSaya *Fax BOT*, Bot WhatsApp yg membantu kamu untuk mempermudah sesuatu seperti Membuat Sticker dan Lainnya, Ada Butuh Info Dariku?`, `Note: Kalo kamu pakai wa lama atau mod, dan button ga keliatan, langsung aja ketik ${prefix}allmenu`, qqppp, await getBuffer(a), [sender])
                }
                break
            case prefix+'allmenu':{
                    try {
                        var pic = await xinz.getProfilePicture(sender)
                    } catch {
                        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    }
                    const jumlahCommand = require('util').inspect(hit.all)
                    const jumlahHarian = require('util').inspect(hit.today)
                    const jumlahUser = pendaftar.length
                    const levelMenu = getLevelingLevel(sender)
                    const xpMenu = getLevelingXp(sender)
                    const reqXp  = 200 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			        const uangku = getBalance(sender, balance)
                    const Limitnya = isPremium ? `UNLIMITED*\n*Expire : ${ms(_prem.getPremiumExpired(sender, premium) - Date.now()).days} day(s) ${ms(_prem.getPremiumExpired(sender, premium) - Date.now()).hours} hour(s) ${ms(_prem.getPremiumExpired(sender, premium) - Date.now()).minutes} minute(s)` : `${getLimit(sender, limitCount, limit)}`
                    var b = (isGroup && checkGP(from)) ? getPrefix(from) : xinz.mode
                    let qqppp = [{
                    "buttonId": `${prefix}listqq`,
                    "buttonText": {
                        "displayText": "PARTNER BOT"
                    },
                    "type": "RESPONSE"
                    }]
                    xinz.sendButtonsLoc(from, ind.menu(prefix, ucap, pushname, jumlahUser, runtime(process.uptime()), ownerNumber[0].split("@")[0], 'Rashidsiregar28', jumlahHarian, jumlahCommand, sender, time, cekRamadhan, `*${b.toUpperCase()}*`, levelMenu, xpMenu, reqXp, uangku, role, Limitnya), `Pilih menu dibawah!`, qqppp, await getBuffer(pic), [sender, "0@s.whatsapp.net"]).then((res) =>{
                    let list = []
                    let listmenu = [`groupmenu`,`menupremi`,`textmenu`,`imagemaker`, `sessionmenu`,`kerangmenu`,`praymenu`,`ownermenu`,`funmenu`,`mediamenu`,`weebsmenu`,`downloader`,`stickermenu`,`primbonmenu`,`levelingmenu`,`about`,`18`,`owner`,`sewabot`,`icagroup`]
                    let listmenuu = [`Menu Group`,`Premium Menu`,`TextMaker`,`Image Effect`,`Multi-Session Feature`,`Kerang Menu`,`PrayMenu`,`Owner Command`,`Fun Features`,`Misc and Media`,`Weebs Zone`,`Downloader`,`Sticker Editing`,`Primbon`,`Leveling Xp and Balance`,`About Bot`,`Nsfw Command`,`OwnerBot`,`Rent this Bot`,`Official Group`]
                    let listmenuuu = [`List Fitur Khusus Admin-Group`,`Hanya bisa dipakai oleh User-Premium`,`List Menu TextMaker`,`Edit Gambarmu menjadi efek yang keren`,`Salah Satu fiturnya jadibot sementara😁`,`Random Jawaban bot kaka, masa ga tau, ga pernah nonton Spongebob ya? 😍`, `Fitur keagamaan, harap Jangan diPermainkan, ayo kita tingkatkan toleransi 😍😍`,`Ini Cuman Untuk Ownerku`,`Fitur bot yg bisa dipake buat happy-an`,`Butuh Info atau Media, Klik disini`,`Zona Wibu-Only, BaKaa >/\/\<`,`Ingin download Sesuatu?`,`Bikin Sticker dan lainnya kaka`,`Ramalan Primbon buat kamu yg percaya ramalan xixi`,`Tingkatkan xp mu ya beb🥰🥰`,`Fitur ini menampilkan command" lengkap tentang bot`,`Only for 18+ madafaka`,`Kalo mau tau Ownerku, bisa klik ini kok`,`Mau sewaBot kak? info lebih lanjut, Klik ini`,`Faxa Bot forum Group-WhatsApp`]
                    let nombor = 1
                    let startnum = 0
                    let startnumm = 0
                    for (let x of listmenu) {
                        const yy = {title: 'Sub-Menu Ke-' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `${listmenuuu[startnumm++]}`,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
                    }
                    xinz.sendList(from, `Selamat ${ucap}`, `Hai kak @${sender.split('@')[0]}, pilih Menu Fax Bot disini`, `Jangan lupa Donasi ya Kak`,`Pilih Disini`, list, msg, [sender])
                })
            }
                break
                case prefix+'listqq':
                    let listown = ['6281259121031','6285757309004','6281523940672']
                    let arrey = []
                    for ( let x of listown){
                        const getnem = xinz.getName(x + '@s.whatsapp.net')
                        const conara = { displayName: getnem, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + getnem + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + x + ':+' + x + '\n' + 'END:VCARD'.trim()}
                        arrey.push(conara)
                    }
                    xinz.sendMessage(from, { contacts: arrey }, contactsArray, { quoted: msg}).then((res) => xinz.sendMessage(from, `Itu List Partner dan Contributor bot Fax`, text, { quoted: res }))
                break
//------------------< PRAY Command >-------------------
                case prefix+'listsurah':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`).then((res) =>{
                    let ini_txt = 'List Surah:\n'
                    for (var x in res.result) {
                        ini_txt += `${x}. ${res.result[x]}\n`
                    }
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                     })
                  .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'renungharian':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    fetchJson('http://docs-jojo.herokuapp.com/api/renungan').then((res) =>{
                    let ini_txt = ''
                    ini_txt += `Judul : ${res.judul}\n`
                    ini_txt += `Isi : ${res.Isi}\n\n`
                    ini_txt += `Pesan : ${res.pesan}\n`
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                     })
                  .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
               case prefix+'alkitabharian':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    fetchJson('http://docs-jojo.herokuapp.com/api/alkitab').then((res) =>{
                    let ini_txt = ''
                    ini_txt += `Ayat : ${res.result.ayat}\n`
                    ini_txt += `Isi : ${res.result.isi}\n\n`
                    ini_txt += `Link : ${res.result.link}\n`
                    xinz.sendFileFromUrl(from, res.result.img, ini_txt, msg)
                    limitAdd(sender, limit)
                     })
                  .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
               case prefix+'asmaulhusna':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
                    .then((res) =>{
                    let ini_txt = `No : ${res.result.index}\n`
                    ini_txt += `Latin: ${res.result.latin}\n`
                    ini_txt += `Arab : ${res.result.ar}\n`
                    ini_txt += `Indonesia : ${res.result.id}\n`
                    ini_txt += `English : ${res.result.en}`
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                    })
                  .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'alquranaudio': case prefix+'quranaudio':
                    if (!q) return reply(`Cara Penggunaan : \n${command} Nomor_Surah\n\n ${command} 18/10 (Untuk Membuka Audio Per Ayat)`)
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    xinz.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/quran/audio/${args[1]}?apikey=${lolkey}`, '', msg).catch(() => reply(mess.error.api))
                    break
                case prefix+'alquran': case prefix+'surah': case prefix+'surat': case prefix+'quran': case prefix+'alqur\'an': case prefix+'qur\'an':
                    if (!q) return reply(`Cara Penggunaan : \n${command} Nomor_surah\n\n ${command} 18/10 (Untuk Membuka 1 ayat saja pada nomor Surah)\n\n ${command} 18/1-10 (Untuk Membuka Beberapa ayat)`)
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    fetchJson(`https://api.lolhuman.xyz/api/quran/${args[1]}?apikey=${lolkey}`)
                    .then((res) =>{
                    let ayat = res.result.ayat
                    let ini_txt = `QS. ${res.result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        var arab = x.arab
                        var nomor = x.ayat
                        var latin = x.latin
                        var indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    let ini_txtt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    let ini_txttt = ini_txtt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    let ini_txtttt = ini_txttt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    textImg(ini_txtttt)
                    limitAdd(sender, limit)
                    })
                  .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'alkitab': case prefix+'alkitabsearch':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!q) return reply(`Contoh penggunaan ${command} matius`)
                    fetchJson('http://docs-jojo.herokuapp.com/api/alkitabsearch?q=' + q)
                    .then((res) =>{
                    let txt = 'Alkitab Result :\n\n'
                    for (let x of res.result) {
                        txt += `Ayat : ${x.ayat}\n`
                        txt += `Isi : ${x.isi}\n`
                        txt += `Link : ${x.link}\n\n`
                     }
                     textImg(txt)
                    limitAdd(sender, limit)
                    })
              .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
               case prefix+'randomquran': case prefix+'randomalquran':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    fetchJson('https://api.zeks.xyz/api/randomquran?apikey=' + zekskey)
                    .then((res) =>{
                     limitAdd(sender, limit)
                     textImg(jsonformat(res.result))
                     .then((lol) => {
                     if (res.result.ayat >= 50) return xinz.sendMessage(from, `Maaf, Ayat melebihi batas maksimum Bot mengirim Audio`, text, { quoted: lol })
                     xinz.sendFileFromUrl(from, res.result.audio, '', lol)
                     })
                     })
              .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
               case prefix+'jadwalsholat': case prefix+'js': case prefix+'jadwalsolat': case prefix+'jadwalshalat': case prefix+'jadwalshalat': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!q) return reply(`Contoh penggunaan ${command} jakarta`)
                    var url = `https://m.dream.co.id/jadwal-salat/${q}`
                    axios.get(url).then((res) =>{
                    const $ = cheerio.load(res.data)
                    const a = $('table').find('tbody > tr > td')
                    const daerah = url.split('/')[4]
                    const shubuh = $(a).eq(1).text()
                    const dhuha = $(a).eq(2).text()
                    const dzuhur = $(a).eq(3).text()
                    const ashar = $(a).eq(4).text()
                    const maghrib = $(a).eq(5).text()
                    const isya = $(a).eq(6).text()
                    textImg(jsonformat({daerah, shubuh, dhuha, dzuhur, ashar, maghrib, isya}))
                    limitAdd(sender, limit)
                    })
                    }
                    break
                 case prefix+'nabi': case prefix+'kisahnabi':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!q) return reply(`Contoh penggunaan ${command} muhammad`)
                    fetchJson('https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=' + q)
                    .then((res) =>{
                    xinz.sendFileFromUrl(from, res.nabi.image, `Nama: ${res.nabi.nama}\nUmur: ${res.nabi.umur}\nLahir: ${res.nabi.lahir}\nTempat: ${res.nabi.tempat}\n\n\n${res.nabi.kisah}`, msg)
                    limitAdd(sender, limit)
                    })
                   .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(`Mungkin nama Nabi yang anda masukkan Salah`)
                        })
                    break
                case prefix+'hadis': case prefix+'hadees': case prefix+'hadist':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!q) return reply(`Contoh penggunaan ${command} bukhari 10`)
                    if (args.length < 3) return reply(`Example: ${command} bukhari 10`)
                    const listhades = ['darimi', 'ahmad', 'bukhari', 'muslim', 'malik', 'nasai', 'tirmidzi', 'abu-daud', 'ibnu-majah']
                    if (!listhades.includes(args[1].toLowerCase())) return reply(ind.hadis(command))
                    fetchJson(`https://api.hadith.sutanlab.id/books/${args[1].toLowerCase()}/${args[2]}`)
                    .then((habud) =>{
                    textImg(`${habud.data.contents.arab}\n\n${habud.data.contents.id}\n\n*${habud.data.name}*`)
                                        limitAdd(sender, limit)
                    })
              .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
//------------------< WEEBS Command >-------------------
                case prefix+'slap':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/slap').then(({url}) => {
                    xinz.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} slapped @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                case prefix+'pat':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/pat').then(({url}) => {
                    xinz.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${sender.split('@')[0]} pat @${mentioned[0].split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                case prefix+'baka':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/baka').then(({url}) => {
                    xinz.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} Baka!!`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                case prefix+'hug':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/hug').then(({url}) => {
                    xinz.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} hugged @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                case prefix+'cium':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/kiss').then(({url}) => {
                    xinz.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} kissed @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                case prefix+'waifu': case prefix+'wife':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                     fetchJson('https://waifu.pics/api/sfw/waifu').then((data) => {
                     xinz.sendMessage(from, { url: data.url}, image, { quoted: msg })
                    limitAdd(sender, limit)
                    })
              .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                  break
                
case prefix+'art':
case prefix+'bts':
case prefix+'exo':
case prefix+'loli':
case prefix+'shota':
case prefix+'husbu':
case prefix+'sagiri':
case prefix+'shinobu':
case prefix+'megumin':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    reply(mess.wait)
                xinz.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`, 'ini', msg)
                    limitAdd(sender, limit)
                    break
                case prefix+'kemono': case prefix+'kemonomimi':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    neko.sfw.kemonomimi()
                     .then((data) =>{
                    xinz.sendFileFromUrl(from, data.url, 'Ini', msg)
                    limitAdd(sender, limit)
                    })
                  .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'elf':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    xinz.sendMessage(from, { url: 'https://api.lolhuman.xyz/api/random/elf?apikey=' + lolkey }, image, { quoted: msg})
                    .then((res) => {
                    limitAdd(sender, limit)
                    })
                   .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'konachan':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    xinz.sendMessage(from, { url: 'https://api.lolhuman.xyz/api/konachan?apikey=' + lolkey + '&query=' + q }, image, { quoted: msg})
                    .then((res) => {
                    limitAdd(sender, limit)
                    })
                   .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'fanart':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    xinz.sendMessage(from, { url: 'https://api.lolhuman.xyz/api/random/art?apikey=' + lolkey }, image, { quoted: msg})
                    .then((res) => {
                    limitAdd(sender, limit)
                    })
                   .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'quotesanime':
                case prefix+'quotesnime':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
                    .then((res) => {
                    textImg(`_${res.result.quote}_\n\n*― ${res.result.character}*\n*― ${res.result.anime} ${res.result.episode}*`)
                    limitAdd(sender, limit)
                    })
                   .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'neko':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    neko.sfw.neko()
                     .then((data) =>{
                    xinz.sendFileFromUrl(from, data.url, 'Ini', msg)
                    limitAdd(sender, limit)
                    })
                   .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'wp': case prefix+'wallnime': case prefix+'wallpaper':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    neko.sfw.wallpaper()
                     .then((data) =>{
                    xinz.sendFileFromUrl(from, data.url, 'Ini', msg)
                    limitAdd(sender, limit)
                    })
                  .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'kusonimedl':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command} link kusonime`)
                if (!isUrl(args[1]) && !args[1].includes('kusonime.com')) return reply(mess.error.Iv)
                fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${args[1]}`)
                .then((res) =>{
                    let get_result = res.result
                    let ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    let link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    xinz.sendFileFromUrl(from, get_result.thumbnail, ini_txt, msg)
                    limitAdd(sender, limit)
                    })
                  .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 break
                case prefix+'kusonime':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${q}`)
                    .then((res) =>{
                        let get_result = res.result
                        let ini_txt = `Title : ${get_result.title}\n`
                        ini_txt += `Japanese : ${get_result.japanese}\n`
                        ini_txt += `Genre : ${get_result.genre}\n`
                        ini_txt += `Seasons : ${get_result.seasons}\n`
                        ini_txt += `Producers : ${get_result.producers}\n`
                        ini_txt += `Type : ${get_result.type}\n`
                        ini_txt += `Status : ${get_result.status}\n`
                        ini_txt += `Total Episode : ${get_result.total_episode}\n`
                        ini_txt += `Score : ${get_result.score}\n`
                        ini_txt += `Duration : ${get_result.duration}\n`
                        ini_txt += `Released On : ${get_result.released_on}\n`
                        ini_txt += `Desc : ${get_result.desc}\n`
                        let link_dl = get_result.link_dl
                        for (var x in link_dl) {
                            ini_txt += `\n${x}\n`
                            for (var y in link_dl[x]) {
                                ini_txt += `${y} - ${link_dl[x][y]}\n`
                            }
                        }
                    xinz.sendFileFromUrl(from, get_result.thumbnail, ini_txt, msg)
                    limitAdd(sender, limit)
                 })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'genshininfo':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command} nama*`)
                fetchJson(`https://api.lolhuman.xyz/api/genshin/${q}?apikey=${lolkey}`)
                    .then((res) =>{
                    let ini_txt = `Name : ${res.result.title}\n`
                    ini_txt += `Intro : ${res.result.intro}\n`
                    ini_txt += `Icon : ${res.result.icon}\n`
                    xinz.sendFileFromUrl(from, res.result.cover1, ini_txt, msg).then((pe) => xinz.sendFileFromUrl(from, res.result.cv[0].audio[0], '', pe))
                    limitAdd(sender, limit)
                    })    
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                  break
            case prefix+'manga': case prefix+'searchmanga':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command} nama*`)
                fetchJson ('https://api.jikan.moe/v4/manga?q=' + q)
                .then((res) =>{
                let list = []
                for ( let x of res.data){
                    const yy = { title: `${x.title}`, description: `${x.synopsis}`,rowId: `${prefix}mangaa ${x.mal_id}`}
                    list.push(yy)
                }
                xinz.sendListMsg(from, `List Manga`, `Hasil Pencarian Manga "${q}"`, `Pilih Manga Anda`,`Pilih Disini`, `Pilih Untuk MoreInfo`, list, msg)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                   break
            case prefix+'anime': case prefix+'searchanime':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command} nama*`)
                fetchJson ('https://api.jikan.moe/v4/anime?q=' + q)
                .then((res) =>{
                let list = []
                for ( let x of res.data){
                    const yy = { title: `${x.title}`, description: `${x.synopsis}`,rowId: `${prefix}animee ${x.mal_id}`}
                    list.push(yy)
                }
                xinz.sendListMsg(from, `List Anime`, `Hasil Pencarian Anime "${q}"`, `Pilih Anime Anda`,`Pilih Disini`, `Pilih Untuk MoreInfo`, list, msg)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                   break
            case prefix+'animee':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('https://api.jikan.moe/v4/anime/' + q)
                .then((res) => {
                let txt = `*Anime Info*\n\n*Judul:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Trailer:* *${res.data.trailer.url}*\n*Type Anime:* *${res.data.type}*\n*Adaptasi:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Ya' : 'Tidak'}*\n*Aired:* *${res.data.aired.string}*\n*Durasi:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Musim:* *${res.data.season + ' ' + res.data.year}*\n*Produser Utama:* *${res.data.producers[0].name}*\n*Studio:* *${res.data.studios[0].name}*\n*Genre:* `
                for (let x of res.data.genres) {
                    txt += `${x.name},`
                }
                txt += `\n\n${res.data.synopsis}\n\nInfo Lebih Lanjut Silahkan Klik ${res.data.url}`
                xinz.sendFileFromUrl(from, res.data.images.jpg.image_url, txt, msg)
                })
                }
                 break
            case prefix+'mangaa':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('https://api.jikan.moe/v4/manga/' + q)
                .then((res) => {
                let txt = `*Manga Info*\n\n*Judul:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Total Chapter:* *${res.data.chapters}*\n*Total Volume:* *${res.data.volumes}*\n*Status Manga:* *${res.data.status}*\n*Ongoing:* *${res.data.publishing ? 'Ya' : 'Tidak'}*\n*Published:* *${res.data.published.string}*\n*Score:* *${res.data.scored}*\n*Rank Manga:* *${res.data.rank}*\n*Author:* *${res.data.authors[0].name}*\n*Serial:* *${res.data.serializations[0].name}*\n*Genre:* `
                for (let x of res.data.genres) {
                    txt += `${x.name},`
                }
                txt += `\n\n${res.data.synopsis}\n\nInfo Lebih Lanjut Silahkan Klik ${res.data.url}`
                xinz.sendFileFromUrl(from, res.data.images.jpg.image_url, txt, msg)
                })
                }
                 break
            case prefix+'wait': case prefix+'whatanime':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
	                let bodyForm = new FormData();
        	        bodyForm.append('image', fs.createReadStream(yoooo)) 
                    fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
                    .then(async(res) =>{
                    if (res.result && res.result.length <= 0) return reply('Anime not found! :(')
                    let teks = ''
                    if (res.result[0].similarity < 0.92) {
                        teks = '*Low similarity. 🤔*\n\n'
                    }
                    teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
                    xinz.sendFileFromUrl(from, res.result[0].video, teks, msg)
                    limitAdd(sender, limit)
                    })    
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
			        fs.unlinkSync(yoooo)
			    	if (err) return reply('Gagal :V')   
	                let bodyForm = new FormData();
        	        bodyForm.append('image', fs.createReadStream(ran)) 
                    fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
                    .then(async(res) =>{
                    if (res.result && res.result.length <= 0) return reply('Anime not found! :(')
                    let teks = ''
                    if (res.result[0].similarity < 0.92) {
                        teks = '*Low similarity. 🤔*\n\n'
                    }
                    teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
                    xinz.sendFileFromUrl(from, res.result[0].video, teks, msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
            case prefix+'sauce': case prefix+'source':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let link = await uptotele(yoooo)
                    saus(link)
                    .then(async(results) =>{
                        for (let i = 0; i < 5; i++) {
                            let teks = ''
                            if (results[i].similarity < 80.00) {
                                teks = '*Low similarity. 🤔*\n\n'
                            }
                            teks += `*Link*: ${results[i].url}\n*Site*: ${results[i].site}\n*Author name*: ${results[i].authorName}\n*Author link*: ${results[i].authorUrl}\n*Similarity*: ${results[i].similarity}%`
                            reply(teks)
                            }
                    limitAdd(sender, limit)
                    })    
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
			        fs.unlinkSync(yoooo)
			    	if (err) return reply('Gagal :V')   
                    let link = await uptotele(ran)
                    saus(link)
                    .then(async(results) =>{
                        for (let i = 0; i < 5; i++) {
                            let teks = ''
                            if (results[i].similarity < 80.00) {
                                teks = '*Low similarity. 🤔*\n\n'
                            }
                            teks += `*Link*: ${results[i].url}\n*Site*: ${results[i].site}\n*Author name*: ${results[i].authorName}\n*Author link*: ${results[i].authorUrl}\n*Similarity*: ${results[i].similarity}%`
                            reply(teks)
                            }
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })    
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
            case prefix+'otakudesu':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    axios.get(`https://otakudesu.moe/ongoing-anime`)
                    .then((res) =>{
                    const $ = cheerio.load(res.data)
                    const result = []
                    $('.venz').find('li > div.detpost').each(function(c, d) {
                    const judul = $(d).find('div.thumb > a > div.thumbz > h2.jdlflm').text()
                    const thumb = $(d).find('div.thumb > a > div.thumbz > img').attr('src')
                    const eps = $(d).find('div.epz').text()
                    const hri = $(d).find('div.epztipe').text()
                    const tgl = $(d).find('div.newnime').text()
                    result.push({ judul, thumb, eps, hri, tgl })
                    })
                    let initxt = 'Otakudesu Ongoing: \n\n'
                    for (let x of result) {
                        initxt += `Judul : ${x.judul}\nEps : ${x.eps}\nRilis : ${x.hri}, ${x.tgl}\n\n`
                    }
                    xinz.sendFileFromUrl(from, result[0].thumb, initxt, msg)
                    limitAdd(sender, limit)
                    })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                   break
//------------------< NSFW Command >-------------------
            case prefix+'nhmenu':{
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                 let qqpp = [{
                    "buttonId": `${prefix}tes12`,
                    "buttonText": {
                        "displayText": "BELUM"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}tes123`,
                    "buttonText": {
                        "displayText": "SUDAH"
                    },
                    "type": "RESPONSE"
                }]
                xinz.sendButtonsLoc(from, `Hai Kak @${sender.split('@')[0]}\n\nIni Adalah Sistem yang sedang dikembangkan (beta), dimana fungsinya hanya untuk Mendownload/Mengunduh File dari pict Nhentai, Kaka udah punya kode buat diunduh apa blum?`, `Created by Owner-Fax`, qqpp, await getBuffer('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-QSylhu4149jgpWf6M8a7r7HK3FT4zIbYw&usqp=CAU'), [sender])
                }
                break
            case prefix+'tes12':
                textImg(`Oh begitu ya, Humm😑, Yaudah Sini Fax Bantu Cariin, kira" ada genre, atau judul, atau ciri" query yang mau dicari di nhentai? Reply pesan ini ya`).then((res) =>{
                nhid.push(res.key.id)
                })
                break
            case prefix+'tes123':
                textImg(`Yaudah sini codenya, aku cek dulu, reply pesan ini ya`).then((res) =>{
                nhidd.push(res.key.id)
                })
               break
            case prefix+'lewd': case prefix+'lewds': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                   var tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
                   var randTag = tag[Math.floor(Math.random() * tag.length)]
                   console.log(`Searching lewd from ${randTag} subreddit...`)
                    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}/`)
                    .then((data) => {
                    xinz.sendFileFromUrl(from, data.url, data.title, msg)
                    limitAdd(sender, limit)
                    })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                break
                case prefix+'fetish': case prefix+'fetis': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (!q) return reply(`Contoh penggunaan ${command} pussy`)
                var listfet = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao', 'hentaianal', 'anal', 'pussy', 'animepussy', 'yaoi', 'yuri', 'hentaiblowjob', 'blowjob', 'futanari', 'kitsunehentai', 'midriffhentai', 'erohentai', 'cumhentai', 'paizuri']
                var anu = q.toLowerCase()
                if (!listfet.includes(q)) {
                let teks = `List Fetish :\n\n`
                for (let x of listfet) {
                teks += `${x}\n`
                }
                teks += `\nContoh penggunaan : ${command} pussy`
                reply(teks)
                }
                console.log(`Searching fetish from ${anu} subreddit...`)
                fetchJson(`https://meme-api.herokuapp.com/gimme/${anu}/`)
                .then((data) => {
                    xinz.sendFileFromUrl(from, data.url, data.title, msg)
                    limitAdd(sender, limit)
                    })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                    break
            case prefix+'nh': case prefix+'nhentai': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                nhentai.exists(args[1]).then((validate) => {
                if (validate === true) {
                nhentai.getDoujin(args[1]).then((yooi) => {
                var pepe = `*NHENTAI INFO*\n\n*Title:* ${yooi.title}\n*Japanese Title:* ${yooi.nativeTitle}\n*Pages:* ${yooi.details.pages[0]}\n*Artist:* ${yooi.details.artists[0]}\n*Uploaded:* ${yooi.details.uploaded[0]}`
                xinz.sendFileFromUrl(from, yooi.pages[0], pepe, msg)
                limitAdd(sender, limit)
                   })
                } else {
                  reply(`Code tidak valid`)
                }
              })
            }
                     break
            case prefix+'nhdlll':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                nhentai.getDoujin(args[1]).then(async (yooi) => {
                if (yooi.pages.length > 25) return reply('Gambar melebihi 25, harap pilih metode lain')
                let num = 1
                for (let x of yooi.pages){
                await xinz.sendFileFromUrl(sender, x, `Halaman ke ${num++}`, msg)
                await sleep(5000)
                }
                limitAdd(sender, limit)
                   })
            }
                     break
            case prefix+'tes1234': {
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                nhentai.getDoujin(args[1]).then(async (yooi) => {
                let be = await xinz.prepareMessage(from, await getBuffer(yooi.pages[0]), image)
                let qweriio = be.message["ephemeralMessage"] ? be.message.ephemeralMessage : be
                var pepe = `*NHENTAI INFO*\n\n*Title:* ${yooi.title}\n*Japanese Title:* ${yooi.nativeTitle}\n*Pages:* ${yooi.details.pages[0]}\n*Artist:* ${yooi.details.artists[0]}\n*Uploaded:* ${yooi.details.uploaded[0]}`
                let qqppp = [{
                    "buttonId": `${prefix}nhdll ${args[1]}`,
                    "buttonText": {
                        "displayText": "LINK DOWNLOAD"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}nhdlll ${args[1]}`,
                    "buttonText": {
                        "displayText": "GAMBAR"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}nhdl ${args[1]}`,
                    "buttonText": {
                        "displayText": "FILE"
                    },
                    "type": "RESPONSE"
                }]
                xinz.sendButtons(from, `Data didapatkan!`, pepe, `Mau dikirim via Document atau disajikan dalam link pdf?`, qqppp, true, msg, null, qweriio.message.imageMessage)
                   })
            }
                     break
                case prefix+'xnxxdl':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (args.length < 2) return reply(`Penggunaan ${command} _link xnxx_`)
                if (!isUrl(args[1]) && !args[1].includes('xnxx.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                    fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${args[1]}`)
                    .then((data) => {
                    var get_result = data.result
                    var ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    var ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    xinz.sendFileFromUrl(from, get_result.thumbnail, ini_txt, msg)
                    limitAdd(sender, limit)
                   })
              .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                  }
                    break

                case prefix+'xhamsterdl':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (args.length < 2) return reply(`Penggunaan ${command} _link xhamster_`)
                if (!isUrl(args[1]) && !args[1].includes('xhamster.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                 fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${lolkey}&url=${args[1]}`)
                    .then((data) => {
                    var get_result = data.result
                    let ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n\n"
                    xinz.sendFileFromUrl(from, get_result.thumbnail, ini_txt, msg)
                    limitAdd(sender, limit)
                   })
              .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                  }
                    break
                case prefix+'nekopoi': case prefix+'nekoinfo':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (args.length < 2) return reply(`Penggunaan ${command} _link nekopoi_`)
                if (!isUrl(args[1]) && !args[1].includes('nekopoi.care')) return reply(mess.error.Iv)
                reply(mess.wait)
                    fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${args[1]}`)
                    .then((data) => {
                    var get_result = data.result
                    let ini_txt = `*Title* : ${get_result.anime}\n`
                    ini_txt += `*Porducers* : ${get_result.producers}\n`
                    ini_txt += `*Duration* : ${get_result.duration}\n`
                    ini_txt += `*Size* : ${get_result.size}\n`
                    ini_txt += `*Sinopsis* : ${get_result.sinopsis}\n`
                    var link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        var link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                   xinz.sendFileFromUrl(from, get_result.thumb, ini_txt, msg)
                    limitAdd(sender, limit)
                   })
              .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                   }
                    break
                case prefix+'xnxxsearch':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (args.length < 2) return reply(`Penggunaan ${command} _query_`)
                reply(mess.wait)
                    fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${q}`)
                    .then((data) =>{
                    var get_result = data.result
                     var ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `*Title* : ${x.title}\n`
                        ini_txt += `*Views* : ${x.views}\n`
                        ini_txt += `*Duration* : ${x.duration}\n`
                        ini_txt += `*Uploader* : ${x.uploader}\n`
                        ini_txt += `*Link* : ${x.link}\n\n`
                    }
                    xinz.sendFileFromUrl(from, get_result[0].thumbnail, ini_txt, msg)
                     limitAdd(sender, limit)
                   })
              .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'xhamstersearch':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (args.length < 2) return reply(`Penggunaan ${command} _query_`)
                reply(mess.wait)
                    fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolkey}&query=${q}`)
                    .then((data) =>{
                    var get_result = data.result
                     var ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `*Title* : ${x.title}\n`
                        ini_txt += `*Views* : ${x.views}\n`
                        ini_txt += `*Duration* : ${x.duration}\n`
                        ini_txt += `*Link* : ${x.link}\n\n`
                    }
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                   })
              .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'waifu18': case prefix+'w18':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                     fetchJson('https://waifu.pics/api/nsfw/waifu').then((data) => {
                     xinz.sendFileFromUrl(from, data.url, 'Ini', msg)
                    limitAdd(sender, limit)
                    })
              .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                  break
                case prefix+'ceritasex': case prefix+'cersex':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                    fetchJson('http://docs-jojo.herokuapp.com/api/cersex')
                    .then((res) => xinz.sendFileFromUrl(from, res.result.img, res.result.judul + `\n\n` + res.result.cersex))
                    .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'lewdavatar':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                    neko.nsfw.avatar()
                     .then((data) =>{
                    xinz.sendFileFromUrl(from, data.url, 'Ini', msg)
                    limitAdd(sender, limit)
                    })
              .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'femdom':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                    neko.nsfw.femdom()
                     .then((data) =>{
                    xinz.sendFileFromUrl(from, data.url, 'Ini', msg)
                    limitAdd(sender, limit)
                    })
              .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'chiisaihentai': case prefix+'trap': case prefix+'ecchi':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                    xinz.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/nsfw/${command.split(prefix)[1]}?apikey=${lolkey}`, 'ini', msg)
                    limitAdd(sender, limit)
                    break
                case prefix+'hololewd': case prefix+'lewdholo':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                    xinz.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=${lolkey}`, 'ini', msg)
                    limitAdd(sender, limit)
                    break
//------------------< Premium Command >-------------------
            case prefix+'ytdl':{
                if (args.length === 1) return reply(`Kirim perintah *${prefix}ytdl [linkYt]*`)
                let isLinks2 = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks2) return reply(mess.error.Iv)
                let list = [{title: `Mau dikirim Audio Apa Video bang`,
                    rows: [
                       {
                        title: `Audio/Mp3`,
                        description: `Need Music Version? Click Here`,
                        rowId: `${prefix}ytmp3 ${args[1]}`
                      },{
                        title: `Video/Mp4`,
                        description: `Need Video Version? Click Here`,
                        rowId: `${prefix}ytmp4 ${args[1]}`
                      }
                    ]
                   }]
               xinz.sendList(from, `Youtube Downloader`, `Pilih Ekstensi Anda Disini👇👇`, `Only Premium yak`,`Pilih Disini`, list, msg)
               }
               break
            case prefix+'ytmp4':{
                if (args.length === 1) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
                let isLinks2 = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks2) return reply(mess.error.Iv)
                try {
                    reply(mess.wait)
                    ytv(args[1])
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 40000) return xinz.sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
                        const captionsYtmp4 = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            xinz.sendFileFromUrl(from, thumb, captionsYtmp4, msg)
                            xinz.sendFileFromUrl(from, dl_link, '', msg)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    xinz.sendMess(ownerNumber[0], 'Ytmp4 Error : ' + err)
                    console.log(color('[Ytmp4]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'ytmp3':{
                if (args.length === 1) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
                let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks) return reply(mess.error.Iv)
                try {
                    reply(mess.wait)
                    yta(args[1])
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 30000) return xinz.sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}
\`\`\`▢ Ext : MP3
\`\`\`▢ Filesize : ${filesizeF}
\`\`\`▢ Link : ${a.data}
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
                        const captions = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            xinz.sendFileFromUrl(from, thumb, captions, msg)
                            xinz.sendFileFromUrl(from, dl_link, '', msg)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    xinz.sendMess(ownerNumber[0], 'Ytmp3 Error : ' + err)
                    console.log(color('[Ytmp3]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'tiktoknowm': {
                if (args.length < 2) return reply(`Penggunaan ${command} _link tiktok_`)
                if (!isUrl(args[1]) && !args[1].includes('tiktok.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                tiktokdl(args[1])
                .then((res) => {
                    xinz.sendFileFromUrl(from, res.result.nowatermark, '', msg)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    xinz.sendMess(ownerNumber[0], 'Tiktok Error : ' + err)
                    console.log(color('[Tiktok]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
            case prefix+'ytmpp4':{
                if (args.length === 1) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
                let isLinks2 = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks2) return reply(mess.error.Iv)
                try {
                    reply(mess.wait)
                    ytv(args[1])
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 40000) return xinz.sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
                        const captionsYtmp4 = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            xinz.sendFileFromUrl(from, thumb, captionsYtmp4, msg)
                            xinz.sendFileFromUrl(from, dl_link, '', msg)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    xinz.sendMess(ownerNumber[0], 'Ytmp4 Error : ' + err)
                    console.log(color('[Ytmp4]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'ytmpp3':{
                if (args.length === 1) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
                let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks) return reply(mess.error.Iv)
                try {
                    reply(mess.wait)
                    yta(args[1])
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 30000) return xinz.sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}
\`\`\`▢ Ext : MP3
\`\`\`▢ Filesize : ${filesizeF}
\`\`\`▢ Link : ${a.data}
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
                        const captions = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            xinz.sendFileFromUrl(from, thumb, captions, msg)
                            xinz.sendFileFromUrl(from, dl_link, '', msg)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    xinz.sendMess(ownerNumber[0], 'Ytmp3 Error : ' + err)
                    console.log(color('[Ytmp3]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'stickerwm': case prefix+'swm': case prefix+'take': case prefix+'takesticker': case prefix+'takestick':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                let packname1 = q.split('|')[0] ? q.split('|')[0] : q
                let author1 = q.split('|')[1] ? q.split('|')[1] : ' '
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    xinz.sendStickerWm(from, media, msg, packname1, author1).then((res) => fs.unlinkSync(media))
                } else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    xinz.sendStickerWm(from, media, msg, packname1, author1).then((res) => fs.unlinkSync(media))
                } else if (isQuotedSticker) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    xinz.sendStickerWm(from, media, msg, packname1, author1).then((res) => fs.unlinkSync(media))
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            }
                break
            case prefix+'asupan': case prefix+'ptl': case prefix+'ptlvid':{
                if (!isPremium) return reply(mess.OnlyPrem)
                fetchText('http://sansekai.my.id/sansekai.txt').then((data) => {
                    var wifegerak = data.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                        xinz.sendFileFromUrl(from, `http://sansekai.my.id/ptl_repost/${wifegerakx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.', msg)
                })
                }
                break
            case prefix+'bokep': case prefix+'bkp': case prefix+'randombokep':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                fetchJson(`https://pastebin.com/raw/k82VJzeP`).then((data) => {
                    var bokepp = JSON.parse(JSON.stringify(data))
                    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
                    textImg(bokep2.teks)
                })
                }
                break
            case prefix+'searchmusic': case prefix+'searchmusik':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!isQuotedAudio) return reply('Mana music yang mau dicari')
                if (quotedMsg.audioMessage.ptt) {
                let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
	            let form = new FormData();
                form.append('audio', fs.createReadStream(yoooo))
                let data = await Axios({ method: "POST", url: "https://api.zeks.xyz/api/searchmusic?apikey="+ zekskey,data: form, headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}`}})
                if (!data.data.status) return reply('Musik tidak ditemukan, atau sedang eror')
                textImg(`*Music Ditemukan!!*\n\nJudul: ${data.data.data.title}\nArtists: ${data.data.data.artists}\nAlbum: ${data.data.data.album}\nGenre: ${data.data.data.genre}\nRilis: ${data.data.data.release_date}`)
                fs.unlinkSync(yoooo)
                } else {
                let rano = getRandom('.ogg')
                let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                exec(`ffmpeg -i ${yoooo} -ar 48000 -vn -c:a libopus ${rano}`, async (err) => {
			   	fs.unlinkSync(yoooo)
				if (err) return reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
	            let form = new FormData();
                form.append('audio', fs.createReadStream(rano))
                let data = await Axios({ method: "POST", url: "https://api.zeks.xyz/api/searchmusic?apikey="+ zekskey,data: form, headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}`}})
                if (!data.data.status) return reply('Musik tidak ditemukan, atau sedang eror')
                textImg(`*Music Ditemukan!!*\n\nJudul: ${data.data.data.title}\nArtists: ${data.data.data.artists}\nAlbum: ${data.data.data.album}\nGenre: ${data.data.data.genre}\nRilis: ${data.data.data.release_date}`)
                fs.unlinkSync(rano)
				})
                }
                }
                break
            case prefix+'pinterest': case prefix+'pinsearch': case prefix+'pinterestsearch':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} kucing`)
                fetchJson(`https://api.justaqul.xyz/pinterest?q=${q}&apikey=${aqulzkey}`).then((data) => {
                    xinz.sendFileFromUrl(from, data.image, `Hasil Pencarian Pinterest : ${q}`, msg)
                })
                }
                break 
            case prefix+'gimg': case prefix+'googleimg': case prefix+'gimage': case prefix+'googleimage':
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} kucing`)
                gis(q, logResults)
                function logResults(error, results) {
                    if (error) {
                        reply(mess.error.api)
                    } else {
                        var bokepp = JSON.parse(JSON.stringify(results))
                    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
                    xinz.sendFileFromUrl(from, bokep2.url, `Hasil Pencarian Google Image : ${q}\n\nUkuran Foto: ${bokep2.width} × ${bokep2.height}`, msg)
                    }
                }
                break
            case prefix+'spamcall':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length > 2) return reply(`Cara penggunaan : ${command} no hp`)
                if (isNaN(args[1]) && args[1].startsWith('62')) return reply(`Harus berupa angka dan pastikan tidak memasukkan kode negara, contoh: ${command} 8127668234`)
                fetchJson(`https://api.justaqul.xyz/call?nomor=${args[1]}&apikey=${aqulzkey}`)
                .then((data) => {
                    textImg(data.result)
                    })
               .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                }
                break
            case prefix+'spamsms':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length > 2) return reply(`Cara penggunaan : ${command} no hp`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                try {
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${args[1]}`)
                    reply("Success")
               } catch (err) {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
               }
                }
                break
            case prefix+'mlewd': case prefix+'mlewds': case prefix+'multilewd': case prefix+'multilewds': {
                if (!isPremium) return reply(mess.OnlyPrem)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                   var tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
                   var randTag = tag[Math.floor(Math.random() * tag.length)]
                   console.log(`Searching lewd from ${randTag} subreddit...`)
                    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}/5`)
                    .then((data) => {
                    for (var x of data.memes) {
                        xinz.sendFileFromUrl(from, x.url, x.title, msg)
                    }
                    })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                break
                case prefix+'multifetish': case prefix+'mfetish': {
                if (!isPremium) return reply(mess.OnlyPrem)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (!q) return reply(`Contoh penggunaan ${command} pussy`)
                var listfet = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao', 'hentaianal', 'anal', 'pussy', 'animepussy', 'yaoi', 'yuri', 'hentaiblowjob', 'blowjob', 'futanari', 'kitsunehentai', 'midriffhentai', 'erohentai', 'cumhentai', 'paizuri']
                var anu = q.toLowerCase()
                if (!listfet.includes(q)) {
                let teks = `List Fetish :\n\n`
                for (let x of listfet) {
                teks += `${x}\n`
                }
                teks += `\nContoh penggunaan : ${command} pussy`
                reply(teks)
                }
                console.log(`Searching fetish from ${q} subreddit...`)
                fetchJson(`https://meme-api.herokuapp.com/gimme/${anu}/5`)
                .then((data) => {
                 for (var x of data.memes) {
                        xinz.sendFileFromUrl(from, x.url, x.title, msg)
                    }
                    })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                    break
            case prefix+'nhdl': case prefix+'ncode': case prefix+'nhpdf': case prefix+'nhentaipdf': {
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
               // if (!isPremium) return reply(mess.OnlyPrem)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                nhentai.exists(args[1]).then((validate) => {
                if (validate === true) {
                nhentai.getDoujin(args[1]).then((yooi) => {
                exec(`nhentai --id=${args[1]} --output=./media --format=${args[1]} --no-html --pdf --rm-origin-dir`, async (error) => {
                if (error) return reply(mess.error.api)
                await xinz.sendMessage(from, fs.readFileSync(`./media/${args[1]}.pdf`), document, { quoted: msg, mimetype: Mimetype.pdf, filename: yooi.nativeTitle })
                fs.unlinkSync(`./media/${args[1]}.pdf`)
                   })
                  })
                } else {
                  reply(`Code tidak valid`)
                }
              })
            }
                     break
            case prefix+'nhdll': {
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                exec(`nhentai --id=${args[1]} --output=./media --format=${args[1]} --no-html --pdf --rm-origin-dir`, async (error) => {
                if (error) return reply(mess.error.api)
                let pe = await uptoaqulz(`./media/${args[1]}.pdf`)
                await reply(pe)
                fs.unlinkSync(`./media/${args[1]}.pdf`)
                   })
            }
                     break
           case prefix+'nekosearch': {
                if (!isPremium) return reply(mess.OnlyPrem)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (!q) return reply(`Cara penggunaan : ${command} dropout`)
               fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${q}`)
               .then((data) =>{
               var ini_txt = `*Nekopoi Search:*\n\n`
                    for (var x of data.result) {
                        ini_txt += `*Title* : ${x.title}\n`
                        ini_txt += `*Link* : ${x.link}\n\n`
                    }
                    xinz.sendFileFromUrl(from, data.result[0].thumbnail, ini_txt, msg)
                 })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
}
                    break
            case prefix+'brainlysearch': {
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} apa itu bot`)
                fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${lolkey}&query=${q}`)
                .then((res) => {
                    var ini_txt = "Brainly Search Result : \n"
                    for (var x of res.result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    textImg(ini_txt)
                    })
                .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    }
                    break
            case prefix+'brainly': {
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} apa itu bot`)
                fetchJson(`https://api.lolhuman.xyz/api/brainly2?apikey=${lolkey}&query=${q}`)
                .then((res) => {
                    var ini_txt = "Brainly Result : \n"
                    for (var x of res.result) {
                        ini_txt += `*Question* :\n ${x.question.content}\n`
                        ini_txt += `*Answer* :\n ${x.answer[0].content}\n\n`
                    }
                    textImg(ini_txt)
                    })
                .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    }
                    break
                case prefix+'addrespon':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} textnya|autoresponnya`)
                    var textnya = q.split('|')[0]
                    var respnya = q.split('|')[1]
                    const checkdulu = checkText(textnya)
                    if (!checkdulu) {
                        addResponBot(textnya, respnya)
                        textImg(ind.respon(textnya, respnya))
                    } else {
                        reply(ind.responAlready(textnya))
                    }
                    }
                    break
                case prefix+'delrespon':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} textnya`)
                    _respon.splice(getResponPosition(q), 1)
                    fs.writeFileSync('./database/respon.json', JSON.stringify(_respon))
                    reply(ind.ok())
                  }
                    break
                case prefix+'listrespon':{
                    let listResponn = '*──「 AUTO-RESPON LIST 」──*\n\n'
                    let nomorListtt = 0
                    const derettt = getAllRespon()
                    for (let i = 0; i < derettt.length; i++) {
                        nomorListtt++
                        listResponn += `${nomorListtt}. ${derettt[i]}\n\n`
                    }
                    textImg(listResponn)
                    }
                    break
                case prefix+'delsticker':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} textnya`)
                    if (_stick.includes(q)) {
                    let anu = _stick.indexOf(q)
                    _stick.splice(anu, 1)
                    fs.writeFileSync('./database/sticker.json', JSON.stringify(_stick))
                    fs.unlinkSync(`./media/sticker/${q}.webp`)
                    reply(ind.stickerDel())
                    } else {
                    reply(ind.stickerNotFound())
                    }
                   }
                    break              
                 case prefix+'addupdate':
                    if (!isOwner) return reply(mess.OnlyOwner)
                    if (!q) return reply(`Example: ${command} update fitur`)
                    _update.push(q)
                    fs.writeFileSync('./database/update.json', JSON.stringify(_update))
                    reply(ind.updateAdd())
                    break
                case prefix+'update':
                    let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
                    for (let i of _update) {
                          updateList += `࿃ *${i.replace(_update)}*\n\n`
                    }
                    textImg(updateList)
                    break
                case prefix+'addsticker':
                case prefix+'addstiker':{
                    if (!q || !isQuotedSticker) return reply(`Example: ${command} wibu dan tag stickernya`)
                    if (_stick.includes(q.toLowerCase())) {
                        reply(ind.stickerAddAlready(q))
                    } else {
                        _stick.push(q.toLowerCase())
                        fs.writeFileSync('./database/sticker.json', JSON.stringify(_stick))
                        var mediaData = await xinz.downloadAndSaveMediaMessage(JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo, `./media/sticker/${q}`)
                        reply(ind.stickerAdd())
                    }
                    }
                    break
                case prefix+'stickerlist':
                case prefix+'liststicker':
                case prefix+'stikerlist':
                case prefix+'liststiker':
                    if (!isGroup) return reply(ind.groupOnly())
                    let stickerList = `*── 「 STICKER DATABASE 」 ──*\n\nTotal: ${_stick.length}\n\n`
                    for (let i of _stick) {
                          stickerList += `➸ ${i.replace(_stick)}\n`
                    }
                    textImg(stickerList)
                    break
                 case prefix+'delvn':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} textnya`)
                    if (_vn.includes(q)) {
                    let anu = _vn.indexOf(q)
                    _vn.splice(anu, 1)
                    fs.writeFileSync('./database/vn.json', JSON.stringify(_vn))
                    fs.unlinkSync(`./media/audio/${q}.mp3`)
                    reply(ind.vnDel())
                    } else {
                    reply(ind.vnNotFound())
                    }
                    }
                    break              
                case prefix+'addvn':{
                    if (!q || !isQuotedAudio) return reply(`Example: ${command} wibu dan tag vn nya`)
                    if (_vn.includes(q.toLowerCase())) {
                        reply(ind.vnAddAlready(q))
                    } else {
                        _vn.push(q.toLowerCase())
                        fs.writeFileSync('./database/vn.json', JSON.stringify(_vn))
                        var mediaData = await xinz.downloadMediaMessage(JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
                        fs.writeFileSync(`./media/audio/${q}.mp3`, mediaData)
                        reply(ind.vnAdd())
                    }
                    }
                    break
                case prefix+'vnlist':
                case prefix+'listvn':
                    if (!isGroup) return reply(ind.groupOnly())
                    let vnList = `*── 「 VN DATABASE 」 ──*\n\nTotal: ${_vn.length}\n\n`
                    for (let i of _vn) {
                          vnList += `➸ ${i.replace(_vn)}\n`
                    }
                    textImg(vnList)
                    break
                case prefix+'delimg':
                case prefix+'delimage':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} nama file`)
                    if (_image.includes(q)) {
                    let anu = _image.indexOf(q)
                    _image.splice(q, 1)
                    fs.writeFileSync('./database/image.json', JSON.stringify(_image))
                    fs.unlinkSync(`./media/image/${q}.jpeg`)
                    reply(ind.imageDel())
                    } else {
                    reply(ind.imageNotFound())
                    }
                    }
                    break              
                case prefix+'addimage':
                case prefix+'addimg':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} nama file`)
                if (!isImage || !isQuotedImage) return reply('kirim atau Reply gambar nya')
                    if (_image.includes(q)) {
                        reply(ind.imageAddAlready(q))
                    } else {
                        _image.push(q)
                        fs.writeFileSync('./database/image.json', JSON.stringify(_image))
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                        fs.writeFileSync(`./media/image/${q}.jpeg`, mediaData)
                        reply(ind.imageAdd())
                    }
                  }
                    break
                case prefix+'imglist':
                case prefix+'listimg':
                case prefix+'imagelist':
                case prefix+'listimage':
                    if (!isGroup) return reply(ind.groupOnly())
                    let imageList = `*── 「 IMAGE DATABASE 」 ──*\n\nTotal: ${_image.length}\n\n`
                    for (let i of _image) {
                          imageList += `➸ ${i.replace(_image)}\n`
                    }
                    textImg(imageList)
                    break
                case prefix+'getimage':
                case prefix+'getimg':
                if (!q) return reply(`Cara penggunaan : ${command} nama file`)
                    if (_image.includes(q)) {
                        xinz.sendImage(from, fs.readFileSync(`./media/image/${q}.jpeg`), '', msg)
                    } else {
                    reply(ind.imageNotFound())
                    }
                    break    
//------------------< Sticker / Tools >-------------------
            case prefix+'exif':{
				if (!isOwner) return
				const namaPack = q.split('|')[0] ? q.split('|')[0] : q
				const authorPack = q.split('|')[1] ? q.split('|')[1] : ' '
				setting.packSticker = namaPack
                setting.authorSticker = authorPack
                fs.writeFileSync('./config.json',JSON.stringify(setting, null, 2))
                reply('Done gan')
                exec(`pm2 restart main`)
            }
				break
                case prefix+'waifusticker':
                case prefix+'waifustick':
                case prefix+'animesticker':
                case prefix+'nimesticker':
                case prefix+'nimestick': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    xinz.sendSticker(from, wifegerakx, msg)
             		limitAdd(sender, limit)
                    }
                    break
                case prefix+'patrik':
                case prefix+'patrick': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    xinz.sendSticker(from, wifegerakx, msg)
             		limitAdd(sender, limit)
                    }
                    break
                case prefix+'esticker': case prefix+'estik': case prefix+'estick': case prefix+'estiker': case prefix+'emojisticker': case prefix+'emojistiker': case prefix+'emoji': case prefix+'semoji': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (args.length < 2) return reply(`Penggunaan ${command} emoji`)
                    if (args.length === 2) {
                    fetchJson(`https://api.lolhuman.xyz/api/smoji3/${encodeURIComponent(args[1])}?apikey=${lolkey}`)
                    .then((res) =>{
                        let list = []
                        let startnum = 1
                        for (var x in res.result.emoji) {
                        let yy = {title: 'Model ke-' + startnum++,
                        rows: [
                           {
                            title: `${x}`,
                            description: `${x} model`,
                            rowId: `${prefix}esticker ${args[1]} ${res.result.emoji[x]}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    xinz.sendList(from, `List Sticker`, `Kan model stickernya banyak tu kak, kaka mau model sticker yg mana ya? Pilih dibawah ya kak`, args[1], `Pilih Disini`, list, msg)
                    })
                   .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    } else if (args.length === 3) {
                    xinz.sendSticker(from, args[2], msg)
             		limitAdd(sender, limit)
                    }
                    }
                    break
                case prefix+'gura':
                case prefix+'gurastick':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    xinz.sendSticker(from, wifegerakx, msg)
             		limitAdd(sender, limit)
                    }
                    break
                case prefix+'doge':
                case prefix+'dogestick':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    xinz.sendSticker(from, wifegerakx, msg)
             		limitAdd(sender, limit)
                    }
                    break
                case prefix+'bucinstick':
                case prefix+'bucinsticker':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    xinz.sendSticker(from, wifegerakx, msg)
             		limitAdd(sender, limit)
                    }
                    break
            case prefix+'ttp':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                fs.writeFileSync("./sticker/" + sender + "ttp.png", text2png(q, {
                    color: 'white',
                    font: '200px futura',
                    padding: 20,
                    lineSpacing: 60,
                    textAlign: 'center',
                    strokeWidth: 15
                }))
                xinz.sendSticker(from, "./sticker/" + sender + "ttp.png", msg).then((res) => fs.unlinkSync("./sticker/" + sender + "ttp.png"))
              	limitAdd(sender, limit)
                break
                case prefix+'ttp2': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                    var ttp = await fetchJson(`http://api.areltiyan.xyz/sticker_maker?text=${encodeURIComponent(q)}`)
                    var bufferttp = await Buffer.from(ttp.base64.split('data:image/png;base64,')[1], 'base64')
                    let ran = getRandom('.png')
                    fs.writeFileSync(ran, bufferttp, 'base64')
                    xinz.sendSticker(from, "./" + ran, msg).then((res) => fs.unlinkSync(ran))
                  	limitAdd(sender, limit)
                }
                    break
                case prefix+'ttp4': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                    xinz.sendSticker(from, 'https://api.xteam.xyz/ttp?file&text=' + encodeURIComponent(q), msg)
                  	limitAdd(sender, limit)
                    }
                    break
            case prefix+'tomp3': case prefix+'toaudio':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isVideo || isQuotedVideo) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
					reply(mess.wait)
                    let ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal :V')   
                        xinz.sendMessage(from, fs.readFileSync(ran), audio, { quoted: msg })
                        limitAdd(sender, limit)
                        fs.unlinkSync(ran)
                    })
                 } else {
                   reply(`Kirim/reply video dengan caption ${command}`)
                }
                break
            case prefix+'sfire':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    xinz.sendSticker(from, `https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`, msg).then((res) => fs.unlinkSync(yoooo))
                  	limitAdd(sender, limit)
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    xinz.sendSticker(from, `https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`, msg).then((res) => fs.unlinkSync(ran))
                  	limitAdd(sender, limit)
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
            case prefix+'pet': case prefix+'petpet':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptoibb(yoooo)
                    let a = await petpet(link, {resolution: 1080})
                    fs.unlinkSync(yoooo)
                    fs.writeFileSync('petpet.gif', a)
                    await WSF.createSticker('petpet.gif', { type: 'full' ,pack: setting.packSticker,author: setting.authorSticker,categories: ["❤"," 😍"," 😘"," 💕"," 😻"," 💑"," 👩‍❤‍👩"," 👨‍❤‍👨"," 💏"," 👩‍❤‍💋‍👩"," 👨‍❤‍💋‍👨"," 🧡"," 💛"," 💚"," 💙"," 💜"," 🖤"," 💔"," ❣"," 💞"," 💓"," 💗"," 💖"," 💘"," 💝"," 💟"," ♥"," 💌"," 💋"," 👩‍❤️‍💋‍👩"," 👨‍❤️‍💋‍👨"," 👩‍❤️‍👨"," 👩‍❤️‍👩"," 👨‍❤️‍👨"," 👩‍❤️‍💋‍👨"," 👬"," 👭"," 👫"," 🥰"," 😚"," 😙"," 👄"," 🌹"," 😽"," ❣️"," ❤️","😀"," 😃"," 😄"," 😁"," 😆"," 😅"," 😂"," 🤣"," 🙂"," 😛"," 😝"," 😜"," 🤪"," 🤗"," 😺"," 😸"," 😹"," ☺"," 😌"," 😉"," 🤗"," 😊","☹"," 😣"," 😖"," 😫"," 😩"," 😢"," 😭"," 😞"," 😔"," 😟"," 😕"," 😤"," 😠"," 😥"," 😰"," 😨"," 😿"," 😾"," 😓"," 🙍‍♂"," 🙍‍♀"," 💔"," 🙁"," 🥺"," 🤕"," ☔️"," ⛈"," 🌩"," 🌧","😯"," 😦"," 😧"," 😮"," 😲"," 🙀"," 😱"," 🤯"," 😳"," ❗"," ❕"," 🤬"," 😡"," 😠"," 🙄"," 👿"," 😾"," 😤"," 💢"," 👺"," 🗯️"," 😒"," 🥵","👋","🎊"," 🎉"," 🎁"," 🎈"," 👯‍♂️"," 👯"," 👯‍♀️"," 💃"," 🕺"," 🔥"," ⭐️"," ✨"," 💫"," 🎇"," 🎆"," 🍻"," 🥂"," 🍾"," 🎂"," 🍰","🌃"]}).then((buffer) => xinz.sendMessage(from, buffer, sticker, { quoted: msg}))
                    fs.unlinkSync('petpet.gif')
                  	limitAdd(sender, limit)
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptoibb(ran)
                    let a = await petpet(link, {resolution: 1080})
                    fs.unlinkSync(ran)
                    fs.writeFileSync('petpet.gif', a)
                    await WSF.createSticker('petpet.gif', { type: 'full' ,pack: setting.packSticker,author: setting.authorSticker,categories: ["❤"," 😍"," 😘"," 💕"," 😻"," 💑"," 👩‍❤‍👩"," 👨‍❤‍👨"," 💏"," 👩‍❤‍💋‍👩"," 👨‍❤‍💋‍👨"," 🧡"," 💛"," 💚"," 💙"," 💜"," 🖤"," 💔"," ❣"," 💞"," 💓"," 💗"," 💖"," 💘"," 💝"," 💟"," ♥"," 💌"," 💋"," 👩‍❤️‍💋‍👩"," 👨‍❤️‍💋‍👨"," 👩‍❤️‍👨"," 👩‍❤️‍👩"," 👨‍❤️‍👨"," 👩‍❤️‍💋‍👨"," 👬"," 👭"," 👫"," 🥰"," 😚"," 😙"," 👄"," 🌹"," 😽"," ❣️"," ❤️","😀"," 😃"," 😄"," 😁"," 😆"," 😅"," 😂"," 🤣"," 🙂"," 😛"," 😝"," 😜"," 🤪"," 🤗"," 😺"," 😸"," 😹"," ☺"," 😌"," 😉"," 🤗"," 😊","☹"," 😣"," 😖"," 😫"," 😩"," 😢"," 😭"," 😞"," 😔"," 😟"," 😕"," 😤"," 😠"," 😥"," 😰"," 😨"," 😿"," 😾"," 😓"," 🙍‍♂"," 🙍‍♀"," 💔"," 🙁"," 🥺"," 🤕"," ☔️"," ⛈"," 🌩"," 🌧","😯"," 😦"," 😧"," 😮"," 😲"," 🙀"," 😱"," 🤯"," 😳"," ❗"," ❕"," 🤬"," 😡"," 😠"," 🙄"," 👿"," 😾"," 😤"," 💢"," 👺"," 🗯️"," 😒"," 🥵","👋","🎊"," 🎉"," 🎁"," 🎈"," 👯‍♂️"," 👯"," 👯‍♀️"," 💃"," 🕺"," 🔥"," ⭐️"," ✨"," 💫"," 🎇"," 🎆"," 🍻"," 🥂"," 🍾"," 🎂"," 🍰","🌃"]}).then((buffer) => xinz.sendMessage(from, buffer, sticker, { quoted: msg}))
                    fs.unlinkSync('petpet.gif')
                  	limitAdd(sender, limit)
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
            case prefix+'sticker':
            case prefix+'stiker':
            case prefix+'s':
            case prefix+'stickergif':
            case prefix+'sgif':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    xinz.sendSticker(from, media, msg, true).then((res) => fs.unlinkSync(media))
                  	limitAdd(sender, limit)
                } else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    xinz.sendSticker(from, media, msg, true).then((res) => fs.unlinkSync(media))
                  	limitAdd(sender, limit)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            }
                break
            case prefix+'stickerp':
            case prefix+'stikerp':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    xinz.sendSticker(from, media, msg).then((res) => fs.unlinkSync(media))
                  	limitAdd(sender, limit)
                } else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    xinz.sendSticker(from, media, msg).then((res) => fs.unlinkSync(media))
                  	limitAdd(sender, limit)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            }
                break
            case prefix+'toimg':
            case prefix+'stickertoimg':
            case prefix+'stoimg':
            case prefix+'stikertoimg':
            case prefix+'togif':
            case prefix+'tovid':
            case prefix+'tovideo':
            case prefix+'tomedia':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!isQuotedSticker) return reply('Reply stiker nya')
                let encmedia = isSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.stickerMessage.contextInfo : JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				let media = await xinz.downloadAndSaveMediaMessage(encmedia)
				if (quotedMsg.stickerMessage.isAnimated === true){
                const bodyForm = new FormData(); bodyForm.append('new-image-url', '');bodyForm.append('new-image', fs.createReadStream(media))
                Axios({method: 'post',url: 'https://s6.ezgif.com/webp-to-mp4',data: bodyForm,headers: {'Content-Type': `multipart/form-data; boundary=${bodyForm._boundary}`}}).then(({ data }) => {
                const bodyFormThen = new FormData();const $ = cheerio.load(data);const file = $('input[name="file"]').attr('value');const token = $('input[name="token"]').attr('value');const convert = $('input[name="file"]').attr('value')
                const gotdata = {file: file,token: token,convert: convert}
                bodyFormThen.append('file', gotdata.file);bodyFormThen.append('token', gotdata.token);bodyFormThen.append('convert', gotdata.convert)
                Axios({method: 'post',url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,data: bodyFormThen,headers: {'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`}}).then(({ data }) => {
                const $ = cheerio.load(data);const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
                xinz.sendFileFromUrl(from, result, 'Ini', msg)
                fs.unlinkSync(media)})})
					} else {
                    reply(mess.wait)
					let ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal :V')
						xinz.sendMessage(from, fs.readFileSync(ran), image, {quoted: msg, caption: 'NIH'})
                        limitAdd(sender,  limit)
						fs.unlinkSync(ran)
					})
					}
                }
				break
                case prefix+'stickernobg': case prefix+'stikernobg': case prefix+'snobg': case prefix+'removebg': case prefix+'nobg':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                        var file_name = getRandom('.png')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(media)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(media)
                            fs.writeFileSync(file_name, body, "binary")
                            xinz.sendSticker(from, './' + file_name, msg).then((res) => fs.unlinkSync(file_name))
                        	limitAdd(sender, limit)
                        });
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                  var ran = getRandom('.png')
				  exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
						fs.unlinkSync(media)
                       if (err) return reply('Gagal :V')   
                        var file_name = getRandom('.png')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(ran)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(ran)
                            fs.writeFileSync(file_name, body, "binary")
                            xinz.sendSticker(from, './' + file_name, msg).then((res) => fs.unlinkSync(file_name))
                        	limitAdd(sender, limit)
                        });
                })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}snobg atau tag gambar yang sudah dikirim`)
                    }
                    limitAdd(sender, limit)
                    break
            case prefix+'attp':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}attp* teks`)
                xinz.sendSticker(from, `https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`, msg)
                limitAdd(sender, limit)
            }
                break
            case prefix+'steks': case prefix+'stext':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command}* teks`)
                    xinz.sendSticker(from, `https://api.vhtear.com/textxgif?apikey=${vhkey}&text=${encodeURIComponent(q)}`, msg, true)
                    limitAdd(sender, limit)
               }
                    break
           case prefix+'ttg':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ttg* teks`)
                xinz.sendSticker(from, `https://api.lolhuman.xyz/api/attp?apikey=${lolkey}&text=${encodeURIComponent(q)}`, msg)
                limitAdd(sender, limit)
            }
              break
           case prefix+'ttp3':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ttp3* teks`)
                xinz.sendSticker(from, `https://api.lolhuman.xyz/api/ttp3?apikey=${lolkey}&text=${encodeURIComponent(q)}`, msg)
                limitAdd(sender, limit)
            }
                break
            case prefix+'findsticker': case prefix+'findstiker': case prefix+'stickerwa':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return reply(`Cara penggunaan : ${command} kucing`)
                fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${q}`).then((data) => {
                    var bokepp = JSON.parse(JSON.stringify(data.result))
                    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
                    if (bokep2.stickers.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
                    for (var x of bokep2.stickers) {
                            xinz.sendSticker(from, x, msg)
                    }
                    limitAdd(sender, limit)
                })
                }
                break
            case prefix+'linedl': case prefix+'linestickerdl':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command}* link sticker_line`)
                if (!isUrl(args[1]) && !args[1].includes('store.line')) return reply(mess.error.Iv)
                fetchJson(`https://api.lolhuman.xyz/api/linestick?apikey=${lolkey}&url=${args[1]}`).then(async(data) => {
                    if (data.result.stickers.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
                    for (var x of data.result.stickers) {
                        xinz.sendSticker(from, x, msg)
                    }
                    limitAdd(sender, limit)
                })
                }
                break
            case prefix+'teledl': case prefix+'telegramdl': case prefix+'telesticker':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command}* link sticker_telegram`)
                if (!isUrl(args[1]) && !args[1].includes('t.me')) return reply(mess.error.Iv)
                fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${args[1]}`).then(async(data) => {
                    if (data.result.sticker.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
                    for (var x of data.result.sticker) {
                            xinz.sendSticker(from, x, msg)
                    }
                    limitAdd(sender, limit)
                })
                }
                break
                case prefix+'stickermeme': case prefix+'memesticker': case prefix+'memestick': case prefix+'stickmeme': case prefix+'stcmeme': case prefix+'textmaker':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!q) return reply('Textnya bang')
                    var text1 = q.split('|')[0] ? q.split('|')[0] : (q.includes("|") ? '' : q)
			     	var text2 = q.split('|')[1] ? q.split('|')[1] : ''
                    var atas = text1.replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
                    var bawah = text2.replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var tolink = await uptotele(media)
                    fs.unlinkSync(media)
                    xinz.sendSticker(from, `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${tolink}`, msg)
                    limitAdd(sender, limit)
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated){
                    reply(mess.wait)
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
			        fs.unlinkSync(media)
				    if (err) return reply('Gagal :V')   
                    var tolink = await uptotele(ran)
                    fs.unlinkSync(ran)
                    xinz.sendSticker(from, `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${tolink}`, msg)
                    limitAdd(sender, limit)
                })
                } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command} text atas|text bawah`)
                }
               }
                    break
            case prefix+'translate': case prefix+'tr':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}translate* kodebahasa teks\n*${prefix}translate* kodebahasa <reply message>`)
                if (isQuotedMsg){
                    let bahasanya = args[1].toString()
                    if (!listbahasa.isSupported(bahasanya)) {
                        let ini_txt = `Maaf, Bahasa ${bahasanya} Tidak Terdaftar.\n\nList Bahasa:\n`
                       for (var x in  listbahasa) {
                           ini_txt += `${x} - ${listbahasa[x]}\n`
                        }
                        textImg(ini_txt)
                    }
                    const trans = await translate(quotedMsg.chats, {
                        to: bahasanya
                    })
                    .then((res) => reply(res.text))
                    .catch((err) => {
                        reply(err.toString())
                    })
                    trans
                    limitAdd(sender, limit)
                } else {
                    if (args.length < 3) return reply(`Penggunaan :\n*${prefix}translate* kodebahasa teks\n*${prefix}translate* kodebahasa <reply message>`)
                    let bahasanya = args[1].toString()
                    if (!listbahasa.isSupported(bahasanya)) {
                        let ini_txt = `Maaf, Bahasa ${bahasanya} Tidak Terdaftar.\n\nList Bahasa:\n`
                       for (var x in  listbahasa) {
                           ini_txt += `${x} - ${listbahasa[x]}\n`
                        }
                        textImg(ini_txt)
                    }
                    let textnya = q.slice(args[1].length + 1, q.length)
                    const trans = await translate(textnya, {
                        to: bahasanya
                    })
                    .then((res) => reply(res.text))
                    .catch((err) => {
                        reply(err.toString())
                    })
                    trans
                    limitAdd(sender, limit)
                }
            }
                break
                case prefix+'tts':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}tts* kodebahasa teks\n*${prefix}tts* kodebahasa <reply message>`)
                if (isQuotedMsg){
                    let rano = getRandom('.ogg')
                    let ranm = getRandom('.mp3')
                    let bahasanya = args[1].toString()
                    if (!listbahasa.isSupported(bahasanya)) {
                        let ini_txt = `Maaf, Bahasa ${bahasanya} Tidak Terdaftar.\n\nList Bahasa:\n`
                       for (var x in  listbahasa) {
                           ini_txt += `${x} - ${listbahasa[x]}\n`
                        }
                        textImg(ini_txt)
                    }
                    const ptt = await tts(bahasanya)
                    ptt.save(ranm, quotedMsg.chats, function() {
                        exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
			            	fs.unlinkSync(ranm)
							if (err) return reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
							xinz.sendMessage(from, fs.readFileSync(rano), audio, { quoted: msg, ptt: true })
						    fs.unlinkSync(rano)
                            limitAdd(sender, limit)
					    	})
                        })
                    .catch(() => reply(mess.error.api))
                } else {
                    if (args.length < 3) return reply(`Penggunaan :\n*${prefix}tts* kodebahasa teks\n*${prefix}tts* kodebahasa <reply message>`)
                    let rano = getRandom('.ogg')
                    let ranm = getRandom('.mp3')
                    let bahasanya = args[1].toString()
                    if (!listbahasa.isSupported(bahasanya)) {
                        let ini_txt = `Maaf, Bahasa ${bahasanya} Tidak Terdaftar.\n\nList Bahasa:\n`
                       for (var x in  listbahasa) {
                           ini_txt += `${x} - ${listbahasa[x]}\n`
                        }
                        textImg(ini_txt)
                    }
                    let textnya = q.slice(args[1].length + 1, q.length)
                    const ptt = await tts(bahasanya)
                    ptt.save(ranm, textnya, function() {
                        exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
			            	fs.unlinkSync(ranm)
							if (err) return reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
							xinz.sendMessage(from, fs.readFileSync(rano), audio, { quoted: msg, ptt: true })
						    fs.unlinkSync(rano)
                            limitAdd(sender, limit)
					    	})
                        })
                    .catch(() => reply(mess.error.api))
                   }
                    break
            case prefix+'shortlink':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}tinyurl link`)
                if (!isUrl(args[1])) return reply(`Masukkan link yang benar`)
                axios.get(`https://tinyurl.com/api-create.php?url=${args[1]}`)
                .then((a) => reply(`Nih ${a.data}`))
                .catch(() => reply(`Error, harap masukkan link dengan benar`))
                break
            case prefix+'shortlink2':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}tinyurl link`)
                if (!isUrl(args[1])) return reply(`Masukkan link yang benar`)
                axios.get(`https://tobz-api.herokuapp.com/api/bitly?apikey=${tobzkey}&url=${args[1]}`)
                .then((a) => reply(`Nih ${a.data.result}`))
                .catch(() => reply(`Error, harap masukkan link dengan benar`))
                break
            case prefix+'shortlink3':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}tinyurl link`)
                if (!isUrl(args[1])) return reply(`Masukkan link yang benar`)
                axios.get(`http://docs-jojo.herokuapp.com/api/shorturl-at?url=${args[1]}`)
                .then((a) => reply(`Nih ${a.data.result}`))
                .catch(() => reply(`Error, harap masukkan link dengan benar`))
                break
            case prefix+'kurs':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('http://docs-jojo.herokuapp.com/api/kurs')
                .then((kontlo)=>{
                    let ini = 'Info Kurs:\n\n'
                    for (var x of kontlo.result){
                    ini += `Kurs : ${x.kurs}\nTengah: ${x.tengah}\nJual: ${x.jual}\nBeli: ${x.beli}\n\n`
                    }
                    textImg(ini)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
//------------------< Canvas  >-------------------
            case prefix+'trigger': case prefix+'triggered':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    reply(mess.wait)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    canvas.Canvas.trigger(media)
                    .then(async buffer => {
                        canvas.write(buffer, './media/' + sender + '.gif')
                        xinz.sendSticker(from, './media/' + sender + '.gif', msg).then((res) => fs.unlinkSync('./media/' + sender + '.gif'))
                        limitAdd(sender, limit)
                    })
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated){
                    reply(mess.wait)
                    let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal :V')
                        canvas.Canvas.trigger(ran)
                        .then(async buffer => {
                            canvas.write(buffer, './media/' + sender + '.gif')
                            fs.unlinkSync(ran)
                        xinz.sendSticker(from, './media/' + sender + '.gif', msg).then((res) => fs.unlinkSync('./media/' + sender + '.gif'))
                        limitAdd(sender, limit)
                        })
					})
                } else {
                    reply(`Kirim gambar atau reply gambar/sticker dengan caption ${command}\nNote: Tidak support sticker bergerak`)
                }
            }
                break
            case prefix+'circle': case prefix+'circlesticker': case prefix+'stickerbulat': case prefix+'stickerbulet': case prefix+'stickercircle': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    reply(mess.wait)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    canvas.Canvas.circle(media)
                    .then(async buffer => {
                        await canvas.write(buffer, './media/' + sender + '.png')
                        xinz.sendSticker(from, './media/' + sender + '.png', msg).then((res) => fs.unlinkSync('./media/' + sender + '.png'))
                        limitAdd(sender, limit)
                    })
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated){
                    reply(mess.wait)
                    let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal :V')
                        canvas.Canvas.circle(ran)
                        .then(async buffer => {
                            await canvas.write(buffer, './media/' + sender + '.png')
                            fs.unlinkSync(ran)
                        xinz.sendSticker(from, './media/' + sender + '.png', msg).then((res) => fs.unlinkSync('./media/' + sender + '.png'))
                        limitAdd(sender, limit)
                        })
					})
                } else {
                    reply(`Kirim gambar atau reply gambar/sticker dengan caption ${command}\nNote: Tidak support sticker bergerak`)
                }
            }
                break
            case prefix+'kiss': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    try {
                        var pic = await xinz.getProfilePicture(sender)
                    } catch {
                        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    }
                if (isImage || isQuotedImage) {
                    reply(mess.wait)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    let pict = await getBuffer(pic)
                    canvas.Canvas.kiss(pict, media)
                    .then(async buffer => {
                        await canvas.write(buffer, './media/' + sender + '.png')
                        await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                        await fs.unlinkSync('./media/' + sender + '.png')	
                    })
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated){
                    reply(mess.wait)
                    let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let pict = await getBuffer(pic)
                    let ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal :V')
                        canvas.Canvas.kiss(pict, ran)
                        .then(async buffer => {
                            await canvas.write(buffer, './media/' + sender + '.png')
                            fs.unlinkSync(ran)
                            await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                            await fs.unlinkSync('./media/' + sender + '.png')	
                        })
                    })
                } else {
                    reply(`Kirim gambar atau reply gambar/sticker dengan caption ${command}\nNote: Tidak support sticker bergerak`)
                }
            }
                break
            case prefix+'gay': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    reply(mess.wait)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    canvas.Canvas.rainbow(media)
                    .then(async buffer => {
                        await canvas.write(buffer, './media/' + sender + '.png')
                        await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                        await fs.unlinkSync('./media/' + sender + '.png')	
                    })
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated){
                    reply(mess.wait)
                    let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal :V')
                        canvas.Canvas.rainbow(ran)
                        .then(async buffer => {
                            await canvas.write(buffer, './media/' + sender + '.png')
                            fs.unlinkSync(ran)
                            await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                            await fs.unlinkSync('./media/' + sender + '.png')	
                        })
                    })
                } else {
                    reply(`Kirim gambar atau reply gambar/sticker dengan caption ${command}\nNote: Tidak support sticker bergerak`)
                }
            }
                break
            case prefix+'trash': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    reply(mess.wait)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    canvas.Canvas.trash(media)
                    .then(async buffer => {
                        await canvas.write(buffer, './media/' + sender + '.png')
                        await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                        await fs.unlinkSync('./media/' + sender + '.png')	
                    })
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated){
                    reply(mess.wait)
                    let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal :V')
                        canvas.Canvas.trash(ran)
                        .then(async buffer => {
                            await canvas.write(buffer, './media/' + sender + '.png')
                            fs.unlinkSync(ran)
                            await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                            await fs.unlinkSync('./media/' + sender + '.png')	
                        })
                    })
                } else {
                    reply(`Kirim gambar atau reply gambar/sticker dengan caption ${command}\nNote: Tidak support sticker bergerak`)
                }
            }
                break
            case prefix+'hitler': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    reply(mess.wait)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    canvas.Canvas.hitler(media)
                    .then(async buffer => {
                        await canvas.write(buffer, './media/' + sender + '.png')
                        await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                        await fs.unlinkSync('./media/' + sender + '.png')	
                    })
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated){
                    reply(mess.wait)
                    let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal :V')
                        canvas.Canvas.hitler(ran)
                        .then(async buffer => {
                            await canvas.write(buffer, './media/' + sender + '.png')
                            fs.unlinkSync(ran)
                            await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                            await fs.unlinkSync('./media/' + sender + '.png')	
                        })
                    })
                } else {
                    reply(`Kirim gambar atau reply gambar/sticker dengan caption ${command}\nNote: Tidak support sticker bergerak`)
                }
            }
                break
            case prefix+'beautiful': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    reply(mess.wait)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    canvas.Canvas.beautiful(media)
                    .then(async buffer => {
                        await canvas.write(buffer, './media/' + sender + '.png')
                        await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                        await fs.unlinkSync('./media/' + sender + '.png')	
                    })
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated){
                    reply(mess.wait)
                    let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal :V')
                        canvas.Canvas.beautiful(ran)
                        .then(async buffer => {
                            await canvas.write(buffer, './media/' + sender + '.png')
                            fs.unlinkSync(ran)
                            await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                            await fs.unlinkSync('./media/' + sender + '.png')	
                        })
                    })
                } else {
                    reply(`Kirim gambar atau reply gambar/sticker dengan caption ${command}\nNote: Tidak support sticker bergerak`)
                }
            }
                break
            case prefix+'jail': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    reply(mess.wait)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    canvas.Canvas.jail(media)
                    .then(async buffer => {
                        await canvas.write(buffer, './media/' + sender + '.png')
                        await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                        await fs.unlinkSync('./media/' + sender + '.png')	
                    })
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated){
                    reply(mess.wait)
                    let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal :V')
                        canvas.Canvas.jail(ran)
                        .then(async buffer => {
                            await canvas.write(buffer, './media/' + sender + '.png')
                            fs.unlinkSync(ran)
                            await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                            await fs.unlinkSync('./media/' + sender + '.png')	
                        })
                    })
                } else {
                    reply(`Kirim gambar atau reply gambar/sticker dengan caption ${command}\nNote: Tidak support sticker bergerak`)
                }
            }
                break
            case prefix+'wanted': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    reply(mess.wait)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    canvas.Canvas.wanted(media)
                    .then(async buffer => {
                        await canvas.write(buffer, './media/' + sender + '.png')
                        await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                        await fs.unlinkSync('./media/' + sender + '.png')	
                    })
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated){
                    reply(mess.wait)
                    let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal :V')
                        canvas.Canvas.wanted(ran)
                        .then(async buffer => {
                            await canvas.write(buffer, './media/' + sender + '.png')
                            fs.unlinkSync(ran)
                            await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                            await fs.unlinkSync('./media/' + sender + '.png')	
                        })
                    })
                } else {
                    reply(`Kirim gambar atau reply gambar/sticker dengan caption ${command}\nNote: Tidak support sticker bergerak`)
                }
            }
                break
            case prefix+'spank': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    try {
                        var pic = await xinz.getProfilePicture(sender)
                    } catch {
                        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    }
                if (isImage || isQuotedImage) {
                    reply(mess.wait)
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    let pict = await getBuffer(pic)
                    canvas.Canvas.spank(pict, media)
                    .then(async buffer => {
                        await canvas.write(buffer, './media/' + sender + '.png')
                        await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                        await fs.unlinkSync('./media/' + sender + '.png')	
                    })
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated){
                    reply(mess.wait)
                    let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let pict = await getBuffer(pic)
                    let ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal :V')
                        canvas.Canvas.spank(pict, ran)
                        .then(async buffer => {
                            await canvas.write(buffer, './media/' + sender + '.png')
                            fs.unlinkSync(ran)
                            await xinz.sendImage(from, fs.readFileSync('./media/' + sender + '.png'), '', msg)
                            await fs.unlinkSync('./media/' + sender + '.png')	
                        })
                    })
                } else {
                    reply(`Kirim gambar atau reply gambar/sticker dengan caption ${command}\nNote: Tidak support sticker bergerak`)
                }
            }
                break
//------------------< NULIS >---------------------
            case prefix+'nulis':
                reply(`*Pilihan*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
                break
            case prefix+'nuliskiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xinz.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    limitAdd(sender, limit)
                })
            }
                break
            case prefix+'nuliskanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xinz.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    limitAdd(sender, limit)
                })
            }
                break
            case prefix+'foliokiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xinz.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    limitAdd(sender, limit)
                })
            }
                break
            case prefix+'foliokanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xinz.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    limitAdd(sender, limit)
                })
            }
                break
//------------------< Text Marker >-------------------
            case prefix+'retro': case prefix+'retrotext': case prefix+'retroteks':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text1|text2|text3`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} text1|text2`)
                reply(mess.wait)
                fetchJson(`https://api.zeks.xyz/api/retro?apikey=${zekskey}&text1=${q.split('|')[0]}&text2=${q.split('|')[1]}&text3=${q.split('|')[2]}`)
                .then((res) =>{
                xinz.sendMessage(from, { url: res.result }, image, { quoted: msg }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                })
                break
            case prefix+'firetext': case prefix+'firemaker':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                reply(mess.wait)
                xinz.sendMessage(from, { url:`https://api.vhtear.com/fire_maker?text=${q}&apikey=${vhkey}`}, image, { quoted: msg }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
            case prefix+'sliding': case prefix+'slidingtext':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                reply(mess.wait)
                xinz.sendMessage(from, { url:`https://api.vhtear.com/slidingtext?text=${q}&apikey=${vhkey}`}, video, { quoted: msg }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
            case prefix+'mlmaker':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} hero|text2`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} hero|text2`)
                reply(mess.wait)
                xinz.sendMessage(from, { url:`https://api.vhtear.com/logoml?hero=${q.split('|')[0]}&text=${q.split('|')[1]}&apikey=${vhkey}`}, image, { quoted: msg }).catch(() => reply(`Hero Tidak Terdaftar`))
                limitAdd(sender, limit)
                break
            case prefix+'fflogo':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} hero|text2`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} hero|text2`)
                reply(mess.wait)
                xinz.sendMessage(from, { url:`https://api.vhtear.com/logoff?hero=${q.split('|')[0]}&text=${q.split('|')[1]}&apikey=${vhkey}`}, image, { quoted: msg }).catch(() => reply(`Hero Tidak Terdaftar`))
                limitAdd(sender, limit)
                break
            case prefix+'balloonmaker': case prefix+'blmaker':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text1|text2`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} text1|text2`)
                reply(mess.wait)
                xinz.sendMessage(from, { url:`https://api.vhtear.com/balloonmaker?text1=${q.split('|')[0]}&text2=${q.split('|')[1]}&apikey=${vhkey}`}, image, { quoted: msg }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
            case prefix+'ffbanner':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text1|text2`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} text1|text2`)
                reply(mess.wait)
                xinz.sendMessage(from, { url:`https://api.vhtear.com/bannerff?title=${q.split('|')[0]}&text=${q.split('|')[1]}&apikey=${vhkey}` }, image, { quoted: msg }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
            case prefix+'blackpink':
            case prefix+'neon':
            case prefix+'greenneon':
            case prefix+'advanceglow':
            case prefix+'futureneon':
            case prefix+'sandwriting':
            case prefix+'sandsummer':
            case prefix+'sandengraved':
            case prefix+'metaldark':
            case prefix+'neonlight':
            case prefix+'holographic':
            case prefix+'text1917':
            case prefix+'minion':
            case prefix+'deluxesilver':
            case prefix+'newyearcard':
            case prefix+'bloodfrosted':
            case prefix+'halloween':
            case prefix+'jokerlogo':
            case prefix+'fireworksparkle':
            case prefix+'natureleaves':
            case prefix+'bokeh':
            case prefix+'toxic':
            case prefix+'strawberry':
            case prefix+'box3d':
            case prefix+'roadwarning':
            case prefix+'breakwall':
            case prefix+'icecold':
            case prefix+'luxury':
            case prefix+'cloud':
            case prefix+'summersand':
            case prefix+'horrorblood':
            case prefix+'thunder2':
            case prefix+'christmas':
                      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} Ica`)
                reply(mess.wait)
                xinz.sendMessage(from, { url:`https://api.lolhuman.xyz/api/textprome/${command.split(prefix)[1]}?apikey=${lolkey}&text=${q}` }, image, { quoted: msg }).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
//------------------< imagemaker >-------------------
            case prefix+'phcomment':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} username|text`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} username|text`)
                try {
                    var pic = await xinz.getProfilePicture(sender)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                getBuffer('https://nekobot.xyz/api/imagegen?type=phcomment&image=' + await fetchText('https://tinyurl.com/api-create.php?url=' + pic) + '&username=' + q.split('|')[0] + '&text=' + q.split('|')[1] + '&raw=1')
                .then((kontlo)=>{
                    xinz.sendImage(from, kontlo, '', msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'ytcomment': case prefix+'ytc':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} username|text`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} username|text`)
                try {
                    var pic = await xinz.getProfilePicture(sender)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                getBuffer('https://some-random-api.ml/canvas/youtube-comment?avatar=' + pic + '&username=' + q.split('|')[0] + '&comment=' + q.split('|')[1])
                .then((kontlo)=>{
                    xinz.sendImage(from, kontlo, '', msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'pencil':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://api.lolhuman.xyz/api/editor/pencil?apikey=${lolkey}&img=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://api.lolhuman.xyz/api/editor/pencil?apikey=${lolkey}&img=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'fisheye':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://api.lolhuman.xyz/api/editor/fisheye?apikey=${lolkey}&img=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://api.lolhuman.xyz/api/editor/fisheye?apikey=${lolkey}&img=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'wasted':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'threats':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=threats&url=${link}&raw=1`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=threats&url=${link}&raw=1`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'buriq': case prefix+'burik':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=jpeg&url=${link}&raw=1`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=jpeg&url=${link}&raw=1`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'deep': case prefix+'deepfry':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${link}&raw=1`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${link}&raw=1`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'magik': case prefix+'magic':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${link}&raw=1`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${link}&raw=1`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'blurpify':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${link}&raw=1`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${link}&raw=1`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'captcha':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return reply(`Penggunaan ${command} query lalu reply gambar/sticker`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=captcha&url=${link}&raw=1&username=${q}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=captcha&url=${link}&raw=1&username=${q}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'glass':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'greyscale':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'invert':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'invertgrey':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/invertgreyscale?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/invertgreyscale?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'brigthness':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/brigthness?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/brigthness?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'sepia':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/sepia?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/sepia?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'threshold':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/threshold?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/threshold?avatar=${link}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case prefix+'searchcustom': case prefix+'searchtwib': case prefix+'searchtwibbom': case prefix+'searchtwi':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return reply(`Penggunaan ${command} query`)
                fetchJson('http://bytescrapper.herokuapp.com/search?q=' + q)
                    .then((res) =>{
                    let initxt = 'Result:\n\n'
                    for (let x of res) {
                    initxt += `Creator: ${x.creator}\n`
                    initxt += `Id: ${x.id}\n`
                    initxt += `Name: ${x.name}\n\n`
                    }
                    initxt += `Cara penggunaan : ${prefix}custom name\n\n Lalu reply gambarnya`
                    textImg(initxt)
                    limitAdd(sender, limit)
                    })    
                   }
                 break
            case prefix+'custom': case prefix+'twi': case prefix+'twibbon': case prefix+'twib':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} custominasinya, lalu tag gambar/sticker`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    fetchJson(`https://bytescrapper.herokuapp.com/create?url=${link}&name=${args[1]}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, await getBuffer(res.url), 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    fetchJson(`https://bytescrapper.herokuapp.com/create?url=${link}&name=${args[1]}`)
                    .then(async(res) =>{
                    xinz.sendImage(from, await getBuffer(res.url), 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
            case prefix+'tadikamesra':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    fetchJson(`https://bytescrapper.herokuapp.com/create?url=${link}&name=tadikamesrabyriyanz`)
                    .then((res) =>{
                    xinz.sendMessage(from, { url: res.url }, image, { quoted: msg }).catch(() => reply(mess.error.api))
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    fetchJson(`https://bytescrapper.herokuapp.com/create?url=${link}&name=tadikamesrabyriyanz`)
                    .then((res) =>{
                    xinz.sendMessage(from, { url: res.url }, image, { quoted: msg }).catch(() => reply(mess.error.api))
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
            case prefix+'vtube':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    fetchJson(`https://bytescrapper.herokuapp.com/create?url=${link}&name=vtube`)
                    .then((res) =>{
                    xinz.sendMessage(from, { url: res.url }, image, { quoted: msg }).catch(() => reply(mess.error.api))
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    fetchJson(`https://bytescrapper.herokuapp.com/create?url=${link}&name=vtube`)
                    .then((res) =>{
                    xinz.sendMessage(from, { url: res.url }, image, { quoted: msg }).catch(() => reply(mess.error.api))
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
//------------------< Math Random >-------------------
				case prefix+'sange':
					if (!isGroup)return reply(mess.OnlyGrup)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let tejsqq = `Yang paling sange di group ini adalah\n*@${aku.jid.split('@')[0]}*`
					mentions(tejsqq, [aku.jid, cintax.jid], true)
					break
				case prefix+'ganteng':
					if (!isGroup)return reply(mess.OnlyGrup)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let tejs = `Cowok paling ganteng di group ini adalah\n*@${aku.jid.split('@')[0]}*`
					mentions(tejs, [aku.jid, cintax.jid], true)
					break
				case prefix+'cantik':
					if (!isGroup)return reply(mess.OnlyGrup)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let gejs = `Cewek️ paling cantik di group ini adalah\n*@${cintax.jid.split('@')[0]}*`
					mentions(gejs, [aku.jid, cintax.jid], true)
					break
					case prefix+'jadian':
					if (!isGroup)return reply(mess.OnlyGrup)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let vejs = `Ciee.. yang lagi jadian\n*@${aku.jid.split('@')[0]}* ♥️ @${cintax.jid.split('@')[0]}\nSemoga Langgeng Hii`
					mentions(vejs, [aku.jid, cintax.jid], true)
					break
				case prefix+'seberapagay': case prefix+'howgay': case prefix+'rategay':
				axios.get(`https://arugaz.herokuapp.com/api/howgay`).then(res => res.data).then(res =>
				textImg(`Nih Liat Data Gay Si ${q}

Persentase Gay : ${res.persen}%
Alert!!! : ${res.desc}`))
				break
				case prefix+'bisakah':
					const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					xinz.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + keh, text, { quoted: msg })
					break
					case prefix+'kapankah':
					const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					xinz.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + koh, text, { quoted: msg })
					break
				case prefix+'apakah':
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					xinz.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + kah, text, { quoted: msg })
					break
				case prefix+'rate':
					const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					xinz.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + te + '%', text, { quoted: msg })
					break
				case prefix+'hobby':
					const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					xinz.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + by, text, { quoted: msg })
					break
				case prefix+'truth':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					xinz.sendImage(from, await getBuffer(`https://blog.elevenia.co.id/wp-content/uploads/2020/04/27420-truth-or-dare.jpg`), 'Truth\n\n' + ttrth, msg)
					break
				case prefix+'dare':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					xinz.sendImage(from, await getBuffer(`https://blog.elevenia.co.id/wp-content/uploads/2020/04/27420-truth-or-dare.jpg`), 'Dare\n\n' + der , msg)
					break
				case prefix+'cekbapak': // By Ramlan ID
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					xinz.sendMessage(from, cek, text, { quoted: msg })
					break
//------------------< Baileys >---------------------
            case prefix+'getpp':
            case prefix+'getpic':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} @tag atau 'group'`)
                if (args[1] === 'group'){
                    reply(mess.wait)
                    try {
                        var pic = await xinz.getProfilePicture(from)
                    } catch {
                        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    }
                    xinz.sendImage(from, await getBuffer(pic), 'Nih bang', msg)
                    limitAdd(sender, limit)
                } else if (mentioned.length !== 0){
                    reply(mess.wait)
                    try {
                        var pic = await xinz.getProfilePicture(mentioned[0])
                    } catch {
                        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    }
                    xinz.sendImage(from, await getBuffer(pic), 'Nih bang', msg)
                    limitAdd(sender, limit)
                } else {
                    reply(`Penggunaan ${command} @tag atau 'group'`)
                }
                break
            case prefix+'tagme':
                mentions(`@${sender.split("@")[0]}`, [sender], true)
                break
            case prefix+'kontak':
                if (args.length < 2) return reply(`Penggunaan ${command} nomor|nama`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} nomor|nama`)
                if (isNaN(q.split("|")[0])) return reply(`Penggunaan ${command} nomor|nama`)
                xinz.sendContact(from, q.split("|")[0], q.split("|")[1], msg)
                break
            case prefix+'kontag':{
                let arr = [];
                for (let i of groupMembers){
                    arr.push(i.jid)
                }
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (args.length < 2) return reply(`Penggunaan ${command} nomor|nama`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} nomor|nama`)
                if (isNaN(q.split("|")[0])) return reply(`Penggunaan ${command} nomor|nama`)
                xinz.sendContact(from, q.split("|")[0], q.split("|")[1], null, {contextInfo: {"mentionedJid": arr}})
                }
                break
            case prefix+'hidetag':{
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (args.length < 2) return reply(`Masukkan text`)
                let arr = [];
                for (let i of groupMembers){
                    arr.push(i.jid)
                }
                mentions(q, arr, false)
            }
                break
//------------------< ANTI DELETE >------------------- 
            case prefix+'antidelete':
                if (!isOwner && !fromMe && !isGroupAdmins) return reply(mess.GrupAdmin)
				const dataRevoke = JSON.parse(fs.readFileSync('./database/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				if (args.length === 1) return reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
				if (args[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return reply(`Antidelete telah diaktifkan di grup ini sebelumnya!`)
						dataRevoke.push(from)
						fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						reply(`Antidelete diaktifkan di grup ini!`)
					} else if (!isGroup) {
						reply(`Untuk kontak penggunaan *${prefix}antidelete ctaktif*`)
					}
				} else if (args[1] == 'ctaktif') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (!isGroup) {
						if (isCtRevoke) return reply(`Antidelete telah diaktifkan di semua kontak sebelumnya!`)
						dataCtRevoke.data = true
						fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						reply(`Antidelete diaktifkan disemua kontak!`)
					} else if (isGroup) {
						reply(`Untuk grup penggunaan *${prefix}antidelete aktif*`)
					}
				} else if (args[1] == 'banct') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (isBanCtRevoke) return reply(`kontak ini telah ada di database banlist!`)
					if (args.length === 2 || args[2].startsWith('0')) return reply(`Masukan nomer diawali dengan 62! contoh 62859289xxxxx`)
					dataBanCtRevoke.push(args[2] + '@s.whatsapp.net')
					fs.writeFileSync('./database/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					reply(`Kontak ${args[2]} telah dimasukan ke banlist antidelete secara permanen!`)
				} else if (args[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						reply(`Antidelete dimatikan di grup ini!`)
					} else if (!isGroup) {
						reply(`Untuk kontak penggunaan *${prefix}antidelete ctmati*`)
					}
				} else if (args[1] == 'ctmati') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						reply(`Antidelete dimatikan disemua kontak!`)
					} else if (isGroup) {
						reply(`Untuk grup penggunaan *${prefix}antidelete mati*`)
					}
				} else {
                  reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
               }
				break
//------------------< Primbon >-------------------
            case prefix+'artinama': case prefix+'artiname':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} query`)
                fetchJson('https://api.zeks.xyz/api/artinama?apikey=' + zekskey + '&nama=' + q)
                .then((kontlo)=>{
                    textImg(kontlo.result)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'artimimpi': case prefix+'mimpi':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} query`)
                fetchJson('https://api.zeks.xyz/api/artimimpi?apikey=' + zekskey + '&q=' + q)
                .then((kontlo)=>{
                    let b = 'Arti Mimpi :\n\n'
                    for (let x of kontlo.result.array) {
                    b += `${x}\n\n`
                    }
                    textImg(b)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'jodoh': case prefix+'pasangan': case prefix+'partner':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} nama1|nama2`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} nama1|nama2`)
                fetchJson(`https://api.zeks.xyz/api/primbonjodoh?apikey=${zekskey}&nama1=${q.split('|')[0]}&nama2=${q.split('|')[1]}`)
                .then((res)=>{
                    xinz.sendFileFromUrl (from, res.result.thumb, `Pasangan ${res.result.nama1} && ${res.result.nama2}\n\nPositif:\n${res.result.positif}\n\nNegatif:\n${res.result.negatif}`, msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'ramaljadian':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} tanggal|bulan|tahun`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} tanggal|bulan|tahun`)
                fetchJson(`https://api.lolhuman.xyz/api/jadian/${q.split('|')[0]}/${q.split('|')[1]}/${q.split('|')[2]}?apikey=${lolkey}`)
                .then((res)=>{
                    textImg(`Tanggal Jadian ${q.split('|')[0]} - ${q.split('|')[1]} - ${q.split('|')[2]}\n\n${res.result.karakteristik}\n\n${res.result.deskripsi}`)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'weton':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} tanggal|bulan|tahun`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} tanggal|bulan|tahun`)
                fetchJson(`https://api.vhtear.com/ramalweton?tgl=${q.split('|')[0]}&bln=${q.split('|')[1]}&thn=${q.split('|')[2]}&apikey=${vhkey}`)
                .then((res)=>{
                    textImg(`Tanggal Lahir ${q.split('|')[0]} - ${q.split('|')[1]} - ${q.split('|')[2]}\n\n${res.result.hasil}`)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'zodiak': case prefix+'zodiac':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} query`)
                fetchJson(`https://api.vhtear.com/zodiak?query=${q}&apikey=${vhkey}`)
                .then((res)=>{
                    textImg(`Zodiak: ${args[1]}\n\n` + res.result.ramalan)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
//------------------< Media, Misc, and Fun >-------------------
            case prefix+'ssweb':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}ssweb link*\n\nDefault versi : web/pc, jika ingin ke versi mobile, akhiri dengan --mobile, Example: \n*${prefix}ssweb* https://google.com --mobile`)
                if (!isUrl(args[1])) return reply(`Masukkan link yang benar`)
                await ssweb(args[1], !q.endsWith('--mobile'), args[1])
                await limitAdd(sender, limit)
                break
            case prefix+'google':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan :\n*${command} query*`)
                google({ 'query' : q }).then(async (res) =>{
                let txt = 'Hasil Pencarian Google: ' + q + '\n\n'
                for (let x of res) {
                    txt += `*${x.title}*\n`
                    txt += `${x.snippet}\n`
                    txt += `*${x.link}*\n\n`
                }
                await ssweb('https://www.google.com/search?q=' + q, true, txt)
                await limitAdd(sender, limit)
                })
                break
            case prefix+'tourl': case prefix+'tolink':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    textImg(link)
				    fs.unlinkSync(yoooo)
                } else if (isQuotedSticker) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptoibb(yoooo)
                    textImg(link)
				    fs.unlinkSync(yoooo)
                 } else if (isVideo || isQuotedVideo) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    textImg(link)
				    fs.unlinkSync(yoooo)
                 } else if (isQuotedAudio || isQuotedDocument) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptoaqulz(yoooo)
                    textImg(link)
				    fs.unlinkSync(yoooo)
                 } else {
                   reply(`Kirim/reply file (gambar, sticker, document, video, dll) dengan caption ${command}`)
                }
               }
                    break
            case prefix+'lirik': case prefix+'lyrics': case prefix+'lyric':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} query`)
                let lirik = await lirikLagu(q)
                if (lirik === undefined) return reply('Not Found')
                xinz.sendImage(from, await getBuffer(lirik.thumbnail), `*Artist* : ${lirik.artist}\n*Title* : ${lirik.title}\n\n*Lyrics* : ${lirik.lirik}`, msg)
                }
                break
            case prefix+'fact': case prefix+'fakta': case prefix+'faktaunik':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('https://api.lolhuman.xyz/api/random/faktaunik?apikey=' + lolkey)
                .then((kontlo)=>{
                    textImg(kontlo.result)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'bucin': case prefix+'katabijak':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('https://api.lolhuman.xyz/api/random/' + command.split(prefix)[1] + '?apikey=' + lolkey)
                .then((kontlo)=>{
                    textImg(kontlo.result)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'quote': case prefix+'quotes':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('https://api.lolhuman.xyz/api/random/quotes?apikey=' + lolkey)
                .then((kontlo)=>{
                    textImg(`_${kontlo.result.quote}_\n\n―${kontlo.result.by}`)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'cat': case prefix+'randomcat':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('https://api.vhtear.com/randomcat?apikey=' + vhkey)
                .then((kontlo)=>{
                    xinz.sendFileFromUrl(from, kontlo.result.url, '', msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'cuaca': case prefix+'weather':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} query`)
                fetchJson(`https://api.lolhuman.xyz/api/cuaca/${q.trim()}?apikey=${lolkey}`)
                .then((res) =>{
                    let get_result = res.result
                    let ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    xinz.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: msg }).then((res) => xinz.sendMessage(from, ini_txt, text, {quoted: res}))
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'jbola': case prefix+'jadwalbola':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('https://api.lolhuman.xyz/api/jadwalbola?apikey=' + lolkey)
                .then((kontlo)=>{
                    let ini_txt = 'Jadwal Bola :\n\n'
                    for (let x of kontlo.result){
                    ini_txt += `Pertandingan: ${x.match}\n`
                    ini_txt += `Event atau Liga: ${x.event}\n`
                    ini_txt += `Tanggal: ${x.hari} ${x.jam}\n`
                    ini_txt += `Live di : ${x.tv}\n\n`
                    }
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'news': case prefix+'berita':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('https://api.lolhuman.xyz/api/newsinfo?apikey=' + lolkey)
                .then((kontlo)=>{
                    let ini_txt = 'Berita Hari ini :\n\n'
                    for (let x of kontlo.result){
                    ini_txt += `*${x.title}*\n\n`
                    ini_txt += `${x.content}\n\n`
                    ini_txt += `Sumber: ${x.source.name}\n`
                    ini_txt += `Publish : ${x.publishedAt}\n`
                    ini_txt += `Selengkapnya : ${x.url}\n\n`
                    }
                    xinz.sendFileFromUrl(from, kontlo.result[0].urlToImage, ini_txt, msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'tiktokhastag': case prefix+'tthastag':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} query`)
                fetchJson('https://api.vhtear.com/tiktokhastag?apikey=' + vhkey + '&query=' + q)
                .then((kontlo)=>{
                    let ini_txt = 'Result :\n\n'
                    for (let x of kontlo.result){
                    ini_txt += `Title : ${x.title}\n\n`
                    ini_txt += `Name : ${x.name}\n\n`
                    ini_txt += `NickName: ${x.nickName}\n`
                    ini_txt += `Linm : ${x.urlVideo}\n\n`
                    }
                    xinz.sendFileFromUrl(from, kontlo.result[0].urlImage, ini_txt, msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
            case prefix+'gsmarena': case prefix+'infohp':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} query`)
                fetchJson('https://api.vhtear.com/gsmarena?apikey=' + vhkey + '&query=' + q)
                .then((kontlo)=>{
                    xinz.sendFileFromUrl(from, kontlo.result.image, 'Phone Name:\n' +  kontlo.result.title + '\n\n' + kontlo.result.spec, msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
            case prefix+'infoalamat': case prefix+'infotempat':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} query`)
                fetchJson('https://api.vhtear.com/infoalamat?apikey=' + vhkey + '&query=' + q)
                .then((kontlo)=>{
                    textImg(kontlo.result.data + '\n\n' + kontlo.result.deskripsi)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
            case prefix+'corona': case prefix+'covid': case prefix+'covid19': case prefix+'covid-19':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                let country = q ? q : 'indonesia'
                fetchJson('https://coronavirus-19-api.herokuapp.com/countries/' + country.toLowerCase() + '/')
                .then((res)=>{
                    textImg('🌎️ Covid Info - ' + country.charAt(0).toUpperCase() + country.slice(1) + ' 🌍️\n\n✨️ Total Cases: ' + `${res.cases}` + '\n📆️ Today\'s Cases: ' + `${res.todayCases}` + '\n☣️ Total Deaths: ' + `${res.deaths}` + '\n☢️ Today\'s Deaths: ' + `${res.todayDeaths}` + '\n⛩️ Active Cases: ' + `${res.active}` + '.')
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                }
                    break
            case prefix+'happymod':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} query`)
                fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${q}&apikey=${tobzkey}`)
                .then((res) =>{
                    let ini_txt = `Title : ${res.result[0].title}\n`
                    ini_txt += `Size : ${res.result[0].size}\n`
                    ini_txt += `Price : ${res.result[0].price}\n`
                    ini_txt += `Version : ${res.result[0].version}\n`
                    ini_txt += `Root ? : ${res.result[0].root}\n`
                    ini_txt += `Download Link : ${res.result[0].download}\n`
                    xinz.sendFileFromUrl(from, res.result[0].image, ini_txt, msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'moddroid':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} query`)
                fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${q}&apikey=${tobzkey}`)
                .then((res) =>{
                    let ini_txt = `Title : ${res.result[0].title}\n`
                    ini_txt += `Size : ${res.result[0].size}\n`
                    ini_txt += `Info : ${res.result[0].mod_info}\n`
                    ini_txt += `Version : ${res.result[0].latest_version}\n`
                    ini_txt += `Publiser : ${res.result[0].publisher}\n`
                    ini_txt += `Genre Apk : ${res.result[0].genre}\n`
                    ini_txt += `Download Link : ${res.result[0].download}\n`
                    xinz.sendFileFromUrl(from, res.result[0].image, ini_txt, msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'jtv': case prefix+'jadwaltv':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} query`)
                fetchJson('https://tobz-api.herokuapp.com/api/jadwaltv?channel=' + args[1].toLowerCase() +'&apikey=' + tobzkey)
                .then((kontlo)=>{
                    let ini_txt = `Jadwal Tv ${args[1].toUpperCase()}\n\n`
                    for (let x of kontlo.result){
                    ini_txt += `${x}\n`
                    }
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
            case prefix+'film':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                film().then((a) => {
                    let txt = '*Update Movie:*\n\n'
                    for (let x of a) {
                        txt += `*Judul* : ${x.title}\n`
                        txt += `*Genre Film* : ${x.genre}\n`
                        txt += `*Status* : ${x.status}\n`
                        txt += `*Info Url* : ${x.url}\n\n`
                    }
                    xinz.sendFileFromUrl(from, a[0].thumburl, txt, msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
            case prefix+'lk21': case prefix+'movie':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} query`)
                fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${q}`)
                .then((kontlo)=>{
                    let get_result = kontlo.result
                    let ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    xinz.sendFileFromUrl(from, get_result.thumbnail, ini_txt, msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
             case prefix+'math':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return reply(`yang mau di itung mana?`)
                    if (typeof mathjs.evaluate(q) !== 'number') {
                        await reply(ind.notNum(q))
                    } else {
                        reply(`*── 「 MATH 」 ──*\n\n${q} = ${mathjs.evaluate(q)}`)
                    }
                    limitAdd(sender, limit)
                break
            case prefix+'cekongkir': case prefix+'ongkir':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} kurir|asal|tujuan`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} kurir|asal|tujuan`)
                fetchJson(`https://api.vhtear.com/cekongkir?kurir=${q.split('|')[0]}&fromcity=${q.split('|')[1]}&tocity=${q.split('|')[2]}&apikey=${vhkey}`)
                .then((get_result) =>{
                    var get_resu = get_result.result
                    var get_resulttt = get_result.result.data
                    let ini_txt = `${get_resu.title}\n\nNote: ${get_resu.informasi}\n\n`
                    for (var x of get_resulttt) {
                        ini_txt += `Layanan: ${x.layanan}\n`
                        ini_txt += `Tarif: ${x.tarif}\n`
                        ini_txt += `Estimasi: ${x.etd}\n\n`
                    }
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'distance': case prefix+'jarak':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} tempat1|tempat2`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} tempat1|tempat2`)
                fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${lolkey}&kota1=${q.split('|')[0].trim()}&kota2=${q.split('|')[1].trim()}`)
                .then((res) =>{
                    let x = res.result
                    let ini_txt = `Informasi Jarak dari ${q.split('|')[0].trim()} ke ${q.split('|')[1].trim()} :\n\n`
                    ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
                    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
                    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
                    ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
                    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
                    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
                    ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
                    ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
                    ini_txt += `   ╭───────────────❏\n`
                    ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
                    ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
                    ini_txt += `❍┤ Mobil : ${x.mobil}\n`
                    ini_txt += `❍┤ Motor : ${x.motor}\n`
                    ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
                    ini_txt += `   ╰───────────────❏\n`
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
          case prefix+'iploockup': case prefix+'ipwhois': case prefix+'whois':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command}* alamat_ip`)
                fetchJson(`https://api.vhtear.com/ipwhois?ipaddr=${args[1]}&apikey=${vhkey}`)
                .then((res) =>{
                    let get_result = res.result
                    let ini_txt = `IP Address : ${get_result.ip_address}\n`
                    ini_txt += `City : ${get_result.city}\n`
                    ini_txt += `Region : ${get_result.region}\n`
                    ini_txt += `Country : ${get_result.country}\n`
                    ini_txt += `Postal Code : ${get_result.postal_code}\n`
                    ini_txt += `Uni Eropa : ${get_result.european_union}\n`
                    ini_txt += `latitude and longitude : ${get_result.latitude_longitude}\n`
                    ini_txt += `TimeZone : ${get_result.time_zone}\n`
                    ini_txt += `Calling Code : ${get_result.calling_code}\n`
                    ini_txt += `Currency : ${get_result.currency}\n`
                    ini_txt += `Languages : ${get_result.languages}\n`
                    ini_txt += `Asn Code : ${get_result.asn}\n`
                    ini_txt += `Organization : ${get_result.org}\n`
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'jobseek': case prefix+'infoloker':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('http://docs-jojo.herokuapp.com/api/infoloker')
                .then((res) =>{
                    let ini_txt = 'Info Lowongan Pekerjaan :\n\n'
                    for (var x of res.result) {
                        ini_txt += `Perusahaan : ${x.perusahaan}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Profesi : ${x.profesi}\n`
                        ini_txt += `Gaji : ${x.gaji}\n`
                        ini_txt += `Lokasi : ${x.lokasi}\n`
                        ini_txt += `Pengalaman : ${x.pengalaman}\n`
                        ini_txt += `levelKarir : ${x.levelKarir}\n`
                        ini_txt += `jobFunction : ${x.jobFunction}\n`
                        ini_txt += `Syarat : ${x.syarat}\n`
                        ini_txt += `Deskripsi : ${x.desc}\n\n`
                    }
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'hoax': case prefix+'infohoax':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('https://api.lolhuman.xyz/api/turnbackhoax?apikey=' + lolkey)
                .then((res) =>{
                    let ini_txt = 'Info Hoax :\n\n'
                    for (var x of res.result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'trend': case prefix+'trendtwt': case prefix+'trending':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                let querynya = q ? q : 'indonesia'
                fetchJson('https://api.vhtear.com/trendtwitter?country=' + querynya.toLowerCase() + '&apikey=' + vhkey)
                .then((res) =>{
                    let ini_txt = `Trend Twitter for Country ${querynya} :\n\n`
                    for (var x of res.result.data) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Tweet Count : ${x.tweet_count}\n\n`
                    }
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'linesticker': case prefix+'linestiker':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('https://api.vhtear.com/newsticker?apikey=' + vhkey)
                .then((res) =>{
                    let ini_txt = "New Sticker Line : \n\n"
                    for (var x of res.result.hasil) {
                        ini_txt += `Title: ${x.title}\n`
                        ini_txt += `Url: ${x.uri}\n\n`
                    }
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'mutual': case prefix+'next':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                let contt = pendaftar[Math.floor(Math.random() * pendaftar.length)]
                xinz.sendContact(from, contt.split('@')[0], xinz.getName(contt), msg).then((res) => xinz.sendMessage(from, `Partner found: 🙉\n*${prefix}next* — find a new partner`, text, {quoted: res}))
                break
            case prefix+'resepmasakan': case prefix+'receipt': case prefix+'resep':
                if (args.length < 2) return reply(`Penggunaan ${command} nama_makanan`)
                fetchJson('https://mnazria.herokuapp.com/api/resep-search?text=' + q)
                .then((kontlo)=>{
                        let list = []
                        for (let x of kontlo.results){
                        const yy = {
                            title: `${x.title}`,
                            description: `Perkiraan waktu pembuatan ${x.times} dengan serving ${x.serving}`,
                            rowId: `${prefix}resepp ${x.key}`
                          }
                        list.push(yy)
                    }
                    xinz.sendListMsg(from, `List Menu`, `Hasil Pencarian Resep "${q}"`, `Mau Masak Apa Hari Ini`,`Pilih Disini`, `List Resep`, list, msg)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
            case prefix+'resepp':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('https://mnazria.herokuapp.com/api/resep?key=' + args[1])
                .then((res)=>{
                    let initxt = 'Bahan Yang Dibutuhkan:\n\n'
                    let initxtt = '\nStep by Step:\n\n'
                    for (let x of res.results.ingredient){
                        initxt += `${x}\n`
                    }
                    for (let y of res.results.step){
                        initxtt += `${y}\n`
                    }
                    textImg(`${res.results.title}\n\nPerkiraan Waktu: ${res.results.times}\nServings: ${res.results.servings}\nTingkat Kesulitan: ${res.results.dificulty}\n\n${res.results.desc}\n\n` + initxt + initxtt)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'joke': case prefix+'jokes': case prefix+'randomjoke': case prefix+'randomjokes':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('https://some-random-api.ml/joke')
                .then((kontlo)=>{
                    textImg(kontlo.joke + '\n\n```~Random Joke```')
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'meme': case prefix+'memes': case prefix+'randommeme': case prefix+'randommemes':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                let yo = ['wholesomeanimemes', 'dankmemes','terriblefacebookmemes','memes','AdviceAnimals','MemeEconomy','nukedmemes','okbuddyretard','historymemes','teenagers'][Math.floor(Math.random() * 10)]
                fetchJson('https://meme-api.herokuapp.com/gimme/' + yo)
                .then((kontlo)=>{
                    xinz.sendFileFromUrl(from, kontlo.url, kontlo.title, msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'wpsearch': case prefix+'wallpapersearch':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} query`)
                let yoqq = ['wallpaper2','wallpaper'][Math.floor(Math.random() * 2)]
                fetchJson(`https://api.lolhuman.xyz/api/${yoqq}?apikey=${lolkey}&query=${q}`)
                .then((kontlo)=>{
                    xinz.sendFileFromUrl(from, kontlo.result, '', msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'sreddit': case prefix+'subreddit': case prefix+'reddit': case prefix+'subredd':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length === 1) return reply(`Kirim perintah *${command} query*`)
                fetchJson('https://meme-api.herokuapp.com/gimme/' + args[1] + '/')
                .then((kontlo)=>{
                    xinz.sendFileFromUrl(from, kontlo.url, kontlo.title, msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'fml': case prefix+'fuckmylife': case prefix+'fmylife': case prefix+'fuvkmylife':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson('https://api.zeks.xyz/api/fml?apikey=' + zekskey)
                .then((kontlo)=>{
                    textImg(kontlo.result)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'memeindo': case prefix+'memeindonesia': case prefix+'memesindo': case prefix+'memesindonesia':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                getBuffer('https://api.lolhuman.xyz/api/meme/memeindo?apikey=' + lolkey)
                .then((kontlo)=>{
                    xinz.sendImage(from, kontlo, '', msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'darkjoke': case prefix+'darkjokes':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                getBuffer('https://api.lolhuman.xyz/api/meme/darkjoke?apikey=' + lolkey)
                .then((kontlo)=>{
                    xinz.sendImage(from, kontlo, '', msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'wiki': case prefix+'wikipedia': case prefix+'wikiid':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length === 1) return reply(`Kirim perintah *${command} query*`)
                axios.get(`https://id.m.wikipedia.org/wiki/${q}`)
                .then((res) =>{
                    const $ = cheerio.load(res.data)
                    let wiki = $('#mf-section-0').find('p').text()
                    let thumb = $('#mf-section-0').find('div > div > a > img').attr('src')
                    thumb = thumb ? 'https:' + thumb : 'https://pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
                    let judul = $('h1#section_0').text()
                    xinz.sendFileFromUrl(from, thumb, judul + '\n\n' + wiki, msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'wikien':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length === 1) return reply(`Kirim perintah *${command} query*`)
                axios.get(`https://en.m.wikipedia.org/wiki/${q}`)
                .then((res) =>{
                    const $ = cheerio.load(res.data)
                    let wiki = $('#mf-section-0').find('p').text()
                    let thumb = $('#mf-section-0').find('div > div > a > img').attr('src')
                    thumb = thumb ? 'https:' + thumb : 'https://pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
                    let judul = $('h1#section_0').text()
                    xinz.sendFileFromUrl(from, thumb, judul + '\n\n' + wiki, msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'readqr':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    fetchJson(`https://api.zeks.xyz/api/qrdecode?apikey=${zekskey}&image=${link}`)
                    .then(async(res) =>{
                    textImg(res.result)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    fetchJson(`https://api.zeks.xyz/api/qrdecode?apikey=${zekskey}&image=${link}`)
                    .then(async(res) =>{
                    textImg(res.result)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
//------------------< INFO >-------------------
            case prefix+'limit': case prefix+'ceklimit': case prefix+'balance': case prefix+'glimit': case prefix+'uangku': case prefix+'bal':
                if (mentioned.length !== 0){
                    textImg(`Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : `${getLimit(mentioned[0], limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(mentioned[0], gcount, glimit)}/${gcount}\nBalance : $${getBalance(mentioned[0], balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                } else {
                    textImg(`Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : ${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
                break
            case prefix+'owner': case prefix+'creator': {
                    let arrey = []
                    for ( let x of ownerNumber){
                        let getnem = xinz.getName(x)
                        let conara = { displayName: getnem, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + getnem + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + x.split("@")[0] + ':+' + x.split("@")[0] + '\n' + 'END:VCARD'.trim()}
                        arrey.push(conara)
                    }
                    xinz.sendMessage(from, { contacts: arrey }, contactsArray, { quoted: msg})
                .then(async(res) => {
                 let qqpp = [{
                    "buttonId": `${prefix}sc`,
                    "buttonText": {
                        "displayText": "SC BOT"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}ytown`,
                    "buttonText": {
                        "displayText": "YOUTUBE"
                    },
                    "type": "RESPONSE"
                }]
                xinz.sendButtons(from, `Hai Kak @${sender.split('@')[0]}`, `Itu Nomer Ownerku, Mau tau soal apa ya?`, `Jangan Sungkan Chat Ya Kak`, qqpp, false, res, [sender])
                })
                }
                break
            case prefix+'ytown':
                xinz.sendMessage(from, `Jangan Lupa Follow Ig Owner Ya : https://youtube.com/c/FaxBotz`, text, { quoted: msg, detectLink: true })
                break
            case prefix+'sourcecode': case prefix+'sc': case prefix+'src':
                textImg(`Bot ini menggunakan sc : https://github.com/Xinz-Team/XinzBot`)
                break
            case prefix+'donate':
            case prefix+'donasi':
            case prefix+'tos':
            case prefix+'sumbang':
                 xinz.sendImage(from, await getBuffer(qris), ind.tos(ownerNumber[0].split("@")[0], prefix), msg)
                break
            case prefix+'runtime':
                textImg(`${runtime(process.uptime())}`)
                break
            case prefix+'ping':
            case prefix+'speed':{
                let timestamp = speed();
				let latensi = speed() - timestamp
                textImg(`${latensi.toFixed(4)} Second`)
            }
                break
                case prefix+'report':
                    if (!q) return textImg('mau lapor apa pak')
                    if (isGroup) {
                        xinz.sendMess(ownerNumber[0], `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender}\n*Group*: ${groupName}\n*Message*: ${q}`)
                        reply(ind.received(pushname))
                    } else {
                        xinz.sendMess(ownerNumber[0], `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender}\n*Message*: ${q}`)
                        reply(ind.received(pushname))
                    }
                    break
                case prefix+'botgroup':
                case prefix+'icagroup':
                case prefix+'botgrup':
                case prefix+'icagrup':
                
                    mentions(ind.groupBot(sender), [sender], true)
                    break
                case prefix+'ownergroup':
                case prefix+'ownergrup': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!isGroup) return reply(ind.groupOnly())
                    var teks = `Owner Group : @${from.split('-')[0]}`
                    mentions(teks, [`${from.split('-')[0]}@s.whatsapp.net`], true)
}
                    break
                case prefix+'rules':
                case prefix+'rule':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    textImg(ind.rules(prefix))
                    break
                case prefix+'downloader':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    textImg(ind.menuDownloader(prefix))
                    break
                case prefix+'textmenu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    textImg(ind.menuText(prefix))
                    break
                case prefix+'menupremi':
                    textImg(ind.menuPremi(prefix))
                    break
                case prefix+'stickermenu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    textImg(ind.menuSticker(prefix))
                    break 
                case prefix+'weebsmenu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    textImg(ind.menuWeeaboo(prefix))
                    break 
                case prefix+'funmenu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    textImg(ind.menuFun(prefix))
                    break 
                case prefix+'imagemaker':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    textImg(ind.menuImage(prefix))
                    break 
                case prefix+'kerangmenu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!isGroup) return reply(ind.groupOnly())
                    textImg(ind.menuKerang(prefix))
                    break 
                case prefix+'groupmenu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!isGroup) return reply(ind.groupOnly())
                    textImg(ind.menuModeration(prefix))
                    break 
                case prefix+'18':
                case prefix+'18+':
                case prefix+'nsfwmenu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                    textImg(ind.menuNsfw(prefix))
                    break 
                case prefix+'ownermenu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!isOwner) return reply(ind.ownerOnly())
                    textImg(ind.menuOwner(prefix))
                    break 
                case prefix+'levelingmenu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!isGroup) return reply(ind.groupOnly())
                    if (!isLevelingOn) return reply(ind.levelingNotOn())
                    textImg(ind.menuLeveling(prefix))
                    break 
                case prefix+'praymenu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    textImg(ind.menuPray(prefix))
                    break 
                case prefix+'primbonmenu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    textImg(ind.menuPrimbon(prefix))
                    break 
                case prefix+'sessionmenu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    textImg(ind.menuBail(prefix))
                    break 
                case prefix+'mediamenu':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    textImg(ind.menuMisc(prefix))
                    break 
                case prefix+'about':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    textImg(ind.menuBot(prefix))
                    break 
                case prefix+'listgrup': case prefix+'listgroup':{
                let totalchat = await xinz.chats.all()
				let i = []
				let giid = []
                let grupp = []
				for (let mem of totalchat){
					i.push(mem.jid)
				}
				for (let id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
              for (let e of giid){
	         	let ingfo = await xinz.groupMetadata(e)
	        	grupp.push(ingfo)
	        }
			    	let txt = `*List Group*\n\*Total* : *${grupp.length}*\n\n`
				    for (let i = 0; i < grupp.length; i++){
					    txt += `*Nama grup : ${grupp[i].subject}*\n*ID grup : ${grupp[i].id}*\n*Dibuat : ${moment(`${grupp[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss z')}*\n*Jumlah Peserta : ${grupp[i].participants.length}*\n\n`
			    	}
				    await textImg(txt)
                  }
                    break
                case prefix+'leaveall':{
                let totalchat = await xinz.chats.all()
				let i = []
				for (let mem of totalchat){
					i.push(mem.jid)
				}
				for (let id of i){
					if (id && id.includes('g.us')){
                    xinz.sendMess(id, 'Bot sedang pembersihan, total chat:' + i.length)
                   .then(() => xinz.groupLeave(id))
					}
				}
                  }
                    break
                case prefix+'status': 
                case prefix+'stats': 
                case prefix+'stat': 
                case prefix+'botstat': {
                let totalchat = await xinz.chats.all()
				let i = []
				let giid = []
				for (let mem of totalchat){
					i.push(mem.jid)
				}
				for (let id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = xinz.user.phone
                let anu = process.uptime()
                let teskny = `*V. Whatsapp :* ${wa_version}
*Baterai :* ${xinz.baterai.baterai}%
*Charge :* ${xinz.baterai.cas === 'true' ? 'Ya' : 'Tidak'}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}
*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${runtime(anu)}`
				reply(teskny)
            }
				break
//------------------< Downloader >-------------------
            case prefix+'playmp4': case prefix+'playvideo': case prefix+'playvid': case prefix+'plav': case prefix+'playvidio':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length === 1) return reply(`Kirim perintah *${prefix}playmp4 query*`)
                try {
                    reply(mess.wait)
                    let yut = await yts(q)
                    ytv(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 40000) return xinz.sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
                        const captionisu = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            xinz.sendFileFromUrl(from, thumb, captionisu, msg)
                            xinz.sendFileFromUrl(from, dl_link, '', msg)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    xinz.sendMess(ownerNumber[0], 'PlayMp4 Error : ' + err)
                    console.log(color('[PlayMp4]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'joox': case prefix+'jooxplay':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length === 1) return reply(`Kirim perintah *${prefix}joox query*`)
                    reply(mess.wait)
                    fetchJson('https://api.lolhuman.xyz/api/jooxplay?apikey=' + lolkey +'&query=' + q)
                    .then((res) =>{
                    xinz.sendFileFromUrl(from, res.result.image, jsonformat(res.result.info), msg)
                    xinz.sendFileFromUrl(from, res.result.audio[0].link, '', msg)
                    limitAdd(sender, limit)
                    })
                    .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
            }
            break
            case prefix+'starmaker': case prefix+'starmakerdl':{
                if (args.length < 2) return reply(`Kirim perintah *${command}* link`)
                if (!isUrl(args[1]) && !args[1].includes('starmakerstudios.com')) return reply(mess.error.Iv)
                    reply(mess.wait)
                    fetchJson(`https://api.vhtear.com/starmakerdl?link=${args[1]}&apikey=${vhkey}`)
                    .then((res) =>{
                    xinz.sendFileFromUrl(from, res.result.url, res.result.title + '\n\n' + res.result.desc, msg)
                    limitAdd(sender, limit)
                    })
                    .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
            }
            break
            case prefix+'pindl': case prefix+'pinterestdl':{
                if (args.length < 2) return reply(`Kirim perintah *${command}* link`)
                if (!isUrl(args[1]) && !args[1].includes('pinterest.com')) return reply(mess.error.Iv)
                    reply(mess.wait)
                    fetchJson(`https://api.vhtear.com/pinterestdl?link=${args[1]}&apikey=${vhkey}`)
                    .then((res) =>{
                    xinz.sendFileFromUrl(from, res.result.fileUrl, res.result.title, msg)
                    limitAdd(sender, limit)
                    })
                    .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
            }
            break
               case prefix+'mfire': case prefix+'mediafire': case prefix+'mediafiredl': case prefix+'mfiredl': case prefix+'mfdl': {
                if (args.length < 2) return reply(`Kirim perintah *${command}* link mediafire`)
                if (!isUrl(args[1]) && !args[1].includes('mediafire.com')) return reply(mess.error.Iv)
                    axios.get(args[1]).then((res) =>{
                    const $ = cheerio.load(res.data)
                    const link = $('a#downloadButton').attr('href')
                    const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replace('                    ', '')
                    const nama = link.split('/')[5]
                    const mime = nama.split('.')[1]
                    textImg(jsonformat({ nama, mime, size, link }))
                    limitAdd(sender, limit)
                    })
                    }
                    break
               case prefix+'gdrive': case prefix+'drive': case prefix+'googledrive': case prefix+'gdrivedl': case prefix+'drivebypass': {
                if (args.length < 2) return reply(`Kirim perintah *${command}* link drive`)
                if (!isUrl(args[1]) && !args[1].includes('drive.google.com')) return reply(mess.error.Iv)
                fetchJson(`https://api.zeks.xyz/api/gdbypass?apikey=${zekskey}&url=${args[1]}`)
                    .then((res) =>{
                    textImg(`GOOGLE DRIVE BYPASS\n\nNama: ${res.data.file_name}\nLink Download: ${res.data.download_link}\nDirect Link: ${res.data.direct_download}`)
                    limitAdd(sender, limit)
                    })
                    .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
            }
            break
               case prefix+'zippyshare': case prefix+'zippydl': case prefix+'zippysharedl': case prefix+'zippydownloader': case prefix+'zipshare': {
                if (args.length < 2) return reply(`Kirim perintah *${command}* link drive`)
                if (!isUrl(args[1]) && !args[1].includes('zippyshare.com')) return reply(mess.error.Iv)
                fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${args[1]}`)
                    .then((res) =>{
                    textImg(jsonformat(res.result))
                    limitAdd(sender, limit)
                    })
                    .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
            }
            break
           case prefix+'soundcloud':
                if (args.length < 2) return reply(`Kirim perintah *${command}* link music`)
                if (!isUrl(args[1]) && !args[1].includes('soundcloud.com')) return reply(mess.error.Iv)
                fetchJson(`https://api.zeks.xyz/api/soundcloud?apikey=${zekskey}&url=${args[1]}`)
                    .then((res) =>{
                    xinz.sendFileFromUrl(from, res.result.download, '', msg)
                    limitAdd(sender, limit)
                    })
                    .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
            
            break
           case prefix+'twt': case prefix+'twitterdl': case prefix+'twitter':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}twitter* link twt`)
                if (!isUrl(args[1]) && !args[1].includes('twitter.com')) return reply(mess.error.Iv)
                    reply(mess.wait)
                    fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${lolkey}&url=${args[1]}`)
                    .then((res) =>{
                    xinz.sendFileFromUrl(from, res.result[1].link, res.title, msg)
                    limitAdd(sender, limit)
                    })
                    .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
            }
            break
            case prefix+'play':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length === 1) return reply(`Kirim perintah *${command} query*`)
                try {
                    reply(mess.wait)
                    yts(q)
                    .then(async (res) =>{
                    let qqppp = [{
                        "buttonId": `${prefix}ytmpp3 ${res.videos[0].url}`,
                        "buttonText": {
                            "displayText": "AUDIO"
                            },
                        "type": "RESPONSE"
                        },{
                    "buttonId": `${prefix}ytmpp4 ${res.videos[0].url}`,
                    "buttonText": {
                        "displayText": "VIDEO"
                    },
                    "type": "RESPONSE"
                }]
                xinz.sendButtonsLoc(from, `Hai @${sender.split('@')[0]}\n\n${res.videos[0].title}\n\n${res.videos[0].description}`, `video or audio?`, qqppp, await getBuffer('https://img.youtube.com/vi/' + res.videos[0].videoId + '/sddefault.jpg'), [sender])
                    limitAdd(sender, limit)
                })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    xinz.sendMess(ownerNumber[0], 'PlayMp3 Error : ' + err)
                    console.log(color('[PlayMp3]', 'red'), err)
                    reply(mess.error.api)
                }
                break
            case prefix+'playmp3':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length === 1) return reply(`Kirim perintah *${prefix}play query*`)
                try {
                    reply(mess.wait)
                    let yut = await yts(q)
                    yta(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 30000) return xinz.sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
                        const captionis = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            xinz.sendFileFromUrl(from, thumb, captionis, msg)
                            xinz.sendFileFromUrl(from, dl_link, '', msg)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    xinz.sendMess(ownerNumber[0], 'PlayMp3 Error : ' + err)
                    console.log(color('[PlayMp3]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'igstory':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command}* _query_`)
                reply(mess.wait)
                fetchJson(`https://api.justaqul.xyz/igstory?username=${args[1]}&apikey=${aqulzkey}`)
                    .then((res) =>{
                        let list = []
                        let startnum = 1
                        for (let i = 0; i < res.result.length; i++){
                        let yy = {title: 'Story ke-' + startnum++,
                        rows: [
                           {
                            title: `Type : ${res.result[i].type}`,
                            rowId: `${prefix}sendfile ${res.result[i].url}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    xinz.sendList(from, `List Stories`, `List Stories yg tersedia di username "${args[1]}" `, `Diurutkan Berdasarkan Tanggal Upload`,`Pilih Disini`, list, msg)
                    })
                   .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'hinttt':
                await textImg(monospace(q))
                break
            case prefix+'sendfile':
                await xinz.sendFileFromUrl(from, args[1], '', msg)
                break
            case prefix+'cocofun':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}cocofun* link`)
                if (!isUrl(args[1]) && !args[1].includes('coco.fun')) return reply(mess.error.Iv)
                fetchJson(`https://api.lolhuman.xyz/api/cocofun?apikey=${lolkey}&url=${args[1]}`)
                .then((res) =>{
                let qqpp = [{
                    "buttonId": `${prefix}sendfile ${res.result.withwm}`,
                    "buttonText": {
                        "displayText": "WITH WM"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}sendfile ${res.result.nowm}`,
                    "buttonText": {
                        "displayText": "NOWM"
                    },
                    "type": "RESPONSE"
                }]
                xinz.sendButtons(from, `Hai Kak @${sender.split('@')[0]}`, `Cocofun Downloader`, `Mau no wm atau ngga?`, qqpp, false, null, [sender])
                 })
                .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'smule':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}smule* link`)
                if (!isUrl(args[1]) && !args[1].includes('smule.com')) return reply(mess.error.Iv)
                fetchJson(`https://api.lolhuman.xyz/api/smule?apikey=${lolkey}&url=${args[1]}`)
                .then((res) =>{
                let qqpp = [{
                    "buttonId": `${prefix}sendfile ${res.result.audio}`,
                    "buttonText": {
                        "displayText": "AUDIO"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}sendfile ${res.result.video}`,
                    "buttonText": {
                        "displayText": "VIDEO"
                    },
                    "type": "RESPONSE"
                }]
                xinz.sendButtons(from, `Hai Kak @${sender.split('@')[0]}`, `Smule Downloader`, `Mau ekstensi apa?`, qqpp, false, null, [sender])
                 })
                .catch((err) => {
                            xinz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                break
            case prefix+'ig': case prefix+'igdl': case prefix+'instagram':{
            if (args.length < 2) return reply(`Kirim perintah *${prefix}fb* url`)
                if (!isUrl(args[1]) && !args[1].includes('facebook.com')) return reply(mess.error.Iv)
                reply(mess.wait)
            var { igDownloader } = require('./lib/igdown')
            res = await igDownloader(args[1])
            console.log(res)
            xinz.sendFileFromUrl(from,`${res.result.link}`,`Created Ica Bot`)
 
                .catch((err) => {
                    xinz.sendMess(ownerNumber[0], 'IG Download Error : ' + err)
                    console.log(color('[IG Download]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
            case prefix+'fb':
            case prefix+'fbdl':
            case prefix+'facebook':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}fb* url`)
                if (!isUrl(args[1]) && !args[1].includes('facebook.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                fbdl(args[1])
                .then((res) => {
                    xinz.sendFileFromUrl(from, res.result.links[0].url)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    xinz.sendMess(ownerNumber[0], 'FB Error : ' + err)
                    console.log(color('[FB]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
           case prefix+'tiktokmusik': case prefix+'tiktokmusic':
                    if (!q) return reply(`Cara Penggunaan: \n${command} _link_`)
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    reply(mess.wait)
                    xinz.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${args[1]}`, '', msg).catch(() => reply(mess.error.api))
                    break
            case prefix+'tiktok': case prefix+'tik': case prefix+'tiktokwm': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} _link tiktok_`)
                if (!isUrl(args[1]) && !args[1].includes('tiktok.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                tiktokdl(args[1])
                .then(async (res) => {
                    let be = await xinz.prepareMessage(from, await getBuffer(res.result.watermark), video)
                    let qweriio = be.message["ephemeralMessage"] ? be.message.ephemeralMessage : be
                    let qqppp = [{
                        "buttonId": `${prefix}tiktokmusic ${args[1]}`,
                        "buttonText": {
                            "displayText": "MUSIC"
                            },
                        "type": "RESPONSE"
                        },{
                    "buttonId": `${prefix}tiktoknowm ${args[1]}`,
                    "buttonText": {
                        "displayText": "NOWM"
                    },
                    "type": "RESPONSE"
                }]
                xinz.sendButtonsVideo(from, `Hai Kak @${sender.split('@')[0]}, videonya udah jadi ni, kalo mau versi ekstensi lain, pilih dibawah ya`, `Mau ganti ke versi Music atau Nowm? Pilih dibawah`, qqppp, msg, [sender], qweriio.message.videoMessage)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    xinz.sendMess(ownerNumber[0], 'Tiktok Error : ' + err)
                    console.log(color('[Tiktok]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
            case prefix+'video': case prefix+'videos': case prefix+'vidio': case prefix+'vidios':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length < 2) return reply(`Kirim perintah *${command}* _query_`)
                reply(mess.wait)
                yts(q)
                .then((res) => {
                    let yt = res.videos
                        let list = []
                        let startnum = 1
                        for (var x of yt) {
                        let yy = { title: 'Data ke-'+ startnum++,
                        rows: [
                           {
                            title: `${x.title}`,
                            description: `Viewers: ${x.views}\nDuration: ${x.timestamp}\nUpload: ${x.ago}\nUrl: ${x.url}`,
                            rowId: `${prefix}ytmp4 ${x.url}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    xinz.sendList(from, `Video Search`, `Pilih disini, Hasil Pencarian "${q}" `,`Hanya untuk Premium User`, `Pilih Disini`, list, msg)
                })
                .catch((err) => {
                    xinz.sendMess(ownerNumber[0], 'YT SEARCH Error : ' + err)
                    console.log(color('[YT SEARCH]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
            case prefix+'music': case prefix+'musik':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length < 2) return reply(`Kirim perintah *${command}* _query_`)
                reply(mess.wait)
                yts(q)
                .then((res) => {
                    let yt = res.videos
                        let list = []
                        let startnum = 1
                        for (var x of yt) {
                        let yy = { title: 'Data ke-'+ startnum++,
                        rows: [
                           {
                            title: `${x.title}`,
                            description: `Viewers: ${x.views}\nDuration: ${x.timestamp}\nUpload: ${x.ago}\nUrl: ${x.url}`,
                            rowId: `${prefix}ytmp3 ${x.url}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    xinz.sendList(from, `Music Search`, `Pilih disini, Hasil Pencarian "${q}"`, `Hanya untuk Premium User`, `Pilih Disini`, list, msg)
                })
                .catch((err) => {
                    xinz.sendMess(ownerNumber[0], 'YT SEARCH Error : ' + err)
                    console.log(color('[YT SEARCH]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
            case prefix+'yts':
            case prefix+'ytsearch':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ytsearch* _query_`)
                reply(mess.wait)
                yts(q)
                .then((res) => {
                    let yt = res.videos
                    let txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
*Hasil Pencarian : ${q}*\n`
                    for (let i = 0; i < 10; i++){
                        txt += `\n─────────────────\n\n\`\`\`▢ Judul : ${yt[i].title}\n\`\`\`▢ ID : ${yt[i].videoId}\n\`\`\`▢ Upload : ${yt[i].ago}\n\`\`\`▢ Ditonton : ${yt[i].views}\n\`\`\`▢ Duration : ${yt[i].timestamp}\n\`\`\`▢ URL : ${yt[i].url}\n`
                    }
                    xinz.sendFileFromUrl(from, yt[0].image, txt, msg)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    xinz.sendMess(ownerNumber[0], 'YT SEARCH Error : ' + err)
                    console.log(color('[YT SEARCH]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break


//------------------< Stalker >-------------------
            case prefix+'igstalk': case prefix+'stalkig':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}igstalk* _username_`)
                reply(mess.wait)
                getUser(args[1].replace('@', ''))
                .then((res) => {
                    let { username, biography, fullName, subscribersCount, subscribtions, highlightCount, isBusinessAccount, isPrivate, isVerified, profilePicHD, postsCount } = res
                    let caption = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${username}\`\`\`
\`\`\`▢ Fullname : ${fullName}\`\`\`
\`\`\`▢ Followers : ${subscribersCount}\`\`\`
\`\`\`▢ Following : ${subscribtions}\`\`\`
\`\`\`▢ Post Count : ${postsCount}\`\`\`
\`\`\`▢ HighlightCount : ${highlightCount}\`\`\`
\`\`\`▢ PrivateAccount : ${isPrivate ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ VerifiedAccount : ${isVerified ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ BusinessAccount : ${isBusinessAccount ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ Biography :\`\`\` \n${biography}`
                    xinz.sendFileFromUrl(from, profilePicHD, caption, msg)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    xinz.sendMess(ownerNumber[0], 'IG Stalk Error : ' + err)
                    console.log(color('[IG Stalk]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
            case prefix+'tiktokstalk': case prefix+'ttstalk': case prefix+'pptiktok':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${command}* _username_`)
                reply(mess.wait)
                Zhr.Sosmed.TiktokStalk(args[1].replace('@', ''))
                .then((res) => {
                    let { user, stats } = res.Results
                    let caption = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${user.uniqueId}\`\`\`
\`\`\`▢ NickName : ${user.nickname}\`\`\`
\`\`\`▢ Create Time : ${moment(user.createTime).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\`\`\`
\`\`\`▢ Followers : ${stats.followerCount}\`\`\`
\`\`\`▢ Following : ${stats.followingCount}\`\`\`
\`\`\`▢ Post Count : ${stats.videoCount}\`\`\`
\`\`\`▢ PrivateAccount : ${user.privateAccount ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ VerifiedAccount : ${user.verified ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ Like Count : ${stats.heartCount}\`\`\`
\`\`\`▢ Biography :\`\`\` \n${user.signature}`
                    xinz.sendFileFromUrl(from, user.avatarLarger, caption, msg)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    xinz.sendMess(ownerNumber[0], 'IG Stalk Error : ' + err)
                    console.log(color('[IG Stalk]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
            case prefix+'ghstalk': case prefix+'githubstalk': case prefix+'gitstalk':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                reply(mess.wait)
                axios.get(`https://api.github.com/users/${args[1]}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${login}\`\`\`
\`\`\`▢ Name : ${name}\`\`\`
\`\`\`▢ Followers : ${followers}\`\`\`
\`\`\`▢ Following : ${following}\`\`\`
\`\`\`▢ Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\`\`\`
\`\`\`▢ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\`\`\`
\`\`\`▢ Public Gists : ${public_gists}\`\`\`
\`\`\`▢ Public Repos : ${public_repos}\`\`\`
\`\`\`▢ Twitter : ${twitter_username}\`\`\`
\`\`\`▢ Email : ${email}\`\`\`
\`\`\`▢ Location : ${location}\`\`\`
\`\`\`▢ Blog : ${blog}\`\`\`
\`\`\`▢ Link : ${html_url}\`\`\`
\`\`\`▢ Bio :\`\`\`\n${bio}`
                    xinz.sendFileFromUrl(from, avatar_url, txt, msg)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    xinz.sendMess(ownerNumber[0], 'GH Stalk Error : ' + err)
                    console.log(color('[GH Stalk]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
//------------------< Sewa >-------------------
            case prefix+'sewa':
                if (!isGroup)return reply(mess.OnlyGrup)
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}+sewa* add/del waktu`)
                if (args[1].toLowerCase() === 'add'){
                        _sewa.addSewaGroup(from, args[2], sewa)
                        reply(`Success`)
                } else if (args[1].toLowerCase() === 'del'){
                    sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
                fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
                } else {
                   reply(`Penggunaan :\n*${prefix}+sewa* add/del waktu`)
                }
                break
//------------------< Premium >-------------------
            case prefix+'sewabot': case prefix+'uptopremium':{
                xinz.sendMessage(from, {"title": 'SewaBot dan Premium FaxBot',"description": 'Limit Habis ? Ingin SewaBot ? atau ingin berlangganan sesuatu lain seperti User Premium? Pilih Item dibawah atau klik katalog dibawah \nhttps://wa.me/c/6285757309004',"footerText":'Langsung Cus PC Owner Ya',"listType": "PRODUCT_LIST","productListInfo":{"businessOwnerJid": "6285757309004@s.whatsapp.net","headerImage": {"jpegThumbnail": await getBuffer(qriss),"productId": "4985843291495715"}, "productSections": [{ title: 'Sewa FaxBot',products: [{ productId: '4985843291495715' }]},{ title: 'Premium FaxBot',products: [{ productId: '4822084287860527' }]},{ title: 'Sewa dan Premium FaxBot',products: [{ productId: '4425532244166170' }]},{ title: 'Jadi Owner Bot',products: [{ productId: '5075458155895481' }]}]}}, MessageType.listMessage, { quoted: msg })
            }
                break
            case prefix+'reset':{
                if (!isOwner) return reply(mess.OnlyOwner)
                    var reset = []
                     _claim = reset
                     glimit = reset
                     limit = reset
                     console.log('Hang tight, it\'s time to reset')
                     fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                     fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
                     fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
                     textImg(ind.doneOwner())
             }
                break
            case prefix+'premium': case prefix+'prem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}premium* add/del @tag waktu\natau *${prefix}premium* add/del nomor waktu`)
                if (args[1].toLowerCase() === 'add'){
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    _prem.addPremiumUser(mentioned[0], args[3], premium)
                    }
                    let timez = ms(toMS(args[3]))
                    xinz.sendMess(mentioned[0], `Anda telah ditambahkan oleh owner sebagai salah satu user premium bot, Sisa aktif premium anda adalah ${timez.days} Hari ${timez.hours} Jam ${timez.minutes} Menit`)
                    reply('Sukses')
                } else {
                    _prem.addPremiumUser(args[2] + '@s.whatsapp.net', args[3], premium)
                    let timez = ms(toMS(args[3]))
                    xinz.sendMess(args[2] + '@s.whatsapp.net', `Anda telah ditambahkan oleh owner sebagai salah satu user premium bot, Sisa aktif premium anda adalah ${timez.days} day(s) ${timez.hours} hour(s) ${timez.minutes} minute(s)`)
                    reply('Sukses')
                }
                } else if (args[1].toLowerCase() === 'del'){
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        premium.splice(_prem.getPremiumPosition(mentioned[i], premium), 1)
                        fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                        xinz.sendMess(mentioned[i], `Anda telah dihapus dari daftar premium oleh owner, merasa Hal ini janggal? silahkan Chat owner`)
                    }
                    reply('Sukses')
                } else {
                    premium.splice(_prem.getPremiumPosition(args[2] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                        xinz.sendMess(args[2] + '@s.whatsapp.net', `Anda telah dihapus dari daftar premium oleh owner, merasa Hal ini janggal? silahkan Chat owner`)
                }
                } else {
                reply(`Penggunaan :\n*${prefix}premium* add/del @tag waktu\natau *${prefix}premium* add/del nomor waktu`)
                }
                break
            case prefix+'addcmd': case prefix+'setcmd':{
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}uptopremium* untuk membeli premium`)
                  if (isQuotedSticker) {
                  if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = quotedMsg.stickerMessage.fileSha256.toString('hex')
                  addCmd(kodenya, q)
                  textImg("Done Bwang")
                  } else {
                    reply('tag stickenya')
                  }
                 }
                 break
            case prefix+'delcmd':{
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}uptopremium* untuk membeli premium`)
                if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
                  var kodenya = quotedMsg.stickerMessage.fileSha256.toString('hex')
                _scommand.splice(getCommandPosition(kodenya), 1)
                fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
                  textImg("Done Bwang")
                }
                break
            case prefix+'premiumcheck':
            case prefix+'cekpremium':
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}uptopremium* untuk membeli premium`)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                break
            case prefix+'sewacheck':
            case prefix+'ceksewa': {
                if (!isGroup)return reply(mess.OnlyGrup)
                if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
                let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} menit`
                reply(premiumnya)
                }
                break
            case prefix+'listprem':
            case prefix+'premiumlist':{
                let txt = `List Premium Ica Bot\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium){
                    men.push(i.id)
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*ID :* @${i.id.split("@")[0]}\n*Expire :* ${cekvip.days} Jam ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
                }
                mentions(txt, men, true)
                }
                break
            case prefix+'sewalist': case prefix+'listsewa':
                let txt = `List Sewa\nJumlah : ${sewa.length}\n\n`
                for (let i of sewa){
                    let cekvipp = ms(i.expired - Date.now())
                    txt += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
                }
                reply(txt)
                break
//------------------< BAN >-------------------
            case prefix+'ban':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args[1].toLowerCase() === 'add'){
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        addBanned(mentioned[0], args[3], ban)
                    }
                    reply('Sukses')
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber[0]) return reply(`Tidak bisa ban Owner`)
                    addBanned(quotedMsg.sender, args[2], ban)
                    reply(`Sukses ban target`)
                } else if (!isNaN(args[2])) {
                    addBanned(args[2] + '@s.whatsapp.net', args[3], ban)
                    reply('Sukses')
                 }
                } else if (args[1].toLowerCase() === 'del'){
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        unBanned(mentioned[i], ban)
                    }
                    reply('Sukses')
                }if (isQuotedMsg) {
                    unBanned(quotedMsg.sender, ban)
                    reply(`Sukses unban target`) 
                } else if (!isNaN(args[2])) {
                    unBanned(args[2] + '@s.whatsapp.net', ban)
                    reply('Sukses')
                }
                } else {
                    reply(`Kirim perintah ${prefix}ban add/del (@tag atau nomor atau reply pesan orang yang ingin di ban) masa_ban`)
                }
                break
            case prefix+'listblock':
            case prefix+'listban':
                let txtx = `List Banned\nJumlah : ${ban.length}\n\n`
                let menx = [];
                for (let i of ban){
                    menx.push(i.id)
                    txtx += `*ID :* @${i.id.split("@")[0]}\n`
                    if (i.expired === 'PERMANENT'){
                        let cekvip = 'PERMANENT'
                        txtx += `*Expire :* PERMANENT\n\n`
                    } else {
                        let cekvip = ms(i.expired - Date.now())
                        txtx += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                    }
                 }
                 txtx += '\n\nThis is list of blocked number :\n\n'
					for (let block of blocked) {
                        menx.push(block)
						txtx += `~> @${block.split('@')[0]}\n`
					}
					txtx += `Total : ${blocked.length}\n\n`
                mentions(txtx, menx, true)
                break
            case prefix+'unblock':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${command} nomer`)
                await xinz.blockUser(args[1] + '@s.whatsapp.net', "remove")
                break
            case prefix+'bancmd':
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (args.length < 2) return reply(`Kirim perintah *${command} command`)
                if (!args[1].startsWith(prefix)) return reply(`Kirim perintah *${command} command`)
                bancmd.push(args[1].split(prefix)[1] + from)
			    fs.writeFileSync('./database/bancmd.json', JSON.stringify(bancmd))
			    reply('sukses')
                break
            case prefix+'unbancmd':{
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (args.length < 2) return reply(`Kirim perintah *${command} command`)
                if (!args[1].startsWith(prefix)) return reply(`Kirim perintah *${command} command`)
                let anu = bancmd.indexOf(args[1].split(prefix)[1] + from)
                bancmd.splice(anu, 1)
                fs.writeFileSync('./database/bancmd.json', JSON.stringify(bancmd))
			    reply('sukses')
                }
                break
//------------------< Game >-------------------
            case prefix+'lb': case prefix+'leaderboard':{
                    if (isGroup && !isLevelingOn) return reply(ind.levelingNotOn())
                let top = '*──「 LEADERBOARD LEVEL 」──*\n\n'
                let arrTop = []
                     var nom = 0
                     _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                    for (let i = 0; i < 10; i++) {
                        var roless = 'Copper V'
                        if (_level[i].level <= 5) {
                            roless = 'Copper IV'
                        } else if (_level[i].level <= 10) {
                            roless = 'Copper III'
                        } else if (_level[i].level <= 15) {
                            roless = 'Copper II'
                        } else if (_level[i].level <= 20) {
                            roless = 'Copper I'
                        } else if (_level[i].level <= 25) {
                            roles = 'Silver V'
                        } else if (_level[i].level <= 30) {
                            roless = 'Silver IV'
                        } else if (_level[i].level <= 35) {
                            roless = 'Silver III'
                        } else if (_level[i].level <= 40) {
                            roless = 'Silver II'
                        } else if (_level[i].level <= 45) {
                            roless = 'Silver I'
                        } else if (_level[i].level <= 50) {
                            roless = 'Gold V'
                        } else if (_level[i].level <= 55) {
                            roless = 'Gold IV'
                        } else if (_level[i].level <= 60) {
                            roless = 'Gold III'
                        } else if (_level[i].level <= 65) {
                            roless = 'Gold II'
                        } else if (_level[i].level <= 70) {
                            roless = 'Gold I'
                        } else if (_level[i].level <= 75) {
                            roless = 'Platinum V'
                        } else if (_level[i].level <= 80) {
                            roless = 'Platinum IV'
                        } else if (_level[i].level <= 85) {
                            roless = 'Platinum III'
                        } else if (_level[i].level <= 90) {
                            roless = 'Platinum II'
                        } else if (_level[i].level <= 95) {
                            roless = 'Platinum I'
                        } else if (_level[i].level < 100) {
                            roless = 'Exterminator'
                        }
                     arrTop.push(_level[i].jid)
                        nom++
                        top += `◪ *${nom}. @${_level[i].jid.replace('@s.whatsapp.net', '')}*\n├❑ *XP: ${_level[i].xp}*\n├❑ *Level: ${_level[i].level}*\n└❑ *Role: ${roless}*\n\n`
                    }
                       let topp = '*── 「 TOPGLOBAL BALANCE 」 ──*\n\n'
                   balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                for (let i = 0; i < 10; i ++){
                    topp += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let toppp = '*── 「 TOPLOCAL BALANCE 」 ──*\n\n'
                let anggroup = groupMembers.map(a => a.jid)
                for (let i = 0; i < balance.length; i ++){
                    if (anggroup.includes(balance[i].id)) {
                        toppp += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                        arrTop.push(balance[i].id)
                    }
                }
                mentions(top + '\n\n' + topp + '\n\n' + toppp, arrTop, true)
            }
                break
                case prefix+'level':
                case prefix+'xp':{
                if (isGroup && !isLevelingOn) return reply(ind.levelingNotOn())
                    try {
                        var pic = await xinz.getProfilePicture(sender)
                    } catch {
                        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    }
                   var tolink = await fetchText('https://tinyurl.com/api-create.php?url=' + pic)
                    const userLevel = getLevelingLevel(sender)
                    const userXp = getLevelingXp(sender)
                    const requiredXp = 200 * (Math.pow(2, getLevelingLevel(sender)) - 1)
                     var link = `https://api.lolhuman.xyz/api/rank?apikey=${lolkey}&img=${tolink}&background=${bgbot}&username=${encodeURIComponent(pushname)}&level=${userLevel}&ranking=${roles}&currxp=${userXp}&xpneed=${requiredXp}`
                    const levelnya = `*──「 LEVEL INFO 」──*\n\n❑ *Name: @${sender.split('@')[0]}*\n❑ *XP: ${userXp} / ${requiredXp}*\n❑ *Level: ${userLevel}*\n❑ *Role: ${role}*`
                    xinz.sendImage(from, await getBuffer(link), levelnya, msg, [sender])
              }
                    break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $25 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                let ane = Number(nebal(args[1]) * 25)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, nebal(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $20 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                let ane = Number(nebal(args[1]) * 20)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                givegame(sender, nebal(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
                case prefix+'claim':
                case prefix+'klaim':
                    if (isClaimOn) return reply(ind.claimOnAlready())
                    addLevelingXp(sender, 10000)
                    let hadippp = randomNomor(1000)
                    addBalance(sender, hadippp, balance)
                    _claim.push(sender)
                    fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                    reply(ind.claimOn(hadippp))
                    break
            case prefix+'suit':
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (args.length < 2) return reply(`Penggunaan ${command} gunting/kertas/batu`)
                let suit = ["gunting", "batu", "kertas"];
                let isSuit = suit.includes(q)
                if (isSuit){
                    let suit1 = suit[Math.floor(Math.random() * (suit.length))]
                    let hadi = randomNomor(30)
                    if (q === suit[0]){
                        if (suit1 === "gunting"){
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nseri`)
                        } else if (suit1 === "batu"){
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nKamu kalah`)
                        } else {
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nKamu menang\nHadiah : ${hadi} balance`)
                            addBalance(sender, hadi, balance)
                        }
                    } else if (q === suit[1]){
                        if (suit1 === "batu"){
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nSeri`)
                        } else if (suit1 === "kertas"){
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nKamu kalah`)
                        } else {
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nKamu menang\nHadiah : ${hadi} balance`)
                            addBalance(sender, hadi, balance)
                        }
                    } else if (q === suit[2]){
                        if (suit1 === "kertas"){
                            reply('seri')
                        } else if (suit1 === "gunting"){
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nKamu kalah`)
                        } else {
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nKamu menang\nHadiah : ${hadi} balance`)
                            addBalance(sender, hadi, balance)
                        }
                    }
                    gameAdd(sender, glimit)
                } else {
                    reply(`Penggunaan ${command} gunting/kertas/batu`)
                }
                break
                case prefix+'slot':
                    if (isGroup && !isLevelingOn) return reply(ind.levelingNotOn())
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : 🍇 : 🍇']
                    const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                    const somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                    const somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                    if (somtoyy  == '🍌 : 🍌 : 🍌') {
	     	        textImg(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *5000Xp*`)
                    addLevelingXp(sender, 5000)
	     	        } else if (somtoyy == '🍒 : 🍒 : 🍒') {
	     	        textImg(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *5000Xp*`)
                    addLevelingXp(sender, 5000)
	     	        } else if (somtoyy == '🔔 : 🔔 : 🔔') {
	     	        textImg(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *5000Xp*`)
                    addLevelingXp(sender, 5000)
	     	        } else if (somtoyy == '🍐 : 🍐 : 🍐') {
	     	        textImg(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *5000Xp*`)
                    addLevelingXp(sender, 5000)
	     	        } else if (somtoyy == '🍇 : 🍇 : 🍇') {
	     	        textImg(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *5000Xp*`)
                    addLevelingXp(sender, 5000)
	     	        } else {
	     	        textImg(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *LOST @${sender.split('@')[0]}* ]\n\n Xp mu berkurang 750`)
                    addLevelingXp(sender, -750)
	     	        }
                    gameAdd(sender, glimit)
                    break
            case prefix+'dadu':
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (args.length > 2) return reply(`Penggunaan ${command} angka atau ${command} (Jika mendapat angka 6 akan mendapatkan sejumlah balance)`)
                let dadu = ["1", "2", "3", "4", "5", "6"];
                let isDadu = dadu.includes(q)
                let hadiaq = randomNomor(30)
                let rend = randomNomor(6)
                if (isDadu){
                    if (q === rend){
                    await xinz.sendSticker(from, `./media/filebot/${rend}.webp`, msg )
                    textImg(`Selamat ${pushname} tebakanmu benar dan dapat ${hadiaq} balance`)
                    addBalance(sender, hadiaq, balance)
                    gameAdd(sender, glimit)
                    } else {
                    await xinz.sendSticker(from, `./media/filebot/${rend}.webp`, msg )
                    gameAdd(sender, glimit)
                    }
                } else {
                    await xinz.sendSticker(from, `./media/filebot/${rend}.webp`, msg )
                    gameAdd(sender, glimit)
                    if (rend === "6"){
                    textImg(`Selamat ${pushname}, mendapatkan angka 6 dan dapat ${hadiaq} balance`)
                    addBalance(sender, hadiaq, balance)
                   }
                }
                break
            case prefix+'tictactoe': case prefix+'ttt': case prefix+'ttc':
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                if (mentioned.length !== 0){
						if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)
                        let h = randomNomor(100)
                        xinz.sendButtonsLoc(from, `TicTacToe Game` + '\n\n' + monospace(`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/T) untuk bermain\n\nHadiah : ${h} balance`),`Terima atau Nyerah`, [{"buttonId": `y`,"buttonText": {"displayText": "Y (TERIMA)"},"type": "RESPONSE"},{"buttonId": `t`,"buttonText": {"displayText": "T (NYERAH)"},"type": "RESPONSE"}], await getBuffer('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJ74gF7f8YXtclaaQqGaUtMb1WaLXf0vFuw&usqp=CAU'), [sender, mentioned[0]])
                        tictactoe.push({
                            id: from,
                            status: null,
                            hadiah: h,
                            penantang: sender,
                            ditantang: mentioned[0],
                            TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                        })
                        gameAdd(sender, glimit)
                } else {
                    reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                }
                break
            case prefix+'delttt':
            case prefix+'delttc':
                if (!isGroup)return reply(mess.OnlyGrup)
                if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
                tictactoe.splice(getPosTic(from, tictactoe), 1)
                reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                break
            case prefix+'tebakgambar':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolkey}`)
                let anih = anu.result.answer.toLowerCase()
                game.addgambar(from, anih, gamewaktu, tebakgambar)
                const petunjuk = anu.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                let be = await xinz.prepareMessage(from, await getBuffer(anu.result.image), image)
                let qweriio = be.message["ephemeralMessage"] ? be.message.ephemeralMessage : be
                xinz.sendButtons(from, `Tebak Gambar`, monospace(`Silahkan jawab soal berikut ini\n\nWaktu : ${gamewaktu}s`), `Klik dibawah untuk petunjuk`, [{"buttonId": `${prefix}hinttt ${petunjuk}`,"buttonText": {"displayText": "HINT"},"type": "RESPONSE"}], true, null, null, qweriio.message.imageMessage)
                gameAdd(sender, glimit)
            }
                break
            case prefix+'kuis':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isKuis(from, kuis)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/jenaka?apikey=${lolkey}`)
                let anih = anu.result.answer.toLowerCase()
                game.addkuis(from, anih, gamewaktu, kuis)
                const petunjuk = anu.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                xinz.sendButtons(from, `KUIS GAME`, monospace(`${anu.result.question}\n\nWaktu : ${gamewaktu}s`), `Klik dibawah untuk petunjuk`, [{"buttonId": `${prefix}hinttt ${petunjuk}`,"buttonText": {"displayText": "HINT"},"type": "RESPONSE"}], false, null)
                gameAdd(sender, glimit)
            }
                break
            case prefix+'kimiakuis':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isKimiaKuis(from, kimiakuis)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${lolkey}`)
                let anih = anu.result.lambang
                game.addkimiakuis(from, anih, gamewaktu, kimiakuis)
                textImg(monospace(`Tebak Sebutan Atau Lambang Kimia dari Unsur ${anu.result.nama}\n\nPetunjuk : -\nWaktu : ${gamewaktu}s`))
                gameAdd(sender, glimit)
            }
                break
            case prefix+'siapaaku':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isSiapaAku(from, siapaaku)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolkey}`)
                let anih = anu.result.answer.toLowerCase()
                game.addsiapaaku(from, anih, gamewaktu, siapaaku)
                const petunjuk = anu.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                xinz.sendButtons(from, `SIAPA AKU`, monospace(`${anu.result.question}\n\nWaktu : ${gamewaktu}s`), `Klik dibawah untuk petunjuk`, [{"buttonId": `${prefix}hinttt ${petunjuk}`,"buttonText": {"displayText": "HINT"},"type": "RESPONSE"}], false, null)
                gameAdd(sender, glimit)
            }
                break
            case prefix+'tebaklirik':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isTebakLirik(from, tebaklirik)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolkey}`)
                let anih = anu.result.answer.toLowerCase()
                game.addtebaklirik(from, anih, gamewaktu, tebaklirik)
                const petunjuk = anu.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                xinz.sendButtons(from, `TEBAK LIRIK`, monospace(`${anu.result.question}\n\nWaktu : ${gamewaktu}s`), `Klik dibawah untuk petunjuk`, [{"buttonId": `${prefix}hinttt ${petunjuk}`,"buttonText": {"displayText": "HINT"},"type": "RESPONSE"}], false, null)
                gameAdd(sender, glimit)
            }
                break
            case prefix+'mathkuis':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isMathKuis(from, mathkuis)) return reply(`Masih ada soal yang belum di selesaikan`)
                var angka1 = Math.ceil(Math.random() * 1000)
                var angka2 = Math.ceil(Math.random() * 1000)
                var format = ['/','*','+','-']
                var rendom = format[Math.floor(Math.random() * format.length)]
                var soal = angka1 + rendom + angka2
                let anih = `${mathjs.evaluate(soal)}`
                game.addmathkuis(from, anih, gamewaktu, mathkuis)
                const petunjuk = anih.replace(/[1|3|5|7|9]/gi, '_')
                xinz.sendButtons(from, `MATH GAME`, monospace(`${angka1} ${rendom.replace('/', ':').replace('*', '×')} ${angka2}\n\nWaktu : ${gamewaktu}s`), `Klik dibawah untuk petunjuk`, [{"buttonId": `${prefix}hinttt ${petunjuk}`,"buttonText": {"displayText": "HINT"},"type": "RESPONSE"}], false, null)
                gameAdd(sender, glimit)
            }
                break
            case prefix+'tebakbendera':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/bendera?apikey=${lolkey}`)
                let anih = anu.result.name.toLowerCase()
                game.addkuis(from, anih, gamewaktu, tebakbendera)
                const petunjuk = anu.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                xinz.sendButtons(from, `TEBAK BENDERA`, monospace(`Nama Negara Dari Simbol ${anu.result.flag}\n\nWaktu : ${gamewaktu}s`), `Klik dibawah untuk petunjuk`, [{"buttonId": `${prefix}hinttt ${petunjuk}`,"buttonText": {"displayText": "HINT"},"type": "RESPONSE"}], false, null)
                gameAdd(sender, glimit)
            }
                break
            case prefix+'family100':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolkey}`)
                reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
                let anoh = anu.data.result.aswer
                let rgfds = []
                for (let i of anoh){
                    let fefs = i.split('/') ? i.split('/')[0] : i
                    let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
                    let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                    rgfds.push(axsf.toLowerCase())
                }
                game.addfam(from, rgfds, gamewaktu, family100)
                gameAdd(sender, glimit)
            }
                break
//------------------< Multi Session >-------------------
            case prefix+'listbot':{
                let arrayBot = [];
                let tmx = `*──「 LIST BOT ICA 」──*\n\n`
                tmx += `◪ Nomor : @${global.xinz.user.jid.split("@")[0]} UTAMA\n`
                tmx += `├❑ Prefix : ${global.xinz.multi ? 'MULTI PREFIX' : global.xinz.nopref ? 'NO PREFIX' : global.xinz.prefa}\n`
                tmx += `└❑ Status : ${global.xinz.mode.toUpperCase()}\n\n`
                arrayBot.push(global.xinz.user.jid)
                for (let i of conns){
                    tmx += `◪ *Nomor* : @${i.user.jid.split("@")[0]}\n`
                    tmx += `├❑ *Prefix* : ${i.multi ? 'MULTI PREFIX' : i.nopref ? 'NO PREFIX' : i.prefa}\n`
                    tmx += `└❑ *Status* : ${i.mode.toUpperCase()}\n\n`
                    arrayBot.push(i.user.jid)
                }
                tmx += `Total : ${conns.length + 1}`
                mentions(tmx, arrayBot, true)
            }
                break
            case prefix+'stopjadibot':{
                if (global.xinz.user.jid == xinz.user.jid) xinz.reply(from, 'Kenapa nggk langsung ke terminalnya?', msg)
                else {
                    await xinz.reply(from, 'Bye...', msg).then(() => xinz.close())
                }
            }
                break
            case prefix+'getcode':{
                if (global.xinz.user.jid == xinz.user.jid) xinz.reply(from, 'Command ini hanya untuk yang jadi bot', msg)
                else global.xinz.reply(xinz.user.jid, `${prefix}jadibot ${Buffer.from(JSON.stringify(xinz.base64EncodedAuthInfo())).toString('base64')}`, msg)
            }
                break
            case prefix+'jadibot':{
            if (!isPremium) return reply(mess.OnlyPrem)
                var lock = false // bikin true kalo mau lock,nanti yg bisa make cuman owner
                var maxi = 3 // kalo mau yg jadibot lebih atau kuranh dari lima,tinggal edit
               const _0x435ddb=_0x37d6;function _0x37d6(_0x2dcb28,_0x42697f){const _0x491738=_0x4917();return _0x37d6=function(_0x37d666,_0x298c11){_0x37d666=_0x37d666-0x17c;let _0x4dd703=_0x491738[_0x37d666];return _0x4dd703;},_0x37d6(_0x2dcb28,_0x42697f);}(function(_0x26f00e,_0x87a977){const _0x34e944=_0x37d6,_0x40f02c=_0x26f00e();while(!![]){try{const _0x1b5f26=parseInt(_0x34e944(0x1d4))/0x1*(-parseInt(_0x34e944(0x1a3))/0x2)+parseInt(_0x34e944(0x181))/0x3*(-parseInt(_0x34e944(0x193))/0x4)+-parseInt(_0x34e944(0x1cd))/0x5*(parseInt(_0x34e944(0x1c8))/0x6)+-parseInt(_0x34e944(0x1d7))/0x7+parseInt(_0x34e944(0x1c7))/0x8+-parseInt(_0x34e944(0x19f))/0x9+parseInt(_0x34e944(0x199))/0xa*(parseInt(_0x34e944(0x19d))/0xb);if(_0x1b5f26===_0x87a977)break;else _0x40f02c['push'](_0x40f02c['shift']());}catch(_0x1c8f27){_0x40f02c['push'](_0x40f02c['shift']());}}}(_0x4917,0x319f0));if(lock&&!isOwner)return reply(_0x435ddb(0x17f));let parent=args[0x1]&&args[0x1]==_0x435ddb(0x1ad)?xinz:global[_0x435ddb(0x1b4)],auth=![];function _0x4917(){const _0x107726=['from','writeFileSync','stringify','push','jid','xinz','exports','nopref','Scan\x20QR\x20ini\x20untuk\x20jadi\x20bot\x20sementara\x0a\x0a1.\x20Klik\x20titik\x20tiga\x20di\x20pojok\x20kanan\x20atas\x0a2.\x20Ketuk\x20WhatsApp\x20Web\x0a3.\x20Scan\x20QR\x20ini\x20\x0aQR\x20Expired\x20dalam\x2020\x20detik','sendImage','group-participants-update','mengetik','message-delete','lastKnownPresence','clearMessage','Berhasil\x20tersambung\x20dengan\x20WhatsApp\x20-\x20mu.\x0a','splice','chat-update','key','connect','text','composing','replace','isQuotedMsg','1861440kizzGA','123108onvPRE','message','recording','s.whatsapp.net','messageStubType','90NFGBhc','regenerateQRIntervalMs','blocklist','split','loadAuthInfo','type','CB:action,,call','7IekaXb','c.us','status@broadcast','646457yRfnqB','user','CB:Blocklist','value','base64','Command\x20Sedang\x20ditutup\x20oleh\x20Owner','baterai','3aGPRKv','getAfkPosition','prefa','level','Koneksi\x20terputus...','Maaf\x20maksimal\x20bot\x20adalah\x205,\x20coba\x20lain\x20kali','?text=#jadibot','state','close','Maaf\x20bot\x20tidak\x20menerima\x20call','hasNewMessage','presences','deleteMessage','parse','\x20berhenti\x20afk,\x20dia\x20sedang\x20','blockUser','all','then','894492NPvepp','merekam','conns','live','warn','reply','10004680MBwjzQ','extendedText','orderMessage','mode','11ZakcoQ','length','646245LGZFqY','add','toString','remoteJid','77942MYNVPg','error','logger','cas','sendMessage','anjing','./database/afk.json','indexOf','base64EncodedAuthInfo','getcode*\x20untuk\x20mendapatkan\x20kode\x20yang\x20akurat','plz','public'];_0x4917=function(){return _0x107726;};return _0x4917();}if(global[_0x435ddb(0x195)][_0x435ddb(0x19e)]>=maxi-0x1)return reply(_0x435ddb(0x186));if(args[0x0]&&args[0x0]==_0x435ddb(0x1ad)||global['xinz'][_0x435ddb(0x1d8)][_0x435ddb(0x1b3)]==xinz[_0x435ddb(0x1d8)][_0x435ddb(0x1b3)]){let id=global['conns'][_0x435ddb(0x19e)],blocked=[],conn=new global['xinz']['constructor']();if(args[0x1]&&args[0x1]['length']>0xc8){let json=Buffer[_0x435ddb(0x1af)](args[0x1],'base64')[_0x435ddb(0x1a1)]('utf-8'),obj=JSON[_0x435ddb(0x18e)](json);await conn[_0x435ddb(0x1d1)](obj),auth=!![];}conn[_0x435ddb(0x19c)]=_0x435ddb(0x1ae),conn['multi']=!![],conn[_0x435ddb(0x1b6)]=![],conn[_0x435ddb(0x183)]=_0x435ddb(0x1a8),conn['baterai']={'baterai':0x0,'cas':![]},conn[_0x435ddb(0x1a5)][_0x435ddb(0x184)]=_0x435ddb(0x197),conn['on']('qr',async _0x1339bb=>{qrcode['toDataURL'](_0x1339bb,{'scale':0x8},async(_0x30f317,_0x19ae13)=>{const _0x47ed79=_0x37d6,_0x58627d=_0x19ae13[_0x47ed79(0x1c5)](/^data:image\/png;base64,/,''),_0x3d85f5=new Buffer['from'](_0x58627d,_0x47ed79(0x17e));let _0x1cd776=await parent[_0x47ed79(0x1b8)](from,_0x3d85f5,_0x47ed79(0x1b7),msg);setTimeout(()=>{const _0x5879a6=_0x47ed79;parent[_0x5879a6(0x18d)](from,_0x1cd776[_0x5879a6(0x1c1)]);},0x7530);});}),conn[_0x435ddb(0x1c2)]()[_0x435ddb(0x192)](async({user:_0x4341f2})=>{const _0x44a2b9=_0x435ddb;parent[_0x44a2b9(0x198)](from,_0x44a2b9(0x1be)+JSON[_0x44a2b9(0x1b1)](_0x4341f2,null,0x2),msg);if(auth)return;await parent[_0x44a2b9(0x1a7)](_0x4341f2[_0x44a2b9(0x1b3)],'Kamu\x20bisa\x20login\x20tanpa\x20qr\x20dengan\x20pesan\x20dibawah\x20ini.\x20untuk\x20mendapatkan\x20kode\x20lengkapnya,\x20silahkan\x20kirim\x20*'+prefix+_0x44a2b9(0x1ac),MessageType[_0x44a2b9(0x19a)]),parent[_0x44a2b9(0x1a7)](_0x4341f2[_0x44a2b9(0x1b3)],command+'\x20'+Buffer[_0x44a2b9(0x1af)](JSON[_0x44a2b9(0x1b1)](conn[_0x44a2b9(0x1ab)]()))[_0x44a2b9(0x1a1)](_0x44a2b9(0x17e)),MessageType['extendedText']);}),conn['on'](_0x435ddb(0x1c0),async _0x36ad76=>{const _0x44423e=_0x435ddb;if(_0x36ad76[_0x44423e(0x18c)])for(let _0x14210f in _0x36ad76['presences']){(_0x36ad76[_0x44423e(0x18c)][_0x14210f][_0x44423e(0x1bc)]===_0x44423e(0x1c4)||_0x36ad76[_0x44423e(0x18c)][_0x14210f][_0x44423e(0x1bc)]===_0x44423e(0x1ca))&&(afk['checkAfkUser'](_0x14210f,_afk)&&(_afk[_0x44423e(0x1bf)](afk[_0x44423e(0x182)](_0x14210f,_afk),0x1),fs[_0x44423e(0x1b0)](_0x44423e(0x1a9),JSON[_0x44423e(0x1b1)](_afk)),conn[_0x44423e(0x1a7)](_0x36ad76['jid'],'@'+_0x14210f[_0x44423e(0x1d0)]('@')[0x0]+_0x44423e(0x18f)+(_0x36ad76[_0x44423e(0x18c)][_0x14210f]['lastKnownPresence']==='composing'?_0x44423e(0x1ba):_0x44423e(0x194)),MessageType['extendedText'],{'contextInfo':{'mentionedJid':[_0x14210f]}})));}if(!_0x36ad76[_0x44423e(0x18b)])return;_0x36ad76=_0x36ad76['messages'][_0x44423e(0x191)]()[0x0];if(!_0x36ad76[_0x44423e(0x1c9)])return;if(_0x36ad76['key']&&_0x36ad76[_0x44423e(0x1c1)][_0x44423e(0x1a2)]==_0x44423e(0x1d6))return;_0x36ad76[_0x44423e(0x1cc)]&&(_0x36ad76[_0x44423e(0x1cc)]==0x44&&conn[_0x44423e(0x1bd)](_0x36ad76['key']));let _0x5bf8f6=serialize(conn,_0x36ad76),_0x3e6683=serializeM(conn,_0x36ad76);_0x5bf8f6[_0x44423e(0x1c9)]&&_0x5bf8f6['isBaileys']&&_0x5bf8f6[_0x44423e(0x1c6)]&&_0x5bf8f6['quotedMsg'][_0x44423e(0x1d2)]===_0x44423e(0x19b)&&conn[_0x44423e(0x1bd)](_0x5bf8f6['key']),module[_0x44423e(0x1b5)](conn,_0x5bf8f6,_0x3e6683,blocked,_afk,welcome);}),conn['on'](_0x435ddb(0x1bb),async _0x5108d2=>{require('./antidelete')(conn,_0x5108d2);}),conn['on'](_0x435ddb(0x1b9),async _0x326871=>{require('./group')(conn,_0x326871,welcome);}),conn['on']('CB:action,,battery',_0x33568d=>{const _0x385534=_0x435ddb,_0x30c9af=_0x33568d[0x2][0x0][0x1][_0x385534(0x17d)],_0x4fdc8d=_0x33568d[0x2][0x0][0x1][_0x385534(0x196)];conn['baterai']['baterai']=_0x30c9af,conn[_0x385534(0x180)][_0x385534(0x1a6)]=_0x4fdc8d;}),conn['on'](_0x435ddb(0x17c),_0x4076ee=>{const _0x58df57=_0x435ddb;if(blocked[_0x58df57(0x19e)]>0x2)return;for(let _0x4a6aa5 of _0x4076ee[0x1][_0x58df57(0x1cf)]){blocked[_0x58df57(0x1b2)](_0x4a6aa5['replace'](_0x58df57(0x1d5),_0x58df57(0x1cb)));}}),conn['on'](_0x435ddb(0x1d3),async _0xd63351=>{const _0x2ce667=_0x435ddb,_0x24b00d=_0xd63351[0x2][0x0][0x1][_0x2ce667(0x1af)];conn['sendMessage'](_0x24b00d,_0x2ce667(0x18a),MessageType[_0x2ce667(0x1c3)]),await conn[_0x2ce667(0x190)](_0x24b00d,_0x2ce667(0x1a0));}),conn[_0x435ddb(0x1ce)]=null,setTimeout(()=>{const _0x19ca3b=_0x435ddb;if(conn[_0x19ca3b(0x1d8)])return;conn[_0x19ca3b(0x189)]();let _0x2865d2=global[_0x19ca3b(0x195)][_0x19ca3b(0x1aa)](conn);if(_0x2865d2<0x0)return;delete global['conns'][_0x2865d2],global[_0x19ca3b(0x195)][_0x19ca3b(0x1bf)](_0x2865d2,0x1);},0xea60),conn['on'](_0x435ddb(0x189),()=>{setTimeout(async()=>{const _0x379ddd=_0x37d6;try{if(conn[_0x379ddd(0x188)]!=_0x379ddd(0x189))return;if(conn[_0x379ddd(0x1d8)]&&conn['user'][_0x379ddd(0x1b3)])parent[_0x379ddd(0x1a7)](conn[_0x379ddd(0x1d8)]['jid'],_0x379ddd(0x185),MessageType[_0x379ddd(0x19a)]);let _0x26e7a5=global[_0x379ddd(0x195)]['indexOf'](conn);if(_0x26e7a5<0x0)return;delete global[_0x379ddd(0x195)][_0x26e7a5],global[_0x379ddd(0x195)][_0x379ddd(0x1bf)](_0x26e7a5,0x1);}catch(_0xf3b1d4){conn['logger'][_0x379ddd(0x1a4)](_0xf3b1d4);}},0x7530);}),global[_0x435ddb(0x195)][_0x435ddb(0x1b2)](conn);}else reply('Tidak\x20bisa\x20membuat\x20bot\x20didalam\x20bot!\x0a\x0ahttps://wa.me/'+global[_0x435ddb(0x1b4)][_0x435ddb(0x1d8)][_0x435ddb(0x1b3)][_0x435ddb(0x1d0)]`@`[0x0]+_0x435ddb(0x187));
            }
                break
//------------------< Owner >-------------------
            case prefix+'sendbug':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan ${command} idgroup`)
                xinz.sendBugGC(args[1], WA_DEFAULT_EPHEMERAL)
                xinz.sendBugGC(args[1], 0)
                xinz.sendBugGC(args[1], 999)
                textImg('done owner')
                break
            case prefix+'self':{
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                xinz.mode = 'self'
                textImg('Berhasil berubah ke mode self')
            }
                break
            case prefix+'publik': case prefix+'public':{
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                xinz.mode = 'public'
                textImg('Berhasil berubah ke mode public')
            }
                break
            case prefix+'clearall':{
                if (!isOwner) return reply(mess.OnlyOwner)
                let chiit = await xinz.chats.all()
                for (let i of chiit){
                    xinz.modifyChat(i.jid, 'clear', {
                        includeStarred: false
                    })
                }
                reply(`Selesai`)
            }
                break
               case prefix+'shutdown':
                    if (!isOwner) return reply(mess.OnlyOwner)
                    reply(`otsukaresama deshita ~👋`)
				    .then(() => xinz.close())
                    break
            case prefix+'setprefix':
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
                if (q === 'multi'){
                    xinz.multi = true
                    xinz.nopref = false
                    textImg(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    xinz.multi = false
                    xinz.nopref = true
                    textImg(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    xinz.multi = false
                    xinz.nopref = false
                    xinz.prefa = `${q}`
                    textImg(`Berhasil mengubah prefix ke ${q}`)
                }
                break
            case prefix+'setname':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan text`)
               await xinz.updateProfileName(q)
                    reply(`Success`)
	            break
            case prefix+'give':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`cara penggunaan : ${command} @tag/nomor jumlah_xp`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        addLevelingXp(mentioned[0], args[2])
                    }
                    reply('Sukses')
                } else {
                   addLevelingXp(args[1] + '@s.whatsapp.net', args[2])
                await reply(`Success`)
                }
	      	break
                case prefix+'setstat': case prefix+'setstats': case prefix+'setstatus':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan text`)
                await xinz.setStatus(q)
                reply(`Success`)
		    break
            case prefix+'bc':
               if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan text`)
                let chiit = await xinz.chats.all()
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    for (let i of chiit){
                        xinz.sendMessage(i.jid, media, image, {caption: q})
                    }
                    reply(`Sukses`)
                } else if (isVideo || isQuotedVideo) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    for (let i of chiit){
                        xinz.sendMessage(i.jid, media, video, {caption: q})
                    }
                    reply(`Sukses`)
                } else {
                    for (let i of chiit){
                        xinz.sendMessage(i.jid, q, text)
                    }
                    reply(`Sukses`)
                }
                break
            case prefix+'totag':{
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (!isOwner && !fromMe) return
                let arr = [];
                for (let i of groupMembers){
                    arr.push(i.jid)
                }
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    xinz.sendMessage(from, media, image, {caption: q, contextInfo: {"mentionedJid": arr}})
                } else if (isVideo || isQuotedVideo) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    xinz.sendMessage(from, media, video, {caption: q, contextInfo: {"mentionedJid": arr}})
                } else if (isQuotedSticker) {
                    let media = await xinz.downloadMediaMessage(JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
                    xinz.sendSticker(from, media, null, {contextInfo: {"mentionedJid": arr}})
                } else if (isQuotedAudio) {
                    let media = await xinz.downloadMediaMessage(JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
                    xinz.sendMessage(from, media, audio, {ptt : quotedMsg.audioMessage.ptt, contextInfo: {"mentionedJid": arr}})
                } else if (isQuotedDocument) {
                    let media = await xinz.downloadMediaMessage(JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
                    xinz.sendMessage(from, media, document, {title : quotedMsg.documentMessage.title, mimetype: quotedMsg.documentMessage.mimetype, contextInfo: {"mentionedJid": arr}})
                } else if (isQuotedContact) {
                    xinz.sendMessage(from, { displayName: quotedMsg.contactMessage.displayName, vcard: quotedMsg.contactMessage.vcard }, contact, {contextInfo: {"mentionedJid": arr}})
                }
                }
                break
//------------------< G R U P >-------------------
            case prefix+'delete':
			case prefix+'del':
			case prefix+'d':
            case prefix+'odel':
            case prefix+'odelete':
				if (!isGroup)return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'odelete' && !isPremium) return reply(mess.OnlyPrem)
                if (command.split(prefix)[1] === 'odel' && !isPremium) return reply(mess.OnlyPrem)
				if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (!isQuotedMsg) return reply(`Reply pesan dari bot`)
                if (!quotedMsg.fromMe) return reply(`Reply pesan dari bot`)
                if (isSticker) return xinz.deleteMessage(from, { id: msg.message.stickerMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				xinz.deleteMessage(from, { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				break
            case prefix+'afk':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (isAfkOn) return reply('afk sudah diaktifkan sebelumnya')
                if (body.slice(150)) return reply('Alasan Kak Kepanjangan 😑')
                let reason = body.slice(5) ? body.slice(5) : 'Nothing.'
                afk.addAfkUser(sender, Date.now(), reason, _afk)
                mentions(`@${sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, [sender], true)
                break
            case prefix+'infogrup':
            case prefix+'infogroup':
            case prefix+'grupinfo':
            case prefix+'groupinfo':
                if (!isGroup) return reply(mess.OnlyGrup)
                try {
                    var pic = await xinz.getProfilePicture(from)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelcome ? 'Aktif' : 'Mati'}\n*AutoSticker :* ${isAutoSticker ? 'Aktif' : 'Mati'}\n*Anti Nsfw :* ${isAntiNsfw ? 'Aktif' : 'Mati'}\n*Nsfw :* ${isNsfw ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*AntiVirtex :* ${isAntiVirtex ? 'Aktif' : 'Mati'}\n*AntiViewOnce :* ${isAntiVO ? 'Aktif' : 'Mati'}\n*AntiBadword :* ${isBadword ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
                xinz.sendMessage(from, await getBuffer(pic), image, {quoted: msg, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
                break
           case prefix+'add': case prefix+'oadd':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'oadd' && !isPremium) return reply(mess.OnlyPrem)
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                try {
                    var pic = await xinz.getProfilePicture(from)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                var pepeqq = await getBuffer(pic)
				if (isQuotedMsg && args.length < 2) {
                    xinz.groupAdd(from, [quotedMsg.sender])
                    .then((res) => {
                        if (res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us'].code === "403"){
                            let au = res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us']
                            xinz.sendMessage(quotedMsg.sender, { groupName: groupName, groupJid: from, inviteCode: au.invite_code, inviteExpiration: au.invite_code_exp, caption: `Invited By Fax Bot`, jpegThumbnail: pepeqq }, groupInviteMessage)
                            reply(`Mengirimkan groupInvite kepada nomor tersebut`)
                        } else if (res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us'].code === "408"){
                            reply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
                        } else if (res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us'].code === "401"){
                            reply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
                        } else {
                            reply(jsonformat(res))
                        }
                    })
                    .catch((err) => reply(jsonformat(err)))
                } else if (args.length < 3 && !isNaN(args[1])){
					xinz.groupAdd(from, [args[1] + '@s.whatsapp.net'])
					.then((res) => {
                        if (res.participants[0][args[1] + '@c.us'].code === "403"){
                            let au = res.participants[0][args[1] + '@c.us']
                            xinz.sendMessage(args[1] + '@s.whatsapp.net', { groupName: groupName, groupJid: from, inviteCode: au.invite_code, inviteExpiration: au.invite_code_exp, caption: `Invited By Fax Bot`, jpegThumbnail: pepeqq }, groupInviteMessage)
                            reply(`Mengirimkan groupInvite kepada nomor tersebut`)
                        } else if (res.participants[0][args[1] + '@c.us'].code === "408"){
                            reply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
                        } else if (res.participants[0][args[1] + '@c.us'].code === "401"){
                            reply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
                        } else {
                            reply(jsonformat(res))
                        }
                    })
					.catch((err) => reply(jsonformat(err)))
				} else {
                    reply(`Kirim perintah ${prefix}add nomor atau reply pesan orang yang ingin di add`)
                }
                break
            case prefix+'kick': case prefix+'okick':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'okick' && !isPremium) return reply(mess.OnlyPrem)
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (mentioned.length !== 0){
                    if (mentioned.includes(ownerNumber[0])) return reply(`Tidak bisa kick Owner`)
                    if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return reply(`Tidak bisa kick owner group`)
                    xinz.groupRemove(from, mentioned)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber[0]) return reply(`Tidak bisa kick Owner`)
                    if (quotedMsg.sender.split("@")[0] === from.split("-")[0]) return reply(`Tidak bisa kick owner group`)
                    xinz.groupRemove(from, [quotedMsg.sender])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    if (args[1] === ownerNumber[0].split("@")[0]) return reply(`Tidak bisa kick Owner`)
                    if (args[1] === from.split("-")[0]) return reply(`Tidak bisa kick owner group`)
                    xinz.groupRemove(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix}kick @tag atau nomor atau reply pesan orang yang ingin di kick`)
                }
                break
            case prefix+'promote': case prefix+'opromote':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'opromote' && !isPremium) return reply(mess.OnlyPrem)
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (mentioned.length !== 0){
                    xinz.groupMakeAdmin(from, mentioned)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMsg) {
                    xinz.groupMakeAdmin(from, [quotedMsg.sender])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    xinz.groupMakeAdmin(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix}promote @tag atau nomor atau reply pesan orang yang ingin di promote`)
                }
                break
            case prefix+'demote': case prefix+'odemote':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'odemote' && !isPremium) return reply(mess.OnlyPrem)
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (mentioned.length !== 0){
                    xinz.groupDemoteAdmin(from, mentioned)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber[0]) return reply(`Tidak bisa kick Owner`)
                    xinz.groupDemoteAdmin(from, [quotedMsg.sender])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    xinz.groupDemoteAdmin(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix}demote @tag atau nomor atau reply pesan orang yang ingin di demote`)
                }
                break
            case prefix+'linkgc': case prefix+'linkgrup': case prefix+'linkgroup':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                xinz.groupInviteCode(from)
                .then((res) => reply('https://chat.whatsapp.com/' + res))
                break
            case prefix+'leave': case prefix+'oleave':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'oleave' && !isPremium) return reply(mess.OnlyPrem)
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                reply('bye...')
                .then(() => xinz.groupLeave(from))
                break
            case prefix+'setdesc':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Penggunaan ${prefix}setdesc desc`)
                xinz.groupUpdateDescription(from, q)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                break
                case prefix+'revoke':
			    case prefix+'revokegroup':
				case prefix+'revokelink': {
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
		        var linkgc = await xinz.revokeInvite(from)
                mentions(`Link Group Berhasil direset oleh admin @${sender.split('@')[0]}`, [sender], true)
            }
					break
            case prefix+'setgrupname':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Penggunaan ${prefix}setgrupname name`)
                xinz.groupUpdateSubject(from, q)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                break
            case prefix+'sider': case prefix+'chatinfo':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isQuotedMsg) return reply(`Reply pesan dari bot`)
                if (!quotedMsg.fromMe) return reply(`Reply pesan dari bot`)
                    xinz.messageInfo(from, msg.message.extendedTextMessage.contextInfo.stanzaId)
                    .then((res) => {
                        let anu = []
                        let txt = `*Info Chat*\n\n`
                        for (let i = 0; i < res.reads.length; i++){
                            anu.push(res.reads[i].jid)
                            txt += `@${res.reads[i].jid.split("@")[0]}\n`
                            txt += `Waktu membaca : ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                        }
                        mentions(txt, anu, true)
                    })
                    .catch((err) => reply(jsonformat(err)))
                break
            case prefix+'group':
            case prefix+'grup':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                xinz.groupSettingChange(from, "announcement", false)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                } else if (args[1].toLowerCase() === 'disable'){
                xinz.groupSettingChange(from, "announcement", true)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                } else if (args[1].toLowerCase() === 'close'){
                xinz.groupSettingChange(from, "announcement", true)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                } else if (args[1].toLowerCase() === 'open'){
                xinz.groupSettingChange(from, "announcement", false)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                } else {
                testqq(from, `group`)
               }
                break
            case prefix+'setppgrup':
            case prefix+'groupicon':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    xinz.updateProfilePicture(from, media)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`*Kirim atau tag gambar dengan caption ${command}*`)
                }
                break
            case prefix+'join':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}join* link grup`)
                if (!isUrl(args[1]) && !args[1].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
                let code = args[1].replace('https://chat.whatsapp.com/', '')
                xinz.acceptInvite(code)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                break
            case prefix+'tagall':
            case prefix+'otagall':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'otagall' && !isPremium) return reply(mess.OnlyPrem)
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                let arr = [];
                let txti = `──「 *TAGALL* 」──\n\n\n\n${q ? q : ''}\n\n`
                for (let i of groupMembers){
                    txti += `◪ @${i.jid.split("@")[0]}\n`
                    arr.push(i.jid)
                }
                mentions(txti, arr, true)
                break
//------------------< Enable / Disable >-------------------
            case prefix+'antibadword':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isBadword) return reply(`Udah aktif`)
                    grupbadword.push(from)
					fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
					reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                } else if (args[1].toLowerCase() === 'disable'){
                    anu = grupbadword.indexOf(from)
                    grupbadword.splice(anu, 1)
                    fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
                    reply('antibadword grup nonaktif')
                } else {
                    testqq(from, `antibadword`)
                }
                break
            case prefix+'listbadword':
                let bi = `List badword\n\n`
                for (let boo of badword){
                    bi += `- ${boo}\n`
                }
                bi += `\nTotal : ${badword.length}`
                reply(bi)
                break
            case prefix+'addbadword':
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (args.length < 2) return reply(`masukkan kata`)
                if (isKasar(args[1].toLowerCase(), badword)) return reply(`Udah ada`)
                addBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case prefix+'delbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`masukkan kata`)
                if (!isKasar(args[1].toLowerCase(), badword)) return reply(`Ga ada`)
                delBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case prefix+'clearbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    reply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    reply('Sukses')
                }
                break
            case prefix+'mute':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot berhasil dimute di chat ini`)
                } else if (args[1].toLowerCase() === 'disable'){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot telah diunmute di group ini`)
                } else {
                    testqq(from, `mute`)
                }
                break
            case prefix+'antilink':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiLink) return reply(`Udah aktif`)
                    antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('Antilink grup aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antilink.indexOf(from)
                    antilink.splice(anu, 1)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                    reply('Antilink grup nonaktif')
                } else {
                    testqq(from, `antilink`)
                }
                break
            case prefix+'antivirtex':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiVirtex) return reply(`Udah aktif`)
                    antivirtex.push(from)
					fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
					reply('Antilink grup aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antivirtex.indexOf(from)
                    antivirtex.splice(anu, 1)
                    fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
                    reply('antivirtex grup nonaktif')
                } else {
                    testqq(from, `antivirtext`)
                }
                break
            case prefix+'antiviewonce': case prefix+'antivo':
                if (!isGroup) return reply(mess.OnlyGrup)
               if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiVO) return reply(`Udah aktif`)
                    antiviewonce.push(from)
					fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antiviewonce))
					reply('Antiview Once grup aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antiviewonce.indexOf(from)
                    antiviewonce.splice(anu, 1)
                    fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antiviewonce))
                    reply('antiviewonce grup nonaktif')
                } else {
                    testqq(from, `antiviewonce`)
                }
                break
            case prefix+'welcome':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isWelcome) return reply(`Udah aktif`)
                    welcome.push(from)
					fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
					reply('Welcome aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = welcome.indexOf(from)
                    welcome.splice(anu, 1)
                    fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
                    reply('Welcome nonaktif')
                } else {
                    testqq(from, `welcome`)
                }
                break
            case prefix+'autosticker':
            case prefix+'autostiker':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAutoSticker) return reply(`Udah aktif`)
                    autosticker.push(from)
					fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
					reply('autosticker aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = autosticker.indexOf(from)
                    autosticker.splice(anu, 1)
                    fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
                    reply('autosticker nonaktif')
                } else {
                    testqq(from, `autosticker`)
                }
            break
            case prefix+'antinsfw':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiNsfw) return reply(`Udah aktif`)
                    antinsfw.push(from)
					fs.writeFileSync('./database/antinsfw.json', JSON.stringify(antinsfw))
					reply('antinsfw aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antinsfw.indexOf(from)
                    antinsfw.splice(anu, 1)
                    fs.writeFileSync('./database/antinsfw.json', JSON.stringify(antinsfw))
                    reply('antinsfw nonaktif')
                } else {
                    testqq(from, `antinsfw`)
                }
                break
            case prefix+'nsfw':
                   if (!isGroup) return reply(mess.OnlyGrup)
               if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isNsfw) return reply(`Udah aktif`)
                    nsfw.push(from)
					fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
					reply('nsfw aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = nsfw.indexOf(from)
                    nsfw.splice(anu, 1)
                    fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
                    reply('nsfw nonaktif')
                } else {
                    testqq(from, `nsfw`)
                }
                break
            case prefix+'leveling':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isLevelingOn) return reply(`Udah aktif`)
                    _leveling.push(from)
					fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
					reply('leveling aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = _leveling.indexOf(from)
                    _leveling.splice(anu, 1)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                    reply('levelinh nonaktif')
                } else {
                    testqq(from, `leveling`)
                }
                break
            case prefix+'grupsetting':
            case prefix+'groupsetting':
                if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                    let list = []
                    let com = [`group enable`,`leveling enable`,`nsfw enable`,`antinsfw enable`,`autosticker enable`,`welcome enable`,`antivirtex enable`,`antiviewonce enable`,`antilink enable`,`mute enable`,`antibadword enable`]
                    let comm = [`group disable`,`leveling disable`,`nsfw disable`,`antinsfw disable`,`autosticker disable`,`welcome disable`,`antivirtex disable`,`antiviewonce disable`,`antilink disable`,`mute disable`,`antibadword disable`]
                    let listnya = [`Group open/close`,`Leveling enable/disable`,`Nsfw enable/disable`,`AntiNsfw enable/disable`,`Auto-Sticker enable/disable`,`Welcome enable/disable`,`Antivirtex enable/disable`,`antiviewonce enable/disable`,`Antilink enable/disable`,`Mute enable/disable`,`AntiBadword enable/disable`]
                    let suruh = [`Enable`, `Disable`]
                    let fiturname = [`Group`,`Leveling`,`Nsfw`,`AntiNsfw`,`AutoSticker`,`Welcome`,`AntiVirtex`,`Antilink`,`Mute`,`AntiBadword`]
                    let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                    let startnumm = 1
                    for (let x of com) {
                        var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `Mengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `Menonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
                    }
                    xinz.sendList(from, `Group Setting`, `Atur Settingan Grup anda disini......`,`Only Admin Yak`, `Pilih Disini`, list, msg)
                    break
                  default:
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
}