# A Node.js based Discord BOT with CTF challenges.

[![CodeFactor](https://www.codefactor.io/repository/github/jwcce/challot/badge)](https://www.codefactor.io/repository/github/jwcce/challot)
![NPM](https://img.shields.io/badge/npm-6.14.8-sucess)

**Source:** Created by jwcce

Description:

​A bot created for training CTF skills developed with [discord.js](https://discord.js.org).

​Our server: [server invite](https://discord.gg/VAvPvhE)

 Invite the bot to your server: [invite the bot](https://discord.com/api/oauth2/authorize?client_id=757934498997600338&permissions=0&scope=bot)
 
***Contributors***

- jwcce
  - Initial commit and creation, initial challenges and base features
- lost
  - Challenge creator

***Install & run***

1. Clone the repository by doing in a terminal `git clone https://github.com/jwcce/bot.git`
2. After cloning, `cd botjs/setup/`, `chmod +x setup.sh` and after `./setup.sh` and follow the instructions.
3. Create a file `src/storage/config/chall.json` and write the flags from all challenges like this:
```json
{
	"flag1": ""
}
```

***Reminder*** 

If you're going to publish your work on Github or somewhere else, please, **NEVER** but **NEVER** publish the `config.json` && `chall.json` file. Add a `.gitignore` to your proyect instead.

***To-Do***

* [x] Command handler optimization.
* [ ] Flag command optimization.
* [ ] File command optimization.

***Commands***

{required args}

> Chall, (to receive the challenge infos),
~chall {Challenge_Number}
>
> Hint, (to receive just a hint),
~hint {Challenge_Number}
>
> Flag, (verify, send the flag),
~flag {Flag}
>
> Source, (show the github repository),
~source
>
> Help, (show commands above),
~help
>
> Reload, (reload a command),
~reload {command}
>
> 0raid, (antiraid command),
~0raid on/off
>
> Clear, (delete messages, min:2/max:100),
~clear 2-100
