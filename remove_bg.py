import sys
from rembg import remove
from PIL import Image

def process_image(input_path, output_path):
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)
    print(f"Successfully removed background and saved to {output_path}")

if __name__ == "__main__":
    process_image(sys.argv[1], sys.argv[2])
