import React from "react";
import Layout from "./../components/Layout/Layout";
import aboutminion from "./aboutminion.png"

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src={aboutminion}
            
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <div className="about-page">
      <h1>O nama</h1>
      <p>Dobrodošli na Minionwatch Shop! Ovo je projekat koji se rodio iz strasti i predanosti, a stoji iza njega Nikola Vujića pod mentorstvom dr. Vladimira Stanojevića. Minionwatch Shop nije samo online prodavnica satova, već mesto gde se tehnologija i estetika spajaju kako bi vam pružili nezaboravno iskustvo kupovine.</p>
      <h2>Naša Priča</h2>
      <p>Minionwatch Shop je nastao kao deo diplomskog rada Nikole Vujića, pod mentorstvom dr. Vladimira Stanojevića. Ovaj projekat je rezultat dubokog interesovanja za satove i tehnologiju, uz želju da se stvori platforma koja će spojiti ljubitelje satova sa ekskluzivnim komadima visokog kvaliteta.</p>
      <h2>Naša Vizija</h2>
      <p>Naša vizija je jednostavna - pružiti vam pristup jedinstvenoj kolekciji satova koja istražuje različite stilove i estetike. Želimo da svaki sat na našoj platformi bude pažljivo odabran kako bi se istakao svojim dizajnom i funkcionalnošću.</p>
      <h2>Šta Nas Izdvaja</h2>
      <ul>
        <li><strong>Kvalitetna Selekcija:</strong> Svaki sat u našoj kolekciji je pažljivo odabran kako bi pružio vrhunsko iskustvo nošenja.</li>
        <li><strong>Individualnost:</strong> Ponosimo se time što nudimo satove koji odražavaju različite stilove i ukuse, čineći ih ličnim izrazom onih koji ih nose.</li>
        <li><strong>Autentičnost Garantovana:</strong> Svi satovi koje nudimo su originalni i podržani relevantnom dokumentacijom.</li>
        <li><strong>Vaša Povratna Informacija:</strong> Vaše mišljenje je ključno za nas. Želimo da čujemo vaše sugestije kako bismo kontinuirano unapređivali našu platformu.</li>
      </ul>
      <p><strong>Hvala Vam</strong></p>
      <p>Hvala vam što ste deo naše priče. Minionwatch Shop ne bi postojao bez vaše podrške i interesovanja za svet satova. Radujemo se što ćemo vam pružiti mogućnost da pronađete savršen sat koji će odražavati vašu jedinstvenu ličnost.</p>
      <p>S poštovanjem,<br />Nikolaja Vujić &amp; dr. Vladimir Stanojević</p>
    </div>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;