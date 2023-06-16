import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import Header from "components/Header";

const DashboardMyCRnodataPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[63px] w-full">
        <div className="flex flex-col gap-[23px] justify-start w-full">
          <Header className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[120px] md:px-5 w-[65%] md:w-full">
            <Text
              className="text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
              size="txtPoppinsSemiBold22"
            >
              Dashboard
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-8 w-full">
              <div className="flex flex-col gap-[9px] items-center justify-start">
                <Text
                  className="text-blue_gray-900 text-sm"
                  size="txtPoppinsSemiBold14"
                >
                  My Activities
                </Text>
                <Line className="bg-blue_gray-900 h-0.5 w-full" />
              </div>
              <Img
                className="h-[308px] md:mt-0 mt-[23px]"
                src="images/img_group1983.svg"
                alt="group1983"
              />
            </div>
            <Text
              className="md:ml-[0] ml-[456px] mt-7 text-[22px] text-gray-700 sm:text-lg md:text-xl"
              size="txtPoppinsMedium22"
            >
              Your Dashboard is empty.{" "}
            </Text>
            <Text
              className="common-pointer md:ml-[0] ml-[471px] mt-1 text-[22px] text-gray-700 sm:text-lg md:text-xl"
              size="txtPoppinsMedium22"
              onClick={() => navigate("/basicdetails")}
            >
              <span className="text-gray-700 font-poppins text-left font-medium">
                To create CR{" "}
              </span>
              <a
                href="javascript:"
                className="text-blue_gray-900 font-poppins text-left font-medium underline"
              >
                click here.
              </a>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMyCRnodataPage;
