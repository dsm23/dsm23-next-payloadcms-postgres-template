import type { FunctionComponent } from "react";
import type { StaticImageData } from "next/image";
import RichText from "~/components/RichText";
import { cn } from "~/utilities/ui";
import type { MediaBlock as MediaBlockProps } from "~/payload-types";
import { Media } from "../../components/Media";

type Props = MediaBlockProps & {
  breakout?: boolean;
  captionClassName?: string;
  className?: string;
  enableGutter?: boolean;
  imgClassName?: string;
  staticImage?: StaticImageData;
  disableInnerContainer?: boolean;
};

export const MediaBlock: FunctionComponent<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
    disableInnerContainer,
  } = props;

  let caption;
  if (media && typeof media === "object") caption = media.caption;

  return (
    <div
      className={cn(
        "",
        {
          container: enableGutter,
        },
        className,
      )}
    >
      {(media || staticImage) && (
        <Media
          imgClassName={cn(
            "border-border rounded-[0.8rem] border",
            imgClassName,
          )}
          resource={media}
          src={staticImage}
        />
      )}
      {caption && (
        <div
          className={cn(
            "mt-6",
            {
              container: !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          <RichText data={caption} enableGutter={false} />
        </div>
      )}
    </div>
  );
};
