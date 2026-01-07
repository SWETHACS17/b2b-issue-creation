"use client";
export default function Page() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        backgroundColor: "#f0f9ff",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "rgba(2, 132, 199, 0.95)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          padding: "20px 48px",
          display: "flex",
          gap: "32px",
          fontWeight: "600",
          zIndex: 100,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button onClick={() => scrollToSection("home")} style={navStyle} className="nav-btn">
          Home
        </button>
        <button onClick={() => scrollToSection("about")} style={navStyle} className="nav-btn">
          About
        </button>
        <button
          onClick={() => scrollToSection("contacts")}
          style={navStyle}
          className="nav-btn"
        >
          Contact
        </button>
      </nav>
      {/* Home Section */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          top: "-250px",
          right: "-100px",
          animation: "float 6s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          bottom: "-150px",
          left: "-50px",
          animation: "float 8s ease-in-out infinite"
        }} />
        <h1 style={{ 
          fontSize: "64px", 
          fontWeight: "800", 
          marginBottom: "24px",
          textAlign: "center",
          zIndex: 1,
          textShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
        }}>
          Welcome Home
        </h1>
        <p style={{
          fontSize: "24px",
          fontWeight: "300",
          maxWidth: "700px",
          textAlign: "center",
          lineHeight: "1.6",
          zIndex: 1,
          opacity: 0.95
        }}>
          Discover amazing experiences and transform your digital journey with our innovative solutions
        </p>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .nav-btn {
            position: relative;
          }
          .nav-btn::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #ffffff;
            transition: width 0.3s ease;
          }
          .nav-btn:hover::after {
            width: 100%;
          }
        `}</style>
      </section>
      {/* About Section */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          padding: "120px 48px",
          backgroundColor: "#ffffff",
          color: "#1e293b",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "900px", width: "100%" }}>
          <h2 style={{ 
            fontSize: "48px", 
            marginBottom: "32px",
            fontWeight: "700",
            color: "#0284c7",
            textAlign: "center"
          }}>
            About Us
          </h2>
          <div style={{
            backgroundColor: "#f0f9ff",
            padding: "48px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
            border: "1px solid #e0f2fe"
          }}>
            <p style={{ 
              fontSize: "20px", 
              lineHeight: "1.8",
              marginBottom: "24px",
              color: "#334155"
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{ 
              fontSize: "20px", 
              lineHeight: "1.8",
              marginBottom: "24px",
              color: "#334155"
            }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p style={{ 
              fontSize: "20px", 
              lineHeight: "1.8",
              color: "#334155"
            }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        style={{
          minHeight: "100vh",
          padding: "120px 48px",
          backgroundColor: "#ecfeff",
          color: "#1e293b",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "900px", width: "100%" }}>
          <h2 style={{ 
            fontSize: "48px", 
            marginBottom: "32px",
            fontWeight: "700",
            color: "#0284c7",
            textAlign: "center"
          }}>
            Get In Touch
          </h2>
          <div style={{
            backgroundColor: "#ffffff",
            padding: "48px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
            border: "1px solid #cffafe"
          }}>
            <p style={{ 
              fontSize: "20px", 
              lineHeight: "1.8",
              marginBottom: "24px",
              color: "#334155"
            }}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p style={{ 
              fontSize: "20px", 
              lineHeight: "1.8",
              marginBottom: "32px",
              color: "#334155"
            }}>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
            <div style={{
              backgroundColor: "#f0f9ff",
              padding: "24px",
              borderRadius: "12px",
              borderLeft: "4px solid #0284c7"
            }}>
              <p style={{ 
                fontSize: "18px", 
                fontWeight: "600",
                color: "#0284c7",
                marginBottom: "8px"
              }}>
                📧 Email Us
              </p>
              <p style={{ 
                fontSize: "20px", 
                color: "#334155"
              }}>
                contact@example.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
const navStyle = {
  background: "transparent",
  border: "none",
  color: "#ffffff",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
  transition: "all 0.3s ease",
  padding: "8px 16px",
  borderRadius: "6px",
};