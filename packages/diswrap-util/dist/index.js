"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = exports.Permissions = exports.TextInput = exports.ThreadManager = exports.MessageManager = exports.Event = void 0;
const discord_js_1 = require("discord.js");
Object.defineProperty(exports, "Event", { enumerable: true, get: function () { return discord_js_1.Events; } });
const builders_1 = require("@discordjs/builders");
class MessageManager extends discord_js_1.MessageManager {
    editMessage(message, options) {
        return super.edit(message, options);
    }
    deleteMessage(message) {
        return super.delete(message);
    }
    reactToMessage(message, emoji) {
        return super.react(message, emoji);
    }
    pinMessage(message, reason) {
        return super.pin(message, reason);
    }
    unpinMessage(message, reason) {
        return super.unpin(message, reason);
    }
}
exports.MessageManager = MessageManager;
class ThreadManager extends discord_js_1.ThreadManager {
    fetchActive(cache) {
        return super.fetchActive(cache);
    }
    fetchArchived(options, cache) {
        return super.fetchArchived(options, cache);
    }
}
exports.ThreadManager = ThreadManager;
class TextInput extends builders_1.TextInputBuilder {
    ID(customID) {
        return super.setCustomId(customID);
    }
    Label(label) {
        return super.setLabel(label);
    }
    Style(style) {
        return super.setStyle(style);
    }
    Required(required) {
        return super.setRequired(required);
    }
    Placeholder(placeholder) {
        return super.setPlaceholder(placeholder);
    }
    Value(value) {
        return super.setValue(value);
    }
}
exports.TextInput = TextInput;
class Permissions extends discord_js_1.PermissionsBitField {
    addPermision(...bits) {
        return super.add(bits);
    }
    removePermission(...bits) {
        return super.remove(bits);
    }
    hasPermissions(permission, checkAdmin) {
        return super.has(permission);
    }
    missingPermission(bits, checkAdmin) {
        return super.missing(bits);
    }
    freeze() {
        return super.freeze();
    }
}
exports.Permissions = Permissions;
class Attachment extends discord_js_1.AttachmentBuilder {
    Name(name) {
        return super.setName(name);
    }
    Description(description) {
        return super.setDescription(description);
    }
    File(attachment, name) {
        return super.setFile(attachment, name);
    }
    setSpoiler(spoiler) {
        return super.setSpoiler(spoiler);
    }
}
exports.Attachment = Attachment;
//# sourceMappingURL=index.js.map
