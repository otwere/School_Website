import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Upload, User, Mail, Phone, Calendar, Book, School, UserPlus, Check, Printer } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";

const AdmissionForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Student Information
    studentName: "",
    dateOfBirth: "",
    gender: "",
    appliedGrade: "",
    previousSchool: "",
    // Parent Information
    parentName: "",
    relationship: "",
    email: "",
    phone: "",
    occupation: "",
    // Additional Information
    specialNeeds: "",
    hobbies: "",
    siblings: "",
    transport: false,
    // Documents
    birthCertificate: null as File | null,
    previousRecords: null as File | null,
    photo: null as File | null,
    medicalReport: null as File | null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Get current date for max date of birth
  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.studentName) newErrors.studentName = "Student name is required";
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.appliedGrade) newErrors.appliedGrade = "Applied grade is required";
    }
    if (currentStep === 2) {
      if (!formData.parentName) newErrors.parentName = "Parent name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone number is required";
      if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Phone number must be exactly 10 digits";
      }
      if (!formData.residentialArea) newErrors.residentialArea = "Residential area is required"; // New validation
      if (!formData.commonLandmark) newErrors.commonLandmark = "Common landmark is required"; // New validation
    }
    if (currentStep === 4) {
      if (!formData.birthCertificate) newErrors.birthCertificate = "Birth certificate is required";
      if (!formData.previousRecords) newErrors.previousRecords = "Previous school records are required";
      if (!formData.photo) newErrors.photo = "Passport photo is required";
      // Medical report is optional, so no validation needed
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        [field]: file,
      });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handlePrint = () => {
    window.print();
  };

  if (isSuccess) {
    return (
      <BackgroundWrapper>
        <div className="max-w-4xl mt-10  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-inherit border rounded-xl shadow-none p-8 text-center relative">
            <div className="absolute top-4 right-4">
              <button
                onClick={handlePrint}
                className="flex items-center px-6 py-3 text-white rounded-lg transition-colors duration-200"
              >
                <Printer className="w-5 h-5 ml-2 text-gray-700 hover:text-blue-700" />
              </button>
            </div>

            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-700" />
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Application Submitted Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in our School. We will review your
              Application and contact you soon.
            </p>
            <p className="text-lg text-blue-700 mb-6">
              Application Reference Number : {" "}
              {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
        </div>
      </BackgroundWrapper>
    );
  }

  return (
    <BackgroundWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {["Student Details", "Parent Information", "Additional Details", "Documents"].map((label, index) => (
              <div key={index} className="flex-1 text-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    step > index + 1
                      ? "bg-green-500 text-white"
                      : step === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step > index + 1 ? <Check className="w-4 h-4" /> : index + 1}
                </div>
                <p className="text-sm text-gray-600">{label}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{
                  width: `${((step - 1) / 3) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="bg-inherit border rounded-2xl shadow-none p-8">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6">Student Information</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={formData.studentName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          studentName: e.target.value,
                        })
                      }
                      className={`pl-10 w-full rounded-lg border ${
                        errors.studentName ? "border-red-500" : "border-gray-300"
                      } p-3`}
                      placeholder="Enter student's full name"
                    />
                  </div>
                  {errors.studentName && (
                    <p className="text-red-500 text-sm mt-1">{errors.studentName}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        value={formData.dateOfBirth}
                        max={getCurrentDate()}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            dateOfBirth: e.target.value,
                          })
                        }
                        className={`pl-10 w-full rounded-lg border ${
                          errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                        } p-3`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          gender: e.target.value,
                        })
                      }
                      className={`w-full rounded-lg border ${
                        errors.gender ? "border-red-500" : "border-gray-300"
                      } p-3`}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Applied Grade
                  </label>
                  <div className="relative">
                    <School className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={formData.appliedGrade}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          appliedGrade: e.target.value,
                        })
                      }
                      className={`pl-10 w-full rounded-lg border ${
                        errors.appliedGrade ? "border-red-500" : "border-gray-300"
                      } p-3`}
                    >
                      <option value="">Select Grade</option>
                      <option value="pp1">Kindergarten (Play Group)</option>
                      <option value="pp1">Pre-Primary 1 (PP 1)</option>
                      <option value="pp2">Pre-Primary 2 (PP 2)</option>
                      <option value="g1">Grade 1</option>
                      <option value="g2">Grade 2</option>
                      <option value="g3">Grade 3</option>
                      <option value="g4">Grade 4</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6">Parent | Guardian Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Parent | Guardian Name
                    </label>
                    <div className="relative">
                      <UserPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            parentName: e.target.value,
                          })
                        }
                        className={`pl-10 w-full rounded-lg border ${
                          errors.parentName ? "border-red-500" : "border-gray-300"
                        } p-3`}
                        placeholder="Enter Parent's | Guardian's name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Relationship to Student
                    </label>
                    <select
                      value={formData.relationship}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          relationship: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 p-3"
                    >
                      <option value="">Select relationship</option>
                      <option value="father">Father</option>
                      <option value="mother">Mother</option>
                      <option value="guardian">Guardian</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className={`pl-10 w-full rounded-lg border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } p-3`}
                        placeholder="Enter valid email address"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={`pl-10 w-full rounded-lg border ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        } p-3`}
                        placeholder="Enter valid phone number"
                        maxLength={10}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
                {/* New Fields: Residential Area and Common Landmark */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Residential Area
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.residentialArea}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            residentialArea: e.target.value,
                          })
                        }
                        className={`w-full rounded-lg border ${
                          errors.residentialArea ? "border-red-500" : "border-gray-300"
                        } p-3`}
                        placeholder="Enter residential area"
                      />
                    </div>
                    {errors.residentialArea && (
                      <p className="text-red-500 text-sm mt-1">{errors.residentialArea}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Common Landmark
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.commonLandmark}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            commonLandmark: e.target.value,
                          })
                        }
                        className={`w-full rounded-lg border ${
                          errors.commonLandmark ? "border-red-500" : "border-gray-300"
                        } p-3`}
                        placeholder="Enter a common landmark"
                      />
                    </div>
                    {errors.commonLandmark && (
                      <p className="text-red-500 text-sm mt-1">{errors.commonLandmark}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6">Additional Information</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Needs | Medical Conditions
                  </label>
                  <textarea
                    value={formData.specialNeeds}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specialNeeds: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-300 p-3"
                    rows={3}
                    placeholder="Please specify any special needs or medical conditions"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hobbies & Interests
                  </label>
                  <textarea
                    value={formData.hobbies}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hobbies: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-300 p-3"
                    rows={2}
                    placeholder="List student's hobbies and interests"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.transport}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        transport: e.target.checked,
                      })
                    }
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    Requires School Transport
                  </label>
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6">Required Documents</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Birth Certificate
                    </label>
                    <div className="relative border border-gray-300 rounded-lg p-4">
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, "birthCertificate")}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex items-center justify-center">
                        <Upload className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">
                          {formData.birthCertificate?.name || "Upload Birth Certificate"}
                        </span>
                      </div>
                    </div>
                    {errors.birthCertificate && (
                      <p className="text-red-500 text-sm mt-1">{errors.birthCertificate}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Previous School Records
                    </label>
                    <div className="relative border border-gray-300 rounded-lg p-4">
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, "previousRecords")}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex items-center justify-center">
                        <Upload className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">
                          {formData.previousRecords?.name || "Upload School Records"}
                        </span>
                      </div>
                    </div>
                    {errors.previousRecords && (
                      <p className="text-red-500 text-sm mt-1">{errors.previousRecords}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Passport Photo
                    </label>
                    <div className="relative border border-gray-300 rounded-lg p-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, "photo")}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex items-center justify-center">
                        <Upload className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">
                          {formData.photo?.name || "Upload Passport Photo"}
                        </span>
                      </div>
                    </div>
                    {errors.photo && (
                      <p className="text-red-500 text-sm mt-1">{errors.photo}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Medical Report (Optional)
                    </label>
                    <div className="relative border border-gray-300 rounded-lg p-4">
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, "medicalReport")}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex items-center justify-center">
                        <Upload className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">
                          {formData.medicalReport?.name || "Upload Medical Report (Optional)"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg ml-auto transition-colors duration-200"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg ml-auto transition-colors duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  {!isSubmitting && <ChevronRight className="w-5 h-5 ml-2" />}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default AdmissionForm;