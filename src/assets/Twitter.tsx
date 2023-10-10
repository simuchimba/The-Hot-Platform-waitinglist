import "./Twitter.css";

export default function Twitter(props: TwitterProps) {
  return (
    <div className={`${props.className} twitter-twitter`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 28 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 10.334 24.923 C 7.557 24.923 4.968 24.115 2.789 22.721 C 4.639 22.841 7.904 22.554 9.935 20.617 C 6.88 20.477 5.502 18.134 5.322 17.133 C 5.582 17.233 6.82 17.353 7.519 17.073 C 4.005 16.192 3.465 13.108 3.585 12.167 C 4.244 12.627 5.362 12.787 5.802 12.747 C 2.527 10.404 3.705 6.88 4.284 6.119 C 6.634 9.374 10.156 11.203 14.513 11.305 C 14.431 10.944 14.387 10.569 14.387 10.184 C 14.387 7.419 16.622 5.178 19.379 5.178 C 20.819 5.178 22.117 5.79 23.028 6.768 C 23.991 6.543 25.439 6.015 26.147 5.558 C 25.79 6.84 24.679 7.909 24.007 8.305 C 24.001 8.292 24.012 8.319 24.007 8.305 C 24.597 8.216 26.195 7.909 26.826 7.481 C 26.514 8.201 25.336 9.398 24.369 10.068 C 24.549 18.002 18.479 24.923 10.334 24.923 Z"
          fill="#0B081C"
         />
      </svg>
    </div>
  );
}

Twitter.defaultProps = {
  className: "",
};

interface TwitterProps {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
