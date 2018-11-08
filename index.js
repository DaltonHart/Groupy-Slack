const 
    SlackBot = require("slackbots"),
    config = require("./config.json"),
    token = config.token,
    channel = "slack-bot-testing"

let bot = new SlackBot({
    token: token,
    name: "groupy"
    });

bot.on("start", function() {
    bot.postMessageToChannel(channel, "Hello world!");
    console.log("Hello world!");
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
    var greeting = getGreeting();
    bot.postMessageToChannel(channel, greeting);
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