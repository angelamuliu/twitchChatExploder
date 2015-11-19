
var kappaLink = "http://static-cdn.jtvnw.net/emoticons/v1/25/1.0";
var babyLink = "https://static-cdn.jtvnw.net/emoticons/v1/22639/1.0";
var isaacLink = "https://static-cdn.jtvnw.net/emoticons/v1/86/1.0";

var smileLink = "https://static-cdn.jtvnw.net/jtv_user_pictures/chansub-global-emoticon-ebf60cd72f7aa600-24x18.png";
var cryLink = "https://static-cdn.jtvnw.net/jtv_user_pictures/chansub-global-emoticon-d570c4b3b8d8fc4d-24x18.png";
var surpriseLink = "https://static-cdn.jtvnw.net/jtv_user_pictures/chansub-global-emoticon-ae4e17f5b9624e2f-24x18.png";

function Message(name, color, message) {
    this.name = name;
    this.color = color;
    this.message = message;
}

var spamMessages = [
        new Message("Joe", "red", "<img src=\""+kappaLink+"\"/>"),
        new Message("Joe", "red", "flying ninja bomb <img src=\""+smileLink+"\"/>"),
        new Message("Joe", "red", "To <img src=\""+kappaLink+"\"/> or not to <img src=\""+kappaLink+"\"/>"),
        new Message("Joe", "red", "my girlfriend left me <img src=\""+cryLink+"\"/>"),
        new Message("Joe", "red", "<img src=\""+cryLink+"\"/><img src=\""+cryLink+"\"/><img src=\""+cryLink+"\"/>"),
        new Message("Stephen", "blue", "WOLOLOLOLOLOLOLO"),
        new Message("Stephen", "blue", "<a href=\"google.com\">Please view my stream too!</a>"),
        new Message("Stephen", "blue", "<a href=\"google.com\">Love Minecraft? Check out my channel on Youtube!</a>"),
        new Message("Stephen", "blue", "<a href=\"google.com\">This is not a virus</a>"),
        new Message("Stephen", "blue", "<a href=\"google.com\">Want free money? Click here!</a>"),
        new Message("Angela", "green", "The unseen donger is the deadliest"),
        new Message("Angela", "green", "(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄ ɴᴀᴍᴇ's ᴅᴏɴɢ. ᴊᴀᴍᴇs ᴅᴏɴɢ (̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄"),
        new Message("Angela", "green", "( ° ͜ ʖ °) REGI OP ( ° ͜ ʖ °) "),
        new Message("Angela", "green", "(/ﾟДﾟ)/ WE WANT SPELUNKY (/ﾟДﾟ)/"),
        new Message("Angela", "green", "I owe my life to Deficio. I got in a horrible car crash and I was in a coma for 6 months. One day my nurse walked in and change the twitch channel to the EU LCS and I heard Deficio casting. I awoke from my coma, got up and turned that sh!t off."),
        new Message("Angela", "green", "° ☾ ☆ ¸. ¸ 　★　 :.　 . • ○ ° ★　 .　 　.　.　　¸ .　　 ° 　¸. * ● ¸ .　...somewhere　　　° ☾ ° 　¸. ● ¸ .　　★　° :.　 . • ° 　 .　 *　:.　.in a parallel universe ● ¸ 　　　　° ☾ °☆ 　. * ¸.　　　★　★ ° . .　　　　.　☾ °☆ 　. * ● Kripparrian isn't a casual...° ☾　★ °● ¸ .　　　★　° :.　 . • ○ ° ★"),
        new Message("Kappa4Lyf", "black", "ヽ༼ຈل͜ຈ༽ﾉ RAISE YOUR DONGERS ヽ༼ຈل͜ຈ༽ﾉ "),
        new Message("Kappa4Lyf", "black", "༼ᕗຈل͜ຈ༽ᕗ Drop Bows on 'em ༼ᕗຈل͜ຈ༽ᕗ "),
        new Message("Kappa4Lyf", "black", "(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. * ・ ｡ﾟ Copypastus Totalus!! "),
        new Message("Kappa4Lyf", "black", "Ψ༼ຈل͜ຈ༽Ψ hit it with the fork Ψ༼ຈل͜ຈ༽Ψ"),
        new Message("Kappa4Lyf", "black", "My girlfriend left me <img src="),
        new Message("RoseRed", "red", " (ง ͠° ͟ʖ ͡°)ง ᴛʜɪs ɪs ᴏᴜʀ ᴄʜᴀᴛ ᴍᴏᴅs (ง ͠° ͟ʖ ͡°)ง (ง •̀_•́)ง ʏᴇᴀʜ sᴘᴀᴍ ɪᴛ! (ง •̀_•́)ง"),
        new Message("RoseRed", "red", "<img src=\""+isaacLink+"\"/>"),
        new Message("RoseRed", "red", "ノ(ಠ_ಠノ ) ʟᴏᴡᴇʀ ʏᴏᴜʀ ᴅᴏɴɢᴇʀs ノ(ಠ_ಠノ)"),
        new Message("RoseRed", "red", "༼ ºل͟º ༽ I AM A DONG ༼ ºل͟º ༽ "),
        new Message("RoseRed", "red", "─=≡Σ((( つ◕ل͜◕)つ sᴜᴘᴇʀ ᴅᴏɴɢ "),
        new Message("RoseRed", "red", "(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. * ・ ｡ﾟ Copypastus Totalus!! "),
        new Message("RoseRed", "red", " ヽヽ｀ヽ｀、ヽヽ｀ヽ｀、ヽヽ｀ヽ、ヽヽ｀ヽ｀、ヽヽ｀ヽ｀、｀、ヽヽ｀ヽ｀、ヽヽ｀ヽ｀、ヽヽ｀ヽ｀、ヽヽ｀ヽ｀、ヽヽ｀ヽ｀、ヽヽ｀ヽ｀、ヽヽ༼ຈ ل͜ຈ༽ﾉ☂ ɪᴛs ʀᴀɪɴɪɴɢ sᴀʟᴛ! ヽ༼ຈل͜ຈ༽ﾉ☂ ヽ｀ヽ｀、ヽヽ｀ヽ｀、｀ヽ｀、ヽヽ｀ヽ｀、ヽヽ｀ヽ、ヽヽ｀ヽ"),
        new Message("KingDoofier", "brown", "▄▄▄▀▀▀▄▄███▄<br />░░░░░▄▀▀░░░░░░░▐░▀██▌<br />░░░▄▀░░░░▄▄███░▌▀▀░▀█<br />░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌<br />░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄<br />░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄<br />░░░░░░░░░░░░░▐░░░░▐███████████▄<br />░░░░░le░░░░░░░▐░░░░▐█████████████▄<br />░░░░toucan░░░░░░▀▄░░░▐██████████████▄<br />░░░░░░has░░░░░░░░▀▄▄████████████████▄<br />░░░░░arrived░░░░░░░░░░░░█▀██████"),
        new Message("KingDoofier", "brown", "<img src=\""+kappaLink+"\"/><img src=\""+kappaLink+"\"/><img src=\""+kappaLink+"\"/><img src=\""+kappaLink+"\"/><img src=\""+kappaLink+"\"/>"),
        new Message("KingDoofier", "brown", "<img src=\""+kappaLink+"\"/>?"),
        new Message("KingDoofier", "brown", "!!!!!<img src=\""+kappaLink+"\"/><img src=\""+kappaLink+"\"/><img src=\""+smileLink+"\"/>!!!!!"),
        new Message("vainnoris", "orange", "*"),
        new Message("vainnoris", "orange", "Up Down Left Right"),
        new Message("vainnoris", "orange", "u suk at this game"),
        new Message("vainoris", "orange", "pls play binding of isaac or i leave"),
        new Message("vainoris", "orange", "ISAAC NOWW!!!!!!! <img src=\""+isaacLink+"\"/>"),
        new Message("vainoris", "orange", "<img src=\""+babyLink+"\"/>"),
        new Message("vainoris", "orange", "<img src=\""+babyLink+"\"/><img src=\""+babyLink+"\"/><img src=\""+babyLink+"\"/>"),
        new Message("Stefan_S04", "brown", "↓ ᶠᵘᶜᵏ ᵗʰᶦˢ ᵍᵘʸ↓ ↑ ᶠᵘᶜᵏ ʸᵒᵘ ᵗᵒᵒ ↑"),
        new Message("Stefan_S04", "brown", "fu <img src=\""+surpriseLink+"\"/>"),
        new Message("Stefan_s04", "brown", "ノ(ಠ_ಠノ ) ʟᴏᴡᴇʀ ʏᴏᴜʀ ᴅᴏɴɢᴇʀs ノ(ಠ_ಠノ)"),
        new Message("trick2G", "black", "gtg bye <img src=\""+smileLink+"\"/>"),
        new Message("trick2G", "black", "yall crazy"),
        new Message("trick2G", "black", "seeyuh"),
        new Message("trick2G", "black", "haters be hating"),
        new Message("trick2G", "black", "terribl"),
        new Message("trick2G", "black", "no <img src=\""+smileLink+"\"/>")
    ];

var casualMessages = [
    new Message("Jessica", "orange", "Hello everyone lol what did I miss"),
    new Message("Jessica", "orange", "You can do it!!! <img src=\""+smileLink+"\"/>"),
    new Message("Jessica", "orange", "lmao"),
    new Message("Ryan", "orange", "Dude I remember this game ...."),
    new Message("Ryan", "orange", "hahahaha"),
    new Message("Ryan", "orange", "omg what's happening O _ O"),
    new Message("Jeff", "blue", "welcome to the stream!"),
    new Message("Jeff", "blue", "lol!"),
    new Message("Jeff", "blue", "Hope everyone has been having a good time"),
    new Message("Barney", "red", "jfc so many spammers... = . ="),
    new Message("Barney", "red", "you seriously need to get some mods and ban some of these spambots"),
    new Message("Barney", "red", "great stream!"),
    new Message("Tim", "green", "woah I didn't think you could pull that off"),
    new Message("Tim", "green", "haha"),
    new Message("Tim", "green", "x A x"),
    new Message("Alice", "red", "good job!"),
    new Message("Alice", "red", "This game reminds me of something else..."),
    new Message("Alice", "red", "I don't really get it, but fun to watch. <img src=\""+smileLink+"\"/>"),
    new Message("Roger", "black", "Hey guys!"),
    new Message("Roger", "black", "Ohh I haven't seen this game streamed before"),
    new Message("Roger", "black", "Hope you've been well."),
    new Message("sugarcat", "orange", "meow haha"),
    new Message("sugarcat", "orange", "I just had a ton of coffee so I'm super hyper"),
    new Message("sugarcat", "orange", "hehe"),
    new Message("nano", "brown", "You're pretty good"),
    new Message("nano", "brown", "Hm"),
    new Message("nano", "brown", "Nice!")
    ];

var goodMessages_set1 = [
    new Message("Jessica", "orange", "Do you recommend this game? Looks really fun! <img src=\""+smileLink+"\"/>"),
    new Message("Jessica", "orange", "What games do you recommend that have come out recently? <img src=\""+smileLink+"\"/>"),
    new Message("Jessica", "orange", "Does this game have any DLC?"),
    new Message("Ryan", "orange", "Does this game have a competitive scene?"),
    new Message("Ryan", "orange", "Can you get this game on console as well? I only have an Xbox. Just curious."),
    new Message("Ryan", "orange", "How long have you been playing this game so far?"),
    new Message("Jeff", "blue", "Would you recommend my kids play this game? Or is it too inappropriate?"),
    new Message("Jeff", "blue", "Does this game have a good plot? Or any plot, lol."),
    new Message("Jeff", "blue", "Does this game have good replayability?"),
    new Message("Barney", "red", "How have you been? It's gotten pretty cold where I live."),
    new Message("Barney", "red", "Have you seen the new James Bond Movie yet? Spectre, I think. How is it?"),
    new Message("Barney", "red", "How often do you stream? I'm new, and I don't see a schedule. <img src=\""+smileLink+"\"/>"),
    new Message("Barney", "red", "Do you have a YouTube channel too? I'd be down to subscribe!"),
    new Message("Tim", "green", "Could you please turn down the volume? It's too loud."),
    new Message("Tim", "green", "Are you going to any conventions any time soon? I think it'd be cool to have a meetup between you and all your fans!")
    ];

var goodMessages_set2 = [
    new Message("Alice", "red", "Too loud! Turn down the volume. Sorry. <img src=\""+cryLink+"\"/>"),
    new Message("Alice", "red", "Would you recommend this game?"),
    new Message("Alice", "red", "I hate it when games are pay-to-play, or have content locked behind a paywall. Is this a game like that? : /"),
    new Message("Roger", "black", "Would you say this game is casual or competitive? I already play league, so I don't know if I have time to dedicate to another huge game lol"),
    new Message("Roger", "black", "You sound kind of sick. Are you okay? <img src=\""+surpriseLink+"\"/>"),
    new Message("Roger", "black", "Which timezone do you live in? It's actually really early for me... I just want to know if I have to wake up early all the time to catch your stream."),
    new Message("Jeff", "blue", "Is this game PC only?"),
    new Message("Jeff", "blue", "Have you played Fallout 4 yet?"),
    new Message("Jeff", "blue", "Do you have a Youtube channel?"),
    new Message("sugarcat", "orange", "When was the first time you played this game?"),
    new Message("sugarcat", "orange", "Does this game have a worthwhile plot?"),
    new Message("sugarcat", "orange", "How often do you stream?"),
    new Message("nano", "brown", "I'm your biggest fan! How can I support the stream?"),
    new Message("nano", "brown", "What sort of music do you like?"),
    new Message("nano", "brown", "What would you give this game on a scale of 1 to 100?")
    ];
