import React from 'react'
import Navbar from '/components/Navbar'
import Footer from '@/components/Footer'


export default function page() {
  return (
        <>
        <Navbar/>
        <div class="container mx-auto py-8">
    <h1 class="text-neutral-200 text-4xl font-bold mb-4">About Our CodeEditor/IDE</h1>

    <div class="mb-6">
      <h2 class="text-2xl font-bold mb-2 text-neutral-300">How it Works</h2>
      <p class="text-neutral-400">Our CodeEditor/IDE leverages the capabilities of ChatGPT, a state-of-the-art language model developed by OpenAI. ChatGPT is trained on a vast amount of text data, making it adept at understanding and generating human-like text.</p>
    </div>

    <div class="mb-6">
      <h2 class="text-2xl font-bold mb-2 text-neutral-200">Benefits</h2>
      <ul class="list-disc pl-6">
        <li class="text-neutral-400">Improved Efficiency: Save time and effort by receiving instant code suggestions and solutions directly within the editor. Reduce the need for manual searching and debugging.</li>
        <li class="text-neutral-400">Enhanced Learning: Learn new programming concepts and best practices by exploring the explanations and insights provided by ChatGPT. Deepen your understanding of code and programming principles.</li>
        <li class="text-neutral-400">Error Prevention: Catch potential errors and bugs early on, thanks to ChatGPT's ability to detect common coding mistakes and offer suggestions for improvement.</li>
        <li class="text-neutral-400">Code Exploration: Experiment with different coding approaches and see the results in real-time. Use ChatGPT's suggestions to explore alternative solutions and expand your coding skills.</li>
      </ul>
    </div>

    <div class="mb-6">
      <h2 class="text-2xl font-bold mb-2 text-neutral-200">Privacy and Security</h2>
      <p class="text-neutral-400">We understand the importance of privacy and security when working with code. Rest assured that your code is treated with the utmost confidentiality. The code you enter in our CodeEditor/IDE is only sent to the ChatGPT API for analysis and suggestions. We do not store or share your code with any third parties.</p>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-2 text-neutral-200">Get Started</h2>
      <p class="text-neutral-400">To get started, simply navigate to our CodeEditor/IDE and begin writing your code. You can expect to receive intelligent suggestions and assistance from ChatGPT as you work on your projects. Don't hesitate to experiment, ask questions, and explore the capabilities of our CodeEditor/IDE.</p>
    </div>
  </div>
        <Footer/>
        </>
        
  )
}
