






var save_name = "LC11_edit_t.csv";
var save_path = "C:\\Users\\camp.seats\\OneDrive - Arup\\PROJ\\Projects\\3 - FEA General\\1 - From AOSM\\6 - results\\"+save_name

var csv_array  = File.ReadCSV(save_path);


var m = Model.Select("Select model");

var ln = LoadNode.GetAll(m);

for (var i=0;i<ln.length;i++){
 Message("------------------------------------------------------")
 Message("CSV value")
 Message(csv_array[0][i])
 Message(typeof csv_array[0][i])
 Message("Original load value")
 Message(ln[i].sf)
 Message(typeof ln[i].sf)

 var load_up = csv_array[0][i]
 ln[i].sf = Number(csv_array[0][i])
 // Message(csv_array)
 Message("Updated load value")

}
