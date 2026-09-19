export interface CompanyProfile {
  name: string;
  subName: string;
  tagline: string;
  establishedYear: number;
  yearsOfExperience: number;
  headquarters: {
    address: string;
    landmark?: string;
    area?: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    description: string;
  };
  contact: {
    email: string;
    phoneSupport: string;
    phoneSupport2: string;
    partnerPhones: string[];
    website: string;
  };
  registration: {
    gst: string;
    pan: string;
  };
  bankDetails: {
    accountNumber: string;
    ifsc: string;
    branchName: string;
    accountType: string;
  };
  certifications: string[];
  capabilities: string[];
}

export const companyData: CompanyProfile = {
  name: "Labelvista",
  subName: "SOLUTIONS",
  tagline: "Precision • Performance • Perfection",
  establishedYear: 2007,
  yearsOfExperience: 17,
  headquarters: {
    address: "1st Floor, Plot No 40 to 41, Shivdhara Raschel Park, Nr. Torrent Power Gaypagla, Dhoranpardi Kamrej",
    landmark: "Nr. Torrent Power Gaypagla",
    area: "Dhoranpardi Kamrej",
    city: "Surat",
    state: "Gujarat",
    pincode: "394155",
    country: "India",
    description: "Industrial roll label manufacturing, precision die-cutting, and flexographic printing facility.",
  },
  contact: {
    email: "labelvistasolutions@gmail.com",
    phoneSupport: "+91 98987 06129",
    phoneSupport2: "+91 99245 92000",
    partnerPhones: ["+91 98987 06129", "+91 99245 92000"],
    website: "www.labelvista.com",
  },
  registration: {
    gst: "24AANFL3887H1ZV",
    pan: "AANFL3887H",
  },
  bankDetails: {
    accountNumber: "538705500244",
    ifsc: "ICIC0005387",
    branchName: "VALAK",
    accountType: "CURRENT ACCOUNT",
  },
  certifications: [
    "ISO 9001:2015 Quality Certified",
    "GST Registered (24AANFL3887H1ZV)",
    "PAN Certified (AANFL3887H)",
    "Facility Spec 21 CFR Compliant",
    "Udyog Aadhar Certified",
  ],
  capabilities: [
    "High-Speed Rotary Die-Cutting",
    "6-Color Flexo UV & Varnish Printing",
    "2-Color & 4-Color Flat Belt Printing",
    "Micron-Level Optical Registration",
    "Thermal Paper Slitting & Rewinding",
    "A4 Multi-Purpose Sheet Matrix Conversion",
    "Tamper-Evident & Holographic Security Foiling",
  ],
};
