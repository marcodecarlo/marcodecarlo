"use client";
import {
  FolderIcon,
  ErrorIcon,
  LayoutIcon,
  LoadingIcon,
  TemplateIcon,
  PageIcon,
} from "@/components";

export enum NameIcon {
  Layout = "layout.tsx",
  Loading = "loading.tsx",
  Error = "error.tsx",
  Head = "head.tsx",
  Template = "template.tsx",
  Page = "page.tsx",
}

interface IconProps {
  name: `${NameIcon}` | string;
  className: string;
  isFolder?: boolean;
}

const Icon = ({ name, className, isFolder }: IconProps) => {
  if (isFolder) return <FolderIcon className={className} />;
  switch (name) {
    case NameIcon.Layout:
      return <LayoutIcon className={className} />;
    case NameIcon.Loading:
      return <LoadingIcon className={className} />;
    case NameIcon.Error:
      return <ErrorIcon className={className} />;
    case NameIcon.Head:
    case NameIcon.Template:
      return <TemplateIcon className={className} />;
    case NameIcon.Page:
    default:
      return <PageIcon className={className} />;
  }
};

export default Icon;
