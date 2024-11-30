const mongoose = require('mongoose');

const userDetailsSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true ,unique:true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    bio: { type: String, default: '' },
    interests: { type: [String], default: [] } // Array of interests
});

module.exports = mongoose.model('UserDetails', userDetailsSchema);
