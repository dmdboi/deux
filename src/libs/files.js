const ejs = require("ejs");
const fs = require("fs");
const path = require("path")
const util = require('util')
const symbols = require('log-symbols');

const MODE_0666 = parseInt('0666', 8)

// These functions are copied from Express' own generator CLI. (Thank you Express Team)
// TODO - Rewrite functions for originality purposes

function loadTemplate (name) {
    var contents = fs.readFileSync(path.join(__dirname, '../', 'templates', (name + '.ejs')), 'utf-8')
    var locals = Object.create(null)

    function render () {
        return ejs.render(contents, locals, {
        escape: util.inspect
        })
    }

    return {
        locals: locals,
        render: render
    }
}

function write (file, str, mode) {
    fs.writeFileSync(file, str, { mode: mode || MODE_0666 })
}

exports.generateFile = (name, template, folder) => {
    const file = loadTemplate(template)
    file.locals.name = name

    // Capitalises the name, Im sure I can change this.
    file.locals.nameCap = file.locals.name.charAt(0).toUpperCase() + file.locals.name.slice(1)

    // Writes the finished file to file.
    if(folder === 'models') {
        write(path.join(`./${folder}/${file.locals.nameCap}.js`), file.render())
    } else {
        write(path.join(`./${folder}/${file.locals.name}.js`), file.render())
    }

}

// Creates a directory if it does not already exist.
exports.dirExists = (dir) => {
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
}

exports.createDir