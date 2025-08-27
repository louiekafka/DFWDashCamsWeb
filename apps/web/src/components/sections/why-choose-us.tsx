import { Badge } from "@workspace/ui/components/badge";

import type { PagebuilderType } from "@/types";

import { RichText } from "../elements/rich-text";
import { SanityIcon } from "../elements/sanity-icon";
import { SanityImage } from "../elements/sanity-image";
type WhyChooseUsBlockProps = PagebuilderType<"whyChooseUs">;

type WhyChooseUsListProps = {
  listItem: NonNullable<WhyChooseUsBlockProps["list"]>[number];
};

function WhyChooseUsList({ listItem }: WhyChooseUsListProps) {
  const { icon, title, richText } = listItem ?? {};
  return (
    <div className="md:p-2 flex items-center gap-6">
      <div>
        <span className="mb-9 flex w-fit p-1 items-center justify-center rounded-lg text-white bg-[#ffffff1a] drop-shadow-xl">
          <SanityIcon icon={icon} />
        </span>
      </div>
      <div>
        <h3 className="text-lg text-left text-white font-bold md:text-xl mb-2">
          {title}
        </h3>
        <RichText
          richText={richText}
          className="font-normal text-sm md:text-lg text-white/90 leading-7 text-pretty text-left dark:text-neutral-300"
        />
      </div>
    </div>
  );
}

export function WhyChooseUsBlock({
  eyebrow,
  title,
  richText,
  image,
  list,
}: WhyChooseUsBlockProps) {
  return (
    <section
      id="why-choose-us"
      className="my-6 md:my-16 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] overflow-x-hidden"
    >
      <div className="bg-gradient-to-b from-blue-900 to-sky-700 py-16 px-4 md:px-6">
        <div className="flex container mx-auto flex-col items-center">
          <div className="flex flex-col items-center space-y-12 text-center sm:space-y-6 md:text-center">
            <Badge variant="default">{eyebrow}</Badge>
            <h2 className="text-3xl font-semibold md:text-5xl text-white">
              {title}
            </h2>
            <RichText
              richText={richText}
              className="text-base md:text-lg text-balance text-[#fffc] max-w-3xl"
            />
            <div className="mt-12 space-y-6 items-center grid gap-8 lg:grid-cols-2">
              {image && (
                <div className="h-96 w-full">
                  <SanityImage
                    image={image}
                    loading="eager"
                    width={800}
                    height={800}
                    className="max-h-96 w-5/6 rounded-3xl object-cover mx-auto"
                  />
                </div>
              )}
              <div className="mx-auto">
                {list?.map((listItem, index) => (
                  <WhyChooseUsList
                    key={`WhyChooseUsList-${listItem?._key}-${index}`}
                    listItem={listItem}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
