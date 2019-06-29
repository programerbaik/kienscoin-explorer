# Explorer

A KIENS blockchain explorer web application service for [KIENSCORE Node](https://github.com/KIENS/kienscoincore-node) using the [KIENS API](https://github.com/KIENS/kienscoin-api).


## Install via SSH

```
nvm use v6
```

```
npm install git://github.com/KIENS/kienscoincore-node.git#master
cd kienscoincore-node
./bin/kienscoincore-node create explorer
cd explorer 
../bin/kienscoincore-node install kienscoin-api
../bin/kienscoincore-node install kienscoin-explorer

```

Edit kienscoincore-node.json:
```
{
  "network": "livenet",
  "port": 3001,
  "services": [
    "kienscoind",
    "kienscoin-api",
    "kienscoin-explorer",
    "web"
  ],
  "servicesConfig": {
    "kienscoin-explorer": {
      "apiPrefix": "kienscoin-api",
      "routePrefix": "kienscoin-explorer",
	  "nodemapLink": "http://explorer.kienscoin.com/en/nodemap"
    },
    "kienscoin-api": {
      "routePrefix": "kienscoin-api",
      "rateLimiterOptions": {
        "whitelist": ["123.456.12.34", "::ffff:123.456.12.34"],
        "whitelistLimit": 9999999,
        "limit": 200,
        "interval": 60000,
        "banInterval": 3600000
      },
      "db": {
        "host": "127.0.0.1",
        "port": "27017",
        "database": "kienscoin-explorer",
        "user": "",
        "password": ""
      },
      "erc20": {
        "updateFromBlockHeight": 0
      }
    },
    "kienscoind": {
      "spawn": {
        "datadir": "/home/user/.kienscoin",
        "exec": "/home/user/kienscoincore-node/bin/kienscoind"
      }
    }
  }
}
```

Edit kienscoin.conf:
```
server=1
whitelist=127.0.0.1
txindex=1
addressindex=1
timestampindex=1
spentindex=1
zmqpubrawtx=tcp://127.0.0.1:28332
zmqpubhashblock=tcp://127.0.0.1:28332
rpcallowip=127.0.0.1
rpcuser=user
rpcpassword=password
rpcport=18332
reindex=1
gen=0
addrindex=1
logevents=1
```

```
$(npm bin)/kienscoincore-node start
```


## Getting Started

To manually install all of the necessary components, you can run these commands:

```bash
npm install -g kienscoincore-node
kienscoincore-node create mynode
cd mynode
kienscoincore-node install kienscoin-api
kienscoincore-node install kienscoin-explorer
kienscoincore-node start
```

Open a web browser to `http://localhost:3001/kienscoin-explorer`

## Development

To run Insight UI locally in development mode:

Install bower dependencies:

```
$ bower install
```

To compile and minify the web application's assets:

```
$ grunt compile
```

There is a convenient Gruntfile.js for automation during editing the code

```
$ grunt
```

## Multilanguage support

Insight UI uses [angular-gettext](http://angular-gettext.rocketeer.be) for multilanguage support.

To enable a text to be translated, add the ***translate*** directive to html tags. See more details [here](http://angular-gettext.rocketeer.be/dev-guide/annotate/). Then, run:

```
grunt compile
```

This action will create a template.pot file in ***po/*** folder. You can open it with some PO editor ([Poedit](http://poedit.net)). Read this [guide](http://angular-gettext.rocketeer.be/dev-guide/translate/) to learn how to edit/update/import PO files from a generated POT file. PO file will be generated inside po/ folder.

If you make new changes, simply run **grunt compile** again to generate a new .pot template and the angular javascript ***js/translations.js***. Then (if use Poedit), open .po file and choose ***update from POT File*** from **Catalog** menu.

Finally changes your default language from ***public/src/js/config***

```
gettextCatalog.currentLanguage = 'es';
```

This line will take a look at any *.po files inside ***po/*** folder, e.g.
**po/es.po**, **po/nl.po**. After any change do not forget to run ***grunt
compile***.


## Note

For more details about the [KIENS API](https://github.com/KIENS/kienscoin-api) configuration and end-points, go to [KIENS API](https://github.com/KIENS/kienscoin-api).

## Contribute

Contributions and suggestions are welcomed at the [Explorer GitHub repository](https://github.com/KIENS/kienscoin-explorer).


## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
