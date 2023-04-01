import React from 'react'


export default class Backdrop extends React.Component {
  render(){
    return(
      <div className="backdrop" onClick={() => { document.querySelector('html').classList.remove('modal-open');
        this.props.close()}} />
    )
  }
}