var bingClientTTS = new BingTTS.Client("YOUR_BING_SPEECH_API_KEY");
document.getElementById("speakBtn").addEventListener("click", function () {
    bingClientTTS.multipleXHR = document.getElementById("multipleXHRChk").checked;
    bingClientTTS.synthesize("Hello, my name is Mat, I'm glad to meet you");
    bingClientTTS.synthesize("How are you?");
    bingClientTTS.synthesize("Salut, je m'appelle David", BingTTS.SupportedLocales.frFR_Female);
    bingClientTTS.synthesize("Enchanté de faire votre connaissance!", BingTTS.SupportedLocales.frFR_Male);
    bingClientTTS.synthesize("Hallo, mein Name ist Frank.", BingTTS.SupportedLocales.deDE_Male);
    bingClientTTS.synthesize("Wie geht es Ihnen?", BingTTS.SupportedLocales.deDE_Female);
    bingClientTTS.synthesize("Zdravstvuite, menya zovut Kristina i ya rada vas privetstvovat'", BingTTS.SupportedLocales.ruRU_Female, () => {
        bingClientTTS.synthesize("Even more later text to speech!", BingTTS.SupportedLocales.enGB_Female);
    });
});
//# sourceMappingURL=index.js.map