const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    //COMMANDS
    if (command === 'commands') {
        message.channel.send('Commands: !ping, !avatar, !server, !user-info, !ig');
    }

    //PING PONG
    else if (command === 'ping') {
        message.channel.send('Pong.');
    }


    //INSTAGRAM
    else if (command === 'ig') {
        message.channel.send('\n Creator`s IG: https://www.instagram.com/sanctionedsimon/');
    }

    //BEEP BOOP
    else if (command === 'beep') {
        message.channel.send('Boop.');
    }


    //AVATAR
    else if (command === 'avatar') {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your Avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s Avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });

        // send the entire array of strings as a message

        message.channel.send(avatarList);
    }



    //SERVER
    else if (command === 'server') {
        message.channel.send(`Server's name: ${message.guild.name}\nMembers: ${message.guild.memberCount}\nServer's birthday: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);
    }

    //USER/INFO
    else if (command === 'user-info') {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }

    //INVALID COMMAND
    else {
        message.channel.send("this command is invalid");
    }



});
client.login('add-here-bots-token');