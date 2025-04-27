// createMemoryWorksFolders.js

const fs = require('fs');

// Folder names based on your experiments + Memory related names
const folders = [
  '0_BasicFormattingTags_MemoryBox',
  '1_ClientSideFormDesign_MemoryBox',
  '2_HandleEventsObjects_MemoryBox',
  '3_JQueryAjaxApp_MemoryBox',
  '4_ReactApp_MemoryBox',
  '5_SpringBootCRUD_MemoryBox',
  '6_NodeExpressMVC_MemoryBox',
  '7_DOMXMLProcessing_MemoryBox'
];

// Create folders
folders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
    console.log(`✅ Created folder: ${folder}`);
  } else {
    console.log(`⚠️ Folder already exists: ${folder}`);
  }
});

console.log('🎯 All experiment folders created!');
