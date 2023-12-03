from gpiozero import Button
import requests
from time import sleep

# Define the GPIO pin connected to the button
BUTTON_PIN = 21

# Define the URL to which you want to send the POST request
POST_URL = "https://6fdc-190-135-185-95.ngrok.io/create-order"

# Setup Button
button = Button(BUTTON_PIN)

print("Press the button to send a POST request")

try:
    while True:
        # Wait for the button to be pressed
        button.wait_for_press()
        
        print("Button pressed!")
        
        # Perform POST request when the button is pressed
        try:
            response = requests.post(POST_URL)
            print(f"POST response: {response.status_code}")
        except Exception as e:
            print(f"Error sending POST request: {e}")

        # Wait a bit to avoid multiple button presses
        sleep(1)

except KeyboardInterrupt:
    print("Exiting...")
