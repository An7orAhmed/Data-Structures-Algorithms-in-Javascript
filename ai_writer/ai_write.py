import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

MODEL = os.getenv("OPENROUTER_MODEL")
BASE_URL = os.getenv("OPENROUTER_API_URL")
API_KEY = os.getenv("OPENROUTER_API_KEY")

TARGET_FOLDER = "../"  # Specify the folder to look into

client = OpenAI(base_url=BASE_URL, api_key=API_KEY)

# Function to generate AI response based on the program title
def generate_ai_response(program_title):
    print(f"Requesting to AI for {program_title}...")

    try:
      messages = [
          {
            "role": "user", 
            "content": f'''
            Write the JavaScript code for {program_title} 
            and explain it in Bangla like a friendly tutorial article by Antor Ahmed. 
            Split the code and explanation with --$END$--.
            example output: 
              function add(a, b) => a + b;
              --$END$--
              explanation in Bangla
            '''
          }
      ]
      
      completion = client.chat.completions.create(
        model=MODEL, 
        messages=messages
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
                  cleaned_code = code_part.split("```javascript")[1].split("```")[0].strip()
                  js_f.write(cleaned_code)

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