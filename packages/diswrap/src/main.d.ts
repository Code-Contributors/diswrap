/// <reference types="node" />
export * from 'diswrap-builders';
import { TextInputStyle } from './d.js.exports';
import { BufferResolvable } from './d.js.exports';
import { BitFieldResolvable } from './d.js.exports';
import { PermissionResolvable } from './d.js.exports';
import { MessageResolvable } from './d.js.exports';
import { BitField } from './d.js.exports';
import { EmojiIdentifierResolvable } from './d.js.exports';
import { FetchedThreads } from './d.js.exports';
import { FetchedThreadsMore } from './d.js.exports';
import { FetchArchivedThreadOptions } from './d.js.exports';
import { ActionRowBuilder } from './d.js.exports';
import { TextInputBuilder } from './d.js.exports';
import { APIMessageComponentEmoji } from './d.js.exports';
import { ButtonStyle } from './d.js.exports';
import { EmbedAuthorOptions } from './d.js.exports';
import { RGBTuple } from './d.js.exports';
import { EmbedFooterOptions } from './d.js.exports';
export * from 'diswrap-games';
import { APISelectMenuOption } from './d.js.exports';
import { StringSelectMenuOptionBuilder } from './d.js.exports';
import { RestOrArray } from './d.js.exports';
import { AnyComponentBuilder } from './d.js.exports';
import { GatewayIntentBits as BotIntents } from './d.js.exports';
import { PresenceStatusData } from './d.js.exports';
import { ActivityType as Activity } from './d.js.exports';
import { PresenceData } from './d.js.exports';
import { ClientEvents as CEvents } from './d.js.exports';
import { TextInput as TextI } from 'diswrap-util';
import { Attachment as Atm } from 'diswrap-util';
import { Permissions as Perms } from 'diswrap-util';
import { MessageManager as MManager } from 'diswrap-util';
import { ThreadManager as THManager } from 'diswrap-util';
import { Modal as MBuilder } from 'diswrap-builders';
import { Button as BBuilder } from 'diswrap-builders';
import { Embed as EBuilder } from 'diswrap-builders';
import { SelectMenu as SBuilder } from 'diswrap-builders';
import { ActionRow as ABuilder } from 'diswrap-builders';
import { Event } from 'diswrap-util';
import { GuessTheNumber } from 'diswrap-games';
import { Stream } from 'stream';
export * from 'diswrap-util';
export * from './d.js.exports';
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
declare class TextInput extends TextI {
    /**
     * Sets an CustomID to the TextInput
     * @param customID - The CustomID
     * @returns
     */
    ID(customID: string): this;
    /**
     * Sets an Label to the TextInput
     * @param label - The Label to use
     * @returns
     */
    Label(label: string): this;
    /**
     * Sets an Placholder to the TextInput
     * @param placeholder - The Placeholder of the TextInp.
     * @returns
     */
    Placeholder(placeholder: string): this;
    /**
     * Is the TextInput required? -> true or false
     * @param required - true or false
     * @returns
     */
    Required(required?: boolean | undefined): this;
    /**
     * Sets an Style to the TextInput
     * @param style - The TextInputStyle
     * @returns
     */
    Style(style: TextInputStyle): this;
    /**
     * Sets an Value to the TextInp.
     * @param value - The TextInput Value
     * @returns
     */
    Value(value: string): this;
}
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
declare class Attachment extends Atm {
    /**
     * Sets an Description to the Attachment
     * @param description - The Description
     * @returns
     */
    Description(description: string): this;
    /**
     * Sets an File to the Attachment
     * @param attachment - The Attachment
     * @param name - The Name
     * @returns
     */
    File(attachment: BufferResolvable | Stream, name?: string | undefined): this;
    /**
     * Sets an Name to the Attachment
     * @param name - The Name
     * @returns
     */
    Name(name: string): this;
}
/**
 * ### The Permissions Class
 * With this class, you can easily Manage or Check Permissions of a User
 * @param Perms - The Perms
 */
declare class Permissions extends Perms {
    /**
     * Add Permissions
     * @param bits - The Bits
     * @returns
     */
    addPermission(...bits: BitFieldResolvable<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>[]): BitField<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>;
    /**
     * Check if the User has a provided Permission
     * @param permission - The Permission(s)
     * @param checkAdmin - Check if the User is Admin
     * @returns
     */
    hasPermissions(permission: PermissionResolvable, checkAdmin?: boolean | undefined): boolean;
    /**
     * Remove Permissions
     * @param bits - The Bits
     * @returns
     */
    removePermission(...bits: BitFieldResolvable<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>[]): BitField<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>;
    /**
     * Check if the User is missing Permissions
     * @param bits - The Bits
     * @param checkAdmin Check if the User is Admin
     * @returns
     */
    missingPermission(bits: BitFieldResolvable<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>, checkAdmin?: boolean | undefined): ('CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages')[];
    /**
     * Freeze
     * @returns
     */
    freeze(): Readonly<BitField<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>>;
}
/**
 * ### The MessageManager
 * With this class you can easily manage Messages.
 * @param MManager - diswrap-util MessageManager
 */
declare class MessageManager extends MManager {
    /**
     * Pin a Message in a channel
     * @param message - The Message to pin
     * @param reason - The Reason to pin the Message
     * @returns
     */
    pinMessage(message: MessageResolvable, reason?: string | undefined): Promise<void>;
    /**
     * Delete a Message in a channel
     * @param message - The Message to delete
     * @returns
     */
    deleteMessage(message: MessageResolvable): Promise<void>;
    /**
     * React to a Message
     * @param message - The Message to React to
     * @param emoji - The Emoji to react
     * @returns
     */
    reactToMessage(message: MessageResolvable, emoji: EmojiIdentifierResolvable): Promise<void>;
    /**
     *
     * @param message - The Message to unpin
     * @param reason - The Reason to unpin the Message
     * @returns
     */
    unpinMessage(message: MessageResolvable, reason?: string | undefined): Promise<void>;
}
/**
 * ### The ThreadManager
 * With this class you can easily Manage Threads
 */
declare class ThreadManager extends THManager {
    /**
     * Checks if the Thread is activ
     * @param cache - The Cache
     * @returns
     */
    fetchActive(cache?: boolean | undefined): Promise<FetchedThreads>;
    /**
     * Checks if the Thread is archived
     * @param options - The options
     * @param cache - The Cache
     * @returns
     */
    fetchArchived(options?: FetchArchivedThreadOptions | undefined, cache?: boolean | undefined): Promise<FetchedThreadsMore>;
}
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
declare class Modal extends MBuilder {
    /**
     * - The Components to add
     * @param components - The Components
     * @returns
     */
    Components(...components: ActionRowBuilder<TextInputBuilder>[]): this;
    /**
     * - This sets an CustomID to your Modal
     * @param id - The CustomID
     * @returns
     */
    ID(id: string): this;
    /**
     * This sets a Title to your Modal
     * @param title - The Title to add
     * @returns
     */
    Title(title: string): this;
}
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
declare class Button extends BBuilder {
    /**
     * This sets an Emoji to the Button
     * @param emj - The Emoji to add
     * @returns
     */
    Emoji(emj: APIMessageComponentEmoji): this;
    /**
     * This sets an CustomID for the Button
     * @param id - The CustomID
     * @returns
     */
    ID(id: string): this;
    /**
     * This sets an Label to the Button
     * @param label - The Label of the Button
     * @returns
     */
    Label(label: string): this;
    /**
     * This sets an Style for the Button
     * @param bstyle - The Style of The Button
     * @returns
     */
    Style(bstyle: ButtonStyle): this;
    /**
     * This sets an URL for the Button. ðŸ›‘ This only works if you set the Style to "Link"
     * @param url - The URL for the Button
     * @returns
     */
    URL(url: string): this;
}
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
declare class Embed extends EBuilder {
    /**
     * Sets an Author for the Embed
     * @example
     * .Author({ name: 'Author Name', iconURL: 'Author Icon URL' })
     * @param options - The Author Options
     * @returns
     */
    Author(options: EmbedAuthorOptions | null): this;
    /**
     * Sets an Color for the Embed
     * @param color - The Color
     * @returns
     */
    Color(color: RGBTuple | null): this;
    /**
     * Sets an Description for the Embed
     * @param description - The Description
     * @returns
     */
    Description(description: string | null): this;
    /**
     * Sets an Footer for the Embed
     * @example
     * .Footer({ text: 'Footer Text', iconURL: 'Footer Icon URL' })
     * @param options - The Footer Options
     * @returns
     */
    Footer(options: EmbedFooterOptions | null): this;
    /**
     * Sets an Image for the Embed
     * @param url - The Image URL
     * @returns
     */
    Image(url: string | null): this;
    /**
     * Sets an Thumbnail for the Embed
     * @param url - The Thumbnail URL
     * @returns
     */
    Thumbnail(url: string | null): this;
    /**
     * Sets an Timestamp to the Embed
     * @param timestamp - The Timestamp
     * @returns
     */
    Timestamp(timestamp?: number | Date | null | undefined): this;
    /**
     * Sets an Title to Embed
     * @param title - The Title
     * @returns
     */
    Title(title: string | null): this;
    /**
     * Sets an URL to the Embed Title
     * @param url - The Title URL
     * @returns
     */
    TitleURL(url: string | null): this;
    /**
     * Sets an new Field to the Embed
     * @example
     * .newField({ name: 'Field Name', value: 'Field Value', inline: false })
     * @param name - The Field Name
     * @param value - The Field Value
     * @param inline - Inline? -> true or false
     * @returns
     */
    newField(name: string, value: string, inline: boolean): this;
}
/**
 * ### The Select Menu Class
 * With this you can create SelectMenus for your Bot
 * @example
 * new SelectMenu()
 * .ID('customid') // sets an customid for the selectmenu
 * .Placeholder('Placeholder') // sets an placeholder to the selectmenu
 * // More goes here
 */
declare class SelectMenu extends SBuilder {
    /**
     * Sets an CustomID to the SelectMenu
     * @param id - The CustomID
     * @returns
     */
    ID(id: string): this;
    /**
     * Disabled? -> true or false
     * @param disabled - true or false
     * @returns
     */
    Disabled(disabled?: boolean | undefined): this;
    /**
     * Sets an Placeholder to the SelectMenu
     * @param plh - The Placeholder
     * @returns
     */
    Placeholder(plh: string): this;
    /**
     * Sets an MaxValue to the SelectMenu
     * @param value - The Max Value
     * @returns
     */
    maxValues(value: number): this;
    /**
     * Sets an MinValue to the SelectMenu
     * @param value - The Min Value
     * @returns
     */
    minValues(value: number): this;
    /**
     * Sets Options to the SelectMenu
     * @param options - The SelectMenu Options
     * @returns
     */
    addOptions(...options: (APISelectMenuOption | StringSelectMenuOptionBuilder)[]): this;
}
/**
 * ### The ActionRow Class
 * With this you can create ActionRows for your Bot
 * @example
 * new ActionRow()
 * .Components(
 *    // add components
 * )
 */
declare class ActionRow extends ABuilder {
    /**
     * Sets Componetns to the ActionRow
     * @param components - The Components
     * @returns
     */
    Components(...components: RestOrArray<AnyComponentBuilder>[]): this;
}
/**
 * ### The BotEvents
 * This are events for the Bot
 * @example JavaScript
 * .event('onReady', () => {
 *     console.log('Ready');
 * });
 */
type BotEvents = 'onMessage' | 'onReady' | 'interaction' | 'err' | 'channelCreate' | 'channelDelete' | 'channelUpdate' | 'roleCreate' | 'roleUpdate' | 'roleDelete' | 'debug';
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
declare class BotClient {
    private client;
    cogs: Map<string, any>;
    constructor(options: {
        token: string;
        intents: BotIntents[];
    });
    /**
     * This sets an Status to your Bot
     * @example JavaScript
     * .setStatus('idle');
     * @param status - The Status
     */
    setStatus(status: PresenceStatusData): void;
    /**
     * This sets an Activity to your Bot
     * @example JavaScript
     * .setActivity({ name: 'with diswrap', type: Activity.Playing });
     * @param activity - The Activity
     */
    setActivity(activity: {
        name: string;
        type: Activity;
    }): void;
    /**
     * This sets an Presence to your Bot (Status & Activity)
     * @example JavaScript
     * .setPresence({
     *    status: 'idle',
     *    activities: [{ name: 'with diswrap', type: ActivityTypes.Playing }],
     * });
     * @param presence - The PresenceData
     */
    setPresence(presence: PresenceData): void;
    /**
     * Register an event handler for a custom event.
     * @param eventName - The name of the custom event to listen for.
     * @param handler - The event handler function.
     */
    event<EventName extends BotEvents>(eventName: EventName, handler: (...args: CEvents[keyof CEvents]) => void): void;
    /**
     * Load a cog (component) into the bot.
     * @example JavaScript
     * .loadCog('myCog', new MyCogClass());
     * else:
     * .loadCog('myCog', require('./folder/of/the/cog'));
     * @param name - The Name of the Cog
     * @param cogInstance - An instance of the cog class.
     */
    loadCog(name: string, cogInstance: any): void;
    /**
     * Unload a Cog (component) from the bot
     * @example JavaScript
     * .unloadCog('myCog');
     * @param name - The Name of the Cog to unload
     */
    unloadCog(name: string): void;
    /**
     * Create and run SlashCommands for your Bot
     * @example
     * .newSlashCommand({ name: 'ping', description: 'Ping Pong!', reply: 'Lets play Ping Pong!' });
     * @param slashcommandoptions - The SlashCommandOptions
     * @returns
     */
    newSlashCommand(slashcommandoptions: {
        name: string;
        description: string;
        reply: string;
        componets: any;
        embeds: any;
    }): void;
    /**
     * Run a messageCreate Event
     * @example
     * .onMessage({ trigger: 'ping', reply: 'Ping Pong!' });
     * @param msg - The Message
     * @returns
     */
    onMessage(msg: {
        trigger: string;
        reply: string;
    }): void;
}
export { BotEvents, BotClient, GuessTheNumber, Event, BotIntents, Activity, PresenceData, ButtonStyle as ButtonStyles, Modal, Button, Embed, SelectMenu, ActionRow, MessageManager, ThreadManager, TextInput, Attachment, Permissions };
//# sourceMappingURL=main.d.ts.map
