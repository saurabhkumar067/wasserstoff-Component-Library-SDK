"use client"
import { useState, useCallback } from 'react';

export default function UploadMonitor() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFile(e.target.files[0]);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[35vh] ">
      <div className="w-full max-w-md">
        <h1 className="text-sm text-start mb-1 tracking-wide">Upload monitor</h1>
        
        <div 
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors bg-[#211818] ${
            isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-input').click()}
        >
          {uploadedFile ? (
            <div className="text-green-600">
              <p className="font-medium">File uploaded:</p>
              <p>{uploadedFile.name}</p>
            </div>
          ) : (
            <>
              <p className="text-gray-500 mb-2">Drop and drop or click to upload</p>
              <svg 
                className="w-12 h-12 mx-auto text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                />
              </svg>
            </>
          )}
          
          <input 
            id="file-input"
            type="file" 
            className="hidden" 
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
}