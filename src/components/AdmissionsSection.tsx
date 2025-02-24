import React, { useState } from "react";
import { BookOpen, Calendar, Download, ArrowRight, CheckCircle, ArrowDown } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";
import { useNavigate } from "react-router-dom";
import ScheduleVisitModal from "./ScheduleVisitModal";
const AdmissionsSection = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"term" | "annual">("term");
  const [expandedFee, setExpandedFee] = useState<string | null>(null);
  const [downloadingFee, setDownloadingFee] = useState(false);
  const [selectedFeeLevel, setSelectedFeeLevel] = useState<string>("");
  const [downloadProgress, setDownloadProgress] = useState<boolean>(false);
  const admissionSteps = [{
    step: 1,
    title: "Submit Application",
    description: "Complete the online application form with all required documents",
    requirements: ["Birth Certificate", "Previous School Records", "Passport Photo", "Medical Records"]
  }, {
    step: 2,
    title: "Assessment",
    description: "Schedule and complete the entrance assessment",
    requirements: ["English Proficiency", "Mathematics", "General Knowledge", "Interview"]
  }, {
    step: 3,
    title: "Enrollment",
    description: "Complete enrollment process upon acceptance",
    requirements: ["Pay Registration Fee", "Sign Agreement", "Submit Additional Forms", "Attend Orientation"]
  }];
  const fees = [{
    level: "Kindergarten",
    amount: "KSH 150,000",
    period: "per term"
  }, {
    level: "Junior School",
    amount: "KSH 180,000",
    period: "per term"
  }, {
    level: "Senior School",
    amount: "KSH 200,000",
    period: "per term"
  }];
  const feeBreakdown = {
    Kindergarten: [{
      item: "Tuition Fee",
      amount: "KSH 120,000"
    }, {
      item: "Learning Materials",
      amount: "KSH 15,000"
    }, {
      item: "Activities",
      amount: "KSH 10,000"
    }, {
      item: "Catering",
      amount: "KSH 5,000"
    }],
    "Junior School": [{
      item: "Tuition Fee",
      amount: "KSH 145,000"
    }, {
      item: "Learning Materials",
      amount: "KSH 18,000"
    }, {
      item: "Activities",
      amount: "KSH 12,000"
    }, {
      item: "Catering",
      amount: "KSH 5,000"
    }],
    "Senior School": [{
      item: "Tuition Fee",
      amount: "KSH 160,000"
    }, {
      item: "Learning Materials",
      amount: "KSH 20,000"
    }, {
      item: "Activities",
      amount: "KSH 15,000"
    }, {
      item: "Catering",
      amount: "KSH 5,000"
    }]
  };
  const annualFees = {
    Kindergarten: {
      amount: "KSH 450,000",
      breakdown: [{
        term: "Term 1",
        amount: "KSH 150,000"
      }, {
        term: "Term 2",
        amount: "KSH 150,000"
      }, {
        term: "Term 3",
        amount: "KSH 150,000"
      }]
    },
    "Junior School": {
      amount: "KSH 540,000",
      breakdown: [{
        term: "Term 1",
        amount: "KSH 180,000"
      }, {
        term: "Term 2",
        amount: "KSH 180,000"
      }, {
        term: "Term 3",
        amount: "KSH 180,000"
      }]
    },
    "Senior School": {
      amount: "KSH 600,000",
      breakdown: [{
        term: "Term 1",
        amount: "KSH 200,000"
      }, {
        term: "Term 2",
        amount: "KSH 200,000"
      }, {
        term: "Term 3",
        amount: "KSH 200,000"
      }]
    }
  };
  const handleDownloadFeeStructure = async () => {
    if (!selectedFeeLevel && !downloadingFee) {
      return;
    }
    setDownloadingFee(true);
    setDownloadProgress(true);
    // Simulate download delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setDownloadingFee(false);
    setDownloadProgress(false);
    setSelectedFeeLevel("");
  };
  return <BackgroundWrapper variant="colored">
      <div id="admissions" className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-sans">
            Admissions Requirements
          </h2>
          <p className="mt-4 text-xl text-gray-600 italic">
            Join our vibrant learning community
          </p>
        </div>
        <div className="mb-20">
          <div className="flex justify-center mb-12">
            {admissionSteps.map(step => <div key={step.step} className={`relative flex flex-col items-center mx-4 w-1/3 ${activeStep === step.step ? "opacity-100" : "opacity-60"}`} onClick={() => setActiveStep(step.step)}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${activeStep === step.step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}>
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <div className="h-1 w-full bg-gray-200 absolute top-6 -z-10">
                  <div className="h-full bg-blue-600 transition-all duration-300" style={{
                width: activeStep >= step.step ? "100%" : "0%"
              }} />
                </div>
              </div>)}
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-sm p-8">
            <h4 className="text-2xl font-bold mb-6">
              {admissionSteps[activeStep - 1].title}
            </h4>
            <p className="text-gray-600 mb-6">
              {admissionSteps[activeStep - 1].description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {admissionSteps[activeStep - 1].requirements.map((req, index) => <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>{req}</span>
                </div>)}
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-2xl font-bold">Fee Structure</h3>
            <div className="flex items-center space-x-6">
              <div className="flex items-center bg-gray-100 rounded-full p-1">
                <button onClick={() => setViewMode("term")} className={`px-4 py-2 rounded-full transition-all ${viewMode === "term" ? "bg-white/50 shadow-none text-blue-600" : "text-gray-600"}`}>
                  Per Term
                </button>
                <button onClick={() => setViewMode("annual")} className={`px-4 py-2 rounded-full transition-all ${viewMode === "annual" ? "bg-white/50 shadow-none text-blue-600" : "text-gray-600"}`}>
                  Annual
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <select value={selectedFeeLevel} onChange={e => setSelectedFeeLevel(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Level</option>
                  <option value="Kindergarten">Kindergarten</option>
                  <option value="Junior School">Junior School</option>
                  <option value="Senior School">Senior School</option>
                </select>
                <button onClick={handleDownloadFeeStructure} disabled={!selectedFeeLevel || downloadingFee} className={`flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg transition-all ${!selectedFeeLevel ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}>
                  {downloadingFee ? <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Downloading...
                    </span> : <>
                      <Download className="w-4 h-4 mr-2" />
                      Download Structure
                    </>}
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fees.map((fee, index) => <div key={index} className="group bg-white/50 rounded-xl shadow-none p-8 text-center transform transition-all duration-300 hover:scale-98 hover:shadow-sm hover:bg-white/75">
                <div className="relative">
                  <h4 className="text-xl font-semibold mb-4">{fee.level}</h4>
                  <p className="text-3xl font-bold text-blue-600 mb-2">
                    {viewMode === "annual" ? annualFees[fee.level as keyof typeof annualFees].amount : fee.amount}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {viewMode === "annual" ? "per year" : fee.period}
                  </p>
                  <button onClick={() => setExpandedFee(expandedFee === fee.level ? null : fee.level)} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    {expandedFee === fee.level ? "Hide Details" : "View Details"}
                    <ArrowDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${expandedFee === fee.level ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {expandedFee === fee.level && <div className="mt-6 border-t pt-4 space-y-4">
                    {viewMode === "annual" ? <div className="space-y-3">
                        {annualFees[fee.level as keyof typeof annualFees].breakdown.map((term, idx) => <div key={idx} className="flex justify-between text-sm bg-gray-50 p-3 rounded-lg">
                            <span className="text-gray-600">{term.term}</span>
                            <span className="font-medium">{term.amount}</span>
                          </div>)}
                      </div> : <div className="space-y-3">
                        {feeBreakdown[fee.level as keyof typeof feeBreakdown].map((item, idx) => <div key={idx} className="flex justify-between text-sm bg-gray-50 p-3 rounded-lg">
                            <span className="text-gray-600">{item.item}</span>
                            <span className="font-medium">{item.amount}</span>
                          </div>)}
                      </div>}
                  </div>}
              </div>)}
          </div>
        </div>
        <div className="text-center">
          <button onClick={() => navigate("/admission-form")} className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto">
            Begin Application
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-blue-600">
              <Download className="w-5 h-5 mr-2" />
              Download Prospectus
            </button>
            <button onClick={() => setIsVisitModalOpen(true)} className="flex items-center text-gray-600 hover:text-blue-600">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Visit
            </button>
          </div>
        </div>
        <ScheduleVisitModal isOpen={isVisitModalOpen} onClose={() => setIsVisitModalOpen(false)} />
      </div>
    </BackgroundWrapper>;
};
export default AdmissionsSection;