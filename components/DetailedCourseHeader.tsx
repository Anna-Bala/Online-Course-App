"use client";

import { useRef, useState } from "react";

import type { Session } from "next-auth";

import { dislikeCourse, likeCourse } from "@/utils/handleApiChanges";
import { HeartFilledIcon, HeartOutlinedIcon } from "@/icons";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Props = {
  activeSession: Session | null;
  courseId: number;
  courseTitle: string;
  isCourseLiked: boolean;
};

export default function DetailedCourseHeader({ activeSession, courseId, courseTitle, isCourseLiked }: Props) {
  const [isCourseCurrentlyLiked, setIsCourseCurrentlyLiked] = useState(isCourseLiked);
  const apiCallTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActiveSession = !!activeSession;

  const toggleCourseLike = async () => {
    setIsCourseCurrentlyLiked((prevState) => !prevState);

    if (apiCallTimeoutRef.current) clearTimeout(apiCallTimeoutRef.current);

    apiCallTimeoutRef.current = setTimeout(async () => {
      const apiCallData = { courseId, userId: activeSession?.user?.id, revalidatePathUrl: "/courses" };
      isCourseCurrentlyLiked ? await dislikeCourse(apiCallData) : await likeCourse(apiCallData);
    }, 1000);
  };

  return (
    <div className="w-100 flex items-center mb-1 lg:mb-[6px] 2xl:mb-[10px]">
      {isActiveSession && (
        <button className="mr-4" onClick={toggleCourseLike}>
          {isCourseCurrentlyLiked ? <HeartFilledIcon fill="#FF9500" size={24} /> : <HeartOutlinedIcon fill="#FFF" size={24} />}
        </button>
      )}
      <Typography className="text-lg lg:text-xl 2xl:text-2xl" color={typographyColors.grey15} variant={typographyVariants.subtitle}>
        {courseTitle}
      </Typography>
    </div>
  );
}
