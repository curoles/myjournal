# Notes for myJournal project

---


## Created Github repo. Sun Sep 10 20:33:55 PDT 2017

```bash
$ git init

$ git remote add origin https://github.com/curoles/myjournal.git

$ git add README.md LICENSE.md .gitignore

$ git commit -a -m "initial commit"

$ git push -u origin master
To https://github.com/curoles/myjournal.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.

$ git pull
Already up-to-date.
```

---

## Try to package Sep 10 2:30pm

[electron-packager-tutorial](https://www.christianengvall.se/electron-packager-tutorial/)

```bash
# for use in npm scripts
npm install electron-packager --save-dev

# for use from cli
npm install electron-packager -g
```

In package.json I now see:

```json
  "devDependencies": {
    "electron": "1.6.13",
    "electron-packager": "^9.0.1"
  }
```

I added scripts as in the tutorial.

```bash
$ npm run package-linux

> my-journal@1.0.0 package-linux /home/igor/prj/myjournal/myjournal
> electron-packager . --overwrite --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds

Packaging app for platform linux x64 using electron v1.6.13
Wrote new app to release-builds/myJournal app-linux-x64
igor:~/prj/myjournal/myjournal$ ls
index.html  LICENSE.md  node_modules  README.md       renderer.js
journal.md  main.js     package.json  release-builds  source_me.bash

igor:~/prj/myjournal/myjournal$ ls release-builds
myJournal-linux-x64

# Now I can copy direcotry myJournal-linux-x64 and run executable myJournal.
```

In GIMP created 1024x1024.png and 64x64.png.
Then followed [electron-app-icons](https://www.christianengvall.se/electron-app-icons/)

---

## Open folder in VS Code Sep 10 2pm

VSCode created folder .vscode with settings.json file inside it.
Shall I create tsconfig.json or jsconfig.json?
See [docs/languages/typescript](https://code.visualstudio.com/docs/languages/typescript)
and [docs/languages/javascript](https://code.visualstudio.com/docs/languages/javascript).

---

## First app Sep 10 1pm

Copied files from [electron-quick-start](https://github.com/electron/electron-quick-start).

```bash
> ls
index.html  journal.md  LICENSE.md  main.js  node_modules  package.json  README.md  renderer.js  source_me.bash
> npm install
# To run:
> npm start
# Another way to run:
./node_modules/.bin/electron .
# Yet another way:
./node_modules/electron/dist/electron .
```

---

## Install Electron Sun Sep 10 01:41:58 PDT 2017

Install the __Distro-Stable__ Version of Node.js with APT on Ubuntu 17.04:

```bash
> sudo apt-get install nodejs
> nodejs --version
v4.7.2
> sudo apt-get install npm
> npm --version
3.5.2
```

Install Electron per instructions at [nmpjs.com](https://www.npmjs.com/package/electron)

```bash
> npm install electron --save-dev --save-exact
```

Electron complains that node and npm are old, loaded latest Node.js, node comes with npm.

```bash
$ export PATH=/home/igor/tools/nodejs/node-v6.11.3-linux-x64/bin:$PATH
$ echo $PATH
/home/igor/tools/nodejs/node-v6.11.3-linux-x64/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
$ which node
/home/igor/tools/nodejs/node-v6.11.3-linux-x64/bin/node
$ which npm
/home/igor/tools/nodejs/node-v6.11.3-linux-x64/bin/npm
$ npm install electron
```

Looks better now, but why `node_modules` directory has all modules?

```bash
$ du -sh node_modules/
140M node_modules/
```

Because by default all modules are installed locally not globally.

---

## Insert timestamp string in Vim Sun Sep 10 01:11:05 PDT 2017

To insert date string in Vim:

```vi
:r !date
```
