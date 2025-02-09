import ForumPreview from "@/components/ui/Home/ForumPreview";

export default function Home() {
  return (
    <div className="w-full p-6 space-y-6 ">
      <div className="w-full hidden rounded-b-3xl mx-auto text-center bg-lightBrown p-4 lg:block">
        <h1 className="text-4xl text-darkBrown font-jacquard_24">Forum</h1>
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
