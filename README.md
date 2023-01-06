# Auto File Relocator

This Google App Script runs once a day and automates the process of moving files
that meet certain criteria to a designated folder.

## Motivation

Managing and organizing large numbers of files can be time-consuming and
tedious. This script aims to make the process more efficient by automating the
movement of files which include a certain term in their name to a designated
folder.

Personally, I record notes at weekly meetings for a specific project, and I try
to keep all of the documents in a single folder. However, I often forget to move
the files there, and I end up with them scattered throughout my Google Drive.
All the documents started with "XXX Meeting Notes - X/X/X," so I decided to
write a script that would move them for me.

## Usage

1. Paste the script in the Google App Scripts editor.
2. Go to the "Project Settings" tab and scroll down to "Script Properties".
3. Add a new property called `FOLDER_ID` and enter the ID of the folder you want
   to move the files to as the value. You can find the folder ID by
   right-clicking on the folder in Google Drive and selecting "Get shareable
   link". The ID will be the series of numbers and letters after the "folders/"
   portion of the link.
4. Add a new property called `SEARCH_TERM` and enter the search term you want to
   use as the value. The search term can be any string that you want to use to
   identify the files you want to move. For example, if you want to move all
   documents that start with "XXX Meeting Notes -", you can set the search term
   to "XXX Meeting Notes -".
5. Save the script and run the "setup" function to create the trigger.
