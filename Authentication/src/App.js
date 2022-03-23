import './App.css';
import accountlogin from './accountlogin.png';
import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import swal from "sweetalert";

function App(){
  const [user,setUser] = useState('')
  const [pass,setPass] = useState('') 

  const validation = (e) => {
    e.preventDefault()
    if (user == 'psk@gmail.com' && pass == 11111) {
      swal("Successful Login!!","Welcome Sri","success")
    } else {
      swal("Oops!! Wrong Credentials","Please try again","error")
    }
  }
  return (
    <div className="App">
      <div className="App-body">
        <h1>Authentication Portal</h1>
            <div className="row">
                <div className="col-md-6">
                    <img className="float-left" src={accountlogin} width="400"/>
                </div>
                <div className="col-md-6 my-auto bg-dark p-5 rounded">
                    <form onSubmit={validation}>
                        <div className="mb-3">
                            <label>Email Address</label>
                            <input className="form-control" value={user} type="email" placeholder="Enter ur email" onChange={(e)=> setUser(e.target.value)} />
                            
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" value={pass} className="form-control" placeholder="Enter ur password" onChange={(e)=> setPass(e.target.value)}/>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
      </div>     
    </div>
  )
}

export default App;
