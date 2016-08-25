目次

####  [1 概略](https://github.com/monstar-lab/uiux-group/tree/master/UItest#概略)

####  [2 install](https://github.com/monstar-lab/uiux-group/tree/master/UItest#install)

####  [3 set up](https://github.com/monstar-lab/uiux-group/tree/master/UItest#set-up)

####  [4 config](https://github.com/monstar-lab/uiux-group/tree/master/UItest#config)


## 概略
UIテストのセットアップに関して、説明します。
set up完了間で、30分ぐらいかかるかも
セットアップが完了すると、指定したurlを指定したブラウザーでスクリーンショットを作成できます。
browserstack apiを使用するため、browserstackのアカウントを取得してください。
https://www.browserstack.com


以下の技術を使用しています

#####  [node](https://nodejs.org/en/)

nodeはnodeや

#####  [nvm](https://github.com/creationix/nvm)
nodeのバージョン管理
nodeのバージョン管理さえできていれば、ツールは問いません。
nodebrewでも構いません

##### [browserstack api](https://www.browserstack.com/screenshots)

apiを利用し、スクリーンショットをとっています。 

##### [browserstack node](https://www.npmjs.com/package/browserstack) 

apiを使用するためのnode module  

##### [imageMagick](http://www.imagemagick.org/script/index.php)

画像の重ね合わせに使用しています 


必要に応じて、各ソフトをinstallしてください
既にinstallされているかは、[install](https://github.com/monstar-lab/uiux-group/wiki/Design-Guild#install)に記述されている各コマンドを走らせてください。
もし、 `command not found` と表示された場合はinstallされていません。

## install

* nvm
* node
* imageMagick

***

##### [nvm](https://github.com/creationix/nvm)

[参考](http://qiita.com/dribble13/items/e895208727c85ef9bc52#2-1)

`git clone git://github.com/creationix/nvm.git ~/.nvm`

`if [[ -s /Users/ホームディレクトリ/.nvm/nvm.sh ]] ; then source /Users/ホームディレクトリ/.nvm/nvm.sh ; fi`


**success**

`nvm`コマンドが使用可能になります

`nvm --version`

0.31.4

***


##### [node](https://nodejs.org/en/)

[参考](http://qiita.com/dribble13/items/e895208727c85ef9bc52#2-2)

`nvm ls` 

```
         system
default -> v0.12.5
           v0.10.5
node -> stable (-> v6.3.1) (default)
stable -> 6.3 (-> v6.3.1) (default)
iojs -> N/A (default)
lts/* -> lts/argon (-> N/A)
lts/argon -> v4.4.7 (-> N/A)
```

現在の使用バージョンを確認しください

`nvm install v6.3.1`

バージョン管理を行うため、nvmからnodeをinstallしてください

`nvm use v6.3.1`

```
        v0.12.5
->       v6.3.1
         system
default -> v6.3.1
node -> stable (-> v6.3.1) (default)
stable -> 6.3 (-> v6.3.1) (default)
iojs -> N/A (default)
lts/* -> lts/argon (-> N/A)
lts/argon -> v4.4.7 (-> N/A)
```


**success**

`node`コマンドが使用可能になり、指定したnodeのバージョンが表示されます

`node -v`

v6.3.1

***

##### [imageMagick](http://www.imagemagick.org/script/index.php)

[参考](http://qiita.com/tomomomo1217/items/79f516fc0c483e68f444)

**success**

`convert`コマンドが使用可能になります

`convert`

Version: ImageMagick 6.9.1-6 Q16 x86_64 2015-06-22 http://www.imagemagick.org
Copyright: Copyright (C) 1999-2015 ImageMagick Studio LLC
....

***




## set up

初期状態ではディレクトリーの構成は以下になっています


```
UItest
├── README.md
├── bin /
│   ├── config/
│   │   └── setting.js //　←　編集してね
│   └── ...
└── package.json

```
* setting.jsのbrowserStackCredentialsを自身のbrowserstackのアカウントに変更してください。
```
module.exports = {
  browserStackCredentials : {
    username: "your user name",
    password: "your user password or your access key"
  },
  ..
```
* UItestのディレクトリーまで移動し、`npm install`

```
cd /your path/your path/your path/UItest
npm install
```
**success**

`node_modules`ファイルが作成されます

```
UItest
├── README.md
├── bin /
│   ├── config/
│   │   └── setting.js
│   └── ...
├── result
│   └── 00_design/
├── node_modules //　←　new!!
└── package.json 
```
***

* スクリーンショット

```
npm run screenshot
```
**success**

`result`以下に`日付`ファイルが作成さ、以下にスクリーンショットが格納されます。
5分ぐらいかかる

```
UItest
├── README.md
├── bin /
│   ├── config/
│   │   └── setting.js
│   └── ...
├── node_modules
├── package.json
└── result
    ├── 00_design
    └── 08_18 //　←　new!!
        ├── page_name_1
        │   ├── browser_1.jpg
        │   └── browser_2.jpg
        └── page_name_2
            ├── browser_1.jpg
            └── browser_2.jpg
```
***

* 比較画像

```
npm run compare
```
**success**

`result`以下の日付ファイル以下に、`compare`ファイルが作成される

```
UItest
├── README.md
├── bin /
│   ├── config/
│   │   └── setting.js
│   └── ...
├── node_modules
├── package.json
└── result
    ├── 00_design　//　←　比較元の画像を入れてください。日付以下のpage_nameとを同じ画像名にしてください
    └── 08_18 //　←　new!!
        ├── page_name_1
        │   ├── browser_1.jpg
        │   ├── browser_2.jpg
        │   └── compare/  //　←　new!!
        └── page_name_2
            ├── browser_1.jpg
            └── browser_2.jpg
            └── compare/  //　←　new!!
```
***



## config

`UI:UX/UItest/bin/config/setting.js`を編集することで、対応ブラウザーや、urlを変更することができます。

[browser option](https://www.browserstack.com/list-of-browsers-and-platforms?product=screenshots)

[browser size option](https://www.browserstack.com/screenshots/api)









