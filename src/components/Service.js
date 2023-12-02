import React from "react";

const Service = ({id,className,title,text}) =>{
    return <article className="service" id={id}>
              <span className="service-icon">
                <i className={className}></i>
              </span>
        <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">{text}</p>
        </div>
    </article>;
}
export default  Service;