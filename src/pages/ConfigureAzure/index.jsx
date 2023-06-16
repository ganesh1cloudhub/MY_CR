import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Switch, Text } from "components";
import Header from "components/Header";

const OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
]; 

const ConfigureAzurePage = () => {
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
              <Button className="bg-blue_gray-900 cursor-pointer font-medium mb-1.5 min-w-[93px] md:ml-[0] ml-[906px] py-[7px] rounded-[7px] shadow-bs2 text-[10px] text-center text-white-A700">
                Save
              </Button>
            </div>
            <Text
              className="md:ml-[0] ml-[5px] mt-6 text-black-900 text-sm"
              size="txtPoppinsRegular14"
            >
              Virtual Machine Configuration
            </Text>
              <Text
              className="md:ml-[0] ml-[29px] mt-3 text-black-900 text-xs"
              size="txtPoppinsMedium12"
            >
              Basics
            </Text>
            <div className="bg-gray-300 flex flex-col items-start justify-start mt-[15px] p-[21px] sm:px-5 rounded-[7px] w-full md:w-full">
              <div className="flex md:flex-col flex-row md:gap-8 items-center justify-start ml-2 md:ml-[0] w-4/5 md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Subscription
                </Text>
                <Input
                  name="group1720"
                  placeholder="Enter name"
                  className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-xs w-full"
                  wrapClassName="bg-white-A700 md:ml-[0] ml-[250px] px-3 py-[7px] rounded-[7px] w-[40%] md:w-full"
                  type="text"
                ></Input>
              
              </div>

              <div className="flex md:flex-col flex-row md:gap-8 items-center justify-start ml-2 mt-6 md:ml-[0] w-4/5 md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Resource group
                </Text>
                <Input
                  name="group1720"
                  placeholder="Enter name"
                  className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-xs w-full"
                  wrapClassName="bg-white-A700 md:ml-[0] ml-[230px] px-3 py-[7px] rounded-[7px] w-[40%] md:w-full"
                  type="text"
                ></Input>
              
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[29px] mt-[22px] text-black-900 text-xs"
              size="txtPoppinsRegular12"
            >
              Instance Details
            </Text>
              <div className="bg-gray-300 flex flex-col items-start justify-start mt-[15px] p-[21px] sm:px-5 rounded-[7px] w-full md:w-full">
              <div className="flex md:flex-col flex-row md:gap-8 items-center justify-start ml-2 md:ml-[0] w-4/5 md:w-full">
              <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Virtual Machine Name
                </Text>
                <Input
                  name="group1720"
                  placeholder="Enter name"
                  className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-xs w-full"
                  wrapClassName="bg-white-A700 md:ml-[0] ml-[190px] px-3 py-[7px] rounded-[7px] w-[40%] md:w-full"
                  type="text"
                ></Input>
              
              </div>

              <div className="flex md:flex-col flex-row md:gap-8 mt-6 items-center justify-start ml-2 md:ml-[0] w-4/5 md:w-full">
              <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Location
                </Text>
                <SelectBox 
                    className="bg-white-A700 sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] shadow-bs1 text-gray-600 text-left text-sm w-[40%] ml-[272px] sm:w-full"
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
                    options={OptionsList}
                    isSearchable={false}
                    placeholder="Select"
                  />
              
              </div>

              <div className="flex md:flex-col flex-row md:gap-8 mt-6 items-center justify-start ml-2 md:ml-[0] w-4/5 md:w-full">
              <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Availability options
                </Text>
                <SelectBox 
                    className="bg-white-A700 sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] shadow-bs1 text-gray-600 text-left text-sm w-[40%] ml-[212px] sm:w-full"
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
                    options={OptionsList}
                    isSearchable={false}
                    placeholder="Select"
                  />
              
              </div>

              <div className="flex md:flex-col flex-row md:gap-8 mt-6 items-center justify-start ml-2 md:ml-[0] w-4/5 md:w-full">
              <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Availability zone
                </Text>
                <SelectBox 
                    className="bg-white-A700 sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] shadow-bs1 text-gray-600 text-left text-sm w-[40%] ml-[228px] sm:w-full"
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
                    options={OptionsList}
                    isSearchable={false}
                    placeholder="Select"
                  />
              
              </div>

              <div className="flex md:flex-col flex-row md:gap-8 mt-6 items-center justify-start ml-2 md:ml-[0] w-4/5 md:w-full">
              <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Image
                </Text>
                <SelectBox 
                    className="bg-white-A700 sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] shadow-bs1 text-gray-600 text-left text-sm w-[40%] ml-[286px] sm:w-full"
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
                    options={OptionsList}
                    isSearchable={false}
                    placeholder="Select"
                  />
              
              </div>


              <div className="flex md:flex-col flex-row md:gap-8 mt-6 items-center justify-start ml-2 md:ml-[0] md:w-full">
              <Text className="text-black-900 text-xs pr-[230px]"
                  size="txtPoppinsRegular12"
                > VM Architecture
                </Text>
                <div className="flex md:flex-col flex-row md:gap-8 justify-start">
                  <input type="radio" name="vmarch"  checked="true"></input>
                            <Text
                              className="text-blue_gray-900 text-sm ml-2"
                              size="txtPoppinsRegular14Bluegray900"
                            >
                              Arm64
                  </Text>
                </div>
                
              
              </div>
              <div className="flex md:flex-col flex-row md:gap-8 flex-start ml-[332px] mt-3">
                
                            <input type="radio" name="vmarch"></input> 
                            <Text
                              className="text-blue_gray-900 text-sm ml-2"
                              size="txtPoppinsRegular14Bluegray900"
                            >
                              x64
                            </Text>
                </div>


              <div className="flex md:flex-col flex-row md:gap-8 mt-6 items-center justify-start ml-2 md:ml-[0] w-4/5 md:w-full">
              <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Size
                </Text>
                <SelectBox 
                    className="bg-white-A700 sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] shadow-bs1 text-gray-600 text-left text-sm w-[40%] ml-[302px] sm:w-full"
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
                    options={OptionsList}
                    isSearchable={false}
                    placeholder="Select"
                  />
              
              </div>


            </div>
            
          <Text
              className="md:ml-[0] ml-[29px] mt-5 text-black-900 text-sm"
              size="txtPoppinsRegular14"
            >
              Administrator Account
            </Text>
            <div className="bg-gray-300 flex flex-col items-start justify-start mt-[17px] p-[21px] sm:px-5 rounded-[7px] w-[97%] md:w-full">
            
              <div className="flex md:flex-col flex-row md:gap-8 mt-6 items-center justify-start ml-2 md:ml-[0] md:w-full">
              <Text className="text-black-900 text-xs pr-[230px]"
                  size="txtPoppinsRegular12"
                > Authentication type
                </Text>
                <div className="flex md:flex-col flex-row md:gap-8 ml-[-24px] justify-start">
                  <input type="radio" name="Authentication" checked="true"></input>
                            <Text
                              className="text-blue_gray-900 text-sm ml-2"
                              size="txtPoppinsRegular14Bluegray900"
                            >
                              Password
                  </Text>
                </div>
                
              
              </div>
              <div className="flex md:flex-col flex-row md:gap-8 flex-start ml-[332px] mt-3">
                
                            <input type="radio" name="Authentication"></input> 
                            <Text
                              className="text-blue_gray-900 text-sm ml-2"
                              size="txtPoppinsRegular14Bluegray900"
                            >
                              SSH Public Key
                            </Text>
                </div>

              
              <div className="flex md:flex-col flex-row md:gap-8 items-center justify-start ml-2 mt-6 md:ml-[0] w-4/5 md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  * Username
                </Text>
                <Input
                  name="group1720"
                  placeholder="Enter name"
                  className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-xs w-full"
                  wrapClassName="bg-white-A700 md:ml-[0] ml-[250px] px-3 py-[7px] rounded-[7px] w-[42%] md:w-full"
                  type="text"
                ></Input>
              
              </div>

                <div className="flex md:flex-col flex-row md:gap-8 items-center justify-start ml-2 mt-6 md:ml-[0] w-4/5 md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  * Password
                </Text>
                <Input
                  name="group1720"
                  placeholder="Enter Password"
                  className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-xs w-full"
                  wrapClassName="bg-white-A700 md:ml-[0] ml-[252px] px-3 py-[7px] rounded-[7px] w-[42%] md:w-full"
                  type="text"
                ></Input>
              
              </div>
            </div>
              <Text
              className="md:ml-[0] ml-[29px] mt-5 text-black-900 text-sm"
              size="txtPoppinsRegular14"
            >
              Network Interface
            </Text>
            <div className="bg-gray-300 flex flex-col items-start justify-start mt-[17px] p-[21px] sm:px-5 rounded-[7px] w-[97%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-8 mt-2 items-center justify-start ml-2 md:ml-[0] w-4/5 md:w-full">
              <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Virtual Network*
                </Text>
                <SelectBox 
                    className="bg-white-A700 sm:flex-1 pl-3.5 sm:pr-5 pr-[21px] py-[5px] rounded-[7px] shadow-bs1 text-gray-600 text-left text-sm w-[42%] ml-[226px] sm:w-full"
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
                    options={OptionsList}
                    isSearchable={false}
                    placeholder="Select"
                  />
              
              </div>
              <div className="flex md:flex-col flex-row md:gap-8 mt-6 items-center justify-start ml-2 md:ml-[0] md:w-full">
              <Text className="text-black-900 text-xs pr-[298px]"
                  size="txtPoppinsRegular12"
                > Public IP
                </Text>
                <div className="flex md:flex-col flex-row md:gap-8 ml-[-24px] justify-start">
                  <input type="radio" name="PublicIP"  checked="true"></input>
                            <Text
                              className="text-blue_gray-900 text-sm ml-2"
                              size="txtPoppinsRegular14Bluegray900"
                            >
                              Yes
                  </Text>
                </div>
                
              
              </div>
              <div className="flex md:flex-col flex-row md:gap-8 flex-start ml-[332px] mt-3">
                
                            <input type="radio" name="PublicIP"></input> 
                            <Text
                              className="text-blue_gray-900 text-sm ml-2"
                              size="txtPoppinsRegular14Bluegray900"
                            >
                              No
                            </Text>
                </div>

              
              <div className="flex md:flex-col flex-row md:gap-8 items-center justify-start ml-20 mt-6 md:ml-[0] w-4/5 md:w-full">
                
                <Input
                  name="group1720"
                  placeholder="Enter Public IP"
                  className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-xs w-full"
                  wrapClassName="bg-white-A700 md:ml-[0] ml-[250px] px-3 py-[7px] rounded-[7px] w-[42%] md:w-full"
                  type="text"
                ></Input>
              
              </div>

                <div className="flex md:flex-col flex-row md:gap-8 items-center justify-start ml-2 mt-6 md:ml-[0] w-4/5 md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  NIC network security group
                </Text>
                <Input
                  name="group1720"
                  placeholder="Enter Text"
                  className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-xs w-full"
                  wrapClassName="bg-white-A700 md:ml-[0] ml-[162px] px-3 py-[7px] rounded-[7px] w-[42%] md:w-full"
                  type="text"
                ></Input>
              
              </div>
            </div>

            <Text
              className="md:ml-[0] ml-[29px] mt-5 text-black-900 text-sm"
              size="txtPoppinsRegular14"
            >
              Tags
            </Text>
            <div className="bg-gray-300 flex flex-col items-start justify-start mt-[17px] p-[21px] sm:px-5 rounded-[7px] w-[97%] md:w-full">
            
              
              <div className="flex md:flex-col flex-row md:gap-8 items-center justify-start ml-2 mt-4 md:ml-[0] w-4/5 md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Name
                </Text>
                <Input
                  name="group1720"
                  placeholder="Enter name"
                  className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-xs w-full"
                  wrapClassName="bg-white-A700 md:ml-[0] ml-[280px] px-3 py-[7px] rounded-[7px] w-[42%] md:w-full"
                  type="text"
                ></Input>
              
              </div>

                <div className="flex md:flex-col flex-row md:gap-8 items-center justify-start ml-2 mt-6 md:ml-[0] w-4/5 md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Value
                </Text>
                <Input
                  name="group1720"
                  placeholder="Enter Value"
                  className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-xs w-full"
                  wrapClassName="bg-white-A700 md:ml-[0] ml-[282px] px-3 py-[7px] rounded-[7px] w-[42%] md:w-full"
                  type="text"
                ></Input>
              
              </div>
            </div>
            <br/>
        </div> 
        </div>
        </div>
    </>
  );
};

export default ConfigureAzurePage;

