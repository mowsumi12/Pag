module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/3JpSf0LC/received-1709835639483729.jpg", 
            
            "https://i.postimg.cc/28zrCYPW/received-2253672584826375.jpg", 
            
            "https://i.postimg.cc/3JpSf0LC/received-1709835639483729.jpg",

"https://i.postimg.cc/3JpSf0LC/received-1709835639483729.jpg",
            
            "https://i.postimg.cc/28zrCYPW/received-2253672584826375.jpg"];
  
var callback = () => api.sendMessage({body:`𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗧𝗢𝗡
=======================
❇️𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : ${global.config.BOTNAME}
❇️𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 :
✢━ 𝗡𝗔𝗭𝗥𝗨𝗟 ━✢
❇️𝗔𝗗𝗗𝗥𝗘𝗦𝗦: 𝗡𝗔𝗢𝗚𝗔𝗢𝗡
=======𝗖𝗢𝗡𝗧𝗔𝗖𝗧=======
=======================
❇️𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/ji.la.pi.6
❇ 𝗠𝗔𝗦𝗦𝗘𝗡𝗚𝗘𝗥 𝗖𝗛𝗔𝗧 𝗟𝗜𝗡𝗞:
https://m.me/ji.la.pi.6
❇️𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫: ${global.config.PREFIX}
❇️𝗕𝗢𝗧 𝗪𝗢𝗡𝗘𝗥: জিঁলাঁপিঁ
𝗢𝗧𝗛𝗘𝗥 𝗡𝗘𝗢𝗥𝗠𝗔𝗧𝗧𝗢𝗡 ==============================================
TYPE /admin 
➟ UPTIME
𝗧𝗢𝗗𝗬 𝗜𝗦 𝗧𝗜𝗠𝗘 : ${juswa} 
𝗕𝗢𝗧 𝗜𝗦 𝗥𝗨𝗡𝗡𝗜𝗡𝗚 ${hours}:${minutes}:${seconds}.
𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚${global.config.BOTNAME} \n=======================
\n✢━━━━━ N/S ━━━━━✢\n
----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖---- `,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
