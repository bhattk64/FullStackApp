const postModel = require("../models/postModel");

const createPostController = async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        //validate
        if (!title) return res.status(400).json({ message: 'Title is required' });
        if (!content) return res.status(400).json({ message: 'Content is required' });
        if (!userId) return res.status(400).json({ message: 'User is required' });
        const post = (await postModel.create({ title, content, postedBy: req.user._id })).save();
        res.status(201).send({ status: 'success', post });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { createPostController };