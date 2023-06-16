import React from "react";

const sizeClasses = {
  txtPoppinsRegular14Red900: "font-normal font-poppins",
  txtPoppinsSemiBold1428: "font-poppins font-semibold",
  txtPoppinsMedium1178: "font-medium font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsMedium1178Gray40002: "font-medium font-poppins",
  txtPoppinsRegular12WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold22Bluegray90001: "font-poppins font-semibold",
  txtPoppinsRegular1024: "font-normal font-poppins",
  txtPoppinsRegular12Bluegray900: "font-normal font-poppins",
  txtPoppinsRegular10Gray60001: "font-normal font-poppins",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular14Bluegray90001: "font-normal font-poppins",
  txtPoppinsMedium22: "font-medium font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsMedium14WhiteA700: "font-medium font-poppins",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtPoppinsRegular12Gray600: "font-normal font-poppins",
  txtPoppinsRegular10Gray600: "font-normal font-poppins",
  txtPoppinsMedium14Bluegray900: "font-medium font-poppins",
  txtPoppinsMedium14Gray600: "font-medium font-poppins",
  txtPoppinsRegular10Gray900: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
