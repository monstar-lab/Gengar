# 目次

#### [1. 概略](#概略)

#### [2. インストール](#インストール)

#### [3. 実行](#実行)

#### [4. 設定](#設定)


## 概略
UIテストのセットアップに関して、説明します。  
セットアップが完了すると、指定したurlを指定したブラウザーでスクリーンショットを作成できます。  
[BrowserStack API](https://www.browserstack.com/screenshots/api)を使用するため、[BrowserStack](https://www.browserstack.com)のアカウントを取得してください。

以下の技術を使用しています。

##### [Node.js](https://nodejs.org/en/)

サーバーサイドのJavaScriptです。

##### [BrowserStack API](https://www.browserstack.com/screenshots/api)

APIを利用してスクリーンショットをとっています。

##### [npm browserstack](https://www.npmjs.com/package/browserstack)

APIを使用するためのnode moduleです。

##### [ImageMagick](http://www.imagemagick.org/script/)

画像の重ね合わせに使用しています。

##### [Docker](https://www.docker.com/)

実行環境を素早く構築するため使用しています。


## インストール

* Docker
* Gengar

***

##### [Docker](https://www.docker.com/)

[Docker for Mac](https://docs.docker.com/docker-for-mac/) (推奨) や [Docker Toolbox](https://www.docker.com/products/docker-toolbox) をインストールして`docker`コマンドを使用可能にします。

**Success**

`docker`コマンドが使用可能になります。

```
$ docker -v
Docker version 1.12.1, build 23cf638, experimental
```

***

##### [Ganger](https://github.com/monstar-lab/Gengar)

Gengar本体を任意のフォルダに[ダウンロード](https://github.com/monstar-lab/Gengar/archive/master.zip)して解凍します。

```
$ curl -LO https://github.com/monstar-lab/Gengar/archive/master.zip
$ unzip master.zip
$ rm master.zip
$ cd Gengar-master/
$ ls -l
README.md	UItest		compare		gengar		install		screenshot
```

***

## 実行

初期状態では下記のようなフォルダ構成になっています。

```
UItest/
├── README.md
├── bin/
│   ├── config/
│   │   └── .setting.js
│   └── ...
├── result
│   └── 00_design/
└── package.json
```

`install`を実行してGengarに必要な設定を行います。

```
$ ./install [or ./gengar -i]
BrowserStack Username ?> ********
BrowserStack Access Key ?> ****************
...
```

**success**

`bin/config/setting.js`と`node_modules/`が作成されます。

```
UItest/
├── README.md
├── bin/
│   ├── config/
│   │   ├── .setting.js
│   │   └── setting.js ← new!
│   └── ...
├── result
│   └── 00_design/
├── node_modules/ ← new!
└── package.json
```

***

#### スクリーンショットを作成する

```
$ ./screenshot [or ./gengar -s]
```

**success**

`result/`以下に`日付`フォルダが作成され、スクリーンショットが格納されます。  
※1枚当たり1分程かかります。

```
UItest/
├── README.md
├── bin/
│   ├── config/
│   │   └── setting.js
│   └── ...
├── node_modules/
├── package.json
└── result/
    ├── 00_design/
    └── MM_DD/ ← new!
        ├── page_name_1/
        │   ├── browser_1.jpg
        │   └── browser_2.jpg
        └── page_name_2/
            ├── browser_1.jpg
            └── browser_2.jpg
```

***

#### 比較画像を作成する

```
$ ./compare [or ./gengar -c]
```

**success**

`result/`以下の`日付`フォルダに`compare`フォルダが作成されます。

```
UItest/
├── README.md
├── bin/
│   ├── config/
│   │   └── setting.js
│   └── ...
├── node_modules/
├── package.json
└── result/
    ├── 00_design/ ← 比較元の画像を入れてください。日付フォルダのpage_nameとを同じ画像名にしてください。
    └── MM_DD/
        ├── page_name_1/
        │   ├── compare/ ← new!
        │   ├── browser_1.jpg
        │   └── browser_2.jpg
        └── page_name_2/
            ├── compare/ ← new!
            └── browser_1.jpg
            └── browser_2.jpg
```

***

## 設定

`bin/config/setting.js`を編集することで、対応ブラウザや、URLを変更することができます。

[Browser option](https://www.browserstack.com/list-of-browsers-and-platforms?product=screenshots)  
[Browser size option](https://www.browserstack.com/screenshots/api)
