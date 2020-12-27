require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE']
});
const BOT_PREFIX = "!";
const MOD_ME = "mod-me";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('messageDelete', msg => {
    // msg.channel.send("Stop deleting messeges!");
    msg.reply("Stop deleting messeges!");
});

client.on('message', msg => {
    if (msg.content === 'vadim') {
        msg.reply('bylat');
        msg.channel.send('Vadim Bylat!');
    }
    else if (msg.content === `${BOT_PREFIX}${MOD_ME}`) {
        modUser(msg.member)
    }
    else if (msg.content === 'stalker' || msg.content === 'chernobyl') {
        msg.react("☢️");
    }
});

function modUser(member) {
    member.roles.add("792794526649417748");
}

client.login(process.env.BOT_TOKEN);