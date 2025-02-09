export default function HamburgerMenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="size-8 flex flex-col justify-center gap-1 cursor-pointer">
      <div
        className={`h-1 w-6 bg-[#2E1818] transform duration-300 ${
          isOpen && "rotate-[-45deg] -mb-2"
        }`}
      ></div>
      <div
        className={`h-1 w-6 bg-[#2E1818] ml-2 transition-opacity duration-300 ${
          isOpen && "opacity-0"
        }`}
      ></div>
      <div
        className={`h-1 w-6 bg-[#2E1818] transform duration-300 ${
          isOpen && "rotate-45 -mt-2"
        }`}
      ></div>
    </div>
  );
}
