import RPi.GPIO as GPIO
import time
import keyboard

RelayPin1 = 20
RelayPin2 = 26

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

GPIO.setup(RelayPin1, GPIO.OUT)
GPIO.setup(RelayPin2, GPIO.OUT)

GPIO.output(RelayPin1, GPIO.LOW)
GPIO.output(RelayPin2, GPIO.HIGH)
time.sleep(15)

GPIO.output(RelayPin1, GPIO.HIGH)
GPIO.output(RelayPin2, GPIO.LOW)

