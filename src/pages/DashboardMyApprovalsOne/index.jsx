import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const DashboardMyApprovalsOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[30px] w-full">
        <div className="flex flex-col gap-[23px] justify-start w-full">
          <Header className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[120px] md:px-5 w-[90%] md:w-full">
            <Text
              className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
              size="txtPoppinsSemiBold22Bluegray90001"
            >
              Dashboard
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-8 w-full">
              <div className="flex md:flex-1 flex-col gap-2 items-center justify-start mb-[13px] w-[10%] md:w-full">
                <Text
                  className="text-blue_gray-900 text-sm"
                  size="txtPoppinsSemiBold14"
                >
                  My Approvals
                </Text>
                <Line className="bg-blue_gray-900 h-0.5 w-full" />
              </div>
              <Input
                name="group1969"
                placeholder="Search"
                className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-[12.24px] text-gray-600 text-left w-full"
                wrapClassName="bg-white-A700 md:flex-1 md:ml-[0] ml-[878px] md:mt-0 mt-[17px] pl-2.5 pr-[35px] py-1 rounded-[7px] shadow-bs1 w-[15%] md:w-full"
              ></Input>
              <Text
                className="ml-4 md:ml-[0] md:mt-0 mt-[22px] text-blue_gray-900_01 text-sm underline"
                size="txtPoppinsRegular14Bluegray90001"
              >
                CR History
              </Text>
            </div>
            <div className="bg-white-A700 md:h-[290px] h-[327px] sm:h-[397px] mt-2.5 pb-[21px] relative rounded-[11px] shadow-bs1 w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-blue_gray-900 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-[15px] rounded-tl-[7px] rounded-tr-[7px] w-full">
                    <Text
                      className="sm:ml-[0] ml-[19px] sm:mt-0 mt-1 text-sm text-white-A700"
                      size="txtPoppinsMedium14WhiteA700"
                    >
                      CR ID
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[568px] sm:mt-0 mt-1 text-sm text-white-A700"
                      size="txtPoppinsMedium14WhiteA700"
                    >
                      Status
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[210px] sm:mt-0 my-0.5 text-sm text-white-A700"
                      size="txtPoppinsMedium14WhiteA700"
                    >
                      Action
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[190px] sm:mt-0 mt-1 text-sm text-white-A700"
                      size="txtPoppinsMedium14WhiteA700"
                    >
                      Comment
                    </Text>
                  </div>
                  <Line className="bg-gray-600 h-px mt-[51px] w-full" />
                  <Line className="bg-gray-600 h-px mt-[51px] w-full" />
                  <Line className="bg-gray-600 h-px mt-[51px] w-full" />
                  <Line className="bg-gray-600 h-px mt-[54px] w-full" />
                </div>
              </div>
              <div className="absolute flex flex-col gap-[27px] h-max inset-y-[0] items-center justify-start left-[8%] my-auto w-[4%]">
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  Region
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
                </div>
              </div>
              <div className="absolute flex flex-col gap-[27px] h-max inset-y-[0] items-center justify-start left-[14%] my-auto w-[10%]">
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
                </div>
              </div>
              <div className="absolute flex flex-col gap-[29px] h-max inset-y-[0] items-center justify-start left-[26%] my-auto w-[8%]">
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  Sub task
                </Text>
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
                </div>
              </div>
              <div className="absolute flex flex-col gap-[27px] h-max inset-y-[0] items-center justify-start left-[35%] my-auto w-[10%]">
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  Approved time
                </Text>
                <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-center text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    12/05/2023, 10:00AM
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-center text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    12/05/2023, 10:00AM
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-center text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    12/05/2023, 10:00AM
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-center text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    12/05/2023, 10:00AM
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-center text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    12/05/2023, 10:00AM
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-col gap-[23px] h-max inset-[0] items-center justify-center m-auto w-[10%]">
                <Button className="border border-green-900 border-solid cursor-pointer min-w-[120px] py-1.5 rounded-[5px] text-center text-green-900 text-xs">
                  Approved
                </Button>
                <Button className="border border-green-900 border-solid cursor-pointer min-w-[120px] py-1.5 rounded-[5px] text-center text-green-900 text-xs">
                  Approved
                </Button>
                <Button className="border border-red-800 border-solid cursor-pointer min-w-[120px] py-1.5 rounded-[5px] text-center text-red-800 text-xs">
                  Rejected
                </Button>
                <Button className="border border-red-800 border-solid cursor-pointer min-w-[120px] py-1.5 rounded-[5px] text-center text-red-800 text-xs">
                  Rejected
                </Button>
              </div>
              <Button className="absolute border border-amber-600 border-solid bottom-[6%] cursor-pointer inset-x-[0] min-w-[120px] mx-auto py-1.5 rounded-[5px] text-[10px] text-amber-600 text-center">
                Waiting for approval
              </Button>
              <div className="absolute bottom-[8%] flex flex-col gap-[35px] items-center justify-start right-[38%]">
                <Text
                  className="text-blue_gray-900 text-xs underline"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  View CR
                </Text>
                <Text
                  className="text-blue_gray-900 text-xs underline"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  View CR
                </Text>
                <Text
                  className="text-blue_gray-900 text-xs underline"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  View CR
                </Text>
                <Text
                  className="text-blue_gray-900 text-xs underline"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  View CR
                </Text>
                <Text
                  className="text-blue_gray-900 text-xs underline"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  View CR
                </Text>
              </div>
              <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[1%] w-[28%]">
                <Text
                  className="text-blue_gray-900 text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  -
                </Text>
                <Text
                  className="mt-[35px] text-blue_gray-900 text-xs"
                  size="txtPoppinsRegular12Bluegray900"
                >
                  -
                </Text>
                <div className="flex flex-row items-start justify-between mt-[34px] w-full">
                  <Text
                    className="text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    -
                  </Text>
                  <Text
                    className="text-blue_gray-900_01 text-sm"
                    size="txtPoppinsRegular14Bluegray90001"
                  >
                    Lorem ipsum dolor sit amet.
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-8 w-full">
                  <Text
                    className="text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12Bluegray900"
                  >
                    -
                  </Text>
                  <Text
                    className="text-blue_gray-900_01 text-sm"
                    size="txtPoppinsRegular14Bluegray90001"
                  >
                    Lorem ipsum dolor sit amet.
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[7%] flex flex-row items-center justify-center right-[22%] w-[14%]">
                <Text
                  className="bg-light_green-800 h-[25px] justify-center px-[17px] py-[3px] rounded-[7px] text-white-A700 text-xs w-[85px]"
                  size="txtPoppinsRegular12WhiteA700"
                >
                  Approve
                </Text>
                <Text
                  className="bg-red-800 h-[25px] justify-center ml-[5px] sm:px-5 px-6 py-[3px] rounded-[7px] text-white-A700 text-xs w-[85px]"
                  size="txtPoppinsRegular12WhiteA700"
                >
                  Reject
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[83px] items-center justify-start md:ml-[0] ml-[449px] mt-[57px] w-[24%] md:w-full">
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
              <Button className="border-2 border-gray-600 border-solid flex h-6 items-center justify-center p-2 rotate-[180deg] rounded-[5px] w-6">
                <Img src="images/img_group1953.svg" alt="group1953" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMyApprovalsOnePage;
