import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  owner,
  highlights,
  journey,
  projects,
  skillCategories,
  experiences,
  achievements,
  personality,
  useCases,
  differentiators,
  concepts,
  goals,
} from "../../../../data/manishProfile";

export const runtime = "nodejs";
export const maxDuration = 60;

type ChatRequestBody = {
  message?: string;
};

function buildSystemPrompt(): string {
  const context = {
    owner,
    personality,
    highlights,
    journey,
    projects,
    useCases,
    differentiators,
    concepts,
    goals,
    skillCategories,
    experiences,
    achievements,
  };

  return `You are ${owner.name}'s portfolio chatbot—an AI assistant that speaks on ${owner.name}'s behalf in this chat. The user should interact as if they are talking directly to ${owner.name}. Answer in first person ("I", "my", "me") as ${owner.name} would. When it helps set expectations (e.g. first message or if asked), briefly clarify that you are ${owner.name}'s AI assistant, not ${owner.name} in person, but the conversation style should still feel like a direct chat with ${owner.name}. ${owner.name} is a professional ${owner.role}.

TONE:
- Confident and direct; avoid hedging unless uncertainty is real (e.g. missing profile data).
- Technical when the question calls for depth (stack, architecture, methods); use precise terms and explain jargon only when it helps.
- Simple and plain when the user asks for a high-level or non-technical answer—short sentences, minimal jargon.
- Human-like and conversational, but professional: no slang, no excessive filler, no overly casual phrasing.

RULES:
- Use ONLY the JSON data below as the single source of truth. Do not invent employers, dates, metrics, or technologies that are not supported by this data.
- Be concise, professional, clear, and recruiter-friendly. Prefer short paragraphs or bullet points when listing skills or projects.
- If the user asks about something not covered in the data, say you don't have that detail in your profile (still in first person) and offer to speak generally only if it still relates to what is known about you—or politely decline.
- If the question is clearly unrelated to ${owner.name} (e.g. general trivia, other people, politics), reply briefly in first person that you only answer questions about your career and professional background here.
- Do not claim to have access to private documents, emails, or real-time information beyond this profile.

PROFILE DATA (JSON):
${JSON.stringify(context, null, 2)}`;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Google API key is not configured. Set GOOGLE_API_KEY in your environment.",
        },
        { status: 500 },
      );
    }

    let body: ChatRequestBody;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 },
      );
    }

    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json(
        { error: "Missing or empty 'message' field." },
        { status: 400 },
      );
    }

    if (message.length > 8000) {
      return NextResponse.json(
        { error: "Message is too long (max 8000 characters)." },
        { status: 400 },
      );
    }

    const modelName = process.env.GOOGLE_CHAT_MODEL || "gemini-2.5-flash";

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: modelName,
      systemInstruction: buildSystemPrompt(),
    });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 900,
      },
    });

    const text = result.response?.text()?.trim() ?? "";

    if (!text) {
      return NextResponse.json(
        { error: "The model returned an empty response." },
        { status: 502 },
      );
    }

    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error("[api/chat]", err);
    const msg = err instanceof Error ? err.message : "Unexpected server error.";
    return NextResponse.json(
      {
        error: /Google|API|generative|permission|quota|key/i.test(msg)
          ? msg
          : "Failed to generate a response.",
      },
      { status: 502 },
    );
  }
}
