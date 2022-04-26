import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Plan from './components/plan';



class App extends Component {
  state= {
    items: [],
    text: ''
  }
  handleChange = e => {
    this.setState({text: e.target.value})
  }
  handleAdd = e => {
    if(this.state.text !== ''){
      const items = [...this.state.items, this.state.text]
      this.setState({items: items, text: ''})
    }
  }
  handleDelete = id =>{
    console.log('Deleted', id);
    const oldItems =[...this.state.items]
    console.log('oldItems', oldItems)
    const items = oldItems.filter((element, i)=>{
      return i !== id
    })
    console.log('Newitems', items)
    this.setState({items:items})
  }
  render() {
    return (
      <div className='container-fluid my-5'> 
      <div className='row'>
        <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
          <h1 className='text-center'>Today's Plan</h1>
          <div className='row'>
            <div className='col-9'>
              <input type='text' className='form-control' placeholder='Plan for today' value={this.state.text} onChange={this.handleChange}/>
            </div>
            <div className='col-2'>
              <button className='btn btn-warning fw-bold px-5' onClick={this.handleAdd}>Add</button>
            </div>
            <div className='container'>
              <ul className='list-unstyled row m-5'>
               {
               this.state.items.map((value, i) =>{
                 return <Plan key={i} id={i} value={value} sendData={this.handleDelete}/>
               })
               }
              </ul>
              {/* <ul className='list-unstyled row m-5'>
                <Plan p={this.state.items} sendData={this.handleDelete}/>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}


export default App;
