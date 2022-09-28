import React from "react";
// import "./index.css";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = { apiResponse: "" };

  }
  callAPI() {
    fetch("https://vunesp.herokuapp.com/person")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }))


  }
  componentDidMount() {
    this.callAPI();

  }


  handleClick = userId => {
    // console.log("Mostra")
    const requestOptions = {
      method: 'DELETE'
    };

    fetch("https://vunesp.herokuapp.com/person/" + userId, requestOptions).then((response) => {
      console.log("Mostra" + response)

      return response.json();
    }).then((result) => {
    });
  }
  render() {
    // transforma os objetos em array
    const concursos = Object.values(this.state.apiResponse);




    return (
      <div>
        <Header />
        <div className='container'>
          <h1>ADMIN PAINEL</h1>

          <div className="stock-container arrumacada">
            <div className='flex'>

              {concursos.map((data, key) => {
                return (


                  <div className='btn' key={key}>

                    <h1>{data.type}</h1>

                    <h2><span className="linebotton"><div className="flex-space linebotton"><span>{data.title}</span><span className="local">{data.estado}</span></div></span></h2>

                    <p className="lightlinebotton"> {data.vaga}</p>
                    <p className="lightlinebotton">{data.escolaridade}</p>

                    <p className="lightlinebotton"><b>SALÁRIO:</b> R$ <b>{data.remu}</b></p>

                    <p className="specvagas"><div><span className="linetop"><span className="vagas">Vagas: {data.num} </span><b>INSCRIÇÕES:</b><span className={data.status}><i className="bi bi-circle-fill danger"></i></span> {data.onOff} </span></div></p>

                    <p className="desc">  {data.desc}</p>
                    <p>ID: {data._id}</p>
                    <div className="mais">

                      {/* <a onClick={refreshPage()}> */}
                      <button onClick={() => { this.handleClick(data._id) }}>Excluir</button>
                    </div >
                  </div >
                );
              })}
            </div >
          </div >
        </div >
        <Footer />
      </div>
    );

  }

}



export default Admin;


