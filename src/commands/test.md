# `test`

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [See Also](#see-also)
## Description

Handles the testing of projects within BuildCLI. This command allows users to run unit tests, integration tests, and other testing frameworks to ensure the quality and functionality of their applications.

## Usage

```bash
buildcli test [options]
```

### Options

| Option               | Description                                  |
|----------------------|----------------------------------------------|
| `-h, --help`         | Display help information about the command.  |
| `-V, --version`      | Display the version of the command.          |
| `--skip-integration` | Skips running integration tests.             |
| `--profile <name>`   | Specifies the profile to use during testing. |
| `--report`           | Generates a test report after execution.     |

### Examples
### Example 1: Run All Tests
To run all tests in the project:
```bash
buildcli test
```
This command executes all unit and integration tests defined in the project.

### Example 2: Skip Integration Tests
To run only unit tests and skip integration tests:
```bash
buildcli test --skip-integration
```
This command executes only the unit tests, ignoring any integration tests.

### Example 3: Run Tests with a Specific Profile
To run tests using a specific profile:

```bash
buildcli test --profile testing
```
This command executes the tests with the settings defined in the `testing` profile.

### Example 4: Generate a Test Report
To generate a report after running the tests:

```bash
buildcli test --report
```
This command runs the tests and produces a detailed report of the results.

### Troubleshooting
If you encounter issues while running tests:

* Ensure that your project is correctly configured with the necessary test frameworks.
* Check for any errors in the test output for guidance on what went wrong.
* Refer to the help for the test command using `buildcli test --help` for more information.

### See Also
- [build](build.md)
- [run](run.md)
- [project](project.md)