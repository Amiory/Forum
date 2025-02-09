type IconProps = React.HTMLAttributes<SVGElement>;

export default function BoardHole(props: IconProps) {
  return (
    <div className="size-8 rounded-full bg-darkBrown relative">
      <svg
        viewBox="0 0 7 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M1.92261 1C1.16126 16.3724 0.256144 44.8925 2.72646 35.9943"
          stroke="#E3B072"
          strokeWidth="2"
        />
        <path
          d="M4.92261 1C4.16126 16.3724 3.25614 44.8925 5.72646 35.9943"
          stroke="#E3B072"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
