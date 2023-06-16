import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const PreviewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[50px] w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-start md:ml-[0] ml-[71px] mt-[21px] md:px-5 w-[27%] md:w-full">
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_ggarrowlefto.svg"
              alt="ggarrowlefto"
            />
            <Text
              className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
              size="txtPoppinsSemiBold22Bluegray90001"
            >
              Welcome to Self Service Portal
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[120px] mt-[35px] md:px-5 w-[90%] md:w-full">
            <div className="flex flex-row gap-[34px] items-start justify-start w-[23%] md:w-full">
              <Text
                className="common-pointer text-gray-600 text-sm"
                size="txtPoppinsMedium14Gray600"
                onClick={() => navigate("/basicdetails")}
              >
                Basic Details
              </Text>
              <Text
                className="common-pointer text-gray-600 text-sm"
                size="txtPoppinsMedium14Gray600"
                onClick={() => navigate("/configure")}
              >
                Configure
              </Text>
              <Text
                className="text-black-900 text-sm"
                size="txtPoppinsMedium14"
              >
                Preview
              </Text>
            </div>
            <Line className="bg-blue_gray-900 h-0.5 md:ml-[0] ml-[210px] mt-[5px] w-[8%]" />
            
            <Button className="bg-white-900 mt-[-30px] cursor-pointer font-medium mb-1.5 min-w-[93px] md:ml-[0] ml-[986px] py-[7px] rounded-[7px] shadow-bs2 text-[10px] text-center text-black-A700">
                Cancel
            </Button>
            <Button className="bg-blue_gray-900 mt-[-32px] ml-[1100px] cursor-pointer font-medium mb-1.5 min-w-[93px] md:ml-[0] py-[7px] rounded-[7px] shadow-bs2 text-[10px] text-center text-white-A700">
                Submit
              </Button>

            <Text
              className="ml-1 md:ml-[0] mt-[26px] text-black-900 text-sm"
              size="txtPoppinsRegular14"
            >
              Preview
            </Text>
            <div className="bg-gray-300 flex flex-col items-start justify-start mt-2 p-[52px] md:px-10 sm:px-5 rounded-[7px] w-[92%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[14px] items-center justify-start mb-3 md:ml-[0] ml-[102px] w-[62%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-blue-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Cloud : 
                  </Text>
                  <Text
                    className="h-[33px] justify-center pb-[9px] pl-3 sm:pr-5 pr-[225px] pt-[5px] rounded-[7px] text-black-900 text-xs w-[452px]"
                    size="txtPoppinsRegular12"
                  > AWS </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-blue-900 text-xs"
                    size="txtPoppinsRegular12">
                    Account Name : 
                  </Text>
                  <Text
                    className="h-[33px] justify-center pb-[2px] pl-3 sm:pr-5 pt-[5px] rounded-[7px] text-black-900 text-xs w-[452px]"
                    size="txtPoppinsRegular12"
                  > Account </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-blue-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Select Launch Category : 
                  </Text>
                  <Text
                    className="  h-[33px] justify-center pb-[2px] pl-3 sm:pr-5 pt-[5px] rounded-[7px] text-black-900 text-xs w-[452px]"
                    size="txtPoppinsRegular12"
                  >
                    VM
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-blue-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Select Configuration :  
                  </Text>
                  <Text
                    className="  h-[33px] justify-center pb-[2px] pl-3 sm:pr-5 pt-[5px] rounded-[7px] text-black-900 text-xs w-[452px]"
                    size="txtPoppinsRegular12"
                  >
                    Virtual Machine 
                  </Text>
                </div>

                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-blue-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Name and tags : 
                  </Text>
                  <Text
                    className="  h-[33px] justify-center pb-[2px] pl-3 sm:pr-5 pt-[5px] rounded-[7px] text-black-900 text-xs w-[452px]"
                    size="txtPoppinsRegular12"
                  >
                    text
                  </Text>
                </div>

                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-blue-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    OS :  
                  </Text>
                  <Text
                    className="  h-[33px] justify-center pb-[2px] pl-3 sm:pr-5 pt-[5px] rounded-[7px] text-black-900 text-xs w-[452px]"
                    size="txtPoppinsRegular12"
                  >
                    Amazon Linux
                  </Text>
                </div>

                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-blue-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Amazon Machine Image(AMI) :  
                  </Text>
                  <Text
                    className="  h-[33px] justify-center pb-[2px] pl-3 sm:pr-5 pt-[5px] rounded-[7px] text-black-900 text-xs w-[452px]"
                    
                  >
                    <b> Amazon Linux 2023 AMI</b> <br />
                    <span
                    className="text-grey-A300 text-xs"
                    size=" txtPoppinsRegular10Gray60001"
                    >ami-0607784b4cbe5816(64-bit(x86)) ami-0607784b4cbe5816(64-bit(x86)) <br />
                      Virtualization:hvm
                      ENA enabled: true
                      Root device type: ebs </span>
                  </Text>
                </div>

                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full mt-5">
                  <Text
                    className="text-blue-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Architecture :  
                  </Text>
                  <Text
                    className="  h-[33px] justify-center pb-[2px] pl-3 sm:pr-5 pt-[5px] rounded-[7px] text-black-900 text-xs w-[452px] mt-7"
                    size="txtPoppinsRegular12"
                  >
                    64 bit(x-86)
                  </Text>
                </div>

                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-blue-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Instance Type : 
                  </Text>
                  <Text
                    className="  h-[33px] justify-center pb-[2px] pl-3 sm:pr-5 pt-[5px] rounded-[7px] text-black-900 text-xs w-[452px]"
                    size="txtPoppinsRegular12"
                  >
                    text
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewPage;
