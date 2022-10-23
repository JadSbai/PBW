import React, { useState } from "react";

interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  const [variantShowing, setVariantShowing] = useState(false);

  const style = variantShowing
    ? "text-8xl text-center grow text-black font-sans font-black transition duration-500 hover:text-red"
    : "text-8xl text-center grow text-black font-serif font-black transition duration-500 hover:text-red";

  return (
    <div onClick={() => setVariantShowing(!variantShowing)} className={style}>
      {props.title}
    </div>
  );
};
