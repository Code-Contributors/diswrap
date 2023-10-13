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

