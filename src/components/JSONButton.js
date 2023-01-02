import { 
    Button,
 } from "reactstrap"

function sendJSONFile(jsonData, jsonFilename) {
    const fileData = JSON.stringify(jsonData)
    const blob = new Blob([fileData], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = jsonFilename || "download.json"
    link.href = url
    link.click()
  }

function JSONButton({jsonData, jsonFilename}) {
    return (
        <Button className="text-xs" color="info" onClick={() => {sendJSONFile(jsonData, jsonFilename)}}>
            JSON
        </Button>
  );
};

export default JSONButton;