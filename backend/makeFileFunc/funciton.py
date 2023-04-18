def write_file(file_name, content):
    with open(file_name, 'w') as f:
        f.write(content)

def copy_file_content(source_path: str, target_path: str):
    with open(source_path, 'r') as f1:
        content = f1.read()

    with open(target_path, 'w') as f2:
        f2.write(content)
    
def append_text_to_file(file_path: str, text: str):
    with open(file_path, 'a') as f:
        f.write(text)