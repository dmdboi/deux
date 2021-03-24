triton
======

A generator for building better Express apps

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/triton.svg)](https://npmjs.org/package/triton)
[![Downloads/week](https://img.shields.io/npm/dw/triton.svg)](https://npmjs.org/package/triton)
[![License](https://img.shields.io/npm/l/triton.svg)](https://github.com/dmdboi/triton/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g triton
$ triton COMMAND
running command...
$ triton (-v|--version|version)
triton/0.1.2 win32-x64 node-v14.16.0
$ triton --help [COMMAND]
USAGE
  $ triton COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`triton hello`](#triton-hello)
* [`triton help [COMMAND]`](#triton-help-command)
* [`triton model`](#triton-model)
* [`triton template`](#triton-template)

## `triton hello`

Describe the command here

```
USAGE
  $ triton hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/dmdboi/triton/blob/v0.1.2/src/commands/hello.js)_

## `triton help [COMMAND]`

display help for triton

```
USAGE
  $ triton help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `triton model`

Creates a default Mongoose Model

```
USAGE
  $ triton model

OPTIONS
  -n, --name=name  Model name, must start with Capital.
  --nts            Creates Model without timestamps.
```

_See code: [src/commands/model.js](https://github.com/dmdboi/triton/blob/v0.1.2/src/commands/model.js)_

## `triton template`

Describe the command here

```
USAGE
  $ triton template @author/repository

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/template.js](https://github.com/dmdboi/triton/blob/v0.1.2/src/commands/template.js)_
<!-- commandsstop -->
