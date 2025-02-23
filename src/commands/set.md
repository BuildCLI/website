# `set`

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [See Also](#see-also)
## Description

Handles the configuration settings of projects within BuildCLI. This command allows users to set various properties and parameters of their projects, ensuring that they are tailored to specific requirements.

## Usage
```bash
buildcli set [options]
```

### Options

| Option              | Description                                         |
|---------------------|-----------------------------------------------------|
| `-h, --help`        | Display help information about the command.         |
| `-V, --version`     | Display the version of the command.                 |
| `--property <name>` | Specifies the property to set.                      |
| `--value <value>`   | Specifies the value for the property.               |
| `--reset`           | Resets the specified property to its default value. |

### Examples
### Example 1: Set a Project Property
To set a property for the project:

```bash
buildcli set --property version --value 1.0.0
```
This command sets the project version to `1.0.0`.

### Example 2: Reset a Project Property
To reset a specific property to its default value:

```bash
buildcli set --property version --reset
```
This command resets the project version property to its default value.

### Example 3: Set Multiple Properties
To set multiple properties at once:
```bash
buildcli set --property name --value MyProject --property description --value "This is my project"
```
This command sets the project name and description simultaneously.

### Troubleshooting
If you encounter issues while setting project properties:

* Ensure that the property name is valid and recognized by the project configuration.
* Check for any errors in the command output for guidance on what went wrong.
* Refer to the help for the set command using `buildcli set --help` for more information

### See Also
- [build](build.md)
- [run](run.md)
- [project](project.md)