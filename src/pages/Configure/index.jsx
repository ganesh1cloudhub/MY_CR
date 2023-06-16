import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Switch, Text } from "components";
import Header from "components/Header";

const osOptionsList = [
  { label: "Amazon Linux", value: "Amazon Linux" },
  { label: "Optiomac OS", value: "Optiomac OS" },
  { label: "Ubuntu", value: "Ubuntu" },
  { label: "Windows", value: "Windows" },
  { label: "Red Hat", value: "Red Hat" },
  { label: "SUSE Linux", value: "SUSE Linux" },
  { label: "Debian2", value: "Debian2" }
];
const bitX86CounterOptionsList = [
  { label: "64 bit", value: "64 bit" },
  { label: "32 bit", value: "32 bit" },
];
const AMIOptionsList = [
  { label: "Amazon Linux 2023 AMI Free tier eligible, ami-0607784b4cbe5816(64-bit(x86)) / ami-0607784b4cbe5816(64-bit(x86)) Virtualization:hvm  ENA enabled: true Root device type: ebs", value: "Amazon Linux 2023 AMI Free tier eligible, ami-0607784b4cbe5816(64-bit(x86)) / ami-0607784b4cbe5816(64-bit(x86)) Virtualization:hvm  ENA enabled: true Root device type: ebs"},
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
]; 

const InstanceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
]
const gp3OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const loginOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const VPCOptionsList = [

    { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SubnetOptionsList = [
    { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AutoAssignList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const NetworkList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ConfigurePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col justify-end w-full">
          <Header className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row gap-[31px] items-center justify-start md:ml-[0] ml-[71px] mr-[981px] mt-[21px] md:px-5 w-[27%] md:w-full">
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
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[120px] mr-[38px] mt-[29px] md:px-5 w-[90%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Text
                className="common-pointer md:mt-0 mt-1.5 text-gray-600 text-sm"
                size="txtPoppinsMedium14Gray600"
                onClick={() => navigate("/basicdetails")}
              >
                Basic Details
              </Text>
              <div className="flex md:flex-1 flex-col items-center justify-start ml-6 md:ml-[0] md:mt-0 mt-2 w-[8%] md:w-full">
                <Text
                  className="text-black-900 text-sm"
                  size="txtPoppinsMedium14"
                >
                  Configure
                </Text>
                <Line className="bg-blue_gray-900 h-0.5 mt-[5px] w-full" />
              </div>
              <Text
                className="common-pointer ml-6 md:ml-[0] md:mt-0 mt-1.5 text-gray-600 text-sm"
                size="txtPoppinsMedium14Gray600"
                onClick={() => navigate("/preview")}
              >
                Preview
              </Text>
              <Button onClick={() => navigate("/preview")} className="bg-blue_gray-900 cursor-pointer font-medium mb-1.5 min-w-[93px] md:ml-[0] ml-[906px] py-[7px] rounded-[7px] shadow-bs2 text-[10px] text-center text-white-A700">
                Save
              </Button>
            </div>
            <Text
              className="md:ml-[0] ml-[5px] mt-6 text-black-900 text-sm"
              size="txtPoppinsRegular14">
              Virtual Machine Configuration
            </Text>
            <div className="bg-gray-300 flex flex-col items-start justify-start mt-[15px] p-[21px] sm:px-5 rounded-[7px] w-[97%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-2 md:ml-[0] w-4/5 md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Name and tags (required)
                </Text>
                <Input
                  name="group1720"
                  placeholder="Enter name"
                  className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-xs w-full"
                  wrapClassName="bg-white-A700 md:ml-[0] ml-[226px] px-3 py-[7px] rounded-[7px] w-[46%] md:w-full"
                  type="text"
                ></Input>
                {/* <Text
                  className="ml-3.5 md:ml-[0] text-blue_gray-900 text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  Add additional tags
                </Text> */}
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[29px] mt-[22px] text-black-900 text-xs"
              size="txtPoppinsRegular12"
            >
              Application and OS Images (Amazon Machine Image)
            </Text>
            <div className="bg-gray-300 flex flex-col items-start justify-start mt-[19px] p-5 rounded-[7px] w-[97%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-2 md:ml-[0] ml-[9px] w-[65%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
                  <Text  className="text-black-900 text-xs"  size="txtPoppinsRegular12">
                    OS
                  </Text>
                  <SelectBox 
                    className="bg-white-A700 sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] shadow-bs1 text-gray-600 text-left text-sm w-[54%] sm:w-full"
                    placeholderClassName="text-gray-600"
                    indicator={
                      <Img
                        className="h-1.5 mr-[0] w-[11px]"
                        src="images/img_arrowdown_blue_gray_900_01.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="OS options"
                    options={osOptionsList}
                    isSearchable={false}
                    placeholder="Select"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-between mt-[25px] w-full">
                  <Text
                    className="md:mt-0 mt-3 text-black-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Amazon Machine Image(AMI)
                  </Text>
                  <SelectBox
                    className="ami bg-white-A700 text-wrap-[wrap]  white-space-[wrap] sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] h-[120px] shadow-bs1 text-gray-600 text-left text-sm w-[54%] sm:w-full"
                    indicator={
                      <Img
                        className="h-1.5 mr-[0] w-[11px]"
                        src="images/img_arrowdown_blue_gray_900_01.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="amiList"
                    options={AMIOptionsList}
                    isSearchable={false}
                    placeholder="Select"
                  />
                </div>
                <div className="flex flex-row sm:gap-10 items-end justify-between mt-[30px] w-[68%] md:w-full">
                  <Text
                    className="mt-[11px] text-black-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Architecture
                  </Text>
                  <SelectBox
                    className="bg-white-A700 pl-3 pr-2 py-1.5 rounded-[7px] shadow-bs1 text-[10px] text-black-900 text-left w-[31%] sm:w-full"
                    placeholderClassName="text-black-900"
                    indicator={
                      <Img
                        className="h-2 mr-[0] w-3.5"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="bit(x-86)Counter"
                    options={bitX86CounterOptionsList}
                    isSearchable={false}
                    placeholder="64 bit(x-86)"
                  />
                </div>
                
      
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[35px] w-full">
                  <Text
                    className="md:mt-0 mt-4 text-black-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Instance Type
                  </Text>
                  <SelectBox 
                    className="bg-white-A700 sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] shadow-bs1 text-gray-600 text-left text-sm w-[54%] sm:w-full"
                    placeholderClassName="text-gray-600"
                    indicator={
                      <Img
                        className="h-1.5 mr-[0] w-[11px]"
                        src="images/img_arrowdown_blue_gray_900_01.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="groupSeventy"
                    options={InstanceOptionsList}
                    isSearchable={false}
                    placeholder="Select"
                  />
                </div>
      
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[35px] w-full">
                  <Text
                    className="md:mt-0 mt-4 text-black-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Key pair (login)
                  </Text>
                  <SelectBox 
                    className="bg-white-A700 sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] shadow-bs1 text-gray-600 text-left text-sm w-[54%] sm:w-full"
                    placeholderClassName="text-gray-600"
                    indicator={
                      <Img
                        className="h-1.5 mr-[0] w-[11px]"
                        src="images/img_arrowdown_blue_gray_900_01.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="keypair"
                    options={loginOptionsList}
                    isSearchable={false}
                    placeholder="Select"
                  />
              </div>
            </div>
          
            </div>
            
        
              <Text
              className="md:ml-[0] ml-[29px] mt-5 text-black-900 text-sm"
              size="txtPoppinsRegular14"
            >
              Network
            </Text>
            <div className="bg-gray-300 flex flex-col items-start justify-start mt-[17px] p-[21px] sm:px-5 rounded-[7px] w-[97%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-15 items-start justify-between mt-[7px] w-[65%]">
                  <Text
                    className="md:mt-0 mt-1 text-black-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    VPC
                  </Text>
                  <SelectBox 
                    className="bg-white-A700 sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] shadow-bs1 text-gray-600 text-left text-sm w-[54%] sm:w-full"
                    placeholderClassName="text-gray-600"
                    indicator={
                      <Img
                        className="h-1.5 mr-[0] w-[11px]"
                        src="images/img_arrowdown_blue_gray_900_01.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="vpc"
                    options={VPCOptionsList}
                    isSearchable={false}
                    placeholder="Select"
                  />
              </div>
              <div className="flex md:flex-col flex-row md:gap-15 items-start justify-between mt-[22px] w-[65%]">
                  <Text
                    className="md:mt-0 mt-2 text-black-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                Subnet
              </Text>
              <SelectBox 
                    className="bg-white-A700 sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] shadow-bs1 text-gray-600 text-left text-sm w-[54%] sm:w-full"
                    placeholderClassName="text-gray-600"
                    indicator={
                      <Img
                        className="h-1.5 mr-[0] w-[11px]"
                        src="images/img_arrowdown_blue_gray_900_01.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                name="Subnet"
                options={SubnetOptionsList}
                isSearchable={false}
                placeholder="Select"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-15 items-start justify-between mt-[22px] w-[65%]">
                <Text
                    className="md:mt-0 mt-2 text-black-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                Auto Assign Public IP
              </Text>
              <SelectBox 
                    className="bg-white-A700 sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] shadow-bs1 text-gray-600 text-left text-sm w-[54%] sm:w-full"
                    placeholderClassName="text-gray-600"
                    indicator={
                      <Img
                        className="h-1.5 mr-[0] w-[11px]"
                        src="images/img_arrowdown_blue_gray_900_01.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                name="AutoAssign"
                options={AutoAssignList}
                isSearchable={false}
                placeholder="Select"
                />
              </div>
              
              <div className="flex md:flex-col flex-row md:gap-15 items-start justify-between mt-[15px] w-[65%]">
                  <Text
                    className="md:mt-0 mt-2 text-black-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                  Network Settings
                </Text>
              </div>
                <div className="flex md:flex-col flex-row md:gap-15 items-start justify-between mt-[15px] w-[65%]">
                <Text
                    className="md:mt-0 mt-2 text-black-900 text-xs ml-12"
                    size="txtPoppinsRegular12"
                  >
                  Select existing security group
              </Text>
              <SelectBox 
                    className="bg-white-A700 sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] shadow-bs1 text-gray-600 text-left text-sm w-[54%] sm:w-full"
                    placeholderClassName="text-gray-600"
                    indicator={
                      <Img
                        className="h-1.5 mr-[0] w-[11px]"
                        src="images/img_arrowdown_blue_gray_900_01.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="NetworkList"
                    options={NetworkList}
                    isSearchable={false}
                    placeholder="Select"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-15 items-start justify-between mt-[15px] w-[95%]">
                  <Text
                    className="md:mt-0 mt-2 text-black-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                Configure storage
              </Text>
              <Text
                className="md:ml-[0] ml-[258px] md:mt-0 mt-[18px] text-black-900 text-sm"
                size="txtPoppinsRegular14"
              >
                1x
              </Text>
              <Text
                className="bg-white-A700 h-[33px] justify-center mb-[31px] md:ml-[0] ml-[5px] md:mt-0 mt-[9px] pl-3 sm:pr-5 pr-[35px] py-[9px] rounded-[7px] text-black-900 text-sm w-[124px]"
                size="txtPoppinsRegular14"
              >
                8
              </Text>
              <Text
                className="md:ml-[0] ml-[5px] md:mt-0 mt-[18px] text-black-900 text-sm"
                size="txtPoppinsRegular14"
              >
                GiB
              </Text>
              <SelectBox
                className="bg-white-A700 mb-[31px] md:ml-[0] ml-[31px] md:mt-0 mt-[9px] pl-3 pr-[9px] py-[9px] rounded-[7px] text-black-900 text-left text-sm w-[11%] md:w-full"
                placeholderClassName="text-black-900"
                indicator={
                  <Img
                    className="h-1.5 mr-[0] w-[11px]"
                    src="images/img_arrowdown_blue_gray_900_01.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="groupFiftyNine"
                options={gp3OptionsList}
                isSearchable={false}
                placeholder="gp3"
              />
              <Text
                className="md:ml-[0] ml-[5px] md:mt-0 mt-[18px] text-black-900 text-sm"
                size="txtPoppinsRegular14"
              >
                Root Volume (Encrypted)
              </Text>
              <Button
                className="common-pointer bg-white-A700 cursor-pointer flex items-center justify-center mb-[38px] min-w-[160px] md:ml-[0] ml-[123px] md:mt-0 mt-0.5 px-[7px] py-2 rounded-[7px] shadow-bs1"
                // onClick={() => navigate("/configureaddnewvolume")}
                leftIcon={
                  <Img
                    className="h-4 mr-[11px]"
                    src="images/img_gridiconsaddoutline.svg"
                    alt="gridicons:add-outline"
                  />
                }
              >
                <div className="text-blue_gray-900 text-left text-sm">
                  Add new volume
                </div>
              </Button>
                  </div>
                  </div>
              </div>
            </div>
          </div>         
    </>
  );
};

export default ConfigurePage;
