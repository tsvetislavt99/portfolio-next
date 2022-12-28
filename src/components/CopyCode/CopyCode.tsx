import React from 'react';
import { FaCopy, FaCheckSquare } from 'react-icons/fa';

interface CodeCopyBtnProps {
  children: React.ReactNode;
}

export default function CodeCopyBtn({ children }: CodeCopyBtnProps) {
  const [copyOk, setCopyOk] = React.useState(false);

  const iconColor = copyOk ? '#00e0c6' : '#F1F7ED';
  const Icon = copyOk ? FaCheckSquare : FaCopy;

  const handleClick = () => {
    navigator.clipboard.writeText(children[0].props.children[0]);

    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 500);
  };

  return (
    <div className="absolute right-5 top-5 hover:scale-105 transition duration-300 cursor-pointer z-30">
      <Icon
        onClick={handleClick}
        className="hover:fill-light-secondary"
        style={{ color: iconColor }}
      />
    </div>
  );
}
