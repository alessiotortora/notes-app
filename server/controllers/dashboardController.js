exports.dashboard = async (req, res) => {
  const locals = {
    title: "dashboard",
    description: "hello world",
  };
  res.render("dashboard/index", { locals, layout: '../views/layouts/dashboard'});
};
