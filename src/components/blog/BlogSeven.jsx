import React from 'react'
import  Link from 'next/link';
import post from '../../data/Posts.json';
import BlogSevenMain from './BlogSevenMain';

function BlogSeven() {
    return (
        <div>
            {/* rts blog area start */}
            <div className="rts-blog-area rts-section-gapBottom" id='blog-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area-style-six text-center">
                                <div className="pre-title">
                                    <img
                                        src="assets/images/banner/shape/pre-title.png"
                                        alt="pre-title"
                                    />
                                    <span className="pre">Business Progress</span>
                                    <img
                                        className="two"
                                        src="assets/images/banner/shape/pre-title.png"
                                        alt="pre-title"
                                    />
                                </div>
                                <h2 className="title">Latest Blog Posts</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--10 g-5">
                        {post.map((data, index) => {
                            return (
                                <div key={index} className="col-lg-4">
                                    <div className="rts-blog-area-style-seven">
                                        {
                                            <BlogSevenMain
                                                blogCategory={data.category}
                                                blogID={data.id}
                                                blogImage={`${data.image}`}
                                                authorImg={`${data.authorImg}`}
                                                blogTitle={data.title}
                                                blogAuthor={data.author}
                                                blogPublishedDate={data.publishedDate}
                                            />
                                        }
                                    </div>

                                </div>
                            )
                        }).slice(26, 29)}
                    </div>
                </div>
            </div>
            {/* rts blog area edn */}

        </div>
    )
}

export default BlogSeven