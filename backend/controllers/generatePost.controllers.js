const ErrorResponse = require('../utils/errorResponse');
const generateBlogPosts = require('../utils/generatePost');


exports.createBlogPosts = async (req, res, next) => {
  try {
    const { blogContent } = req.body;

    if (!blogContent || blogContent.trim() === '') {
      res.status(400).json({
        data: {},
        message:'Please enter something to search...',
        success: false
      });
    }

    // Generate social media posts
    const socialMediaPosts = await generateBlogPosts(blogContent);

    res.status(200).json({
      data: socialMediaPosts,
      message:'Successflly generated posts',
      success: true
    });

  } catch (err) {
      // Handle errors
      return next(new ErrorResponse(err.message || 'Internal Server Error', 400));
  }
};