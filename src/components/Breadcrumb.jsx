import React from 'react';

const Breadcrumb = ({ title, breadcrumbs }) => {
    return (
        <div className="rts-breadcrumb-area breadcrumb-bg bg_image">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1">
                        <h1 className="title">{title}</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="bread-tag">
                            {breadcrumbs.map((breadcrumb, index) => (
                                <span key={index}>
                                    {breadcrumb.link ? (
                                        <a href={breadcrumb.link}>{breadcrumb.label}</a>
                                    ) : (
                                        <span className="active">{breadcrumb.label}</span>
                                    )}
                                    {index < breadcrumbs.length - 1 && <span> / </span>}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
