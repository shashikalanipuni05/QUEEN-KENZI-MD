const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')
cmd({
    pattern: "ai",
    react: "✨",
    desc: "ai chat",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`)
return reply(`${data.data}`)
return await conn.sendMessage(from, { text: text ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363192956026815@newsletter',
      newsletterName: "Ｄａｒｋ Ｎｅｏｎ Ｃｙｂｅｒｚ 🅥",
      serverMessageId: 999
    },
externalAdReply: { 
title: '💃𝐐𝐔𝐄𝐄𝐍 𝐊𝐄𝐍𝐙𝐈 𝐌𝐃 🤍',
body: 'ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://github.com/Danupa0" ,
thumbnailUrl: 'https://telegra.ph/file/02901a37c157fa1352aef.jpg' ,
renderLargerThumbnail: false,
showAdAttribution: false
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})



cmd({
    pattern: "gemini",
    desc: "Ai chat.",
    react: "🧠",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await fetchJson(`https://api.vihangayt.com/ai/gemini?q=${q}`)
//----------------------------------
let data = res.data

await reply(data.response)

}catch(e){
console.log(e)
reply(`${e}`)
}
})


