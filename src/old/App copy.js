import netflix from './netflix.jpg';
import { FaSearch } from 'react-icons/fa';
import { FaArrowCircleLeft } from 'react-icons/fa';
import {FaArrowCircleRight } from 'react-icons/fa';
import './App.css';

function App() {

  return (
    <div className="App">
      <style>{'body { background-color: #131313; }'}</style>
      <header className="App-header">
      <img src={netflix} className="logo" alt="some example image" />
      
      <div className='headertext1'>Tv Shows</div>
          <div className='headertext2'>Movies</div >
          <div className='headertext3'>Recently Added</div >
          <div className='headertext4'>My List</div >
          
    <div  className="icon">  < FaSearch/> </div>  
      </header>
      {/* <div className="arrow"><FaArrowCircleLeft/></div> */}
      <div className='headerbox'>New Releases</div>
      <div className='wrap1'>
        <div className='timeline'>

        </div>
        <div className="moviescard" >
        <div> <img   className="setimage" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4209/1104209-v-5c51ee3fb954"/>
        </div></div>
        <div className="moviescard">
          <div ><img   className="setimage" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1347/1091347-v-1ddd8b64ce22"/></div>
        </div>
        <div className="moviescard">
          <div><img   className="setimage" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235" />
        </div></div>
        <div className="moviescard">
         <div> <img className='setimage' src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8690/1078690-v-0cb0fd8d0f22"/></div>
        </div>
        <div className="moviescard">
          <div><img className='setimage' src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1402/1111402-v-8a9736c534a8' /></div>
        </div>
        <div className="moviescard">
          <div ><img   className="setimage" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5883/1095883-v-c0fa911c0098"/></div>
        </div>
        <div className="moviescard">
          <div><img   className="setimage" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8631/1048631-v-d2c4728b76c1" />
        </div></div>
        <div className="moviescard">
         <div> <img className='setimage' src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8354/1108354-v-94b4c49f3938"/></div>
        </div>
        <div className="moviescard">
          <div><img className='setimage' src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1691/1011691-v-657881703c09' /></div>
        </div>
        
      
        
       
      </div>




      <div>
      <div className='headerbox1'>Popular Shows</div>
<div className='wrap'>
      <div className="rowposter"> </div>
        <div className="rowposter"> </div>
        <div className="rowposter"> </div>
        <div className="rowposter"> </div>
        <div className="rowposter"> </div>
        <div className="rowposter"> </div>
        </div>
                    </div>
                    <div>
      <div className='headerbox1'>Designed For You</div>
      <div className='wrap'>
      <div className="rowposter"> </div>
        <div className="rowposter"> </div>
        <div className="rowposter"> </div>
        <div className="rowposter"> </div>
        <div className="rowposter"> </div>
        <div className="rowposter"> </div>
</div>
      
                    </div>
                    <div>
      <div className='headerbox1'>Netflix originals</div>
      <div className='wrap'>
      <div className="rowposter"> </div>
        <div className="rowposter"> </div>
        <div className="rowposter"> </div>
        <div className="rowposter"> </div>
        <div className="rowposter"> </div>
        <div className="rowposter"> </div>

        </div>
                    </div>
      <div></div>
    
  
 
     
    </div>
  );
}

export default App;
