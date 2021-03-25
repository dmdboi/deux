const { Command } = require('@oclif/command')
const fs = require("fs");
const clone = require("git-clone")
const logSymbols = require('log-symbols');

class TemplateCommand extends Command {
  async run() {
    const { args } = this.parse(TemplateCommand)
    const { name, dir } = args

    // git-clone does not clone if directory is not empty. 
    // TODO: Find a git-clone replacement
    if(dir === '.' &&  fs.readdirSync(dir).length > 0) {
      this.error("Current directory is not empty, exiting.", { code: 0 })
    }

    if(dir !== "." && !fs.existsSync(dir)) {
      this.log(`Creating new folder - ${dir}`)
      fs.mkdirSync(dir)
    }

    clone(`https://github.com/${name}`, dir)

    this.log(logSymbols.success, `Cloning ${name} into ${dir}`)
  }
}

TemplateCommand.description = `Clones an existing Express app repository.`

TemplateCommand.args = [
  { name: 'name', required: true },
  { name: 'dir', required: true }
]

module.exports = TemplateCommand
