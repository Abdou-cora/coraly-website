
type ButtonProps = {
  className?: string;
  onClick?: () => void;
  text: string;
};

export default function StartFreeButton({ className, onClick, text }: ButtonProps) {
  return (
    <button type="submit" aria-label={text} className={className} onClick={onClick}  data-popup="signup">
      {text}
    </button>
  );
}
