import React from 'react'
import Link from 'next/link';
const BlogGridMain = (props) => {
    const { blogID, blogImage, blogTitle, blogPublishedDate } = props;
    const imageSrc = blogImage && blogImage.startsWith('http') ? blogImage : `assets/images/blog/${blogImage || '01.png'}`;
    return (
        <>
            <div className="single-blog-one-wrapper">
                <div className="thumbnail">
                    <img src={imageSrc} alt={blogTitle || 'Blog post'} />
                    <div className="blog-badge">
                        <span>{blogPublishedDate ? blogPublishedDate : 'Hadi Consultant'}</span>
                    </div>
                </div>
                <div className="blog-content">
                    <p>
                        <span>Latest Insights </span>/ by Hadi Consultant
                    </p>
                    <Link href={`/blog/${blogID}`}>
                        <h5 className="title">
                            {blogTitle ? blogTitle : 'How to growing your business'}
                        </h5>
                    </Link>
                    <Link
                        className="rts-read-more btn-primary"
                        href={`/blog/${blogID}`}
                    >
                        <i className="far fa-arrow-right" />
                        Read More
                    </Link>
                </div>
            </div>
        </>
    )
}
export default BlogGridMain