import { EmbedBuilder, ActionRowBuilder, TextInputBuilder, EmbedAuthorOptions, RGBTuple, EmbedFooterOptions, ButtonBuilder, SelectMenuBuilder, ModalBuilder } from "@discordjs/builders";
import { APIMessageComponentEmoji, ButtonStyle as ButtonStyles, AnyComponentBuilder, RestOrArray, StringSelectMenuOptionBuilder, APISelectMenuOption } from "discord.js";
export declare class Embed extends EmbedBuilder {
    Title(title: string | null): this;
    Description(description: string | null): this;
    Author(options: EmbedAuthorOptions | null): this;
    Color(color: number | RGBTuple | null): this;
    Image(url: string | null): this;
    Thumbnail(url: string | null): this;
    Timestamp(timestamp?: number | Date | null | undefined): this;
    newField(name: string, value: string, inline: boolean): this;
    TitleURL(url: string | null): this;
    Footer(options: EmbedFooterOptions | null): this;
}
export declare class Button extends ButtonBuilder {
    ID(id: string): this;
    Label(label: string): this;
    Emoji(emj: APIMessageComponentEmoji): this;
    Style(bstyle: ButtonStyles): this;
    URL(url: string): this;
}
export declare class SelectMenu extends SelectMenuBuilder {
    ID(id: string): this;
    maxValues(value: number): this;
    minValue(value: number): this;
    addOptions(...options: (APISelectMenuOption | StringSelectMenuOptionBuilder)[]): this;
    Placeholder(plh: string): this;
    Disabled(disabled?: boolean | undefined): this;
}
export declare class Modal extends ModalBuilder {
    ID(id: string): this;
    Title(title: string): this;
    Components(...components: ActionRowBuilder<TextInputBuilder>[]): this;
}
export declare class ActionRow extends ActionRowBuilder<any> {
    Components(...components: RestOrArray<AnyComponentBuilder>[]): this;
    setComponents(...components: RestOrArray<any>): this;
}
//# sourceMappingURL=index.d.ts.map