const ejs = require("ejs");
const fs = require("fs");
const path = require("path")
const util = require('util')

const MODE_0666 = parseInt('0666', 8)

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
    console.log('   \x1b[36mcreate\x1b[0m : ' + file)
}

exports.generateFile = (name, template, folder) => {
    const file = loadTemplate(template)

    file.locals.name = name

    file.locals.nameCap = file.locals.name.charAt(0).toUpperCase() + file.locals.name.slice(1)

    write(path.join(`./${folder}/${file.locals.name}.js`), file.render())
}