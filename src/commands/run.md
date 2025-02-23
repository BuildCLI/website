# `run`

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [See Also](#see-also)

## Description

Handles the execution of projects within BuildCLI. This command allows users to run their Java applications directly from the command line, facilitating testing and development workflows.

## Usage
```bash
buildcli run [options]
```

## Options

| Option             | Description                                         |
|--------------------|-----------------------------------------------------|
| `-h, --help`       | Display help information about the command.         |
| `-V, --version`    | Display the version of the command.                 |
| `--profile <name>` | Specifies the profile to use during execution.      |
| `--debug`          | Skips running tests during the build process.       |
| `--port <number>	` | Specifies the port on which to run the application. |


### Examples
### Example 1: Run the Project
To run the project:
```bash
buildcli run
```
This command executes the main application.

### Example 2: Run with a Specific Profile
To run the project using a specific profile:
```bash
buildcli run --profile development
```
This command executes the application with the settings defined in the `development` profile.

### Example 3: Run in Debug Mode
To run the project in debug mode:
```bash
buildcli run --debug
```
This command starts the application with debugging enabled, allowing for step-by-step execution.

### Example 4: Run on a Specific Port
To run the project on a specific port:
```bash
buildcli run --port 8080
```
This command executes the application and binds it to port 8080.

### Troubleshooting
If you encounter issues while running the project:

* Ensure that the project has been built successfully before running.
* Check for any runtime errors in the console output.
* Refer to the help for the run command using `buildcli run --help` for more information.

### See Also
- [build](build.md)
- [test](test.md)
- [project](project.md)