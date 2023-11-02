import css from './App.module.css';
import Sidebar from './components/Sidebar'
// import NavBarSimple from './components/NavBarSimple'
import NavBarForm from './components/NavBarForm';
import ContentAPIHooks from './components/ContentAPIHooks';
// import ContentAPI from './components/ContentAPI';
// import ContentHooks from './components/ContentHooks';
// import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      {/* <NavBarSimple />  */}
      <NavBarForm />
      {/* <Content /> */}
      {/* <ContentHooks /> */}
      {/* <ContentAPI /> */}
      <ContentAPIHooks />



    </div>
  );
}

export default App;