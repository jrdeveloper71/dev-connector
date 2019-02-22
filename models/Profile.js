var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Createa schema
var ProfileSchema = new Schema({
   user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
   },
   handle: {
      type: String,
      required: true,
      max: 40
   },
   company: {
      type: String
   },
   website: {
      type: String
   },
   location: {
      type: String
   },
   status: {
      type: String,
      required: true
   },
   skills: {
      type: [String],
      required: true
   },
   bio: {
      type: String
   },
   githubUsername: {
      type: String
   },
   experience: [{
      title: {
         type: String,
         required: true
      },
      company: {
         type: String,
         required: true
      },
      location: {
         type: String
      },
      from: {
         type: Date,
         required: true
      },
      to: {
         type: Date
      },
      current: {
         type: Boolean,
         default: false
      }
   }],
   education: [{
      school: {
         type: String,
         required: true
      },
      degree: {
         type: String,
         required: true
      },
      fieldofstudy: {
         type: String,
         required: true
      },
      from: {
         type: String,
         required: true
      },
      to: {
         type: String
      },
      current: {
         type: Boolean,
         default: false
      }
   }],
   social: {
      youtube: {type: String},
      twitter: {type: String},
      facebook: {type: String},
      likedin: {type: String},
      instagram: {type: String}
   },
   date: {
      type: Date,
      default: Date.now
   }

});
var Profile = mongoose.model('profiles', ProfileSchema);

module.exports = Profile;