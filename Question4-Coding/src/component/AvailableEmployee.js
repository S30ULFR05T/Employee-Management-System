import React from "react";
import TemporaryAPI from '../TemporaryAPI.json'



const AvailableEmployee = () => {
        const employees = TemporaryAPI.employees
  return (
    <div className="d-flex justify-content-center align-items-center my-4 rounded">
      <div
        style={{
          height: "80vh",
          width: "50vw",
          border: "2px solid black",
          overflow: "auto",
        }}
        className="rounded"
      >
        <h2
          className="text-center my-3"
          style={{ textDecoration: "underline" }}
        >
          Employe's List
        </h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                S.No
              </th>
              <th scope="col" className="text-center">
                Name
              </th>
              <th scope="col" className="text-center">
                Domain Work
              </th>
              <th scope="col" className="text-center">
                Availablity
              </th>
              <th scope="col" className="text-center">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
                {employees.map((employe, index)=>{   // employe is used to get data from named 'employe' and 'index' is used to to count and provide S.no in output screen, starts with 0
                return <tr>
                <th scope="row" className="text-center">
                  {index+1}
                </th>
                <td className="text-center">{employe.name}</td>
                <td className="text-center">{employe.domain}</td>
                <td className="text-center">{employe.availability}</td>
                <td className="text-center">
                    <i className="fa fa-edit" style={{ cursor: "pointer" }}></i>
                  </td>
              </tr>
})}
{/*             
            <tr>
              <th scope="row" className="text-center">
                2
              </th>
              <td className="text-center">Rohit Kumar</td>
              <td className="text-center">Frontend Developer</td>
              <td className="text-center">Available</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                3
              </th>
              <td className="text-center">Deepak singh</td>
              <td className="text-center">Testing</td>
              <td className="text-center">Unavailable</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                4
              </th>
              <td className="text-center">Saurabh Kumar</td>
              <td className="text-center">Deployment</td>
              <td className="text-center">Available</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                5
              </th>
              <td className="text-center">Suraj Kumar</td>
              <td className="text-center">Frontend Developer</td>
              <td className="text-center">Unavailable</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                6
              </th>
              <td className="text-center">Rohit Kumar</td>
              <td className="text-center">Testing</td>
              <td className="text-center">Available</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                7
              </th>
              <td className="text-center">Suraj Kumar</td>
              <td className="text-center">Deployment</td>
              <td className="text-center">Unavailable</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                8
              </th>
              <td className="text-center">Rohit Kumar</td>
              <td className="text-center">Backend Developer</td>
              <td className="text-center">Available</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                1
              </th>
              <td className="text-center">Suraj Kumar</td>
              <td className="text-center">Backend Developer</td>
              <td className="text-center">Unavailable</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                2
              </th>
              <td className="text-center">Rohit Kumar</td>
              <td className="text-center">Frontend Developer</td>
              <td className="text-center">Available</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                3
              </th>
              <td className="text-center">Deepak singh</td>
              <td className="text-center">Testing</td>
              <td className="text-center">Unavailable</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                4
              </th>
              <td className="text-center">Saurabh Kumar</td>
              <td className="text-center">Deployment</td>
              <td className="text-center">Available</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                5
              </th>
              <td className="text-center">Suraj Kumar</td>
              <td className="text-center">Frontend Developer</td>
              <td className="text-center">Unavailable</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                6
              </th>
              <td className="text-center">Rohit Kumar</td>
              <td className="text-center">Testing</td>
              <td className="text-center">Available</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                7
              </th>
              <td className="text-center">Suraj Kumar</td>
              <td className="text-center">Deployment</td>
              <td className="text-center">Unavailable</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                8
              </th>
              <td className="text-center">Rohit Kumar</td>
              <td className="text-center">Backend Developer</td>
              <td className="text-center">Available</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvailableEmployee;
