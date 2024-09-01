const config = require('../config');
const fileType = require("file-type");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson} = require('../lib/functions');
const { cmd, commands } = require('../command');
let { img2url } = require('@blackamda/telegram-image-url');

//==========Img-to-url-by-manu-md=======

cmd({
    pattern: "img2url",
    react: "🔗",
    alias: ["tourl","imgurl","telegraph","imgtourl"],
    desc: "to convert image to url",
    category: "convert",
    use: '.img2url <reply image>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    if ((m.type === 'imageMessage') || isQuotedImage) {
const fileType = require("file-type");
  var nameJpg = getRandom('');
  let buff = isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
  let type = await fileType.fromBuffer(buff);
  await fs.promises.writeFile("./" + type.ext, buff);
  img2url("./" + type.ext).then(async url => {
    await reply('\n' + url + '\n');
});
    } else return reply()
} catch (e) {
  reply();
  l(e);
}
})
