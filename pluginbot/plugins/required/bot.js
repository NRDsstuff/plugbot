
/*
INSTALLING PLUGINS INSTRUCTIONS

step 1: put the plugin files (configs plugins etc) into the main bot folder

step 2: if the plugin has client at the end of it, add 

client.plugins.get(` PLUGIN NAME `).func(client) 

to bot/plugins/required/client.js (next to the template one.) 
if the plugin has bot at the end of it, repeat the steps but with 

bot.plugins.get(` PLUGIN NAME `).func(bot) 

instead of the one above.
*/

// basic constructors

const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs')

// collections

bot.plugins = new Discord.Collection

// configs

const mainConfig = require('../../mainconfig.json')

module.exports = {
  run: function run(){

    // load plugins

    const plugins = fs.readdirSync('./plugins').filter(file => file.endsWith(`bot.js`));
    for(const file of plugins){
      const plugin = require(`../${file}`);

      bot.plugins.set(plugin.name, plugin)

      bot.plugins.get(`${plugin.name}`).func(bot)
    }

    bot.login(mainConfig.token)
  }
}
