# `build`

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Options](#options)
- [Arguments](#arguments)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [See Also](#see-also)
## Description

Handles the building and compiling of projects within BuildCLI. This command allows users to compile their project source code, manage build configurations, and ensure that the project is ready for execution or deployment.

## Usage

```bash
buildcli build [options]
```

## Options

| Option             | Description                                   |
|--------------------|-----------------------------------------------|
| `-h, --help`       | Display help information about the command.   |
| `-V, --version`    | Display the version of the command.           |
| `--clean`          | Cleans the build directory before building.   |
| `--skip-tests`     | Skips running tests during the build process. |
| `--profile <name>` | Specifies the build profile to use.           |


### Examples
### Example 1: Build the Project
To build the project:

```bash
buildcli build
```
This command compiles the project source code and prepares it for execution.

### Example 2: Clean and Build the Project
To clean the build directory and then build the project:
```bash
buildcli build --clean
```
This command removes any previous build artifacts before compiling the project.

### Example 3: Build with a Specific Profile
To build the project using a specific profile:
```bash
buildcli build --profile production
```

### Example 4: Build and Skip Tests
To build the project while skipping tests:
```bash
buildcli build --skip-tests
```
This command compiles the project without running any tests.

### Troubleshooting
If you encounter issues while building the project:

* Ensure that your project is correctly initialized and contains the necessary files.
* Check for any errors in the build output for guidance on what went wrong.
* Refer to the help for the build command using `buildcli build --help` for more information.

### See Also
- [project](project.md)
- [run](run.md)
- [test](test.md)