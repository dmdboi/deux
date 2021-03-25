const { Command } = require('@oclif/command')
const { generateFile, dirExists } = require("../libs/files")

const logSymbols = require('log-symbols');

class ModelCommand extends Command {
  async run() {
    const { args } = this.parse(ModelCommand)
    const { name } = args || 'Temp'

    await dirExists('models')
    generateFile(name, 'model.js', 'models')

    this.log(logSymbols.success, ` Created ${name}.js Model`)
  }
}

ModelCommand.description = `Creates a Model file from template.`

ModelCommand.args = [
  { name: 'name', required: true }
]

module.exports = ModelCommand
