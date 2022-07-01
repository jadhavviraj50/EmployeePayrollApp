let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent= empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage=()=>{
    return localStorage.getItem('EmployeePayrollList') ?
                        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml=()=>{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                      "<th>Salary</th><th>Start Date</th><th>Action</th>"
    if(empPayrollList.length == 0) return;
    let innerHtml=`${headerHtml}`;
    //let empPayrollList=createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
        innerHtml=`${innerHtml}
    <tr>
        <td><img class="profile" alt="" 
            src="${empPayrollData._profilePic}">
        </td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        </td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img id="${empPayrollData._id}" onclick="remove(this)" 
                src="../assets/deleteLogo.png" alt="delete">
            <img id="${empPayrollData._id}" onclick="update(this)"
                src="../assets/EditIcon.png"alt="edit">
        </td>
    </tr>

    `;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}

const createEmployeePayrollJSON=()=>{
         let empPayrollListLocal=[
            {
                 _name:'Viraj Jadhav',
                 _gender:'male',
                 _department:[
                     'Engineering',
                     'Finance'
                ],
                 _salary:'500000',
                 _startDate:'20 Aug 2020',
                 _note:'',
                 _id: new Date().getTime(),
                 _profilePic: '../assets/passport2.jpg'
            },
            {
                 _name:'Anuja Shelar',
                 _gender:'female',
                 _department:[
                     'Sales'
            ],
                 _salary:'400000',
                 _startDate:'29 Oct 2019',
                 _note:'',
                 _id: new Date().getTime() + 1,
                 _profilePic: '../assets/passport1.jpg'
            },
        ];
         return empPayrollListLocal;
}


const getDeptHtml=(deptList)=>{
    let deptHtml='';
    for(const dept of deptList){
        deptHtml=`${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

