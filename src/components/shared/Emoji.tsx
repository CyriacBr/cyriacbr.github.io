import React from 'react';

export interface EmojiProps {
  label?: string;
  symbol: string;
}
const Emoji: React.FC<EmojiProps> = ({ label, symbol}) => {
  return (
    <span
        className="emoji"
        role="img"
        aria-label={label || ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>
  );
};

export { Emoji };