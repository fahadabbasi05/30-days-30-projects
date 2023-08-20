// csv to json

let csv = `
Name, Class, Subject, Percentage
Fahad, 12, Science, 80
Saad, 16, Computers, 78
Rafay, 8, Business, 80
Abrish, 4, Science, 90
Sania, 16, Medical, 87
`;

function csvToJSON(csv) {
    let lines = csv.split("\n");
    let headings = lines[0].split(",")
    const records = [];
    const bodyLines = lines.splice(1, lines.length - 1);
    console.log(lines, bodyLines)
    for (let i=0; i < bodyLines.length; i++) {
        const body = bodyLines[i].split(',');
        let record = {};
        for (let j=0; j < headings.length; j++) {
            // we need a dynamic key, if its Name or Age or anything, it should not matter
            const key = headings[j].trim();
            const value = body[j].trim();
            // dynamic key to dynamic value
            record[key] = value;
        }
        records.push(record);
    }
    console.log("record: ", records);
}

console.log(csvToJSON(csv))


