const 
    SlackBot = require("slackbots"),
    config = require("./config.json"),
    token = config.token,
    channel = "slack-bot-testing"

let bot = new SlackBot({
    token: token,
    name: "Groupy"
    });

bot.on("start", function() {
    var params = {
        icon_url: '/images/icon.png'
    };
    console.log("Hello world!");
    let channels = bot.getChannels()
    let arr = channels._value.channels
    var result = arr.filter(obj => {
        return obj.name === channel
      })
    console.log(result);
    });

bot.on("message", function(data) {
    
    if (data.type !== "message") {
        return;
    }
    handleMessage(data.text);
    })

function handleMessage(message) {
    switch(message) {
        case "hi":
        case "hello":
            sendGreeting();
            break;
        default:
            return;
        }
    }

function sendGreeting() {
    var params = {
        icon_emoji: ':epic-ride:'
    };
    var greeting = getGreeting();
    bot.postMessageToChannel(channel, greeting, params);
    }

function getGreeting() {
    var greetings = [
        "hello!",
        "hi there!",
        "cheerio!",
        "how do you do!",
        "¡hola!"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
    }