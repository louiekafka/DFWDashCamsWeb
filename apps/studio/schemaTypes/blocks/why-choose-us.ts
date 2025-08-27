import { defineField, defineType } from "sanity";
import { customRichText } from "../definitions/rich-text";
import { LandPlot } from "lucide-react";
import { iconField } from "../common";
import { preview } from "sanity-plugin-icon-picker";

const iconListItem = defineField({
  name: "iconListItem",
  type: "object",
  fields: [
    iconField,
    defineField({
      name: "title",
      type: "string",
      description: "The heading text for this feature card",
    }),
    customRichText(["block"]),
  ],
  preview: {
    select: {
      title: "title",
      icon: "icon",
    },
    prepare: ({ title, icon }) => {
      return {
        title: `${title ?? "Untitled"}`,
        media: icon ? preview(icon) : null,
      };
    },
  },
});
export const whyChooseUs = defineType({
  name: "whyChooseUs",
  title: "Why Choose Us",
  type: "object",
  icon: LandPlot,
  fields: [
    defineField({
      name: "eyebrow",
      type: "string",
      description: "Optional text that appears above the main title",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    customRichText(["block"]),
    defineField({
      name: "list",
      type: "array",
      description: "The individual feature cards to display in the grid",
      of: [iconListItem],
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      description: "The image should be high quality and visually impactful",
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: title ?? "Untitled",
      subtitle: "Why Choose Us?",
    }),
  },
});
