var folderId = PropertiesService.getScriptProperties().getProperty('FOLDER_ID');
var searchTerm = PropertiesService.getScriptProperties().getProperty('SEARCH_TERM');

function setup() {
  ScriptApp.newTrigger('moveFilesToFolder').timeBased().everyDays(1).create();
}

function moveFilesToFolder() {
  var folder = DriveApp.getFolderById(folderId);
  var searchFor = "title contains '" + searchTerm + "' and trashed = false";

  var fileArray = DriveApp.searchFiles(searchFor);

  while (fileArray.hasNext()) {
    var file = fileArray.next();
    // If the file is not already in the folder
    if (!folder.getFilesByName(file.getName()).hasNext()) {
      folder.addFile(file);

      // Remove from previous folder after being moved to the new one
      file.getParents().next().removeFile(file);
    }
  }
}
