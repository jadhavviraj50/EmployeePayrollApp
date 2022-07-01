window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});

const createInnerHtml=()=>{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                      "<th>Salary</th><th>Start Date</th><th>Action</th>"
    const innerHtml= `${headerHtml}
    
    <tr>
        <td><img class="profile" alt="" 
            src="../assets/passport1.jpg"
        </td>
    <td>Viraj Jadhav</td>
    <td>Male</td>
    <td><div class='dept-label'>HR</div>
        <div class='dept-label'>Finance</div></td>
    <td>3000000</td>
    <td>1 Nov 2021</td>
    <td>
      <img id ="1" onclick="remove(this)" alt="delete" src="../assets/deleteLogo.png">
      <img id ="1" alt="edit" onclick="update(this)"
           src="../assets/EditIcon.png">
    </td>
    </tr>

    `;
    document.querySelector('#table-display').innerHTML=innerHtml;
}

