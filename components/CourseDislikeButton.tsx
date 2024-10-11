"use client";

import { dislikeCourse } from "@/utils/handleApiChanges";

type Props = {
  activeSessionUserId?: string;
  courseId: number;
};

export default function CourseDislikeButton({ activeSessionUserId, courseId }: Props) {
  const handleDislikeButton = async () => await dislikeCourse({ courseId, revalidatePathUrl: "/profile", userId: activeSessionUserId });

  return (
    <button
      className="mt-[6px] w-full text-[14px] font-medium rounded-md text-grey-15 bg-white-97 hover:bg-white-95 py-[14px] px-5 lg:mx-auto 2xl:text-[18px] disabled:bg-white-90"
      onClick={handleDislikeButton}
    >
      Removed from liked
    </button>
  );
}
