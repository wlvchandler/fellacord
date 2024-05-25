import OpenAI from "openai";

import fs from 'fs';

const API_KEY = fs.readFileSync('discord.key', 'utf-8').trim();
const main_prompt = fs.readFileSync('main.prompt', 'ascii').trim();
const tests_prompt = fs.readFileSync('tests.prompt', 'ascii').trim();

const openai = new OpenAI({ apiKey: API_KEY });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
	    { role: "assistant", content: main_prompt },
	    { role: "assistant", content: tests_prompt },
    ],
    model: "gpt-4o-2024-05-13",
  });

  console.log(completion.choices[0].message.content);
}

main();
