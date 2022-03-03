import React from 'react';
import MaterialTable from "material-table";
import {Link,useLocation} from "react-router-dom";
// import "./index.css";




const Student=()=>{


    const data=[
        {Name:"abc",Age: "20", Course: "MERN" ,Batch:"October",Change : <Link to="/Addstudent">Edit</Link> },
        {Name:"Def",Age: "21", Course: "MERN" ,Batch:"November",Change : <Link to="/Addstudent" >Edit</Link>},
        {Name:"ghi",Age: "22", Course: "MERN" ,Batch:"December",Change : <Link to="/Addstudent" >Edit</Link>},
        {Name:"jkl",Age: "23", Course: "MERN" ,Batch:"January",Change : <Link to="/Addstudent" >Edit</Link>},
        {Name:"mno",Age: "24", Course: "MERN" ,Batch:"February",Change : <Link to="/Addstudent" >Edit</Link>}
         ]

        const columns=[
            {title : "Name",field: "Name"},
            {title : "Age",field: "Age"},
            {title : "Course",field: "Course"},
         
            {title : "Batch",field: "Batch"},
            {title : "Change" ,field : "Change"}

            
        ]

    var location=useLocation();
    console.log(location.state);

    if(location.state!=null)
    {

    var x=location.state.newData;
    data.push(x);  
    console.log(data); 

    
    }
        return (
           
           <div className="studentone">

           <div className="studenttwo">
                <span className="bold"><h3>Student Details</h3></span>
                <Link to="/Addstudent" className="btn1">Add Students</Link>
            </div>

            <MaterialTable title=""  className="tabel" data={data} columns={columns} options={{search:false, paging:false}} />

             </div>


        )
    
}

export default Student;




















