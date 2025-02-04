import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

TARGET_FOLDER = "../"  # Specify the folder to look into

client = OpenAI(
	base_url = os.getenv("HUGGINGFACE_API_URL"),
	api_key = os.getenv("HUGGINGFACE_API_KEY")
)

# Function to generate AI response based on the program title
def generate_ai_response(program_title):
    print(f"Requesting to AI for {program_title}...")

    messages = [
        {
          "role": "user", 
          "content": f'''
          Write the JavaScript code for {program_title} 
          and explain it in Bangla like a friendly tutorial article by Antor Ahmed. 
          Split the code and explanation with --$END$--.
          before code, write nothing and don't use code block.
          example output: 
            function add(a, b) => a + b;
            --$END$--
            explanation in Bangla
          '''
        }
    ]

    try:
      completion = client.chat.completions.create(
        model=os.getenv("HUGGINGFACE_MODEL"), 
        messages=messages, 
        max_tokens=500
      )

      print(f"--- Response received: {program_title} ---")
      return completion.choices[0].message.content
    except Exception as e:
      print(f"Error: {e}, Retrying for {program_title}...")
      generate_ai_response(program_title)  
    
# Function to process subfolders and write to .js and .md files
def process_subfolders(base_dir):
    for root, dirs, files in os.walk(base_dir):
        # Check for the existence of both .js and .md files in the folder
        if any(file.endswith(".js") for file in files) and any(file.endswith(".md") for file in files):
            # Skip if already marked done
            if os.path.exists(os.path.join(root, 'marked_done')):
              print(f"Skipping {root} as already marked done.")
              continue

            # Extract the program title from the .js filename
            js_file = next(file for file in files if file.endswith(".js"))
            program_title = js_file.replace(".js", "")

            # Generate JavaScript code and explanation in Bangla
            ai_response = generate_ai_response(program_title)

            try:
              # Write JavaScript code to the .js file
              js_file_path = os.path.join(root, js_file)
              with open(js_file_path, 'w', encoding='utf-8') as js_f:
                  code_part = ai_response.split('--$END$--', 1)[0]
                  js_f.write(code_part)

              # Write explanation to the .md file
              readme_file_path = os.path.join(root, 'readme.md')
              with open(readme_file_path, 'w', encoding='utf-8') as md_f:
                  md_f.write(f"# {program_title}\n\n")
                  md_f.write(f"**Author**: Antor Ahmed\n\n")
                  md_f.write(f"{ai_response.split('--$END$--', 1)[1]}")

              marked_done_file_path = os.path.join(root, 'marked_done')
              with open(marked_done_file_path, 'w', encoding='utf-8') as md_f:
                  md_f.write("")
            except Exception as e:
              print(f"Error: {e}, Restarting...") 
              process_subfolders(base_dir)

# Run the function to process subfolders in the specified folder
process_subfolders(TARGET_FOLDER)
print("All folders processed successfully.")