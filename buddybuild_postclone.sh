curl --remote-name https://fuse-dl.azureedge.net/releaseartifacts/fuse_osx_1_2_1_13974.pkg
echo password | sudo installer -pkg fuse_osx_1_2_1_13974.pkg -target /
sed -i -e "s/pk_test/${STRIPE_PRIVATE_KEY}/g" MainView.js
npm install -g fusepm
fusepm install https://github.com/bolav/fuse-cocoapods
fusepm install https://github.com/bolav/fuse-facebook-login
fuse build --target=iOS -DCOCOAPODS --configuration=Release || true
