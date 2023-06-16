import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text } from "components";
import Header from "components/Header";

const selectOptionsList = [
  { text: "AWS", value: 'AWS' },
  { text: "Azure", value: 'Azure' },
];
const selectOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectlaunchOptions = [
  { text: "VM", value: "VM"},
  { text: "Volume", value: "Volume" },
  { text: "Network & Security", value: "Network & Security"   },
];
const selectOptionsList3 = [
  { label: "Virtual Machine", value: "option1" },
  { label: "Launch New Instances from Standard AMI", value: "option2" },
  { label: "Resize Instance", value: "option3" },
  { label: "Create AMI for running instance or stopped instance", value: "" },
  { label: "Stop Instance", value: "" },
  { label: "Start Instance", value: "" },
  { label: "Schedule Stop / Start of instance", value: "" },
  { label: "Disable stop for few days of schedule for instance in already in Schedule stop start", value: ""}
]; 
  
const BasicDetailsPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(selectOptionsList[0].value);
  const [launchselected, setLaunchselected] = useState(selectlaunchOptions[0].value);

  const cloudhandleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
    sessionStorage.setItem("cloud", event.target.value);   
  };

  const launchOptionshandleChange = event => {
    console.log(event.target.value);
    setLaunchselected(event.target.value);
    sessionStorage.setItem("launchOption", event.target.value);   
  };

  
  let cloudselected = sessionStorage.getItem("cloud");
  let launchOption = sessionStorage.getItem("launchOption");
  console.log("cloud:", cloudselected);
  console.log("Launch:", launchOption);


  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
        <Header className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row gap-[31px] items-center justify-start md:ml-[0] ml-[71px] mr-[981px] mt-[21px] md:px-5 w-[97%] md:w-full">
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_ggarrowlefto.svg"
              alt="ggarrowlefto"
            />
            <Text
              className="text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl"
              size="txtPoppinsSemiBold22Bluegray90001" >
              Welcome to Self Service Portal
            </Text>
        {/* <div className="bg-white-A700 flex sm:flex-1 flex-row items-center justify-center sm:mt-0 mt-0.5 p-1.5 rounded-[7px] shadow-bs1 w-[5%] sm:w-full">
              <Img
                className="h-2.5 ml-[3px] w-2.5"
                src="images/img_vector.svg"
                alt="vector"
              />
              <Text
                className="ml-1 text-[10.24px] text-blue_gray-900"
                size="txtPoppinsRegular1024">
                Filter
              </Text>
            </div> */}
          </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-2 items-start justify-end md:ml-[0] ml-[0px] mt-7 md:px-5 w-[90%] md:w-full">
            <div className="flex flex-col gap-1.5 items-center justify-start md:mt-0 mt-[7px] w-[12%] md:w-full">
              <Text className="text-black-900 text-sm text" size="txtPoppinsMedium14"
              >
                Basic Details
              </Text>
              <Line className="bg-blue_gray-900 h-0.5 w-full" />
            </div>
            <Text
              className="common-pointer md:ml-[0] ml-[25px] md:mt-0 mt-[9px] text-gray-600 text-sm"
              size="txtPoppinsMedium14Gray600"
              onClick={() => navigate("/configure")}
            >
              Configure
            </Text>
            <Text
              className="common-pointer md:ml-[0] ml-[34px] md:mt-0 mt-[7px] text-gray-600 text-sm"
              size="txtPoppinsMedium14Gray600"
              onClick={() => navigate("/preview")}
            >
              Preview
            </Text>
            <Button onClick={() => navigate("/configure")} className="bg-blue_gray-900 cursor-pointer font-medium mb-[7px] min-w-[93px] md:ml-[0] ml-[906px] py-[7px] rounded-[7px] shadow-bs2 text-[10px] text-center text-white-A700">
              Save
            </Button>
          </div>
          
          <div className="bg-gray-300 flex flex-col items-start justify-start md:ml-[0] ml-[121px] mt-8 mr-[388px] mt-2.5 p-5 md:px-5 rounded-[7px] w-[65%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[17px] items-center justify-start mb-5 md:ml-[0] ml-[11px] w-[74%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Cloud
              </Text>
              <select name="cloud" value={selected} onChange={cloudhandleChange}  className="bg-white-A700 sm:flex-1 pl-3 sm:pr-5 pr-[22px] py-[5px] rounded-[7px] shadow-bs3 text-gray-600 text-left text-sm w-[67%] sm:w-full"
              indicator={
              <Img className="h-2 mr-[0] w-3.5"  src="images/img_arrowdown.svg" alt="arrow_down" />}>
              {selectOptionsList.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
              ))}
              </select>
            
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Account Name
                </Text>
                <SelectBox
                  className="bg-white-A700 sm:flex-1 pl-3 sm:pr-5 pr-[22px] py-[5px] rounded-[7px] shadow-bs3 text-gray-600 text-left text-sm w-[67%] sm:w-full"
                  placeholderClassName="text-gray-600"
                  indicator={
                    <Img
                      className="h-2 mr-[0] w-3.5"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupEight"
                  options={selectOptionsList3}
                  isSearchable={false}
                  placeholder="Virtual Machine"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Select Launch Category
                </Text>
                <select name="launchOptions" value={launchselected} onChange={launchOptionshandleChange}  className="bg-white-A700 sm:flex-1 pl-3 sm:pr-5 pr-[22px] py-[5px] rounded-[7px] shadow-bs3 text-gray-600 text-left text-sm w-[67%] sm:w-full"
              indicator={
              <Img className="h-2 mr-[0] w-3.5"  src="images/img_arrowdown.svg" alt="arrow_down" />}>
              {selectlaunchOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
              ))}
              </select>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Select Configuration
                </Text>
                <SelectBox
                  className="bg-white-A700 sm:flex-1 pl-3 sm:pr-5 pr-[22px] py-[5px] rounded-[7px] shadow-bs3 text-gray-600 text-left text-sm w-[67%] sm:w-full"
                  placeholderClassName="text-gray-600"
                  indicator={
                    <Img
                      className="h-2 mr-[0] w-3.5"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupEight"
                  options={selectOptionsList3}
                  isSearchable={false}
                  placeholder="Virtual Machine"
                />
            </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default BasicDetailsPage;
