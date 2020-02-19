import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


const localStorageMock = {
    
    "jest": {
        
        "setupTestFrameworkScriptFile": "<rootDir>/src/setupTests.js"
       }
  };


global.localStorage = localStorageMock;


// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({
//     adapter: new Adapter()
// })