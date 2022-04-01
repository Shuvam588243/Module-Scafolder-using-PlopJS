module.exports = (plop) => {
  plop.setGenerator("model", {
    description: "Generate a Model",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter the Name of the Model",
      },
    ],
    actions: [
      {
        type: "add",
        path: "models/{{name}}.js",
        templateFile: "templates/model_template.hbs",
      },
      {
        type: "add",
        path: "controllers/{{ camelCase name}}Controller.js",
        templateFile: "templates/controller_template.hbs",
      },
      {
        type: "add",
        path: "routers/{{camelCase name}}Router.js",
        templateFile: "templates/router_template.hbs",
      },
    ],
  });
};
