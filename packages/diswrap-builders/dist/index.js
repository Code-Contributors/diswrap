"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionRow = exports.Modal = exports.SelectMenu = exports.Button = exports.Embed = void 0;
const builders_1 = require("@discordjs/builders");
class Embed extends builders_1.EmbedBuilder {
    Title(title) {
        return super.setTitle(title);
    }
    Description(description) {
        return super.setDescription(description);
    }
    Author(options) {
        return super.setAuthor(options);
    }
    Color(color) {
        return super.setColor(color);
    }
    Image(url) {
        return super.setImage(url);
    }
    Thumbnail(url) {
        return super.setThumbnail(url);
    }
    Timestamp(timestamp) {
        return super.setTimestamp(timestamp);
    }
    newField(name, value, inline) {
        return super.addFields({ name, value, inline });
    }
    TitleURL(url) {
        return super.setURL(url);
    }
    Footer(options) {
        return super.setFooter(options);
    }
}
exports.Embed = Embed;
class Button extends builders_1.ButtonBuilder {
    ID(id) {
        return super.setCustomId(id);
    }
    Label(label) {
        return super.setLabel(label);
    }
    Emoji(emj) {
        return super.setEmoji(emj);
    }
    Style(bstyle) {
        return super.setStyle(bstyle);
    }
    URL(url) {
        return super.setURL(url);
    }
}
exports.Button = Button;
class SelectMenu extends builders_1.SelectMenuBuilder {
    ID(id) {
        return super.setCustomId(id);
    }
    maxValues(value) {
        return super.setMaxValues(value);
    }
    minValue(value) {
        return super.setMinValues(value);
    }
    addOptions(...options) {
        return super.addOptions(options);
    }
    Placeholder(plh) {
        return super.setPlaceholder(plh);
    }
    Disabled(disabled) {
        return super.setDisabled(disabled);
    }
}
exports.SelectMenu = SelectMenu;
class Modal extends builders_1.ModalBuilder {
    ID(id) {
        return super.setCustomId(id);
    }
    Title(title) {
        return super.setTitle(title);
    }
    Components(...components) {
        return super.setComponents(components);
    }
}
exports.Modal = Modal;
class ActionRow extends builders_1.ActionRowBuilder {
    Components(...components) {
        return super.addComponents(components);
    }
    setComponents(...components) {
        return super.setComponents(components);
    }
}
exports.ActionRow = ActionRow;
//# sourceMappingURL=index.js.map
