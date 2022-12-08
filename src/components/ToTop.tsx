import React, { useEffect } from "react";
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
        className="sticky right-8 -bottom-24 top-[85%] z-50 float-right m-auto rounded bg-violet-400 shadow-violet-300 transition-all hover:cursor-pointer hover:bg-violet-300 hover:shadow-md lg:p-5"
        onClick={() => {
          const animateScroll = () => {
            if (scrolling) {
              return;
            }
            if (window.scrollY >= 5) {
              requestAnimationFrame(animateScroll);
              window.scrollY = window.scrollY / 1.1;
            } else {
              window.scrollTo(0, 0);
            }
          };
          animateScroll();
        }}
      >
        <div className="p-1 text-6xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ToTop;
