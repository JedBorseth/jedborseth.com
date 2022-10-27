import React, { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
const ToTop = () => {
  let scrolling = false;
  useEffect(() => {
    document.addEventListener("wheel", () => {
      // Lets user stop scroll animation by using scroll wheel, does not work for mobile
      setInterval(() => {
        scrolling = false;
      }, 500);
      scrolling = true;
    });
  });
  return (
    <>
      <div
        className="sticky right-8 -bottom-24 top-[90%] float-right m-auto rounded bg-violet-600 shadow-violet-300 transition-all hover:cursor-pointer hover:bg-violet-300 hover:shadow-md"
        onClick={() => {
          const animateScroll = () => {
            if (scrolling) {
              return;
            }
            if (window.scrollY >= 5) {
              requestAnimationFrame(animateScroll);
              window.scrollTo(0, window.scrollY / 1.1);
            } else {
              window.scrollTo(0, 0);
            }
          };
          animateScroll();
        }}
      >
        <AiOutlineArrowUp className="p-1 text-6xl" />
      </div>
    </>
  );
};

export default ToTop;
