import React from "react";

import { Link } from "react-router-dom";



class Addstudent extends React.Component {

    state = {
        Name: "",
        Age: "",
        Course: "",
        Batch: "",
        Edit: "",


    }
    eventHandler = (event) => {


        this.setState({
            [event.target.name]: event.target.value,
        })

    }
    render() {

        var tempObj = {
            Name: this.state.Name,
            Age: this.state.Age,
            Course: this.state.Course,
            Batch: this.state.Batch,

        }
        console.log(tempObj);

        return (

            <div className="studentthree">
                <div className="studentfour">

                    <div className="five">

                        <label >Name :</label>
                        <input type="text" id="name" name="Name" className="six" onChange={this.eventHandler.bind(this)}></input>

                        <label>Age :</label>
                        <input type="number" id="age" className="six" name="Age" onChange={this.eventHandler.bind(this)}></input>

                    </div>
                    <div className="seven">


                        <label>Course :</label>
                        <input type="text" id="course" className="six" name="Course" onChange={this.eventHandler.bind(this)}></input>

                        <label>Batch :</label>
                        <input type="text" id="batch" className="six" name="Batch" onChange={this.eventHandler.bind(this)}></input>



                    </div>

                </div>

                <div className="btnfull">


                    <Link to="/student" className="btn2"  >Cancel</Link>

                    <Link to="/student" className="btn3" state={{ newData: tempObj }}>Submit</Link>

                </div>

            </div>

        )
    }

}

export default Addstudent;