import React, { useState } from 'react';
import { diffChars } from 'diff';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const StringDiffViewer = () => {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [diff, setDiff] = useState([]);

  const calculateDiff = () => {
    const differences = diffChars(string1, string2);
    setDiff(differences);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-4">
        <Textarea
          placeholder="Paste first string here"
          value={string1}
          onChange={(e) => setString1(e.target.value)}
          className="min-h-[100px]"
        />
        <Textarea
          placeholder="Paste second string here"
          value={string2}
          onChange={(e) => setString2(e.target.value)}
          className="min-h-[100px]"
        />
        <Button onClick={calculateDiff}>Compare Strings</Button>
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg overflow-x-auto">
        {diff.map((part, index) => (
          <span
            key={index}
            className={`${
              part.added ? 'bg-green-200' : part.removed ? 'bg-red-200' : ''
            } ${part.value.includes(' ') ? 'whitespace-pre-wrap' : ''}`}
          >
            {part.value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StringDiffViewer;
