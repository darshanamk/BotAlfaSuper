const XTroid = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const CPK = "\n⚛》》》》》◆《《《《《⚛\n*🍭𓂀 𝙰𝙽𝙸𝙼 𝙻𝙸𝚂𝚃 𓂀🍭*\n\n┃\n┝🫐 *.rloli\n┃\n┝🫐 *.rwifu*\n┃\n┝🫐 *.rwolf*\n┃\n┝🫐 *.rshin*\n┃\n┝🫐 *.rwtc*\n┃\n╚⏤⏤⏤⏤╗❀╔⏤⏤⏤⏤╝\n"
const Config = require('../config')
const Ln = "Cpack Logo"
let FM = Config.WORKTYPE == 'public' ? false : true


XTroid.addCMD({pattern: 'anime', fromMe: FM, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,CPK, MessageType.text);}));
