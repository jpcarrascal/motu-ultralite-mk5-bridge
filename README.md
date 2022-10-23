# MOTU UltraLite mk5 WebSockets bridge
This bridge application can be run on a computer connected to MOTU UltraLite mk2 audio interface and relays WebSockets messages bidirectionally between a remote/mobile CueMix 5 app (e.g. on an iPad or iPhone) and the UltraLite. It allows you to control your UltraLite wirelessly/remotely.

## Instructions:

- Make sure the ip address in the index.js file matches the one in your UltraLite mk5. To find out the exact ip of your UltraLite, just push the left knob in the front panel. The 5th item in the list is the device's ip address.
- Take note of network name of your computer. Here are instructions on how to do it: https://drexel.edu/it/help/a-z/computer-names/
- Run the node app (the one in the node/ folder of this repository) on the computer connected to your UltraLite*
- Run the CueMix 5 app from your iPad/iPhone
- In the welcome screen, click on "IP Connect". Replace the IP there with your computer's network name**, plus ```:8080``` (which is the port that the node.js app is listening on). You should end up with something like this ```computer-name.local:8080``` (see image below).
- Hit enter

If everything is set up correctly, your mobile app should connected to your UltraLite through your computer.

*_You might need to [install node.js](https://nodejs.org/en/download/), and [here are instructions on how to run a node.js app](https://stackoverflow.com/questions/57975889/how-to-run-an-existing-node-app-from-github_

**_Your computer's ip address works as well. However, since it might change from time to time, the network name might be easier to remember._

![How to change ip address](https://github.com/jpcarrascal/motu-ultralite-mk5-bridge/blob/74a62fdbc9df19b439f9d03b278dfd6e414a7a49/remote-conf.png)