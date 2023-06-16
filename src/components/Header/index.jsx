import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[17px] ml-6 md:ml-[0] md:mt-0 my-[17px] w-[17px]"
          src="images/img_grid.svg"
          alt="grid"
        />
        <div className="flex flex-row items-start justify-center md:ml-[0] ml-[30px] md:mt-0 my-3.5 w-[9%] md:w-full">
          <Img
            className="h-[18px] mt-0.5"
            src="images/img_group1203.svg"
            alt="group1203"
          />
          <div className="flex flex-col items-center justify-start ml-1">
            <Text
              className="text-[14.28px] text-white-A700"
              size="txtPoppinsSemiBold1428"
            >
              CloudStudio
            </Text>
          </div>
        </div>
        <Button className="bg-white-A700 flex items-center justify-center md:ml-[0] ml-[1030px] md:mt-0 my-2.5 p-1.5 rounded-[5px] shadow-bs w-[29px]">
          <Img className="h-4" src="images/img_search.svg" alt="search" />
        </Button>
        <Button className="bg-white-A700 cursor-pointer font-medium font-poppins leading-[normal] min-w-[93px] md:ml-[0] ml-[13px] md:mt-0 my-2.5 py-[7px] rounded-[5px] shadow-bs text-[10px] text-blue_gray-900 text-center">
          Admin Panel
        </Button>
        <Img
          className="h-[30px] md:h-auto md:ml-[0] ml-[13px] mr-[38px] md:mt-0 my-2.5 object-cover rounded-[5px] w-[30px]"
          src="images/img_rectangle6282.png"
          alt="rectangle6282"
        />
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
