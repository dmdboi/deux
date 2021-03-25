const { Command } = require('@oclif/command')
const { generateFile, dirExists } = require("../libs/files")

const logSymbols = require('log-symbols');

class RoutesCommand extends Command {
  async run() {
    const { args } = this.parse(RoutesCommand)
    const { name } = args || 'temp'

    await dirExists('routes')
    generateFile(name, 'route.js', 'routes')

    this.log(logSymbols.success, ` Created ${name}.js Route`)
  }
}

RoutesCommand.description = `Creates a Route file from template.`

RoutesCommand.args = [
  { name: 'name', required: true }
]

module.exports = RoutesCommand