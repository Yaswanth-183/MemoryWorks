const fs = require('fs');

const folders = [
    "0_Basic_Formatting_Tags",
    "1_Client_Side_Form_Design_and_Validation",
    "2_Handle_Events_and_Objects_JS",
    "3_JQuery_and_Ajax_Application",
    "4_Client_Side_Application_React_API",
    "5_Multitier_Application_JSP_SpringBoot",
    "6_Multitier_Application_NodeJS_Express",
    "7_DOM_Process_XML_File"
];

folders.forEach(folder => {
    const folderPath = `./${folder}`;
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log(`Folder created: ${folder}`);
    }

    // Create a .gitkeep file inside each folder
    const gitkeepPath = `${folderPath}/.gitkeep`;
    if (!fs.existsSync(gitkeepPath)) {
        fs.writeFileSync(gitkeepPath, '');
        console.log(`.gitkeep created inside: ${folder}`);
    }
});
