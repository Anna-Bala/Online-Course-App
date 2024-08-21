"use client";

import { useState } from "react";
import classNames from "classnames";

import PlusIcon from "@/icons/Plus";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";
import useGetWindowSize from "@/hooks/useGetWindowSize";

type Props = {
  faq: {
    answer: string;
    question: string;
  };
};

export default function SingleQuestion({ faq }: Props) {
  const [isOpen, setisOpen] = useState(false);

  const toggleIsOpen = () => setisOpen((prevState) => !prevState);

  const { is2Xl, isLg } = useGetWindowSize();

  return (
    <button className="py-5 px-6 bg-absolute-white border border-white-95 rounded-[10px]" onClick={toggleIsOpen}>
      <div
        className={classNames("flex justify-between items-center", {
          "pb-5": isOpen,
          "border-b": isOpen,
          "border-white-95": isOpen,
        })}
      >
        <Typography className="!text-[16px] !font-medium mr-10 lg:!text-[18px] 2xl:!text-[20px]" color={typographyColors.grey15} variant={typographyVariants.body}>
          {faq.question}
        </Typography>
        <div className="p-[10px] bg-orange-95 rounded-md h-max">
          <div className={classNames("transition-all ease-in-out delay-150 duration-300", { "-rotate-45": isOpen })}>
            <PlusIcon size={is2Xl ? 28 : isLg ? 24 : 20} />
          </div>
        </div>
      </div>
      <Typography
        className={classNames("transition-all ease-in-out delay-150 duration-300 overflow-hidden", {
          "max-h-[1000px] opacity-100 mt-5": isOpen,
          "max-h-0 opacity-0": !isOpen,
        })}
        color={typographyColors.grey30}
        variant={typographyVariants.body}
      >
        {faq.answer}
      </Typography>
    </button>
  );
}
