import classnames from "classnames";

const finalClassName = classnames({
  "bg-blue-500": true,
});
console.log(finalClassName);

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const classes = classnames("flex items-center px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary && !outline,
    "border-gray-900 bg-gray-900 text-white": secondary && !outline,
    "border-green-500 bg-green-500 text-white": success && !outline,
    "border-yellow-400 bg-yellow-400 text-white": warning && !outline,
    "border-red-500 bg-red-500 text-white": danger && !outline,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-900": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-400": outline && warning,
    "text-red-500": outline && danger,
  });

  return <button className={classes}>{children}</button>;
}

Button.propTypes = {
  checkVariatinValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "Only one of primary,secondary,success,warning,danger can be be true "
      );
    }
  },
};

export default Button;

// import classnames from "classnames";
// import PropTypes from "prop-types";

// const Button = ({
//   children,
//   primary = false,
//   secondary = false,
//   success = false,
//   warning = false,
//   danger = false,
//   outline = false,
//   rounded = false,
// }) => {
//   const baseClassNames = "px-3 py-1.5 border";
//   const colorClassNames = {
//     primary: "border-blue-500 bg-blue-500 text-white",
//     secondary: "border-gray-900 bg-gray-900 text-white",
//     success: "border-green-500 bg-green-500 text-white",
//     warning: "border-yellow-400 bg-yellow-400 text-white",
//     danger: "border-red-500 bg-red-500 text-white",
//   };
//   const outlineTextClassNames = {
//     primary: "text-blue-500",
//     secondary: "text-gray-900",
//     success: "text-green-500",
//     warning: "text-yellow-400",
//     danger: "text-red-500",
//   };

//   const color = Object.keys(colorClassNames).find((key) => eval(key));
//   const colorClassName = colorClassNames[color];
//   const outlineTextClassName = outlineTextClassNames[color];

//   const classes = classnames(baseClassNames, {
//     [colorClassName]: !!color && !outline,
//     [outlineTextClassName]: outline,
//     "bg-white": outline,
//     "rounded-full": rounded,
//   });

//   return <button className={classes}>{children}</button>;
// };

// Button.propTypes = {
//   children: PropTypes.node,
//   primary: PropTypes.bool,
//   secondary: PropTypes.bool,
//   success: PropTypes.bool,
//   warning: PropTypes.bool,
//   danger: PropTypes.bool,
//   outline: PropTypes.bool,
//   rounded: PropTypes.bool,
// };

// Button.defaultProps = {
//   children: "Button",
// };

// export default Button;

// import classnames from "classnames";
// import PropTypes from "prop-types";

// const Button = ({
//   children,
//   primary = false,
//   secondary = false,
//   success = false,
//   warning = false,
//   danger = false,
//   outline = false,
//   rounded = false,
// }) => {
//   const baseClassNames = "px-3 py-1.5 border";
//   const colorClassNames = {
//     primary: "border-blue-500 bg-blue-500 text-white",
//     secondary: "border-gray-900 bg-gray-900 text-white",
//     success: "border-green-500 bg-green-500 text-white",
//     warning: "border-yellow-400 bg-yellow-400 text-white",
//     danger: "border-red-500 bg-red-500 text-white",
//   };
//   const outlineTextClassNames = {
//     primary: "text-blue-500",
//     secondary: "text-gray-900",
//     success: "text-green-500",
//     warning: "text-yellow-400",
//     danger: "text-red-500",
//   };

//   const color = Object.keys(colorClassNames).find((key) => eval(key));
//   const colorClassName = colorClassNames[color];
//   const outlineTextClassName = outlineTextClassNames[color];

//   const classes = classnames(baseClassNames, {
//     [colorClassName]: !!color && !outline,
//     [outlineTextClassName]: outline,
//     "bg-white": outline,
//     "rounded-full": rounded,
//   });

//   return <button className={classes}>{children}</button>;
// };

// Button.propTypes = {
//   children: PropTypes.node,
//   primary: PropTypes.bool,
//   secondary: PropTypes.bool,
//   success: PropTypes.bool,
//   warning: PropTypes.bool,
//   danger: PropTypes.bool,
//   outline: PropTypes.bool,
//   rounded: PropTypes.bool,
// };

// Button.defaultProps = {
//   children: "Button",
// };

// export default Button;
