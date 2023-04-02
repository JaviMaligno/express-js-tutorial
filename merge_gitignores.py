# import required module
import os
# assign directory
directory = os.path.normpath(r'C:\Users\javia\OneDrive\Escritorio\GitHub\node-express-course')
# iterate over files in
# that directory
gitignore = ".gitignore"
ignored = set()
for filename in os.listdir(directory):
    f = os.path.join(directory, filename, gitignore)
    if os.path.isfile(f):
        with open(f) as git:
            ignored = ignored.union(set(line.strip() for line in git.readlines()))


with open(os.path.join(directory, gitignore), "w") as gitignore_file:
    for line in ignored:
        gitignore_file.write(line+"\n")

	# checking if it is a file
	#
    
    
		
