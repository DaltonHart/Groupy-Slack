const 
    SlackBot = require("slackbots"),
    // config = require("./config.json"),
    token = process.env.ENV_TOKEN,
    channel = "slack-bot-testing",
    shuffleFile = require('./shuffle.js'),
    shuffleFunc = shuffleFile.shuffle,
    students = shuffleFile.students

let params = {
    icon_emoji: ':epic-ride:'
    };

let bot = new SlackBot({
    token: token,
    name: "Groupy"
    });

bot.on("start", function() {
    console.log("Hello world!");
    let channels = bot.getChannels()
    let arr = channels._value.channels
    var result = arr.filter(obj => {
        return obj.name === channel
      })
    // console.log(result);
    });

bot.on("message", (data) => {
    
    if (data.type !== "message") {
        return;
    }
    handleMessage(data.text);
    })

handleMessage = (message) => {
    switch(message) {
        case "hi":
        case "hello":
            sendGreeting();
            break;
        case "groupy pairs":
            console.log('hello pairs');
            sendPairs();
            break;
        case "groupy 3":
            console.log('hello pairs');
            sendThree();
            break;
        default:
            return;
        }
    }

sendGreeting = () => {
    let greeting = getGreeting();
    bot.postMessageToChannel(channel, greeting, params);
    }

getGreeting = () => {
    let greetings = [
        "hello!",
        "hi there!",
        "cheerio!",
        "how do you do!",
        "¡hola!"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
    }

sendPairs = async () => {
    let response = `Here are your Groups!`
    await bot.postMessageToChannel(channel,response , params);
    await groupsOutput(5);
}

groupsOutput = (num) => {
    
    let groups = shuffleFunc(students, num);

    Object.keys(groups).forEach(e => {
        let response = `${groups[e]}`
        bot.postMessageToChannel(channel, response, params);
    });
}

sendThree = async () => {
    let response = `Here are your Groups!`
    await bot.postMessageToChannel(channel,response , params);
    await groupsOutput(3);
}
