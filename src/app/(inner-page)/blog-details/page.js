"use client"
import Link from 'next/link';

import { useParams } from 'next/navigation'
import HeaderOne from "@/components/header/HeaderOne";

import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
import post from '@/data/Posts.json';

function BlogGrid() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Blog Details' }
    ];
    const { id } = useParams();
    const blogPost = post.find(post => post.id === parseInt(id));

    if (!blogPost) {
        return <div>Post not found!</div>
    }
    return (
        <div className=''>

            <HeaderOne />

            <Breadcrumb title="Blog Details" breadcrumbs={breadcrumbs} />

            {/* rts blog mlist area */}
            <div className="rts-blog-list-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        {/* rts blo post area */}
                        <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                            {/* single post */}
                            <div className="blog-single-post-listing details mb--0">
                                <div className="thumbnail">
                                    <img src={`/assets/images/blog/${blogPost.bannerImg}`}
                                        alt={blogPost.title} />
                                </div>
                                <div className="blog-listing-content">
                                    <div className="user-info">
                                        {/* single info */}
                                        <div className="single">
                                            <i className="far fa-user-circle" />
                                            <span>by David Smith</span>
                                        </div>
                                        {/* single infoe end */}
                                        {/* single info */}
                                        <div className="single">
                                            <i className="far fa-clock" />
                                            <span>by David Smith</span>
                                        </div>
                                        {/* single infoe end */}
                                        {/* single info */}
                                        <div className="single">
                                            <i className="far fa-tags" />
                                            <span>by David Smith</span>
                                        </div>
                                        {/* single infoe end */}
                                    </div>
                                    <h3 className="title">{blogPost.title}</h3>
                                    <p className="disc para-1">
                                        Collaboratively pontificate bleeding edge resources with
                                        inexpensive methodologies globally initiate multidisciplinary
                                        compatible architectures pidiously repurpose leading edge growth
                                        strategies with just in time web readiness communicate timely
                                        meta services
                                    </p>
                                    <p className="disc">
                                        Onubia semper vel donec torquent fusce mauris felis aptent
                                        lacinia nisl, lectus himenaeos euismod molestie iaculis interdum
                                        in laoreet condimentum dictum, quisque quam risus sollicitudin
                                        gravida ut odio per a et. Gravida maecenas lobortis suscipit mus
                                        sociosqu convallis, mollis vestibulum donec aliquam risus sapien
                                        ridiculus, nulla sollicitudin eget in venenatis. Tortor montes
                                        platea iaculis posuere per mauris, eros porta blandit curabitur
                                        ullamcorper varius
                                    </p>
                                    {/* quote area start */}
                                    <div className="rts-quote-area text-center">
                                        <h5 className="title">
                                            “Placerat pretium tristique mattis tellus accuan metus
                                            dictumst vivamus odio nulla fusce auctor into suscipit
                                            habitasse class congue potenti iaculis”
                                        </h5>
                                        <Link to={'#'} className="name">
                                            Daniel X. Horrar
                                        </Link>
                                        <span>Author</span>
                                    </div>
                                    {/* quote area end */}
                                    <p className="disc">
                                        Ultrices iaculis commodo parturient euismod pulvinar donec cum
                                        eget a, accumsan viverra cras praesent cubilia dignissim ad
                                        rhoncus. Gravida maecenas lobortis suscipit mus sociosqu
                                        convallis, mollis vestibulum donec aliquam risus sapien
                                        ridiculus, nulla sollicitudin eget in venenatis. Tortor montes
                                        platea iaculis posuere per mauris, eros porta blandit curabitur
                                        ullamcorper varius, nostra ante risus egestas suscipit. Quisque
                                        interdum nec parturient facilisis nunc ac quam, ad est cubilia
                                        mauris himenaeos nascetur vestibulum.
                                    </p>
                                    <div className="row g-5">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="thumbnail details">
                                                <img
                                                    src="/assets/images/blog/details/01.jpg"
                                                    alt="finbiz_buseness"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="thumbnail details">
                                                <img
                                                    src="/assets/images/blog/details/02.jpg"
                                                    alt="finbiz_buseness"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="title mt--40 mt_sm--20">
                                        Ultimate Business Strategy Solution
                                    </h4>
                                    <p className="disc mb--25">
                                        Gravida maecenas lobortis suscipit mus sociosqu convallis,
                                        mollis vestibulum donec aliquam risus sapien ridiculus, nulla
                                        sollicitudin eget in venenatis. Tortor montes platea iaculis
                                        posuere per mauris, eros porta blandit curabitur ullamcorper
                                        varius nostra ante risus egestas.
                                    </p>
                                    <div className="row align-items-center">
                                        <div className="col-lg-5">
                                            <div className="thumbnail details mb_sm--15">
                                                <img
                                                    src="/assets/images/blog/details/03.jpg"
                                                    alt="finbiz_buseness"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="check-area-details">
                                                {/* single check */}
                                                <div className="single-check">
                                                    <i className="far fa-check-circle" />
                                                    <span>How will activities traditional manufacturing</span>
                                                </div>
                                                {/* single check End */}
                                                {/* single check */}
                                                <div className="single-check">
                                                    <i className="far fa-check-circle" />
                                                    <span>All these digital and projects aim to enhance</span>
                                                </div>
                                                {/* single check End */}
                                                {/* single check */}
                                                <div className="single-check">
                                                    <i className="far fa-check-circle" />
                                                    <span>I monitor my software that takes screenshots</span>
                                                </div>
                                                {/* single check End */}
                                                {/* single check */}
                                                <div className="single-check">
                                                    <i className="far fa-check-circle" />
                                                    <span>Laoreet dolore niacin sodium glutimate</span>
                                                </div>
                                                {/* single check End */}
                                                {/* single check */}
                                                <div className="single-check">
                                                    <i className="far fa-check-circle" />
                                                    <span>Minim veniam sodium glutimate nostrud</span>
                                                </div>
                                                {/* single check End */}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="disc mt--30">
                                        Cubilia hendrerit luctus sem aptent curae gravida maecenas
                                        eleifend nunc nec vitae morbi sodales fusce tristique aenean
                                        habitasse mattis sociis feugiat conubia mus auctor praesent urna
                                        tincidunt taciti dui lobortis nullam. Mattis placerat feugiat
                                        ridiculus sed a per curae fermentum aenean facilisi, vitae urna
                                        imperdiet ac mauris non inceptos luctus hac odio.
                                    </p>
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            {/* tags details */}
                                            <div className="details-tag">
                                                <h6>Tags:</h6>
                                                <button>Services</button>
                                                <button>Business</button>
                                                <button>Growth</button>
                                            </div>
                                            {/* tags details End */}
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="details-share">
                                                <h6>Share:</h6>
                                                <button>
                                                    <i className="fab fa-facebook-f" />
                                                </button>
                                                <button>
                                                    <i className="fab fa-twitter" />
                                                </button>
                                                <button>
                                                    <i className="fab fa-instagram" />
                                                </button>
                                                <button>
                                                    <i className="fab fa-linkedin-in" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="author-area">
                                        <div className="thumbnail details mb_sm--15">
                                            <img
                                                src="/assets/images/blog/details/author.jpg"
                                                alt="finbiz_buseness"
                                            />
                                        </div>
                                        <div className="author-details team">
                                            <span>Brand Designer</span>
                                            <h5>Angelina H. Dekato</h5>
                                            <p className="disc">
                                                Nullam varius luctus pharetra ultrices volpat facilisis
                                                donec tortor, nibhkisys habitant curabitur at nunc nisl
                                                magna ac rhoncus vehicula sociis tortor nist hendrerit
                                                molestie integer.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="replay-area-details">
                                        <h4 className="title">Leave a Reply</h4>
                                        <form action="#">
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" placeholder="Select Topic" />
                                                    <textarea defaultValue={""} />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <Link className="rts-btn btn-primary" to={'#'}>
                                        Submit Message
                                    </Link>
                                </div>
                            </div>
                            {/* single post End*/}
                        </div>
                        {/* rts-blog post end area */}
                        {/*rts blog wizered area */}
                        <div className="col-xl-4 col-md-12 col-sm-12 col-12">
                            {/* single wizered start */}
                            <div className="rts-single-wized search">
                                <div className="wized-header">
                                    <h5 className="title">Search Hear</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="rts-search-wrapper">
                                        <input
                                            className="Search"
                                            type="text"
                                            placeholder="Enter Keyword"
                                        />
                                        <button>
                                            <i className="fal fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized Categories">
                                <div className="wized-header">
                                    <h5 className="title">Categories</h5>
                                </div>
                                <div className="wized-body">
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link to={'#'}>
                                                Business Solution <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link to={'#'}>
                                                Strategy Growth
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link to={'#'}>
                                                Finance Solution
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link to={'#'}>
                                                Investment Policy
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link to={'#'}>
                                                Tax Managment
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized Recent-post">
                                <div className="wized-header">
                                    <h5 className="title">Recent Posts</h5>
                                </div>
                                <div className="wized-body">
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/recent-post/01.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/recent-post/02.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/recent-post/03.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/recent-post/04.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized Recent-post">
                                <div className="wized-header">
                                    <h5 className="title">Gallery Posts</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="gallery-inner">
                                        <div className="row-1 single-row">
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/gallery/01.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/gallery/02.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/gallery/03.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                        </div>
                                        <div className="row-2 single-row">
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/gallery/04.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/gallery/05.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/gallery/06.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized">
                                <div className="wized-header">
                                    <h5 className="title">Popular Tags</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="tags-wrapper">
                                        <Link to={'#'}>Services</Link>
                                        <Link to={'#'}>Business</Link>
                                        <Link to={'#'}>Growth</Link>
                                        <Link to={'#'}>Finance</Link>
                                        <Link to={'#'}>UI/UX Design</Link>
                                        <Link to={'#'}>Solution</Link>
                                        <Link to={'#'}>Speed</Link>
                                        <Link to={'#'}>Strategy</Link>
                                        <Link to={'#'}>Technology</Link>
                                    </div>
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized contact">
                                <div className="wized-header">
                                    <Link to={'#'}>
                                        <img src="/assets/images/logo/logo-2.svg" alt="Business_logo" />
                                    </Link>
                                </div>
                                <div className="wized-body">
                                    <h5 className="title">Need Help? We Are Here To Help You</h5>
                                    <Link className="rts-btn btn-primary" href="contactus.html">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            {/* single wizered End */}
                        </div>
                        {/* rts- blog wizered end area */}
                    </div>
                </div>
            </div>
            {/* rts blog mlist area End */}


            <FooterOne />

        </div>
    )
}

export default BlogGrid