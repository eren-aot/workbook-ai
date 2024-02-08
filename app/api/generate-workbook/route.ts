
import { NextResponse } from "next/server";
import OpenAI from "openai";


export async function POST(req: Request) {

    try {
        const body = await req.json();
        const { prompt, language, topics, levels } = body;

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        })

        if (!language) {
            return NextResponse.json({ message: "Language is Required!!!!" }, { status: 300 });
        }
        if (!topics) {
            return NextResponse.json({ message: "Topics is Required!!!!" }, { status: 300 });
        }
        if (!levels) {
            return NextResponse.json({ message: "Levels is Required!!!!" }, { status: 300 });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful assitant who create complete language workbook with 20 questions and answers with JSON output.Questions should be in english and answers should be in the language provided" },
                { role: "user", content: `I want to practice ${language}.My level of proficiency is ${levels}.Workbook should be related to ${topics.topic1}, ${topics.topic2} and ${topics.topic3}` }
            ]
        })

        console.log(completion.choices[0]);

        return NextResponse.json({ completion }, { status: 200 });

    } catch (error) {
        console.log("ERROR IN GENERATING WORKBOOKS", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}