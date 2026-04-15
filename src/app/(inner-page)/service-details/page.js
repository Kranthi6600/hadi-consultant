import Link from 'next/link';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";

export default function Home() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Our Service' }
    ];
    return (

        <div className="">
            <HeaderOne />
            <Breadcrumb title="Our Service" breadcrumbs={breadcrumbs} />
            {/* start service details area */}
            <div className="rts-service-details-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                            {/* service details left area start */}
                            <div className="service-detials-step-1">
                                <div className="thumbnail">
                                    <img src="assets/images/service/01.jpg" alt="business-area" />
                                </div>
                                <h4 className="title">Business Growth Mangment</h4>
                                <p className="disc">
                                    Continually myocardinate holistic mindshare with client-based web
                                    services. Assertively e-enable catalysts for change before tested
                                    markets. Phosfluorescently maintain wireless scenarios after
                                    intermandated applications. Conveniently predominate revolutionary
                                    quality vectors through future-proof manufactured products.
                                    Enthusiastically transform distinctive collaboration.
                                </p>
                                <p className="disc">
                                    Intrinsicly coordinate multifunctional functionalities reliable
                                    potentialities. Objectively envisioneer high in convergence
                                    through collaborative networks. Interactively generate B2C
                                    e-tailers for business data restore fully researched relationships
                                    through resource maximizing results.
                                </p>
                                <div className="row g-5 mt--30 mb--40">
                                    <div className="col-lg-6">
                                        {/* single service details card */}
                                        <div className="service-details-card">
                                            <div className="thumbnail">
                                                <img
                                                    src="assets/images/service/icon/09.svg"
                                                    alt=""
                                                    className="icon"
                                                />
                                            </div>
                                            <div className="details">
                                                <h6 className="title">Instant Business Growth</h6>
                                                <p className="disc">
                                                    Maintain wireless scerios after sure quality vectors
                                                    future
                                                </p>
                                            </div>
                                        </div>
                                        {/* single service details card End */}
                                    </div>
                                    <div className="col-lg-6">
                                        {/* single service details card */}
                                        <div className="service-details-card">
                                            <div className="thumbnail">
                                                <img
                                                    src="assets/images/service/icon/10.svg"
                                                    alt=""
                                                    className="icon"
                                                />
                                            </div>
                                            <div className="details">
                                                <h6 className="title">24/7 Quality Service</h6>
                                                <p className="disc">
                                                    Maintain wireless scerios after sure quality vectors
                                                    future
                                                </p>
                                            </div>
                                        </div>
                                        {/* single service details card End */}
                                    </div>
                                    <div className="col-lg-6">
                                        {/* single service details card */}
                                        <div className="service-details-card">
                                            <div className="thumbnail">
                                                <img
                                                    src="assets/images/service/icon/11.svg"
                                                    alt=""
                                                    className="icon"
                                                />
                                            </div>
                                            <div className="details">
                                                <h6 className="title">Easy Customer Service</h6>
                                                <p className="disc">
                                                    Maintain wireless scerios after sure quality vectors
                                                    future
                                                </p>
                                            </div>
                                        </div>
                                        {/* single service details card End */}
                                    </div>
                                    <div className="col-lg-6">
                                        {/* single service details card */}
                                        <div className="service-details-card">
                                            <div className="thumbnail">
                                                <img
                                                    src="assets/images/service/icon/12.svg"
                                                    alt=""
                                                    className="icon"
                                                />
                                            </div>
                                            <div className="details">
                                                <h6 className="title">Quality Cost Service</h6>
                                                <p className="disc">
                                                    Maintain wireless scerios after sure quality vectors
                                                    future
                                                </p>
                                            </div>
                                        </div>
                                        {/* single service details card End */}
                                    </div>
                                </div>
                                <p className="disc">
                                    Phosfluorescently maintain wireless scenarios after intermandated
                                    applications. Conveniently unique predominate revolutionary
                                    quality vectors through future-proof manufactured products.
                                    Objectively envisioneer high solution convergence through
                                    collaborative networks. Interactively generate B2C e-tailers for
                                    business data restore fully researched relationships through
                                    resource maximizing results.
                                </p>
                            </div>
                            <div className="service-detials-step-2 mt--40">
                                <h4 className="title">3 Simple Steps to Process</h4>
                                <p className="disc mb--25">
                                    Assertively e-enable catalysts for change before fully tested
                                    markets. Phosfluo rescently is maintain solve wireless scenarios
                                    after intermandated applications. Conveniently predominate busin
                                    revolutionary quality vectors through future-proof manufactured
                                    products. Enthusiastically transform distinctive collaboration.
                                </p>
                                <p className="disc">
                                    Phosfluorescently maintain wireless scenarios after intermandated
                                    applications. Conveniently predominate misslat revolutionary
                                    quality vectors through future-proof manufactured products.
                                </p>
                                {/* stem-area start */}
                                <div className="row  mb--40 g-5 mb_md--20 mb_sm--20">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="single-service-step text-center">
                                            <p className="step">01</p>
                                            <h6 className="title">STEP ONE</h6>
                                            <p className="disc">
                                                Tactical services through market web services
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="single-service-step text-center">
                                            <p className="step">02</p>
                                            <h6 className="title">STEP TWO</h6>
                                            <p className="disc">
                                                Tactical services through market web services
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="single-service-step text-center">
                                            <p className="step">03</p>
                                            <h6 className="title">STEP THREE</h6>
                                            <p className="disc">
                                                Tactical services through market web services
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="disc">
                                    Conveniently predominate revolutionary quality vectors through
                                    future-proof manufactured products. Objectively envisioneer high
                                    in convergence through collaborative networks. Interactively
                                    generate B2C tailers for business data restore fully researched
                                    relationships through
                                </p>
                                {/* stem-area End */}
                            </div>
                            {/* service details left area end */}
                            <div className="service-detials-step-3 mt--70 mt_md--50">
                                <div className="row g-5 align-items-center">
                                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="thumbnail sm-thumb-service">
                                            <img src="assets/images/service/sm-01.jpg" alt="Service" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb_md--20 mb_sm--20">
                                        <h4 className="title">Customer Benefits</h4>
                                        <p className="disc">
                                            Catalysts for change before fully tested markets are maintain
                                            wireless scenarios after intermandated applications
                                            predominate revolutionary.
                                        </p>
                                        <div className="single-banifits">
                                            <i className="far fa-check-circle" />
                                            <span>We use the latest diagnostic equipment</span>
                                        </div>
                                        <div className="single-banifits">
                                            <i className="far fa-check-circle" />
                                            <span>We are a member of Professional Service</span>
                                        </div>
                                        <div className="single-banifits">
                                            <i className="far fa-check-circle" />
                                            <span>Automotive service our clients receive</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*rts blog wizered area */}
                        <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 pl--50 pl_md--0 pl-lg-controler pl_sm--0">
                            {/* single wizered start */}
                            <div className="rts-single-wized Categories service">
                                <div className="wized-header">
                                    <h5 className="title">Categories</h5>
                                </div>
                                <div className="wized-body">
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Business Solution <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Strategy Growth <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Finance Solution <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Investment Policy <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Tax Managment <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized download service">
                                <div className="wized-header">
                                    <h5 className="title">Download</h5>
                                </div>
                                <div className="wized-body">
                                    {/* single downlaod area start */}
                                    <div className="single-download-area">
                                        <img
                                            src="assets/images/service/icon/07.svg"
                                            alt="Business_downlaod"
                                        />
                                        <div className="mid">
                                            <h6 className="title">Our Brochures</h6>
                                            <span>Downlaod</span>
                                        </div>
                                        <Link className=" rts-btn btn-primary" href={'#'}>
                                            <i className="fal fa-arrow-right" />
                                        </Link>
                                    </div>
                                    {/* single downlaod area End */}
                                    {/* single downlaod area start */}
                                    <div className="single-download-area">
                                        <img
                                            src="assets/images/service/icon/08.svg"
                                            alt="Business_downlaod"
                                        />
                                        <div className="mid">
                                            <h6 className="title">Company Details</h6>
                                            <span>Downlaod</span>
                                        </div>
                                        <Link className=" rts-btn btn-primary" href={'#'}>
                                            <i className="fal fa-arrow-right" />
                                        </Link>
                                    </div>
                                    {/* single downlaod area End */}
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized contact service">
                                <div className="wized-header">
                                    <Link href={'#'}>
                                        <img src="assets/images/logo/logo-2.svg" alt="Business_logo" />
                                    </Link>
                                </div>
                                <div className="wized-body">
                                    <h5 className="title">Need Help? We Are Here To Help You</h5>
                                    <Link className="rts-btn btn-primary" href={'#'}>
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
            {/* End service details area */}

            <FooterOne />
            <BackToTop />
        </div>

    );
}
