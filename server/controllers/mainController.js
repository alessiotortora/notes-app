// Get
exports.homepage = async (req, res) => {
  const locals = {
    title: "notes",
    description: "hello world",
  };
  res.render("index", { locals, layout: "../views/layouts/front-page" });
};

// Get About
exports.about = async (req, res) => {
  const locals = {
    title: "about",
    description: "hello world",
  };
  res.render("about", { locals });
};
