## In Build Process. Not ready for use ##
Mac_Health_Server is DARNA.HI V2 for MacOS

DEMO version with features turned off: https://seapoe1809.pythonanywhere.com/login
ADMIN 'health', USER1 'wellness'; swipe left to navigate

"SForward looking open source Health server initiative!"

##DARNA Healthy Intent v2- An open source intiative - self custody of your health data
##Early stage. Beta and under development and isnt secure. Please take all steps to safeguard your data. 

What is this project?
======================
DARNA. HI v2 is a Forward looking project.

<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/darnav2_mktg.png" width =300, height=550>

We are getting ready for the day the Language models would run locally on your device and you can ask it in a very Privacy centered way questions very specific to your health . This project is an open-source software that helps bring together your health data that is currently saved in different places like electronic health records, fitness apps, and wearable devices. 

We wish for a way to aggregate your health data. One stop to bring all your health data together on your secure computer at home. When you visit a new doctor, you can choose to share your health data with them on demand through email, link etc. This way, you have full custody of your health data and can decide who to share it with and what to do with it.


I created this project because I had trouble moving my own health data when I switched healthcare providers. As someone who works in the healthcare space, I see that current EHR solutions make it difficult to port your data, even though there are regulatory requirements to do so. It's frustrating to see that some institutions still rely on fax and scan to move data around, which shows how outdated and hidden these data porting techniques are. Given this pain point, I also see an exciting oppportunity with LLM's. I look forward to the day when superior Language models will run on your device at home.

This is version 2 of the project, and I anticipate that there will be many more iterations before it takes a good form. But my goal is to make it easier for people to take ownership of their health data and store it in one place on their own computer. They can shoose to interact with LLM's with their deidentified data if they wis. This way, they can decide who to share it with and have more control over their own health.

License?
========
This program is free software; you can redistribute it and/or modify it under the terms of the Darna modified GNU General Public License as published by the Free Software Foundation.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.


basic requirements
=======================================
#Macos
#Brew
#python3
#git
#docker

Please note that this is only the second version of the project, and I plan on adding more features and making improvements in the future.

**step 1: Git clone and install Health_server**
==============================================

Make sure you have python3. If not go to https://www.python.org/. Once done do the following:

Open Terminal. To open it, go to Launchpad (usually 2nd icon from left on dock that opens a page with severall apps). Type terminal and double click on it

    cd Desktop

Install Homebrew. This is a package manager for Mac: 
 (skip this step if brew already installed)
 
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)

 Git clone the Darna_local repo
              
    git clone https://github.com/seapoe1809/Health_server

Change directory into the Health_server directory
              
    cd MacOS_Health_server

Now install 'distro' and subsequently run Setup. This should also start your Server.

    pip install distro              
              
    python3 setup_darna.py

The server should be active at port :3001. The flask server when launched will give you the IP address at which it launched. You could now navigate to that http://your_ip_adddress:3001 with any mobile device and access the server.    

    ./setup_run.sh
    brew python 3.9
    python3 -m ensurepip --default-pip
    alias pip=‘pip3’
    pip install —upgrade pip
    pip3 install distro
    cd DARNA.app/Contents/Resources
    python3 setup_darna.py
        
To give feedback, please go to 'Information' card and send email to me. Or you could start a debug here itself.

**Step 2: Download your health data in the health_server folder:**
=================================================================

a) Download ios health files: On apple health app, click the profile icon, then choose "Export All Health Data" and save the zip file in files. Then click on 'UPLOAD' card on your flask server and download to your server.
 
b) If you have data on EPIC MyChart or your doctors gateway, login and go to Menu, search 'sharing' or 'export', click 'yourself' and download a zip file to 'files'.  Then click on 'UPLOAD' card on your flask server and download to your server.
 
c) PDF's and JPGS on mobile: 'UPLOAD' card of server and follow instructions to download to your server.

d) Once files are downloaded, to UPLOAD directory, click tha 'RUN SYNC' card to move files and start Grafana.

e) Tips are in 'INFORMATION' card of server. 

f)  The default username password: ADMIN 'health' and USER1 'wellness'. You could change it 'Information' card if you wish. For Grafana is user:'admin', password:'health'.


**Troubleshooting**
===================

The default username password: ADMIN 'health' and USER1 'wellness'. You could change it 'Information' card if you wish.
**Unidentified app downloaded** error
- on top of the screen on desktop, go to menubar and click on apple icon
- Go to system preferences
- On 'General' tab, click on allow Darna app to run.
- Go back to desktop and double click on DARNA.app tp launch
- 
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/1-2-3.png" width =300, height=550>


Snapshots:
=============


<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5864.jpeg" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5865.png" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5866.jpeg" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5867.jpeg" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5868.png" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5869.jpeg" width =300, height=550>
<img src="https://user-images.githubusercontent.com/82007659/243430051-478d54cd-5e25-4134-ba6c-21a67220b5f7.jpg" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5870.jpeg" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5871.jpeg" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5872.png" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5873.jpeg" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5874.png" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5877.jpeg" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5878.png" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/darna_information.png" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/deidentify.png" width =300, height=550>

<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5879.jpeg" width =300, height=550>

**Code for Install Module is at : **
========================================

https://github.com/pnmeka/install_module/

Install Module is a set of **dockerized container apps** that you could add to the 'Sky store'. It is completely optional.
It is maintained by another user.

<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5880.png" width =300, height=550>

<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5881.jpeg" width =300, height=550>

<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5883.jpeg" width =300, height=550>
<img src="https://github.com/seapoe1809/Darna/assets/82007659/f1c26f0c-fb38-48e1-8551-5b36de750c91" width =300, height=550>
<img src="https://github.com/seapoe1809/Darna/assets/82007659/f718336b-e545-43e5-aa50-aa004c274954" width =300, height=550>
<img src="https://github.com/seapoe1809/Darna/assets/82007659/86ab0bce-a0da-4330-9849-2d1600262f27" width =300, height=550>
<img src="https://github.com/seapoe1809/Darna/assets/82007659/c8272ff2-69db-4984-8ebe-469cb02ee7ab" width =300, height=550>

<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5884.jpeg" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5895.png" width =300, height=550>

****Why XMR here?********

In the realm of financial privacy, the use of cryptocurrencies like Monero can play a role in enhancing users' security. Monero is a privacy-focused cryptocurrency that provides anonymity and obfuscation of transaction details. This can be particularly relevant in healthcare contexts.

https://github.com/pnmeka/install_module/tree/main/XMRIG

========================================================================================

<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5885.jpeg" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5892.jpeg" width =300, height=550>


<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5886.jpeg" width =300, height=550>


<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5893.jpeg" width =300, height=550>

<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5887.jpeg" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5894.jpeg" width =300, height=550>
<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/pic11.png" width =300, height=550>

<img src="https://github.com/seapoe1809/assets/blob/main/DARNA_HI_v2_assets/IMG_5889.jpeg" width =300, height=550>



**Sky Store:** I imagine it a way download external dockerized apps to run on your server. It adds more functionalities and dimensions to our server. Cheers! 
 
 Hope you like it! Please share feedback and let me know if you woudl like to contribute to this project. You could send feedback by commenting on this repo or going to 'INFORMATiON' card and clicking on link saying 'email' the writer of repo.
 



