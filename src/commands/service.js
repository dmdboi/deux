const { Command } = require('@oclif/command')
const { generateFile, dirExists } = require("../libs/files")

const logSymbols = require('log-symbols');

class ServiceCommand extends Command {
  async run() {
    const { args } = this.parse(ServiceCommand)
    const { name } = args || 'temp'

    await dirExists('services')
    generateFile(name, 'service.js', 'services')

    this.log(logSymbols.success, ` Created ${name}.js Service`)
  }
}

ServiceCommand.description = `Creates a Service file from template.`

ServiceCommand.args = [
  { name: 'name', required: true }
]

module.exports = ServiceCommand
