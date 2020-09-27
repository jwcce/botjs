[![CodeFactor](https://www.codefactor.io/repository/github/jwcce/botjs/badge)](https://www.codefactor.io/repository/github/jwcce/botjs)

# A Node.js based Discord BOT with CTF features.

**Source:** Created by jwcce

Description:

​A bot created for usage on the Chimmy Changas discord server developed with [discord.js](https://discord.js.org).

​Server invite: [invite](https://discord.gg/VAvPvhE)

***Install & run***

1. Clone the repository by doing in a terminal `git clone https://github.com/jwcce/bot.git`
2. After cloning, `cd botjs` and `npm install`
3. Create a file named `storage/config/config.json`, copy-paste this inside it:

```json
{
    "owner_ID": "",
    "prefix": "",
    "token": "",
    "version": ""
}
```

4. Create a file named `storage/config/chall.json` and copy-paste this inside it and write the flag from challenge 1:
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

> Files, (to receive the challenge files),
!files {Challenge_Number}

> Hint, (to receive just a hint),
!hint {Challenge_Number}

> Flag, (verify, send the flag),
!flag {Flag}

> Help, (show commands above),
!help

