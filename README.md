# Bing Text-To-Speech Client JavaScript Lib
A small JavaScript library to call Bing Text-To-Speech API

## Prerequisites

- You need a **Web Audio** compatible browser to use this library (MS Edge, Chrome, Safari, Firefox or Opera) and it needs also to support **ES6/ES2015**: http://kangax.github.io/compat-table/es6/.
- Reference **BingTTSClient.js** in your HTML page.  
- Generate your **Bing Speech API key**:
  - Free: https://www.microsoft.com/cognitive-services/en-us/subscriptions?productId=/products/Bing.Speech.Preview
  - Paid: https://portal.azure.com/#create/Microsoft.CognitiveServices/apitype/Bing.Speech/pricingtier/S0

## Usage
### Constructor
```javascript
// By default, it will use EN-US Male voice/locale
var bingClientTTS = new BingTTS.Client("YOUR_BING_SPEECH_API_KEY");

// You can change it
var bingClientTTS = new BingTTS.Client("YOUR_BING_SPEECH_API_KEY ", BingTTS.SupportedLocales.frFR_Male);
```

### Speech with synthesize()
```javascript
// Use the synthesize function to speech, it will use the locale set in the constructor by default
// For instance, this will use the EN-US male voice/locale on both sentences
var bingClientTTS = new BingTTS.Client("YOUR_BING_SPEECH_API_KEY ");
bingClientTTS.synthesize("Hello, my name is Mat, I'm glad to meet you.");
bingClientTTS.synthesize("How are you?");
```

### Overriding locale
```javascript
// But you can override it anytime like that
var bingClientTTS = new BingTTS.Client("YOUR_BING_SPEECH_API_KEY ");
bingClientTTS.synthesize("Hello, my name is Mat.");
bingClientTTS.synthesize("Salut, je m'appelle David.", BingTTS.SupportedLocales.frFR_Female);
bingClientTTS.synthesize("Hallo, mein Name ist Frank.", BingTTS.SupportedLocales.deDE_Male);
bingClientTTS.synthesize("Zdravstvuite, menya zovut Kristina i ya rada vas privetstvovat'", BingTTS.SupportedLocales.ruRU_Female);
```

### Callback
```javascript
// If you need a block of text to be read/speech before continuing, you can use the optional callback
// This code will download & play the 3 first sentences 
// Once the 3 sentences will be speech a new final XHR will be launched
// to download & play the last sentence using EN-GB Female.
bingClientTTS.synthesize("Hallo, mein Name ist Frank.", BingTTS.SupportedLocales.deDE_Male);
bingClientTTS.synthesize("Wie geht es Ihnen?", BingTTS.SupportedLocales.deDE_Female);
bingClientTTS.synthesize("Zdravstvuite, menya zovut Kristina i ya rada vas privetstvovat'"
    , BingTTS.SupportedLocales.ruRU_Female
    , () => {
        bingClientTTS.synthesize("Even more later text to speech!", BingTTS.SupportedLocales.enGB_Female);
    }); 
```

By default, the library is sending **multiple XHR in parallel** to have better performance. But your text will be speech in the order of the calls to synthetize(). 

Still, if you’d like to serialize them to have a unique XHR being processed in background, you can change this flag to:

```javascript
bingClientTTS.multipleXHR = false;
```

It can be useful for the free version of your Bing Speech account to avoid reaching the quota of number of requests / min too quickly. 