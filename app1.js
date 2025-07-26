git checkout -b genx
echo "console.log('Change from genx branch');" > app1.js
git commit -am "Update app1.js in genx"
git push origin genx
