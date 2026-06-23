export const buildPrompt = (idea, tone) => {
  return `
You are an expert creative storyteller.

Turn the idea below into a complete story.

Requirements:
- Tone: ${tone}
- Include:
  1. Title
  2. Characters
  3. Setting
  4. Plot (beginning, middle, end)
  5. Dialogue (at least 2 lines)
  6. Ending

Idea:
${idea}

Make it vivid, engaging, and imaginative.
`;
};
``
