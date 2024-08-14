import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const Button = ({
  title,
  otherClasses,
}: {
  title: string;
  otherClasses?: string;
}) => {
  return (
    <button type="submit"
      className="relative inline-flex h-12 w-full  overflow-hidden rounded-lg p-[1px] focus:outline-none"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
        bg-primary-500 hover:bg-primary-600 px-7 text-[16px] font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {title}
      </span>
    </button>
  );
};

export default Button;
