"use client"
import React from 'react'
import Link from 'next/link';

function formatDate(dateStr) {
    if (!dateStr) return { day: '', month: '' };
    const d = new Date(dateStr);
    if (isNaN(d)) return { day: '', month: '' };
    return {
        day: d.getDate().toString(),
        month: d.toLocaleString('default', { month: 'short' })
    };
}

const BlogListMain = ({ blog }) => {
    const { day, month } = formatDate(blog.published_at || blog.created_at);
    const category = blog.wehoware_blog_categories;
    const image = blog.thumbnail || '';
    const title = blog.title || '';
    const excerpt = blog.excerpt || '';

    return (
        <>
            <div className="blog-header">
                <Link className="thumbnail" href={`/blog/${blog.slug}`}>
                    <img
                        src={image}
                        alt={blog.thumbnail_alt || title}
                        style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                        onError={(e) => { e.target.src = 'assets/images/blog/blog-lg-1.jpg'; }}
                    />
                </Link>
                <div className="blog-info">
                    <div className="user">
                        <i className="fal fa-clock" />
                        <span>{blog.read_time ? `${blog.read_time} min read` : 'Blog'}</span>
                    </div>
                    <div className="user">
                        <i className="fal fa-tags" />
                        <span>{category?.name || 'General'}</span>
                    </div>
                </div>
                {day && month && (
                    <div className="date">
                        <h6 className="title">{day}</h6>
                        <span>{month}</span>
                    </div>
                )}
            </div>
            <div className="blog-body">
                <Link href={`/blog/${blog.slug}`}>
                    <h5 className="title">{title}</h5>
                </Link>
                {excerpt && (
                    <p className="disc" style={{ fontSize: '14px', color: '#666', marginTop: '8px', lineHeight: '1.6' }}>
                        {excerpt}
                    </p>
                )}
                <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    {blog.views !== undefined && (
                        <span style={{ fontSize: '12px', color: '#888' }}>
                            <i className="fal fa-eye" /> {blog.views}
                        </span>
                    )}
                    {blog.likes !== undefined && (
                        <span style={{ fontSize: '12px', color: '#888' }}>
                            <i className="fal fa-heart" /> {blog.likes}
                        </span>
                    )}
                    {blog.featured && (
                        <span style={{
                            fontSize: '11px',
                            background: '#DF0A0A',
                            color: '#fff',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            textTransform: 'uppercase',
                            fontWeight: 600
                        }}>
                            Featured
                        </span>
                    )}
                </div>
                {blog.tags && blog.tags.length > 0 && (
                    <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {blog.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} style={{
                                fontSize: '12px',
                                background: '#eee',
                                color: '#555',
                                padding: '2px 8px',
                                borderRadius: '4px'
                            }}>
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
export default BlogListMain