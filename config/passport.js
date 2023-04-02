const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../models");

passport.serializeUser((user, done) => {
  console.log("Serializing user:", user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log("Deserializing user with id:", id);
  try {
    const user = await User.findByPk(id);
    console.log("Deserializing user:", user);
    done(null, user);
  } catch (error) {
    console.log("Error deserializing user", error);
    done(error, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://mechanomicon.herokuapp.com/auth/google/callback",

      //testing strategy
      // callbackURL: "http://localhost:3001/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("Google Strategy called");
      try {
        const existingUser = await User.findOne({
          where: { google_id: profile.id },
        });

        if (existingUser) {
          console.log("Existing user found:", existingUser);
          done(null, existingUser);
        } else {
          const newUser = await User.create({
            google_id: profile.id,
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
            email: profile.emails[0].value,
          });

          console.log("New user created:", newUser);
          done(null, newUser);
        }
      } catch (error) {
        console.log("Passport error:", error);
        done(error, null);
      }
    }
  )
);
