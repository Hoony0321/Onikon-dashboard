"use client";
import { Link } from "@chakra-ui/react";

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
  return (
    <Link
      href={href}
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
