const { Command } = require('@oclif/command')
const { v4: uuidv4 } = require('uuid');
const clipboardy = require('clipboardy');

class UuidCommand extends Command {
  async run() {
    const uuid = uuidv4()
    clipboardy.writeSync(uuid);
    return this.log(`Copied to clipboard :: ${uuid}`)
  }
}

UuidCommand.description = `Copies a random v4 UUID to clipboard`

module.exports = UuidCommand
