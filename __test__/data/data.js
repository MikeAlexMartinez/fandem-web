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
      __typename: "UserRole",
      name: "USER"
    }
  ],
  followers: {
    __typename: "UserFollower",
    followers: []
  },
  country: null,
  profilePicture: [],
  influencers: {
    __typename: "UserInfluencer",
    influencers: []
  },
  countryCode: null,
  isPrivate: false,
  subscriptions: [
    {
      __typename: "Subscription",
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
