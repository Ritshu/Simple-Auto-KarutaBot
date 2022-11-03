const sID = require('./Settings.json');
let adbotStarted = 0;
const Discord = require('discord.js');
const AdBot = require('discord.js-selfbot-v13');
const hook = new AdBot.WebhookClient({ url: sID.webhook });
const moment = require("moment");
require("moment-duration-format");
const adClient = new Discord.Client({
    intents: 32767,
});

adClient.selfBot = new Discord.Collection();

async function adbotLogin(client, token) {

    try {
        const AdBotClient = new AdBot.Client({ checkUpdate: false });
        AdBotClient
            .once('ready', () => {
                var semenit = 1000 * 60;
                var lala = semenit * 2;
                var ulala = semenit * 7;
                var rand = randomIntFromInterval(lala, ulala);
				
				sendMessage()
                setInterval(function () {
                    sendMessage()
                }, rand)
            })
            .on('messageCreate', async (msg) => {
                let userId = `<@` + AdBotClient.user.id + `>`;
                if (!msg.guild) return;
                if (msg.guild.id != sID.guildId) return;
                let guild = AdBotClient.guilds.cache.get(sID.guildId);
                if (!guild) return;
                let embed = msg.embeds[0];
                if (guild && guild.channels.cache.get(sID.channels.v1)) {
                    try {
                        if (msg.author.id === sID.karuta && msg.content.includes(`${userId} is dropping`)) {
                            try {
                                // try button detection then click
                                setTimeout(async function () {
                                    let Decider = randomIntFromInterval(0, 2);
                                    let Responses = Decider;
                                    let button = msg.components[0].components[Responses].disabled;
                                    let custom_id = msg.components[0].components[Responses].customId;
                                    await msg.clickButton(custom_id);
                                }, 2828)
                            } catch (err) {
                                hook.send({
                                    embeds: [{
                                        title: `Warning`,
                                        description: `Error detected: \`Something went wrong in line 46\`\n\n${e}`,
                                        color: `#FF9300`,
                                        footer: {
                                            text: 'AdBot Powered by Ritshu',
                                            icon_url: 'https://cdn.discordapp.com/attachments/966234666652799026/995372788313497620/unknown.png',
                                        }
                                    }]
                                });
                            }
                        }
                        if (msg.author.id === sID.karuta && msg.content.includes('dropping 3 cards since')) {
                            try {
                                // try button detection then click
                                setTimeout(async function () {
                                    let Decider = randomIntFromInterval(0, 2);
                                    let Responses = Decider;
                                    let button = msg.components[0].components[Responses].disabled;
                                    let custom_id = msg.components[0].components[Responses].customId;
                                    await msg.clickButton(custom_id);
                                }, 2828)
                            } catch (e) {
                                hook.send({
                                    embeds: [{
                                        title: `Warning`,
                                        description: `Error detected: \`Something went wrong in line 66\`\n\n${e}`,
                                        color: `#FF9300`,
                                        footer: {
                                            text: 'AdBot Powered by Ritshu',
                                            icon_url: 'https://cdn.discordapp.com/attachments/966234666652799026/995372788313497620/unknown.png',
                                        }
                                    }]
                                });
                            }
                        }
                        if (msg.author.id === sID.karuta && msg.content.includes(`${userId} took the`)) {
                            try {
                                let messages = msg.content;
                                if (sID.wishlist.includes(messages)) {
                                    setTimeout(function () {
                                        msg.channel.send('kt waifu')
                                        hook.send({
                                            embeds: [{
                                                author: {
                                                    name: 'Hoshimachi Suisei Grabbed',
                                                    icon_url: AdBotClient.user.displayAvatarURL(),
                                                    url: "https://discord.com/channels/" + sID.guildId + "/" + msg.id,
                                                },
                                                description: `**${AdBotClient.user.tag}** Just grabbed Hoshimachi Suisei!! \`[${moment().format('LLLL')}]\``,
                                                color: `#2FA4FF`
                                            }]
                                        });
                                    }, 2345)
                                } else {
                                    setTimeout(async function () {
                                        await msg.channel.send('kt burn');
                                    }, 2345)
                                }
                            } catch (e) {
                                hook.send({
                                    embeds: [{
                                        title: `Warning`,
                                        description: `Error detected: \`Something went wrong in line 103\`\n\n${e}`,
                                        color: `#FF9300`,
                                        footer: {
                                            text: 'AdBot Powered by Ritshu',
                                            icon_url: 'https://cdn.discordapp.com/attachments/966234666652799026/995372788313497620/unknown.png',
                                        }
                                    }]
                                });
                            }
                        }
                        if (msg.author.id === sID.karuta && msg.content.includes(`${userId} fought off`)) {
                            try {
                                let messages = msg.content;
                                if (sID.wishlist.includes(messages)) {
                                    setTimeout(function () {
                                        msg.channel.send('kt waifu');
                                        hook.send({
                                            embeds: [{
                                                author: {
                                                    name: 'Hoshimachi Suisei Grabbed',
                                                    icon_url: AdBotClient.user.displayAvatarURL(),
                                                    url: "https://discord.com/channels/" + sID.guildId + "/" + msg.id,
                                                },
                                                description: `**${AdBotClient.user.tag}** Just grabbed Hoshimachi Suisei !!`,
                                                color: `#2FA4FF`
                                            }]
                                        });
                                    }, 2345)
                                } else {
                                    setTimeout(async function () {
                                        await msg.channel.send('kt burn');
                                    }, 2345)
                                }
                            } catch (e) {
                                hook.send({
                                    embeds: [{
                                        title: `Warning`,
                                        description: `Error detected: \`Something went wrong in line 120\`\n\n${e}`,
                                        color: `#FF9300`,
                                        footer: {
                                            text: 'AdBot Powered by Ritshu',
                                            icon_url: 'https://cdn.discordapp.com/attachments/966234666652799026/995372788313497620/unknown.png',
                                        }
                                    }]
                                });
                            }
                        }
                        if (msg.author.id === sID.karuta && embed && embed.description.includes(`cooldowns for ${userId}`)) {
                            try {
                                let embedv2 = embed.description.split('\n');
                                let embedv3 = embedv2[3];
                                let embedv4 = embedv2[2];
                                if (embedv3.includes('**Drop** is currently available') && embedv4.includes('**Grab** is currently available')) {
                                    sendKDMessage();
                                }
                            } catch (e) {
                                hook.send({
                                    embeds: [{
                                        title: `Warning`,
                                        description: `Error detected: \`Something went wrong in line 162\`\n\n${e}`,
                                        color: `#FF9300`,
                                        footer: {
                                            text: 'AdBot Powered by Ritshu',
                                            icon_url: 'https://cdn.discordapp.com/attachments/966234666652799026/995372788313497620/unknown.png',
                                        }
                                    }]
                                });
                            }
                        }
                        if (msg.author.id === sID.karuta && msg.content.includes(`${userId}, the`)) {
                            let channel2 = AdBotClient.channels.cache.get(sID.channels.v1);
                            channel2.send('.')
                        }
                        if (msg.author.id === sID.karuta && msg.content.includes(`${userId}, you must wait`)) {
                            let channel2 = AdBotClient.channels.cache.get(sID.channels.v1);
                            channel2.send('..')
                        }
                        if (msg.author.id === sID.karuta && msg.content.includes(`${userId} and took the `)) {
                            let channel2 = AdBotClient.channels.cache.get(sID.channels.v1);
                            channel2.send('...')
                        }
                    } catch (e) {
                        hook.send({
                            embeds: [{
                                title: `Warning`,
                                description: `Error detected: \`Something went wrong in line 114\`\n\n${e}`,
                                color: `#FF9300`,
                                footer: {
                                    text: 'AdBot Powered by Ritshu',
                                    icon_url: 'https://cdn.discordapp.com/attachments/966234666652799026/995372788313497620/unknown.png',
                                }
                            }]
                        });
                    }
                }
            });
        await AdBotClient.login(token);
        client.selfBot.set(AdBotClient.user.id, AdBotClient);
        adbotStarted++;

        hook.send({
            embeds: [{
                title: `Logging in all accounts (${adbotStarted}/${sID.ACCToken.length})`,
                description: `Succesfully logged in **${AdBotClient.user.tag}**`,
                color: `#49FF00`,
                footer: {
                    text: 'AdBot Powered by Ritshu',
                    icon_url: AdBotClient.user.displayAvatarURL(),
                }
            }]
        });
        // function biar panjang aja kodeny
        async function sendKDMessage() {
            let guild = AdBotClient.guilds.cache.get(sID.guildId);
            if (guild && guild.channels.cache.get(sID.channels.v1)) {
                let l = AdBotClient.channels.cache.get(sID.channels.v1);
                await l.send('kd');
            }
        }
        async function sendMessage() {
            let guild = AdBotClient.guilds.cache.get(sID.guildId);
            if (guild && guild.channels.cache.get(sID.channels.v2)) {
                let l = AdBotClient.channels.cache.get(sID.channels.v2);
                await l.send('kcd');
            }
        }
        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

    } catch (e) {
        hook.send({
            embeds: [{
                title: `Warning`,
                description: `Detected invalid token/revoked token: \`${token}\`\n${e}`,
                color: `#FF9300`,
                footer: {
                    text: 'AdBot Powered by Ritshu',
                    icon_url: 'https://cdn.discordapp.com/attachments/966234666652799026/995372788313497620/unknown.png',
                }
            }]
        });
    }
}


adClient.once('ready', async () => {
    console.log('AdBot made by Ritshu#0228');
    console.log(' ')

    console.log(`[DEBUG]: Bot Type: Karuta`);
    console.log(`[DEBUG]: Running (${moment().format('LLLL')})`);
    setInterval(function () {
        hook.send({
            embeds: [{
                title: `Karuta Status`,
                description: `Running & working like a charm`,
                color: `#ffb347`,
                footer: {
                    text: 'AdBot Powered by Ritshu',
                    icon_url: 'https://cdn.discordapp.com/icons/853845677963739146/9c1a494068da52226d349e2a68d6b176.png',
                }
            }]
        });
        console.log(`[DEBUG]: Running (${moment().format('LLLL')})`);
    }, 60000 * 5)

    await Promise.all(
        sID.ACCToken.map(
            async (token) => await adbotLogin(adClient, token),
        ),
    );

    hook.send({
        embeds: [{
            title: `Karuta Status`,
            description: `Running & working like a charm`,
            color: `#ffb347`,
            footer: {
                text: 'AdBot Powered by Ritshu',
                icon_url: 'https://cdn.discordapp.com/icons/853845677963739146/9c1a494068da52226d349e2a68d6b176.png',
            }
        }]
    });
});

adClient.login(sID.botToken);

process.on('unhandledRejection', (reason, promise) => {
    var myObj = reason;
    hook.send({
        embeds: [{
            title: `Warning`,
            description: `Detected unhandledRejection at: \`AdBot.Karuta\`\n\`${JSON.stringify(myObj)}\``,
            color: `#FF9300`,
            footer: {
                text: 'AdBot Powered by Ritshu',
                icon_url: 'https://cdn.discordapp.com/attachments/966234666652799026/995372788313497620/unknown.png',
            }
        }]
    });
})
