const asyncHandler = require('express-async-handler');
const { db } = require('../config/firebase');

// @desc    get all the content of home page
// @route   GET /api/homepage
// @access  Public
const getHomePageContent = asyncHandler(async (req, res) => {

    try {
        let homeContents = [];

        const querySnapshotHomeContent = await db.collection('homeContent').orderBy('name').get();

        if (querySnapshotHomeContent) {
            querySnapshotHomeContent.forEach((doc) => {
                homeContents = [...homeContents, { id: doc.id, ...doc.data() }];
            });
        }

        let projects = [];
        const querySnapshotProjects = await db.collection('projets').orderBy('name').get();

        if (querySnapshotProjects) {
            querySnapshotProjects.forEach((doc) => {
                projects = [...projects, { id: doc.id, ...doc.data() }];
            });
        }

        res.status(200).json({
            introduction: "hey this is me",
            projects: projects,
            homeContents: homeContents
        });

    } catch (error) {

        res.status(500).json({ message: error });

    }

});

module.exports = { getHomePageContent };