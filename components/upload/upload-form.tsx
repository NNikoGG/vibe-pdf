"use client";

import UploadFormInput from "./upload-form-input";

const handleSubmit = () => {
  console.log("submit");
};

export default function UploadForm() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
