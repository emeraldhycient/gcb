import React from "react";

import "./assets/cs.css";
import "./assets/style.css";
/*import "./assets/app.css"
import "./assets/fonts.css"
import "./assets/style.css"
import "./assets/font-awesome.css"*/

import Header from "../common/Header";
import logo from "../images/biafinancebank-logo/vector/default-monochrome-white.svg";
import card from "../images/creditcard1.png";

function Index() {
  return (
    <div>
      <main className="main">
        <Header />
        <div id="conveythis-wrapper-main"><a href="https://www.conveythis.com" class="conveythis-no-translate notranslate" title="ConveyThis" >ConveyThis</a></div>
        <section
          className="section swiper-container swiper-slider swiper-slider-1 mySwiper bg-light-black"
          data-loop="true"
          data-autoplay="5000"
          data-simulate-touch="false"
          data-slide-effect="fade"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide context-dark" data-slide-bg="https://ibb.co/S75JPj8">
              <div className="swiper-slide-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 col-lg-7">
                      <h1
                        data-caption-animate="fadeInUp"
                        data-caption-delay="100"
                      >
                        #1 Choice for Your Banking Needs. 2% charge for
                        international transactions.
                      </h1>
                      <p
                        className="lead"
                        data-caption-animate="fadeInUp"
                        data-caption-delay="250"
                      >
                        Our Orange Card is the best option if you are looking
                        for high-quality and reliable banking services.
                      </p>
                      <a
                        className="button button-lg button-icon button-icon-left bg-blue shadow"
                        href="/login"
                        data-caption-animate="fadeInUp"
                        data-caption-delay="450"
                      >
                        <div className="icon fas fa-sign-in"></div>Sign in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide context-dark"
              data-slide-bg="https://ibb.co/S75JPj8"
              style={{ backgroundPosition: "50% 50%" }}
            >
              <div className="swiper-slide-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 col-lg-7">
                      <h1
                        data-caption-animate="fadeInUp"
                        data-caption-delay="100"
                      >
                        Green Credit Card for Everyday Use. 3% charge for any
                        card issued.
                      </h1>
                      <p
                        className="lead"
                        data-caption-animate="fadeInUp"
                        data-caption-delay="250"
                      >
                        Need a simple but secure credit card? Green Card from
                        BIA-FINANCE Bank has all features you may need.
                      </p>
                      <a
                        className="button button-lg button-primary button-icon button-icon-left"
                        href="/login"
                        data-caption-animate="fadeInUp"
                        data-caption-delay="450"
                      >
                        <div className="icon fas fa-sign-in"></div>Sign in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide context-dark"
              data-slide-bg="https://cedafinance.com/assets2/images/slider1.jpg"
              style={{ backgroundPosition: "50% 50%" }}
            >
              <div className="swiper-slide-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 col-lg-7">
                      <h1
                        data-caption-animate="fadeInUp"
                        data-caption-delay="100"
                      >
                        The Fastest Online Banking for Your Activitics
                      </h1>
                      <p
                        className="lead"
                        data-caption-animate="fadeInUp"
                        data-caption-delay="250"
                      >
                        BIA-FINANCE Bank Standard Card offers extensive list of
                        features and benefits for corporate and individual
                        clients.
                      </p>
                      <a
                        className="button button-lg button-primary button-icon button-icon-left"
                        href="/login"
                        data-caption-animate="fadeInUp"
                        data-caption-delay="450"
                      >
                        <div className="icon fas fa-sign-in"></div>Sign in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container swiper-pagination-wrap">
            <div className="swiper-pagination"></div>
          </div>
        </section>
        <section className="section section-negative bg-black">
          <div className="container section-negative-inner">
            <div className="row row-30 justify-content-center row-flex">
              <div className="col-md-6 col-lg-4 shadow">
                <div className="counter-boxed">
                  <div className="counter-boxed-top">
                    <div className="counter-boxed-media">
                      <img
                        src="https://cedafinance.com/assets2/images/progress-1-92x84.png"
                        alt=""
                        width="92"
                        height="84"
                      />
                    </div>
                    <div className="counter-boxed-title">
                      <div className="subtitle">More than</div>
                      <div className="counter-wrap">
                        <div className="counter heading-2 text-blue">23754</div>
                      </div>
                      <div className="title heading-5">Issued Cards</div>
                    </div>
                  </div>
                  <div className="counter-boxed-body">
                    <div className="exeption">
                      Our bank is an acknowledged leader in credit card
                      distribution. We issue more than 5000 cards every year.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="counter-boxed">
                  <div className="counter-boxed-top">
                    <div className="counter-boxed-media">
                      <img
                        src="https://cedafinance.com/assets2/images/progress-2-92x84.png"
                        alt=""
                        width="92"
                        height="84"
                      />
                    </div>
                    <div className="counter-boxed-title">
                      <div className="subtitle">Up to</div>
                      <div className="counter-wrap">
                        <div className="counter heading-2 text-blue">30</div>
                        <div className="heading-2">%</div>
                      </div>
                      <div className="title heading-5">Cashback</div>
                    </div>
                  </div>
                  <div className="counter-boxed-body">
                    <div className="exeption">
                      We offer amazing amount of cashback for payments made with
                      one of our credit cards - Blue, Green, or Orange.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="counter-boxed">
                  <div className="counter-boxed-top">
                    <div className="counter-boxed-media">
                      <img
                        src="https://cedafinance.com/assets2/images/progress-3-92x84.png"
                        alt=""
                        width="92"
                        height="84"
                      />
                    </div>
                    <div className="counter-boxed-title">
                      <div className="subtitle">Up to</div>
                      <div className="counter-wrap">
                        <div className="counter heading-2 text-blue">25</div>
                        <div className="heading-2">%</div>
                      </div>
                      <div className="title heading-5">for Deposits</div>
                    </div>
                  </div>
                  <div className="counter-boxed-body">
                    <div className="exeption">
                      BIA-FINANCE Bank offers various deposits in all
                      international currencies with interest rate up to 25% for
                      all regular clients.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-md context-dark">
            <div className="container">
              <div className="row row-fix justify-content-center text-center">
                <div className="col-md-10 col-xl-7">
                  <h2 className="custom-title">
                    <span>The Best Banking Choice</span>
                  </h2>
                  <p>
                    Since our foundation, we have been #1 banking institution
                    for lots of individual and corporate customers, both in the
                    USA and internationally. We provide our clients with a
                    number of benefits.
                  </p>
                </div>
              </div>
              <div className="row row-40 align-items-lg-center">
                <div className="col-sm-6 col-lg-4">
                  <ul className="service-list-1">
                    <li className="service-item-1 service-item-1-right unit wow fadeIn">
                      <div className="unit-item">
                        <div className=" fas fa-globe fa-5x text-blue"></div>
                      </div>
                      <div className="unit-body">
                        <h6 className="title">Various Locations</h6>
                        <p>
                          We have offices in many countries including the USA
                          and the UK.
                        </p>
                      </div>
                    </li>
                    <li className="service-item-1 service-item-1-right unit wow fadeIn">
                      <div className="unit-item">
                        <div className=" fas fa-mobile fa-5x text-blue"></div>
                      </div>
                      <div className="unit-body">
                        <h6 className="title">Mobile Banking Apps</h6>
                        <p>
                          Get instant access to your account on any device using
                          our banking apps.
                        </p>
                      </div>
                    </li>
                    <li className="service-item-1 service-item-1-right unit wow fadeIn">
                      <div className="unit-item">
                        <div className=" fas fa-phone  fa-5x text-blue"></div>
                      </div>
                      <div className="unit-body">
                        <h6 className="title">24/7 Support</h6>
                        <p>
                          Our Support team is always ready to help you solve any
                          banking issues.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-lg-4 d-none d-lg-block">
                  <div className="text-center wow fadeIn">
                    <img
                      src="https://cedafinance.com/assets2/images/phone.png"
                      alt=""
                      width="309"
                      height="582"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <ul className="service-list-1">
                    <li className="service-item-1 unit wow fadeIn">
                      <div className="unit-item">
                        <div className=" fas fa-users  fa-5x text-blue"></div>
                      </div>
                      <div className="unit-body">
                        <h6 className="title">Family & Friends Programs</h6>
                        <p>
                          Our Bank has special programs with benefits for family
                          members.
                        </p>
                      </div>
                    </li>
                    <li className="service-item-1 unit wow fadeIn">
                      <div className="unit-item">
                        <div className=" fas fa-id-badge  fa-5x text-blue"></div>
                      </div>
                      <div className="unit-body">
                        <h6 className="title">Personal Profile</h6>
                        <p>
                          Register your free personal profile online to begin
                          using our services.
                        </p>
                      </div>
                    </li>
                    <li className="service-item-1 unit wow fadeIn">
                      <div className="unit-item">
                        <div className=" fas fa-cogs  fa-5x text-blue"></div>
                      </div>
                      <div className="unit-body">
                        <h6 className="title">Easy Account Setup</h6>
                        <p>
                          Registered clients can edit the banking account
                          settings in 2 clicks.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="button-wrap-lg text-center">
                <a
                  className="button button-lg bg-blue shadow"
                  href="/create"
                  >
                  Open Account
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-md bg-gray-100">
          <div className="container">
            <div className="row row-fix justify-content-center text-center">
              <div className="col-md-10 col-xl-7">
                <h2 className="custom-title">
                  <span>Advantages and Details</span>
                </h2>
                <p>
                  We provide all our clients with various advantages that not
                  only satisfy their banking needs but also allow them to get
                  more without overpaying for banking service.
                </p>
              </div>
            </div>
            <div className="row row-30 row-flex">
              <div className="col-sm-6 col-lg-3 wow fadeInRight">
                <blockquote className="quote quote-default">
                  <div className="quote-icon fas fa-quote-right text-blue"></div>
                  <div className="quote-body">
                    <q className="heading-6">
                      At BIA-FINANCE Bank, we aim to provide top quality banking
                      services to a greater number of individual and corporate
                      customers than any other bank in the USA or abroad.
                    </q>
                  </div>
                  <div className="quote-meta">
                    <div className="author text-blue">
                      <cite className="text-blue">Samuel Chapman</cite>
                    </div>
                    <div className="position">
                      CEO &amp; Founder of BIA-FINANCE Bank
                    </div>
                  </div>
                </blockquote>
              </div>
              <div
                className="col-sm-6 col-lg-3 wow fadeInRight"
                data-wow-delay="0.1s"
              >
                <div className="blurb-boxed">
                  <div className=" fas fa-bar-chart fa-5x text-blue"></div>
                  <h6 className="title">Detailed Statistics</h6>
                  <p className="exeption">
                    Our online banking resource provides free &amp; detailed
                    statistics to all BIA-FINANCE Bank clients.
                  </p>
                </div>
              </div>
              <div
                className="col-sm-6 col-lg-3 wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <div className="blurb-boxed">
                  <div className=" fa-envelope-open-o fa-5x text-blue"></div>
                  <h6 className="title">E-mail Newsletter</h6>
                  <p className="exeption">
                    Subscribe to our newsletter and stay in the know of the
                    latest financial and banking news.
                  </p>
                </div>
              </div>
              <div
                className="col-sm-6 col-lg-3 wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <div className="blurb-boxed">
                  <div className=" fas fa-bullseye fa-5x text-blue"></div>
                  <h6 className="title">Financial Goals</h6>
                  <p className="exeption">
                    Easily meet your financial goals with our affordable banking
                    offers available regularly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-md bg-black">
          <div className="container">
            <div className="row row-fix justify-content-center text-center">
              <div className="col-md-10 col-xl-7">
                <h2 className="custom-title text-light">
                  <span>Latest Statistical Information</span>
                </h2>
                <p className="text-light">
                  Our Bank regularly compiles and publishes a range of monetary
                  and financial statistics. These include domestic banking
                  statistics, external finance statistics, and international
                  banking statistics.
                </p>
              </div>
            </div>
            <div className="row row-40 justify-content-between">
              <div className="col-lg-4">
                <svg className="svg-hidden">
                  <lineargradient
                    id="linear-gradient-primary"
                    x1="50%"
                    y1="30%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#a371f7"></stop>
                    <stop offset="100%" stop-color="#fff"></stop>
                  </lineargradient>
                </svg>
                <svg className="svg-hidden">
                  <lineargradient
                    id="linear-gradient-secondary"
                    x1="50%"
                    y1="30%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#a371f7"></stop>
                    <stop offset="100%" stop-color="#130c37"></stop>
                  </lineargradient>
                </svg>
                <div
                  className="d3-chart"
                  id="spline-chart"
                  style={{ width: "100%", margin: " 0 auto" }}
                ></div>
                <p className="text-light">
                  With the development of online banking, our number of
                  customers increased up to 6 million worldwide.
                </p>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 text-center">
                <div className="row row-30 row-xxl-40 row-fix">
                  <div className="col-6">
                    <div class="progress blue">
                      <span class="progress-left">
                        <span class="progress-bar"></span>
                      </span>
                      <span class="progress-right">
                        <span class="progress-bar"></span>
                      </span>
                      <div class="progress-value">25%</div>
                    </div>
                    <p className="progress-bar-circle-title text-light">Economy</p>
                  </div>
                  <div className="col-6">
                  <div class="progress yellow">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">50%</div>
                            </div>
                    <p className="progress-bar-circle-title text-light">Cashback</p>
                  </div>
                  <div className="col-6">
                  <div class="progress yellow">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">75%</div>
                            </div>
                    <p className="progress-bar-circle-title text-light">Stability</p>
                  </div>
                  <div className="col-6">
                  <div class="progress blue">
                      <span class="progress-left">
                        <span class="progress-bar"></span>
                      </span>
                      <span class="progress-right">
                        <span class="progress-bar"></span>
                      </span>
                      <div class="progress-value">100%</div>
                    </div>
                    <p className="progress-bar-circle-title text-light">Guarantee</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <p className="text-gray-600">
                  Our financial services deeply rely on certain banking
                  procedures that have been perfected over the years and helped
                  us get prestigious awards.
                </p>
                <div className="progress-linear-wrap">
                  <article className="progress-linear">
                    <div className="progress-header">
                      <p className="text-light">Financial Consulting</p>
                      <span className="progress-value text-blue">75</span>
                    </div>
                    <div className="progress-bar-linear-wrap">
                      <div className="progress-bar-linear"></div>
                    </div>
                  </article>
                  <article className="progress-linear">
                    <div className="progress-header">
                      <p className="text-light">Online Reporting</p>
                      <span className="progress-value text-blue">50</span>
                    </div>
                    <div className="progress-bar-linear-wrap">
                      <div className="progress-bar-linear"></div>
                    </div>
                  </article>
                  <article className="progress-linear">
                    <div className="progress-header">
                      <p className="text-light">Online Banking</p>
                      <span className="progress-value text-blue">80</span>
                    </div>
                    <div className="progress-bar-linear-wrap">
                      <div className="progress-bar-linear"></div>
                    </div>
                  </article>
                  <article className="progress-linear">
                    <div className="progress-header">
                      <p className="text-light">24/7 Support</p>
                      <span className="progress-value text-blue">75</span>
                    </div>
                    <div className="progress-bar-linear-wrap">
                      <div className="progress-bar-linear"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="button-wrap-lg text-center">
              <a className="button button-lg bg-blue" href="#">
                View All Statistics
              </a>
            </div>
          </div>
        </section>
        <section className="section section-xs gradient">
          <div className="container">
            <div className="box-cta">
              <div className="box-cta-inner">
                <h3 className="text-light">
                  Choose Your{" "}
                  <span className="font-weight-bold text-light">Bank Account</span> Now!
                </h3>
              </div>
              <div className="box-cta-inner">
                <a
                  className="button button-lg btn-info text-light shadow"
                  href="/create"
                  >
                  Open
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-md">
          <div className="container text-center">
            <h2 className="custom-title">
              <span>How to Order a New Card</span>
            </h2>
            <div className="row row-40 justify-content-center number-counter blurb-icon-bordered-wrap wow fadeInUp">
              <div className="col-sm-6 col-lg-3">
                <div className="blurb-icon-bordered">
                  <div className="icon-wrap">
                    <div className="fas fa-id-card fa-5x text-blue">
                      <span className="I-counter"></span>
                    </div>
                  </div>
                  <h5 className="title">Online Registration</h5>
                  <p className="exeption">
                    Everything starts with free online registration. Only basic
                    data is needed - name, surname, age etc.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="blurb-icon-bordered">
                  <div className="icon-wrap">
                    <div className=" fas fa-file  fa-5x text-blue">
                      <span className="index-counter"></span>
                    </div>
                  </div>
                  <h5 className="title">Filling Out a Form</h5>
                  <p className="exeption">
                    After the basic registration, you will need to fill out a
                    form to help us determine your financial goals.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="blurb-icon-bordered">
                  <div className="icon-wrap text-blue">
                    <div className=" fas fa-pencil fa-5x text-blue ">
                      <span className="index-counter"></span>
                    </div>
                  </div>
                  <h5 className="title">Signing an Agreement</h5>
                  <p className="exeption">
                    This stage concludes the procedure of opening an account at
                    BIA-FINANCE Bank to start using your card.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="blurb-icon-bordered">
                  <div className="icon-wrap">
                    <div className="fas fa-credit-card fa-5x text-blue">
                      <span className="index-counter"></span>
                    </div>
                  </div>
                  <h5 className="title">Using Your Card</h5>
                  <p className="exeption">
                    You can use your card to purchase the products you need or
                    to open a secure deposit with lots of benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-md bg-black">
          <div className="container">
            <h2 className="custom-title text-center text-light">
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="row row-40">
              <div className="col-sm-6 col-lg-6">
                <ul className="list-xl wow fadeIn">
                  <li>
                    <h5 className="text-light">What is the currency amount for the Blue Card?</h5>
                    <p className="text-gray-600">
                      The minimum amount that can be loaded on the card is $100
                      or equivalent amount in other currency. The maximum amount
                      would be as per BIA-FINANCE Bank guidelines applicable
                      from time to time. You can learn more about it by
                      contacting our consultants.
                    </p>
                  </li>
                  <li>
                    <h5  className="text-light">What steps do I take if my card gets lost?</h5>
                    <p className="text-gray-600">
                      If you lose your card please immediately contact our
                      customer support center. If you are in the USA please call
                      1-800-22-6999, for other countries please call 0091-22-
                      66937000.
                    </p>
                  </li>
                  <li>
                    <h5  className="text-light">Do I have to maintain any minimum balance?</h5>
                    <p className="text-gray-600">
                      It depends on the card you choose. For example, if you
                      pick an Orange Card, you get a special waiver on the
                      minimum balance requirement.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-6">
                <ul className="list-xl wow fadeIn">
                  <li>
                    <h5  className="text-light">What kind of browser do I need for online banking?</h5>
                    <p className="text-gray-600">
                      Our Banking System supports all browsers. Some of the most
                      popular ones are Chrome, Opera, Firefox, and Safari. If
                      you are using Internet Explorer make sure the version of
                      your browser is 9.0 or higher.
                    </p>
                  </li>
                  <li>
                    <h5  className="text-light">Can I make online payments to foreign recipients?</h5>
                    <p className="text-gray-600">
                      Yes, you can! Our bank does not limit any payments to a
                      certain country so whether you are using our online
                      banking system or an app for your device, you can safely
                      transfer any amount of money or purchase services and
                      products.
                    </p>
                  </li>
                  <li>
                    <h5  className="text-light">
                      What security features does the mobile banking have?
                    </h5>
                    <p className="text-gray-600">
                      Mobile browser-based banking is very similar to PC based
                      internet banking. The respective mobile handset browser
                      replaces a PC browser to access the banking services. Some
                      of the important security measures in place are 128 bit
                      SSL from VeriSign, https:// based access, Intrusion
                      detection system (IDS) etc.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-md bg-gray-100">
          <div className="container">
            <div className="row row-fix justify-content-center text-center">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <h2 className="custom-title">
                  <span className="text-dark">Latest Story Tips</span>
                </h2>
                <p>
                  Our team regularly publishes articles about banking &
                  financial news as well as updates on special offers and tips
                  from our consultants.
                </p>
              </div>
            </div>
            <div className="row row-40 justify-content-center">
              <div className="col-md-4 wow fadeInLeft">
                <article className="post-modern">
                  <div className="media-wrapper">
                    <a href="#">
                      <img
                        src="https://cedafinance.com/assets2/images/modern-blog-1-370x240.jpg"
                        alt=""
                        width="370"
                        height="240"
                      />
                    </a>
                    <ul className="list-tags bg-blue">
                      <li>
                        <a className="badge bg-blue" href="#">
                          News
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-body">
                    <div className="post-author">
                      <a className="img-author" href="#">
                        <img
                          src="https://cedafinance.com/assets2/images/modern-author-1-72x72.jpg"
                          alt=""
                          width="72"
                          height="72"
                        />
                      </a>
                      <div className="post-author-name bg-blue">Martha Ryan</div>
                    </div>
                    <h5 className="text-blue">
                      <a href="#" className="text-blue">
                        7 Banking Services That Can Save Retirees Money
                      </a>
                    </h5>
                    <p className="post-exeption">
                      Long gone are the days in which you need to visit a branch
                      to do your banking. Today, banks offer an array of
                      services...
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-md-4 wow fadeInLeft" data-wow-delay="0.1s">
                <article className="post-modern">
                  <div className="media-wrapper">
                    <a href="#">
                      <img
                        src="https://cedafinance.com/assets2/images/modern-blog-2-370x240.jpg"
                        alt=""
                        width="370"
                        height="240"
                      />
                    </a>
                    <ul className="list-tags">
                      <li>
                        <a className="badge bg-blue  " href="#">
                          Finance
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-body">
                    <div className="post-author">
                      <a className="img-author" href="#">
                        <img
                          src="https://cedafinance.com/assets2/images/modern-author-2-72x72.jpg"
                          alt=""
                          width="72"
                          height="72"
                        />
                      </a>
                      <div className="post-author-name">Lawrence Kelly</div>
                    </div>
                    <h5 className="text-blue">
                      <a href="#">
                        Stocks Could Surge Another 10% Between Now And 2018
                      </a>
                    </h5>
                    <p className="post-exeption">
                      Experts point out that the next couple of months could
                      become bumpy as the markets deal with uncertainty over...
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-md-4 wow fadeInLeft" data-wow-delay="0.1s">
                <article className="post-modern">
                  <div className="media-wrapper">
                    <a href="#">
                      <img
                        src="https://cedafinance.com/assets2/images/modern-blog-3-370x240.jpg"
                        alt=""
                        width="370"
                        height="240"
                      />
                    </a>
                    <ul className="list-tags">
                      <li>
                        <a className="badge bg-blue" href="#">
                          Banks
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-body">
                    <div className="post-author">
                      <a className="img-author" href="#">
                        <img
                          src="https://cedafinance.com/assets2/images/modern-author-3-72x72.jpg"
                          alt=""
                          width="72"
                          height="72"
                        />
                      </a>
                      <div className="post-author-name">John Doe</div>
                    </div>
                    <h5 className="text-blue">
                      <a href="#">
                        Wall Street Analysts Are Nailing It This Year
                      </a>
                    </h5>
                    <p className="post-exeption">
                      Wall Street analysts have made the right calls so far this
                      year. Analysts' 50 most loved stocks at the start of the
                      year are...
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <div className="button-wrap-lg text-center">
              <a
                className="button button-lg bg-blue shadow text-white"
                href="/login"
                >
                Banking Account
              </a>
            </div>
          </div>
        </section>
        <section className="section section-sm gradient context-dark text-center">
          <div className="container">
            <div className="row row-20 justify-content-md-center">
              <div className="col-md-9 col-lg-6 col-xxl-7">
                <h3>
                  Subscribe for{" "}
                  <span className="font-weight-bold">News and Updates</span>
                </h3>
              </div>
              <div className="col-md-8 col-lg-5 col-xxl-4">
                <form
                  className="rd-form rd-mailform rd-form-inline-2"
                  data-form-output="form-output-global"
                  data-form-type="subscribe"
                  method="post"
                  action=""
                >
                  <div className="form-wrap">
                    <input
                      className="form-input"
                      id="subscribe-form-0-email"
                      type="email"
                      name="email"
                      data-constraints="@Email    @Required"
                    />
                    <label className="form-label" for="subscribe-form-0-email">
                      Enter your e-mail
                    </label>
                  </div>
                  <button
                    className="form-icon-button fa fa-envelope text-blue"
                    type="submit"
                  ></button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="section footer-1 bg-black">
        <div className="container">
          <div className="row row-40 wow fadeIn">
            <div className="col-md-6 col-lg-4">
              <h5 className="title">About Us</h5>
              <p>
                BIA-FINANCE Bank is the leading financial establishment
                providing high-quality international banking services. Our
                success is attributed to our loyal customers and to the talent
                and dedication of our professional and skilled employees. We are
                always ready to partner with you by offering full financial
                support to our clients worldwide.
              </p>
              <a className="footer-logo" href="/">
                <img src={logo} alt="" width="150" height="58" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <h5 className="title">Twitter Feed</h5>
              <div
                className="twitter"
                data-twitter-username="templatemonster"
                data-twitter-date-hours=" hours ago"
                data-twitter-date-minutes=" minutes ago"
              >
                <div className="tweet" data-twitter-type="tweet">
                  <div className="tweet-left">
                    <div className="icon fa-twitter"></div>
                  </div>
                  <div className="tweet-right">
                    <div
                      className="twitter-text text-dark"
                      data-tweet="text"
                    ></div>
                    <div className="twitter-meta">
                      <div
                        className="twitter-name"
                        data-screen_name="text"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="tweet" data-twitter-type="tweet">
                  <div className="tweet-left">
                    <div className="icon fa-twitter"></div>
                  </div>
                  <div className="tweet-right">
                    <div
                      className="twitter-text text-dark"
                      data-tweet="text"
                    ></div>
                    <div className="twitter-meta">
                      <div
                        className="twitter-name"
                        data-screen_name="text"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="tweet" data-twitter-type="tweet">
                  <div className="tweet-left">
                    <div className="icon fa-twitter"></div>
                  </div>
                  <div className="tweet-right">
                    <div
                      className="twitter-text text-dark"
                      data-tweet="text"
                    ></div>
                    <div className="twitter-meta">
                      <div
                        className="twitter-name"
                        data-screen_name="text"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-4">
              <h5 className="title">Get in Touch</h5>
              <form
                className="rd-form rd-milform"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action=""
              >
                <input
                  type="hidden"
                  name="_token"
                  value="SCRsSDpNEm78gA4WF71xtvj9vmF23gRGttxxV7If"
                />
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="contact-name-footer"
                    type="text"
                    name="name"
                    data-constraints="@Required"
                  />
                  <label className="form-label" for="contact-name-footer">
                    Name
                  </label>
                </div>
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="contact-email-footer"
                    type="email"
                    name="email"
                    data-constraints="@Email    @Required"
                  />
                  <label className="form-label" for="contact-email-footer">
                    E-mail
                  </label>
                </div>
                <div className="form-wrap">
                  <label className="form-label" for="contact-message-footer">
                    Message
                  </label>
                  <textarea
                    className="form-input"
                    id="contact-message-footer"
                    name="message"
                    data-constraints="@Required"
                  ></textarea>
                </div>
                <button className="button bg-blue" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
          <p className="rights">
            <span>&copy;&nbsp; </span>
            <span className="copyright-year"></span>
            <span>&nbsp;</span>
            <span>All rights reserved</span>
            <span>.&nbsp;</span>
            <a href="/about">ABOUT</a> |
            <a href="/contact">Contact</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Index;
