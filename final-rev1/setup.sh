# setup script openjdk11, android sdk, gradle for 
# developing react-native app in wsl

# After run this script check below sites
# https://devblogs.microsoft.com/commandline/connecting-usb-devices-to-wsl/
# https://github.com/dorssel/usbipd-win/issues/60#issuecomment-962121982
#
# In Windows admin powershell
# usbipd wsl list
# usbipd wsl attach --busid <busid> --auto-attach
# usbipd wsl detach --busid <busid>
# 
# In WSL
# lsusb
# sudo service udev restart
# sudo udevadm control --reload
# And plug-out/plug-in device again

ENV_FILE=".zshrc"

cd "$HOME"
sudo apt-get install -y \
  unzip \
  lib32z1 \
  openjdk-11-jdk

wget -O cmdline-tools.zip https://dl.google.com/android/repository/commandlinetools-linux-9123335_latest.zip
mkdir -p Android
unzip cmdline-tools.zip -d Android
rm cmdline-tools.zip

export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export PATH="$PATH:$JAVA_HOME/bin"
printf "\n\nexport JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64\nexport PATH=\$PATH:\$JAVA_HOME/bin" >> ~/$ENV_FILE

./Android/cmdline-tools/bin/sdkmanager \
  --sdk_root=./Android \
  "platform-tools" \
  "platforms;android-31" \
  "build-tools;31.0.0"

export ANDROID_HOME="$HOME/Android"
export PATH="$PATH:$ANDROID_HOME/tools"
export PATH="$PATH:$ANDROID_HOME/platform-tools"
printf "\n\nexport ANDROID_HOME=$HOME/Android\nexport PATH=\$PATH:\$ANDROID_HOME/tools\nexport PATH=\$PATH:\$ANDROID_HOME/platform-tools" >> ~/$ENV_FILE
./Android/cmdline-tools/bin/sdkmanager --update --sdk_root=./Android
sudo apt-get install -y gradle
gradle -v
adb start-server
