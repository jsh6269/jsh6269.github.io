import os
import json
from bs4 import BeautifulSoup
from datetime import datetime
import urllib.parse

def extract_title_from_html(file_path):
    """Extract title from an HTML file."""
    print(file_path)
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
                keypath = os.path.join(category_path, key)
                for filename in os.listdir(keypath):
                    full_path = os.path.join(keypath, filename)
                    new_path = os.path.join(keypath, 'index.html')
                    if os.path.isfile(full_path) and '.html' in full_path:
                        os.rename(full_path, new_path)
                        title = extract_title_from_html(new_path)
                        created_time = datetime.fromtimestamp(os.path.getctime(new_path)).strftime('%Y-%m-%d')
                        result[category].append({"id": key, "title": title, "date": str(created_time)})

            # Sort the list by 'key'
            result[category].sort(key=lambda x: x['id'])

    return result

def save_json(data, output_file):
    """Save the JSON data to a file."""
    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)

def create_sitemap(data, output_file):
    today = datetime.now().strftime("%Y-%m-%d")

    # Main page
    xml_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://jsh6269.github.io/</loc>
        <lastmod>{today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
   </url>"""

    # Guest page
    xml_content += f"""
    <url>
        <loc>{urllib.parse.quote(f'https://jsh6269.github.io/guests/', safe=":/")}</loc>
        <lastmod>{today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.6</priority>
    </url>"""

    # List page
    for category in data.keys():
        xml_content += f"""
    <url>
        <loc>{urllib.parse.quote(f'https://jsh6269.github.io/list/{category}/', safe=":/")}</loc>
        <lastmod>{today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.6</priority>
    </url>"""

    # Post page
    for category, post_list in data.items():
        for post in post_list:
            xml_content += f"""
    <url>
        <loc>{urllib.parse.quote(f'https://jsh6269.github.io/post/{category}/{post["id"]}/', safe=":/")}</loc>
        <lastmod>{post['date']}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.5</priority>
    </url>"""
    
    xml_content += """
</urlset>
"""
    with open(output_file, "w", encoding="utf-8") as file:
        file.write(xml_content)

if __name__ == "__main__":
    base_directory = './public/posts'
    tree_json = './src/tree.json'
    sitemap_file = 'public/sitemap.xml'

    data = create_json_from_html(base_directory)
    save_json(data, tree_json)
    print(f"JSON file '{tree_json}' created successfully.")

    create_sitemap(data, sitemap_file)
    print(f"Sitemap file '{sitemap_file}' created successfully.")
