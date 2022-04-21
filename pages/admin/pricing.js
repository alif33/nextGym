import React from "react";
import AdminLayout from "./../../src/components/AdminLayout/AdminLayout";

const pricing = () => {
  return (
    <AdminLayout>
      <div className="content-header row"></div>
      <div className="content-body">
        <section id="pricing-plan">
          {/* title text and switch button */}
          <div className="text-center">
            <h1 className="mt-5">Pricing Plans</h1>
            <p className="mb-2 pb-75">
              All plans include 40+ advanced tools and features to boost your
              product. Choose the best plan to fit your needs.
            </p>
            <div className="d-flex align-items-center justify-content-center mb-5 pb-50">
              <h6 className="me-1 mb-0">Monthly</h6>
              <div className="form-check form-switch">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="priceSwitch"
                />
                <label className="form-check-label" htmlFor="priceSwitch" />
              </div>
              <h6 className="ms-50 mb-0">Annually</h6>
            </div>
          </div>
          {/*/ title text and switch button */}
          {/* pricing plan cards */}
          <div className="row pricing-card">
            <div className="col-12 col-sm-offset-2 col-sm-10 col-md-12 col-lg-offset-2 col-lg-10 mx-auto">
              <div className="row">
                {/* basic plan */}
                <div className="col-12 col-md-4">
                  <div className="card basic-pricing text-center">
                    <div className="card-body">
                      <img
                        src="/img/Pot1.svg"
                        className="mb-2 mt-5"
                        alt="svg img"
                      />
                      <h3>Basic</h3>
                      <p className="card-text">A simple start for everyone</p>
                      <div className="annual-plan">
                        <div className="plan-price mt-2">
                          <sup className="font-medium-1 fw-bold text-primary">
                            $
                          </sup>
                          <span className="pricing-basic-value fw-bolder text-primary">
                            0
                          </span>
                          <sub className="pricing-duration text-body font-medium-1 fw-bold">
                            /month
                          </sub>
                        </div>
                        <small className="annual-pricing d-none text-muted" />
                      </div>
                      <ul className="list-group list-group-circle text-start">
                        <li className="list-group-item">
                          100 responses a month
                        </li>
                        <li className="list-group-item">
                          Unlimited forms and surveys
                        </li>
                        <li className="list-group-item">Unlimited fields</li>
                        <li className="list-group-item">
                          Basic form creation tools
                        </li>
                        <li className="list-group-item">Up to 2 subdomains</li>
                      </ul>
                      <button className="btn w-100 btn-outline-success mt-2 waves-effect">
                        Your current plan
                      </button>
                    </div>
                  </div>
                </div>
                {/*/ basic plan */}
                {/* standard plan */}
                <div className="col-12 col-md-4">
                  <div className="card standard-pricing popular text-center">
                    <div className="card-body">
                      <div className="pricing-badge text-end">
                        <span className="badge rounded-pill badge-light-primary">
                          Popular
                        </span>
                      </div>
                      <img
                        src="/img/Pot2.svg"
                        className="mb-1"
                        alt="svg img"
                      />
                      <h3>Standard</h3>
                      <p className="card-text">
                        For small to medium businesses
                      </p>
                      <div className="annual-plan">
                        <div className="plan-price mt-2">
                          <sup className="font-medium-1 fw-bold text-primary">
                            $
                          </sup>
                          <span className="pricing-standard-value fw-bolder text-primary">
                            49
                          </span>
                          <sub className="pricing-duration text-body font-medium-1 fw-bold">
                            /month
                          </sub>
                        </div>
                        <small className="annual-pricing d-none text-muted" />
                      </div>
                      <ul className="list-group list-group-circle text-start">
                        <li className="list-group-item">Unlimited responses</li>
                        <li className="list-group-item">
                          Unlimited forms and surveys
                        </li>
                        <li className="list-group-item">
                          Instagram profile page
                        </li>
                        <li className="list-group-item">
                          Google Docs integration
                        </li>
                        <li className="list-group-item">
                          Custom “Thank you” page
                        </li>
                      </ul>
                      <button className="btn w-100 btn-primary mt-2 waves-effect waves-float waves-light">
                        Upgrade
                      </button>
                    </div>
                  </div>
                </div>
                {/*/ standard plan */}
                {/* enterprise plan */}
                <div className="col-12 col-md-4">
                  <div className="card enterprise-pricing text-center">
                    <div className="card-body">
                      <img
                        src="/img/Pot3.svg"
                        className="mb-2"
                        alt="svg img"
                      />
                      <h3>Enterprise</h3>
                      <p className="card-text">
                        Solution for big organizations
                      </p>
                      <div className="annual-plan">
                        <div className="plan-price mt-2">
                          <sup className="font-medium-1 fw-bold text-primary">
                            $
                          </sup>
                          <span className="pricing-enterprise-value fw-bolder text-primary">
                            99
                          </span>
                          <sub className="pricing-duration text-body font-medium-1 fw-bold">
                            /month
                          </sub>
                        </div>
                        <small className="annual-pricing d-none text-muted" />
                      </div>
                      <ul className="list-group list-group-circle text-start">
                        <li className="list-group-item">PayPal payments</li>
                        <li className="list-group-item">Logic Jumps</li>
                        <li className="list-group-item">
                          File upload with 5GB storage
                        </li>
                        <li className="list-group-item">
                          Custom domain support
                        </li>
                        <li className="list-group-item">Stripe integration</li>
                      </ul>
                      <button className="btn w-100 btn-outline-primary mt-2 waves-effect">
                        Upgrade
                      </button>
                    </div>
                  </div>
                </div>
                {/*/ enterprise plan */}
              </div>
            </div>
          </div>
          {/*/ pricing plan cards */}
          {/* pricing free trial */}
          <div className="pricing-free-trial">
            <div className="row">
              <div className="col-12 col-lg-10 col-lg-offset-3 mx-auto">
                <div className="pricing-trial-content d-flex justify-content-between">
                  <div className="text-center text-md-start mt-3">
                    <h3 className="text-primary">
                      Still not convinced? Start with a 14-day FREE trial!
                    </h3>
                    <h5>
                      You will get full access to with all the features for 14
                      days.
                    </h5>
                    <button className="btn btn-primary mt-2 mt-lg-3 waves-effect waves-float waves-light">
                      Start 14-day FREE trial
                    </button>
                  </div>
                  {/* image */}
                  <img
                    src="/img/pricing-Illustration.svg"
                    className="pricing-trial-img img-fluid"
                    alt="svg img"
                  />
                </div>
              </div>
            </div>
          </div>
          {/*/ pricing free trial */}
          {/* pricing faq */}
          <div className="pricing-faq">
            <h3 className="text-center">FAQ&apos;s</h3>
            <p className="text-center">
              Let us help answer the most common questions.
            </p>
            <div className="row my-2">
              <div className="col-12 col-lg-10 col-lg-offset-2 mx-auto">
                {/* faq collapse */}
                <div
                  className="accordion accordion-margin"
                  id="accordionExample"
                >
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Does my subscription automatically renew?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Pastry pudding cookie toffee bonbon jujubes jujubes
                        powder topping. Jelly beans gummi bears sweet roll
                        bonbon muffin liquorice. Wafer lollipop sesame snaps.
                        Brownie macaroon cookie muffin cupcake candy caramels
                        tiramisu. Oat cake chocolate cake sweet jelly-o brownie
                        biscuit marzipan. Jujubes donut marzipan chocolate bar.
                        Jujubes sugar plum jelly beans tiramisu icing
                        cheesecake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can I store the item on an intranet so everyone has
                        access?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Tiramisu marshmallow dessert halvah bonbon cake
                        gingerbread. Jelly beans chocolate pie powder. Dessert
                        pudding chocolate cake bonbon bear claw cotton candy
                        cheesecake. Biscuit fruitcake macaroon carrot cake.
                        Chocolate cake bear claw muffin chupa chups pudding.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Am I allowed to modify the item that I purchased?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Tart gummies dragée lollipop fruitcake pastry oat cake.
                        Cookie jelly jelly macaroon icing jelly beans soufflé
                        cake sweet. Macaroon sesame snaps cheesecake tart cake
                        sugar plum. Dessert jelly-o sweet muffin chocolate candy
                        pie tootsie roll marzipan. Carrot cake marshmallow
                        pastry. Bonbon biscuit pastry topping toffee dessert
                        gummies. Topping apple pie pie croissant cotton candy
                        dessert tiramisu.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ pricing faq */}
        </section>
      </div>
    </AdminLayout>
  );
};

export default pricing;
