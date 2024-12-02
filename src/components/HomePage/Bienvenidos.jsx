const Bienvenidos = ({ setActivePage }) => {

  return (
    <header className="m-4">
      <div>
        <h1 role="button" onClick={() => setActivePage("Landing Page")}>Bienvenid@s</h1>
      </div>
    </header>
  );
};

export default Bienvenidos;
