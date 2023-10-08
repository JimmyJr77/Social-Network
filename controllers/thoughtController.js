const { Thought, User } = require('../models');


const thoughtController = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => res.status(400).json(err));
  },

  // Get one thought by id
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
      
      // After creating a thought, link it to the user
      await User.findOneAndUpdate(
        { username: dbThoughtData.username },
        { $push: { thoughts: dbThoughtData._id } },
        { new: true }
      );
  
      res.json(dbThoughtData);
    } catch (err) {
      console.error(err); // Log the error to console for debugging
      res.status(400).json(err);
    }
  },
  
  
  // Update a thought by id
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

  // Delete a thought
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

  // Add a reaction to a thought
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

  // Remove a reaction from a thought
  removeReaction({ params }, res) {
    Thought.findByIdAndUpdate(
      params.thoughtId,
      { $pull: { reactions: { _id: params.reactionId } } },
      { new: true }
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


};

module.exports = thoughtController;