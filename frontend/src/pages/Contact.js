import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import contactminion from "./contactminion.png"
import Pagenotfound from './Pagenotfound';
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={contactminion}></img>
        </div>
        <div className="col-md-4">
          <h1 className="bg-primary p-2 text-white text-center">Kontaktirajte nas</h1>
          <p className="text-justify mt-2">
           za bilo kakve informacije o nasim proizvodima tu smo 24x7
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@minionwatch.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 015-300-300
          </p>
          <p className="mt-3">
            <BiSupport /> : 0800-0000-0000 (besplatan poziv)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
