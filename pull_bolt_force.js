
var save_name = "bolt_stress_model_.csv";
var save_path = "C:\\Users\\camp.seats\\OneDrive - Arup\\PROJ\\Projects\\3 - FEA General\\1 - From AOSM\\6 - results\\"+save_name
var f = new File(save_path, File.WRITE);


bolt_data = [{"location": "Floor Channel","num":1,"elid":18568},
             {"location": "Floor Channel","num":2,"elid":18556},
             {"location": "Floor Channel","num":3,"elid":18551},
             {"location": "Floor Channel","num":4,"elid":18574},

             {"location": "Ceiling Channel","num":1,'elid':18557},
             {"location": "Ceiling Channel","num":2,'elid':18514},
             {"location": "Ceiling Channel",'num':3,'elid':18506},
             {"location": "Ceiling Channel",'num':4,'elid':18522},

             {"location": "Floor WF",'num':1,'elid':18552},
             {"location": "Floor WF",'num':2,'elid':18550},
             {"location": "Floor WF",'num':3,'elid':18509},
             {"location": "Floor WF",'num':4,'elid':18543},

             {"location": "Ceiling WF",'num':1,'elid':18559},
             {"location": "Ceiling WF",'num':2,'elid':18579},
             {"location": "Ceiling WF",'num':3,'elid':18529},
             {"location": "Ceiling WF",'num':4,'elid':18526},

             {"location": "Purple Plate",'num':1,'elid':18546},
             {"location": "Purple Plate",'num':2,'elid':18573},
             {"location": "Purple Plate",'num':3,'elid':18564},
             {"location": "Purple Plate",'num':4,'elid':18545},
             {"location": "Purple Plate",'num':5,'elid':18504} ];




var states = 36
SetCurrentState(states);
var newton_2_kip = 0.0002248089;

 for(var i = 0;i<bolt_data.length;i++){

     var ele = bolt_data[i]["elid"];
     var b1 = GetData(BFX,BEAM,-1*ele);
     bolt_data[i]["axial"] = b1*newton_2_kip;
     line = [bolt_data[i]["location"],bolt_data[i]["num"].toString(),bolt_data[i]["elid"].toString(),bolt_data[i]["axial"].toString()];
     csv_line = line.join(",");

     f.Writeln(csv_line);
     Message(csv_line);
 }

f.Close();
