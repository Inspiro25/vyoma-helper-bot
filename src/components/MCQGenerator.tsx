
import React from 'react';
import { Check, X, Upload } from 'lucide-react';

const MCQGenerator = () => {
  return (
    <div className="w-full h-full flex flex-col rounded-2xl glass overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="font-medium">MCQ Generator</h3>
      </div>
      
      <div className="flex-grow p-6 overflow-y-auto">
        <div className="mb-8 border border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center">
          <Upload size={32} className="text-muted-foreground mb-3" />
          <h4 className="font-medium mb-1">Upload document</h4>
          <p className="text-sm text-muted-foreground mb-4 text-center">
            Drag and drop your PDF, Word document or text file here
          </p>
          <button className="px-4 py-2 bg-vyoma text-white rounded-md text-sm">
            Browse files
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-border">
            <div className="text-sm font-medium text-muted-foreground mb-1">Question 1</div>
            <h4 className="font-medium mb-3">What is the main purpose of Vyoma's MCQ generator?</h4>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center p-2 rounded-md hover:bg-secondary/50 cursor-pointer">
                <div className="h-5 w-5 rounded-full border border-muted-foreground mr-3 flex items-center justify-center">
                  <span className="text-xs">A</span>
                </div>
                <p className="text-sm">To generate random questions from text</p>
              </div>
              
              <div className="flex items-center p-2 rounded-md bg-green-50 border border-green-200 cursor-pointer">
                <div className="h-5 w-5 rounded-full bg-green-500 text-white mr-3 flex items-center justify-center">
                  <span className="text-xs">B</span>
                </div>
                <p className="text-sm">To create structured multiple-choice questions from uploaded documents</p>
                <Check size={16} className="ml-auto text-green-500" />
              </div>
              
              <div className="flex items-center p-2 rounded-md hover:bg-secondary/50 cursor-pointer">
                <div className="h-5 w-5 rounded-full border border-muted-foreground mr-3 flex items-center justify-center">
                  <span className="text-xs">C</span>
                </div>
                <p className="text-sm">To test the AI's understanding of documents</p>
              </div>
              
              <div className="flex items-center p-2 rounded-md hover:bg-secondary/50 cursor-pointer">
                <div className="h-5 w-5 rounded-full border border-muted-foreground mr-3 flex items-center justify-center">
                  <span className="text-xs">D</span>
                </div>
                <p className="text-sm">To summarize documents as questions and answers</p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-3 rounded-md text-sm border-l-4 border-vyoma">
              <span className="font-medium">Explanation:</span> Vyoma's MCQ generator is designed to analyze uploaded documents and extract key information to create structured multiple-choice questions with four answer choices, correct answer marking, and optional explanations.
            </div>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <span>2 out of 10 questions generated • </span>
            <button className="text-vyoma underline">Generate more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCQGenerator;
