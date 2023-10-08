const { Thought, User } = require('../models');
const mongoose = require('mongoose');


const thoughtController = {
  // Gets all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => res.status(400).json(err));
  },

  // Gets one thought by id
  getThoughtById({ params }, res) {
    Thought.findById(params.id)
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.status(400).json(err));
  },

  async createThought({ body }, res) {
    try {
      const dbThoughtData = await Thought.create(body);
      
      // After creating a thought, this links it to the user
      await User.findOneAndUpdate(
        { username: dbThoughtData.username },
        { $push: { thoughts: dbThoughtData._id } },
        { new: true }
      );
  
      res.json(dbThoughtData);
    } catch (err) {
      console.error(err); // Logs the error to console for debugging
      res.status(400).json(err);
    }
  },
  
  
  // Updates a thought by id
  updateThought({ params, body }, res) {
    Thought.findByIdAndUpdate(params.id, body, { new: true, runValidators: true })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.status(400).json(err));
  },

  // Deletes a thought
  deleteThought({ params }, res) {
    Thought.findByIdAndDelete(params.id)
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.status(400).json(err));
  },

  // Adds a reaction to a thought
  addReaction({ params, body }, res) {
    Thought.findByIdAndUpdate(
      params.thoughtId,
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
  },

  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { "_id": params.thoughtId, "reactions.reactionId": params.reactionId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id or reaction does not exist!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
  },


};

module.exports = thoughtController;