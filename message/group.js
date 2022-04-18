"use strict";
const {
	MessageType,
	Presence
} = require("@adiwajshing/baileys");
const fs = require("fs");
const canvas = require("discord-canvas");

const { getBuffer, sleep } = require("../lib/myfunc");

let setting = JSON.parse(fs.readFileSync('./config.json'));
let { botName } = setting

module.exports = async(xinz, anj, welcome) => {
    const isWelcome = welcome.includes(anj.jid)
    const mdata = await xinz.groupMetadata(anj.jid)
    const groupName = mdata.subject
    const conts = xinz.contacts[anj.participants[0]] || { notify: jid.replace(/@.+/, '') }
	const pushname = conts.notify || conts.vname || conts.name || '-'

    if (anj.action === 'add'){
        if (anj.participants[0] === xinz.user.jid){
            await sleep(5000)
            xinz.updatePresence(anj.jid, Presence.composing)
            xinz.sendMessage(anj.jid, `Hai aku ${botName}, silahkan kirim #menu`, MessageType.text)
        } else if (isWelcome){
            try {
                var pic = await xinz.getProfilePicture(anj.participants[0])
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
            const welcomer = await new canvas.Welcome()
                .setUsername(pushname)
                .setDiscriminator(anj.participants[0].substring(6, 10))
                .setMemberCount(mdata.participants.length)
                .setGuildName(groupName)
                .setAvatar(pic)
                .setColor('border', '#00100C')
                .setColor('username-box', '#00100C')
                .setColor('discriminator-box', '#00100C')
                .setColor('message-box', '#00100C')
                .setColor('title', '#00FFFF')
                .setBackground('https://i.ibb.co/gwT1HxL/308f40b82bfa.jpg')
                .toAttachment()
            xinz.sendMessage(anj.jid, welcomer.toBuffer(), MessageType.image, {caption: `Hai @${anj.participants[0].split("@")[0]}, selamat datang di ${groupName}\nJangan Lupa Intro Yh\n➭ Nama :\n➭ Umur :\➭ Kender :\n➭ Asal Kota :\nPatuhi Peraturan Grup !!`, contextInfo: {"mentionedJid": [anj.participants[0]]}})
        }
    } else if (anj.action === 'remove' && isWelcome){
        try {
            var pic = await xinz.getProfilePicture(anj.participants[0])
        } catch {
            var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
        }
        const bye = await new canvas.Goodbye()
            .setUsername(pushname)
            .setDiscriminator(anj.participants[0].substring(6, 10))
            .setMemberCount(mdata.participants.length)
            .setGuildName(groupName)
            .setAvatar(pic)
            .setColor('border', '#00100C')
            .setColor('username-box', '#00100C')
            .setColor('discriminator-box', '#00100C')
            .setColor('message-box', '#00100C')
            .setColor('title', '#00FFFF')
            .setBackground('https://i.ibb.co/gwT1HxL/308f40b82bfa.jpg')
            .toAttachment()
        xinz.sendMessage(anj.jid, bye.toBuffer(), MessageType.image, {caption: `Sayonara @${anj.participants[0].split("@")[0]}`, contextInfo: {"mentionedJid": [anj.participants[0]]}})
    } else if (anj.action == 'promote') {
                 try {
            var pic = await xinz.getProfilePicture(anj.participants[0])
        } catch {
            var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
        }
			var teks = `*◪* *PROMOTE DETECT*\n*├─* *Nomor:* ${anj.participants[0].split("@")[0]}\n*└─ ❏* *@${anj.participants[0].split("@")[0]}*`
            var ini_img = await getBuffer(pic)
			xinz.sendMessage(anj.jid, ini_img, MessageType.image, { caption: teks, contextInfo: {"mentionedJid": [anj.participants[0]]}})
            } else if (anj.action == 'demote') {
       try {
            var pic = await xinz.getProfilePicture(anj.participants[0])
        } catch {
            var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
        }
		    var teks = `*◪* *DEMOTE DETECT*\n*├─* *Nomor:* ${anj.participants[0].split("@")[0]}\n*└─ ❏* *@${anj.participants[0].split("@")[0]}*`
            var ini_img = await getBuffer(pic)
			xinz.sendMessage(anj.jid, ini_img, MessageType.image, { caption: teks, contextInfo: {"mentionedJid": [anj.participants[0]]}})
            }
}