import React from "react";

/**
 * Props for the MobileHeader component.
 * @interface Props
 * @property {React.ReactNode} children - The content to display inside the header.
 */
interface Props {
  children: React.ReactNode;
}

const MobilePaddingWrapper = ({ children }: Props) => {
  return <div className="p-8 lg:p-0">{children}</div>;
};

export default MobilePaddingWrapper;
