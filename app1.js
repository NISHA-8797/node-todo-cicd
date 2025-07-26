git checkout master
git checkout -b geny
echo "console.log('changes from branch geny');" > app1.js
git commit -am "Update app1.js in geny branch"
git push origin geny
