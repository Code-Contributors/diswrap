import { EmbedBuilder, ActionRowBuilder, TextInputBuilder, EmbedAuthorOptions, RGBTuple, EmbedFooterOptions, ButtonBuilder, SelectMenuBuilder, ModalBuilder, SlashCommandBuilder } from "@discordjs/builders";
import { APIMessageComponentEmoji, ButtonStyle as ButtonStyles, AnyComponentBuilder, ToAPIApplicationCommandOptions, RestOrArray, StringSelectMenuOptionBuilder, APISelectMenuOption, APIActionRowComponent } from "discord.js";

export class Embed extends EmbedBuilder {
    Title(title: string | null): this {
      return super.setTitle(title);
    }
  
    Description(description: string | null): this {
      return super.setDescription(description);
    }
  
    Author(options: EmbedAuthorOptions | null): this {
      return super.setAuthor(options);
    }
  
    Color(color: number | RGBTuple | null): this {
      return super.setColor(color);
    }
  
    Image(url: string | null): this {
      return super.setImage(url);
    }
  
    Thumbnail(url: string | null): this {
      return super.setThumbnail(url);
    }
  
    Timestamp(timestamp?: number | Date | null | undefined): this {
      return super.setTimestamp(timestamp);
    }
  
    newField(name: string, value: string, inline: boolean): this {
      return super.addFields({ name, value, inline });
    }
  
    TitleURL(url: string | null): this {
      return super.setURL(url);
    }
  
    Footer(options: EmbedFooterOptions | null): this {
      return super.setFooter(options);
    }
  
}

export class Button extends ButtonBuilder {
    ID(id: string): this {
        return super.setCustomId(id);
    }

    Label(label: string): this {
        return super.setLabel(label);
    }

    Emoji(emj: APIMessageComponentEmoji): this {
        return super.setEmoji(emj);
    }

    Style(bstyle: ButtonStyles): this {
        return super.setStyle(bstyle);
    }

    URL(url: string): this {
        return super.setURL(url);
    }
}

export class SelectMenu extends SelectMenuBuilder {
    ID(id: string): this {
        return super.setCustomId(id);
    }

    maxValues(value: number): this {
        return super.setMaxValues(value);
    }

    minValue(value: number): this {
        return super.setMinValues(value);
    }

    addOptions(...options: (APISelectMenuOption | StringSelectMenuOptionBuilder)[]): this {
        return super.addOptions(options);
    }

    Placeholder(plh: string): this {
        return super.setPlaceholder(plh);
    }

    Disabled(disabled?: boolean | undefined): this {
        return super.setDisabled(disabled);
    }
}

export class Modal extends ModalBuilder {
    ID(id: string): this {
        return super.setCustomId(id);
    }

    Title(title: string): this {
        return super.setTitle(title);
    }

    Components(...components: ActionRowBuilder<TextInputBuilder>[]): this {
        return super.setComponents(components);
    }

}



export class ActionRow extends ActionRowBuilder<any> {
  Components(...components: RestOrArray<AnyComponentBuilder>[]): this {
    return super.addComponents(components);
  }

  setComponents(...components: RestOrArray<any>): this {
    return super.setComponents(components);
  }
}
