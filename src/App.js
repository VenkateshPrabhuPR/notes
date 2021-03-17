
import './App.css';

function App() {
  return (
    <div>
      <div style={{
        display: 'inline-block',
        fontSize: 18,
        lineHeight: 6,
        position:'absolute',
        left:'36%',
       fontWeight: 500,
        textTransform: 'uppercase',
        color: '#fff'
      }}>
          Features
        </div>
        <div style={{
        display: 'inline-block',
        fontSize: 18,
        lineHeight: 6,
        position:'absolute',
        left:'43%',
       fontWeight: 500,
        textTransform: 'uppercase',
        color: '#fff'
      }}>
          Tours
        </div>
        <div style={{
        display: 'inline-block',
        fontSize: 18,
        lineHeight: 6,
        position:'absolute',
        left:'49%',
       fontWeight: 500,
        textTransform: 'uppercase',
        color: '#fff'
      }}>
          About
        </div>
        <div style={{
        display: 'inline-block',
        fontSize: 18,
        lineHeight: 6,
        position:'absolute',
        left:'55%',
       fontWeight: 500,
        textTransform: 'uppercase',
        color: '#fff'
      }}>
          Contact
        </div>
        <div style={{
        display: 'inline-block',
        fontSize: 18,
        lineHeight: 6,
        position:'absolute',
        left:'62%',
       fontWeight: 500,
        textTransform: 'uppercase',
        color: '#fff'
      }}>
          Blog
        </div>
        <input id="fn-n-searchInput" 
        class="fn-n-searchInput fn-inlineBlock fn-text-left fn-n-textTransDisable" 
        contenteditable="true" 
        placeholder="Search for Notes"/>

        <div class="fn-hidden-xs">
        Sign In
      </div>
     <h1 style={{ fontSize:45,
                  width: 100,
                  height: '38%',
                  whiteSpace:'nowrap',
                  position: 'absolute',
	                inset:'26%',
                }}>
       Free platform to manage your digital notes
     </h1>
     <h2 style={{fontWeight:'Lighter',width: 100,
                  height: '38%',
                  whiteSpace:'nowrap',
                  position: 'absolute',
	                inset:'38%',
                  left:'32%'}}>FactualNote is a mature tool to annotate web pages and files.</h2>
      <h2 style={{fontWeight:'Lighter',width: 100,
                  height: '38%',
                  whiteSpace:'nowrap',
                  position: 'absolute',
	                inset:'44%',
                  left:'35%'}}>Start a discussion,rate the information and review it.</h2>
    </div>
  );
}

export default App;
