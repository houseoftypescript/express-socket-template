const typeDefs = `#graphql
  extend type Query {
    trends: [Trend]
  }

  type Trend {
    country: String
    region: String
    subregion: String
    trends: [String]
  }
`;

export default typeDefs;
