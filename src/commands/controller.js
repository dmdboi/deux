const { Command } = require('@oclif/command')
const { generateFile, dirExists } = require("../libs/files")

const logSymbols = require('log-symbols');

class ControllerCommand extends Command {
  async run() {
    const { args } = this.parse(ControllerCommand)
    const { name } = args || 'temp'

    await dirExists('controllers')
    generateFile(name, 'controller.js', 'controllers')

    this.log(logSymbols.success, ` Created ${name}.js Controller`)
  }
}

ControllerCommand.description = `Creates a Controller file from template.`

ControllerCommand.args = [
  { name: 'name', required: true }
]

module.exports = ControllerCommand
