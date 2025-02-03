import os
import json

# Load data from the problems.json file
with open('problems.json', 'r') as f:
    data = json.load(f)

# Base directory where folders will be created (current directory)
base_dir = os.getcwd()

# Create folders and files
def create_folders_and_files(data, parent_dir):
    for category, topics in data.items():
        category_folder = os.path.join(parent_dir, category)
        
        # Create category folder if it doesn't exist
        if not os.path.exists(category_folder):
            os.makedirs(category_folder)
        
        for topic in topics:
            topic_folder = os.path.join(category_folder, topic)
            
            # Create topic folder if it doesn't exist
            if not os.path.exists(topic_folder):
                os.makedirs(topic_folder)
            
            # Create JS file if it doesn't exist
            js_file = os.path.join(topic_folder, f"{topic.replace(' ', '_')}.js")
            if not os.path.exists(js_file):
                with open(js_file, 'w') as f:
                    f.write(f"// {topic} JavaScript code goes here.")
            
            # Create README file if it doesn't exist
            readme_file = os.path.join(topic_folder, 'readme.md')
            if not os.path.exists(readme_file):
                with open(readme_file, 'w') as f:
                    f.write(f"# {topic}\n\nDetailed explanation and code for {topic}.")

# Run the function to create folders and files
create_folders_and_files(data, base_dir)

print("Folders and files have been created successfully.")
