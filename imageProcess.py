from google.cloud import vision


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
    print(str)


def main():
    detect_text_uri(input("URL: "))


if __name__ == "__main__":
    main()
