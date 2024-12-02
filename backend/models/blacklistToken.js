const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true, // Ensure tokens are unique
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400, // TTL index: 24 hours (86400 seconds)
    },
});

// Create the model
const BlacklistToken = mongoose.model('BlacklistToken', blacklistTokenSchema);

module.exports = BlacklistToken;
