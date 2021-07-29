import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

function App() {
  const Numbers = [1,2,3,4,5];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Fruit2 />
      <Fruit3 />
      <Fruit4 />
      <Fruitbis />
      <Content />
      <Test />
      <Fruitbis2 />
      <Fruitbis3 />
      <Fruitbis4 />
      <Fruitbis5 />
      <Fruitprop type="banane" poids="10" />
      <Fruitprop2 type="goyave" poids="20" />
      <Fruitprop3 type="mangue" poids="5">
        vraiment très bon !
      </Fruitprop3>
      <Hello />
      <Fortmatname nom="Febrissy" prenom="Samuel" />
      <Exercice02 />
      <Fruits />
      <User />
      <Counter />
      <Nblist tab = {Numbers}/>
      </header>
    </div>
  );
}

class Fruit2 extends Component {
  render() {
    return <div>Je suis le fruits des classes</div>;
  }
}

class Fruit3 extends Component {
  render() {
    return (
      <div>
        <h1>Je suis le fruits des classes</h1>
        <p>J'adore les pommes</p>
      </div>
    );
  }
}

const Fruit4 = () => {
  return <div>Je suis le fruit1</div>;
};

function Fruitbis() {
  return <div>Je suis le fruit2</div>;
}

class Content extends Component {
  render() {
    return React.createElement("div", null, "Contenu");
  }
}

/*LANGAGE LOURD JSX recommandé*/

class Test extends Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("div", null, "Mon premier H1")
    );
  }
}

/*JSX on mélange du JS avec du HTML*/

function Fruitbis2() {
  const name = "mort de rire";
  return <div>Je suis {name}</div>;
}

function Fruitbis3() {
  const name = "content";
  return <div>Je suis {name ? name : " triste"}</div>;
}

function Fruitbis4() {
  const name = ["une pomme", "une fraise", "une banane"];
  return (
    <div>
      
      Je suis
      {name.map((nom) => (
        <p key = {nom.toString()}>{nom}</p>
      ))}
    </div>
  );
}

const Fruitprop = (props) => {
  return (
    <div>
      
      Je suis {props.type} et de poids {props.poids}
    </div>
  );
};

const Fruitprop2 = ({ type, poids }) => {
  return (
    <div>
      
      Je suis {type} et de poids {poids}
    </div>
  );
};

const Fruitprop3 = ({ type, poids, children }) => {
  return (
    <div>
      
      Je suis {type} et de poids {poids} et je suis {children}
    </div>
  );
};

function Fruitbis5() {
  const name = "un abricot";
  if (name) {
    return <div> Je suis {name}</div>;
  } else {
    return <div> Je suis un fruit inconnu</div>;
  }
}

/* Pour ajouter une class à une div se sera className */

const TextFruit = () => {
  return <p>Hello</p>;
};

const NameFruit = () => {
  var user = "je suis une pêche";
  return <span>{user}</span>;
};

const Hello = function () {
  return (
    <div>
      <TextFruit />
      <NameFruit />
    </div>
  );
};

function Fortmatname({ nom, prenom }) {
  const user = {
    nom: nom,
    prenom: prenom
  };
  return (
    <h1>
      Mon nom est {user.nom}, et mon prénom est {user.prenom}
    </h1>
  );
}

function Exercice02() {
  const name = ["Pomme", "Pêche", "Poire", "Abricot"];
  return (
    <ul>
      
      Je suis une
      {name.map((nom) => (
        <li key = {nom.toString()}>{nom}</li>
      ))}
    </ul>
  );
}

class Fruits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        {
          type: "pomme",
          poids: "100"
        },
        {
          type: "fraise",
          poids: "10"
        }
      ],
      legume: "courgette"
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        Je suis un fruit de type {this.state.fruits[0].type} et je pèse
        {this.state.fruits[0].poids}
        <br />
        <button onClick={this.changeFruits}>Click to change</button>
      </div>
    );
  }

  changeFruits = () => {
    this.setState({
      fruits: [
        {
          type: "poire",
          poids: "50"
        },
        {
          type: "abricot",
          poids: "600"
        }
      ]
    });
  };
}

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Samuel Febrissy",
      age: "21"
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        Je m'appelle {this.state.name} et j'ai {this.state.age} ans
        <br />
        <button onClick={this.changeData}>Click to change</button>
      </div>
    );
  }

  changeData = () => {
    this.setState({
      name: "Tiphaine Olivia Febrissy",
      age: "10"
    });
  };
}

class Counter extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    count : 0
    }
    // Méthode Binding
    this.handlesSomething = this.handlesSomething.bind(this);
  };
  render() {
    return (
      <div> 
      <p>Exercice02 - Compteur</p>
      <p>{this.state.count}</p>   
      <br />
      <button onClick={this.handlesSomething}>+</button>
    </div>
    )
  };

  // handlesSomething = () =>{ avec le binding plus besoin de la fonction fléchée
  handlesSomething (){
    this.setState((state) => {
      return{
        count : state.count + 1
      }
    })
    this.setState((state) => {
      return{
        count : state.count + 1
      }
    })
    this.setState((state) => {
      return{
        count : state.count + 1
      }
    })
  }
}

function Nblist({tab}){
  return(
    <ul>
      {tab.map((nombre => (<li key = {nombre.toString()}>{nombre}</li>)))}
    </ul>
  )
}

export default App;
