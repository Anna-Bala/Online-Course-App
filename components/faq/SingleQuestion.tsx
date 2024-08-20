"use client";

import { useState } from "react";
import classNames from "classnames";

import PlusIcon from "@/icons/Plus";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Props = {
  faq: {
    answer: string;
    question: string;
  };
};

export default function SingleQuestion({ faq }: Props) {
  const [isOpen, setisOpen] = useState(false);

  const toggleIsOpen = () => setisOpen((prevState) => !prevState);

  return (
    <div className="py-5 px-6 bg-absolute-white border border-white-95 rounded-[10px]">
      <div
        className={classNames("flex justify-between", {
          "pb-5": isOpen,
          "border-b": isOpen,
          "border-white-95": isOpen,
        })}
      >
        <Typography className="!text-[16px] !font-medium mr-10" color={typographyColors.grey15} variant={typographyVariants.body}>
          {faq.question}
        </Typography>
        <button className="p-[10px] bg-orange-95 rounded-md h-max" onClick={toggleIsOpen}>
          <div className={classNames("transition-all ease-in-out delay-150 duration-300", { "-rotate-45": isOpen })}>
            <PlusIcon size={20} />
          </div>
        </button>
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
    </div>
  );
}
