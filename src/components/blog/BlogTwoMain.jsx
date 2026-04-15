import React from 'react'
import Link from 'next/link';

const BlogTwoMain = (props) => {
    const { blogID, blogImage, blogTitle, blogPublishedDate } = props;
    return (
        <>
            <Link href={`/blog-list/${blogID}`} className="thumbnail">
                <img src={`assets/images/blog/${blogImage}`} alt="Business_blog" />
            </Link>
            <div className="body">
                <span>Business Solution / by David Dolean</span>
                <Link href={`/blog-list/${blogID}`}>
                    <h4 className="title">
                        {blogTitle ? blogTitle : 'How to growing your business'}
                    </h4>
                </Link>
                <Link className="rts-read-more btn-primary" href={`/blog/${blogID}`}>
                    <i className="far fa-arrow-right" />
                    Read More
                </Link>
            </div>
        </>

    )
}

export default BlogTwoMain