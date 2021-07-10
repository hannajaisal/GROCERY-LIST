function tableform(){
    var image = document.getElementById("img");
    image.style.display ="none";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){

            var response = JSON.parse(this.response);
            var Jgro = response.gro;
            var output ="";
            output+= `<tr>
                <th style = "width : 50px"> SINo </th>
                <th style = "width: 18px"> Name </th>
                <th style ="width: 150px"> Quantity </th>
                <th style ="width: 100px"> Unit</th>
                <th style "width : 150px"> Department</th>
                <th style "width :150px"> Notes</th>`
            for(let i=0; i<Jgro.length;i++){
                output +=`<tr>
                              <td style="width :50px">${Jgro[i].SINO}</td>)
                              <td style="width :80px">${Jgro[i].Name}</td>)
                              <td style="width :40px">${Jgro[i].Quantity}</td>)
                              <td style="width :100px">${Jgro[i].Unit}</td>)
                              <td style="width :100px">${Jgro[i].Department}</td>)
                              <td style="width :100px">${Jgro[i].Notes}</td>)
                            </tr>`;  

            }    

            document.getElementById("demo").innerHTML = output;
        }
    };
    xhttp.open("GET","gro.json",true);
    xhttp.send();

}