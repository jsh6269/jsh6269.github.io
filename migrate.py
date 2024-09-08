import os
import json
from bs4 import BeautifulSoup

def extract_title_from_html(file_path):
    """Extract title from an HTML file."""
    with open(file_path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')
        title = soup.title.string if soup.title else 'No title found'
        return title

def create_json_from_html(base_dir):
    """Create a JSON file from HTML files in the base directory, with keys sorted in ascending order."""
    result = {}

    for category in os.listdir(base_dir):
        category_path = os.path.join(base_dir, category)
        
        if os.path.isdir(category_path):
            result[category] = []
            
            for key in os.listdir(category_path):
                key_path = os.path.join(category_path, key, 'index.html')
                
                if os.path.isfile(key_path):
                    title = extract_title_from_html(key_path)
                    result[category].append({"key": key, "title": title})

            # Sort the list by 'key'
            result[category].sort(key=lambda x: x['key'])

    return result

def save_json(data, output_file):
    """Save the JSON data to a file."""
    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    base_directory = './public/posts'  # Base directory containing categories
    output_file = './src/tree.json'        # Output JSON file

    data = create_json_from_html(base_directory)
    save_json(data, output_file)
    print(f"JSON file '{output_file}' created successfully.")
