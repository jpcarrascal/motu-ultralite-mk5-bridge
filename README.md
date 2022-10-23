# MOTU UltraLite mk5 WebSockets bridge
This bridge application can be run on a computer connected to MOTU UltraLite mk2 audio interface and relays WebSockets messages bidirectionally between a remote/mobile CueMix 5 app (e.g. on an iPad or iPhone) and the UltraLite. It allows you to control your UltraLite wirelessly/remotely.

## Instructions:

- Make sure the ip address in the index.js file matches the one in your UltraLite mk5. To find out the exact ip of your UltraLite, just push the left knob in the front panel. The 5th item in the list is the device's ip address.
- Take note of network name of your computer. Here are instructions on how to do it: https://drexel.edu/it/help/a-z/computer-names/
- Run the node app (in the node/ folder) on the computer connected to your UltraLite
- Run the CueMix 5 app from your iPad/iPhone
- In the welcome screen, click on "IP Connect". Replace the IP there with your computer's network name*, plus ```:8080``` (which is the port that the node.js app is listening on). You should end up with something like this ```computer-name.local:8080```
- Hit enter

If everything is set up correctly, your mobile app should be connected to your UltraLite.

*_Your computer's ip address works as well. However, since it might change from time to time, the network name might be easier to remember._