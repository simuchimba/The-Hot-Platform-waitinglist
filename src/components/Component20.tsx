import "./Component20.css";

export default function Component20(props: Component20Props) {
  return (
    <>
      <div
        className={`${props.className} component-20-component-20x-2 ${
          props.type === "FRAME1000005227_TYPE"
            ? "component-20-component-20x-2-0-type"
            : ""
        } ${
          props.type === "FRAME1000005228_TYPE"
            ? "component-20-component-20x-2-1-type"
            : ""
        }`}
      >
        <p
          className={`component-20-log-in ${
            props.type === "FRAME1000005227_TYPE"
              ? "component-20-log-in-0-type"
              : ""
          } ${
            props.type === "FRAME1000005228_TYPE"
              ? "component-20-log-in-1-type"
              : ""
          }`}
        >
          {props.text}
        </p>
      </div>
    </>
  );
}

Component20.defaultProps = {
  className: "",
  type: "FRAME1000005227_TYPE",
  text: "Learn more",
};

interface Component20Props {
  className: string;
  type: "FRAME1000005227_TYPE" | "FRAME1000005228_TYPE";
  text: string;
}


