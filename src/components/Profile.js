import React from 'react';
import {Table} from 'reactstrap';
import profile from "./profile.json";

class Profile extends React.Component {
  render() {
    return <div className="page">
      <h2>Technical Skills</h2>
      <Table striped bordered hover>
      <thead>
          <tr>
              <th>Area</th>
              <th>Detail</th>
          </tr>
      </thead>
      <tbody>
          {
            profile.skills.map((skill, idx) => {
              return (
                <tr key={idx}>
                  <td>{skill.name}</td>
                  <td>
                      <ul>
                        {
                          skill.items.map((item, _idx) => {
                              return <li key={_idx}>{item}</li>
                          })
                        }
                      </ul>
                  </td>
                </tr>
              );
            })
          }

      </tbody>
    </Table>
  </div>
  }
}

export default Profile;