import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

constructor(props){
  super(props);
  this.state = {
    cats:[]
  }
}

  componentDidMount(){
    fetch(`https://api.thecatapi.com/v1/images/search?format=json&limit=10&page=1`)
    .then(resp=>{
      return resp.json();
    })
    .then(cats=>{
      console.log(cats);
      this.setState({cats});
    })
    .catch(err=>{
      console.error("-->",err);
    })
  }




  render() {
    const {cats} = this.state; 
    return (
      <div className="w-full">
        <header className="flex flex-col w-full text-center">
          <img src={logo} className="h-64" alt="logo" />
          <h1 className="">INTALKS CATS</h1>
        </header>
        <div className="flex flex-wrap">
          {cats.map((cat,i)=>(
            <div key={i} className="w-full p-3 md:w-1/3 lg:w-1/4">
              <div className="w-full rounded shadow-lg">
                <img className="w-full" src={cat.url} /> 
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p className="text-grey-darker text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
