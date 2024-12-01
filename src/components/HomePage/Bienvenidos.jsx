const Bienvenidos = ({setActivePage}) => {
  const Landing = "Landing Page"
  return (
    <header className="m-4">
      <div>
        <h1 role="button" onClick={()=>setActivePage(Landing)}>Bienvenid@s</h1>
      </div>
    </header>
  );
};

export default Bienvenidos;
