const { openai } = require("./chatgpt");

const generateBlogPosts = async (blogContent) => {
    // Call OpenAI API to generate social media posts
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `Create engaging and formatted social media posts for Twitter, Facebook, and Instagram based on the following blog content. Include appropriate hashtags, mentions, and emojis:\nBlog Content: ${blogContent}\n\nTwitter Post:\nFacebook Post:\nInstagram Post:`
            }
        ],
        model: "gpt-3.5-turbo-16k",
    });
  
    // Extract generated social media posts
    const generatedText = completion.choices[0].message.content;
    const twitterMatch = generatedText.match(/Twitter Post:(.*?)(Facebook Post:|Instagram Post:|$)/s);
    const facebookMatch = generatedText.match(/Facebook Post:(.*?)(Twitter Post:|Instagram Post:|$)/s);
    const instagramMatch = generatedText.match(/Instagram Post:(.*?)(Twitter Post:|Facebook Post:|$)/s);
  
    // Check if all social media posts are generated successfully
    if (twitterMatch && facebookMatch && instagramMatch) {
        // Trim and remove quotes from generated posts
        const twitterPost = twitterMatch[1].trim().replace(/(^['"]|['"]$)/g, "");
        const facebookPost = facebookMatch[1].trim().replace(/(^['"]|['"]$)/g, "");
        const instagramPost = instagramMatch[1].trim().replace(/(^['"]|['"]$)/g, "");
  
      return {
        twitter: twitterPost,
        facebook: facebookPost,
        instagram: instagramPost
      };
    } else {
        throw new Error('Failed to parse the generated posts.');
    }
};

module.exports = generateBlogPosts;
