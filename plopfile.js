module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?'
      },
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'directory',
        // Prompt to display on command line
        message: 'Where is your component directory name?'
      }
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.js.hbs'
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.module.scss.hbs'
      },
      {
        type: 'append',
        path: 'src/{{directory}}/index.js',
        pattern: '/* PLOP_INJECT */',
        template: 'export { default as {{pascalCase name}} } from \'./{{pascalCase name}}/{{pascalCase name}}\''
      }
    ]
  })
}
