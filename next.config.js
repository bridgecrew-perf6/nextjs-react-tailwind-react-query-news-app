const withImages = require("next-images");
// image loader
module.exports = withImages();
module.exports = withImages({
  // redirect from root to default page ('/top-headlines')
  async redirects() {
    return [
      {
        source: "/",
        destination: "/top-headlines",
        permanent: true,
      },
    ];
  },
});
