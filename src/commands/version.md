# `version`

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [See Also](#see-also)

## Description

Displays the current version of BuildCLI. This command is useful for users to verify the installed version of the tool, ensuring compatibility with scripts and features.

## Options

| Option          | Description                                 |
|-----------------|---------------------------------------------|
| `-h, --help`    | Display help information about the command. |
| `-V, --version` | Display the version of the command.         |



### Examples
### Example 1: Display Current Version
To display the current version of BuildCLI, run:

```bash
buildcli version
```
### Example 2: Display Verbose Version Information
To get more detailed information about the BuildCLI version, use the verbose option:
```bash
buildcli version -V
```

### Troubleshooting
If the version command does not return the expected output:

* Ensure that BuildCLI is correctly installed and accessible in your system’s PATH.
* Check for any updates or issues reported in the [GitHub repository](https://github.com/BuildCLI/website) for BuildCLI.


## See Also

- [project](project.md)
- [autocomplete](autocomplete.md)
- [about](about.md)