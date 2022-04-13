import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <button className="button">Send</button>
          <div className="blur-pink"></div>
          <div className="blur-blue"></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
