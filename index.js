const 
    SlackBot = require("slackbots"),
    config = require("./config.json"),
    token = config.token,
    channel = "slack-bot-testing",
    shuffleFile = require('./shuffle.js'),
    shuffleFunc = shuffleFile.shuffle,
    students = shuffleFile.students

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
        case "pairs":
            console.log('hello pairs');
            sendPairs();
            break;
        default:
            return;
        }
    }

function sendGreeting() {
    let params = {
        icon_emoji: ':epic-ride:'
    };
    let greeting = getGreeting();
    bot.postMessageToChannel(channel, greeting, params);
    }

function getGreeting() {
    let greetings = [
        "hello!",
        "hi there!",
        "cheerio!",
        "how do you do!",
        "¡hola!"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
    }

function sendPairs(){
    let params = {
        icon_emoji: ':epic-ride:'
    };
    let groups = shuffleFunc(students, 5);
    console.log(groups);
    bot.postMessageToChannel(channel, response , params)
}