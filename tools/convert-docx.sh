#!/bin/bash

# Mihai Criveti <crmihai1@ie.ibm.com>

# Check if pandoc is installed
if ! command -v pandoc &> /dev/null
then
    echo "Error: pandoc is not installed. Please install it before running this script."
    exit 1
fi

# Check if the input and output file names are provided
if [ $# -lt 2 ]
then
    echo "Usage: $0 input_file output_file"
    exit 1
fi

# Input and output file names
input_file="$1"
output_file="$2"
img_dir="img"

# Convert the Docx file to Markdown
pandoc -f docx -t markdown "$input_file" -o "$output_file" --extract-media="$img_dir"
