#!/bin/bash

# build image list
unset PYTHONPATH
cd src/images/
python2 image_importer.py

#deploy
npm run deploy
