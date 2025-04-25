"use client";

import { FC } from "react";
import { useDynamicSVGImport } from "@/hooks/useDynamicSVGImport";

interface IIcon {
  name: string;
}

export const Icon: FC<IIcon> = ({ name }) => {
  const { error, SvgIcon } = useDynamicSVGImport(name);

  if (error) {
    console.error("Error while importing icon", error);
    return null;
  }

  if (SvgIcon) {
    return <SvgIcon />;
  }

  return null;
};
