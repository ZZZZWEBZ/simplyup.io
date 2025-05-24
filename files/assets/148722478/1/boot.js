window.GAME_ID = 'simplyup';
window.GAME_STORAGE_PREFIX = '';
window.GAME_VERSION = 'v1.3.2j';

if (!new URLSearchParams(window.location.search).get('noPoki') && window.PokiSDK) {

    PokiSDK.init().then(() => {
        console.log("Poki SDK successfully initialized");
        // fire your function to continue to game
    }).catch(() => {
        console.log("Initialized, but the user likely has adblock");
        // fire your function to continue to game
    });
}
