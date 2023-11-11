import React, { Component } from 'react'

export class Newsitem extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div>
        <div className="card">
          <img src={!imageUrl?"https://images.indianexpress.com/2023/10/Srijesh-.jpg?w=750":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-footer text-body-secondary"><small>By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>  
                <a href={newsUrl} target='_blank' rel='noreferrer' className="btn  btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
