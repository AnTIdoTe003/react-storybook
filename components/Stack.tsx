import { CSSProperties } from "react";
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
const Stack = ({
  children,
  spacing = 2,
  direction = "row",
  wrap = false,
}: {
  children: React.ReactNode;
  spacing: number;
  direction: FlexDirection;
  wrap: boolean;
}) => {
  const style: CSSProperties = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexDirection: direction,
  };

  if (wrap) {
    style.flexWrap = "wrap";
  }

  return <div style={style}>{children}</div>;
};
