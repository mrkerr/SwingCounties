function parseData(){
  Papa.parse("data/data.csv", {
    download: true,
    complete: function(results) {
      printWords(results.data);
    }
  });
}

function printWords(data){
  for(var i = 0; i<data.length; i++){
    console.log("County: " + data[i][0] + "Swing: " + data[i][8]);
  }
}
