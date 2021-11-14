
/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved Â©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
rgtthrth : rawes60457@edmondpt.com
*/

const XTroid = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*🤹‍♀type some word after command🤹‍♀*\n*🤹‍♀විධානයට පසුව වචනයක් ලියන්න🤹‍♀"
const GG = "...."

if (Config.WORKTYPE == 'private') {

    XTroid.addCMD({ pattern: 'rloli ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {
        await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
            const { lasi } = ann.data.def1
            const lc = lasi
            const seed = Config.LOCK
            if (lc !== seed) return await message.sendMessage(GG);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    });
    }));



    XTroid.addCMD({ pattern: 'rwifu ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
            const { lasi } = ann.data.def1
            const lc = lasi
            const seed = Config.LOCK
            if (lc !== seed) return await message.sendMessage(GG);
        var lasiyasimg = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/waifu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    });
    }));


    XTroid.addCMD({ pattern: 'rwolf ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {
        await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
            const { lasi } = ann.data.def1
            const lc = lasi
            const seed = Config.LOCK
            if (lc !== seed) return await message.sendMessage(GG);

        var lasiyasimg = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/awoo?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    });
    }));   
    
    
    XTroid.addCMD({ pattern: 'rshin ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {
        await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
            const { lasi } = ann.data.def1
            const lc = lasi
            const seed = Config.LOCK
            if (lc !== seed) return await message.sendMessage(GG);

        var lasiyasimg = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/shinobu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    });
    }));

    XTroid.addCMD({ pattern: 'rwtc ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {
        await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
            const { lasi } = ann.data.def1
            const lc = lasi
            const seed = Config.LOCK
            if (lc !== seed) return await message.sendMessage(GG);

        var lasiyasimg = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/megumin?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    });
    }));

}

else if (Config.WORKTYPE == 'public') {

    XTroid.addCMD({ pattern: 'rloli ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
        await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
            const { lasi } = ann.data.def1
            const lc = lasi
            const seed = Config.LOCK
            if (lc !== seed) return await message.sendMessage(GG);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    });
    }));



    XTroid.addCMD({ pattern: 'rwifu ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
        await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
            const { lasi } = ann.data.def1
            const lc = lasi
            const seed = Config.LOCK
            if (lc !== seed) return await message.sendMessage(GG);

        var lasiyasimg = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/waifu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    });
    }));

    XTroid.addCMD({ pattern: 'rwolf ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
        await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
            const { lasi } = ann.data.def1
            const lc = lasi
            const seed = Config.LOCK
            if (lc !== seed) return await message.sendMessage(GG);

        var lasiyasimg = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/awoo?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    });
    }));  



    XTroid.addCMD({ pattern: 'rshin ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
        await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
            const { lasi } = ann.data.def1
            const lc = lasi
            const seed = Config.LOCK
            if (lc !== seed) return await message.sendMessage(GG);

        var lasiyasimg = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/shinobu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    });
    }));


    XTroid.addCMD({ pattern: 'rwtc ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
        await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
            const { lasi } = ann.data.def1
            const lc = lasi
            const seed = Config.LOCK
            if (lc !== seed) return await message.sendMessage(GG);

        var lasiyasimg = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/megumin?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    });
    }));



     
}
