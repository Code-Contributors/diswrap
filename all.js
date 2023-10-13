__exportStar(require("./d.js.exports"), exports);
/**
 * ### The TextInput Class
 * With this class you can create TextInputs for your Bot
 * @example
 * new TextInput()
 * .ID('customid') // sets an CustomID to the TextInput
 * .Label('Label') // sets an Label to the TextInput
 * .Placeholder('Placeholder') // sets an Placeholder to the TextInput
 * //more goes here
 * @param TextI - TextI
 */
class TextInput extends diswrap_util_1.TextInput {
    /**
     * Sets an CustomID to the TextInput
     * @param customID - The CustomID
     * @returns
     */
    ID(customID) {
        return super.setCustomId(customID);
    }
    /**
     * Sets an Label to the TextInput
     * @param label - The Label to use
     * @returns
     */
    Label(label) {
        return super.setLabel(label);
    }
    /**
     * Sets an Placholder to the TextInput
     * @param placeholder - The Placeholder of the TextInp.
     * @returns
     */
    Placeholder(placeholder) {
        return super.setPlaceholder(placeholder);
    }
    /**
     * Is the TextInput required? -> true or false
     * @param required - true or false
     * @returns
     */
    Required(required) {
        return super.setRequired(required);
    }
    /**
     * Sets an Style to the TextInput
     * @param style - The TextInputStyle
     * @returns
     */
    Style(style) {
        return super.setStyle(style);
    }
    /**
     * Sets an Value to the TextInp.
     * @param value - The TextInput Value
     * @returns
     */
    Value(value) {
        return super.setValue(value);
    }
}
exports.TextInput = TextInput;
/**
 * ### The Attachment Class
 * With this class you can easily create Attachments for your Bot/Embed
 * @example
 * new Attachment()
 * .Name('attachment name') // sets an name to the attachment
 * .Description('attachment description') // sets an description to the attachment
 * .File('file name') // sets an file to the attachment
 * @param Atm - Atm
 */
class Attachment extends diswrap_util_2.Attachment {
    /**
     * Sets an Description to the Attachment
     * @param description - The Description
     * @returns
     */
    Description(description) {
        return super.setDescription(description);
    }
    /**
     * Sets an File to the Attachment
     * @param attachment - The Attachment
     * @param name - The Name
     * @returns
     */
    File(attachment, name) {
        return super.setFile(attachment);
    }
    /**
     * Sets an Name to the Attachment
     * @param name - The Name
     * @returns
     */
    Name(name) {
        return super.setName(name);
    }
}
exports.Attachment = Attachment;
/**
 * ### The Permissions Class
 * With this class, you can easily Manage or Check Permissions of a User
 * @param Perms - The Perms
 */
class Permissions extends diswrap_util_3.Permissions {
    /**
     * Add Permissions
     * @param bits - The Bits
     * @returns
     */
    addPermission(...bits) {
        return super.add(bits);
    }
    /**
     * Check if the User has a provided Permission
     * @param permission - The Permission(s)
     * @param checkAdmin - Check if the User is Admin
     * @returns
     */
    hasPermissions(permission, checkAdmin) {
        return super.has(permission, checkAdmin);
    }
    /**
     * Remove Permissions
     * @param bits - The Bits
     * @returns
     */
    removePermission(...bits) {
        return super.remove(bits);
    }
    /**
     * Check if the User is missing Permissions
     * @param bits - The Bits
     * @param checkAdmin Check if the User is Admin
     * @returns
     */
    missingPermission(bits, checkAdmin) {
        return super.missing(bits, checkAdmin);
    }
    /**
     * Freeze
     * @returns
     */
    freeze() {
        return super.freeze();
    }
}
exports.Permissions = Permissions;
/**
 * ### The MessageManager
 * With this class you can easily manage Messages.
 * @param MManager - diswrap-util MessageManager
 */
class MessageManager extends diswrap_util_4.MessageManager {
    /**
     * Pin a Message in a channel
     * @param message - The Message to pin
     * @param reason - The Reason to pin the Message
     * @returns
     */
    pinMessage(message, reason) {
        return super.pin(message);
    }
    /**
     * Delete a Message in a channel
     * @param message - The Message to delete
     * @returns
     */
    deleteMessage(message) {
        return super.delete(message);
    }
    /**
     * React to a Message
     * @param message - The Message to React to
     * @param emoji - The Emoji to react
     * @returns
     */
    reactToMessage(message, emoji) {
        return super.react(message, emoji);
    }
    /**
     *
     * @param message - The Message to unpin
     * @param reason - The Reason to unpin the Message
     * @returns
     */
    unpinMessage(message, reason) {
        return super.unpin(message, reason);
    }
}
exports.MessageManager = MessageManager;
/**
 * ### The ThreadManager
 * With this class you can easily Manage Threads
 */
class ThreadManager extends diswrap_util_5.ThreadManager {
    /**
     * Checks if the Thread is activ
     * @param cache - The Cache
     * @returns
     */
    fetchActive(cache) {
        return super.fetchActive(cache);
    }
    /**
     * Checks if the Thread is archived
     * @param options - The options
     * @param cache - The Cache
     * @returns
     */
    fetchArchived(options, cache) {
        return super.fetchArchived(options, cache);
    }
}
exports.ThreadManager = ThreadManager;
/**
 * ### Modal Class
 * This is the Modal Class. With this you can create Modals for your Bot
 * @example
 * const modal = new Modal()
 * .ID('customid') //sets a customid for this modal
 * .Title('Title') //sets the title for this modal
 * .Components(
 *      //here you can add components
 *  )
 *
 *
 */
class Modal extends diswrap_builders_1.Modal {
    /**
     * - The Components to add
     * @param components - The Components
     * @returns
     */
    Components(...components) {
        return super.addComponents(components);
    }
    /**
     * - This sets an CustomID to your Modal
     * @param id - The CustomID
     * @returns
     */
    ID(id) {
        return super.setCustomId(id);
    }
    /**
     * This sets a Title to your Modal
     * @param title - The Title to add
     * @returns
     */
    Title(title) {
        return super.setTitle(title);
    }
}
exports.Modal = Modal;
/**
 * ### The Button Class
 * With this you can create Buttons for your Bot
 * @example
 * new ButtonBuilder();
 * .Emoji('ðŸ”¥') //sets an Emoji to the button
 * .ID('customid') //sets an CustomID for the button
 * .Label('Button Label') //sets an Label for the button
 * .Style(ButtonStyles.Primary) //sets the Style of the Button
 * .URL('button url') //sets the URL to the button if the Style is set to Link
 *
 * @param BBuilder
 */
class Button extends diswrap_builders_2.Button {
    /**
     * This sets an Emoji to the Button
     * @param emj - The Emoji to add
     * @returns
     */
    Emoji(emj) {
        return super.setEmoji(emj);
    }
    /**
     * This sets an CustomID for the Button
     * @param id - The CustomID
     * @returns
     */
    ID(id) {
        return super.setCustomId(id);
    }
    /**
     * This sets an Label to the Button
     * @param label - The Label of the Button
     * @returns
     */
    Label(label) {
        return super.setLabel(label);
    }
    /**
     * This sets an Style for the Button
     * @param bstyle - The Style of The Button
     * @returns
     */
    Style(bstyle) {
        return super.setStyle(bstyle);
    }
    /**
     * This sets an URL for the Button. ðŸ›‘ This only works if you set the Style to "Link"
     * @param url - The URL for the Button
     * @returns
     */
    URL(url) {
        return super.setURL(url);
    }
}
exports.Button = Button;
/**
 * ### The Embed Class
 * With this you can create fully customizable Embeds for your Bot
 * @example
 * new Embed()
 * .Title('Embed Title') // sets the title for the embed
 * .Description('Embed Description') // sets a description for the embed
 * .Color('Green') //sets the color of the embed
 * .Author({ name: 'Author Name', iconURL: 'Author Icon URL' }) // sets a author for the embed
 * .Footer({ text: 'Footer Text', iconURL: 'Footer Icon URL' }) // sets an footer for the embed
 * .Timestamp() //sets a timestamp
 * // More goes here
 */
class Embed extends diswrap_builders_3.Embed {
    /**
     * Sets an Author for the Embed
     * @example
     * .Author({ name: 'Author Name', iconURL: 'Author Icon URL' })
     * @param options - The Author Options
     * @returns
     */
    Author(options) {
        return super.setAuthor(options);
    }
    /**
     * Sets an Color for the Embed
     * @param color - The Color
     * @returns
     */
    Color(color) {
        return super.setColor(color);
    }
    /**
     * Sets an Description for the Embed
     * @param description - The Description
     * @returns
     */
    Description(description) {
        return super.setDescription(description);
    }
    /**
     * Sets an Footer for the Embed
     * @example
     * .Footer({ text: 'Footer Text', iconURL: 'Footer Icon URL' })
     * @param options - The Footer Options
     * @returns
     */
    Footer(options) {
        return super.setFooter(options);
    }
    /**
     * Sets an Image for the Embed
     * @param url - The Image URL
     * @returns
     */
    Image(url) {
        return super.setImage(url);
    }
    /**
     * Sets an Thumbnail for the Embed
     * @param url - The Thumbnail URL
     * @returns
     */
    Thumbnail(url) {
        return super.setThumbnail(url);
    }
    /**
     * Sets an Timestamp to the Embed
     * @param timestamp - The Timestamp
     * @returns
     */
    Timestamp(timestamp) {
        return super.setTimestamp(timestamp);
    }
    /**
     * Sets an Title to Embed
     * @param title - The Title
     * @returns
     */
    Title(title) {
        return super.setTitle(title);
    }
    /**
     * Sets an URL to the Embed Title
     * @param url - The Title URL
     * @returns
     */
    TitleURL(url) {
        return super.setURL(url);
    }
    /**
     * Sets an new Field to the Embed
     * @example
     * .newField({ name: 'Field Name', value: 'Field Value', inline: false })
     * @param name - The Field Name
     * @param value - The Field Value
     * @param inline - Inline? -> true or false
     * @returns
     */
    newField(name, value, inline) {
        return super.setFields({ name, value, inline });
    }
}
exports.Embed = Embed;
/**
 * ### The Select Menu Class
 * With this you can create SelectMenus for your Bot
 * @example
 * new SelectMenu()
 * .ID('customid') // sets an customid for the selectmenu
 * .Placeholder('Placeholder') // sets an placeholder to the selectmenu
 * // More goes here
 */
class SelectMenu extends diswrap_builders_4.SelectMenu {
    /**
     * Sets an CustomID to the SelectMenu
     * @param id - The CustomID
     * @returns
     */
    ID(id) {
        return super.setCustomId(id);
    }
    /**
     * Disabled? -> true or false
     * @param disabled - true or false
     * @returns
     */
    Disabled(disabled) {
        return super.setDisabled(disabled);
    }
    /**
     * Sets an Placeholder to the SelectMenu
     * @param plh - The Placeholder
     * @returns
     */
    Placeholder(plh) {
        return super.setPlaceholder(plh);
    }
    /**
     * Sets an MaxValue to the SelectMenu
     * @param value - The Max Value
     * @returns
     */
    maxValues(value) {
        return super.setMaxValues(value);
    }
    /**
     * Sets an MinValue to the SelectMenu
     * @param value - The Min Value
     * @returns
     */
    minValues(value) {
        return super.setMinValues(value);
    }
    /**
     * Sets Options to the SelectMenu
     * @param options - The SelectMenu Options
     * @returns
     */
    addOptions(...options) {
        return super.setOptions(options);
    }
}
exports.SelectMenu = SelectMenu;
/**
 * ### The ActionRow Class
 * With this you can create ActionRows for your Bot
 * @example
 * new ActionRow()
 * .Components(
 *    // add components
 * )
 */
class ActionRow extends diswrap_builders_5.ActionRow {
    /**
     * Sets Componetns to the ActionRow
     * @param components - The Components
     * @returns
     */
    Components(...components) {
        return super.addComponents(components);
    }
}
exports.ActionRow = ActionRow;
/**
 * ### The BotClient
 * Create your DiscordBot with this Class!
 * @example JavaScript
 * const { BotClient, BotIntents, ActivityTypes } = require('diswrap');
 * const bot = new BotClient({
 *    intents: [BotIntents.MessageContent, BotIntents.Guilds, BotIntents.GuildMessages],
 *    token: 'DISCORD BOT TOKEN',
 * });
 *
 * bot.setPresence({
 *   status: 'idle',
 *   activities: [{ name: 'with diswrap', type: ActivityTypes.Playing }],
 * });
 *
 * bot.readyConsole({ output: 'The Bot is online!' });
 *
 * bot.command({ prefix: '!', name: 'ping', reply: 'Ping Pong!' });
 *
 */
class BotClient {
    constructor(options) {
        this.client = new d_js_exports_3.Client({ intents: options.intents });
        this.cogs = new Map();
        this.client.login(options.token);
    }
    /**
     * This sets an Status to your Bot
     * @example JavaScript
     * .setStatus('idle');
     * @param status - The Status
     */
    setStatus(status) {
        this.client.once('ready', () => {
            this.client.user?.setStatus(status);
        });
    }
    /**
     * This sets an Activity to your Bot
     * @example JavaScript
     * .setActivity({ name: 'with diswrap', type: Activity.Playing });
     * @param activity - The Activity
     */
    setActivity(activity) {
        this.client.once('ready', () => {
            this.client.user?.setActivity(activity);
        });
    }
    /**
     * This sets an Presence to your Bot (Status & Activity)
     * @example JavaScript
     * .setPresence({
     *    status: 'idle',
     *    activities: [{ name: 'with diswrap', type: ActivityTypes.Playing }],
     * });
     * @param presence - The PresenceData
     */
    setPresence(presence) {
        this.client.once('ready', () => {
            this.client.user?.setPresence(presence);
        });
    }
    /**
     * Register an event handler for a custom event.
     * @param eventName - The name of the custom event to listen for.
     * @param handler - The event handler function.
     */
    event(eventName, handler) {
        /**
         * #### eventMapping
         * This simplifies the CEvents.
         */
        const eventMapping = {
            onMessage: 'messageCreate',
            onReady: 'ready',
            interaction: 'interactionCreate',
            err: 'error',
            channelCreate: 'channelCreate',
            channelDelete: 'channelCreate',
            channelUpdate: 'channelUpdate',
            roleCreate: 'roleCreate',
            roleDelete: 'roleDelete',
            roleUpdate: 'roleCreate',
            debug: 'debug',
        };
        this.client.on(eventMapping[eventName], handler);
    }
    /**
     * Load a cog (component) into the bot.
     * @example JavaScript
     * .loadCog('myCog', new MyCogClass());
     * else:
     * .loadCog('myCog', require('./folder/of/the/cog'));
     * @param name - The Name of the Cog
     * @param cogInstance - An instance of the cog class.
     */
    loadCog(name, cogInstance) {
        if (this.cogs.has(name)) {
            console.error(`Cog with name "${name}" is already loaded.`);
        }
        else {
            this.cogs.set(name, cogInstance);
            console.log(`Cog "${name}" loaded.`);
        }
    }
    /**
     * Unload a Cog (component) from the bot
     * @example JavaScript
     * .unloadCog('myCog');
     * @param name - The Name of the Cog to unload
     */
    unloadCog(name) {
        if (this.cogs.has(name)) {
            this.cogs.delete(name);
            console.log(`Cog "${name}" unloaded.`);
        }
        else {
            console.error(`Cog with name "${name}" is not loaded.`);
        }
    }
    /**
     * Create and run SlashCommands for your Bot
     * @example
     * .newSlashCommand({ name: 'ping', description: 'Ping Pong!', reply: 'Lets play Ping Pong!' });
     * @param slashcommandoptions - The SlashCommandOptions
     * @returns
     */
    newSlashCommand(slashcommandoptions) {
        if (!slashcommandoptions.reply)
            return console.error('You must set a Reply Message to the SlashCommand!');
        if (!slashcommandoptions.name)
            return console.error('You must set a Name to the SlashCommand!');
        if (!slashcommandoptions.description)
            return console.error('You must set a Description to the SlashCommand!');
        new d_js_exports_1.SlashCommandBuilder()
            .setName(slashcommandoptions.name)
            .setDescription(slashcommandoptions.description);
        this.client.on('interactionCreate', async (interaction) => {
            if (!interaction.isChatInputCommand())
                return;
            if (interaction.commandName === slashcommandoptions.name) {
                await interaction.reply({ content: slashcommandoptions.reply, components: [slashcommandoptions.componets], embeds: [slashcommandoptions.componets] });
            }
        });
    }
    /**
     * Run a messageCreate Event
     * @example
     * .onMessage({ trigger: 'ping', reply: 'Ping Pong!' });
     * @param msg - The Message
     * @returns
     */
    onMessage(msg) {
        if (!msg.trigger)
            return console.error('You must set a Trigger to the Message');
        if (!msg.reply)
            msg.reply = 'Default Reply';
        this.client.on('messageCreate', async (message) => {
            if (message.content === msg.trigger) {
                await message.reply(msg.reply);
            }
        });
    }
}
exports.BotClient = BotClient;

//.d.ts Map
{"version":3,"file":"main.d.ts","sourceRoot":"","sources":["../main/main.ts"],"names":[],"mappings":"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"}
