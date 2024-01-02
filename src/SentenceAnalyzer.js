
import React, { useState } from 'react';
import './SentenceAnalyzer.css'; 

function SentenceAnalyzer() {
  const [sentence, setSentence] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [wordFrequency, setWordFrequency] = useState({});
  const [sentenceType, setSentenceType] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  const analyzeSentence = () => {
    // Word Count
    const words = sentence.split(/\s+/);
    setWordCount(words.length);

    // Character Count
    setCharCount(sentence.length);

    // Word Frequency
    const frequency = {};
    words.forEach((word) => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
    setWordFrequency(frequency);

    // Sentence Type
    const sentenceEnding = sentence.trim().slice(-1);
    switch (sentenceEnding) {
      case '.':
        setSentenceType('Declarative');
        break;
      case '?':
        setSentenceType('Interrogative');
        break;
      case '!':
        setSentenceType('Exclamatory');
        break;
      default:
        setSentenceType('Imperative');
        break;
    }

    // Palindrome Check
    const cleanedSentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedSentence = cleanedSentence.split('').reverse().join('');
    setIsPalindrome(cleanedSentence === reversedSentence);
  };

  return (
    <div className="SentenceAnalyzer"> {/* Apply a class for styling */}
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter a sentence..."
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      ></textarea>
      <br />
      <button onClick={analyzeSentence}>Analyze</button>
  
      <div>
        <h2>Analysis Results</h2>
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {charCount}</p>
        <div>
          <h3>Word Frequency</h3>
          <ul>
            {Object.entries(wordFrequency).map(([word, count]) => (
              <li key={word}>
                {word}: {count}
              </li>
            ))}
          </ul>
        </div>
        <p>Sentence Type: {sentenceType}</p>
        <p>Is Palindrome: {isPalindrome ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
  
}

export default SentenceAnalyzer;
