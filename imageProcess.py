from google.cloud import vision
import re
# https://www.fda.gov/files/calories_on_the_new_nutrition_facts_label.png
# Tester file above for the code


def detect_text_uri(uri):
    """
    Detects text in the file located in Google Cloud Storage or on the Web.
    """
    client = vision.ImageAnnotatorClient()
    image = vision.Image()
    image.source.image_uri = uri

    response = client.text_detection(image=image)
    texts = response.text_annotations
    print('Texts:')
    str = ""
    for text in texts:
        str = str + text.description + " "
    if response.error.message:
        raise Exception(
            '{}\nFor more info on error messages, check: '
            'https://cloud.google.com/apis/design/errors'.format(
                response.error.message))
    return str


def parse_data(string):
    nutrition_labels = ["Calories", "Saturated Fat", "Trans Fat", "Cholesterol", "Sodium", "Dietary Fiber",
                        "Potassium", "Sugars", "Protein", "Vitamin A", "Vitamin C", "Calcium", "Iron"]
    amount = {}
    for nutrient in nutrition_labels:
        r = re.search(r"(?<="+nutrient+") (\S+)", string)
        if r is not None:
            amount[nutrient] = r.group(0).strip()
        else:
            amount[nutrient] = r
    return amount


def main():
    data = detect_text_uri(input("URL: "))
    parsed_data = parse_data(data)
    print(parsed_data) # The goodies!


if __name__ == "__main__":
    main()
