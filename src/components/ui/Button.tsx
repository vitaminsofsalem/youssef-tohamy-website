import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const baseStyles =
    "text-white font-light cursor-pointer transition-colors duration-200 text-[clamp(1rem,1.5vw,2.25rem)] px-8 py-3 w-fit";

  const variants = {
    primary: "bg-golden hover:bg-[#997c0d]",
    secondary: "bg-transparent border border-amber-500 hover:bg-amber-500/10",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
