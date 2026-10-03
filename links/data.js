const linksData = [
    // --- 1. IDENTITY & DOCUMENTS ---
    { name: "Aadhaar Enrolment", desc: "Locate enrolment center and book an appointment.", type: "india", cat: "identity", logo: "aadhaar", url: "https://myaadhaar.uidai.gov.in/book-appointment" },
    { name: "Aadhaar Update", desc: "Online address update and demographic corrections.", type: "india", cat: "identity", logo: "aadhaar", url: "https://myaadhaar.uidai.gov.in/check-aadhaar-validity" },
    { name: "Aadhaar Download", desc: "Direct portal to download electronic Aadhaar (e-Aadhaar).", type: "india", cat: "identity", logo: "aadhaar", url: "https://myaadhaar.uidai.gov.in/gen-ae" },
    { name: "Aadhaar PVC Card", desc: "Order wallet-sized durable PVC Aadhaar card.", type: "india", cat: "identity", logo: "aadhaar", url: "https://myaadhaar.uidai.gov.in/gen-pvc" },
    { name: "Aadhaar Status", desc: "Check enrolment or demographic update status.", type: "india", cat: "identity", logo: "aadhaar", url: "https://myaadhaar.uidai.gov.in/CheckAadhaarStatus" },
    { name: "PAN Apply", desc: "Online Application for New PAN Card via Protean (NSDL).", type: "india", cat: "identity", logo: "pan", url: "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html" },
    { name: "PAN Correction", desc: "Correction or changes in existing PAN card details.", type: "india", cat: "identity", logo: "pan", url: "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html" },
    { name: "PAN Status", desc: "Track PAN card application or correction status.", type: "india", cat: "identity", logo: "pan", url: "https://tin.tin.proteantech.in/pan2" },
    { name: "PAN Verification", desc: "Verify your PAN details online on Income Tax portal.", type: "india", cat: "identity", logo: "pan", url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/verifyYourPanIec" },
    { name: "Instant e-PAN", desc: "Get free instant digital PAN within minutes via Aadhaar.", type: "india", cat: "identity", logo: "pan", url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan" },
    { name: "PAN-Aadhaar Linking", desc: "Link PAN card with Aadhaar number or verify link status.", type: "india", cat: "identity", logo: "pan", url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar" },
    { name: "DigiLocker Registration", desc: "Create an official cloud storage account for digital docs.", type: "india", cat: "identity", logo: "digilocker", url: "https://www.digilocker.gov.in/web/signup" },
    { name: "DigiLocker Documents", desc: "Access and fetch digital certificates and IDs.", type: "india", cat: "identity", logo: "digilocker", url: "https://www.india.gov.in/services/details/digilocker-digital-document-management" },
    { name: "Digital Document Verification", desc: "Verify authenticity of issued digital certificates.", type: "india", cat: "identity", logo: "digilocker", url: "https://digitallocker.gov.in/" },
    { name: "Voter Registration", desc: "Apply online for new voter registration (Form 6).", type: "india", cat: "identity", logo: "voter", url: "https://voters.eci.gov.in/form6" },
    { name: "Voter Correction", desc: "Shift or correct details in Electoral Roll (Form 8).", type: "india", cat: "identity", logo: "voter", url: "https://voters.eci.gov.in/form8" },
    { name: "Voter Deletion", desc: "Objection or deletion of voter name (Form 7).", type: "india", cat: "identity", logo: "voter", url: "https://voters.eci.gov.in/form7" },
    { name: "e-EPIC Download", desc: "Download official electronic Voter ID card PDF.", type: "india", cat: "identity", logo: "voter", url: "https://voters.eci.gov.in/" },
    { name: "Passport Apply", desc: "Official Passport Seva portal online registration.", type: "india", cat: "identity", logo: "passport", url: "https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en" },
    { name: "Passport Re-issue", desc: "Re-issue of expired, exhausted, or damaged passport.", type: "india", cat: "identity", logo: "passport", url: "https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en" },
    { name: "Tatkaal Passport", desc: "Apply for urgent issuance of passport under Tatkaal.", type: "india", cat: "identity", logo: "passport", url: "https://www.passportindia.gov.in/psp/tatkaalPassports" },
    { name: "Passport Appointment", desc: "Check PSK/POPSK appointment availability slots.", type: "india", cat: "identity", logo: "passport", url: "https://www.passportindia.gov.in/psp/checkAppointmentAvailibility" },
    { name: "Passport Status", desc: "Track application status of your passport file.", type: "india", cat: "identity", logo: "passport", url: "https://www.passportindia.gov.in/psp/trackApplicationService" },
    { name: "Police Clearance Certificate", desc: "Apply online for PCC (Passport Seva).", type: "india", cat: "identity", logo: "passport", url: "https://portal2.passportindia.gov.in/AppOnlineProject/online/pccOnlineApp" },

    // --- 2. TRANSPORT & TRAFFIC ---
    { name: "Learner Licence", desc: "Apply for new Learner's Licence via Parivahan Sarathi.", type: "india", cat: "transport", logo: "transport", url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do" },
    { name: "Driving Licence Apply", desc: "Apply for permanent Driving Licence after LL.", type: "india", cat: "transport", logo: "transport", url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do" },
    { name: "Driving Licence Renewal", desc: "Renew your expired or soon-to-expire driving licence.", type: "india", cat: "transport", logo: "transport", url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do" },
    { name: "DL Duplicate", desc: "Apply for duplicate DL in case of loss or theft.", type: "india", cat: "transport", logo: "transport", url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do" },
    { name: "DL Address Change", desc: "Change of address in Driving Licence records.", type: "india", cat: "transport", logo: "transport", url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do" },
    { name: "Vehicle Registration", desc: "Vahan citizen portal for vehicle registration services.", type: "india", cat: "transport", logo: "transport", url: "https://vahan.parivahan.gov.in/vahanservice/" },
    { name: "RC Download", desc: "Download digital RC or view details via Parivahan.", type: "india", cat: "transport", logo: "transport", url: "https://parivahan.gov.in" },
    { name: "RC Transfer", desc: "Online application for vehicle transfer of ownership.", type: "india", cat: "transport", logo: "transport", url: "https://vahan.parivahan.gov.in/" },
    { name: "Vehicle Ownership Transfer", desc: "Buyer and seller verification for vehicle ownership transfer.", type: "india", cat: "transport", logo: "transport", url: "https://vahan.parivahan.gov.in/vahanservice/" },
    { name: "Vehicle Fitness", desc: "Apply for vehicle fitness certificate or renewal.", type: "india", cat: "transport", logo: "transport", url: "https://vahan.parivahan.gov.in/vahanservice/" },
    { name: "Vehicle Permit", desc: "Commercial vehicle national & state permit services.", type: "india", cat: "transport", logo: "transport", url: "https://vahan.parivahan.gov.in/vahanservice/" },
    { name: "Road Tax", desc: "Pay road tax / motor vehicle tax online.", type: "india", cat: "transport", logo: "transport", url: "https://vahan.parivahan.gov.in/vahanservice/" },
    { name: "e-Challan Check", desc: "Check pending traffic challan status by vehicle/DL number.", type: "india", cat: "transport", logo: "transport", url: "https://parivahan.gov.in" },
    { name: "e-Challan Payment", desc: "Online payment gateway for traffic e-Challan.", type: "india", cat: "transport", logo: "transport", url: "https://parivahan.gov.in/" },
    { name: "Challan Status", desc: "Track transaction and receipt status of paid challan.", type: "india", cat: "transport", logo: "transport", url: "https://echallan.parivahan.gov.in/" },
    { name: "PUC Certificate", desc: "Check or download Pollution Under Control certificate.", type: "india", cat: "transport", logo: "transport", url: "https://puc.parivahan.gov.in/puc/" },
    { name: "Fancy Number Booking", desc: "Auction & booking of choice / VIP vehicle numbers.", type: "india", cat: "transport", logo: "transport", url: "https://fancy.parivahan.gov.in/fancy/faces/public/login.xhtml" },
    { name: "National Permit Services", desc: "Apply for All India Tourist Vehicle / National Permits.", type: "india", cat: "transport", logo: "transport", url: "https://vahan.parivahan.gov.in/vahanservice/" },

    // --- 3. INCOME, TAX & EMPLOYMENT ---
    { name: "Income Tax e-Filing", desc: "Central official Income Tax department e-filing portal.", type: "india", cat: "tax", logo: "tax", url: "https://eportal.incometax.gov.in/iec/foservices/#/login" },
    { name: "ITR Filing", desc: "File your annual Income Tax Return online.", type: "india", cat: "tax", logo: "tax", url: "https://eportal.incometax.gov.in/iec/foservices/#/login" },
    { name: "ITR e-Verification", desc: "e-Verify filed income tax returns via OTP / NetBanking.", type: "india", cat: "tax", logo: "tax", url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/itrStatus" },
    { name: "Form 26AS", desc: "View Annual Tax Credit Statement via TRACES.", type: "india", cat: "tax", logo: "tax", url: "https://www.tdscpc.gov.in/app/tds/tds-26as.xhtml" },
    { name: "AIS / TIS", desc: "Annual Information Statement & Taxpayer Info Summary.", type: "india", cat: "tax", logo: "tax", url: "https://eportal.incometax.gov.in/iec/foservices/#/login" },
    { name: "EPFO UAN", desc: "UAN activation and member interface portal for employees.", type: "india", cat: "tax", logo: "tax", url: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/" },
    { name: "EPF Passbook", desc: "Check and download your PF passbook & pension balance.", type: "india", cat: "tax", logo: "tax", url: "https://passbook.epfindia.gov.in/MemberPassBook/Login" },
    { name: "PF Claim", desc: "Apply online for EPF withdrawal, advance or transfer.", type: "india", cat: "tax", logo: "tax", url: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/" },
    { name: "PF Transfer", desc: "Online transfer of PF balance from previous company.", type: "india", cat: "tax", logo: "tax", url: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/" },
    { name: "Pension Claim", desc: "Apply for EPS scheme pension certificate / withdrawal.", type: "india", cat: "tax", logo: "tax", url: "https://pensionersportal.gov.in/Forms/Applicationforms/mapplication.aspx" },
    { name: "e-Shram Registration", desc: "Unorganised workers self-registration on e-Shram portal.", type: "india", cat: "tax", logo: "tax", url: "https://register.eshram.gov.in/#/user/self" },
    { name: "e-Shram Card", desc: "Download e-Shram UAN card or update details.", type: "india", cat: "tax", logo: "tax", url: "https://register.eshram.gov.in/#/user/self" },
    { name: "Udyam Registration", desc: "Free MSME / Small Business registration portal.", type: "india", cat: "tax", logo: "tax", url: "https://udyamregistration.gov.in/Udyam_Registration.aspx" },
    { name: "Udyam Certificate", desc: "Print or download official Udyam Registration Certificate.", type: "india", cat: "tax", logo: "tax", url: "https://udyamregistration.gov.in/Udyam_Login.aspx" },
    { name: "Udyam Verification", desc: "Verify Udyam / MSME Registration details online.", type: "india", cat: "tax", logo: "tax", url: "https://udyamregistration.gov.in/Udyam_Verify.aspx" },
    { name: "National Career Service", desc: "Find government and private jobs, career counseling.", type: "india", cat: "tax", logo: "tax", url: "https://ncs.gov.in/" },
    { name: "Government Job Search", desc: "Explore central government jobs on official NCS portal.", type: "india", cat: "tax", logo: "tax", url: "https://www.ncs.gov.in/" },
    { name: "Skill India Registration", desc: "Skill development schemes & certification courses.", type: "india", cat: "tax", logo: "tax", url: "https://www.skillindiadigital.gov.in/" },
    { name: "Apprenticeship Portal", desc: "National Apprenticeship Promotion Scheme (NAPS) registration.", type: "india", cat: "tax", logo: "tax", url: "https://www.apprenticeshipindia.gov.in/" },
    { name: "ESIC Services", desc: "Employees State Insurance Corporation member services.", type: "india", cat: "tax", logo: "tax", url: "https://www.esic.gov.in/" },
    { name: "Labour Services", desc: "Ministry of Labour and Employment centralized portal.", type: "india", cat: "tax", logo: "tax", url: "https://labour.gov.in/registerservices" },

    // --- 4. EDUCATION, AGRICULTURE & WELFARE ---
    { name: "National Scholarship Portal", desc: "Unified portal for Central & UGC scholarship schemes.", type: "india", cat: "welfare", logo: "welfare", url: "https://scholarships.gov.in/" },
    { name: "Scholarship Application", desc: "Apply for fresh national / central scholarships.", type: "india", cat: "welfare", logo: "welfare", url: "https://scholarships.gov.in/" },
    { name: "Scholarship Renewal", desc: "Renew your ongoing academic scholarships on NSP.", type: "india", cat: "welfare", logo: "welfare", url: "https://scholarships.gov.in/" },
    { name: "Scholarship Status", desc: "Track application status and disbursement on NSP.", type: "india", cat: "welfare", logo: "welfare", url: "https://scholarships.gov.in/" },
    { name: "PM-KISAN Registration", desc: "New farmer registration for 6000 INR annual benefit.", type: "india", cat: "welfare", logo: "welfare", url: "https://pmkisan.gov.in/RegistrationFormNew.aspx" },
    { name: "PM-KISAN e-KYC", desc: "Mandatory Aadhaar OTP eKYC for PM-Kisan beneficiaries.", type: "india", cat: "welfare", logo: "welfare", url: "https://pmkisan.gov.in/aadharekyc.aspx" },
    { name: "PM-KISAN Beneficiary Status", desc: "Check installment status and bank account linking.", type: "india", cat: "welfare", logo: "welfare", url: "https://pmkisan.gov.in/BeneficiaryStatus_New.aspx" },
    { name: "PM Fasal Bima Yojana", desc: "Pradhan Mantri crop insurance application portal.", type: "india", cat: "welfare", logo: "welfare", url: "https://pmfby.gov.in/" },
    { name: "Crop Insurance Status", desc: "Check your crop insurance application and claim status.", type: "india", cat: "welfare", logo: "welfare", url: "https://pmfby.gov.in/" },
    { name: "Kisan Credit Card Information", desc: "Guidelines and loan details for KCC farmers.", type: "india", cat: "welfare", logo: "welfare", url: "https://pmkisan.gov.in/" },
    { name: "PMAY Scheme Services", desc: "Pradhan Mantri Awas Yojana (Urban & Gramin) portal.", type: "india", cat: "welfare", logo: "welfare", url: "https://pmaymis.gov.in/" },
    { name: "Ayushman Bharat / PM-JAY", desc: "Check eligibility and generate Ayushman Card (5 Lakh Health cover).", type: "india", cat: "welfare", logo: "welfare", url: "https://beneficiary.nha.gov.in/" },
    { name: "eSanjeevani Telemedicine", desc: "National doctor-to-patient teleconsultation portal.", type: "india", cat: "welfare", logo: "welfare", url: "https://esanjeevani.mohfw.gov.in/" },
    { name: "Pension Services", desc: "National Pension System (NPS) and Central Pensioners portal.", type: "india", cat: "welfare", logo: "welfare", url: "https://npstrust.org.in/" },
    { name: "myScheme Eligibility", desc: "Discover all central and state schemes you qualify for.", type: "india", cat: "welfare", logo: "welfare", url: "https://www.myscheme.gov.in/" },
    { name: "Government Scheme Search", desc: "Search across 1000+ government programs on myScheme.", type: "india", cat: "welfare", logo: "welfare", url: "https://www.mohua.gov.in/" },
    { name: "Ration Card Services", desc: "National Food Security Portal (NFSA) all states ration card portal.", type: "india", cat: "welfare", logo: "welfare", url: "https://nfsa.gov.in/portal" },
    { name: "Gas Connection Scheme", desc: "Apply for new LPG gas connection across major providers.", type: "india", cat: "welfare", logo: "welfare", url: "https://www.pmuy.gov.in/" },
    { name: "Ujjwala Scheme", desc: "PM Ujjwala Yojana 2.0 free gas cylinder scheme apply.", type: "india", cat: "welfare", logo: "welfare", url: "https://www.pmuy.gov.in/" },
    { name: "Consumer Grievance", desc: "File consumer complaints against fraud or bad services.", type: "india", cat: "welfare", logo: "welfare", url: "https://consumerhelpline.gov.in/" },
    { name: "National Consumer Helpline", desc: "Helpline info and docket status for consumer protection.", type: "india", cat: "welfare", logo: "welfare", url: "https://consumerhelpline.gov.in/" },
    { name: "CPGRAMS Grievance", desc: "Centralized Public Grievance Redress and Monitoring System.", type: "india", cat: "welfare", logo: "welfare", url: "https://pgportal.gov.in/Registration" },
    { name: "RTI Online", desc: "File Right to Information (RTI) application or first appeal.", type: "india", cat: "welfare", logo: "welfare", url: "https://rtionline.gov.in/" },
    { name: "Court / e-Courts Services", desc: "Check case status, court orders and cause lists across India.", type: "india", cat: "welfare", logo: "welfare", url: "https://services.ecourts.gov.in/" },
    { name: "Birth & Death Registration", desc: "Civil Registration System (CRS) for birth & death certificates.", type: "india", cat: "welfare", logo: "welfare", url: "https://serviceonline.bihar.gov.in/" },

    // --- 5. BIHAR GOVERNMENT SERVICES ---
    { name: "Income Certificate (RTPS)", desc: "Aay Praman Patra apply and download via RTPS Bihar.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://serviceonline.bihar.gov.in/" },
    { name: "Caste Certificate (RTPS)", desc: "Jati Praman Patra apply via RTPS Bihar.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://serviceonline.bihar.gov.in/" },
    { name: "Residence Certificate", desc: "Niwas / Aawasiya Praman Patra application on RTPS Bihar.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://serviceonline.bihar.gov.in/" },
    { name: "EWS Certificate", desc: "Economically Weaker Section certificate for Bihar residents.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://serviceonline.bihar.gov.in/" },
    { name: "NCL Certificate", desc: "Non-Creamy Layer (OBC) certificate application via RTPS.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://serviceonline.bihar.gov.in/" },
    { name: "BC/EBC Certificate", desc: "Backward Class certificate for Bihar state quotas.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://serviceonline.bihar.gov.in/" },
    { name: "Birth Certificate Bihar", desc: "Janam Praman Patra application via Bihar RTPS/CRS portal.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://serviceonline.bihar.gov.in/" },
    { name: "Death Certificate Bihar", desc: "Mrityu Praman Patra registration and download.", type: "bihar", cat: "bihar", logo: "bihar", logo: "bihar", url: "https://serviceonline.bihar.gov.in/" },
    { name: "Character Certificate", desc: "Aacharan Praman Patra (Police Character Certificate) on RTPS.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://serviceonline.bihar.gov.in/" },
    { name: "RTPS Application Status", desc: "Track application status of your RTPS Bihar certificate.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://serviceonline.bihar.gov.in/" },
    { name: "Certificate Verification", desc: "Verify and download issued RTPS certificate PDF directly.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://serviceonline.bihar.gov.in/" },
    { name: "Bihar Land Records", desc: "Revenue & Land Reforms Department (DLRS) official portal.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://biharbhumi.bihar.gov.in/Biharbhumi/" },
    { name: "Jamabandi Bihar", desc: "View Jamabandi panji / online land records status.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://biharbhumi.bihar.gov.in/Biharbhumi/ViewJamabandi.aspx" },
    { name: "Online Mutation", desc: "Dakhil Kharij online registration and application.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://biharbhumi.bihar.gov.in/Biharbhumi/" },
    { name: "Land Revenue / Lagaan", desc: "Pay land tax (Bhumi Lagaan) online in Bihar.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://biharbhumi.bihar.gov.in/Biharbhumi/" },
    { name: "Land Map / Naksha", desc: "Check and order certified revenue village and plot map.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://land.bihar.gov.in/" },
    { name: "Bihar Driving Licence", desc: "Parivahan Sarathi driving services for Bihar RTOs.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do" },
    { name: "Bihar Vehicle Registration", desc: "Parivahan Vahan citizen services for Bihar vehicles.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://vahan.parivahan.gov.in/vahanservice/" },
    { name: "Bihar Road Tax", desc: "Pay commercial and personal vehicle road tax in Bihar.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://vahan.parivahan.gov.in/vahanservice/" },
    { name: "Bihar Transport Permit", desc: "State and regional permits for Bihar transport vehicles.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://vahan.parivahan.gov.in/vahanservice/" },
    { name: "Bihar Police Services", desc: "Online FIR, complaint registration and verification.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://police.bihar.gov.in/Online-Service-Portal" },
    { name: "Bihar Scholarship (PMS)", desc: "Post Matric Scholarship portal (PMS Online) Bihar.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://pmsonline.bihar.gov.in/" },
    { name: "Bihar Social Security Pension", desc: "SSPDS portal for Old Age, Widow and Disability pensions.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://www.sspmis.bihar.gov.in/" },
    { name: "Bihar Ration Card", desc: "EPDS Bihar portal for new ration card apply and beneficiary list.", type: "bihar", cat: "bihar", logo: "bihar", url: "https://epds.bihar.gov.in/" }
,
  {
    name: "Bihar Student Credit Card (MNSSBY)",
    category: "Education & Career",
    desc: "Online registration for Bihar Student Credit Card and Kaushal Vikas Yojana.",
    url: "https://www.7nishchay-yuvaupmission.bihar.gov.in/"
  },
  {
    name: "Bihar Ration Card Management (RCMS)",
    category: "Bihar Special",
    desc: "Online application, status and ration card search under Bihar Food Department.",
    url: "https://epds.bihar.gov.in/RCMS/frmRationCardSearch.aspx"
  },
  {
    name: "Bihar Electricity Bill Payment (SBPDCL/NBPDCL)",
    category: "Utilities & Bills",
    desc: "Instant electricity bill payment and receipt download for North and South Bihar.",
    url: "https://sbpdcl.co.in/(S(0t4w2e00d5k5y145r1q2p555))/frmQuickBillPaymentAll.aspx"
  },
  {
    name: "National Cyber Crime Reporting Portal",
    category: "Citizen Services",
    desc: "Ministry of Home Affairs official portal to report financial and cyber crimes online.",
    url: "https://cybercrime.gov.in/"
  },
  {
    name: "CEIR Lost / Stolen Mobile Portal",
    category: "Citizen Services",
    desc: "Department of Telecommunications portal to block and trace lost mobile phones.",
    url: "https://www.ceir.gov.in/Home"
  },
  {
    name: "UMANG Multi-Service Central Portal",
    category: "Citizen Services",
    desc: "Single platform access to 1000+ central and state government online services.",
    url: "https://web.umang.gov.in/"
  },
  {
    name: "e-Courts Case Status & Cause List",
    category: "Legal & Rights",
    desc: "Search district and high court cases, FIR numbers and orders online.",
    url: "https://services.ecourts.gov.in/ecourtindia_v6/"
  },
  {
    name: "SPARK e-Gazette Government of India",
    category: "Legal & Rights",
    desc: "Official digital archive for central acts, rules and notifications.",
    url: "https://egazette.gov.in/"
  }
,
  {
    name: "Bihar Kushal Yuva Program (KYP)",
    category: "Education & Career",
    desc: "Skill training registration portal for youth under Bihar Skill Development Mission.",
    url: "https://skillmissionbihar.org/"
  },
  {
    name: "Bihar State Food Portal (PDS Grievance)",
    category: "Bihar Special",
    desc: "Public grievance and dealer inspection portal for Bihar Food Department.",
    url: "http://sfc.bihar.gov.in/"
  },
  {
    name: "National Apprenticeship Training Scheme (NATS)",
    category: "Education & Career",
    desc: "Central stipend-based apprenticeship portal for diploma holders and graduates.",
    url: "https://nats.education.gov.in/"
  },
  {
    name: "PARIVESH Environmental Clearance",
    category: "Business & Tax",
    desc: "Single-window hub for forest, wildlife, environment, and CRZ clearances.",
    url: "https://parivesh.nic.in/"
  },
  {
    name: "SARAS Portal (CBSE School Affiliation)",
    category: "Education & Career",
    desc: "Online affiliation and school verification system by CBSE India.",
    url: "https://saras.cbse.gov.in/affiliation/apply"
  },
  {
    name: "PM Vishwakarma Scheme Portal",
    category: "Welfare & Schemes",
    desc: "Central financial assistance and skill support portal for traditional artisans.",
    url: "https://pmvishwakarma.gov.in/"
  },
  {
    name: "National Judicial Data Grid (NJDG)",
    category: "Legal & Rights",
    desc: "Real-time tracker for cases and orders pending across all Indian courts.",
    url: "https://njdg.ecourts.gov.in/"
  },
  {
    name: "Samarth Higher Education Portal",
    category: "Education & Career",
    desc: "Unified university admissions, governance and examination portal by MoE.",
    url: "https://samarth.edu.in/"
  },
  {
    name: "PM Surya Ghar Muft Bijli Yojana",
    category: "Utilities & Bills",
    desc: "Official subsidy and rooftop solar application portal for Indian households.",
    url: "https://pmsuryaghar.gov.in/apply-online"
  },
  {
    name: "Central Fertilizer Subsidy (DBT In Agriculture)",
    category: "Welfare & Schemes",
    desc: "Direct benefit tracking and farmer subsidy portal by Ministry of Agriculture.",
    url: "https://dbtbharat.gov.in/"
  },
  {
    name: "FASTag Portal (IHMCL Direct Services)",
    category: "Transport",
    desc: "National highway electronic toll balance check and blacklisting resolution.",
    url: "https://ihmcl.co.in/"
  },
  {
    name: "National Health Authority ABHA Creation",
    category: "Health & Medical",
    desc: "Create direct digital Ayushman Bharat Health Account identity card.",
    url: "https://abha.abdm.gov.in/"
  },
  {
    name: "GeM Government e-Marketplace",
    category: "Business & Tax",
    desc: "National public procurement portal for businesses and micro-enterprises.",
    url: "https://gem.gov.in/"
  }
,
  {
    name: "Bureau of Indian Standards (BIS Care)",
    category: "Citizen Services",
    desc: "Verify ISI and Hallmark registration numbers and file product quality complaints.",
    url: "https://www.bis.gov.in/certification"
  }
,
  {
    name: "Bihar Udyami Yojana Portal",
    category: "Business & Tax",
    desc: "Official portal for Bihar Mukhyamantri Udyami Yojana subsidies and loan registration.",
    url: "https://udyami.bihar.gov.in/"
  },
  {
    name: "Bihar State Disaster Management (BSDMA)",
    category: "Citizen Services",
    desc: "Disaster alerts, relief disbursement, and citizen safety guidelines in Bihar.",
    url: "http://bsdma.org/"
  },
  {
    name: "Bihar Agriculture Department (DBT Agriculture)",
    category: "Welfare & Schemes",
    desc: "Online seed distribution, diesel subsidy, and farm equipment registration portal.",
    url: "https://dbtagriculture.bihar.gov.in/"
  },
  {
    name: "Bihar Animal Husbandry Services",
    category: "Welfare & Schemes",
    desc: "Subsidies for dairy, poultry, and animal husbandry schemes in Bihar.",
    url: "https://state.bihar.gov.in/ahd/CitizenHome.html"
  },
  {
    name: "Indian Railway IRCTC Ticketing Portal",
    category: "Transport",
    desc: "Official Indian Railways online train reservation and cancellation portal.",
    url: "https://www.irctc.co.in/nget/"
  },
  {
    name: "National Portal of India Directory",
    category: "Citizen Services",
    desc: "Single-window access to all online information and citizen services across states.",
    url: "https://www.india.gov.in/feedback"
  },
  {
    name: "E-Hospital Online Appointment (ORS)",
    category: "Health & Medical",
    desc: "Online registration and OPD appointment booking for AIIMS and central hospitals.",
    url: "https://ors.gov.in/"
  },
  {
    name: "Post Office Savings & Banking Services (IPPB)",
    category: "Banking & Finance",
    desc: "India Post Payments Bank portal for Aadhaar ATM, doorstep banking, and savings.",
    url: "https://www.ippbonline.com/"
  },
  {
    name: "Ministry of Corporate Affairs (MCA21)",
    category: "Business & Tax",
    desc: "Company registration, DIN allotment, and annual ROC filing portal.",
    url: "https://www.mca.gov.in/mcafoportal/Services/CompanyRegistration/CompanyRegistration.html"
  },
  {
    name: "Telecom Analytics for Fraud Management (TAFCOP)",
    category: "Citizen Services",
    desc: "Check how many mobile connections are registered in your name.",
    url: "https://tafcop.sancharsaathi.gov.in/"
  },
  {
    name: "Sanchar Saathi Lost Phone Blocking",
    category: "Citizen Services",
    desc: "Know your mobile wireline connections and block stolen handsets nationwide.",
    url: "https://sancharsaathi.gov.in/"
  },
  {
    name: "National Grievance Portal (CPGRAMS Public)",
    category: "Citizen Services",
    desc: "Direct public grievance redressal portal monitored by PMO and Central Ministries.",
    url: "https://pgportal.gov.in/"
  },
  {
    name: "PM SVANidhi Micro Credit Scheme",
    category: "Welfare & Schemes",
    desc: "Collateral-free working capital loan portal for urban and rural street vendors.",
    url: "https://pmsvanidhi.mohua.gov.in/"
  }
,
  {
    name: "Ministry of Road Transport and Highways (MoRTH) Vehicle Registration",
    category: "National Transport",
    desc: "Check vehicle registration, driving license, and other transport-related services.",
    url: "https://parivahan.gov.in/parivahan/"
  }
,
  {
    name: "GST Portal",
    category: "Central Direct Taxation",
    desc: "Goods and Services Tax (GST) portal for registration, returns, and payments",
    url: "https://www.gst.gov.in/"
  },
  {
    name: "Income Tax Department",
    category: "Central Direct Taxation",
    desc: "Income Tax Department for filing returns, payment of taxes, and other services",
    url: "https://www.incometax.gov.in/"
  }
,
  {
    name: "Bihar Bhumi",
    category: "Bihar Special",
    desc: "Land Records and Mutation Services",
    url: "https://biharbhumi.bihar.gov.in/BiharEmutationNew/"
  },
  {
    name: "Citizen Service Portal",
    category: "Bihar Special",
    desc: "Portal for various citizen services",
    url: "http://citizenservicesportal.bihar.gov.in/portal/"
  },
  {
    name: "Service Online",
    category: "Bihar Special",
    desc: "Portal for various government services",
    url: "https://serviceonline.bihar.gov.in/resources/homePage/10/loginEnglish.htm"
  }
,
  {
    name: "Bihar Ration Card Application",
    category: "Bihar Special",
    desc: "Apply for Ration Card in Bihar",
    url: "https://serviceonline.bihar.gov.in/directApply.do?serviceId=1205"
  },
  {
    name: "Bihar Pension Application",
    category: "Bihar Special",
    desc: "Apply for Pension in Bihar",
    url: "https://serviceonline.bihar.gov.in/directApply.do?serviceId=1043"
  },
  {
    name: "Bihar Service Portal Login",
    category: "Bihar Special",
    desc: "Login to Bihar Service Portal",
    url: "https://serviceonline.bihar.gov.in/officials/resources/homePage/10/loginEnglish.htm"
  }
,
  {
    name: "Bihar Bhumi Mutation Status Tracking",
    category: "Bihar Special",
    desc: "Track online land mutation case status and disposal.",
    url: "https://biharbhumi.bihar.gov.in/Biharbhumi/MutationStatusNew.aspx"
  },
  {
    name: "Bihar Social Security Pension Beneficiary Status",
    category: "Welfare & Schemes",
    desc: "Check SSPMIS pension payment and Aadhaar seeding status.",
    url: "https://www.sspmis.bihar.gov.in/CheckPaymentStatus"
  },
  {
    name: "Bihar Seed Corporation Subsidized Seeds (BRBN)",
    category: "Welfare & Schemes",
    desc: "Online subsidized quality seed booking for Bihar farmers.",
    url: "https://brbn.bihar.gov.in/"
  },
  {
    name: "South Bihar Power Bill Quick Pay (SBPDCL)",
    category: "Utilities & Bills",
    desc: "Direct consumer portal for instant South Bihar power bill payment.",
    url: "https://sbpdcl.co.in/QuickPay/QuickPay.aspx"
  },
  {
    name: "North Bihar Power Bill Quick Pay (NBPDCL)",
    category: "Utilities & Bills",
    desc: "Direct online electricity payment portal for North Bihar.",
    url: "https://nbpdcl.co.in/"
  },
  {
    name: "Parivahan DL Application Status Tracking",
    category: "Transport",
    desc: "Check status of DL and LL applications using application number.",
    url: "https://sarathi.parivahan.gov.in/sarathiservice/applViewStatus.do"
  },
  {
    name: "National Train Enquiry System (NTES)",
    category: "Transport",
    desc: "Live train running status, train schedule, and station updates.",
    url: "https://enquiry.indianrail.gov.in/"
  },
  {
    name: "MyAadhaar Lock / Unlock Biometrics",
    category: "Citizen Services",
    desc: "Protect identity by locking fingerprint and iris data online.",
    url: "https://myaadhaar.uidai.gov.in/lock-unlock-aadhaar"
  },
  {
    name: "MyAadhaar Verify Email / Mobile Number",
    category: "Citizen Services",
    desc: "Verify email and mobile number linked with your identification.",
    url: "https://myaadhaar.uidai.gov.in/verify-email-mobile"
  },
  {
    name: "DigiLocker Universal Digital Document Locker",
    category: "Citizen Services",
    desc: "Access verified digital driving licence, marksheets, and RC.",
    url: "https://www.digilocker.gov.in/"
  },
  {
    name: "CEIR Lost / Stolen Mobile Handset Blocking",
    category: "Citizen Services",
    desc: "Block and trace stolen or lost mobile IMEI numbers nationwide.",
    url: "https://www.ceir.gov.in/"
  },
  {
    name: "Income Tax e-Filing 2.0 Portal",
    category: "Business & Tax",
    desc: "File annual ITR-1 to ITR-7, view tax credit, and respond to notices.",
    url: "https://eportal.incometax.gov.in/"
  },
  {
    name: "Income Tax PAN-Aadhaar Linkage Status",
    category: "Business & Tax",
    desc: "Check status of identity linkage for income tax filing compliance.",
    url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status"
  },
  {
    name: "e-Way Bill System National Portal",
    category: "Business & Tax",
    desc: "Generate and verify electronic way bills for inter-state cargo movement.",
    url: "https://ewaybillgst.gov.in/"
  },
  {
    name: "Udyam MSME Registration Portal",
    category: "Business & Tax",
    desc: "Zero-cost government MSME registration and certificate download.",
    url: "https://udyamregistration.gov.in/"
  },
  {
    name: "e-Hospital Online Registration System (ORS)",
    category: "Health & Medical",
    desc: "Book doctor appointments in AIIMS, central and state hospitals.",
    url: "https://www.mohfw.gov.in/"
  },
  {
    name: "National Food Security Portal (NFSA Ration Card)",
    category: "Welfare & Schemes",
    desc: "Search ration card quota and state-wise food entitlement lists.",
    url: "https://nfsa.gov.in/"
  },
  {
    name: "Voter ID Application Status Tracking",
    category: "Citizen Services",
    desc: "Track processing of voter ID card using reference number.",
    url: "https://voters.eci.gov.in/track"
  }
,
  {
    name: "Bihar Parvarish Yojana Beneficiary Scheme",
    category: "Bihar Special",
    desc: "Financial assistance grant for orphans and children affected by leprosy/HIV.",
    url: "https://state.bihar.gov.in/socialwelfare/CitizenHome.html"
  },
  {
    name: "Bihar Horticulture Mission Scheme Portal",
    category: "Bihar Special",
    desc: "Polyhouse, drip irrigation and vegetable cultivation subsidy portal.",
    url: "https://horticulture.bihar.gov.in/"
  },
  {
    name: "CSBC Bihar Central Selection Board of Constable",
    category: "Bihar Special",
    desc: "Bihar Police, Fireman and Excise constable recruitment portal.",
    url: "https://csbc.bihar.gov.in/"
  },
  {
    name: "BPSSC Bihar Police Sub-Inspector Portal",
    category: "Bihar Special",
    desc: "Bihar Police Daroga (SI) and Sergeant online examinations hub.",
    url: "https://bpssc.bihar.gov.in/"
  },
  {
    name: "BCECEB Bihar Combined Entrance Examination",
    category: "Bihar Special",
    desc: "Engineering, Diploma (DCECE), and Paramedical counseling portal.",
    url: "https://bceceboard.bihar.gov.in/"
  },
  {
    name: "Patna High Court Case Tracking Portal",
    category: "Bihar Special",
    desc: "Online search for CNR, case orders, and daily cause list Patna High Court.",
    url: "https://patnahighcourt.gov.in/"
  }
,
  {
    name: "Patna University (PU Online)",
    category: "Bihar Colleges & Education",
    desc: "Official admission, marksheet and degree portal Patna University.",
    url: "https://pup.ac.in/"
  },
  {
    name: "Patliputra University (PPU Admissions)",
    category: "Bihar Colleges & Education",
    desc: "Undergraduate and postgraduate examination and admission portal.",
    url: "https://ppup.ac.in/"
  },
  {
    name: "Babasaheb Bhimrao Ambedkar Bihar University (BRABU)",
    category: "Bihar Colleges & Education",
    desc: "Degree examinations, registration and admit card portal Muzaffarpur.",
    url: "https://www.brabu.net/"
  },
  {
    name: "Magadh University Bodh Gaya",
    category: "Bihar Colleges & Education",
    desc: "Degree marksheets, result publication and academic portal Bodh Gaya.",
    url: "https://magadhuniversity.ac.in/"
  },
  {
    name: "Lalit Narayan Mithila University (LNMU)",
    category: "Bihar Colleges & Education",
    desc: "Student admission, exam results and registration portal Darbhanga.",
    url: "https://lnmu.ac.in/"
  },
  {
    name: "Tilka Manjhi Bhagalpur University (TMBU)",
    category: "Bihar Colleges & Education",
    desc: "Official student services and examination portal Bhagalpur.",
    url: "http://tmbuniv.ac.in/"
  },
  {
    name: "Veer Kunwar Singh University (VKSU Arrah)",
    category: "Bihar Colleges & Education",
    desc: "UG/PG admission, admit card and results portal Arrah Bhojpur.",
    url: "https://vksu.ac.in/"
  },
  {
    name: "Jai Prakash University (JPU Chapra)",
    category: "Bihar Colleges & Education",
    desc: "Academic registration and exam results portal Chapra Saran.",
    url: "https://jpv.ac.in/"
  },
  {
    name: "Purnea University Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Undergraduate admission, exams and degree portal Purnea.",
    url: "https://www.purneauniversity.ac.in/"
  },
  {
    name: "Bhupendra Narayan Mandal University (BNMU)",
    category: "Bihar Colleges & Education",
    desc: "Official examinations and registration portal Madhepura.",
    url: "https://bnmu.ac.in/"
  },
  {
    name: "Munger University Student Portal",
    category: "Bihar Colleges & Education",
    desc: "Online admission, examination forms and results portal Munger.",
    url: "https://mungeruniversity.ac.in/"
  },
  {
    name: "Nalanda Open University (NOU Distance Education)",
    category: "Bihar Colleges & Education",
    desc: "Distance degree courses, admission and study materials portal.",
    url: "https://nou.ac.in/"
  },
  {
    name: "IIT Patna Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Indian Institute of Technology Patna academic and research portal.",
    url: "https://www.iitp.ac.in/"
  },
  {
    name: "NIT Patna Student Portal",
    category: "Bihar Colleges & Education",
    desc: "National Institute of Technology Patna academic portal.",
    url: "https://www.nitp.ac.in/"
  },
  {
    name: "PMCH Patna (Patna Medical College Hospital)",
    category: "Health & Medical",
    desc: "Official hospital services and medical education desk PMCH.",
    url: "http://patnamedicalcollege.com/"
  },
  {
    name: "IGIMS Patna Online Patient OPD Portal",
    category: "Health & Medical",
    desc: "Indira Gandhi Institute of Medical Sciences online OPD booking.",
    url: "http://www.igims.org/"
  },
  {
    name: "Chanakya National Law University (CNLU)",
    category: "Bihar Colleges & Education",
    desc: "National Law University Patna student notices and entrance portal.",
    url: "https://cnlu.ac.in/"
  },
  {
    name: "Bihar Agricultural University (BAU Sabour)",
    category: "Bihar Colleges & Education",
    desc: "Agricultural degree education, farmer training and extension Sabour.",
    url: "https://bausabour.ac.in/"
  },
  {
    name: "Bihar Land Records Survey Maps (DLRS)",
    category: "Bihar Special",
    desc: "Download revenue village maps and survey records online.",
    url: "https://dlrs.bihar.gov.in/"
  },
  {
    name: "Bihar Ration Card Management Portal (EPDS)",
    category: "Bihar Special",
    desc: "Ration card search, dealer allocation and family details list.",
    url: "http://epds.bihar.gov.in/"
  },
  {
    name: "South Bihar Power Distribution (SBPDCL Bill Pay)",
    category: "Bihar Special",
    desc: "Instant electricity bill payment for southern Bihar consumers.",
    url: "https://sbpdcl.co.in/"
  },
  {
    name: "Patna Municipal Corporation (PMC Citizen Portal)",
    category: "Bihar Special",
    desc: "Patna city holding tax, sanitation and trade license services.",
    url: "https://www.pmc.bihar.gov.in/"
  },
  {
    name: "Bihar Police Official Citizen Desk",
    category: "Bihar Special",
    desc: "Online lost article report, tenant and domestic help verification.",
    url: "https://police.bihar.gov.in/"
  },
  {
    name: "BSSC Bihar Staff Selection Portal",
    category: "Education & Career",
    desc: "Inter and graduate level competitive recruitment notices BSSC.",
    url: "https://bssc.bihar.gov.in/"
  },
  {
    name: "MyAadhaar Digital Services Portal",
    category: "Citizen Services",
    desc: "Aadhaar download, address update, PVC card and mobile verify.",
    url: "https://myaadhaar.uidai.gov.in/"
  }
,
  {
    name: "Aryabhatta Knowledge University (AKU Patna)",
    category: "Bihar Colleges & Education",
    desc: "Technical, engineering and medical university portal Patna.",
    url: "http://akubihar.ac.in/"
  },
  {
    name: "Nalanda University Rajgir",
    category: "Bihar Colleges & Education",
    desc: "International university academic admissions and student portal.",
    url: "https://nalandauniv.edu.in/"
  },
  {
    name: "Central University of South Bihar (CUSB)",
    category: "Bihar Colleges & Education",
    desc: "Central university degree programs and admission portal Gaya.",
    url: "https://www.cusb.ac.in/"
  },
  {
    name: "Mahatma Gandhi Central University (MGCU Motihari)",
    category: "Bihar Colleges & Education",
    desc: "Central university degree courses and examination portal.",
    url: "https://mgcub.ac.in/"
  },
  {
    name: "Dr. Rajendra Prasad Central Agricultural University",
    category: "Bihar Colleges & Education",
    desc: "Agricultural degree admissions and research portal Pusa Samastipur.",
    url: "https://www.rpcau.ac.in/"
  },
  {
    name: "Patna Women's College (PWC Online)",
    category: "Bihar Colleges & Education",
    desc: "Autonomous college undergraduate admissions and results portal.",
    url: "https://patnawomenscollege.in/"
  },
  {
    name: "A.N. College Patna Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Autonomous college admissions and academic notices Patna.",
    url: "https://ancpatna.ac.in/"
  },
  {
    name: "College of Commerce Arts & Science Patna",
    category: "Bihar Colleges & Education",
    desc: "Premier constituent college portal under Patliputra University.",
    url: "https://cocaspatna.ac.in/"
  },
  {
    name: "Muzaffarpur Institute of Technology (MIT)",
    category: "Bihar Colleges & Education",
    desc: "Government engineering college academic portal Muzaffarpur.",
    url: "https://www.mitmuzaffarpur.org/"
  },
  {
    name: "Bhagalpur College of Engineering (BCE)",
    category: "Bihar Colleges & Education",
    desc: "Government engineering degree portal Bhagalpur.",
    url: "https://www.bcebhagalpur.ac.in/"
  },
  {
    name: "Gaya College of Engineering (GCE Gaya)",
    category: "Bihar Colleges & Education",
    desc: "Government technical engineering degree portal Gaya.",
    url: "https://www.gcegaya.ac.in/"
  },
  {
    name: "Darbhanga College of Engineering (DCE)",
    category: "Bihar Colleges & Education",
    desc: "Government engineering college academic hub Darbhanga.",
    url: "https://www.dcedarbhanga.ac.in/"
  },
  {
    name: "Motihari College of Engineering (MCE)",
    category: "Bihar Colleges & Education",
    desc: "Government engineering degree admissions and notice portal.",
    url: "https://www.mcemotihari.ac.in/"
  },
  {
    name: "Nalanda College of Engineering (NCE Chandi)",
    category: "Bihar Colleges & Education",
    desc: "Government technical degree institution portal Nalanda.",
    url: "https://www.ncechandi.ac.in/"
  },
  {
    name: "Nalanda Medical College Hospital (NMCH Patna)",
    category: "Health & Medical",
    desc: "Official medical college hospital OPD and healthcare desk.",
    url: "http://nmchpatna.org/"
  },
  {
    name: "Sri Krishna Medical College Hospital (SKMCH)",
    category: "Health & Medical",
    desc: "Government medical hospital services and patient desk Muzaffarpur.",
    url: "http://skmch.org/"
  },
  {
    name: "Bihar Animal Sciences University (BASU Patna)",
    category: "Bihar Colleges & Education",
    desc: "Veterinary science and dairy technology university portal.",
    url: "https://basu.org.in/"
  },
  {
    name: "Bihar State Road Transport Corporation (BSRTC)",
    category: "Transport",
    desc: "Official government inter-city bus booking and passes Bihar.",
    url: "https://state.bihar.gov.in/transport/CitizenHome.html"
  },
  {
    name: "Bihar Brabu Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://brabu.ac.in"
  },
  {
    name: "Bihar Beu-bih Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://beu-bih.ac.in"
  },
  {
    name: "Bihar Brabu Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://brabu.ac.in/home/constituent_college"
  },
  {
    name: "Bihar Buhs Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://buhs.ac.in"
  },
  {
    name: "Bihar Mmhapu Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://mmhapu.ac.in"
  },
  {
    name: "Bihar Buhs Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://buhs.ac.in/buhschanakya"
  },
  {
    name: "Bihar Lnmu Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://lnmu.ac.in"
  },
  {
    name: "Bihar Umis Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://umis.brabu.ac.in"
  },
  {
    name: "Bihar Rameshwarcollege Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://www.rameshwarcollege.ac.in"
  },
  {
    name: "Bihar Mjkcollege Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://www.mjkcollege.ac.in"
  },
  {
    name: "Bihar Aiimsdeoghar Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://www.aiimsdeoghar.edu.in"
  },
  {
    name: "Bihar Rimc Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://rimc.edu.in/rimc-index.aspx"
  },
  {
    name: "Bihar Nalandauniv Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://nalandauniv.edu.in"
  },
  {
    name: "Bihar Rbbsu Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://rbbsu.edu.in"
  },
  {
    name: "Bihar Abvmuup Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://www.abvmuup.edu.in"
  },
  {
    name: "Bihar Mpgi Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://www.mpgi.edu.in"
  },
  {
    name: "Bihar Aiimsbilaspur Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://www.aiimsbilaspur.edu.in"
  },
  {
    name: "Bihar Patnamedicalcollege Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://patnamedicalcollege.edu.in/affiliated"
  },
  {
    name: "Bihar Iihmr Official Portal",
    category: "Bihar Colleges & Education",
    desc: "Official bihar colleges & education portal for citizens in Bihar.",
    url: "https://iihmr.edu.in"
  }
];