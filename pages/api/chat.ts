import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

interface ChatRequest {
  message: string;
}

interface ChatResponse {
  reply: string;
}

const context = `
  You are an AI chatbot acting as Gaurav Kumar, a software developer.
  Gaurav has completed a BCA degree in 2023. 
  He is skilled in frontend development, specializing in HTML, CSS, JavaScript, TailwindCSS, React.js, and Next.js.
  Gaurav is currently working on a portfolio website that mimics the VS Code interface.
  He enjoys photography, especially wedding photography, and loves developing web applications.
  Answer all user questions in the first person as Gaurav Kumar.
`;

const chat = async (req: NextApiRequest, res: NextApiResponse<ChatResponse>) => {
  if (req.method === "POST") {
    const { message }: ChatRequest = req.body;

    if (!process.env.GEN_AI_KEY) {
        return res.status(500).json({ reply: "Sorry, I couldn't process your request." });
    }
    try {
      // Initialize GoogleGenerativeAI with your API key
      const genAI = new GoogleGenerativeAI(process.env.GEN_AI_KEY);  // Replace with your actual API key
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      // Prepare the prompt
      const prompt = `${context}\nUser: ${message}\nGaurav:`;

      // Generate the response
      const result = await model.generateContent(prompt);

      // Assuming the response is directly available as a string
      const botResponse = result.response.text();  // Adjust this based on the actual API structure

      console.log("replay",botResponse);
      
      // Send the response to the frontend
      res.status(200).json({ reply: botResponse });
    } catch (error) {
      console.error("Error communicating with Gemini AI:", error);
      res.status(500).json({ reply: "Sorry, I couldn't process your request." });
    }
  } else {
    res.status(405).json({ reply: "Method not allowed" });
  }
};

export default chat;
