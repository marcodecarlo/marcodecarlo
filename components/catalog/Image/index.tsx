import { ImageProps } from "next/image";
import BlurImage from "@/components/common/BlurImage";
import Caption from "@/components/common/Caption";
import styles from "./Image.module.scss";

const Image = ({
  bleed,
  caption,
  ...props
}: {
  bleed?: boolean;
  caption?: string;
} & ImageProps) => {
  return (
    <>
      <div className={`${bleed ? styles["wrapper"] : ""}`}>
        <BlurImage {...props} />
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </>
  );
};

export default Image;
