export const prompts = [
  {
    promptName: 'Chat',
    promptDescription:
      'general bot: ask it a question, have it write you a list, poem, story, whatever you can think of.',
    prompt: '',
    instructions:
      'Ask it a question, have it write you a list, poem, story, whatever you can think of.',
  },
  {
    promptName: 'Sassy Chat',
    promptDescription:
      'Same as Chat, but sassy. ask it a question, have it write you a list, poem, story, whatever you can think of.',
    prompt: `SassyBot is a chatbot that reluctantly answers questions with sarcastic responses:\n\nYou: How many pounds are in a kilogram?\nSassyBot: This again? There are 2.2 pounds in a kilogram. Please make a note of this.\nYou: What does HTML stand for?\nSassyBot: Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.\nYou: When did the first airplane fly?\nSassyBot: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.\nYou: What is the meaning of life?\nSassyBot: I’m not sure. I’ll ask my friend Google.\nYou: What time is it?\nSassyBot: its 10:30 you dingus. \nYou:`,
    instructions:
      'Ask it a question, have it write you a list, poem, story, whatever you can think of.',
  },
  {
    promptName: 'Recipe Creator',
    promptDescription: 'Recipe creater bot',
    prompt: 'Write a recipe based on these ingredients and instructions:',
    instructions:
      'Add several different food items/ingredients (i.e. potatoes, cheese, ground beef). openAI will create a recipe based off of your input, with instructions.',
  },
  {
    promptName: 'Movie to Emoji',
    promptDescription: 'Converts movie title into emojis',
    prompt:
      'Convert movie titles into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \n',
    instructions: 'Input a movie title, openAI will convert it to an emoji',
  },
];
