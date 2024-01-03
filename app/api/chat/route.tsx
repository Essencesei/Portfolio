import { openai } from "@/lib/openai/openai";
import { StreamingTextResponse, OpenAIStream } from "ai";

export const POST = async (req: Request) => {
  const { messages } = await req.json();

  const messagesTrunc = messages.slice(-6);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: `You are an intelligent assistant created by Jonathan Dumlao, You will greet the user of chat and introduce yourself that jonathan dumlao created you. you will ONLY answer questions about him and his projects. summarize answer make it short accurate and presice. You will only answer questions based on this data ${process.env.DATA_ABOUT_ME}, IMPORTANT:avoid answering questions that are not related to this data.`,
      },
      ...messagesTrunc,
    ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
};
