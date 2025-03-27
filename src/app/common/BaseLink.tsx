"use client";

import { Link } from "@chakra-ui/react";
import { useParams } from "next/navigation";

const BaseLink = ({
  href,
  children,
  isExternal = false,
  color = "black",
  style,
}: {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  color?: string;
  style?: React.CSSProperties;
}) => {
  const params = useParams();
  const locale = params.locale || "en"; // 기본값 영어

  return (
    <Link
      href={isExternal ? href : `/${locale}${href}`}
      outline="none"
      textDecoration="none"
      cursor="pointer"
      target={isExternal ? "_blank" : "_self"}
      color={color}
      style={style}
    >
      {children}
    </Link>
  );
};

export default BaseLink;
