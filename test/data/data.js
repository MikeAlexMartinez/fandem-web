const casual = require("casual");

casual.seed(777);

const fakeUser = () => ({
  __typename: "User",
  id: casual.uuid,
  displayName: casual.word,
  name: casual.full_name,
  phoneNumber: casual.phone,
  email: casual.email,
  userRoles: [
    {
      name: "USER"
    }
  ],
  followers: {
    followers: []
  },
  country: null,
  profilePicture: [],
  influencers: {
    influencers: []
  },
  countryCode: null,
  isPrivate: false,
  subscriptions: [
    {
      name: "FREE"
    }
  ],
  emailValidated: false,
  favoriteTeam: null
});

const fakeFavoriteTeam = () => ({
  name: "Spurs",
  shortName: "TOT"
});

export { fakeUser, fakeFavoriteTeam };
