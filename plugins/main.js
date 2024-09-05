const config = require('../config')
const { cmd, commands } = require('../command')
const os = require('os')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
function genMsgId() {
  const prefix = "3EB";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomText = prefix;

  for (let i = prefix.length; i < 22; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }

  return randomText;
} 

cmd({
            pattern: "join",
            desc: "joins group by link",
            category: "main",
            use: '<group link.>',
        },
       async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner && !isSachintha && !isSavi && !isSadas && !isMani && !isMe)return;
    try{  if (!q) return reply(`Please give me Query`);
            if (!q.split(" ")[0] && !q.split(" ")[0].includes("whatsapp.com"))
               reply("Link Invalid, Please Send a valid whatsapp Group Link!");
            let result = q.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await conn.groupAcceptInvite(result)
                .then((res) => reply("🟩Joined Group"))
                .catch((err) => reply("Error in Joining Group"));
} catch (e) {
reply('*Done ✓✓*')
l(e)
}
})

//==========promote=======

cmd({
            pattern: "promote",
            desc: "Provides admin role to replied/quoted user",
            category: "main",
            filename: __filename,
            use: '<quote|reply|number>',
        },
              async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
                 try {     if (!m.isGroup) return reply(`only for groups`);
            if (!isBotAdmins) return reply(`I can't do that. give group admin`);

                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? citel.quoted.sender : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return;
                await conn.groupParticipantsUpdate(m.chat, [users], "promote");
} catch (e) {
reply('*Done ✓✓*')
l(e)
}
})

//==========kick=======

cmd({
  pattern: "kick",
  alias: [".."],
  desc: "Kicks replied/quoted user from group.",
  category: "main",
  filename: __filename,
  use: '<quote|reply|number>',
},           
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
   try {
       if (!m.isGroup) return reply(`only for groups`);
  if (!isBotAdmins) return reply(`I can't do that. give group admin`);


    const user = m.quoted.sender;
    if (!user) return reply(`*Please give me a user to kick ❗*`);
    await conn.groupParticipantsUpdate(m.chat, [user], "remove");
   reply(`${user} *has been kicked out of the group!*`);
  } catch (e) {
reply('*Done ✓✓*')
l(e)
}
})

//==========add=======

cmd({
            pattern: "add",
            desc: "Add that person in group",
            fromMe: true,
            category: "group",
            filename: __filename,
            use: '<number>',
        },
         async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
   try {
      
       if (!m.isGroup) return reply(`only for groups`);
            if (!q) return reply("Please provide me number.");
        
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await conn.groupParticipantsUpdate(m.chat, [users], "add");
} catch (e) {
reply('*Error !!*')
l(e)
}
})

//==========del=======

cmd({
    pattern: "del",
    react: "⛔",
    alias: [","],
    desc: "delete message",
    category: "main",
    use: '.del',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    const key = {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.quoted.id,
                    participant: m.quoted.sender
                }
                await conn.sendMessage(m.chat, { delete: key })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

//==========system=======

cmd({
    pattern: "system",
    react: "💦",
    alias: ["device","bot","info"],
    desc: "Get bot\'s system..",
    category: "main",
    use: '.system',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

  try{
const tes = `┌───────────────────────
├ 🧬 *Uptime:-*  ${runtime(process.uptime())}
├ 🎲 *Ram usage:-*  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ 🦄  *Owner:-* *DanuXzz ジ*
├💠  *Version:-* 1.0.0
└───────────────────────

> Ｄａｒｋ Ｎｅｏｎ Ｃｙｂｅｒｚ`

 
await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: tes }, { quoted: mek, messageId:genMsgId() })
} catch (e) {
reply('*Error !!*')
l(e)
}
})
