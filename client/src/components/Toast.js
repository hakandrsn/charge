import React from 'react'

const Toast = ({id,time,title,content}) => {
    return (
        <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex:11}}>
            <div id={id} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="..." className="rounded me-2" alt="..."/>
                        <strong className="me-auto">{title}</strong>
                        <small>{time}</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                   {content}
                </div>
            </div>
        </div>
    )
}

export default Toast