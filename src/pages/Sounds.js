import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import {
  PDFDownloadLink,
  PDFViewer,
  View,
  Document,
  Text,
  Page,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import { CSVLink, CSVDownload } from "react-csv";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import EmojiPicker from 'emoji-picker-react';
import InputEmoji from 'react-input-emoji'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import black from "../components/fonts/Inter-Black.ttf";
import bold from "../components/fonts/Inter-Bold.ttf";
import regular from "../components/fonts/Inter-Regular.ttf";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import city_zipcode from "./city_zipcode";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: black,
      fontWeight: 700,
    },
    {
      src: bold,
      fontWeight: 500,
    },
    {
      src: regular,
      fontWeight: 300,
    },
  ],
})

const newDate = new Date();
const fileName = newDate.getTime();

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

const styles = StyleSheet.create({
  title: {
    fontWeight: 500,
    fontSize: 13.5,
    color: "#000000",
    fontFamily: "Inter",
  },
  title1: {
    fontWeight: 500,
    fontSize: 10,
    color: "#233E86",
    fontFamily: "Inter",
  },
  title3: {
    fontWeight: 400,
    fontSize: 14,
    color: "#8BC440"
  },
  text: {
    fontSize: 10,
    color: "#333333",
    fontWeight: 400,
    fontStyle: "normal",
    fontFamily: "Inter",
  },
  textBold: {
    fontSize: 10,
    color: "#333333",
    fontWeight: 500,
    fontFamily: "Inter"
  },
  textLine: {
    flexDirection: "row",
    alignItems: "center"
  },
  whiteSpace: {
    marginTop: 15
  },
  mainTable: {
    flexDirection: "row",
    width: "100%"
  },
  columns: {
    display: "flex"
  },
  tableCellEmpty:{
    backgroundColor: "#FFFFFF",
    padding: 7,
    margin: 0.5,
    color: "white",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: 300,
    height: 40
  },
  tableCellTitle: {
    backgroundColor: "#223F89",
    padding: 7,
    margin: 0.5,
    color: "white",
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: 500,
    height: 40
  },
  tableCell: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    border: 0.5,
    margin: 0.5,
    color: "white",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: 300,
    height: 40,
  },
  boxContainer: { 
    flex: 1, paddingHorizontal: 20, paddingVertical: 10 
  },
  banner: {
    flexDirection: "row",
    height: 60
  },
  titleBoxContainer: {
    flex: 1,
    marginTop: 10,
    textAlign: "center"
  },
  bannerSides: {
    marginHorizontal: 20,
    height: "auto",
    alignContent: "center"
  }
});

const NewEquipmentTable = ({ data, finalDate, index }) => {
  return (
    <>
      <View style={styles.columns}>
        <View style={styles.tableCellTitle}>
          <Text>Equipment {index + 1}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.newEquip_System_type || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.newEquip_Vendor || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.newEquip_Manufacturer || "N/A"}</Text>
        </View>
        <View style={{wordBreak: "break-word", width: 100, height: 40, backgroundColor: "red"}}>
          <Text style={styles.text}>{data?.newEquip_Model_no || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.newEquip_Quantity || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.newEquip_Btu || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.newEquip_Invoice_no || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.newEquip_Purchase_date || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{finalDate || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text> </Text>
        </View>
        <View style={styles.tableCell}>
          <Text> </Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.newEquip_rebate || "0.00"}</Text>
        </View>
      </View>
    </>
  );
};

const OldEquipmentTable = ({ data, finalDate, index }) => {
  return (
    <>
      <View style={styles.columns}>
        <View style={styles.tableCellTitle}>
          <Text>Equipment {index + 1}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.oldEquip_System_type || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.oldEquip_Tons || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.oldEquip_Btu || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.oldEquip_Quantity || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.oldEquip_Years || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.oldEquip_Conditon || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.oldEquip_Seer || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.oldEquip_Disposal_party || "N/A"}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.text}>{data?.oldEquip_Disposal_date || "N/A"}</Text>
        </View>
      </View>
    </>
  );
};

const Line = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          height: 3,
          width: "100%",
          backgroundColor: "#C4C4C480",
        }}
      ></View>
    </View>
  );
};

const StatusIcon = ({ check }) => {
  return (
    <>
      {check ? (
        <Image
          src={require("../components/icons/yes.png")}
          style={{ width: 12, height: 12, marginLeft: "auto", marginTop: 2 }}
          fixed={true}
        />
      ) : (
        <Image
          src={require("../components/icons/no.png")}
          style={{ width: 12, height: 12, marginLeft: "auto", marginTop: 2 }}
          fixed={true}
        />
      )}
    </>
  );
};

const template = {
  Application_Id: 0,
  Control_Number: "",
  Status: "",
  Stage: "",
  Delay_Reason: "",
  Delay_Reason2: "",
  Type: "",
  Application_Date: "",
  Last_Modified_On: "",
  Info_Account_no: "",
  Info_Bill_id: "",
  Info_Customer_name: "",
  Info_Service_location: "",
  Info_City_village: "",
  Info_Zipcode: "",
  Info_Email: "",
  Info_Tel_no: "",
  Info_Is_owner: "",
  Info_Mailing_address: "",
  Info_Mailing_city: "",
  Info_Mailing_zip: "",
  Info_Home_size: "",
  Info_Home_age: "",
  Info_Home_type: "",
  Info_New_construction: "",
  Old_equipment: [],
  Installer_New_name: "",
  Installer_New_worktel: "",
  Installer_New_companyname: "",
  Installer_New_certno: null,
  Installer_New_finaldate: "",
  Installer_New_email: null,
  New_equipment: [
    {
      newEquip_System_type: "",
      newEquip_Vendor: "",
      newEquip_Quantity: 0,
      newEquip_Btu: "",
      newEquip_Size: null,
      newEquip_Manufacturer: "",
      newEquip_Model_no: "",
      newEquip_Invoice_no: "",
      newEquip_Purchase_date: "",
      newEquip_Type: null,
      newEquip_Seer:"",
      newEquip_rebate: null,
      newEquip_Tons: null,
    },
  ],
  Submitted_docs: [
    {
      invoice: null,
      irs_form: null,
      disposal_slip: null,
      letter_authorization: null,
      installer_cert: null,
      other_doc2: null,
      other_doc3: null,
    },
  ],
};

function PrintApplicationSummary(props) {

  const [text, setText] = useState('')
  const [convertedText, setConvertedText] = useState("Some default content");

 function handleOnEnter (text) {
        console.log('enter', text)
 }

   const Toast = Swal.fire({
          title: "Login Successful",
          icon: "success",
          text: "Welcome to ShopNetwork!"
        })

  const useQuery = () => new URLSearchParams(useLocation().search);
  const { decryptString } = 'fdrgdgdgdgg5345'
  const applicationPrintDetail = 'test';
  let query = useQuery();
  let creds = query.get("auth");
  const [data, setData] = useState(template);
  let totalRebate = 0;
  let totalRebate2 = 0;

    function overlapFix(text) 
    {
      if(text != null){
        const str = text.trim()
        let line = Math.round(text.length / 18);
        console.log("TEXT: ", str);
        console.log("LINE: ", line);
        let arr1 = [];
        if (line > 0) {
          for (let i = 0; i < line; i++) {

            console.log("TEXT STRING: ", str.substring(i * 18, (i + 1) * 18));
            arr1.push(str.substring(i * 18, (i + 1) * 18));
          }
            if(line == 1){
              console.log("LINE IS EQUAL TO 1");
              arr1 =  [];
              arr1.push(str.substring(line-1 * 18));
            }
        }
        else{
          arr1.push(str);
        }
        return arr1;
      }
      
    }

  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];

  if (data.Delay_Reason || data.Delay_Reason2)
  {
      arr1 = overlapFix(data.Delay_Reason);
      arr2 = overlapFix(data.Delay_Reason2);

      console.log("ARR1: ", arr1);
      console.log("ARR2", arr2);
  }

  // Info_Service_location;
  arr3 = overlapFix(data.Info_Service_location);
  arr4 = overlapFix(data.Info_Mailing_address);
  console.log("ARR3", arr3);
  console.log("ARR4", arr4);

  console.log(data)
  console.log("ARR1: ", arr1);
  console.log("ARR2", arr2);

  console.log(convertedText)

  return (
    <>
      <div>
        <Container>
        <CSVLink data={csvData} filename={`transaction-${fileName}.csv`}>Download me</CSVLink>;
        <CSVDownload data={csvData} target="_blank" />;
        <div>
          <EmojiPicker onEmojiClick={(e) => setText(text.concat(e.emoji))} />
        </div>
        <div>
          {text}{convertedText}
        </div>
        <div>
        <ReactQuill
          theme='snow'
          value={convertedText}
          onChange={setConvertedText}
          style={{minHeight: '300px'}}
        />
        </div>
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />
        <FacebookShareButton
                url={"https://peing.net/ja/"}
                quote={"フェイスブックはタイトルが付けれるようです"}
                hashtag={"#hashtag"}
                description={"aiueo"}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round /> Facebook
              </FacebookShareButton>
              <br />
              <TwitterShareButton
                title={"test"}
                url={"https://peing.net/ja/"}
                hashtags={["hashtag1", "hashtag2"]}
              >
                <TwitterIcon size={32} round />
                Twitter
              </TwitterShareButton>
          <h5
            style={{ marginBottom: 30 }}
            className="text-center text-info fs-3"
            id="trackTitle"
          >
            TRANSACTION DETAILS
          </h5>
          <PDFDownloadLink
            className="btn btn-info mb-2 btn-sm"
            document={
              <Document>
              <Page size="LETTER">
                <View
                  style={{
                    marginTop: "5.88%",
                    marginLeft: "11.76%",
                    marginRight: "5.88%",
                    width: "82.36%",
                    // backgroundColor: "#233E8B",
                    justifyContent: "center",
                  }}
                >
                  <View style={styles.banner}>
                      <Image
                        source="https://i.imgur.com/CGDGnf6.png"
                        style={{
                          width: 80,
                          height: 33,
                          float: "left !important",
                        }}
                      />
                    <View style={styles.titleBoxContainer}>
                      <Text style={styles.title1}>Xffiliate Merchant</Text>
                      <Text style={styles.title}>Transaction Number # 4638rwjhfgweurwgr34</Text>
                    </View>
                      <Image
                        source="/GPA_icon.png"
                        style={{
                          width: 45,
                          height: 38,
                          float: "right !important",
                        }}
                      />
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: "11.76%",
                    marginRight: "5.88%",
                    marginBottom: "5.88",
                    width: "82.36%",
                  }}>
                  <Text style={styles.text}>Please read the information.</Text>
                  <View style={styles.whiteSpace}/>
                  <Text style={styles.title3}>Applicant Information:</Text>
                  <View style={styles.whiteSpace}/>

                  <View style={styles.textLine}>
                    <View style={{width: "20%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>APPLICANT NAME: </Text>
                    </View>
                    <View style={{width:"45%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11, }}>{data?.Info_Customer_name || "N/A"}</Text>
                    </View>
                    <View style={{width: "18%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>TELEPHONE NO.: </Text>
                    </View>
                    <View style={{width: "17%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Tel_no || "N/A"}</Text>
                    </View>
                  </View>

                  <View style={styles.textLine}>
                    <View style={{width: "27%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>INSTALLATION ADDRESS: </Text>
                    </View>
                    <View style={{width: "73%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>
                        
                        {arr3 != null ? arr3.map((arr) => (<Text>{arr}</Text>)) : "N/A"}
                        
                        </Text>
                    </View>
                  </View>

                  <View style={styles.textLine}>
                    <View style={{width: "6%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>CITY: </Text>
                    </View>
                    <View style={{width: "20%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{city_zipcode.find(
                                (p) => p._id === data?.Info_City_village
                              )
                                ? city_zipcode.find(
                                    (p) => p._id === data?.Info_City_village
                                  ).village
                                : "N/A" || "N/A"}</Text>
                    </View>
                    <View style={{width: "12%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>GUAM ZIP: </Text>
                    </View>
                    <View style={{width: "12%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Zipcode || "N/A"}</Text>
                    </View>
                    <View style={{width: "7%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>EMAIL: </Text>
                    </View>
                    <View style={{width: "43%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Email || "N/A"}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.textLine}>
                    <View style={{width: "16%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>CONTROL NO: </Text>
                    </View>
                    <View style={{width: "18%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Control_Number || "N/A"}</Text>
                    </View>
                    <View style={{width: "31%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>GPA ELECTRIC ACCOUNT NO: </Text>
                    </View>
                    <View style={{width: "19%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Account_no || "N/A"}</Text>
                    </View>
                    <View style={{width: "9%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>BILL ID: </Text>
                    </View>
                    <View style={{width: "7%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11,}}>{data?.Info_Bill_id || "N/A"}</Text>
                    </View>
                  </View>

                  <View style={styles.whiteSpace}/>
                  <Text style={styles.text}>Applicant must be either the GPA account holder or the property owner to claim a rebate. Is Applicant the owner of the residential property? {"\u00a0\u00a0\u00a0"}
                  <StatusIcon check={!data?.Submitted_docs[0]?.Info_Is_owner} /> <Text style={styles.textBold}>YES</Text> {"\u00a0\u00a0\u00a0"} <StatusIcon check={data?.Submitted_docs[0]?.Info_Is_owner} /> <Text style={styles.textBold}>NO</Text></Text>
                  
                  <View style={styles.whiteSpace}/>
                  <Text style={styles.text}>Exceptions may be made if the tenant or property owner representative provides an authorization letter with a copy of photo I.D.. Residential customers with Commercial Accounts must provide proof of residency in order to participate in this rebate program. Condominium or property managers may apply for tenants.</Text>
                              
                  <View style={styles.whiteSpace}/>
                  <View style={styles.whiteSpace}/>
                  <View style={styles.textLine}>
                    <View style={{width: "45%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>MAILING ADDRESS <Text style={styles.text}>(if different than above):</Text> </Text>
                    </View>
                    <View style={{width: "55%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>
                        {arr4 != null ? arr4.map((arr) => (<Text>{arr != null ? arr : "N/A"}</Text>)): "N/A"}
                        </Text>
                    </View>
                  </View>

                  <View style={styles.textLine}>
                    <View style={{width: "21%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>MAILING COUNTRY: </Text>
                    </View>
                    <View style={{width: "44%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Mailing_city || "N/A"}</Text>
                    </View>
                    <View style={{width: "21%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>MAILING ZIP CODE: </Text>
                    </View>
                    <View style={{width: "14%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Mailing_zip || "N/A"}</Text>
                    </View>
                  </View>

                  <View style={styles.textLine}>
                    <View style={{width: "28%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>HOME SIZE <Text style={styles.text}>(approx. sq. ft.)</Text>: </Text>
                    </View>
                    <View style={{width: "24%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Home_size || "N/A"}</Text>
                    </View>
                    <View style={{width: "32%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>HOME AGE <Text style={styles.text}>(approx. year built)</Text>: </Text>
                    </View>
                    <View style={{width: "16%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Home_age || "N/A"}</Text>
                    </View>
                  </View>

                  <Text style={styles.textBold}>NEW CONSTRUCTION?
                    {"\u00a0\u00a0\u00a0"}<StatusIcon check={!data?.Info_New_construction} /> <Text style={styles.textBold}>YES</Text> 
                    {"\u00a0\u00a0\u00a0"} <StatusIcon check={data?.Info_New_construction} /> <Text style={styles.textBold}>NO</Text>
                  </Text>
                  <Text style={styles.textBold}>HOME TYPE <Text style={styles.text}>(check one)</Text>:</Text>
                  <Text>
                    {"\u00a0\u00a0\u00a0"}<StatusIcon check={data?.Info_Home_type == "Single Family"} /> <Text style={styles.text}>SINGLE FAMILY</Text> 
                    {"\u00a0\u00a0\u00a0"} <StatusIcon check={data?.Info_Home_type == "Apartment"} /> <Text style={styles.text}>APARTMENT</Text>
                    {"\u00a0\u00a0\u00a0"}<StatusIcon check={data?.Info_Home_type == "Condo"} /> <Text style={styles.text}>CONDO</Text> 
                    {"\u00a0\u00a0\u00a0"} <StatusIcon check={data?.Info_Home_type == "Mobile Home"} /> <Text style={styles.text}>MOBILE HOME</Text>
                    {"\u00a0\u00a0\u00a0"}<StatusIcon check={data?.Info_Home_type == "Other"} /> <Text style={styles.text}>OTHER</Text>
                  </Text>

                  <View style={styles.whiteSpace}/>
                  <Text style={styles.title3}>Installer Information:</Text>
                  <View style={styles.whiteSpace}/>
                  
                  <View style={styles.textLine}>
                    <View style={{width: "21%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>TECHNICIAN NAME: </Text>
                    </View>
                    <View style={{width: "38%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Installer_New_name || "N/A"}</Text>
                    </View>
                    <View style={{width: "21%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>WORK TELEPHONE: </Text>
                    </View>
                    <View style={{width: "20%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Installer_New_worktel || "N/A"}</Text>
                    </View>
                  </View>

                  <View style={styles.textLine}>
                    <View style={{width: "19%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>COMPANY NAME: </Text>
                    </View>
                    <View style={{width: "81%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Installer_New_companyname || "N/A"}</Text>
                    </View>
                  </View>

                  <View style={styles.textLine}>
                    <View style={{width: "34%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>DELAY FOR DATE OF PURCHASE: </Text>
                    </View>
                    <View style={{width: "26%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{arr1.map((arr) => (<Text>{arr}</Text> ))} {arr1.length <= 0 ? "N/A": null}</Text>
                    </View>
                    <View style={{width: "21%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>CERTIFICATION NO: </Text>
                    </View>
                    <View style={{width: "19%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data.Installer_New_certno || "N/A"}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.textLine}>
                    <View style={{width: "8%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>EMAIL: </Text>
                    </View>
                    <View style={{width: "31%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Installer_New_email || "N/A"}</Text>
                    </View>
                    <View style={{width: "17%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>DATE OF FINAL: </Text>
                    </View>
                    <View style={{width: "32%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data.Installer_New_certno || "N/A"}</Text>
                    </View>
                  </View>
                  <View style={styles.textLine}>
                    <View style={{width: "35%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>DELAY FOR FINAL INSTALLATION: </Text>
                    </View>
                    <View style={{width: "40%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{arr2.map((arr) => (
                                <Text>{arr}</Text>
                              ))} {arr1 <= 0 ? "N/A": null}</Text>
                    </View>
                  </View>
                
                </View>
              </Page>
              <Page size="LETTER">
                <View
                  style={{
                    marginTop: "5.88%",
                    marginLeft: "11.76%",
                    marginRight: "5.88%",
                    marginBottom: "5.88",
                    width: "82.36%",
                    justifyContent: "center",
                  }}
                >
                  <View style={styles.whiteSpace}/>
                  <Text style={styles.title3}>New Equipment Information:</Text>
                  {/* table */}
                  <View style={styles.whiteSpace}/>
                  {data?.New_equipment.length <= 0 ? 
                  <Text style={styles.text}>-NO DATA FOR NEW EQUIPMENT-</Text>:
                  <>
                    <View style={styles.mainTable}>
                      <View style={styles.columns}>
                        <View style={styles.tableCellEmpty}>
                          <Text> </Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>System Type</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Vendor</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Manufacturer</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Model Number</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Quantity</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Cubic Feet</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Invoice</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Purchase Date</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Install Date</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Delay Reason for Final Installation</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Delay Reason for Purchase Date</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Rebate</Text>
                        </View>  
                      </View>
                      {data?.New_equipment.map((value, index) => {
                        totalRebate2 = value?.newEquip_rebate + totalRebate2;
                        return (
                          <>
                            <NewEquipmentTable
                              key={index}
                              finalDate={data?.Installer_New_finaldate}
                              data={value}
                              index={index}
                            />
                          </>
                        );
                      })}
                      
                    </View>
                  </>
                  }
                  
                </View>
              </Page>
                  
              <Page size="LETTER">
                <View
                  style={{
                    marginTop: "5.88%",
                    marginLeft: "11.76%",
                    marginRight: "5.88%",
                    marginBottom: "5.88",
                    width: "82.36%",
                    justifyContent: "center",
                  }}
                >
                  <View style={styles.whiteSpace}/>
                  <Text style={styles.title3}>Existing/Old Equipment Information:</Text>
                  <Text style={styles.text}>Existing/old air conditioning (AC) equipment must be removed and properly disposed. Old equipment must be
                  disposed of by either the Installer or the Applicant with Guam Solid Waste Authority (GSWA) or Guam
                  Environmental Protection Agency (GEPA) listed recycler. If Applicant is disposing, there must be a receipt of
                  disposal from GSWA or the recycler attached to this rebate form.</Text>
                  
                  {/* table */}
                  <View style={styles.whiteSpace}/>
                  {data?.Old_equipment.length <= 0 ? 
                  <Text style={styles.text}>-NO DATA FOR OLD EQUIPEMT-</Text>:
                  <>
                    <View style={styles.mainTable}>
                      <View style={styles.columns}>
                        <View style={styles.tableCellEmpty}>
                          <Text> </Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>System Type</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Tons</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>BTU</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Quantity</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Number of Years</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Equipment Condition Prior to Removal</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Seer</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Disposal Party</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Date</Text>
                        </View>
                      </View>
                      {data?.Old_equipment.map((value, index) => {
                        totalRebate2 = value?.newEquip_rebate + totalRebate2;
                        return (
                          <>
                            <OldEquipmentTable
                              key={index}
                              data={value}
                              index={index}
                            />
                          </>
                        );
                      })}
                      
                    </View>
                  </>
                  }
                </View>
              </Page>

              <Page size="LETTER">
                <View
                  style={{
                    marginTop: "5.88%",
                    marginLeft: "11.76%",
                    marginRight: "5.88%",
                    marginBottom: "5.88",
                    width: "82.36%",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.text}>1 Seasonal Energy Efficiency Ratio</Text>
                  <Text style={styles.text}>INSTALLER SIGNATURE FOR DISPOSAL (must be same as above):</Text>
                  <View style={styles.textLine}>
                    <View style={{width: "35%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}> </Text>
                    </View>
                    <View style={{width: "6%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>DATE: </Text>
                    </View>
                    <View style={{width: "20%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}> </Text>
                    </View>
                  </View>
                  <View style={styles.whiteSpace}/>
                  <Text style={styles.title3}>Acceptance of Terms and Conditions:</Text>
                  <Text style={styles.text}>Installer certifies equipment will be properly disposed with a GEPA listed recycler or GSWA.</Text>
                  <View style={styles.whiteSpace}/>
                  <Text style={styles.text}>I hereby certify that I am the GPA electric account owner and/or the owner of the residential property at which the
                  service/installation occured, that I have purchased the equipment described on this Rebate Application, and that it 
                  has been installed at the indicated installation address. I have read the Terms and Conditions on the reverse side of
                  this form and acknowledge that GPA may verify the information provided. <Text style={{textDecoration: "underline"}}>I acknowledge a copy of the itemized
                  sales receipt with the date of purchase must accompany this form. If an Installer is not disposing of the equipment, a
                  disposal receipt must accompany this form.</Text></Text>

                  <View style={styles.whiteSpace}/>
                  <View style={styles.whiteSpace}/>

                  <View style={styles.textLine}>
                    <View style={{width: "26%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>APPLICANT SIGNATURE: </Text>
                    </View>
                    <View style={{width: "35%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}> </Text>
                    </View>
                    <View style={{width: "6%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>DATE: </Text>
                    </View>
                    <View style={{width: "15%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}> </Text>
                    </View>
                  </View>

                </View>
              </Page>
            </Document>
            }
            fileName={`${data?.Control_Number}.pdf`}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
          <PDFViewer width={"100%"} height={"600"} showToolbar={false}>
            <Document>
              <Page size="LETTER">
                <View
                  style={{
                    marginTop: "5.88%",
                    marginLeft: "11.76%",
                    marginRight: "5.88%",
                    width: "82.36%",
                    // backgroundColor: "#233E8B",
                    justifyContent: "center",
                  }}
                >
                  <View style={styles.banner}>
                      <Image
                        source="https://i.imgur.com/CGDGnf6.png"
                        style={{
                          width: 80,
                          height: 33,
                          float: "left !important",
                        }}
                      />
                    <View style={styles.titleBoxContainer}>
                      <Text style={styles.title1}>Xffiliate Merchant</Text>
                      <Text style={styles.title}>Transaction Number # 4638rwjhfgweurwgr34</Text>
                    </View>
                      <Image
                        source="https://i.imgur.com/CGDGnf6.png"
                        style={{
                          width: 45,
                          height: 38,
                          float: "right !important",
                        }}
                      />
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: "11.76%",
                    marginRight: "5.88%",
                    marginBottom: "5.88",
                    width: "82.36%",
                  }}>
                  <Text style={styles.text}>Please read the information.</Text>
                  <View style={styles.whiteSpace}/>
                  <Text style={styles.title3}>Applicant Information:</Text>
                  <View style={styles.whiteSpace}/>

                  <View style={styles.textLine}>
                    <View style={{width: "19%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>APPLICANT NAME: </Text>
                    </View>
                    <View style={{width:"46%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11, }}>{data?.Info_Customer_name || "N/A"}</Text>
                    </View>
                    <View style={{width: "17%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>TELEPHONE NO.: </Text>
                    </View>
                    <View style={{width: "18%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Tel_no || "N/A"}</Text>
                    </View>
                  </View>

                  <View style={styles.textLine}>
                    <View style={{width: "26%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>INSTALLATION ADDRESS: </Text>
                    </View>
                    <View style={{width: "74%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>
                        {arr3 != null ? arr3.map((arr) => (<Text>{arr}</Text>)): "N/A"}
                        </Text>
                    </View>
                  </View>

                  <View style={styles.textLine}>
                    <View style={{width: "5%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>CITY: </Text>
                    </View>
                    <View style={{width: "21%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{city_zipcode.find(
                                (p) => p._id === data?.Info_City_village
                              )
                                ? city_zipcode.find(
                                    (p) => p._id === data?.Info_City_village
                                  ).village
                                : "N/A" || "N/A"}</Text>
                    </View>
                    <View style={{width: "11%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>GUAM ZIP: </Text>
                    </View>
                    <View style={{width: "13%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Zipcode || "N/A"}</Text>
                    </View>
                    <View style={{width: "6%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>EMAIL: </Text>
                    </View>
                    <View style={{width: "44%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Email || "N/A"}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.textLine}>
                    <View style={{width: "15%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>CONTROL NO: </Text>
                    </View>
                    <View style={{width: "19%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Control_Number || "N/A"}</Text>
                    </View>
                    <View style={{width: "30%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>GPA ELECTRIC ACCOUNT NO: </Text>
                    </View>
                    <View style={{width: "20%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Account_no || "N/A"}</Text>
                    </View>
                    <View style={{width: "8%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>BILL ID: </Text>
                    </View>
                    <View style={{width: "8%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11,}}>{data?.Info_Bill_id || "N/A"}</Text>
                    </View>
                  </View>

                  <View style={styles.whiteSpace}/>
                  <Text style={styles.text}>Applicant must be either the GPA account holder or the property owner to claim a rebate. Is Applicant the owner of the residential property? {"\u00a0\u00a0\u00a0"}
                  <StatusIcon check={!data?.Submitted_docs[0]?.Info_Is_owner} /> <Text style={styles.textBold}>YES</Text> {"\u00a0\u00a0\u00a0"} <StatusIcon check={data?.Submitted_docs[0]?.Info_Is_owner} /> <Text style={styles.textBold}>NO</Text></Text>
                  
                  <View style={styles.whiteSpace}/>
                  <Text style={styles.text}>Exceptions may be made if the tenant or property owner representative provides an authorization letter with a copy of photo I.D.. Residential customers with Commercial Accounts must provide proof of residency in order to participate in this rebate program. Condominium or property managers may apply for tenants.</Text>
                              
                  <View style={styles.whiteSpace}/>
                  <View style={styles.whiteSpace}/>
                  <View style={styles.textLine}>
                    <View style={{width: "44%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>MAILING ADDRESS (if different than above): </Text>
                    </View>
                    <View style={{width: "56%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>
                        {arr4 != null ? arr4.map((arr) => (<Text>{arr != null ? arr : "N/A"}</Text>)): "N/A"}
                        </Text>
                    </View>
                  </View>

                  <View style={styles.textLine}>
                    <View style={{width: "20%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>MAILING COUNTRY: </Text>
                    </View>
                    <View style={{width: "45%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Mailing_city || "N/A"}</Text>
                    </View>
                    <View style={{width: "20%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>MAILING ZIP CODE: </Text>
                    </View>
                    <View style={{width: "15%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Mailing_zip || "N/A"}</Text>
                    </View>
                  </View>

                  <View style={styles.textLine}>
                    <View style={{width: "26%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>HOME SIZE <Text style={styles.text}>(approx. sq. ft.)</Text>: </Text>
                    </View>
                    <View style={{width: "26%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Home_size || "N/A"}</Text>
                    </View>
                    <View style={{width: "31%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>HOME AGE <Text style={styles.text}>(approx. year built)</Text>: </Text>
                    </View>
                    <View style={{width: "17%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Info_Home_age || "N/A"}</Text>
                    </View>
                  </View>

                  <Text style={styles.textBold}>NEW CONSTRUCTION?
                    {"\u00a0\u00a0\u00a0"}<StatusIcon check={!data?.Info_New_construction} /> <Text style={styles.textBold}>YES</Text> 
                    {"\u00a0\u00a0\u00a0"} <StatusIcon check={data?.Info_New_construction} /> <Text style={styles.textBold}>NO</Text>
                  </Text>
                  <Text style={styles.textBold}>HOME TYPE <Text style={styles.text}>(check one)</Text>:</Text>
                  <Text>
                    {"\u00a0\u00a0\u00a0"}<StatusIcon check={data?.Info_Home_type == "Single Family"} /> <Text style={styles.text}>SINGLE FAMILY</Text> 
                    {"\u00a0\u00a0\u00a0"} <StatusIcon check={data?.Info_Home_type == "Apartment"} /> <Text style={styles.text}>APARTMENT</Text>
                    {"\u00a0\u00a0\u00a0"}<StatusIcon check={data?.Info_Home_type == "Condo"} /> <Text style={styles.text}>CONDO</Text> 
                    {"\u00a0\u00a0\u00a0"} <StatusIcon check={data?.Info_Home_type == "Mobile Home"} /> <Text style={styles.text}>MOBILE HOME</Text>
                    {"\u00a0\u00a0\u00a0"}<StatusIcon check={data?.Info_Home_type == "Other"} /> <Text style={styles.text}>OTHER</Text>
                  </Text>

                  <View style={styles.whiteSpace}/>
                  <Text style={styles.title3}>Installer Information:</Text>
                  <View style={styles.whiteSpace}/>
                  
                  <View style={styles.textLine}>
                    <View style={{width: "20%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>TECHNICIAN NAME: </Text>
                    </View>
                    <View style={{width: "39%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Installer_New_name || "N/A"}</Text>
                    </View>
                    <View style={{width: "20%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>WORK TELEPHONE: </Text>
                    </View>
                    <View style={{width: "21%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Installer_New_worktel || "N/A"}</Text>
                    </View>
                  </View>

                  <View style={styles.textLine}>
                    <View style={{width: "18%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>COMPANY NAME: </Text>
                    </View>
                    <View style={{width: "82%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Installer_New_companyname || "N/A"}</Text>
                    </View>
                  </View>

                  <View style={styles.textLine}>
                    <View style={{width: "33%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>DELAY FOR DATE OF PURCHASE: </Text>
                    </View>
                    <View style={{width: "27%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{arr1.map((arr) => (<Text>{arr}</Text> ))} {arr1.length <= 0 ? "N/A": null}</Text>
                    </View>
                    <View style={{width: "20%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>CERTIFICATION NO: </Text>
                    </View>
                    <View style={{width: "20%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data.Installer_New_certno || "N/A"}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.textLine}>
                    <View style={{width: "7%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>EMAIL: </Text>
                    </View>
                    <View style={{width: "32%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data?.Installer_New_email || "N/A"}</Text>
                    </View>
                    <View style={{width: "16%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>DATE OF FINAL: </Text>
                    </View>
                    <View style={{width: "33%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{data.Installer_New_certno || "N/A"}</Text>
                    </View>
                  </View>
                  <View style={styles.textLine}>
                    <View style={{width: "34%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>DELAY FOR FINAL INSTALLATION: </Text>
                    </View>
                    <View style={{width: "41%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}>{arr2.map((arr) => (
                                <Text>{arr}</Text>
                              ))} {arr1 <= 0 ? "N/A": null}</Text>
                    </View>
                  </View>
                
                </View>
              </Page>
              <Page size="LETTER">
                <View
                  style={{
                    marginTop: "5.88%",
                    marginLeft: "11.76%",
                    marginRight: "5.88%",
                    marginBottom: "5.88",
                    width: "82.36%",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.title3}>New Equipment Information:</Text>
                  {/* table */}
                  <View style={styles.whiteSpace}/>
                  {data?.New_equipment.length <= 0 ? 
                  <Text style={styles.text}>-NO DATA FOR NEW EQUIPMENT-</Text>:
                  <>
                    <View style={styles.mainTable}>
                      <View style={styles.columns}>
                        <View style={styles.tableCellEmpty}>
                          <Text> </Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>System Type</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Vendor</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Manufacturer</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Model Number</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Quantity</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Cubic Feet</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Invoice</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Purchase Date</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Install Date</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Delay Reason for Final Installation</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Delay Reason for Purchase Date</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Rebate</Text>
                        </View>  
                      </View>
                      {data?.New_equipment.map((value, index) => {
                        totalRebate2 = value?.newEquip_rebate + totalRebate2;
                        return (
                          <>
                            <NewEquipmentTable
                              key={index}
                              finalDate={data?.Installer_New_finaldate}
                              data={value}
                              index={index}
                            />
                          </>
                        );
                      })}
                      
                    </View>
                  </>
                  }
                  
                </View>
              </Page>
                  
              <Page size="LETTER">
                <View
                  style={{
                    marginTop: "5.88%",
                    marginLeft: "11.76%",
                    marginRight: "5.88%",
                    marginBottom: "5.88",
                    width: "82.36%",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.title3}>Existing/Old Equipment Information:</Text>
                  <Text style={styles.text}>Existing/old air conditioning (AC) equipment must be removed and properly disposed. Old equipment must be
                  disposed of by either the Installer or the Applicant with Guam Solid Waste Authority (GSWA) or Guam
                  Environmental Protection Agency (GEPA) listed recycler. If Applicant is disposing, there must be a receipt of
                  disposal from GSWA or the recycler attached to this rebate form.</Text>
                  
                  {/* table */}
                  <View style={styles.whiteSpace}/>
                  {data?.Old_equipment.length <= 0 ? 
                  <Text style={styles.text}>-NO DATA FOR OLD EQUIPEMT-</Text>:
                  <>
                    <View style={styles.mainTable}>
                      <View style={styles.columns}>
                        <View style={styles.tableCellEmpty}>
                          <Text> </Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>System Type</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Tons</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>BTU</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Quantity</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Number of Years</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Equipment Condition Prior to Removal</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Seer</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Disposal Party</Text>
                        </View>
                        <View style={styles.tableCellTitle}>
                          <Text>Date</Text>
                        </View>
                      </View>
                      {data?.Old_equipment.map((value, index) => {
                        totalRebate2 = value?.newEquip_rebate + totalRebate2;
                        return (
                          <>
                            <OldEquipmentTable
                              key={index}
                              data={value}
                              index={index}
                            />
                          </>
                        );
                      })}
                      
                    </View>
                  </>
                  }
                </View>
              </Page>

              <Page size="LETTER">
                <View
                  style={{
                    marginTop: "5.88%",
                    marginLeft: "11.76%",
                    marginRight: "5.88%",
                    marginBottom: "5.88",
                    width: "82.36%",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.text}>1 Seasonal Energy Efficiency Ratio</Text>
                  <Text style={styles.text}>INSTALLER SIGNATURE FOR DISPOSAL (must be same as above):</Text>
                  <View style={styles.textLine}>
                    <View style={{width: "35%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}> </Text>
                    </View>
                    <View style={{width: "6%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>DATE: </Text>
                    </View>
                    <View style={{width: "20%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}> </Text>
                    </View>
                  </View>
                  <View style={styles.whiteSpace}/>
                  <Text style={styles.title3}>Acceptance of Terms and Conditions:</Text>
                  <Text style={styles.text}>Installer certifies equipment will be properly disposed with a GEPA listed recycler or GSWA.</Text>
                  <View style={styles.whiteSpace}/>
                  <Text style={styles.text}>I hereby certify that I am the GPA electric account owner and/or the owner of the residential property at which the
                  service/installation occured, that I have purchased the equipment described on this Rebate Application, and that it 
                  has been installed at the indicated installation address. I have read the Terms and Conditions on the reverse side of
                  this form and acknowledge that GPA may verify the information provided. <Text style={{textDecoration: "underline"}}>I acknowledge a copy of the itemized
                  sales receipt with the date of purchase must accompany this form. If an Installer is not disposing of the equipment, a
                  disposal receipt must accompany this form.</Text></Text>

                  <View style={styles.whiteSpace}/>
                  <View style={styles.whiteSpace}/>

                  <View style={styles.textLine}>
                    <View style={{width: "26%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>APPLICANT SIGNATURE: </Text>
                    </View>
                    <View style={{width: "35%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}> </Text>
                    </View>
                    <View style={{width: "6%", flexDirection: "row"}}>
                      <Text style={styles.textBold}>DATE: </Text>
                    </View>
                    <View style={{width: "15%", flexDirection: "row", justifyContent: "center", borderBottom: 1}}>
                      <Text style={{fontFamily:"Inter", fontSize:11}}> </Text>
                    </View>
                  </View>

                </View>
              </Page>
            </Document>
          </PDFViewer>
          <Link to={`/`} className="text-success px-5">
            <h4
              style={{ marginTop: 50 }}
              className="text-center fs-5"
              id="trackBackBtn"
            >
              Back to Homepage
            </h4>
          </Link>
          <Row>
            <br />
            <small
              className="text-secondary text-center"
              id="trackFooter"
              style={{ marginTop: 60 }}
            >
              Energy Sense Rebate Program <br />
              Copyright &copy; 2022 GPA Powered By Xtendly
            </small>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PrintApplicationSummary;
