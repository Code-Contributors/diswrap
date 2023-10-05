import { AttachmentBuilder, PermissionsBitField, Interaction, RESTPostAPIApplicationCommandsJSONBody, ActionRowBuilder, FetchArchivedThreadOptions, FetchedThreadsMore, ThreadManager as THManager, MessageManager as MessageM, FetchedThreads, MessageResolvable, EmojiIdentifierResolvable, MessagePayload, MessageEditOptions, Message, Events as Event, SlashCommandBuilder, BitField, BitFieldResolvable, PermissionResolvable, BufferResolvable } from 'discord.js';
import { REST } from '@discordjs/rest';
import { Routes, TextInputStyle } from 'discord-api-types/v10';
import { TextInputBuilder } from '@discordjs/builders';
import { Stream } from 'stream';

class MessageManager extends MessageM {
    public editMessage(message: MessageResolvable, options: string | MessagePayload | MessageEditOptions): Promise<Message<boolean>> {
        return super.edit(message, options)
    }

    public deleteMessage(message: MessageResolvable): Promise<void> {
        return super.delete(message);
    }

    public reactToMessage(message: MessageResolvable, emoji: EmojiIdentifierResolvable): Promise<void> {
        return super.react(message, emoji);
    }

    public pinMessage(message: MessageResolvable, reason?: string | undefined): Promise<void> {
        return super.pin(message, reason);
    }

    public unpinMessage(message: MessageResolvable, reason?: string | undefined): Promise<void> {
        return super.unpin(message, reason);
    }

}

class ThreadManager extends THManager {
    public fetchActive(cache?: boolean | undefined): Promise<FetchedThreads> {
        return super.fetchActive(cache);
    }

    public fetchArchived(options?: FetchArchivedThreadOptions | undefined, cache?: boolean | undefined): Promise<FetchedThreadsMore> {
        return super.fetchArchived(options, cache);
    }

}

class TextInput extends TextInputBuilder {
    ID(customID: string): this {
        return super.setCustomId(customID);
    }

    Label(label: string): this {
        return super.setLabel(label);
    }

    Style(style: TextInputStyle): this {
        return super.setStyle(style);
    }

    Required(required?: boolean | undefined): this {
        return super.setRequired(required);
    }

    Placeholder(placeholder: string): this {
        return super.setPlaceholder(placeholder);
    }

    Value(value: string): this {
        return super.setValue(value);
    }
}

class Permissions extends PermissionsBitField {
    public addPermision(...bits: BitFieldResolvable<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>[]): BitField<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint> {
         return super.add(bits);
    }

    public removePermission(...bits: BitFieldResolvable<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>[]): BitField<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint> {
        return super.remove(bits);
    }

    public hasPermissions(permission: PermissionResolvable, checkAdmin?: boolean | undefined): boolean {
        return super.has(permission);
    }

    public missingPermission(bits: BitFieldResolvable<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>, checkAdmin?: boolean | undefined): ('CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages')[] {
        return super.missing(bits);
    }

    public freeze(): Readonly<BitField<'CreateInstantInvite' | 'KickMembers' | 'BanMembers' | 'Administrator' | 'ManageChannels' | 'ManageGuild' | 'AddReactions' | 'ViewAuditLog' | 'PrioritySpeaker' | 'Stream' | 'ViewChannel' | 'SendMessages' | 'SendTTSMessages' | 'ManageMessages' | 'EmbedLinks' | 'AttachFiles' | 'ReadMessageHistory' | 'MentionEveryone' | 'UseExternalEmojis' | 'ViewGuildInsights' | 'Connect' | 'Speak' | 'MuteMembers' | 'DeafenMembers' | 'MoveMembers' | 'UseVAD' | 'ChangeNickname' | 'ManageNicknames' | 'ManageRoles' | 'ManageWebhooks' | 'ManageEmojisAndStickers' | 'ManageGuildExpressions' | 'UseApplicationCommands' | 'RequestToSpeak' | 'ManageEvents' | 'ManageThreads' | 'CreatePublicThreads' | 'CreatePrivateThreads' | 'UseExternalStickers' | 'SendMessagesInThreads' | 'UseEmbeddedActivities' | 'ModerateMembers' | 'ViewCreatorMonetizationAnalytics' | 'UseSoundboard' | 'UseExternalSounds' | 'SendVoiceMessages', bigint>> {
        return super.freeze();
    }
}

class Attachment extends AttachmentBuilder {
    public Name(name: string): this {
        return super.setName(name);
    }

    public Description(description: string): this {
        return super.setDescription(description);
    }

    public File(attachment: BufferResolvable | Stream, name?: string | undefined): this {
        return super.setFile(attachment, name);
    }

    public setSpoiler(spoiler?: boolean | undefined): this {
        return super.setSpoiler(spoiler);
    }

}



export { Event, MessageManager, ThreadManager, TextInput, Permissions, Attachment };
