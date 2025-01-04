import { ReactNode } from "react";

interface buttonProps {
  children: ReactNode;
  onClick: VoidFunction;
}

export default function Button({ children, onClick }: buttonProps) {
  return (
    <button
      className="w-[176px] h-[48px] rounded cursor-pointer z-50 hover:bg-black-light transition-all"
      style={{ border: "1px solid var(--blue-auxiliary)" }}
      onClick={onClick}
    >
      <span className="text-white-normal">{children}</span>
    </button>
  );
}
