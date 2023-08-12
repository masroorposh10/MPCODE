"use client"
import React from 'react';
import './CodeEditor.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
//import { PythonConsole } from 'pyodide'

const CodeEditor = () => {
  // all backend code:
  const [savedCode, setSavedCode] = useState('')
  //get function
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/');
        const jsonData = await response.json();
        setSavedCode(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // post 
  const [fileName,setFileName] = useState('');
  const [text, setText] = useState('');
  const handleSubmit = async (e) => {

    setText(document.querySelector('.code-area').textContent);
    

    try {
      const response = await fetch('http://localhost:8000/add/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Response from the server
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    // handleSubmit()
  };
  const saverCode = async (e) => {
    handleSubmit();
  }






  //gpt integration
  const [output, setOutput] = useState('');
  async function getGPTResponse(text) {
    console.log(output)
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: text,
        max_tokens: 15,
        temperature: 0.2,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
      });

      return response.data.choices[0].text;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleRunCode = async () => {
    window.alert("GPT TOKENs WHICH ARE USED TO RUN THE PROGRAM ARE FINISHED \nCONTACT THE OWNER MPCODE");
    const code = "write the output for this line of code: \n" + document.querySelector('.code-area').textContent;
    console.log(code)
    const response = await getGPTResponse(code);
    setOutput(`${response}`);
  }
  const handleOptimizeCode = async () => {
    const code = "optimize this line of code: \n" + document.querySelector('.code-area').textContent;
    const response = await getGPTResponse(code);
    setOutput(`${response}`);
  }
  const handleExplainCode = async () => {
    const code = "Explain what this line of code does: \n" + document.querySelector('.code-area').textContent;
    const response = await getGPTResponse(code);
    setOutput(`${response}`);
  }

  // interpreter...



  //color changer
  const [bgColor, setBgColor] = useState('white');
  const [color, setColor] = useState('black');

  const handleColorClick = () => {
    setBgColor(bgColor === 'white' ? 'black' : 'white');
    setColor(color === 'black' ? 'white' : 'black')
  };
  return (
    <>
      <nav className="p-4 flex justify-between items-center border border-gray-800" style={{ backgroundColor: bgColor, color: color }}>
        <button onClick={handleColorClick} className=" text-lg font-bold" >
          ◑
        </button>
        <h1 className='text-cyan-700 text-4xl'>MPCode</h1>
        <div className="flex items-center">
          <input className="border border-gray-300 rounded-lg px-3 py-2 mr-2 pr-10" style={{ backgroundColor: bgColor, color: color }} type="text" placeholder="File name" ></input>
          <select className="border border-gray-300 rounded-lg px-3 py-2 mr-12 cursor-not-allowed" style={{ backgroundColor: bgColor, color: color }} disabled title='Coming soon'>
            <option value="option1">python</option>
            <option value="option2">java</option>
            <option value="option3">javascript</option>
            <option value="option4">C++</option>
            <option value="option5">C#</option>
            <option value="option6">C</option>
            <option value="option7">Ruby</option>
          </select>
          <button onClick={saverCode} className="text-black text-lg font-bold hover:bg-lime-900 hover:text-white rounded-md" style={{ backgroundColor: bgColor, color: color }} >
            Save
          </button>
          <Link href="/" className=" text-2xl ml-4 text-red-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
            EXIT
          </Link>
        </div>
      </nav>
      <div className="code-editor" style={{ backgroundColor: bgColor, color: color }} >
        <div className="line-numbers">
          {Array.from({ length: 21 }, (_, i) => (
            <span key={i + 1}>{i + 1}</span>
          ))}
        </div>
        <div style={{ backgroundColor: bgColor, color: color }} className="code-area" contentEditable="true" spellCheck="flase">{savedCode.Code}</div>
      </div>
      {/* <div className="code-editor" style={{ backgroundColor: bgColor, color: color }} >
      <textarea class="w-full h-screen resize-none border-0 font-mono text-base p-4" style={{ backgroundColor: bgColor, color: color }}></textarea>
      </div> */}
      <div className="flex" style={{ backgroundColor: bgColor, color: color }} >
        <button onClick={handleRunCode} className="bg-gray-800 text-white py-2 px-4 rounded-l-md">Run</button>
        <button onClick={handleOptimizeCode} className="bg-green-400 text-white py-2 px-4">Optimize</button>
        <button onClick={handleExplainCode} className="bg-purple-400 text-white py-2 px-4 rounded-r-md">Explain</button>
      </div>
      <pre className="output-area" style={{ backgroundColor: bgColor, color: color }}  >{output}</pre>
    </>
  );
};

export default CodeEditor;
