fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817")
    .then(response=> response.json())
    .then(obj=> {
        let str = `<h1>${obj.message}</h1>
                    <table>
                        <tr>
                            <th>
                            <th>
                            <th>
                            <th>
                        </tr>`;
        for (let i=0;i<obj.data.length;i++){
            str+=`<tr>
                    <td>
                    <td>
                    <td>
                    <td>
                  </tr>`;
        }
        str+= '</table>';
        document.getElementById("continer").insertAdjacentHTML("beroreend",str);
        console.log(obj);
    });