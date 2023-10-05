import { ApplicationCommandData, SlashCommandBuilder, Client, ContextMenuCommandBuilder, ActivityType as ActivityTypes, PresenceData, ColorResolvable, APIEmbedField, APIEmbed, APIMessageComponentEmoji, ButtonStyle, APISelectMenuOption, ActionRowBuilder, AnyComponentBuilder, RestOrArray, TextInputBuilder, APIActionRowComponent, APITextInputComponent, EmbedAuthorOptions, RGBTuple, EmbedFooterOptions, StringSelectMenuOptionBuilder, BaseFetchOptions, DMChannel, UserResolvable, TextBasedChannel, Message, MessageEditOptions, MessagePayload, MessageResolvable, EmojiIdentifierResolvable, FetchedThreads, FetchArchivedThreadOptions, FetchedThreadsMore, ThreadChannel, ThreadChannelResolvable, SlashCommandStringOption, CommandInteraction, TextInputStyle, BufferResolvable, BitField, BitFieldResolvable, PermissionResolvable, GatewayIntentBits as BotIntents, Status, PresenceStatusData } from 'discord.js';
import { Modal as MBuilder, Button as BBuilder, Embed as EBuilder, SelectMenu as SBuilder, ActionRow as ABuilder } from 'diswrap-builders';
import { Event, MessageManager as MManager, ThreadManager as THManager, Attachment as Atm, Permissions as Perms, TextInput as TextI } from 'diswrap-util';
import { GuessTheNumber } from 'diswrap-games';
import { Stream } from 'stream';


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
class TextInput extends TextI {
  /**
   * Sets an CustomID to the TextInput
   * @param customID - The CustomID
   * @returns 
   */
  ID(customID: string): this {
    return super.setCustomId(customID);
  }
  /**
   * Sets an Label to the TextInput
   * @param label - The Label to use
   * @returns 
   */
  Label(label: string): this {
    return super.setLabel(label);
  }
  /**
   * Sets an Placholder to the TextInput
   * @param placeholder - The Placeholder of the TextInp.
   * @returns 
   */
  Placeholder(placeholder: string): this {
    return super.setPlaceholder(placeholder);
  }
  /**
   * Is the TextInput required? -> true or false
   * @param required - true or false
   * @returns 
   */
  Required(required?: boolean | undefined): this {
    return super.setRequired(required);
  }
  /**
   * Sets an Style to the TextInput
   * @param style - The TextInputStyle
   * @returns 
   */
  Style(style: TextInputStyle): this {
    return super.setStyle(style);
  }
  /**
   * Sets an Value to the TextInp.
   * @param value - The TextInput Value
   * @returns 
   */
  Value(value: string): this {
    return super.setValue(value);
  }

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
class Attachment extends Atm {
  /**
   * Sets an Description to the Attachment
   * @param description - The Description
   * @returns 
   */
  Description(description: string): this {
    return super.setDescription(description);
  }
  /**
   * Sets an File to the Attachment
   * @param attachment - The Attachment
   * @param name - The Name
   * @returns 
   */
  File(attachment: BufferResolvable | Stream, name?: string | undefined): this {
    return super.setFile(attachment);
  }
  /**
   * Sets an Name to the Attachment
   * @param name - The Name
   * @returns 
   */
  Name(name: string): this {
    return super.setName(name);
  }

}
/**
 * ### The Permissions Class
 * With this class, you can easily Manage or Check Permissions of a User
 * @param Perms - The Perms
 */
class Permissions extends Perms {
  /**
   * Add Permissions
   * @param bits - The Bits
   * @returns 
   */
  public addPermission(...bits: BitFieldResolvable<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>[]): BitField<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint> {
    return super.add(bits);
  }
  /**
   * Check if the User has a provided Permission
   * @param permission - The Permission(s)
   * @param checkAdmin - Check if the User is Admin
   * @returns 
   */
  public hasPermissions(permission: PermissionResolvable, checkAdmin?: boolean | undefined): boolean {
    return super.has(permission, checkAdmin);
  }
  /**
   * Remove Permissions
   * @param bits - The Bits
   * @returns 
   */
  public removePermission(...bits: BitFieldResolvable<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>[]): BitField<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint> {
    return super.remove(bits);
  }
  /**
   * Check if the User is missing Permissions
   * @param bits - The Bits
   * @param checkAdmin Check if the User is Admin
   * @returns 
   */
  public missingPermission(bits: BitFieldResolvable<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>, checkAdmin?: boolean | undefined): ('CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages')[] {
    return super.missing(bits, checkAdmin);
  }
  /**
   * Freeze
   * @returns 
   */
  freeze(): Readonly<BitField<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>> {
    return super.freeze();
  }

  
}
/**
 * ### The MessageManager
 * With this class you can easily manage Messages.
 * @param MManager - diswrap-util MessageManager
 */
class MessageManager extends MManager {
  /**
   * Pin a Message in a channel
   * @param message - The Message to pin
   * @param reason - The Reason to pin the Message
   * @returns 
   */
  pinMessage(message: MessageResolvable, reason?: string | undefined): Promise<void> {
    return super.pin(message);
  }
  /**
   * Delete a Message in a channel
   * @param message - The Message to delete
   * @returns 
   */
  deleteMessage(message: MessageResolvable): Promise<void> {
    return super.delete(message);
  }
  /**
   * React to a Message
   * @param message - The Message to React to
   * @param emoji - The Emoji to react
   * @returns 
   */
  reactToMessage(message: MessageResolvable, emoji: EmojiIdentifierResolvable): Promise<void> {
    return super.react(message, emoji);
  }
  /**
   * 
   * @param message - The Message to unpin
   * @param reason - The Reason to unpin the Message
   * @returns 
   */
  unpinMessage(message: MessageResolvable, reason?: string | undefined): Promise<void> {
    return super.unpin(message, reason);
  }
}
/**
 * ### The ThreadManager
 * With this class you can easily Manage Threads
 */
class ThreadManager extends THManager {
  /**
   * Checks if the Thread is activ
   * @param cache - The Cache
   * @returns 
   */
  fetchActive(cache?: boolean | undefined): Promise<FetchedThreads> {
    return super.fetchActive(cache);
  }
  /**
   * Checks if the Thread is archived
   * @param options - The options
   * @param cache - The Cache
   * @returns 
   */
  fetchArchived(options?: FetchArchivedThreadOptions | undefined, cache?: boolean | undefined): Promise<FetchedThreadsMore> {
    return super.fetchArchived(options, cache);
  }
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
class Modal extends MBuilder {
  /**
   * - The Components to add
   * @param components - The Components
   * @returns 
   */
  Components(...components: ActionRowBuilder<TextInputBuilder>[]): this {
    return super.addComponents(components);
  }
  /**
   * - This sets an CustomID to your Modal
   * @param id - The CustomID
   * @returns 
   */
  ID(id: string): this {
    return super.setCustomId(id);
  }
  /**
   * This sets a Title to your Modal
   * @param title - The Title to add
   * @returns 
   */
  Title(title: string): this {
    return super.setTitle(title);
  }
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
class Button extends BBuilder {
  /**
   * This sets an Emoji to the Button
   * @param emj - The Emoji to add
   * @returns 
   */
  Emoji(emj: APIMessageComponentEmoji): this {
    return super.setEmoji(emj);
  }
  /**
   * This sets an CustomID for the Button
   * @param id - The CustomID
   * @returns 
   */
  ID(id: string): this {
    return super.setCustomId(id);
  }
  /**
   * This sets an Label to the Button 
   * @param label - The Label of the Button
   * @returns 
   */
  Label(label: string): this {
    return super.setLabel(label);
  }
  /**
   * This sets an Style for the Button
   * @param bstyle - The Style of The Button
   * @returns 
   */
  Style(bstyle: ButtonStyle): this {
    return super.setStyle(bstyle);
  }
  /**
   * This sets an URL for the Button. ðŸ›‘ This only works if you set the Style to "Link"
   * @param url - The URL for the Button
   * @returns 
   */
  URL(url: string): this {
    return super.setURL(url);
  }

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
class Embed extends EBuilder {
  /**
   * Sets an Author for the Embed
   * @example
   * .Author({ name: 'Author Name', iconURL: 'Author Icon URL' })
   * @param options - The Author Options
   * @returns 
   */
  Author(options: EmbedAuthorOptions | null): this {
    return super.setAuthor(options);
  }
  /**
   * Sets an Color for the Embed
   * @param color - The Color
   * @returns 
   */
  Color(color: RGBTuple | null): this {
    return super.setColor(color);
  }
  /**
   * Sets an Description for the Embed
   * @param description - The Description
   * @returns 
   */
  Description(description: string | null): this {
    return super.setDescription(description);
  }
  /**
   * Sets an Footer for the Embed
   * @example
   * .Footer({ text: 'Footer Text', iconURL: 'Footer Icon URL' })
   * @param options - The Footer Options
   * @returns 
   */
  Footer(options: EmbedFooterOptions | null): this {
    return super.setFooter(options);
  }
  /**
   * Sets an Image for the Embed
   * @param url - The Image URL
   * @returns 
   */
  Image(url: string | null): this {
    return super.setImage(url);
  }
  /**
   * Sets an Thumbnail for the Embed
   * @param url - The Thumbnail URL
   * @returns 
   */
  Thumbnail(url: string | null): this {
    return super.setThumbnail(url);
  }
  /**
   * Sets an Timestamp to the Embed
   * @param timestamp - The Timestamp
   * @returns 
   */
  Timestamp(timestamp?: number | Date | null | undefined): this {
    return super.setTimestamp(timestamp);
  } 
  /**
   * Sets an Title to Embed
   * @param title - The Title
   * @returns 
   */
  Title(title: string | null): this {
    return super.setTitle(title);
  }
  /**
   * Sets an URL to the Embed Title
   * @param url - The Title URL
   * @returns 
   */
  TitleURL(url: string | null): this {
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
  newField(name: string, value: string, inline: boolean): this {
    return super.setFields({ name, value, inline });
  }

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
class SelectMenu extends SBuilder {
  /**
   * Sets an CustomID to the SelectMenu
   * @param id - The CustomID
   * @returns 
   */
  ID(id: string): this {
    return super.setCustomId(id);
  }
  /**
   * Disabled? -> true or false
   * @param disabled - true or false
   * @returns 
   */
  Disabled(disabled?: boolean | undefined): this {
    return super.setDisabled(disabled);
  }
  /**
   * Sets an Placeholder to the SelectMenu
   * @param plh - The Placeholder
   * @returns 
   */
  Placeholder(plh: string): this {
    return super.setPlaceholder(plh);
  }
  /**
   * Sets an MaxValue to the SelectMenu
   * @param value - The Max Value
   * @returns 
   */
  maxValues(value: number): this {
    return super.setMaxValues(value);
  }
  /**
   * Sets an MinValue to the SelectMenu
   * @param value - The Min Value
   * @returns 
   */
  minValues(value: number): this {
    return super.setMinValues(value);
  }
  /**
   * Sets Options to the SelectMenu
   * @param options - The SelectMenu Options
   * @returns 
   */
  addOptions(...options: (APISelectMenuOption | StringSelectMenuOptionBuilder)[]): this {
    return super.setOptions(options);
  }
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
class ActionRow extends ABuilder {
  /**
   * Sets Componetns to the ActionRow
   * @param components - The Components
   * @returns 
   */
  Components(...components: RestOrArray<AnyComponentBuilder>[]): this {
    return super.addComponents(components);
  }
}
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
  private client: Client;

  constructor(options: { token: string, intents: BotIntents[] }) {
    this.client = new Client({ intents: options.intents });
    


    this.client.login(options.token);
  }
  /**
   * This sets an Status to your Bot
   * @example JavaScript
   * .setStatus('idle');
   * @param status - The Status
   */
  setStatus(status: PresenceStatusData) {
    this.client.once('ready', () => {
      this.client.user?.setStatus(status);
    });
  }
  /**
   * This sets an Activity to your Bot
   * @example JavaScript
   * .setActivity({ name: 'with diswrap', type: ActivityTypes.Playing });
   * @param activity - The Activity
   */
  setActivity(activity: { name: string, type: ActivityTypes }) {
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
  setPresence(presence: PresenceData) {
    this.client.once('ready', () => {
      this.client.user?.setPresence(presence);
    });
  }
  /**
   * If your Bot is ready, you can set an Custom Console Output here
   * @example JavaScript
   * .readyConsole({ output: 'The Bot is ready' });
   * @param consoleLog - The ConsoleLog
   */
  readyConsole(consoleLog: { output: string | 'Your Bot is ready!'}) {
    this.client.once('ready', () => {
      console.log(consoleLog.output);
    });
  }
  /**
   * This creates & run Prefix Commands for your Bot
   * @example JavaScript
   * .command({ prefix: '!', name: 'ping', reply: 'Ping Pong!' });
   * @param commandOptions - The CommandOptions
   */
  command(commandOptions: { prefix: string, name: string, reply: string }) {
    this.client.on('messageCreate', (message) => {
      if (message.author.bot) return;
      if (!message.content.startsWith(commandOptions.prefix)) return console.log('You must provide an Prefix!');
      const args = message.content.slice(commandOptions.prefix.length).trim().split(/ +/);
      const command = args.shift()?.toLowerCase();

      if (command === commandOptions.name) {
        message.reply({ content: commandOptions.reply });
      }
    });
  }
}
export { BotClient, GuessTheNumber, Event, BotIntents, ActivityTypes, PresenceData, ButtonStyle as ButtonStyles, Modal, Button, Embed, SelectMenu, ActionRow, MessageManager, ThreadManager, TextInput, Attachment, Permissions }