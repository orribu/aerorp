// JavaScript Document
//GLOBAL VARIABLES

var Discord = require("discord.js");
var schedule = require('node-schedule');

var bot =  new Discord.Client();

var sun;

//THE HAUNTING SUNSET	


bot.on('ready', () => {
	// change channel name to name of channel or just set to equal the channel ID if you already know it.
	var channel = bot.channels.get("name", "sunshine-park").id; 
	var channel2 = bot.channels.get("name", "the-beach-south-shore").id;
	var channel3 = bot.channels.get("name", "the-carnival").id;
	var channel4 = bot.channels.get("name", "lovely-lane").id;
	var channel5 = bot.channels.get("name", "star-circle").id;
	
	
	var rule = new schedule.RecurrenceRule(); // Creates new Recurrence Rule
	rule.minute = 0;
	rule.hour = 20; // Hours are based on your system's time.
	
	
	//Channel 1
	var i = schedule.scheduleJob(rule, function() {
		bot.channels.get("id", channel).sendMessage("**The Sun has set! Our hosts ask that everyone stay indoors.**");
		sun = 0;
	});
	
	//Channel 2

	var j = schedule.scheduleJob(rule, function() {
		bot.channels.get("id", channel2).sendMessage("**The Sun has set! Our hosts ask that everyone stay indoors.**");
	});

	//Channel 3

	var k = schedule.scheduleJob(rule, function() {
		bot.channels.get("id", channel3).sendMessage("**The Sun has set! Our hosts ask that everyone stay indoors.**");
	});
	
	//Channel 4

	var l = schedule.scheduleJob(rule, function() {
		bot.channels.get("id", channel4).sendMessage("**The Sun has set! Our hosts ask that everyone stay indoors.**");
	});
	
	//Channel 5

	var m = schedule.scheduleJob(rule, function() {
		bot.channels.get("id", channel5).sendMessage("**The Sun has set! Our hosts ask that everyone stay indoors.**");
	});


//THE HAUNTING SUNRISE

	var rule2 = new schedule.RecurrenceRule();
	rule2.minute = 0;
	rule2.hour = 5;
	
	//Channel 1
	var i = schedule.scheduleJob(rule2, function() {
		bot.channels.get("id", channel).sendMessage("**The Sun has risen! It's safe to go outside.**");
		sun = 1;
	});
	
	//Channel 2

	var j = schedule.scheduleJob(rule2, function() {
		bot.channels.get("id", channel2).sendMessage("**The Sun has risen! It's safe to go outside.**");
	});

	//Channel 3

	var k = schedule.scheduleJob(rule2, function() {
		bot.channels.get("id", channel3).sendMessage("**The Sun has risen! It's safe to go outside.**");
	});
	
	//Channel 4

	var l = schedule.scheduleJob(rule2, function() {
		bot.channels.get("id", channel4).sendMessage("**The Sun has risen! It's safe to go outside.**");
	});
	
	//Channel 5

	var m = schedule.scheduleJob(rule2, function() {
		bot.channels.get("id", channel5).sendMessage("**The Sun has risen! It's safe to go outside.**");
	});


	/* For different announcements:
	rule.hour = 8; // Set different time. Use array like above for multiple hours.

	var i = schedule.scheduleJob(rule, function() {
		bot.channels.get("id", channel).sendMessage("Announcement at 8AM");
	})

	// Repeat for more announcements
	*/

	console.log("Bot is ready.");
	
		});
	
bot.on("message", function(message)
{
	if(message.content === "!haunttime"){
		if (sun = 0){
			bot.reply(message, "It's pretty dark out. Are you sure you don't want to stay inside?"); }
			else {
				bot.reply(message,"The sun hasn't set yet. You're good to go!");	}
				}
});

bot.on("message", function(message){
	if(message.content === "!missing"){ bot.reply(message,"**MISSING PERSON(s): Elliot, presumed dead. Cassius Colton, Last seen in Sunshine Park. Meridith Limone-Hunter, presumed dead. END OF ENTRY.**");}
	});


bot.on("message", function(message){ if(message.content === "!manual"){bot.reply(message,"http://bit.ly/2aAhY5u");}
});

bot.on("message", function(message){ if(message.content === "!shop"){bot.reply(message,"https://goo.gl/forms/lvNlcQ8m4sUD2xcC3");}
});

bot.on("message", function(message){ if(message.content === "!devart"){bot.reply(message,"http://aether-resort.deviantart.com");}
});

bot.on("message", function(message){ if(message.content === "!map"){bot.reply(message,"http://sta.sh/01l4s6j6zkwy");}
});
bot.login("mail@twistedfates.net", "Asho1992!");