const fs = require("fs");
module.exports.config = {
	name: "groupjoin",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "faiz", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("group") ||
     react.includes("Group") || 
react.includes("GROUP")) {
		var msg = {
				body: "●▬▬๑💖𓆩𝐌𝐚𝐡𝐢 𝐍𝐨𝐨𝐫𓆪💖 ✶𝐌𝐘 𝐁𝐎𝐒𝐒✶๑▬▬😍😍😍 .... 😊😊😊💖𝗝𝗢𝗜𝗡🗡️𝗠𝗘𝗥𝗘 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘 𝗔𝗔𝗢 𝗘𝗡𝗝𝗢𝗬 𝗞𝗔𝗥𝗢💖 ➻👉🏻♦️𝙂𝙍𝙊𝙐𝙋👉𝙇𝙄𝙉𝙆  https://m.me/j/AbZwvKLqoPCyUO0y/ ✨",
				attachment: fs.createReadStream(__dirname + `/cache/group.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }