import * as React from "react";
import Header from "../../../commonCompo/Header";

function ProfileDetail({ label, value }) {
  return (
    <div className="justify-center py-1.5 bg-white rounded-sm shadow-sm">
      <span className="font-semibold">{label}:</span> {value}
    </div>
  );
}

function FileUpload({ label, icon }) {
  return (
    <div className="flex items-center gap-2 px-7 py-1.5 mt-2 bg-white rounded-sm shadow-sm max-md:px-5">
      <img src={icon} alt={label + ' icon'} className="shrink-0 w-6 h-6" />
      <div className="font-semibold">{label}</div>
    </div>
  );
}

function ProfileDetailsColumn({ profileData }) {
  return (
    <div className="flex flex-col flex-1">
      {profileData.map((data, index) => (
        <React.Fragment key={index}>
          {data.type === "detail" && <ProfileDetail label={data.label} value={data.value} />}
          {data.type === "upload" && <FileUpload label={data.label} icon={data.icon} />}
        </React.Fragment>
      ))}
    </div>
  );
}

function ProfileDetailsSection() {
  const profileData = [
    [
      { type: "detail", label: "First Name", value: "RASHMIKANT" },
      { type: "detail", label: "Regs.No", value: "210301120110" },
      { type: "detail", label: "Program", value: "BTECH" },
      { type: "detail", label: "Semester", value: "6TH" },
      { type: "detail", label: "Current Backlog", value: "0" },
      { type: "detail", label: "10th Marks", value: "500" },
      { type: "detail", label: "12th Marks", value: "490" },
      { type: "detail", label: "Father's Name", value: "ABC" },
      { type: "detail", label: "DOB", value: "8/5/2002" },
      { type: "detail", label: "Mobile No", value: "545" },
    ],
    [
      { type: "detail", label: "Last Name", value: "PRADHAN" },
      { type: "detail", label: "Email", value: "AVM@GMAIL.COM" },
      { type: "detail", label: "Branch", value: "CSE" },
      { type: "detail", label: "Campus", value: "BBSR" },
      { type: "detail", label: "Total Backlog", value: "0" },
      { type: "upload", label: "10th Marksheet upload", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/15e1f5bd5af4b86bfbe9f81deb4e17deaa7c082e072f0ceb3b512bdae80f5fc2?apiKey=7243a2d0e10f4194a9db08c3c825168c&" },
      { type: "upload", label: "12th Marksheet upload", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1e40a8de8e53eac53895ce5f3a9b664d4ba455fd399257012c65f81e619d33e?apiKey=7243a2d0e10f4194a9db08c3c825168c&" },
      { type: "detail", label: "Mother's Name", value: "AJVL" },
      { type: "detail", label: "Alternate Mobile No", value: "6521216" },
    ],
  ];

  
  return (
    <section className="flex flex-col items-center px-6 md:px-16 pt-16 pb-6 mt-2 rounded-md border border-orange-300 border-solid max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col md:flex-row gap-5">
        <ProfileDetailsColumn profileData={profileData[0]} />
        <ProfileDetailsColumn profileData={profileData[1]} />
      </div>
    </section>
  );
}

function Profile() {
  return (
    <div className="">
      <Header />
      <ProfileDetailsSection />
    </div>
  );
}

export default Profile;