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
    console.log(data[i][0]);
  }
}
