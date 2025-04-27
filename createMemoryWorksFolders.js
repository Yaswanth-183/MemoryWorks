const fs = require('fs');

const foldersWithFiles = [
    { folder: "0_Basic_Formatting_Tags", file: "basic_formatting.html" },
    { folder: "1_Client_Side_Form_Design_and_Validation", file: "form_validation.html" },
    { folder: "2_Handle_Events_and_Objects_JS", file: "events_and_objects.js" },
    { folder: "3_JQuery_and_Ajax_Application", file: "jquery_ajax_app.js" },
    { folder: "4_Client_Side_Application_React_API", file: "react_api_app.jsx" },
    { folder: "5_Multitier_Application_JSP_SpringBoot", file: "springboot_crud.java" },
    { folder: "6_Multitier_Application_NodeJS_Express", file: "node_express_app.js" },
    { folder: "7_DOM_Process_XML_File", file: "dom_process_xml.js" },
    { folder: "8_MemoryWorks_Experiment8", file: "experiment8.txt" },
    { folder: "9_MemoryWorks_Experiment9", file: "experiment9.txt" }
];

foldersWithFiles.forEach(item => {
    const folderPath = `./${item.folder}`;
    
    // Create the folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log(`Folder created: ${item.folder}`);
    }

    // Create the file inside the folder
    const filePath = `${folderPath}/${item.file}`;
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, `This is a placeholder for ${item.file}`);
        console.log(`File created: ${filePath}`);
    }
});
