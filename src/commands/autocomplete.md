# `autocomplete`

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [See Also](#see-also)
## Description

Configures shell autocomplete for BuildCLI commands. This feature enhances the user experience by allowing users to quickly access available commands and options without needing to remember them.


## Usage

```bash
buildcli autocomplete
```

## Options

| Option          | Description                                 |
|-----------------|---------------------------------------------|
| `-h, --help`    | Display help information about the command. |
| `-V, --version` | Display the version of the command.         |

## Examples

### Example 1: Configure Autocomplete

To configure autocomplete for supported shells, simply run:

```bash
buildcli autocomplete
```


### Example 2: Check Autocomplete
After running the configuration command, you can test it by typing `buildcli` followed by a space and then pressing the Tab key to see the available commands.

### Troubleshooting
If autocomplete does not work as expected:

* Ensure that your shell configuration file `(e.g., .bashrc, .zshrc)` has been updated correctly.
* Restart your terminal or source your configuration file again.
* Verify that BuildCLI is correctly installed and accessible in your system’s PATH. For installation instructions, see the [installation](../installation.md) section.
## See Also

- [project](project.md)
- [about](about.md)