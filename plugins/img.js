const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { googleImage } = require('@bochilteam/scraper')

var imgmsg = "```Please write a few words!```"
var desc = "Search for related pics on Google."
var errt = "*I couldn't find anything :(*"

cmd({
    pattern: "img",
    react: '🖼️',
    alias: ["gimage","googleimage","gimg"],
    desc: desc,
    category: "download",
    use: '.img4 car',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
let wm = `🅥 G I M A G E - D O W N L O A D E R

© KENZI-MD v${require("../package.json").version} \nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ •ᴅᴀʀᴋɴᴇᴏɴᴄʏʙᴇʀꜱ ッ
 `
if (!q) return reply('❓ *Please give me a query for Search Images*')
const data = await googleImage(q)
await conn.sendMessage(from, { image: { url : data[0] }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[1] }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[2] }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[3] }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[4] }, caption: wm }, { quoted: mek })
} catch (e) {
  reply(errt)
console.log(e)
}
})