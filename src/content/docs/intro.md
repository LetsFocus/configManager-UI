---
title: "Getting Started with ConfigManager"
description: "Learn how to get started with ConfigManager."
introductionHeading: "Introduction"
introductionText: "ConfigManager makes it easy to manage configurations in Go applications."
index: 1
slug: intro
---

# configManager Documentation

## Overview

`configManager` is a Go module that simplifies the management of configuration data from various sources such as environment variables, JSON, YAML, and `.env` files. It provides a flexible way to handle complex configurations, including nested structs, validation, default values, and custom parsing. This module also caches configuration values in memory for efficient access.

## Features

- **Multiple Sources**: Supports `.env`, JSON, and YAML files.
- **Default Values**: Automatically applies default values when environment variables are missing.
- **Validation**: Supports required fields and throws errors for missing variables.
- **Nested Structs**: Handles deeply nested structs with ease.
- **Custom Parsing**: Allows custom parsing (e.g., JSON strings).
- **Environment-Specific Files**: Supports app-specific configurations based on the `APP_ENV` variable (e.g., `.dev.env`, `.prod.env`).
- **Caching**: Caches frequently accessed configuration data to improve performance.
- **Recursive Directory Search**: Searches up to 3 levels of subdirectories to find configuration files.
- **Automatic Binding**: Automatically binds configuration data to struct fields.
