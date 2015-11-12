
var kappaLink = "http://static-cdn.jtvnw.net/emoticons/v1/25/1.0";

function Message(name, color, message) {
    this.name = name;
    this.color = color;
    this.message = message;
}

var spamMessages = [
        new Message("Joe", "red", "<img src="+kappaLink+"/>"),
        new Message("Joe", "red", "flying ninja bomb"),
        new Message("Stephen", "blue", "WOLOLOLOLOLOLOLO"),
        new Message("Stephen", "blue", "<a href=\"google.com\">Please view my stream too!</a>"),
        new Message("Angela", "green", "The unseen donger is the deadliest"),
        new Message("Angela", "green", "(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄ ɴᴀᴍᴇ's ᴅᴏɴɢ. ᴊᴀᴍᴇs ᴅᴏɴɢ (̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄"),
        new Message("Angela", "green", "( ° ͜ ʖ °) REGI OP ( ° ͜ ʖ °) "),
        new Message("Angela", "green", "(/ﾟДﾟ)/ WE WANT SPELUNKY (/ﾟДﾟ)/"),
        new Message("Angela", "green", "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo."),
        new Message("Angela", "green", "You think this takes concentration?  Try healing in World of Warcraft after someone in the group just feared the entire room and the stupid death knight has stolen all the aggro from the tank, all whilst trying to reach deep into the bag for the extra cheesy dorritos.  Now THAT is a skill.  This is just a bunch of tap dancing in tight clothes with a room full of genelemen looking intently at you.. uhh no thanks.  Ill take the fame of being the #1 ranked healer in all of Azeroth."),
        new Message("Angela", "green", "I owe my life to Deficio. I got in a horrible car crash and I was in a coma for 6 months. One day my nurse walked in and change the twitch channel to the EU LCS and I heard Deficio casting. I awoke from my coma, got up and turned that sh!t off."),
        new Message("Angela", "green", "° ☾ ☆ ¸. ¸ 　★　 :.　 . • ○ ° ★　 .　 　.　.　　¸ .　　 ° 　¸. * ● ¸ .　...somewhere　　　° ☾ ° 　¸. ● ¸ .　　★　° :.　 . • ° 　 .　 *　:.　.in a parallel universe ● ¸ 　　　　° ☾ °☆ 　. * ¸.　　　★　★ ° . .　　　　.　☾ °☆ 　. * ● Kripparrian isn't a casual...° ☾　★ °● ¸ .　　　★　° :.　 . • ○ ° ★"),
        new Message("Kappa4Lyf", "black", "ヽ༼ຈل͜ຈ༽ﾉ RAISE YOUR DONGERS ヽ༼ຈل͜ຈ༽ﾉ "),
        new Message("RoseRed", "red", " (ง ͠° ͟ʖ ͡°)ง ᴛʜɪs ɪs ᴏᴜʀ ᴄʜᴀᴛ ᴍᴏᴅs (ง ͠° ͟ʖ ͡°)ง (ง •̀_•́)ง ʏᴇᴀʜ sᴘᴀᴍ ɪᴛ! (ง •̀_•́)ง"),
        new Message("KingDoofier", "brown", "▄▄▄▀▀▀▄▄███▄<br />░░░░░▄▀▀░░░░░░░▐░▀██▌<br />░░░▄▀░░░░▄▄███░▌▀▀░▀█<br />░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌<br />░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄<br />░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄<br />░░░░░░░░░░░░░▐░░░░▐███████████▄<br />░░░░░le░░░░░░░▐░░░░▐█████████████▄<br />░░░░toucan░░░░░░▀▄░░░▐██████████████▄<br />░░░░░░has░░░░░░░░▀▄▄████████████████▄<br />░░░░░arrived░░░░░░░░░░░░█▀██████"),
        new Message("KingDoofier", "brown", "<img src="+kappaLink+"/><img src="+kappaLink+"/><img src="+kappaLink+"/><img src="+kappaLink+"/><img src="+kappaLink+"/>"),

        new Message("vainnoris", "orange", "*"),
        new Message("vainnoris", "orange", "Up Down Left Right"),
        new Message("vainnoris", "orange", "u suk at this game"),
        new Message("vainoris", "orange", "pls play binding of isaac or i leave"),
        new Message("Stefan_S04", "brown", "↓ ᶠᵘᶜᵏ ᵗʰᶦˢ ᵍᵘʸ↓ ↑ ᶠᵘᶜᵏ ʸᵒᵘ ᵗᵒᵒ ↑"),
    ];

