# module to create js file that imports images

# troubleshooting
debug = True

# get list of images
import glob
jpg = glob.glob("./*.jpg")
png = glob.glob("./*.png")
capital_JPG = glob.glob("./*.JPG")

ImageList = jpg + png + capital_JPG

print(ImageList)

# generate file
import_STATEMENTS= ""
exportarray = ""

for i,element in enumerate(ImageList):
    # image import statements
    importStatement = "import image" + str(i) + " from '" + element + "';\n"
    # for export array
    #exportStatement = "image" + str(i) + ", "
    # {id : #, content : image#}
    exportStatement = "{id : " + str(i) + ", content : image" + str(i) + "}, " 
    #append to output
    import_STATEMENTS += importStatement
    exportarray += exportStatement

# create export statement
export_STATEMENT = "export default [" + exportarray[:-2] + "];"

if(debug):
    print(import_STATEMENTS)
    print(export_STATEMENT)

# write to file images.js
f = open("images.js", "w")
f.write(import_STATEMENTS + export_STATEMENT)





