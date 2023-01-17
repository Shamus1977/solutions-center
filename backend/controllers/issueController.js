const asynchandler = require("express-async-handler");

const Issue = require("../models/issueModel");

//@desc Get a user's issues
//@route GET /api/issues
//@access Private
const getIssues = asynchandler(async (req, res) => {
    const tickets = await Issue.find({user: req.user.id});
    res.status(200).json(tickets);
});

//@desc Get a user's issue
//@route GET /api/issues/:id
//@access Private
const getIssue = asynchandler(async (req, res) => {
    const issue = await Issue.findById(req.params.id);
    if(!issue){
        res.status(404);
        throw new Error("Issue not found.");
    };
    if(issue.user.toString() !== req.user.id){
        res.status(401);
        throw new Error("Issue is not available to this user.");
    };
    res.status(200).json(issue)
});

//@desc Create a new issue
//@route POST /api/issues/
//@access Private
const createIssue = asynchandler(async (req, res) => {
    const {language, issueDescription, solutionDescription} =req.body;
    if(!language || !issueDescription || !solutionDescription){
        res.status(400);
        throw new Error("Please fill out all fields of form.");
    };
    const issue = await Issue.create({
        language,
        issueDescription,
        solutionDescription,
        user: req.user.id,
    });
    res.status(201).json(issue);
});

//@desc Delete an issue
//@route Delete /api/issues/:id
//@access Private
const deleteIssue = asynchandler(async (req, res) => {
    const issue = await Issue.findById(req.params.id);
    if(!issue){
        res.status(404);
        throw new Error("Issue not found.");
    };
    if(issue.user.toString() !== req.user.id){
        res.status(401);
        throw new Error("This user is not authorized to delete this issue.");
    };
    await issue.remove();
    res.status(200).json({success: true});
});

//@desc Update an issue
//@route Put /api/issues/:id
//@access Private
const updateIssue = asynchandler(async (req, res) => {
    const issue = await Issue.findById(req.params.id);
    if(!issue){
        res.status(404);
        throw new Error("Issue not found.");
    };
    if(issue.user.toString() !== req.user.id){
        res.status(401);
        throw new Error("This user is not authorized to update this issue.");
    };
    const updatedIssue = await Issue.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedIssue);
});

module.exports = {
    getIssues,
    getIssue,
    createIssue,
    deleteIssue,
    updateIssue
};