#!/bin/bash
IFS='
'
for i in `ls *.html`; do
  find . -name "*" -exec sed -i "s/\/2011\/$i/$i/g" {} \;
done
