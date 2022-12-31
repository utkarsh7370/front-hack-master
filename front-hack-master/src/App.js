import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Faq from "./components/Faq/Faq";
import Theme from "./components/Theme/Theme";
import Event from "./components/Events/Event";
import Prizes from "./components/Prizes/Prizes";
import Glipms from "./components/Glimps/Glipms";
import Footer from "./components/Footer/Footer";
import "./components/style.css";
import Benifits from "./components/Benifits/Benifits";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <marquee scrolldelay="50" id="scroll_news_ps" style={{ fontFamily: "Book Antiqua", fontWeight: "bold", color: "#FFFFFF", padding: "10px 0", background: "#303cac", bgcolor: "#394787" }}>
        <div>
          <a href="https://forms.gle/8kFNfoj7u3JD2EHR7" target="_BLANK" style={{color: "#FFFFFF"}}>
            Last date for registration is 25th July.
          </a>
        </div>
      </marquee>
      <marquee scrolldelay="50" id="scroll_news_ps" style={{ fontFamily: "Book Antiqua", fontWeight: "bold", color: "#FFFFFF", padding: "10px 0", background: "#303cac", bgcolor: "#394787" }}>
        <div onmouseover="document.getElementById('scroll_news_ps').stop();" onmouseout="document.getElementById('scroll_news_ps').start();">
          Last date for submission of first phase is 30th July.
        </div>
      </marquee>
      <About />
      <Benifits />
      <Theme />
      <Event />
      <Prizes />
      <Glipms />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
