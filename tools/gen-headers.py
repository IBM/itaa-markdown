#!/usr/bin/env python3
"""Creates markdown directory / file structure from mkdocs.yml nav."""
""" Author: Mihai Criveti """

import yaml
import os
from pathlib import Path
from flatten_json import flatten
from shutil import copyfile
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('templates'))
namespace = "devopstoolbox"

# Load mkdocs.yml nav structure
with open("mkdocs.yml", 'r') as stream:
    try:
        data = (yaml.load(stream, Loader=yaml.BaseLoader))
    except yaml.YAMLError as exc:
        print(exc)

# Flatten file path
nav = data['nav']
flat = flatten({'mkdocs': nav})
file_paths = flat.values()

for file_path in file_paths:
    # Split path from file name
    path, file_name = os.path.split(file_path)
    path = 'docs/' + path

    # Create the directories
    if not os.path.exists(path):
        os.mkdir(path)

    # If not exists, create the template
    if not os.path.isfile('docs/' + file_path):
        # Copy template
        print('Creating file', 'docs/' + file_path)
        # copyfile(template_file, 'docs/' + file_path)
        # Regexp: jinja some template stuff

        print("Path is: " + file_path)
        print("--- Creating a regular template ---")
        template = env.get_template('template.md')
        template_values = {
            "role_title": Path(file_path).stem.title().replace('-', ' '),
            "role_name": Path(file_path).stem.lower(),
        }
        print(template)

        output = template.render(template_values)
        with open('docs/' + file_path, 'w') as f:
            f.write(output)
