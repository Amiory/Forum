import React from "react";

export default function ForumPreview() {
  return (
    <div className="flex flex-col p-3 text-xl bg-lightBrown rounded-xl rounded-tl-none">
      <div className="font-iceberg text-darkBrown border-b-2 border-b-darkBrown w-full pb-2 px-2">
        Amiory
      </div>
      <div className="text-wheat font-albert_sans text-base pt-2 text-ellipsis w-full line-clamp-2 px-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quisquam
        distinctio odio facilis.
      </div>
    </div>
  );
}
