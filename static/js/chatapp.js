const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '<img src="static/images/icons/icon.svg" />',
    isNotClicked: '<img src="static/images/icons/icon.svg" />'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}





function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#mychatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}


function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "Happy Republic Day!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#mychatbox").append(userHtml);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}    

function sendButton() {
    getResponse();
}


function getBotResponse(input) {
    //rock paper scissors
    if (input == "president of india") {
        return "Modi";
    } else if (input == "Republic day") {
        return "26 January";
    } else if (input == "omkar") {
        return "Manali";
    }

    
    let newstring = "Repulic Day of INDIA 2023: <br>1. India is celebrating its ___ republic day in the year 2023. <br>2. Who was the Chief Guest on the 26th January 2020 Republic Day Parade in India? <br>3. Who was the first chief guest on the very first Republic Day Parade of India in 1950? <br>4. Who was the chief guest on the 26th January 1958 Republic Day Parade of India? Club<br>5. From which country, the chief guest of the Republic Day Parade 2018 was invited to India? <br>6.Who was the chief guest on the 2015 Republic Day? City<br>7.Why do we celebrate the Republic Day of India? <br>8. Who takes the salute on Republic Day at Rajpath Day in New Delhi? <br>9. National Bravery Awards are given on? Club<br>10. Republic Day Parade starts from?";
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "question") {
        return(newstring)+"<br><br>Let's spread a message of Brotherhood this Republic Day.";  
    } else if (input == "1"){
        return "73rd.";
    } else if (input == "2"){
        return " President Jair Bolsonaro.";
    } else if (input == "3"){
        return "President Sukarano.";
    } else if (input == "4"){
        return "Marshal Ye Jianying.";
    }else if (input == "5"){
        return "Brunei, Indonesia, Laos.";
    }else if (input == "6"){
        return "Barack Obama.";
    }else if (input == "7"){
        return "On this day our constitution came into force.";
    }else if (input == "8"){
        return "President.";
    }else if (input == "9"){
        return "Republic Day.";
    }else if (input == "10"){
        return "Rashtrapati Bhavan.";
    }

    else {  
        return "Try asking something else!";
    }    

}
