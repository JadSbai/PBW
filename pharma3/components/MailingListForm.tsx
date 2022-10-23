import React from "react";

export const MailingListForm = () => {
  return (
    <div className="text-center pt-8 ">
      <form>
        <input
          placeholder="where should we contact you in an emergency?"
          className="
                transition
                px-4 
                py-2
                w-2/3
                text-center
                outline-none 
                ring-0
                text-xl
            "
        />
      </form>
    </div>
  );
};
