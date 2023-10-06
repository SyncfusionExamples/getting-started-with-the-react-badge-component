import { ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <button className='e-btn'>Inbox
        <span className='e-badge e-badge-overlap e-badge-primary e-badge-dot e-badge-bottom'></span>
      </button> */}
      <div className='container_div badge-toolbar'>
      <ToolbarComponent width='400px'>
        <div>
            <span className="e-icons e-menu"></span>
            <div className="header">Notification</div>
            <div>
                <div className="badge-block">
                    <div className="message icons"></div>
                    <span className='e-badge e-badge-primary e-badge-notification e-badge-overlap'>35</span>
                </div>
            </div>
            <div>
                <div className="badge-block">
                    <div className="user-profile icons"></div>
                    <span className="e-badge e-badge-success e-badge-notification e-badge-overlap">28</span>
                </div>
            </div>
            <div>
                <div className="badge-block">
                    <div className="love icons"></div>
                    <span className="e-badge e-badge-info e-badge-notification e-badge-overlap">98</span>
                </div>
            </div>
        </div>
      </ToolbarComponent>
      </div>
    </div>
  );
}

export default App;
