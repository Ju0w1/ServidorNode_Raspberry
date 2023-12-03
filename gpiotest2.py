import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
pins =  (2,3,4,14,15,17,18,27,22,23,24,10,9,25,11,8,7,5,6,12,13,19,16,26,20,21)    # BCM
for pin in range (0,26):
    GPIO.setup(pins[pin], GPIO.IN, pull_up_down=GPIO.PUD_UP)
    i=pins[pin]
    g=str(i)
    p=""
    if i<10: p="0"
    print ("GPIO"+p+g, GPIO.input(i))
