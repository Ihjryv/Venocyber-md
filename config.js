//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "2348103762319";
global.owner = process.env.OWNER_NUMBER || "2349039499355";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFUenZjVTB4NFdnejNPeFoyYVF6TVlEaDgwRnJMZE5mdkxIenB5K0dGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzBtRmo1cDJhZDF2dEs0M0wwQU1OZ3kwQTg2dXJCME40dDhqN2l2U3FnWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRkticUVzQVVkTTcvZ0R2dm1PeHh3Wmx2cW1HaFBldHZTVGV1Yk1UUVVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMZzFOVzNCR2xiamI1SUVYU1VVUitKWENqdmxMQkdsYWk1VXR6NURGM0NVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCRjRnbEkzWFJNZ1F3anZuYzJ2OWFWRGU2VGVpWTdtQUFEbDlUVDFBWDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN4NW5WdkpyRmFqL0xwb05FQllWb0JVZzRHZm81bElwYVNXd08vN2NoZ0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURpWHRnTFpON1NjV2d6RTg1VUhpTGo4Y1hmajVoNGdlMVY2RFRBdE5uRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBFY0ZiQUg2OG5vR1ZyQTdqL2x6M2FxOWFNak8zSlBMRmVIQU5SUitTST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhaZzZpUEZxWTNSWjh4dXpKdE1nejNsL01XNGlkM3h3MzhkOFNZbzBjcVBtdWxtMmZvMy9BdXZxY2pDdk02TVF2a0JZZ2Z3RG9KQTloc2w1UDMwc2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6Inh2Z0lua1piTkpIM0xWTUFVcXU5RHp4NHRXVEZQWVp1WVpLT1paZU1tSlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBrOFJWU3JrUmhlRzBxbW5wSzdfeGciLCJwaG9uZUlkIjoiYmNhYjkxOGEtMjI5NC00NGFlLWEwZWItYjlkNDIwN2I3NjE5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGMzZkcFZhYTlMQXhycEhDSlRsdllyQ0NYcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvc2JOUmJETWpxTTVVZ21XUW8ydzR1N2NiTUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVzFDSDNBRkoiLCJtZSI6eyJpZCI6IjIzNDkwNDkzOTkzNTU6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVNCbTc0RUVNV1UwYk1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaUhVRk93WWJnbVNGQ2NGL3NDNm1kYi8raTBWTGZUNnNiMlZvb0F1YTJGbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVFlhSjhqMGs1MTdicm9BL3UzU2NEQmN4MmdqQXB2RlIvQnZ6ck9qcGxCOCtzVjhKN3dRY1JMNSszMUF3SXBOSXNSS3dhS1E1bkh3ZlduSkxMd2ZQQWc9PSIsImRldmljZVNpZ25hdHVyZSI6ImxBNGdWNjhPSk1uUFg5VVVjVXkzQVE1TnpVa1lTTi96a20xc3cvWVpXMEZUOHc1N2lzUkxJY3pIaDZRcjJCelp3VlgrVmtvUzZTS0hKQ3hJMzkwT2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA0OTM5OTM1NToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlloMUJUc0dHNEpraFFuQmY3QXVwblcvL290RlMzMCtyRzlsYUtBTG10aGEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTg4OTcyMzR9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝘨𝘳𝘦𝘢𝘵 𝘥𝘢𝘺 | 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "kingken",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
