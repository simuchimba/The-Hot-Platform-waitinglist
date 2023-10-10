import "./Facebook.css";

export default function Facebook(props: FacebookProps) {
  return (
    <div className={`${props.className} facebook-facebook`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14.4482"
          cy="14.6201"
          r="12.0185"
          fill="#0B081C"
         />
        <path
          d="M 18.924 18.295 L 19.457 14.903 H 16.118 V 12.703 C 16.118 11.775 16.583 10.869 18.079 10.869 H 19.599 V 7.981 C 19.599 7.981 18.22 7.752 16.903 7.752 C 14.151 7.752 12.354 9.377 12.354 12.318 V 14.903 H 9.297 V 18.295 H 12.354 V 26.496 C 12.968 26.59 13.596 26.638 14.236 26.638 C 14.876 26.638 15.504 26.59 16.118 26.496 V 18.295 H 18.924 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

Facebook.defaultProps = {
  className: "",
};

interface FacebookProps {
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
