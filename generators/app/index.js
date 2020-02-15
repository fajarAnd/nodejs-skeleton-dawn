'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the amazing ${chalk.red('generator-nodejs-skeleton-dawn')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'serviceApiName',
        message: "What's the service name?",
        default: 'new-service-api'
      },
      {
        type: 'input',
        name: 'serviceDescription',
        message: "What's the service description?",
        default: ''
      },
      {
        type: 'input',
        name: 'author',
        message: "author?",
        default: ''
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const props = this.props;
    const copy = this.fs.copy.bind(this.fs);
    const copyTpl = this.fs.copyTpl.bind(this.fs);
    const tPath = this.templatePath.bind(this);
    const dPath = this.destinationPath.bind(this);

    copyTpl(tPath('app'), dPath('app'), props);
    copyTpl(tPath('docs'), dPath('docs'), props);
    copyTpl(tPath('test'), dPath('test'), props);
    copy(tPath('.eslintrc.js'), dPath('.eslintrc.js'));
    copyTpl(tPath('.gitignore'), dPath('.gitignore'));
    copyTpl(tPath('.editorconfig'), dPath('.editorconfig'));
    copyTpl(tPath('config.js'), dPath('config.js'));
    copyTpl(tPath('config.template.json'), dPath('config.template.json'), props);
    copyTpl(tPath('_package.json'), dPath('package.json'), props);
    copyTpl(tPath('README.md'), dPath('README.md'), props);
    copyTpl(tPath('LICENSE'), dPath('LICENSE'), props);
  }

  // install() {
  //   this.installDependencies();
  // }
};
