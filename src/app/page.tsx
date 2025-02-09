import ForumPreview from "@/components/ui/Home/ForumPreview";
import BoardHoleIcon from "@/components/ui/icons/BoardHoleIcon";
import HeaderIcon from "@/components/ui/icons/HeaderIcon";

export default function Home() {
  return (
    <div className="w-full p-6 space-y-6 ">
      <div className="w-full hidden rounded-b-3xl mx-auto text-center bg-lightBrown lg:flex items-center p-4 justify-center gap-10">
        <HeaderIcon className="w-1/6" />
        <BoardHoleIcon className="absolute -top-7 w-3 -translate-y-1/2 right-3 " />
        <h1 className="text-4xl text-darkBrown font-jacquard_24">Forum</h1>
        <BoardHoleIcon className="absolute -top-7 w-3 -translate-y-1/2 left-3 -scale-x-100" />
        <HeaderIcon className="w-1/6" />
      </div>
      <ForumPreview />
      <ForumPreview />
      <ForumPreview />
      <ForumPreview />
      <ForumPreview />
      <ForumPreview />
    </div>
  );
}
