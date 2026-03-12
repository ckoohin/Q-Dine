import React from "react";

const HeaderActions = () => {
  return (
    <div className="flex items-center gap-3">
      <button className="size-10 flex items-center justify-center bg-white rounded-full shadow-soft text-slate-400 hover:text-savory-green hover:shadow-md transition-all">
        <span className="material-symbols-outlined text-[20px]">
          mail
        </span>
      </button>

      <button className="size-10 flex items-center justify-center bg-white rounded-full shadow-soft text-slate-400 hover:text-savory-green hover:shadow-md transition-all relative">
        <span className="material-symbols-outlined text-[20px]">
          notifications
        </span>

        <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white" />
      </button>
    </div>
  );
};

export default HeaderActions;