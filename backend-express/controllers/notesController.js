const asyncHandler = require('express-async-handler');
const { db } = require('../config/firebase');


// @desc    get all the notes
// @route   GET /api/notes
// @access  Public
const getNotes = asyncHandler(async (req, res) => {

    try {
        let notes = [];

        const querySnapshotHomeContent = await db.collection('notes').orderBy('title').get();

        if (querySnapshotHomeContent) {
            querySnapshotHomeContent.forEach((doc) => {
                notes = [...notes, { id: doc.id, ...doc.data() }];
            });
        }

        res.status(200).json({
            body: notes,
        });

    } catch (error) {

        res.status(500).json({ message: error });

    }

});

// @desc    get all the notes
// @route   POST /api/notes
// @access  Public
const createOneNote = asyncHandler(async (req, res) => {

    try {
        const note = req.body;

        if (note) {

            await db.collection('notes').doc().set({
                title: note.title,
                body: note.body,
                date: note.date,
                category: note.category
            });

        } else {
            res.status(400).json({message: 'error missing note to create'});
            return;
        }

        res.status(200).json({
            message: 'note created',
        });

    } catch (error) {

        res.status(500).json({ message: error });

    }

});


// @desc    get all the notes
// @route   GET /api/notes/:id
// @access  Public
const getOneNote = asyncHandler(async (req, res) => {

    try {

        const id = req.params.id;

        const doc = await db.collection('notes').doc(id).get();

        if (doc.exists) {
            res.status(200).json({
                message: 'fetch ok',
                note: {
                    title: doc.data().title,
                    body: doc.data().body,
                    date: doc.data().date,
                    category: doc.data().category,
                }
            });
        } else {
            res.status(404).json({message: 'note not found'})
        }

    } catch (error) {

        res.status(500).json({ message: error });

    }

});

// @desc    update one note
// @route   PUT /api/notes/:id
// @access  Public
const updateOneNote = asyncHandler(async (req, res) => {

    try {

        const note = req.body;

        await db.collection('notes').doc(note.id).update({
            title: note.title,
            body: note.body,
            date: note.date,
            category: note.category
        });

        res.status(200).json({ message: 'note updated' });

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: error });

    }

});


// @desc    delete one note
// @route   DELETE /api/notes/:id
// @access  Public
const deleteOneNote = asyncHandler(async (req, res) => {

    try {

        const id = req.params.id;

        await db.collection('notes').doc(id).delete();

        res.status(200).json({ message: 'note deleted' });

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: error });

    }

});

module.exports = { getNotes, createOneNote, getOneNote, updateOneNote, deleteOneNote };