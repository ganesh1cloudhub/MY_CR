import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Header from "components/Header";

const statusOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const actionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const accountOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const subTaskOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const crIdOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardMyCRPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[18px] w-full">
        <div className="flex flex-col gap-[23px] justify-start w-full">
          <Header className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[120px] md:px-5 w-[90%] md:w-full">
            <Text
              className="common-pointer text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
              size="txtPoppinsSemiBold22Bluegray90001"
              onClick={() => navigate("/dashboardmyapprovals")}
            >
              Dashboard
            </Text>
            <Text
              className="md:ml-[0] ml-[13px] mt-[33px] text-blue_gray-900 text-sm"
              size="txtPoppinsSemiBold14"
            >
              My Requests
            </Text>
            <Line className="bg-blue_gray-900 h-0.5 mt-2 w-[10%]" />
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-2.5 w-full">
              <Text
                className="md:mt-0 mt-[7px] text-blue_gray-900 text-sm"
                size="txtPoppinsMedium14Bluegray900"
              >
                Choose an option
              </Text>
              <div className="bg-white-A700 flex md:flex-1 flex-row gap-[50px] items-center justify-center md:ml-[0] ml-[9px] md:mt-0 mt-1 p-1.5 rounded-[7px] shadow-bs1 w-[8%] md:w-full">
                <Text
                  className="ml-[7px] text-[10px] text-gray-900"
                  size="txtPoppinsRegular10Gray900"
                >
                  CR
                </Text>
                <Img
                  className="h-[5px] mr-1.5"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-between mb-1 md:ml-[0] ml-[774px] w-[22%] md:w-full">
                <Input
                  name="groupTwentyThree"
                  placeholder="Search"
                  className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-[12.24px] text-gray-600 text-left w-full"
                  wrapClassName="bg-white-A700 pl-2.5 pr-[35px] py-1 rounded-[7px] shadow-bs1"
                ></Input>
                <Button
                  className="common-pointer bg-white-A700 cursor-pointer flex items-center justify-center min-w-[70px] pl-[13px] pr-[17px] py-[5px] rounded-[7px] shadow-bs1"
                  onClick={() => navigate("/basicdetails")}
                  leftIcon={
                    <Img
                      className="h-4 mb-px mr-[3px]"
                      src="images/img_ionaddcircleoutline.svg"
                      alt="ion:add-circle-outline"
                    />
                  }
                >
                  <div className="text-[10px] text-blue_gray-900_01 text-left">
                    Add
                  </div>
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 md:h-[346px] h-[378px] sm:h-[405px] mt-[13px] pb-[21px] relative rounded-[11px] shadow-bs1 w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-blue_gray-900 flex sm:flex-col flex-row sm:gap-5 items-start justify-end p-[15px] rounded-tl-[7px] rounded-tr-[7px] w-full">
                    <Img
                      className="h-3 sm:mt-0 mt-2"
                      src="images/img_vector_white_a700.svg"
                      alt="vector"
                    />
                    <SelectBox
                      className="sm:flex-1 font-medium sm:ml-[0] ml-[259px] sm:mt-0 mt-1 text-left text-sm text-white-A700 w-[5%] sm:w-full"
                      placeholderClassName="text-white-A700"
                      indicator={
                        <Img
                          className="h-3 mr-[0] w-[9px]"
                          src="images/img_vector_white_a700.svg"
                          alt="Vector"
                        />
                      }
                      isMulti={false}
                      name="group1978"
                      options={statusOptionsList}
                      isSearchable={false}
                      placeholder="Status"
                    />
                    <SelectBox
                      className="sm:flex-1 font-medium sm:ml-[0] ml-[57px] mr-2 sm:mt-0 my-0.5 text-left text-sm text-white-A700 w-[5%] sm:w-full"
                      placeholderClassName="text-white-A700"
                      indicator={
                        <Img
                          className="h-3 mr-[0] w-[9px]"
                          src="images/img_vector_white_a700.svg"
                          alt="Vector"
                        />
                      }
                      isMulti={false}
                      name="group1982"
                      options={actionOptionsList}
                      isSearchable={false}
                      placeholder="Action"
                    />
                  </div>
                  <Line className="bg-gray-600 h-px mt-[51px] w-full" />
                  <Line className="bg-gray-600 h-px mt-[51px] w-full" />
                  <Line className="bg-gray-600 h-px mt-[51px] w-full" />
                  <Line className="bg-gray-600 h-px mt-[54px] w-full" />
                  <Line className="bg-gray-600 h-px mt-[54px] w-full" />
                </div>
              </div>
              <div className="absolute flex flex-col gap-[29px] h-max inset-y-[0] items-center justify-start my-auto right-[31%] w-[4%]">
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  Subnet
                </Text>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    1234
                  </Text>
                  <Text
                    className="mt-[37px] text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    1234
                  </Text>
                  <Text
                    className="mt-[33px] text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    1234
                  </Text>
                  <Text
                    className="mt-[35px] text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    1234
                  </Text>
                  <Text
                    className="mt-[35px] text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    1234
                  </Text>
                  <Text
                    className="mt-[33px] text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    1234
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[8%] my-auto w-[10%]">
                <div className="flex flex-col gap-7 justify-start w-full">
                  <SelectBox
                    className="font-medium md:ml-[0] ml-[34px] text-left text-sm text-white-A700 w-3/5 sm:w-full"
                    placeholderClassName="text-white-A700"
                    indicator={
                      <Img
                        className="h-3 mr-[0] w-[9px]"
                        src="images/img_vector_white_a700.svg"
                        alt="Vector"
                      />
                    }
                    isMulti={false}
                    name="group107"
                    options={accountOptionsList}
                    isSearchable={false}
                    placeholder="Account"
                  />
                  <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      fs-common-services
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      fs-common-services
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      fs-common-services
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      fs-common-services
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      fs-common-services
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      fs-common-services
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute h-[331px] md:h-[333px] inset-y-[0] left-[19%] my-auto w-[7%]">
                <div className="absolute flex flex-col gap-[29px] h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[95%]">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtPoppinsMedium14WhiteA700"
                  >
                    Service
                  </Text>
                  <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      Amazon EC2
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      Amazon EC2
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      Amazon EC2
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      Amazon EC2
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      Amazon EC2
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      Amazon EC2
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-3 right-[0] top-[1%]"
                  src="images/img_vector_white_a700.svg"
                  alt="vector_Four"
                />
              </div>
              <div className="absolute flex flex-row gap-[7px] h-max inset-y-[0] items-start justify-center left-[27%] my-auto w-[5%]">
                <div className="flex flex-col gap-[29px] items-center justify-start w-[72%]">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtPoppinsMedium14WhiteA700"
                  >
                    Cloud
                  </Text>
                  <div className="flex flex-col gap-[35px] items-center justify-start">
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      AWS
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      AWS
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      AWS
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      AWS
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      AWS
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      AWS
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-3 mt-1"
                  src="images/img_vector_white_a700.svg"
                  alt="vector_Five"
                />
              </div>
              <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-center left-[33%] my-auto w-[11%]">
                <div className="flex flex-col gap-[27px] items-center justify-start w-[90%]">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtPoppinsMedium14WhiteA700"
                  >
                    Launch Category
                  </Text>
                  <div className="flex flex-col gap-[35px] items-center justify-start">
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      VM
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      VM
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      VM
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      VM
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      VM
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      VM
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-3 ml-[5px] mt-0.5"
                  src="images/img_vector_white_a700.svg"
                  alt="vector_Six"
                />
              </div>
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[8%]">
                <div className="flex flex-col gap-[29px] items-end justify-start w-full">
                  <SelectBox
                    className="font-medium text-left text-sm text-white-A700 w-4/5 sm:w-full"
                    placeholderClassName="text-white-A700"
                    indicator={
                      <Img
                        className="h-3 mr-[0] w-[9px]"
                        src="images/img_vector_white_a700.svg"
                        alt="Vector"
                      />
                    }
                    isMulti={false}
                    name="group109"
                    options={subTaskOptionsList}
                    isSearchable={false}
                    placeholder="Sub task"
                  />
                  <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      Virtual Machine
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      Virtual Machine
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      Virtual Machine
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      Virtual Machine
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      Virtual Machine
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xs"
                      size="txtPoppinsRegular12Bluegray900"
                    >
                      Virtual Machine
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[37%]">
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  Requested time
                </Text>
                <Text
                  className="mt-[27px] text-blue_gray-900 text-center text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  12/05/2023, 10:00AM
                </Text>
                <Text
                  className="mt-[35px] text-blue_gray-900 text-center text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  12/05/2023, 10:00AM
                </Text>
                <Text
                  className="mt-[35px] text-blue_gray-900 text-center text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  12/05/2023, 10:00AM
                </Text>
                <Text
                  className="mt-[35px] text-blue_gray-900 text-center text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  12/05/2023, 10:00AM
                </Text>
                <Text
                  className="mt-[35px] text-blue_gray-900 text-center text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  12/05/2023, 10:00AM
                </Text>
                <Text
                  className="mt-[33px] text-blue_gray-900 text-center text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  12/05/2023, 10:00AM
                </Text>
              </div>
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[21%]">
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  Approved by
                </Text>
                <Text
                  className="mt-7 text-blue_gray-900 text-center text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  xyz@gmail.com
                </Text>
                <a
                  href="mailto:xyz@gmail.com"
                  className="mt-[35px] text-blue_gray-900 text-center text-xs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text>xyz@gmail.com</Text>
                </a>
                <Text
                  className="mt-[35px] text-blue_gray-900 text-center text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  xyz@gmail.com
                </Text>
                <Text
                  className="mt-[35px] text-blue_gray-900 text-center text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  xyz@gmail.com
                </Text>
                <Text
                  className="mt-[35px] text-blue_gray-900 text-center text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  xyz@gmail.com
                </Text>
                <Text
                  className="mt-[33px] text-blue_gray-900 text-center text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  xyz@gmail.com
                </Text>
              </div>
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[4%] w-[15%]">
                <div className="flex flex-row items-center justify-between w-full">
                  <Button className="border border-red-800 border-solid cursor-pointer min-w-[120px] py-1.5 rounded-[5px] text-center text-red-800 text-xs">
                    Rejected
                  </Button>
                  <Img
                    className="h-4 w-4"
                    src="images/img_refresh.svg"
                    alt="refresh"
                  />
                </div>
                <div className="flex flex-row items-end justify-between mt-[23px] w-[98%] md:w-full">
                  <Button className="border border-green-900 border-solid cursor-pointer min-w-[120px] py-1.5 rounded-[5px] text-center text-green-900 text-xs">
                    Approved
                  </Button>
                  <Text
                    className="mb-1 mt-[7px] text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    -
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[23px] w-full">
                  <Button className="border border-cyan-300 border-solid cursor-pointer min-w-[120px] py-1.5 rounded-[5px] text-center text-cyan-300 text-xs">
                    Draft
                  </Button>
                  <Img
                    className="common-pointer h-4 w-4"
                    src="images/img_materialsymbolsedit.svg"
                    alt="materialsymbols"
                    onClick={() => navigate("/basicdetails")}
                  />
                </div>
                <div className="flex flex-row items-end justify-between mt-[21px] w-[98%] md:w-full">
                  <Button className="border border-solid border-yellow-900 cursor-pointer min-w-[120px] py-1.5 rounded-[5px] text-[10px] text-center text-yellow-900">
                    Deployment in progress
                  </Button>
                  <Text
                    className="mb-1 mt-[7px] text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    -
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[25px] w-[98%] md:w-full">
                  <Button className="border border-amber-600 border-solid cursor-pointer min-w-[120px] py-1.5 rounded-[5px] text-[10px] text-amber-600 text-center">
                    Waiting for approval
                  </Button>
                  <Text
                    className="text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    -
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[6%] flex flex-row gap-[57px] items-center justify-center right-[4%] w-[15%]">
                <Button className="border border-blue_gray-900 border-solid cursor-pointer min-w-[120px] py-1.5 rounded-[5px] text-[10px] text-blue_gray-900 text-center">
                  Deployment completed
                </Button>
                <Text
                  className="text-blue_gray-900 text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  -
                </Text>
              </div>
              <div className="absolute flex flex-col gap-[29px] h-max inset-y-[0] justify-start left-[2%] my-auto w-[4%]">
                <SelectBox
                  className="font-medium text-left text-sm text-white-A700 w-full"
                  placeholderClassName="text-white-A700"
                  indicator={
                    <Img
                      className="h-3 mr-[0] w-[9px]"
                      src="images/img_vector_white_a700.svg"
                      alt="Vector"
                    />
                  }
                  isMulti={false}
                  name="group1971"
                  options={crIdOptionsList}
                  isSearchable={false}
                  placeholder="CR ID"
                />
                <div className="flex flex-col gap-[35px] items-center justify-start ml-1.5 md:ml-[0]">
                  <Text
                    className="text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    1234
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    1234
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    1234
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    1234
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    1234
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    1234
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[83px] items-center justify-start md:ml-[0] ml-[449px] mt-6 w-[24%] md:w-full">
              <Button className="border-2 border-blue_gray-100 border-solid flex h-6 items-center justify-center p-2 rounded-[5px] w-6">
                <Img src="images/img_group1951.svg" alt="group1951" />
              </Button>
              <div className="flex flex-row gap-2 items-center justify-center w-[30%]">
                <Text
                  className="border border-blue_gray-900_01 border-solid flex h-6 items-center justify-center rounded-[5px] text-[11.78px] text-blue_gray-900_01 text-center w-6"
                  size="txtPoppinsMedium1178"
                >
                  1
                </Text>
                <Text
                  className="border border-gray-400_02 border-solid flex h-6 items-center justify-center rounded-[5px] text-[11.78px] text-center text-gray-400_02 w-6"
                  size="txtPoppinsMedium1178Gray40002"
                >
                  2
                </Text>
                <Text
                  className="border border-gray-400_02 border-solid flex h-6 items-center justify-center rounded-[5px] text-[11.78px] text-center text-gray-400_02 w-6"
                  size="txtPoppinsMedium1178Gray40002"
                >
                  3
                </Text>
              </div>
              <Button className="border-2 border-gray-600 border-solid flex h-6 items-center justify-center p-2 rotate-[0deg] rounded-[5px] w-6">
                <Img src="images/img_group1953.svg" alt="group1953" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMyCRPage;
