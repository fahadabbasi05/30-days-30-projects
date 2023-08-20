

// CSV to JSON

const arr = [   
    {Name: "Fahad", Class: "12", Subject: "Science", Percentage: "80"},
    {Name: "Saad", Class: "16", Subject: "computers", Percentage: "85"},
    {Name: "Rafay", Class: "8", Subject: "Business", Percentage: "92"},
    {Name: "Sania", Class: "4", Subject: "Science", Percentage: "90"},
    {Name: "Abrish", Class: "16", Subject: "Medical", Percentage: "87"},
]
function JSONToCV () {
    console.log(JSON.stringify(arr))
}
JSONToCV()
