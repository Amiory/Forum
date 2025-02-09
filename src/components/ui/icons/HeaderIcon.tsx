type IconProps = React.HTMLAttributes<SVGElement>;

export default function HeaderIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 678 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.5 32.5C146.5 55 418 86.5 336 32.5C254 -21.5 529.167 10 677 32.5H0.5Z"
        stroke="#E3B072"
        strokeWidth="4"
      />
    </svg>
  );
}
