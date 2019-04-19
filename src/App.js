import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        _id: "5cb14dbecfed565fa7094502",
        index: 0,
        guid: "4ccb1f8b-5963-4170-abdd-3e7fbee8fafb",
        isActive: true,
        balance: "$2,991.38",
        age: 21,
        name: {
          first: "Essie",
          last: "Jackson"
        },
        company: "MUSIX",
        about:
          "Excepteur pariatur occaecat commodo labore. Fugiat elit nostrud laboris adipisicing reprehenderit consectetur culpa labore consectetur. Enim ut sint duis velit reprehenderit. Proident duis veniam duis nulla consequat tempor ea ut eiusmod anim. Labore incididunt dolor non culpa nostrud eiusmod occaecat ad.",
        registered: "Sunday, January 24, 2016 5:46 AM",
        greeting: "Hello, Essie! You have 10 unread messages.",
        favoriteFruit: "apple"
      },
      {
        _id: "5cb14dbe0f280446445a2a27",
        index: 1,
        guid: "95ed254c-87cf-4199-982d-5f4ef54c2fe2",
        isActive: false,
        balance: "$1,238.95",
        age: 36,
        name: {
          first: "Howe",
          last: "Shaw"
        },
        company: "JASPER",
        about:
          "Enim excepteur commodo adipisicing aliquip aute in ipsum dolore qui velit. Adipisicing enim sunt do nostrud. Exercitation occaecat adipisicing qui quis amet ex aliqua consequat. Ut cillum eiusmod sunt irure eu duis do veniam ut irure in adipisicing laboris.",
        registered: "Saturday, January 4, 2014 6:50 AM",
        greeting: "Hello, Howe! You have 10 unread messages.",
        favoriteFruit: "banana"
      },
      {
        _id: "5cb14dbe6e509641fcea633a",
        index: 2,
        guid: "c7036c56-2882-4afb-82d8-f381c7015e15",
        isActive: true,
        balance: "$1,875.11",
        age: 37,
        name: {
          first: "Kate",
          last: "Molina"
        },
        company: "PERMADYNE",
        about:
          "Proident sit veniam velit eiusmod occaecat et laboris proident ex proident adipisicing eiusmod. Aliqua labore elit laborum excepteur officia voluptate sint in. Ad amet adipisicing reprehenderit eiusmod laborum do ullamco labore proident consectetur qui do quis. Elit minim officia consectetur in nisi labore tempor irure non esse excepteur quis veniam. Ullamco excepteur et tempor aute ad fugiat est tempor.",
        registered: "Saturday, September 5, 2015 11:12 AM",
        greeting: "Hello, Kate! You have 5 unread messages.",
        favoriteFruit: "banana"
      },
      {
        _id: "5cb14dbea3663457dc6170fb",
        index: 3,
        guid: "a7c103e3-dbb7-4940-8eff-b6f6853af864",
        isActive: false,
        balance: "$1,563.97",
        age: 21,
        name: {
          first: "Willa",
          last: "Keith"
        },
        company: "PIVITOL",
        about:
          "Reprehenderit incididunt culpa magna qui Lorem veniam excepteur anim. Velit quis ullamco minim laboris enim qui exercitation. Consectetur do fugiat enim ullamco ad do deserunt. Ullamco ea elit occaecat dolor sit tempor irure velit nisi. Eu et tempor ipsum ipsum adipisicing ipsum velit anim esse ipsum aliquip. Anim culpa veniam consequat enim pariatur voluptate est. Laboris ut qui anim ipsum exercitation aliquip veniam voluptate dolore fugiat adipisicing ipsum deserunt.",
        registered: "Thursday, January 5, 2017 8:16 AM",
        greeting: "Hello, Willa! You have 5 unread messages.",
        favoriteFruit: "apple"
      },
      {
        _id: "5cb14dbec3d40856d34a8035",
        index: 4,
        guid: "c4210f19-8332-4021-86f7-10e3de7062e0",
        isActive: true,
        balance: "$3,646.84",
        age: 27,
        name: {
          first: "Juarez",
          last: "Fischer"
        },
        company: "AMTAP",
        about:
          "Esse eu sunt nulla fugiat ullamco culpa consectetur eu in. Aliqua aliqua exercitation veniam reprehenderit amet irure laboris. Ex deserunt aute irure commodo incididunt magna exercitation do est esse fugiat quis duis culpa. Dolore exercitation velit dolor deserunt nulla proident ullamco reprehenderit veniam velit fugiat velit dolor excepteur.",
        registered: "Wednesday, January 13, 2016 11:21 PM",
        greeting: "Hello, Juarez! You have 8 unread messages.",
        favoriteFruit: "apple"
      },
      {
        _id: "5cb14dbed3fddb0bbed5cb88",
        index: 5,
        guid: "ee95fb7f-d0af-4b5f-b3c2-301f24fc07a5",
        isActive: true,
        balance: "$3,080.48",
        age: 38,
        name: {
          first: "Workman",
          last: "Tillman"
        },
        company: "MOTOVATE",
        about:
          "Commodo qui exercitation ipsum cupidatat occaecat est cupidatat ex quis proident. Duis enim magna non do nostrud laboris adipisicing quis aute nulla ad magna excepteur reprehenderit. Laborum laboris proident laboris velit laborum ullamco voluptate occaecat. Lorem eiusmod do sit mollit pariatur culpa. Et duis ad amet laborum velit Lorem incididunt sit. Minim in nulla ex et esse est culpa ad proident aute cupidatat laboris. Est voluptate et ullamco tempor et deserunt minim dolore et.",
        registered: "Friday, February 22, 2019 5:53 AM",
        greeting: "Hello, Workman! You have 5 unread messages.",
        favoriteFruit: "banana"
      },
      {
        _id: "5cb14dbef169c85526b9138d",
        index: 6,
        guid: "8d67e285-8eb7-4fc4-9225-91a3cdbeefe6",
        isActive: true,
        balance: "$2,120.68",
        age: 31,
        name: {
          first: "Rojas",
          last: "Downs"
        },
        company: "KINETICUT",
        about:
          "Exercitation nulla ipsum id officia reprehenderit consectetur deserunt ullamco non aliqua anim. Enim in incididunt incididunt esse dolore proident duis amet mollit elit. Eu occaecat cillum eu officia tempor proident id magna consectetur magna cillum laboris eu. Quis pariatur sunt excepteur ex ex quis aliqua.",
        registered: "Tuesday, October 25, 2016 7:34 AM",
        greeting: "Hello, Rojas! You have 10 unread messages.",
        favoriteFruit: "apple"
      },
      {
        _id: "5cb14dbe29568c0245d3f3bb",
        index: 7,
        guid: "b619a8c3-1692-4f33-abd2-f491be4873ea",
        isActive: false,
        balance: "$3,219.93",
        age: 29,
        name: {
          first: "Wyatt",
          last: "May"
        },
        company: "FLYBOYZ",
        about:
          "Adipisicing nulla ipsum duis culpa Lorem ea exercitation. Consequat sit ea officia labore nisi eiusmod consequat. Ut eiusmod magna aute occaecat deserunt. Cillum deserunt mollit anim in eu occaecat irure anim officia excepteur eu excepteur dolore incididunt.",
        registered: "Sunday, March 23, 2014 6:44 PM",
        greeting: "Hello, Wyatt! You have 5 unread messages.",
        favoriteFruit: "banana"
      },
      {
        _id: "5cb14dbe307d2f6812c68347",
        index: 8,
        guid: "89e0198f-b698-4089-a6a9-90020da55c9e",
        isActive: true,
        balance: "$3,794.55",
        age: 24,
        name: {
          first: "May",
          last: "Ramirez"
        },
        company: "CENTICE",
        about:
          "Veniam voluptate voluptate reprehenderit dolor. Commodo veniam et dolore minim nisi reprehenderit. Ex consectetur est labore cillum reprehenderit reprehenderit minim consectetur adipisicing ex commodo veniam. Eu sunt esse nulla nisi commodo duis occaecat deserunt dolore proident esse incididunt magna eiusmod. Excepteur anim ut laborum tempor excepteur occaecat pariatur magna do. Consectetur irure ad aute irure enim in incididunt occaecat ad. Proident est consequat dolore officia dolore et.",
        registered: "Wednesday, January 31, 2018 11:47 AM",
        greeting: "Hello, May! You have 10 unread messages.",
        favoriteFruit: "banana"
      },
      {
        _id: "5cb14dbec9c7be35c0e31a7c",
        index: 9,
        guid: "8362a5ef-bcf7-4fc6-91dd-9b5ada3964a0",
        isActive: false,
        balance: "$3,388.65",
        age: 40,
        name: {
          first: "Vazquez",
          last: "Horton"
        },
        company: "MALATHION",
        about:
          "Anim Lorem reprehenderit fugiat irure irure. Eu sunt eiusmod reprehenderit enim anim dolor do esse laboris et adipisicing sint aliquip. Velit esse sunt sunt excepteur occaecat ut ipsum. Duis ullamco elit ea eu anim excepteur anim et sunt duis.",
        registered: "Sunday, March 3, 2019 2:53 PM",
        greeting: "Hello, Vazquez! You have 5 unread messages.",
        favoriteFruit: "apple"
      }
    ]
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Todos todos={this.state.todos} />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
