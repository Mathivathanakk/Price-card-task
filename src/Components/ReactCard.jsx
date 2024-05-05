import React from 'react';
import "./ReactCard.css"

const ReactCard = ({pricetag}) => {
    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pricetag.map((ele, i) => {
            return (
              <div key={i}>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      {/* title */}
                      <div className="card-subtitle text-muted text-center">{ele.title}</div>
                      {/* price */}
                      <div className="card-title text-center"><h1>${ele.price}/month</h1></div>
                      <hr/>
                      {/* list offer */}
                      <ul className="list" type="none">
                        <li className="list-item "><span className={ele.userEnable}><i className={ele.usericon}></i>{ele.user}</span></li>
                        <li className="list-item "><span className={ele.storageEnable}><i className={ele.storageIcon}></i>{ele.storage}</span></li>
                        <li className="list-item "><span className={ele.publicEnable}><i className={ele.publicIcon}></i>{ele.public}</span></li>
                        <li className="list-item "><span className={ele.accessEnable}><i className={ele.accessIcon}></i>{ele.access}</span></li>
                        <li className="list-item"><span className={ele.privateEnable}><i className={ele.privateIcon}></i>{ele.private}</span></li>
                        <li className="list-item"><span className={ele.supportEnable}><i className={ele.supportIcon}></i>{ele.support}</span></li>
                        <li className="list-item"><span className={ele.domainEnable}><i className={ele.domainIcon}></i>{ele.domain}</span></li>
                        <li className="list-item"><span className={ele.reportsEnable}><i className={ele.reportsIcon}></i>{ele.reports}</span></li>
                      </ul>
                      {/* button */}
                      <div className='d-grid'>
                      <button className="btn text-uppercase"type="button">Button</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    
    );
};

export default ReactCard;